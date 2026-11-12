#!/usr/bin/env node
// What is already on record near a point? Run this before calling anything a discovery.
//
//   node tools/known.mjs --lat 20.68 --lon -89.59 --km 20
//   node tools/known.mjs --lat 20.68 --lon -89.59 --km 20 --json > known.json
//
// Asks two open databases: Wikidata (everything with coordinates in the circle) and OpenStreetMap (things tagged historic).
// An empty answer is NOT proof that a site is new. Both miss most of what national heritage registers hold, and
// archaeologists keep many site locations unpublished so they are not looted. The check-a-find skill lists what to do next.
import { args, km } from './geo.mjs';

const UA = 'abstracts-atlantis-tools/1 (+https://abstracts.co/a/atlantis)';
const SITE = /archaeolog|ruin|mound|tumul|barrow|hillfort|fort|shipwreck|wreck|tomb|necropol|temple|pyramid|ancient|prehistoric|castle|monument|megalith|dolmen|menhir|stone circle|cave|heritage|rock art|petroglyph|geoglyph|palace|monaster|shrine|roman villa|oppidum|tell|kurgan|stupa|former settlement|ghost town|abandoned/i;

export const wikidata = async (lat, lon, radius) => {
  const q = `SELECT ?item ?itemLabel ?coord (SAMPLE(?l) AS ?kind) WHERE { SERVICE wikibase:around { ?item wdt:P625 ?coord. bd:serviceParam wikibase:center "Point(${lon} ${lat})"^^geo:wktLiteral; wikibase:radius "${radius}"; wikibase:distance ?dist. } OPTIONAL { ?item wdt:P31 ?i. ?i rdfs:label ?l. FILTER(LANG(?l) = "en") } SERVICE wikibase:label { bd:serviceParam wikibase:language "en,es,fr,de,it,pt,ar,ru,zh,ja". } } GROUP BY ?item ?itemLabel ?coord ?dist ORDER BY ?dist LIMIT 500`;
  const r = await fetch(`https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(q)}`, { headers: { 'User-Agent': UA, Accept: 'application/sparql-results+json' } });
  if (!r.ok) throw new Error(`Wikidata answered ${r.status}`);
  return (await r.json()).results.bindings.flatMap((b) => {
    const m = /Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(b.coord.value);
    if (!m || /^Q\d+$/.test(b.itemLabel.value)) return [];
    return [{ name: b.itemLabel.value, kind: b.kind?.value ?? '', lat: Number(m[2]), lon: Number(m[1]), url: b.item.value.replace('http://', 'https://'), from: 'Wikidata', site: SITE.test(b.kind?.value ?? '') }];
  });
};

export const openstreetmap = async (lat, lon, radius) => {
  const q = `[out:json][timeout:25];(nwr["historic"](around:${Math.min(radius, 50) * 1000},${lat},${lon}););out center tags 400;`;
  const r = await fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: `data=${encodeURIComponent(q)}`, headers: { 'User-Agent': UA, Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }, signal: AbortSignal.timeout(60000) });
  if (!r.ok) throw new Error(`OpenStreetMap (Overpass) answered ${r.status}`);
  return (await r.json()).elements.flatMap((e) => {
    const la = e.lat ?? e.center?.lat, lo = e.lon ?? e.center?.lon, t = e.tags ?? {};
    if (la == null || ['memorial', 'wayside_cross', 'wayside_shrine', 'boundary_stone', 'milestone'].includes(t.historic)) return [];
    return [{ name: t.name ?? '(no name)', kind: [t.historic, t.site_type].filter(Boolean).join(', ').replaceAll('_', ' '), lat: la, lon: lo, url: `https://www.openstreetmap.org/${e.type}/${e.id}`, from: 'OpenStreetMap', site: true }];
  });
};

export const known = async (lat, lon, radius) => {
  const errors = [];
  const lists = await Promise.all([wikidata(lat, lon, radius).catch((e) => (errors.push(e.message), [])), openstreetmap(lat, lon, radius).catch((e) => (errors.push(e.message), []))]);
  const rows = lists.flat().map((r) => ({ ...r, km: Number(km(lat, lon, r.lat, r.lon).toFixed(2)) })).sort((a, b) => a.km - b.km);
  return { lat, lon, radius_km: radius, sites: rows.filter((r) => r.site), other: rows.filter((r) => !r.site), errors, note: 'An empty list is not proof of a discovery: these databases miss most of what national heritage registers hold.' };
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = args();
  const lat = Number(a.lat), lon = Number(a.lon), radius = Math.max(1, Math.min(Number(a.km ?? 10), 100));
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) { console.error('Usage: node tools/known.mjs --lat 20.68 --lon -89.59 --km 20 [--json]'); process.exit(2); }
  const k = await known(lat, lon, radius);
  if (a.json) console.log(JSON.stringify(k, null, 2));
  else {
    console.log(`Within ${radius} km of ${lat}, ${lon}: ${k.sites.length} recorded sites or monuments, ${k.other.length} other named places.\n`);
    for (const r of k.sites.slice(0, 60)) console.log(`${String(r.km).padStart(6)} km  ${r.name}${r.kind ? `  [${r.kind}]` : ''}  ${r.url}`);
    if (k.errors.length) console.log(`\nCould not reach: ${k.errors.join('; ')}`);
    console.log(`\n${k.note}`);
  }
}
