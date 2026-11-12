#!/usr/bin/env node
// Checks data/evidence.json: the research at each place, as the globe draws it. Every feature must have a real
// position that says how it is known, a source, a quote, and ids that exist in the other data files.
//   node tools/check-evidence.mjs            check data/evidence.json
// tools/merge-evidence.mjs uses the same checks on each research file before it merges it.
import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const here = new URL('.', import.meta.url).pathname;
const data = [`${here}../data/`].find(existsSync);
const read = (f) => JSON.parse(readFileSync(data + f, 'utf8'));

export const SIDES = ['claimed', 'checked', 'found', 'context'];
export const KINDS = ['survey-area', 'track', 'core', 'sample', 'dive', 'dig', 'structure', 'outline', 'place'];
export const HOW = ['from-dataset', 'stated-coordinates', 'digitised-from-figure', 'from-description'];
const http = (u) => /^(https?|ftp):\/\/\S+$/.test(u ?? '');
const km = (a, b) => { const r = Math.PI / 180, x = (b[0] - a[0]) * r * Math.cos(((a[1] + b[1]) * r) / 2), y = (b[1] - a[1]) * r; return Math.hypot(x, y) * 6371; };
export const flat = (g) => (g.type === 'Point' ? [g.coordinates] : g.type === 'LineString' || g.type === 'MultiPoint' ? g.coordinates : g.type === 'Polygon' || g.type === 'MultiLineString' ? g.coordinates.flat() : g.type === 'MultiPolygon' ? g.coordinates.flat(2) : []);

