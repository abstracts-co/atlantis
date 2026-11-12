#!/usr/bin/env node
// A picture of any listed data source for a box on Earth: lidar relief, sea-floor depth, satellite, old maps.
//
//   node tools/layer.mjs --list                                   # the sources that can be fetched this way
//   node tools/layer.mjs --list --bbox -83.5,39.0,-83.4,39.1      # only those that cover a box
//   node tools/layer.mjs --source usgs-3dep-elevation --bbox -83.45,39.01,-83.41,39.04 --out out/serpent.png
//   node tools/layer.mjs --source <id> --variant <variant id> --bbox ... --zoom 15 --out out/x.png
//
// Services that draw any box (WMS, ArcGIS) are asked for one picture, at most 2048 pixels wide. Tiled sources are
// stitched: PNG tiles into one PNG, JPEG tiles into a folder with an index.html that lays them out, because this tool
// reads PNG only and has no dependencies. A .json beside the picture records the box, the source and its credit: keep it
// with the picture and repeat the credit wherever you post it.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { decodePng, encodePng } from './png.mjs';
import { args, parseBox, get, pool, lonToX, latToY, xToLon, yToLat, lonToMeters, latToMeters } from './geo.mjs';

const FILE = new URL('../data/sources.json', import.meta.url);
const SHOWABLE = ['xyz', 'wmts', 'wms', 'arcgis-image', 'arcgis-map'];
const overlaps = (s, b) => !b || !s.coverage?.bbox || (s.coverage.bbox[2] > b[0] && s.coverage.bbox[0] < b[2] && s.coverage.bbox[3] > b[1] && s.coverage.bbox[1] < b[3]);

const a = args();
const { sources } = JSON.parse(await readFile(FILE, 'utf8'));
const box = a.bbox ? parseBox(a.bbox) : null;

if (a.list) {
  for (const s of sources.filter((s) => SHOWABLE.includes(s.access?.type) && s.access.url && overlaps(s, box))) {
    console.log(`${s.id.padEnd(34)} ${String(s.resolution_m ?? '?').padStart(6)} m  ${s.name}${s.access.key_required ? '  (needs a key)' : ''}`);
    for (const v of s.access.variants ?? []) console.log(`${''.padEnd(34)}         --variant ${v.id}: ${v.name ?? ''}`);
  }
  process.exit(0);
}

const s = sources.find((x) => x.id === a.source);
if (!s || !box || !a.out) { console.error('Usage: node tools/layer.mjs --source <id> --bbox west,south,east,north --out out/name.png   (or --list)'); process.exit(2); }
if (!SHOWABLE.includes(s.access?.type)) { console.error(`${s.id} is a ${s.access?.type} source. Its notes say how to read it: ${s.notes ?? s.docs ?? ''}`); process.exit(2); }
if (s.access.key_required) { console.error(`${s.id} needs a key. Ask the member for theirs. ${s.docs ?? ''}`); process.exit(2); }
const variant = a.variant ? (s.access.variants ?? []).find((v) => v.id === a.variant) : null;
if (a.variant && !variant) { console.error(`No variant ${a.variant}. Try --list.`); process.exit(2); }
const access = { ...s.access, ...(variant ?? {}) };
const meta = { source: s.id, variant: variant?.id ?? null, name: s.name, bbox: box, credit: s.license?.attribution ?? s.name, licence: s.license?.name ?? null, licence_url: s.license?.url ?? null, fetched: new Date().toISOString().slice(0, 10) };
await mkdir(dirname(a.out), { recursive: true });

