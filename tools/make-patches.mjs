#!/usr/bin/env node
// Cuts a finer sea-floor grid for each place that needs one and writes it as data/patches/<site>.png, with
// data/patches/index.json saying where each came from. The globe lays these over the coarse sea floor of the open
// elevation tiles (source/engine/patches.js): the tiles smooth small banks away, and a scene about a drowned island
// is no use if the island is not in the data.
//   node tools/make-patches.mjs [site ...]      (no names: all of them)
// Source: the GMRT synthesis, through its GridServer (entry gmrt-point-and-grid in data/sources.json, CC BY 4.0).
// Each picture stores heights the way Terrain Tiles do: metres = red x 256 + green + blue / 256 - 32768.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { encodePng } from '../tools/png.mjs';
import { mosaic } from '../tools/dem.mjs';
import { lonToX, latToY } from '../tools/geo.mjs';

const top = new URL('..', import.meta.url).pathname, out = `${top}data/patches/`;
// The boxes are ours: each takes in the part of the scene that lies under water and matters to the claim.
const BOXES = {
  'spartel-bank': { bbox: [-6.36, 35.70, -5.575, 36.18], why: 'The tiles put the top of the bank about 220 m down; surveyed grids put it about 72 m down.' },
  santorini: { bbox: [25.18, 36.24, 25.62, 36.58], why: 'The caldera floor, the strait the sea broke in through, and Kolumbo.' },
  'cyprus-basin': { bbox: [33.6, 33.9, 35.6, 35.3], why: 'The sea bed where the hill and walls were announced, and the ridges round it.' },
  'bimini-road': { bbox: [-79.36, 25.68, -79.20, 25.82], why: 'The shallow bank off North Bimini.' },
  helike: { bbox: [22.02, 38.18, 22.30, 38.36], why: 'The floor of the Gulf of Corinth off the Helike delta, where the sonar searches were made.' },
};
const src = JSON.parse(readFileSync(`${top}data/sources.json`, 'utf8')).sources.find((s) => s.id === 'gmrt-point-and-grid');
const MAX = 720;   // no picture wider or taller than this

const fetchGrid = async ([w, s, e, n], metres) => {
  const url = `https://www.gmrt.org/services/GridServer?north=${n}&south=${s}&east=${e}&west=${w}&layer=topo&format=esriascii&mresolution=${metres}`;
  const r = await fetch(url, { headers: { 'User-Agent': 'abstracts-atlantis/0.1 (open research; tools/make-patches.mjs)' }, signal: AbortSignal.timeout(180000) });
  if (!r.ok) throw new Error(`GridServer HTTP ${r.status}`);
  const text = await r.text(), head = {};
  let at = 0;
  for (let i = 0; i < 6; i++) { const end = text.indexOf('\n', at), [k, v] = text.slice(at, end).trim().split(/\s+/); head[k.toLowerCase()] = Number(v); at = end + 1; }
  const data = Float32Array.from(text.slice(at).trim().split(/\s+/), Number);
  if (data.length !== head.ncols * head.nrows) throw new Error(`grid size ${data.length} is not ${head.ncols} x ${head.nrows}`);
  return { width: head.ncols, height: head.nrows, data, nodata: head.nodata_value, bbox: [head.xllcorner, head.yllcorner, head.xllcorner + head.ncols * head.cellsize, head.yllcorner + head.nrows * head.cellsize], cell: head.cellsize, url };
};
// Halve a grid by averaging two-by-two blocks, until it fits.
const shrink = (g) => {
  while (g.width > MAX || g.height > MAX) {
    const w = g.width >> 1, h = g.height >> 1, d = new Float32Array(w * h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      let sum = 0, n = 0;
      for (const o of [0, 1, g.width, g.width + 1]) { const v = g.data[2 * y * g.width + 2 * x + o]; if (v !== g.nodata && Number.isFinite(v)) { sum += v; n++; } }
      d[y * w + x] = n ? sum / n : g.nodata;
    }
    g = { ...g, width: w, height: h, data: d, cell: g.cell * 2, bbox: [g.bbox[0], g.bbox[3] - h * g.cell * 2, g.bbox[0] + w * g.cell * 2, g.bbox[3]] };
  }
  return g;
};

