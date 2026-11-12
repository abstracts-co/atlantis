#!/usr/bin/env node
// Merges the research at each place (research/atlantis/evidence/<site>.json) into data/evidence.json, the file the
// globe draws scenes from. It checks every file first (tools/check-evidence.mjs) and leaves out any feature that
// fails, saying which and why: a feature we cannot place honestly is not drawn.
//   node tools/merge-evidence.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { problems, loadRefs, flat, SIDES, KINDS, HOW } from './check-evidence.mjs';

const top = new URL('..', import.meta.url).pathname, dir = `${top}research/atlantis/evidence/`;
const refs = loadRefs();
// A place's own finer depth grid, where tools/make-patches.mjs has cut one.
const patches = (() => { try { return new Map(JSON.parse(readFileSync(`${top}data/patches/index.json`, 'utf8')).patches.map((p) => [p.id, p])); } catch { return new Map(); } })();
const round = (v) => Math.round(v * 1e5) / 1e5;
const shape = (g) => {
  const pt = (p) => (p.length > 2 && Number.isFinite(p[2]) ? [round(p[0]), round(p[1]), Math.round(p[2] * 10) / 10] : [round(p[0]), round(p[1])]);
  const walk = (c) => (typeof c[0] === 'number' ? pt(c) : c.map(walk));
  return { type: g.type, coordinates: walk(g.coordinates) };
};
const clean = (o, keys) => Object.fromEntries(keys.filter((k) => o?.[k] != null && o[k] !== '').map((k) => [k, o[k]]));
const http = (u) => /^(https?|ftp):\/\/\S+$/.test(u ?? '');

const sites = [];
let dropped = 0;
for (const file of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
  let entry;
  try { entry = JSON.parse(readFileSync(dir + file, 'utf8')); } catch (e) { console.log(`skip   ${file}: not valid JSON (${e.message})`); continue; }
  const s = entry.site;
  if (!s?.id) { console.log(`skip   ${file}: no site`); continue; }
  const place = refs.places.get(s.hypothesis_id);
  if (!place) { console.log(`skip   ${file}: hypothesis "${s.hypothesis_id}" is not a place on the globe`); continue; }
  // Leave out the features that fail on their own, then check what is left as a whole.
  const ok = [];
  for (const f of entry.features ?? []) {
    const bad = [];
    if (!f.id || !SIDES.includes(f.side) || !KINDS.includes(f.kind) || !f.label || !f.what) bad.push('missing id, side, kind, label or what');
    if (!HOW.includes(f.position?.how) || !http(f.position?.source)) bad.push('position not sourced');
    if (!http(f.source) || !f.evidence) bad.push('no source or quote');
    const pts = f.geometry ? flat(f.geometry) : [];
    if (!pts.length || pts.some((p) => !Number.isFinite(p?.[0]) || !Number.isFinite(p?.[1]) || Math.abs(p[0]) > 180 || Math.abs(p[1]) > 90)) bad.push('bad geometry');
    if (f.position?.how === 'from-description' && f.geometry?.type !== 'Point') bad.push('a shape placed from a description');
    if (bad.length) { console.log(`drop   ${s.id}/${f.id}: ${bad.join('; ')}`); dropped++; } else ok.push(f);
  }
  const ids = new Set(ok.map((f) => f.id));
  const story = (entry.story ?? []).map((st) => ({ ...st, show: (st.show ?? []).filter((id) => ids.has(id)) }));
  const merged = {
    id: s.id, place, hypothesis_id: s.hypothesis_id, name: s.name,
    centre: { lat: round(s.centre.lat), lon: round(s.centre.lon), how: s.centre.how, source: s.centre.source },
    radius_km: s.radius_km,
    claimed: clean(s.claimed, ['line', 'who', 'year', 'source', 'evidence', 'kind']),
    found: clean(s.found, ['line', 'who', 'year', 'source', 'evidence', 'kind']),
    needs_sea_level: s.needs_sea_level ? clean(s.needs_sea_level, ['m', 'when', 'why', 'source', 'evidence']) : null,
    best_layers: (s.best_layers ?? []).filter((id) => refs.sources.has(id)),
    features: ok.map((f) => ({
      ...clean(f, ['id', 'side', 'kind', 'label', 'who', 'year', 'what', 'result', 'search_id', 'source', 'evidence', 'confidence']),
      geometry: shape(f.geometry),
      position: clean(f.position, ['how', 'source', 'detail', 'error_m']),
      ...(f.column?.length ? { column: f.column.filter((l) => l.to_m > l.from_m && l.what).map((l) => clean(l, ['from_m', 'to_m', 'what', 'age'])) } : {}),
    })),
    measurements: (entry.measurements ?? []).filter((m) => m.what && m.value != null && http(m.source)).map((m) => clean(m, ['id', 'what', 'value', 'unit', 'plato_claim', 'plato_value', 'source', 'evidence', 'kind'])),
    story: story.filter((st) => st.line).map((st) => clean(st, ['step', 'side', 'line', 'show', 'search_id'])),
    not_located: (entry.not_located ?? []).map((n) => clean(n, ['what', 'why', 'source'])),
    dem: patches.has(s.id) ? clean(patches.get(s.id), ['id', 'file', 'bbox', 'width', 'height', 'metres_per_pixel', 'source', 'licence', 'credit']) : null,
  };
  const p = problems({ site: merged, features: merged.features, measurements: merged.measurements, story: merged.story }, refs);
  for (const e of p.errors) console.log(`error  ${e}`);
  for (const w of p.warnings) if (process.argv.includes('--warnings')) console.log(`warn   ${w}`);
  const by = Object.fromEntries(SIDES.map((k) => [k, merged.features.filter((f) => f.side === k).length]));
  console.log(`${p.errors.length ? 'FAIL  ' : 'ok    '} ${s.id}: ${merged.features.length} features (${Object.entries(by).map(([k, n]) => `${n} ${k}`).join(', ')}), ${merged.measurements.length} measurements, ${merged.story.length} story steps${p.warnings.length ? `, ${p.warnings.length} warnings` : ''}`);
  if (!p.errors.length) sites.push(merged);
}
const out = { what: 'The research at each well-studied place, with positions, for the globe to draw. Made by tools/merge-evidence.mjs from research/atlantis/evidence/.', made: new Date().toISOString().slice(0, 10), sites };
writeFileSync(`${top}data/evidence.json`, `${JSON.stringify(out)}\n`);
console.log(`evidence.json: ${sites.length} places, ${sites.reduce((n, x) => n + x.features.length, 0)} features, ${dropped} dropped, ${(JSON.stringify(out).length / 1024).toFixed(0)} KB`);
