// Finer sea-floor depth for the places that have a scene. The open elevation tiles the globe is built on take their
// sea floor from a coarse world grid that smooths small banks away: Spartel Bank's top, 72 m down in surveyed grids,
// is 220 m down in the tiles. So each such place ships a small depth grid cut from a finer open compilation
// (build/make-patches.mjs writes them, with their source and licence), and it replaces the tiles' sea floor inside
// its box. Land is left alone: the tiles' land is finer than these grids.
import { DEG, xToLon, yToLat, clamp, smooth } from './geo.js';

export const patches = [];

// The depth a patch gives at a point (degrees), as [metres, weight], or null where no patch reaches.
// The weight falls to nothing over the outer twelfth of the box, so a patch meets the tiles round it without a step.
export const patchAt = (lon, lat) => {
  for (const p of patches) {
    const [w, s, e, n] = p.bbox;
    if (lon <= w || lon >= e || lat <= s || lat >= n) continue;
    const u = clamp(((lon - w) / (e - w)) * p.width - 0.5, 0, p.width - 1.001), v = clamp(((n - lat) / (n - s)) * p.height - 0.5, 0, p.height - 1.001);
    const x = u | 0, y = v | 0, fx = u - x, fy = v - y, o = y * p.width + x, d = p.data;
    const h = (d[o] * (1 - fx) + d[o + 1] * fx) * (1 - fy) + (d[o + p.width] * (1 - fx) + d[o + p.width + 1] * fx) * fy;
    const edge = Math.min((lon - w) / (e - w), (e - lon) / (e - w), (lat - s) / (n - s), (n - lat) / (n - s));
    return [h, smooth(clamp(edge * 12, 0, 1))];
  }
  return null;
};

// The sea floor a point should have: the patch's depth where there is one and both it and the tile say sea.
export const withPatch = (h, lon, lat) => {
  if (!patches.length || h > 0.5) return h;
  const p = patchAt(lon, lat);
  return p && p[0] < -0.5 ? h + (p[0] - h) * p[1] : h;
};

// Rewrite one tile's 256 x 256 heights where a patch covers it. Returns true if anything changed.
export const applyPatches = (h, tile) => {
  if (!patches.length) return false;
  const west = xToLon(tile.x, tile.z) / DEG, east = xToLon(tile.x + 1, tile.z) / DEG, north = yToLat(tile.y, tile.z) / DEG, south = yToLat(tile.y + 1, tile.z) / DEG;
  if (!patches.some(({ bbox: [w, s, e, n] }) => east > w && west < e && north > s && south < n)) return false;
  let hit = false;
  for (let y = 0, i = 0; y < 256; y++) {
    const lat = yToLat(tile.y + (y + 0.5) / 256, tile.z) / DEG;
    for (let x = 0; x < 256; x++, i++) {
      const was = h[i];
      if (was > 0.5) continue;
      const now = withPatch(was, west + ((east - west) * (x + 0.5)) / 256, lat);
      if (now !== was) { h[i] = now; hit = true; }
    }
  }
  return hit;
};

// Does a tile lie on a patch? Tiles that do are fetched down to the patch's own detail even where the sea is open.
export const onPatch = (tile) => {
  if (!patches.length || tile.z > 11) return false;
  const west = xToLon(tile.x, tile.z) / DEG, east = xToLon(tile.x + 1, tile.z) / DEG, north = yToLat(tile.y, tile.z) / DEG, south = yToLat(tile.y + 1, tile.z) / DEG;
  return patches.some(({ bbox: [w, s, e, n] }) => east > w && west < e && north > s && south < n);
};

// Load a patch: a picture whose colours hold heights the way the elevation tiles do. meta: { id, file, bbox, width, height, credit }.
const loading = new Map();
export const loadPatch = (meta, base = './') => {
  if (!loading.has(meta.id)) loading.set(meta.id, (async () => {
    // A one-file copy of the page carries the grids inside it.
    const r = await fetch(globalThis.__PATCHES__?.[meta.file] ?? base + meta.file);
    if (!r.ok) throw new Error(`patch ${meta.id}: HTTP ${r.status}`);
    const bitmap = await createImageBitmap(await r.blob(), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    const canvas = typeof OffscreenCanvas === 'undefined' ? Object.assign(document.createElement('canvas'), { width: bitmap.width, height: bitmap.height }) : new OffscreenCanvas(bitmap.width, bitmap.height);
    const g = canvas.getContext('2d', { willReadFrequently: true });
    g.drawImage(bitmap, 0, 0);
    const px = g.getImageData(0, 0, bitmap.width, bitmap.height).data, data = new Float32Array(bitmap.width * bitmap.height);
    for (let i = 0, j = 0; i < data.length; i++, j += 4) data[i] = px[j] * 256 + px[j + 1] + px[j + 2] / 256 - 32768;
    const patch = { ...meta, width: bitmap.width, height: bitmap.height, data };
    bitmap.close?.();
    patches.push(patch);
    return patch;
  })().catch((e) => { loading.delete(meta.id); console.warn(e.message); return null; }));
  return loading.get(meta.id);
};
