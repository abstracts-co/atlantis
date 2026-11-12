#!/usr/bin/env node
// Height of the ground and the sea floor for any box on Earth, from Terrain Tiles (Mapzen, on AWS Open Data).
//
//   node tools/dem.mjs --bbox 25.30,36.33,25.50,36.50 --zoom 13 --out out/santorini
//
// Writes  <out>.f32   heights in metres, 32-bit floats, little-endian, row by row from the north-west corner
//         <out>.json  size, corners, metres per pixel, what the data is and its credit
//         <out>.png   a shaded picture to look at
// Within a few hundred metres of a coast the depth is the nearest real sounding (see extendSea below): good for a
// picture, not for a claim about what lies at that spot.
// Zoom 0-15. One pixel is about 40075 km x cos(latitude) / 2^zoom / 256: zoom 13 is 19 m at the equator, zoom 15 is 4.8 m.
// The pixel size is not the real detail: land comes from 30 m surveys in most of the world (10 m or finer in the US and
// parts of Europe), the sea floor from soundings at 500 m to 2 km. Sea-floor depth exists only up to zoom 10, so above
// that this tool fills the sea from zoom 10, as the globe does.
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { decodePng, terrarium, encodePng } from './png.mjs';
import { args, parseBox, get, pool, lonToX, latToY, xToLon, yToLat, metresPerPixel } from './geo.mjs';

const URL_ = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';
const tile = async (z, x, y) => {
  const n = 2 ** z;
  const buf = await get(URL_.replace('{z}', z).replace('{x}', ((x % n) + n) % n).replace('{y}', y));
  return buf ? terrarium(decodePng(buf)) : null;
};

// Heights for a box as one grid. Returns { width, height, data: Float32Array, x0, y0, zoom } in tile pixels.
export const mosaic = async (bbox, zoom) => {
  const [w, s, e, n] = bbox;
  const px0 = Math.floor(lonToX(w, zoom) * 256), px1 = Math.ceil(lonToX(e, zoom) * 256);
  const py0 = Math.floor(latToY(n, zoom) * 256), py1 = Math.ceil(latToY(s, zoom) * 256);
  const width = px1 - px0, height = py1 - py0;
  if (width * height > 64e6) throw new Error(`That is ${width} x ${height} pixels. Use a smaller box or a lower --zoom.`);
  const data = new Float32Array(width * height);
  const jobs = [];
  for (let ty = Math.floor(py0 / 256); ty <= Math.floor((py1 - 1) / 256); ty++) for (let tx = Math.floor(px0 / 256); tx <= Math.floor((px1 - 1) / 256); tx++) jobs.push([tx, ty]);
  await pool(jobs, 6, async ([tx, ty]) => {
    const t = await tile(zoom, tx, ty);
    for (let y = Math.max(py0, ty * 256); y < Math.min(py1, ty * 256 + 256); y++) for (let x = Math.max(px0, tx * 256); x < Math.min(px1, tx * 256 + 256); x++) data[(y - py0) * width + (x - px0)] = t ? t[(y - ty * 256) * 256 + (x - tx * 256)] : NaN;
  });
  return { width, height, data, x0: px0, y0: py0, zoom };
};

export const dem = async (bbox, zoom) => {
  const m = await mosaic(bbox, zoom);
  if (zoom > 10) {
    // Sea in the fine tiles is stored as 0 (and a few broken values on seams): take its depth from zoom 10,
    // read a little wider than the box so the edges have neighbours.
    const pad = 0.03;
    const sea = await mosaic([bbox[0] - pad, Math.max(bbox[1] - pad, -85), bbox[2] + pad, Math.min(bbox[3] + pad, 85)], 10);
    const ext = extendSea(sea.data, sea.width, sea.height);
    const k = 2 ** (zoom - 10);
    const px = (x, y) => ext[Math.min(Math.max(y, 0), sea.height - 1) * sea.width + Math.min(Math.max(x, 0), sea.width - 1)];
    for (let y = 0; y < m.height; y++) for (let x = 0; x < m.width; x++) {
      const i = y * m.width + x, v = m.data[i];
      if (v > 0.001) continue;
      const ax = (m.x0 + x + 0.5) / k - 0.5 - sea.x0, ay = (m.y0 + y + 0.5) / k - 0.5 - sea.y0;
      const x0 = Math.floor(ax), y0 = Math.floor(ay), fx = ax - x0, fy = ay - y0;
      const a = (px(x0, y0) * (1 - fx) + px(x0 + 1, y0) * fx) * (1 - fy) + (px(x0, y0 + 1) * (1 - fx) + px(x0 + 1, y0 + 1) * fx) * fy;
      // Where even the widened sea doesn't reach (a lagoon, a river mouth), it is water of unknown depth.
      m.data[i] = a < -0.5 ? a : !Number.isFinite(v) || v < -11100 ? -0.5 : Math.min(v, -0.5);
    }
  }
  const lat = (bbox[1] + bbox[3]) / 2;
  return { ...m, bbox: [xToLon(m.x0 / 256, zoom), yToLat((m.y0 + m.height) / 256, zoom), xToLon((m.x0 + m.width) / 256, zoom), yToLat(m.y0 / 256, zoom)], metresPerPixel: metresPerPixel(lat, zoom) };
};

