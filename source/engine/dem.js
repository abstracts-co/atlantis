// Heights straight from the open elevation tiles, for measuring a place. It does not depend on what the globe happens
// to have loaded, so a measurement comes out the same on every screen and the same as tools/dem.mjs gives an agent.
// Terrain Tiles hold real sea-floor depth only up to zoom 10 (data/README.md), so nothing here reads finer than that.
import { lonToX, latToY, DEG, clamp } from './geo.js';
import { withPatch } from './patches.js';

const TILES = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';
const cache = new Map();
let ctx = null;

const load = (z, x, y) => {
  const key = `${z}/${x}/${y}`;
  if (!cache.has(key)) cache.set(key, (async () => {
    const r = await fetch(TILES.replace('{z}', z).replace('{x}', x).replace('{y}', y), { signal: AbortSignal.timeout(25000) });
    if (!r.ok) throw new Error(`elevation tile ${key}: HTTP ${r.status}`);
    const bitmap = await createImageBitmap(await r.blob(), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    ctx ??= (typeof OffscreenCanvas === 'undefined' ? Object.assign(document.createElement('canvas'), { width: 256, height: 256 }) : new OffscreenCanvas(256, 256)).getContext('2d', { willReadFrequently: true });
    ctx.clearRect(0, 0, 256, 256);
    ctx.drawImage(bitmap, 0, 0);
    bitmap.close?.();
    const d = ctx.getImageData(0, 0, 256, 256).data, h = new Float32Array(65536);
    for (let i = 0; i < 65536; i++) h[i] = d[i * 4] * 256 + d[i * 4 + 1] + d[i * 4 + 2] / 256 - 32768;
    return h;
  })().catch((e) => { cache.delete(key); throw e; }));
  return cache.get(key);
};

// Heights in metres at each [lon, lat] (degrees), read from the tiles at zoom z (10 at most).
export const heights = async (points, z) => {
  z = clamp(Math.round(z), 0, 10);
  const n = 2 ** z, need = new Map();
  const where = points.map(([lon, lat]) => {
    const fx = lonToX(lon * DEG, z), fy = clamp(latToY(lat * DEG, z), 0, n - 1e-6);
    const x = ((Math.floor(fx) % n) + n) % n, y = Math.floor(fy);
    need.set(`${x}/${y}`, [x, y]);
    return [`${x}/${y}`, clamp(Math.floor((fx - Math.floor(fx)) * 256), 0, 255), clamp(Math.floor((fy - y) * 256), 0, 255)];
  });
  const tiles = new Map(await Promise.all([...need].map(async ([key, [x, y]]) => [key, await load(z, x, y)])));
  // A place's own finer depth grid, where one is loaded, stands in for the tiles' coarse sea floor, as on the globe.
  return where.map(([key, px, py], i) => withPatch(tiles.get(key)[py * 256 + px], points[i][0], points[i][1]));
};

// The zoom whose pixels are about `metres` wide at that latitude.
export const zoomFor = (metres, latDeg) => clamp(Math.round(Math.log2((40075016.7 * Math.cos(latDeg * DEG)) / 256 / metres)), 0, 10);