if (access.url.includes('{bbox}')) {
  const x0 = lonToMeters(box[0]), x1 = lonToMeters(box[2]), y0 = latToMeters(box[1]), y1 = latToMeters(box[3]);
  const width = Math.min(2048, Math.max(256, Number(a.width ?? 1536))), height = Math.max(1, Math.round((width * (y1 - y0)) / (x1 - x0)));
  // The catalogue's templates carry one {size} for square tiles; here width and height differ, so fill the common spellings.
  let url = access.url.replace('{bbox}', `${x0},${y0},${x1},${y1}`);
  url = url.replace(/size=\{size\},\{size\}/i, `size=${width},${height}`).replace(/width=\{size\}/i, `width=${width}`).replace(/height=\{size\}/i, `height=${height}`).replaceAll('{size}', String(width));
  const buf = await get(url);
  if (!buf) { console.error('The service returned nothing for that box.'); process.exit(1); }
  const png = buf[0] === 0x89, out = png ? a.out : a.out.replace(/\.png$/i, '.jpg');
  await writeFile(out, buf);
  await writeFile(`${out}.json`, `${JSON.stringify({ ...meta, width, height, metres_per_pixel: Number((((x1 - x0) / width) * Math.cos((((box[1] + box[3]) / 2) * Math.PI) / 180)).toFixed(2)), projection: 'Web Mercator (EPSG:3857)', url }, null, 2)}\n`);
  console.log(`${out}  ${width} x ${height} px. Credit: ${meta.credit}`);
} else {
  const z = Math.max(access.min_zoom ?? 0, Math.min(access.max_zoom ?? 15, Number(a.zoom ?? 14)));
  const tx0 = Math.floor(lonToX(box[0], z)), tx1 = Math.floor(lonToX(box[2], z)), ty0 = Math.floor(latToY(box[3], z)), ty1 = Math.floor(latToY(box[1], z));
  const cols = tx1 - tx0 + 1, rows = ty1 - ty0 + 1;
  if (cols * rows > 400) { console.error(`That is ${cols * rows} tiles. Use a smaller box or a lower --zoom (now ${z}).`); process.exit(2); }
  const jobs = [];
  for (let y = ty0; y <= ty1; y++) for (let x = tx0; x <= tx1; x++) jobs.push([x, y]);
  const tiles = await pool(jobs, 4, async ([x, y]) => get(access.url.replace('{z}', z).replace('{x}', x).replace('{y}', y).replace('{s}', access.subdomains?.[0] ?? '')));
  const bbox = [xToLon(tx0, z), yToLat(ty1 + 1, z), xToLon(tx1 + 1, z), yToLat(ty0, z)];
  const first = tiles.find(Boolean);
  if (!first) { console.error('No tiles came back for that box at that zoom.'); process.exit(1); }
  if (first[0] === 0x89) {
    const out = new Uint8Array(cols * 256 * rows * 256 * 4);
    tiles.forEach((buf, i) => {
      if (!buf) return;
      const t = decodePng(buf);
      if (t.w !== 256 || t.h !== 256) throw new Error(`Tiles are ${t.w} px, not 256.`);
      const ox = (i % cols) * 256, oy = Math.floor(i / cols) * 256;
      for (let p = 0; p < 65536; p++) {
        const o = ((oy + (p >> 8)) * cols * 256 + ox + (p & 255)) * 4, q = p * t.ch;
        if (t.type === 3) { const c = t.data[p] * 3; out[o] = t.palette[c]; out[o + 1] = t.palette[c + 1]; out[o + 2] = t.palette[c + 2]; out[o + 3] = 255; }
        else if (t.ch <= 2) { out[o] = out[o + 1] = out[o + 2] = t.data[q]; out[o + 3] = t.ch === 2 ? t.data[q + 1] : 255; }
        else { out[o] = t.data[q]; out[o + 1] = t.data[q + 1]; out[o + 2] = t.data[q + 2]; out[o + 3] = t.ch === 4 ? t.data[q + 3] : 255; }
      }
    });
    await writeFile(a.out, encodePng(cols * 256, rows * 256, 4, out));
    await writeFile(`${a.out}.json`, `${JSON.stringify({ ...meta, bbox, zoom: z, width: cols * 256, height: rows * 256, projection: 'Web Mercator (EPSG:3857)' }, null, 2)}\n`);
    console.log(`${a.out}  ${cols * 256} x ${rows * 256} px at zoom ${z}. Credit: ${meta.credit}`);
  } else {
    const dir = a.out.replace(/\.png$/i, '');
    await mkdir(dir, { recursive: true });
    await Promise.all(tiles.map((buf, i) => buf && writeFile(`${dir}/${i}.jpg`, buf)));
    await writeFile(`${dir}/index.html`, `<!doctype html><title>${s.name}</title><body style="margin:0;background:#111"><div style="display:grid;grid-template-columns:repeat(${cols},256px)">${tiles.map((b, i) => (b ? `<img src="${i}.jpg" width="256" height="256">` : '<i style="width:256px;height:256px"></i>')).join('')}</div><p style="color:#aaa;font:13px sans-serif;padding:8px">${meta.credit}</p>`);
    await writeFile(`${dir}/tiles.json`, `${JSON.stringify({ ...meta, bbox, zoom: z, columns: cols, rows, projection: 'Web Mercator (EPSG:3857)' }, null, 2)}\n`);
    console.log(`${dir}/index.html  ${cols} x ${rows} JPEG tiles at zoom ${z}: open it in a browser, or stitch the numbered files row by row. Credit: ${meta.credit}`);
  }
}