// The coarse zoom-10 grid draws its coastline in blocks about 150 m across, a little outside the true shore, and stores
// land heights inside it. Read as it is, that leaves a flat ledge around every island. So the sea is first spread four
// pixels into the coarse land: each land pixel next to the sea takes the average depth of its sea neighbours. Fine pixels
// that are sea then read this grid. Depth within a few hundred metres of a coast is therefore the nearest real sounding,
// not a measurement of that spot. The globe uses the same rule.
export const extendSea = (data, w, h, rounds = 4) => {
  let e = Float32Array.from(data);
  for (let r = 0; r < rounds; r++) {
    const next = Float32Array.from(e);
    let changed = 0;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (e[i] < -0.5) continue;
      let sum = 0, n = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const xx = x + dx, yy = y + dy;
        if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
        const v = e[yy * w + xx];
        if (v < -0.5) { sum += v; n++; }
      }
      if (n) { next[i] = sum / n; changed++; }
    }
    e = next;
    if (!changed) break;
  }
  return e;
};

// Shaded relief: light from a compass direction and a height above the horizon. Returns grey bytes.
export const hillshade = (d, { azimuth = 315, altitude = 35, exaggerate = 1 } = {}) => {
  const { width: w, height: h, data, metresPerPixel: mpp } = d;
  const az = (azimuth * Math.PI) / 180, alt = (altitude * Math.PI) / 180;
  const lx = Math.sin(az) * Math.cos(alt), ly = Math.cos(az) * Math.cos(alt), lz = Math.sin(alt);
  const out = new Uint8Array(w * h);
  const at = (x, y) => data[Math.min(Math.max(y, 0), h - 1) * w + Math.min(Math.max(x, 0), w - 1)];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const gx = ((at(x + 1, y) - at(x - 1, y)) / (2 * mpp)) * exaggerate, gy = ((at(x, y - 1) - at(x, y + 1)) / (2 * mpp)) * exaggerate;
    const n = 1 / Math.hypot(gx, gy, 1);
    out[y * w + x] = Math.max(0, Math.min(255, Math.round(255 * Math.max(0, (-gx * lx - gy * ly + lz) * n))));
  }
  return out;
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = args();
  if (!a.bbox || !a.out) { console.error('Usage: node tools/dem.mjs --bbox west,south,east,north --zoom 13 --out out/name'); process.exit(2); }
  const zoom = Math.max(0, Math.min(15, Number(a.zoom ?? 12)));
  const d = await dem(parseBox(a.bbox), zoom);
  let min = Infinity, max = -Infinity;
  for (const v of d.data) { if (v < min) min = v; if (v > max) max = v; }
  await mkdir(dirname(a.out), { recursive: true });
  await writeFile(`${a.out}.f32`, Buffer.from(d.data.buffer));
  await writeFile(`${a.out}.png`, encodePng(d.width, d.height, 1, hillshade(d, { exaggerate: Number(a.exaggerate ?? 1) })));
  const meta = { width: d.width, height: d.height, bbox: d.bbox, zoom, metres_per_pixel: Number(d.metresPerPixel.toFixed(3)), projection: 'Web Mercator (EPSG:3857); bbox is [west, south, east, north] in degrees', min: Number(min.toFixed(1)), max: Number(max.toFixed(1)), units: 'metres above sea level; negative is sea floor', source: 'Terrain Tiles (Mapzen), AWS Open Data: https://registry.opendata.aws/terrain-tiles/', credit: 'Terrain Tiles: see https://github.com/tilezen/joerd/blob/master/docs/attribution.md', files: { heights: 'float32 little-endian, row-major from the north-west corner', picture: 'hillshade, light from the north-west' } };
  await writeFile(`${a.out}.json`, `${JSON.stringify(meta, null, 2)}\n`);
  console.log(`${a.out}.f32  ${d.width} x ${d.height} px, ${meta.metres_per_pixel} m a pixel, ${meta.min} to ${meta.max} m`);
}
