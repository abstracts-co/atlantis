#!/usr/bin/env node
// Scores the whole Earth against the parts of Plato's description that the shape of the land can answer, and writes
// the result for the globe to draw: data/worldfit.png (one pixel for each 10 km cell) and data/worldfit.json (what
// each clue is, the thresholds used, the totals, and the best-matching drowned lands).
//   node tools/make-worldfit.mjs [--cache <file>]
// Heights: Terrain Tiles at zoom 4 (about 10 km a cell at the equator), one sea level for the whole planet.
// The five clues, each tied to a passage (ids from data/plato.json):
//   sank       land at Plato's date (sea 50 m lower) that is open sea today                 nine-thousand-years, sank-in-a-day-and-night
//   atlantic   in the Atlantic or a sea that opens to it, outside the strait                beyond-pillars
//   plain      in level low ground of the size he gives, 3,000 by 2,000 stades              great-plain
//   mountains  higher ground on its north side than on its south                            mountains-shelter-north
//   island     the land it stood on was an island then, not part of a continent             the island itself (Timaeus 24e)
// The thresholds are ours and are written into worldfit.json. A high score says the landscape resembles the
// description. It does not say anything was ever built there.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { mosaic } from '../tools/dem.mjs';
import { encodePng } from '../tools/png.mjs';

const top = new URL('..', import.meta.url).pathname;
const arg = (k) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : null; };
const Z = 4, N = 256 * 2 ** Z, SEA_THEN = -50, STADION = 185;
const RULES = {
  sea_then_m: SEA_THEN,
  plain: { long_km: (3000 * STADION) / 1000, wide_km: (2000 * STADION) / 1000, low_ground_max_m_above_today: 150, share_needed: 0.6 },
  mountains: { band_from_km: 185, band_to_km: 485, north_mean_at_least_m: 300, north_minus_south_at_least_m: 200 },
  island: { smaller_than_km2: 2.5e6 },
  near_old_ice_beyond_lat: 45,
};

// ---------- heights ----------
const cache = arg('cache');
let H;
if (cache && existsSync(cache)) H = new Float32Array(readFileSync(cache).buffer.slice(0));
else {
  const m = await mosaic([-180, -85.0511, 180, 85.0511], Z);
  if (m.width !== N || m.height !== N) throw new Error(`expected ${N} x ${N}, got ${m.width} x ${m.height}`);
  H = m.data;
  if (cache) writeFileSync(cache, Buffer.from(H.buffer));
}
const lonOf = (x) => ((x + 0.5) / N) * 360 - 180;
const latOf = (y) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * (y + 0.5)) / N))) * 180) / Math.PI;
const xOf = (lon) => Math.min(N - 1, Math.max(0, Math.floor(((lon + 180) / 360) * N)));
const yOf = (lat) => { const l = (lat * Math.PI) / 180; return Math.min(N - 1, Math.max(0, Math.floor(((1 - Math.log(Math.tan(l) + 1 / Math.cos(l)) / Math.PI) / 2) * N))); };
const cellKm = new Float64Array(N);
for (let y = 0; y < N; y++) cellKm[y] = (40075.0167 / N) * Math.cos((latOf(y) * Math.PI) / 180);

// Flood from seeds over the cells that pass, four ways, wrapping east to west.
const flood = (pass, seeds, block) => {
  const out = new Uint8Array(N * N), q = new Int32Array(N * N);
  let head = 0, tail = 0;
  for (const [lon, lat] of seeds) { const i = yOf(lat) * N + xOf(lon); if (pass(i) && !out[i]) { out[i] = 1; q[tail++] = i; } }
  while (head < tail) {
    const i = q[head++], x = i % N, y = (i - x) / N;
    for (const j of [y * N + ((x + 1) % N), y * N + ((x + N - 1) % N), y > 0 ? i - N : -1, y < N - 1 ? i + N : -1]) {
      if (j < 0 || out[j] || !pass(j)) continue;
      if (block && block(j % N, (j - (j % N)) / N)) continue;
      out[j] = 1; q[tail++] = j;
    }
  }
  return out;
};
// Open water. The strait at Gibraltar, the Red Sea's mouth and other narrows close up at 10 km a cell, so the seas
// behind them that are joined to the ocean by a sill deeper than the level in question are seeded by hand.
const OCEANS = [[-30, 0], [-150, 0], [80, -20], [0, 80], [18, 35], [38, 20], [-90, 25], [-75, 15]];
const NOW_ONLY = [[35, 43], [20, 58], [52, 27], [-85, 60], [3, 56]];   // Black Sea, Baltic, Persian Gulf, Hudson Bay, North Sea: sea today
const oceanNow = flood((i) => H[i] < 0, [...OCEANS, ...NOW_ONLY]);
const oceanThen = flood((i) => H[i] < SEA_THEN, OCEANS);
const landThen = new Uint8Array(N * N), sank = new Uint8Array(N * N);
for (let i = 0; i < N * N; i++) { landThen[i] = !oceanThen[i] && H[i] >= SEA_THEN ? 1 : 0; sank[i] = landThen[i] && oceanNow[i] ? 1 : 0; }