const index = (() => { try { return JSON.parse(readFileSync(`${out}index.json`, 'utf8')); } catch { return { what: 'Finer sea-floor grids laid over the open elevation tiles at the places with scenes. Made by tools/make-patches.mjs.', patches: [] }; } })();
mkdirSync(out, { recursive: true });
const wanted = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(BOXES);
for (const id of wanted) {
  const box = BOXES[id];
  if (!box) { console.log(`skip   ${id}: no box defined`); continue; }
  try {
    const span = Math.max(box.bbox[2] - box.bbox[0], box.bbox[3] - box.bbox[1]) * 111000;
    const g = shrink(await fetchGrid(box.bbox, Math.max(40, Math.round(span / MAX))));
    // How far the tiles are from this grid, over the sea: read both on a coarse lattice.
    const t = await mosaic(g.bbox, 10);
    let n = 0, sum = 0, worst = 0, shallow = -1e9;
    for (let j = 0; j < 60; j++) for (let i = 0; i < 90; i++) {
      const lon = g.bbox[0] + ((i + 0.5) / 90) * (g.bbox[2] - g.bbox[0]), lat = g.bbox[3] - ((j + 0.5) / 60) * (g.bbox[3] - g.bbox[1]);
      const a = g.data[Math.min(g.height - 1, Math.floor((j + 0.5) / 60 * g.height)) * g.width + Math.min(g.width - 1, Math.floor((i + 0.5) / 90 * g.width))];
      const tx = Math.floor(lonToX(lon, 10) * 256) - t.x0, ty = Math.floor(latToY(lat, 10) * 256) - t.y0;
      const b = t.data[Math.min(t.height - 1, Math.max(0, ty)) * t.width + Math.min(t.width - 1, Math.max(0, tx))];
      if (a === g.nodata || !(a < -0.5) || !(b < 0.5)) continue;
      n++; sum += Math.abs(a - b); worst = Math.max(worst, Math.abs(a - b)); shallow = Math.max(shallow, a);
    }
    const rgb = new Uint8Array(g.width * g.height * 3);
    let min = Infinity, max = -Infinity;
    for (let i = 0; i < g.data.length; i++) {
      // No data is written as high ground, which the globe never takes from a patch.
      const h = g.data[i] === g.nodata || !Number.isFinite(g.data[i]) ? 9000 : Math.max(-11000, Math.min(9000, g.data[i]));
      if (h < 9000) { min = Math.min(min, h); max = Math.max(max, h); }
      const v = h + 32768;
      rgb[i * 3] = Math.floor(v / 256); rgb[i * 3 + 1] = Math.floor(v) % 256; rgb[i * 3 + 2] = Math.floor((v - Math.floor(v)) * 256);
    }
    const png = encodePng(g.width, g.height, 3, rgb);
    writeFileSync(`${out}${id}.png`, png);
    const meta = {
      id, file: `patches/${id}.png`, bbox: g.bbox.map((v) => Math.round(v * 1e6) / 1e6), width: g.width, height: g.height,
      metres_per_pixel: Math.round(g.cell * 111320), why: box.why,
      source: src.name, source_id: src.id, licence: src.license?.name, credit: src.license?.attribution, docs: src.docs ?? null, request: g.url, made: new Date().toISOString().slice(0, 10),
      range_m: [Math.round(min), Math.round(max)],
      against_tiles: n ? { sea_points: n, mean_difference_m: Math.round(sum / n), largest_difference_m: Math.round(worst), shallowest_m: Math.round(shallow) } : null,
    };
    index.patches = [...index.patches.filter((p) => p.id !== id), meta].sort((a, b) => a.id.localeCompare(b.id));
    console.log(`ok     ${id}: ${g.width} x ${g.height}, ${meta.metres_per_pixel} m a pixel, ${(png.length / 1024).toFixed(0)} KB; against the tiles: mean ${meta.against_tiles?.mean_difference_m} m, largest ${meta.against_tiles?.largest_difference_m} m over ${n} sea points`);
  } catch (e) { console.log(`FAIL   ${id}: ${e.message}`); }
}
writeFileSync(`${out}index.json`, `${JSON.stringify(index, null, 1)}\n`);
