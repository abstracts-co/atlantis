#!/usr/bin/env node
// Checks the Atlantis data files: data/plato.json, hypotheses.json, searches.json and world-9600bce.json.
//   node tools/check-data.mjs
// It checks shape, not truth: ids are unique, passages are cited by Stephanus number, coordinates are on the Earth,
// standings and outcomes use the agreed words, every entry has a source to open, and every claim id a proposal says it
// fits or breaks is one of Plato's claims. Exit 1 on errors. Warnings do not fail the run.
import { existsSync, readFileSync } from 'node:fs';
const here = new URL('.', import.meta.url).pathname;
const dir = [process.env.DATA_DIR, `${here}../data/`, `${here}../research/atlantis/`].filter(Boolean).find((d) => existsSync(`${d}plato.json`)) ?? `${here}../data/`;
const load = (name) => (existsSync(dir + name) ? JSON.parse(readFileSync(dir + name, 'utf8')) : null);
let errors = 0, warnings = 0;
const err = (m) => { console.log(`error    ${m}`); errors++; };
const warn = (m) => { console.log(`warning  ${m}`); warnings++; };
const unique = (list, file) => { const seen = new Set(); for (const x of list) { if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(x.id ?? '')) err(`${file}: bad id "${x.id}"`); if (seen.has(x.id)) err(`${file}: id used twice: ${x.id}`); seen.add(x.id); } return seen; };
const link = (u) => /^https?:\/\//.test(u ?? '');
const onEarth = (x, file) => { if (!(Number.isFinite(x.lat) && Math.abs(x.lat) <= 90 && Number.isFinite(x.lon) && Math.abs(x.lon) <= 180)) err(`${file}: ${x.id}: coordinates off the Earth (${x.lat}, ${x.lon})`); };

const plato = load('plato.json'), hyp = load('hypotheses.json'), searches = load('searches.json'), world = load('world-9600bce.json');
const report = [];
let claims = new Set();
if (!plato) err('plato.json is missing'); else {
  claims = unique(plato.claims ?? [], 'plato.json');
  for (const c of plato.claims ?? []) {
    if (!/^(Timaeus|Critias) \d{2,3}[a-e]/.test(c.ref ?? '')) err(`plato.json: ${c.id}: ref must be a Stephanus reference, got "${c.ref}"`);
    if (!c.quote) err(`plato.json: ${c.id}: no quote`);
    if (!link(c.url)) warn(`plato.json: ${c.id}: no link to the passage`);
  }
  if (!plato.dimensions?.city) err('plato.json: no city dimensions');
  report.push(`plato: ${plato.claims?.length ?? 0} claims, ${plato.ancient_reception?.length ?? 0} ancient writers, ${plato.scholarship?.length ?? 0} modern readings`);
}
if (!hyp) warn('hypotheses.json is missing'); else {
  const H = hyp.hypotheses ?? [];
  unique(H, 'hypotheses.json');
  const STANDING = ['mainstream', 'plausible', 'fringe', 'rejected', 'hoax'];
  for (const h of H) {
    onEarth(h, 'hypotheses.json');
    if (!STANDING.includes(h.standing)) err(`hypotheses.json: ${h.id}: standing "${h.standing}"`);
    if (!(h.sources ?? []).some((s) => link(s.url)) && !(h.proposed_by ?? []).some((p) => link(p.url))) err(`hypotheses.json: ${h.id}: no source to open`);
    for (const f of [...(h.fits ?? []), ...(h.conflicts ?? [])]) if (claims.size && !claims.has(f.claim)) warn(`hypotheses.json: ${h.id}: "${f.claim}" is not a claim id in plato.json`);
  }
  report.push(`hypotheses: ${H.length} places, ${H.filter((h) => (h.tests ?? []).length).length} with a real test`);
}
if (!searches) warn('searches.json is missing'); else {
  const S = searches.searches ?? [];
  unique(S, 'searches.json');
  const STATUS = ['confirmed', 'refuted', 'corrected', 'withdrawn', 'unresolved', 'never-tested', 'no-claim'];
  for (const s of S) {
    if (!STATUS.includes(s.outcome?.status)) err(`searches.json: ${s.id}: outcome "${s.outcome?.status}"`);
    if (!(s.sources ?? []).some((x) => link(x.url))) err(`searches.json: ${s.id}: no source to open`);
  }
  report.push(`searches: ${S.length}`);
}
if (!world) warn('world-9600bce.json is missing'); else {
  unique(world.sites ?? [], 'world-9600bce.json');
  for (const s of world.sites ?? []) { onEarth(s, 'world-9600bce.json'); if (!(s.sources ?? []).some((x) => link(x.url))) err(`world-9600bce.json: ${s.id}: no source to open`); }
  for (const g of world.sea_level?.global ?? []) if (!link(g.url)) err(`world-9600bce.json: a sea-level value has no link (${g.source})`);
  report.push(`world at 9600 BCE: ${world.sites?.length ?? 0} sites, ${world.sea_level?.global?.length ?? 0} sea-level values, ${world.datasets?.length ?? 0} datasets`);
}
console.log(report.join('\n'));
console.log(`data (${dir}): ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