// The Atlantic and the seas that open to it, outside the strait: stop at the Cape of Good Hope, Cape Horn and the Arctic.
const med = (lon, lat) => lon < 42 && lat > 30 && lat < 47.5 && ((lon > -5.6 && lat < 41) || lon > 3);
const atlantic = flood((i) => oceanNow[i] === 1, [[-30, 0], [-40, 35], [-25, -30]], (x, y) => {
  const lon = lonOf(x), lat = latOf(y);
  return med(lon, lat) || lat > 72 || (lat < -34.8 && lon >= 20 && lon < 20.4) || (lat < -55 && lon > -68.4 && lon <= -68) || (lon > 9.5 && lon < 30 && lat > 53 && lat < 66 && false);
});

// Sums over boxes, by summed-area tables.
const table = (value) => {
  const S = new Float64Array((N + 1) * (N + 1));
  for (let y = 0; y < N; y++) { let row = 0; for (let x = 0; x < N; x++) { row += value(y * N + x); S[(y + 1) * (N + 1) + x + 1] = S[y * (N + 1) + x + 1] + row; } }
  return (x0, y0, x1, y1) => {   // inclusive cell box, clipped to the grid; returns [sum, cells]
    x0 = Math.max(0, x0); y0 = Math.max(0, y0); x1 = Math.min(N - 1, x1); y1 = Math.min(N - 1, y1);
    if (x1 < x0 || y1 < y0) return [0, 0];
    return [S[(y1 + 1) * (N + 1) + x1 + 1] - S[y0 * (N + 1) + x1 + 1] - S[(y1 + 1) * (N + 1) + x0] + S[y0 * (N + 1) + x0], (x1 - x0 + 1) * (y1 - y0 + 1)];
  };
};
const low = table((i) => (landThen[i] && H[i] <= RULES.plain.low_ground_max_m_above_today ? 1 : 0));
const high = table((i) => (landThen[i] ? Math.max(H[i], 0) : 0));

// Islands: each piece of land at Plato's date, and how big it was.
const piece = new Int32Array(N * N).fill(-1), areas = [];
{
  const q = new Int32Array(N * N);
  for (let s = 0; s < N * N; s++) {
    if (!landThen[s] || piece[s] >= 0) continue;
    const id = areas.length;
    let head = 0, tail = 0, area = 0;
    piece[s] = id; q[tail++] = s;
    while (head < tail) {
      const i = q[head++], x = i % N, y = (i - x) / N;
      area += cellKm[y] * cellKm[y];
      for (const j of [y * N + ((x + 1) % N), y * N + ((x + N - 1) % N), y > 0 ? i - N : -1, y < N - 1 ? i + N : -1]) if (j >= 0 && landThen[j] && piece[j] < 0) { piece[j] = id; q[tail++] = j; }
    }
    areas.push(area);
  }
}