// The problems with one site, as { errors, warnings }. refs: { claims, searches, sources } as sets of ids, when known.
export const problems = (entry, refs = {}) => {
  const errors = [], warnings = [], s = entry.site ?? {}, name = s.id ?? '?';
  const err = (m) => errors.push(`${name}: ${m}`), warn = (m) => warnings.push(`${name}: ${m}`);
  if (!s.id || !s.name) err('site needs an id and a name');
  if (!Number.isFinite(s.centre?.lat) || !Number.isFinite(s.centre?.lon) || Math.abs(s.centre.lat) > 90 || Math.abs(s.centre.lon) > 180) err('site centre is not a latitude and longitude');
  if (!http(s.centre?.source)) warn('site centre has no source');
  if (!(s.radius_km > 0)) err('site needs radius_km');
  for (const k of ['claimed', 'found']) {
    const c = s[k];
    if (!c?.line) { err(`site.${k}.line is missing`); continue; }
    if (c.line.length > 140) err(`site.${k}.line is ${c.line.length} characters (140 at most)`);
    if (!http(c.source)) err(`site.${k} has no source`);
    if (!c.evidence) warn(`site.${k} has no quote`);
  }
  // Below zero for a drowned land; above zero where the claim would need the sea to stand higher than today.
  if (s.needs_sea_level && (!Number.isFinite(s.needs_sea_level.m) || Math.abs(s.needs_sea_level.m) > 9000 || !http(s.needs_sea_level.source))) err('needs_sea_level needs a level in metres and a source');
  for (const id of s.best_layers ?? []) if (refs.sources && !refs.sources.has(id)) warn(`best_layers names a source we do not have: ${id}`);
  const ids = new Set();
  for (const f of entry.features ?? []) {
    const at = `feature ${f.id ?? '?'}`;
    if (!f.id || ids.has(f.id)) err(`${at}: missing or repeated id`);
    ids.add(f.id);
    if (!SIDES.includes(f.side)) err(`${at}: side "${f.side}"`);
    if (!KINDS.includes(f.kind)) err(`${at}: kind "${f.kind}"`);
    if (!f.label) err(`${at}: no label`); else if (f.label.length > 40) err(`${at}: label is ${f.label.length} characters (40 at most)`);
    if (!f.what) err(`${at}: no "what"`);
    if (!http(f.source)) err(`${at}: no source`);
    if (!f.evidence) err(`${at}: no quote`);
    if (!HOW.includes(f.position?.how)) err(`${at}: position.how "${f.position?.how}"`);
    if (!http(f.position?.source)) err(`${at}: position has no source`);
    if (!Number.isFinite(f.position?.error_m)) warn(`${at}: position has no error_m`);
    const g = f.geometry, pts = g ? flat(g) : [];
    if (!g || !pts.length) { err(`${at}: no geometry`); continue; }
    if (!['Point', 'LineString', 'Polygon', 'MultiLineString', 'MultiPolygon', 'MultiPoint'].includes(g.type)) err(`${at}: geometry type ${g.type}`);
    if (pts.some((p) => !Array.isArray(p) || !Number.isFinite(p[0]) || !Number.isFinite(p[1]) || Math.abs(p[0]) > 180 || Math.abs(p[1]) > 90)) { err(`${at}: a coordinate is not [longitude, latitude]`); continue; }
    if (pts.length > 200) err(`${at}: ${pts.length} points (200 at most)`);
    if (f.position?.how === 'from-description' && g.type !== 'Point') err(`${at}: a shape cannot be placed from a description alone`);
    if (Number.isFinite(s.centre?.lat)) { const far = Math.max(...pts.map((p) => km([s.centre.lon, s.centre.lat], p))); if (far > s.radius_km * 1.05) err(`${at}: ${far.toFixed(0)} km from the centre, outside the ${s.radius_km} km scene`); }
    if (f.kind === 'survey-area' && !/Polygon/.test(g.type)) warn(`${at}: a survey area that is not an outline`);
    if (f.search_id && refs.searches && !refs.searches.has(f.search_id)) warn(`${at}: search_id not in searches.json: ${f.search_id}`);
    for (const l of f.column ?? []) if (!(l.to_m > l.from_m) || !l.what) err(`${at}: a core layer needs from_m, to_m and what`);
  }
  if ((entry.features ?? []).length > 60) err(`${entry.features.length} features (60 at most)`);
  for (const m of entry.measurements ?? []) {
    if (!m.what || m.value == null || !http(m.source)) err(`measurement ${m.id ?? '?'}: needs what, value and source`);
    if (m.plato_claim && refs.claims && !refs.claims.has(m.plato_claim)) warn(`measurement ${m.id}: plato_claim not in plato.json: ${m.plato_claim}`);
  }
  for (const st of entry.story ?? []) {
    if (!st.line) err(`story step ${st.step}: no line`); else if (st.line.length > 160) err(`story step ${st.step}: line is ${st.line.length} characters (160 at most)`);
    for (const id of st.show ?? []) if (!ids.has(id)) err(`story step ${st.step}: shows a feature that does not exist: ${id}`);
    if (st.search_id && refs.searches && !refs.searches.has(st.search_id)) warn(`story step ${st.step}: search_id not in searches.json: ${st.search_id}`);
  }
  if (!(entry.story ?? []).length) warn('no story');
  return { errors, warnings };
};

export const loadRefs = () => ({
  claims: new Set(read('plato.json').claims.map((c) => c.id)),
  searches: new Set(read('searches.json').searches.map((s) => s.id)),
  sources: new Set(read('sources.json').sources.map((s) => s.id)),
  places: new Map(read('legends.json').legends.find((l) => l.id === 'atlantis').places.filter((p) => p.hypothesis).map((p) => [p.hypothesis, p.id])),
});

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const refs = loadRefs(), ev = read('evidence.json');
  let errors = 0, warnings = 0;
  for (const site of ev.sites) {
    const p = problems({ site, features: site.features, measurements: site.measurements, story: site.story }, refs);
    if (!refs.places.has(site.hypothesis_id) && ![...refs.places.values()].includes(site.place)) p.errors.push(`${site.id}: not tied to a place on the globe`);
    for (const e of p.errors) console.log(`error  ${e}`);
    if (!process.argv.includes('--quiet')) for (const w of p.warnings) console.log(`warn   ${w}`);
    errors += p.errors.length; warnings += p.warnings.length;
  }
  const n = ev.sites.reduce((s, x) => s + x.features.length, 0);
  console.log(`evidence: ${ev.sites.length} places, ${n} features, ${errors} error(s), ${warnings} warning(s)`);
  process.exit(errors ? 1 : 0);
}
