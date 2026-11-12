#!/usr/bin/env node
// Turns the research lanes' files (research/atlantis/*.json) into the data the repository ships (data/*.json):
//   - copies each lane's file, with the fixes listed below
//   - writes every proposed place into the Atlantis entry of data/legends.json, so the globe pins it
//   - adds the new map layers the site-data lane tested to data/sources.json
// Run it again whenever a lane's file changes: node tools/merge-atlantis.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const top = new URL('..', import.meta.url).pathname;
const read = (f) => JSON.parse(readFileSync(top + f, 'utf8'));
const write = (f, v) => writeFileSync(top + f, `${JSON.stringify(v, null, 2)}\n`);
const log = [];

// ---------- Plato ----------
const plato = read('research/atlantis/plato.json');
// The lane left out one claim that proposals refer to: the extent of the empire (Timaeus 25a-b). Added from the text itself.
if (!plato.claims.some((c) => c.id === 'empire-to-egypt-and-tyrrhenia')) {
  const src = 'https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/master/data/tlg0059/tlg031/tlg0059.tlg031.perseus-eng2.xml';
  const xml = await fetch(src).then((r) => r.text());
  const text = xml.replace(/<note[\s\S]*?<\/note>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  const m = /[^.]*\bas far as Egypt[^.]*\./.exec(text);
  if (!m) throw new Error('could not find the empire passage in the Timaeus');
  const at = plato.claims.findIndex((c) => c.id === 'war-with-athens');
  plato.claims.splice(Math.max(at, 0), 0, { id: 'empire-to-egypt-and-tyrrhenia', label: 'Atlantis ruled Libya as far as Egypt and Europe as far as Tyrrhenia.', category: 'people', ref: 'Timaeus 25a-b', quote: m[0].trim(), translator: 'Bury', greek_terms: [], numbers: [], testable: false, test_strength: 'none', how_to_test: null, url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0180%3Atext%3DTim.%3Asection%3D25a', added_by: 'merge-atlantis.mjs, from the Perseus text' });
  log.push(`plato: added the claim empire-to-egypt-and-tyrrhenia: "${m[0].trim().slice(0, 110)}…"`);
}
write('data/plato.json', plato);
const claimIds = new Set(plato.claims.map((c) => c.id));

// ---------- the other lanes, as they are ----------
const hyp = read('research/atlantis/hypotheses.json');
write('data/hypotheses.json', hyp);
for (const lane of ['searches', 'world-9600bce', 'site-data']) if (existsSync(`${top}research/atlantis/${lane}.json`)) write(`data/${lane}.json`, read(`research/atlantis/${lane}.json`));

// ---------- the globe's pins ----------
const legends = read('data/legends.json');
const atlantis = legends.legends.find((l) => l.id === 'atlantis');
const old = new Map(atlantis.places.map((p) => [p.id, p]));
const links = (list) => (list ?? []).filter((s) => /^https?:\/\//.test(s.url ?? '')).map((s) => ({ title: s.title ?? s.work ?? s.who ?? s.url, url: s.url }));
const short = (s, n = 420) => (s && s.length > n ? `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…` : s ?? null);
const places = [];
for (const h of hyp.hypotheses) {
  // A place the globe already has, under the id the research names or under the hypothesis's own id: running this
  // again must update it, not add a second copy.
  const key = h.already_in_globe && old.has(h.already_in_globe) ? h.already_in_globe : old.has(h.id) ? h.id : null;
  const kept = key && old.get(key);
  // Every link the research gives for this proposal, the proposer's own work and scholarship before Wikipedia.
  const pool = [...links(h.sources), ...links(h.proposed_by), ...[...(h.tests ?? []), ...(h.replies ?? []), ...(h.conflicts ?? []), ...(h.fits ?? [])].filter((x) => /^https?:/.test(x.source ?? '')).map((x) => ({ title: x.who ? `${x.who}${x.year ? `, ${x.year}` : ''}` : new URL(x.source).hostname, url: x.source }))];
  const wiki = (s) => /wikipedia\.org/.test(s.url);
  const sources = [...new Map([...pool.filter((s) => !wiki(s)), ...pool.filter(wiki)].map((s) => [s.url, s])).values()];
  // A place whose only support is Wikipedia stays in data/hypotheses.json and off the globe.
  if (!kept && sources.every(wiki)) { log.push(`legends: left "${h.id}" off the globe: Wikipedia is its only source`); continue; }
  const p = kept ? { ...kept } : {
    id: h.id, name: h.name, lat: h.lat, lon: h.lon, precision_km: Math.min(h.precision_km ?? 50, 2500), role: h.role ?? 'candidate', standing: h.standing,
    claim: short(h.argument), against: short(h.conflicts?.[0]?.how ?? h.replies?.[0]?.what ?? h.standing_reason),
    wikipedia: null, wikidata: null, country: h.country ?? null, underwater: !!h.underwater, sources: sources.slice(0, 4),
  };
  if (kept) old.delete(key);
  // What the research adds to every place, old or new.
  p.hypothesis = h.id;
  p.proposed_by = (h.proposed_by ?? []).filter((x) => x.who).map((x) => ({ who: x.who, year: x.year ?? null }));
  p.event_date = h.date_of_the_proposed_event ?? null;
  p.fits = [...new Set((h.fits ?? []).map((f) => f.claim).filter((c) => claimIds.has(c)))];
  p.conflicts = [...new Set((h.conflicts ?? []).map((f) => f.claim).filter((c) => claimIds.has(c)))];
  p.tests = (h.tests ?? []).filter((t) => t.what && t.result).map((t) => ({ what: short(t.what, 160), who: t.who ?? null, year: t.year ?? null, result: short(t.result, 260), url: /^https?:/.test(t.source ?? '') ? t.source : null }));
  places.push(p);
}
for (const p of old.values()) { places.push(p); log.push(`legends: kept "${p.id}", which no hypothesis claims`); }
const RANK = { mainstream: 0, plausible: 1, fringe: 2, rejected: 3, hoax: 4 };
places.sort((a, b) => (RANK[a.standing] ?? 9) - (RANK[b.standing] ?? 9) || (b.tests?.length ?? 0) - (a.tests?.length ?? 0) || a.name.localeCompare(b.name));
atlantis.places = places;
// The claims the places refer to, so the page can name them.
atlantis.claims = Object.fromEntries(plato.claims.map((c) => [c.id, { label: c.label, ref: c.ref, testable: !!c.testable }]));
atlantis.sea_level_m = -50;
write('data/legends.json', legends);
log.push(`legends: Atlantis has ${places.length} places (${places.filter((p) => p.tests.length).length} with a test)`);

// ---------- new map layers ----------
const site = existsSync(`${top}research/atlantis/site-data.json`) ? read('research/atlantis/site-data.json') : null;
if (site) {
  const sources = read('data/sources.json');
  const all = [...site.places.flatMap((pl) => pl.datasets), ...(site.global_layers ?? [])];
  // Hand-picked: the layers that are new, a browser can draw, and whose licence clearly allows showing them.
  const PICK = [
    [/GEBCO 2024 Type Identifier/, { id: 'gebco-tid-2024-noaa', name: 'Sea floor: measured or predicted (GEBCO 2024 TID)', group: 'seafloor', kind: 'coverage-map', bbox: [-180, -85, 180, 85], note: 'Whole ocean' }],
    [/EMODnet high-resolution areas/, { id: 'emodnet-highres-outlines', name: 'EMODnet: where high-resolution sea-floor surveys exist', group: 'seafloor', kind: 'coverage-map', bbox: [-36, 15, 43, 90], note: 'European seas' }],
    [/PNOA historic air photos/, { id: 'spain-ign-historic-photos', name: 'Spain: historic air photos (IGN)', group: 'historic', kind: 'imagery', bbox: [-18.3, 27.5, 4.5, 43.9], note: 'Spain' }],
  ];
  for (const [re, meta] of PICK) {
    const hits = all.filter((d) => re.test(d.name ?? '') && d.browser?.ok && (d.licence ?? d.license)?.share_ok && /\{bbox\}|\{z\}/.test(d.access?.url ?? ''));
    if (!hits.length) { log.push(`sources: nothing drawable matched ${re}`); continue; }
    const d = hits[0], lic = d.licence ?? d.license;
    const entry = {
      id: meta.id, name: meta.name, group: meta.group, kind: meta.kind, what: d.what ?? null,
      coverage: { bbox: d.coverage_bbox ?? meta.bbox, note: meta.note }, resolution_m: d.resolution_m ?? null,
      access: { type: d.access.type, url: d.access.url, tile_order: null, crs: 'EPSG:3857', min_zoom: 0, max_zoom: d.access.max_zoom ?? (meta.kind === 'imagery' ? 17 : 12), format: d.access.format ?? null, encoding: null, key_required: !!d.access.key_required, variants: [] },
      browser: d.browser, license: { name: lic.name ?? null, url: lic.url ?? null, attribution: lic.attribution ?? null, share_ok: true },
      docs: d.docs ?? null, notes: `${d.notes ?? ''} Added from the Atlantis site-data research (original name: ${d.name}).`.trim(),
    };
    const i = sources.sources.findIndex((s) => s.id === meta.id);
    if (i >= 0) sources.sources[i] = entry; else sources.sources.push(entry);
    log.push(`sources: ${i >= 0 ? 'updated' : 'added'} ${meta.id} (${d.access.type})`);
  }
  write('data/sources.json', sources);
}
console.log(log.join('\n'));