// ---------- the score of every cell that was land then ----------
const clues = (i) => {
  const x = i % N, y = (i - x) / N, k = cellKm[y];
  const hx = Math.round(RULES.plain.long_km / 2 / k), hy = Math.round(RULES.plain.wide_km / 2 / k);
  const a = low(x - hx, y - hy, x + hx, y + hy), b = low(x - hy, y - hx, x + hy, y + hx);
  const share = Math.max(a[0] / Math.max(a[1], 1), b[0] / Math.max(b[1], 1));
  const d0 = Math.round(RULES.mountains.band_from_km / k), d1 = Math.round(RULES.mountains.band_to_km / k);
  const n = high(x - hx, y - d1, x + hx, y - d0), s = high(x - hx, y + d0, x + hx, y + d1);
  const north = n[0] / Math.max(n[1], 1), south = s[0] / Math.max(s[1], 1);
  // "Atlantic" for land: the nearest open water today, looking a few cells round, is Atlantic water.
  let atl = atlantic[i];
  if (!atl && !oceanNow[i]) for (let r = 1; r <= 12 && !atl; r++) for (let t = -r; t <= r && !atl; t++) for (const [dx, dy] of [[t, -r], [t, r], [-r, t], [r, t]]) { const xx = (x + dx + N) % N, yy = y + dy; if (yy >= 0 && yy < N && atlantic[yy * N + xx]) { atl = 1; break; } }
  return {
    sank: sank[i] === 1, atlantic: atl === 1, plain: share >= RULES.plain.share_needed,
    mountains: north >= RULES.mountains.north_mean_at_least_m && north - south >= RULES.mountains.north_minus_south_at_least_m,
    island: areas[piece[i]] < RULES.island.smaller_than_km2,
    numbers: { plain_share: +share.toFixed(2), north_mean_m: Math.round(north), south_mean_m: Math.round(south), land_piece_km2: Math.round(areas[piece[i]] ?? 0), height_m: Math.round(H[i]) },
  };
};
const KEYS = ['sank', 'atlantic', 'plain', 'mountains', 'island'];
const score = new Uint8Array(N * N), bits = new Uint8Array(N * N);
const tally = Array.from({ length: 6 }, () => ({ cells: 0, km2: 0 }));
// `score` is kept only for land that sank: that is what glows on the globe and what is ranked. `bits` is kept for all
// land of Plato's date, so the reticle can say what any spot has and lacks.
for (let i = 0; i < N * N; i++) {
  if (!landThen[i]) continue;
  const c = clues(i);
  let n = 0, b = 0;
  KEYS.forEach((k, j) => { if (c[k]) { n++; b |= 1 << j; } });
  bits[i] = b;
  if (!sank[i]) continue;
  score[i] = n;
  const y = (i - (i % N)) / N;
  tally[n].cells++; tally[n].km2 += cellKm[y] * cellKm[y];
}

