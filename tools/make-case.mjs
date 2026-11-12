#!/usr/bin/env node
// Builds data/case.json, the small file the globe reads to show the state of the case at a glance: Plato's claims with
// short names, every search in date order with how it ended, and for each place what is said to fit and to break.
// It only reshapes data/plato.json, data/searches.json and data/hypotheses.json; it adds no facts.
//   node tools/make-case.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const data = new URL('../data/', import.meta.url).pathname;
const read = (f) => JSON.parse(readFileSync(data + f, 'utf8'));
const plato = read('plato.json'), searches = read('searches.json').searches, hyp = read('hypotheses.json').hypotheses;
const atlantis = read('legends.json').legends.find((l) => l.id === 'atlantis');
const cut = (s, n) => { s = String(s ?? '').replace(/\s+/g, ' ').trim(); return s.length > n ? `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…` : s; };

// A name short enough for a column head or a chip. Each is a shortening of that claim's own label in data/plato.json.
const SHORT = {
  'beyond-pillars': 'Beyond the Pillars', 'atlantic-navigable-then': 'Ocean could be sailed then', 'larger-than-libya-and-asia': 'Larger than Libya and Asia',
  'islands-and-opposite-continent': 'Islands, then a far continent', 'mediterranean-is-a-harbour': 'Inner sea only a harbour', 'gadeirus-end-of-island': 'One end faces Gadeira',
  'atlantic-named-for-atlas': 'Named after Atlas', 'nine-thousand-years': '9,000 years before Solon', 'claimed-true-story': 'Told as a true story',
  'republic-city-made-real': 'The ideal city made real', 'names-translated-by-solon': 'Names translated by Solon', 'empire-to-egypt-and-tyrrhenia': 'Ruled as far as Egypt',
  'war-with-athens': 'War with Athens', 'sank-in-a-day-and-night': 'Sank in a day and a night', 'impassable-mud': 'A shoal of mud left behind',
  'periodic-catastrophes': 'Disasters come round again', 'attica-eroded-after-deluges': 'Attica stripped by floods', 'poseidon-cleito-hill': 'The hill the rings were cut from',
  'ringed-city': 'Rings of land and sea', 'ring-widths': 'Rings 3, 2 and 1 stades wide', 'central-island-diameter': 'Central island 5 stades across',
  'canal-to-sea': 'Canal 50 stades to the sea', 'bridges-and-trireme-channels': 'Bridges and ship tunnels', 'stone-walls-and-metals': 'Walls coated in metal',
  'red-white-black-stone': 'Red, white and black stone', 'outer-wall-50-stades': 'Outer wall 50 stades out', 'temple-of-poseidon': 'Temple one stade long',
  'hot-and-cold-springs': 'Hot and cold springs', 'race-course-and-gardens': 'Racecourse and gardens', 'fleet-and-harbours': 'Fleet and harbours',
  'lofty-coast': 'A high, steep coast', 'great-plain': 'The great plain', 'mountains-shelter-north': 'Sheltered from the north', 'mountains-around-plain': 'Mountains round the plain',
  'plain-ditch': 'Ditch round the plain', 'plain-canals': 'Canals across the plain', 'two-harvests': 'Two harvests a year', 'forests-and-animals': 'Timber and animals',
  elephants: 'Elephants', 'orichalcum-and-metals': 'Orichalcum and metals', 'fruits-and-scents': 'Fruits and scented plants', 'ten-kings': 'Ten kings',
  'bull-ritual': 'The bull sacrifice', 'army-and-allotments': 'Army and land lots', 'critias-breaks-off': 'The story breaks off',
};

const claims = plato.claims.map((c) => {
  if (!SHORT[c.id]) throw new Error(`no short name for claim ${c.id}: add one in tools/make-case.mjs`);
  return { id: c.id, short: SHORT[c.id], label: c.label, ref: c.ref, quote: c.quote_bury ?? c.quote ?? null, testable: !!c.testable, strength: c.test_strength ?? null, how_to_test: c.how_to_test ?? null, url: c.url ?? null, numbers: (c.numbers ?? []).map((n) => ({ what: n.what, value: n.value, unit: n.unit, ref: n.ref })) };
});
const known = new Set(claims.map((c) => c.id));

// What is said to fit and to break at each place on the globe, with the sentence and the source behind each mark.
const onGlobe = new Map(atlantis.places.filter((p) => p.hypothesis).map((p) => [p.hypothesis, p.id]));
const places = {};
for (const h of hyp) {
  const place = onGlobe.get(h.id);
  if (!place) continue;
  const marks = (list) => Object.fromEntries(list.filter((x) => known.has(x.claim)).map((x) => [x.claim, { how: cut(x.how, 320), source: x.source ?? null }]));
  places[place] = { fits: marks(h.fits), breaks: marks(h.conflicts), checks: (h.tests ?? []).length, reason: cut(h.standing_reason, 260) };
}

const timeline = searches.map((s) => ({
  id: s.id,
  year: Number(String(s.date_start).slice(0, 4)),
  date: s.date_start,
  title: s.title,
  kind: s.kind,
  who: cut((s.who ?? [])[0] ?? '', 90),
  status: s.outcome.status,
  announced: cut(s.announced?.text, 240),
  outcome: cut(s.outcome.text, 260),
  place: onGlobe.get(s.place?.hypothesis_id) ?? null,
  lat: s.place?.lat ?? null, lon: s.place?.lon ?? null,
  source: s.outcome.source ?? s.announced?.source ?? null,
})).sort((a, b) => String(a.date).localeCompare(String(b.date)));

const out = { what: 'The state of the Atlantis case in one small file, made by tools/make-case.mjs from plato.json, searches.json and hypotheses.json.', made: new Date().toISOString().slice(0, 10), claims, places, searches: timeline };
writeFileSync(`${data}case.json`, `${JSON.stringify(out)}\n`);
const checked = new Set(Object.values(places).flatMap((p) => [...Object.keys(p.fits), ...Object.keys(p.breaks)]));
console.log(`case.json: ${claims.length} claims (${claims.filter((c) => c.testable).length} checkable, ${claims.filter((c) => c.testable && !checked.has(c.id)).length} never held against a place), ${Object.keys(places).length} places, ${timeline.length} searches, ${(JSON.stringify(out).length / 1024).toFixed(0)} KB`);