// ---------- the best-matching drowned lands: joined cells that score 4 or 5 ----------
const best = [];
{
  const seen = new Uint8Array(N * N), q = new Int32Array(N * N);
  for (let s = 0; s < N * N; s++) {
    if (score[s] < 4 || seen[s]) continue;
    let head = 0, tail = 0, km2 = 0, sx = 0, sy = 0, sz = 0, five = 0, w = 0, peak = s;
    seen[s] = 1; q[tail++] = s;
    while (head < tail) {
      const i = q[head++], x = i % N, y = (i - x) / N, a = cellKm[y] * cellKm[y];
      km2 += a; if (score[i] === 5) five += a;
      const lo = (lonOf(x) * Math.PI) / 180, la = (latOf(y) * Math.PI) / 180;
      sx += Math.cos(la) * Math.cos(lo) * a; sy += Math.cos(la) * Math.sin(lo) * a; sz += Math.sin(la) * a; w += a;
      if (score[i] > score[peak]) peak = i;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const yy = y + dy, xx = (x + dx + N) % N; if (yy < 0 || yy >= N) continue; const j = yy * N + xx; if (score[j] >= 4 && !seen[j]) { seen[j] = 1; q[tail++] = j; } }
    }
    const lon = (Math.atan2(sy, sx) * 180) / Math.PI, lat = (Math.atan2(sz, Math.hypot(sx, sy)) * 180) / Math.PI;
    // Beyond 45 degrees the land lay under or beside the ice sheets and has risen or sunk a great deal since, so one
    // sea level for the whole planet is least to be trusted there. Such places are kept, and marked.
    best.push({ lat: +lat.toFixed(2), lon: +lon.toFixed(2), km2: Math.round(km2), km2_scoring_5: Math.round(five), top: score[peak], clues: KEYS.filter((k, j) => bits[peak] & (1 << j)), near_old_ice: Math.abs(lat) >= RULES.near_old_ice_beyond_lat });
  }
  best.sort((a, b) => Number(a.near_old_ice) - Number(b.near_old_ice) || b.top - a.top || b.km2_scoring_5 - a.km2_scoring_5 || b.km2 - a.km2);
}
// A name for each of the best. For the leading ones we name the water ourselves and have Wikidata confirm a place of
// that name is there; the rest take their country from OpenStreetMap's Nominatim, or stay as coordinates.
const NAMES = [[22.9, -77.5, 'Great Bahama Bank'], [38.5, -76.3, 'Chesapeake Bay'], [39.1, -75.2, 'Delaware Bay'], [38.2, 123.8, 'Korea Bay'], [20.1, -92.0, 'Campeche Bank'], [-23.4, -44.2, 'Ilha Grande Bay']];
const named = (() => { try { return new Map(JSON.parse(readFileSync(`${top}data/worldfit.json`, 'utf8')).best.filter((b) => b.near && !process.argv.includes('--rename')).map((b) => [`${b.lat},${b.lon}`, b.near])); } catch { return new Map(); } })();
for (const b of best.slice(0, 16)) {
  const key = `${b.lat},${b.lon}`;
  if (named.has(key)) { b.near = named.get(key); continue; }
  if (process.argv.includes('--no-names')) continue;
  const ua = { 'User-Agent': 'abstracts-atlantis/0.1 (open research; tools/make-worldfit.mjs)' };
  // The name is ours to choose, so it is checked: Wikidata must have a place of exactly that name within 400 km.
  const mine = NAMES.find(([lat, lon]) => Math.abs(lat - b.lat) < 0.8 && Math.abs(lon - b.lon) < 0.8)?.[2];
  if (mine) try {
    const q = `SELECT ?item ?c WHERE { ?item rdfs:label "${mine}"@en; wdt:P625 ?c. } LIMIT 5`;
    const w = await fetch(`https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(q)}`, { headers: { ...ua, Accept: 'application/sparql-results+json' }, signal: AbortSignal.timeout(30000) }).then((r) => r.json());
    for (const x of w.results.bindings) {
      const m = /Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(x.c.value);
      const km = m ? Math.hypot((Number(m[1]) - b.lon) * Math.cos((b.lat * Math.PI) / 180), Number(m[2]) - b.lat) * 111.2 : Infinity;
      if (km < 400) { b.near = { name: mine, km: Math.round(km), source: x.item.value.replace('http://', 'https://') }; break; }
    }
  } catch { /* no name: the coordinates stand */ }
  if (!b.near) try {
    const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=3&accept-language=en&lat=${b.lat}&lon=${b.lon}`, { headers: ua, signal: AbortSignal.timeout(20000) });
    const j = await r.json();
    b.near = j.error || !j.address?.country ? null : { name: `off ${j.address.country}`, source: 'OpenStreetMap Nominatim' };
  } catch { b.near = null; }
  await new Promise((done) => setTimeout(done, 1100));
}

// ---------- the proposed places, by the same rules ----------
const atl = JSON.parse(readFileSync(`${top}data/legends.json`, 'utf8')).legends.find((l) => l.id === 'atlantis');
// A pin can stand a few kilometres from the land it means (a small bank, the edge of a shelf), and a cell is 10 km
// across, so each place takes the best cell within two cells of its pin.
const places = atl.places.map((p) => {
  const x0 = xOf(p.lon), y0 = yOf(p.lat);
  let pick = null;
  for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
    const y = y0 + dy, x = (x0 + dx + N) % N;
    if (y < 0 || y >= N || !landThen[y * N + x]) continue;
    const c = clues(y * N + x), got = KEYS.filter((k) => c[k]);
    if (!pick || got.length > pick.got.length || (got.length === pick.got.length && Math.abs(dx) + Math.abs(dy) < pick.far)) pick = { c, got, far: Math.abs(dx) + Math.abs(dy) };
  }
  if (!pick) return { id: p.id, name: p.name, score: 0, clues: [], note: "under water at Plato's date too", numbers: { height_m: Math.round(H[y0 * N + x0]) } };
  return { id: p.id, name: p.name, score: pick.got.length, clues: pick.got, numbers: pick.c.numbers };
}).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

// ---------- write ----------
// One byte a cell: the low three bits are the score (0 where the land did not sink), the next five say which clues.
const px = new Uint8Array(N * N * 3);
for (let i = 0; i < N * N; i++) { px[i * 3] = score[i]; px[i * 3 + 1] = bits[i]; px[i * 3 + 2] = landThen[i] ? (sank[i] ? 2 : 1) : 0; }
writeFileSync(`${top}data/worldfit.png`, encodePng(N, N, 3, px));
// A half-size copy for small screens: each pixel takes the best of its four cells.
{
  const M = N / 2, half = new Uint8Array(M * M * 3);
  for (let y = 0; y < M; y++) for (let x = 0; x < M; x++) {
    let bestI = (2 * y) * N + 2 * x;
    for (const o of [1, N, N + 1]) { const i = (2 * y) * N + 2 * x + o; if (score[i] > score[bestI] || (score[i] === score[bestI] && px[i * 3 + 2] > px[bestI * 3 + 2])) bestI = i; }
    half[(y * M + x) * 3] = px[bestI * 3]; half[(y * M + x) * 3 + 1] = px[bestI * 3 + 1]; half[(y * M + x) * 3 + 2] = px[bestI * 3 + 2];
  }
  writeFileSync(`${top}data/worldfit-2k.png`, encodePng(M, M, 3, half));
}
const biggest = areas.map((a, id) => ({ a, id })).sort((p, q) => q.a - p.a);
const out = {
  what: 'Every 10 km cell of the Earth scored against the parts of Plato\'s description that the shape of the land can answer. Made by tools/make-worldfit.mjs. A high score says the landscape resembles the description; it does not say anything was built there.',
  made: new Date().toISOString().slice(0, 10), grid: { zoom: Z, size: N, projection: 'Web Mercator', cell_km_at_equator: +(40075.0167 / N).toFixed(2) },
  picture: 'worldfit.png (and worldfit-2k.png at half size): red = score 0 to 5 for land that sank, 0 elsewhere; green = which clues any land of that date has (1 sank, 2 atlantic, 4 plain, 8 mountains, 16 island); blue = 0 sea then, 1 land then and now, 2 land then and sea now',
  clues: KEYS, rules: RULES,
  limits: ['One sea level for the whole planet: real coasts differed by ten metres or more, and far more near the old ice sheets.', 'No ice is drawn. Places beyond 45 degrees north or south are marked near_old_ice.', 'Sea-floor depth here is 10 km a cell: a bank smaller than that is missed.', 'Five clues out of the 27 that could be checked. The city itself, its rings, canal and temple, is not something a height grid can find.'],
  totals: { land_that_sank_km2: Math.round(tally.reduce((s, t) => s + t.km2, 0)), by_score: tally.map((t, n) => ({ score: n, km2: Math.round(t.km2) })).filter((t) => t.score > 0) },
  best: best.slice(0, 40),
  places,
};
writeFileSync(`${top}data/worldfit.json`, `${JSON.stringify(out, null, 1)}\n`);
console.log(`land that sank since Plato's date: ${(out.totals.land_that_sank_km2 / 1e6).toFixed(2)} million km2`);
console.log(out.totals.by_score.map((t) => `score ${t.score}: ${(t.km2 / 1000).toFixed(0)} thousand km2`).join(' | '));
console.log(`largest pieces of land then (million km2): ${biggest.slice(0, 8).map((b) => (b.a / 1e6).toFixed(2)).join(', ')}`);
console.log('best:'); for (const b of best.slice(0, 16)) console.log(`  ${b.top}/5  ${String(b.km2).padStart(8)} km2  ${b.lat}, ${b.lon}  ${b.clues.join('+')}${b.near_old_ice ? '  [near old ice]' : ''}  ${b.near?.name ?? ''}`);
console.log('places:'); for (const p of places) console.log(`  ${p.score}/5 ${p.name.slice(0, 40).padEnd(40)} ${p.clues.join('+')} ${p.note ?? ''} ${JSON.stringify(p.numbers)}`);
