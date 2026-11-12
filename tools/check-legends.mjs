#!/usr/bin/env node
// Checks data/legends.json. Node 20+, no dependencies.
//
//   node tools/check-legends.mjs              schema and house rules (exit 1 on errors)
//   node tools/check-legends.mjs --online     also re-resolves every place that has a
//                                             `wikipedia` title through the Wikipedia and
//                                             Wikidata APIs and prints any whose stored
//                                             coordinates are more than 5 km from Wikidata's,
//                                             and requests every source URL (HEAD, then GET).
//   --file <path>   check another file        --strict   exit 1 on online problems too
//   --quiet         print problems only
//
// Online results are a report: only schema errors change the exit code, unless --strict.
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
const FILE = opt('--file', join(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'legends.json'));
const QUIET = flag('--quiet');
const UA = 'abstracts-lost-check/1.0 (legends dataset checker; https://abstracts.co)';

const KINDS = ['sunken-land', 'lost-city', 'treasure', 'shipwreck', 'tomb', 'relic', 'remote-sensing-find'];
const STATUSES = ['legend', 'unlocated', 'disputed', 'found', 'hoax'];
const ROLES = ['found', 'candidate', 'search-area', 'claimed', 'inspiration', 'origin'];
const STANDINGS = ['confirmed', 'mainstream', 'plausible', 'fringe', 'rejected', 'hoax'];
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const HYPE = /\b(mysterious(?:ly)?|shocking|baffled|baffling|stunning|incredible|mind-blowing|jaw-dropping|unbelievable)\b/i;
const MAX_PLACES = 8;

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const isStr = (v) => typeof v === 'string' && v.trim().length > 0;
const isUrl = (v) => { try { const u = new URL(v); return u.protocol === 'https:' || u.protocol === 'http:'; } catch { return false; } };
// Sentence count that does not trip on initials ("K. T. Frost") or abbreviations.
function sentences(text) {
  if (!text) return 0;
  const t = text.replace(/\b([A-Z])\.(?=\s)/g, '$1').replace(/\b(St|Dr|Mr|Mrs|Prof|ed|eds|vol|ch|no|ca|c|et al)\.(?=\s)/g, '$1');
  return t.split(/(?<=[.!?]["')]?)\s+(?=[A-Z"'(\d])/).filter(Boolean).length;
}

function checkSource(where, s) {
  if (!s || typeof s !== 'object') return err(where, 'source must be an object');
  if (!isStr(s.title)) err(where, 'source needs a title');
  if (!isUrl(s.url)) err(where, `source needs an http(s) url, got ${JSON.stringify(s.url)}`);
  const extra = Object.keys(s).filter((k) => k !== 'title' && k !== 'url');
  if (extra.length) err(where, `unexpected source field(s): ${extra.join(', ')}`);
}

function checkText(where, text, { max, label }) {
  if (/[—–]/.test(text)) warn(where, `${label} contains an em or en dash`);
  const h = text.match(HYPE);
  if (h) warn(where, `${label} uses hype word "${h[0]}"`);
  const n = sentences(text);
  if (max && n > max) warn(where, `${label} has ${n} sentences (limit ${max})`);
}

function checkSchema(data) {
  if (data.version !== 1) err('file', 'version must be 1');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.checked ?? '')) err('file', 'checked must be a YYYY-MM-DD date');
  if (!Array.isArray(data.legends) || data.legends.length === 0) return err('file', 'legends must be a non-empty array');
  // `claims` is on the Atlantis entry only: the claims of Plato its places refer to, from data/plato.json.
const LEGEND_OPTIONAL = ['claims'];
const PLACE_OPTIONAL = ['hypothesis', 'proposed_by', 'event_date', 'fits', 'conflicts', 'tests'];
const LEGEND_KEYS = ['id', 'name', 'aka', 'kind', 'status', 'summary', 'when', 'origin', 'look_for', 'sea_level_m', 'tags', 'places', 'claims'];
  // The last six come from data/hypotheses.json (merge-atlantis.mjs): which proposal a place is, and what it fits, breaks and was tested by.
const PLACE_KEYS = ['id', 'name', 'lat', 'lon', 'precision_km', 'role', 'standing', 'claim', 'against', 'wikipedia', 'wikidata', 'country', 'underwater', 'sources', 'hypothesis', 'proposed_by', 'event_date', 'fits', 'conflicts', 'tests'];
  const seen = new Set();
  for (const [i, l] of data.legends.entries()) {
    const L = `legend ${l?.id ?? '#' + i}`;
    if (!l || typeof l !== 'object') { err(L, 'must be an object'); continue; }
    for (const k of LEGEND_KEYS.filter((k) => !LEGEND_OPTIONAL.includes(k))) if (!(k in l)) err(L, `missing field "${k}"`);
    for (const k of Object.keys(l)) if (!LEGEND_KEYS.includes(k)) err(L, `unexpected field "${k}"`);
    if (!isStr(l.id) || !ID.test(l.id)) err(L, 'id must be lowercase letters, digits and dashes');
    if (seen.has(l.id)) err(L, 'duplicate legend id'); seen.add(l.id);
    if (!isStr(l.name)) err(L, 'name is required');
    if (!Array.isArray(l.aka) || l.aka.some((a) => !isStr(a))) err(L, 'aka must be an array of strings');
    if (!KINDS.includes(l.kind)) err(L, `kind "${l.kind}" is not one of ${KINDS.join(', ')}`);
    if (!STATUSES.includes(l.status)) err(L, `status "${l.status}" is not one of ${STATUSES.join(', ')}`);
    if (!isStr(l.summary)) err(L, 'summary is required'); else checkText(L, l.summary, { max: 3, label: 'summary' });
    if (l.when !== null && !isStr(l.when)) err(L, 'when must be a string or null');
    if (l.origin !== null) {
      if (!l.origin || typeof l.origin !== 'object' || !isStr(l.origin.text)) err(L, 'origin must be null or { text, url }');
      else if (l.origin.url !== null && !isUrl(l.origin.url)) err(L, 'origin.url must be an http(s) url or null');
    }
    if (!isStr(l.look_for)) err(L, 'look_for is required'); else checkText(L, l.look_for, { max: 2, label: 'look_for' });
    if (l.sea_level_m !== null) {
      if (typeof l.sea_level_m !== 'number' || !Number.isFinite(l.sea_level_m) || l.sea_level_m > 0 || l.sea_level_m < -200) err(L, 'sea_level_m must be null or a number between -200 and 0');
      if (l.kind !== 'sunken-land') err(L, 'sea_level_m is only for sunken-land entries');
    }
    if (!Array.isArray(l.tags) || l.tags.some((t) => !isStr(t) || !ID.test(t))) err(L, 'tags must be an array of lowercase dash-separated strings');
    if (!Array.isArray(l.places) || l.places.length < 1) { err(L, 'needs at least one place'); continue; }
    if (l.places.length > MAX_PLACES) warn(L, `has ${l.places.length} places (target is 1 to ${MAX_PLACES})`);
    const placeIds = new Set();
    for (const [j, p] of l.places.entries()) {
      const P = `${l.id}/${p?.id ?? '#' + j}`;
      if (!p || typeof p !== 'object') { err(P, 'place must be an object'); continue; }
      for (const k of PLACE_KEYS.filter((k) => !PLACE_OPTIONAL.includes(k))) if (!(k in p)) err(P, `missing field "${k}"`);
      for (const k of Object.keys(p)) if (!PLACE_KEYS.includes(k)) err(P, `unexpected field "${k}"`);
      if (!isStr(p.id) || !ID.test(p.id)) err(P, 'id must be lowercase letters, digits and dashes');
      if (placeIds.has(p.id)) err(P, 'duplicate place id in this legend'); placeIds.add(p.id);
      if (!isStr(p.name)) err(P, 'name is required');
      if (typeof p.lat !== 'number' || !(p.lat >= -90 && p.lat <= 90)) err(P, `lat out of range: ${p.lat}`);
      if (typeof p.lon !== 'number' || !(p.lon >= -180 && p.lon <= 180)) err(P, `lon out of range: ${p.lon}`);
      if (typeof p.precision_km !== 'number' || !(p.precision_km > 0 && p.precision_km <= 5000)) err(P, `precision_km must be a number above 0: ${p.precision_km}`);
      if (!ROLES.includes(p.role)) err(P, `role "${p.role}" is not one of ${ROLES.join(', ')}`);
      if (!STANDINGS.includes(p.standing)) err(P, `standing "${p.standing}" is not one of ${STANDINGS.join(', ')}`);
      if (!isStr(p.claim)) err(P, 'claim is required'); else checkText(P, p.claim, { max: 2, label: 'claim' });
      if (p.against !== null && !isStr(p.against)) err(P, 'against must be a string or null');
      if (isStr(p.against)) checkText(P, p.against, { max: 1, label: 'against' });
      if (p.standing === 'confirmed' && p.against !== null) warn(P, 'against should be null for a confirmed place');
      if (p.standing !== 'confirmed' && p.against === null) warn(P, `against is null but standing is "${p.standing}"`);
      if (p.wikipedia !== null && !isStr(p.wikipedia)) err(P, 'wikipedia must be a title or null');
      if (p.wikidata !== null && !/^Q[1-9]\d*$/.test(p.wikidata ?? '')) err(P, 'wikidata must be a QID or null');
      if ((p.wikipedia === null) !== (p.wikidata === null)) err(P, 'wikipedia and wikidata must both be set or both be null');
      if (p.country !== null && !/^[A-Z]{2}$/.test(p.country ?? '')) err(P, `country must be ISO 3166-1 alpha-2 or null: ${JSON.stringify(p.country)}`);
      if (typeof p.underwater !== 'boolean') err(P, 'underwater must be true or false');
      if (!Array.isArray(p.sources) || p.sources.length < 1) { err(P, 'needs at least one source'); continue; }
      p.sources.forEach((s, k) => checkSource(`${P} source ${k + 1}`, s));
      if (p.sources.every((s) => /(^|\.)wikipedia\.org$/.test(safeHost(s.url)))) err(P, 'Wikipedia is the only source');
    }
  }
}
function safeHost(u) { try { return new URL(u).host; } catch { return ''; } }

// ---------- online checks
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const nextSlot = new Map();
async function throttle(host, gapMs) {
  const now = Date.now();
  const at = Math.max(now, nextSlot.get(host) ?? 0);
  nextSlot.set(host, at + gapMs);
  if (at > now) await sleep(at - now);
}
async function getJson(url) {
  await throttle(new URL(url).host, 220); // under 5 requests a second per Wikimedia host
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { 'user-agent': UA, accept: 'application/json' }, signal: AbortSignal.timeout(30000) });
    if (res.status === 429 || res.status >= 500) { await sleep(2000 * (attempt + 1)); continue; }
    if (!res.ok) throw new Error(`${res.status} for ${url}`);
    return res.json();
  }
  throw new Error(`gave up on ${url}`);
}
function km(a, b) {
  const R = 6371.0088, rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad, dLon = (b.lon - a.lon) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function p625(entity) {
  const claims = (entity?.claims?.P625 ?? []).filter((c) => c.rank !== 'deprecated');
  const pick = claims.find((c) => c.rank === 'preferred') ?? claims[0];
  const v = pick?.mainsnak?.datavalue?.value;
  return v && String(v.globe).endsWith('/Q2') ? { lat: v.latitude, lon: v.longitude } : null;
}

async function checkCoordinates(data) {
  const report = { checked: 0, moved: [], coarse: [], qidChanged: [], noCoords: [], missing: [] };
  const places = data.legends.flatMap((l) => l.places.filter((p) => p.wikipedia).map((p) => ({ l, p })));
  const titles = [...new Set(places.map(({ p }) => p.wikipedia))];
  const byTitle = new Map();
  for (let i = 0; i < titles.length; i += 40) {
    const chunk = titles.slice(i, i + 40);
    const j = await getJson('https://en.wikipedia.org/w/api.php?action=query&prop=pageprops|coordinates&ppprop=wikibase_item&colimit=max&redirects=1&format=json&formatversion=2&titles=' + encodeURIComponent(chunk.join('|')));
    const from = new Map();
    for (const n of j.query.normalized ?? []) from.set(n.to, [...(from.get(n.to) ?? []), n.from]);
    for (const r of j.query.redirects ?? []) from.set(r.to, [...(from.get(r.to) ?? []), r.from, ...(from.get(r.from) ?? [])]);
    for (const page of j.query.pages ?? []) {
      const rec = { title: page.title, missing: !!page.missing, qid: page.pageprops?.wikibase_item ?? null, wp: page.coordinates?.[0] ? { lat: page.coordinates[0].lat, lon: page.coordinates[0].lon } : null };
      for (const name of [page.title, ...(from.get(page.title) ?? [])]) byTitle.set(name, rec);
    }
  }
  const entities = new Map();
  for (const { l, p } of places) {
    const where = `${l.id}/${p.id}`;
    const rec = byTitle.get(p.wikipedia);
    if (!rec || rec.missing || !rec.qid) { report.missing.push(`${where}: Wikipedia title "${p.wikipedia}" did not resolve`); continue; }
    if (rec.qid !== p.wikidata) report.qidChanged.push(`${where}: "${p.wikipedia}" now resolves to ${rec.qid}, stored ${p.wikidata}`);
    if (!entities.has(rec.qid)) {
      const j = await getJson(`https://www.wikidata.org/wiki/Special:EntityData/${rec.qid}.json`);
      entities.set(rec.qid, Object.values(j.entities)[0]);
    }
    let ref = p625(entities.get(rec.qid)), refName = `Wikidata ${rec.qid}`;
    if (!ref && rec.wp) { ref = rec.wp; refName = `Wikipedia article (Wikidata ${rec.qid} has no P625)`; }
    if (!ref) { report.noCoords.push(`${where}: neither Wikidata ${rec.qid} nor "${p.wikipedia}" has coordinates`); continue; }
    report.checked++;
    const d = km({ lat: p.lat, lon: p.lon }, ref);
    if (d > 5) {
      const line = `${where}: ${d.toFixed(1)} km from ${refName} (stored ${p.lat}, ${p.lon}; reference ${ref.lat.toFixed(4)}, ${ref.lon.toFixed(4)}; precision_km ${p.precision_km})`;
      (d <= p.precision_km ? report.coarse : report.moved).push(line);
    }
  }
  return report;
}

// Statuses that mean "a person could open this, a script may not": refusals, rate limits and
// the empty 202 that some publishers' bot walls return.
const BLOCKED = new Set([202, 401, 403, 405, 406, 429, 451, 999]);
const BROWSER_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
async function requestOnce(url, method, ua = `Mozilla/5.0 (compatible; ${UA})`) {
  try {
    const res = await fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(25000), headers: { 'user-agent': ua, accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8', 'accept-language': 'en' } });
    if (method === 'GET') res.body?.cancel().catch(() => {});
    return { status: res.status };
  } catch (e) { return { status: 0, error: e.cause?.code ?? e.name ?? String(e) }; }
}
async function checkUrl(url) {
  const host = new URL(url).host;
  await throttle(host, 600);
  let r = await requestOnce(url, 'HEAD');
  if (r.status !== 200) { await throttle(host, 600); r = await requestOnce(url, 'GET'); }
  if (r.status === 200) return { url, state: 'ok', status: 200 };
  // Some sites drop or refuse anything that does not look like a browser; try once as one.
  await throttle(host, 1500);
  const b = await requestOnce(url, 'GET', BROWSER_UA);
  if (b.status === 200) return { url, state: 'ok', status: 200, note: 'answered only to a browser user agent' };
  if (b.status !== 0 || r.status === 0) r = b.status !== 0 ? b : r;
  const doi = url.match(/^https?:\/\/(?:dx\.)?doi\.org\/(10\..+)$/i)?.[1];
  if (doi && (BLOCKED.has(r.status) || r.status === 0)) {
    // A DOI whose publisher page refuses or drops scripts still counts as resolvable if the handle exists.
    await throttle('doi.org', 300);
    const h = await requestOnce(`https://doi.org/api/handles/${doi}`, 'GET');
    if (h.status === 200) return { url, state: 'blocked', status: r.status, note: `publisher page ${r.status ? 'refuses automated requests' : 'did not answer (' + r.error + ')'}; the DOI is registered and resolves` };
    return { url, state: 'error', status: r.status, note: `DOI handle check returned ${h.status}` };
  }
  if (BLOCKED.has(r.status)) return { url, state: 'blocked', status: r.status, note: 'site refuses automated requests' };
  return { url, state: 'error', status: r.status, note: r.error ?? '' };
}
async function checkSources(data) {
  const uses = new Map();
  for (const l of data.legends) {
    if (l.origin?.url) uses.set(l.origin.url, [...(uses.get(l.origin.url) ?? []), `${l.id} (origin)`]);
    for (const p of l.places) for (const s of p.sources) uses.set(s.url, [...(uses.get(s.url) ?? []), `${l.id}/${p.id}`]);
  }
  const urls = [...uses.keys()];
  const results = [];
  let next = 0;
  async function worker() { while (next < urls.length) { const url = urls[next++]; results.push(await checkUrl(url)); } }
  await Promise.all(Array.from({ length: 8 }, worker));
  return { results, uses };
}

// ---------- run
let data;
try { data = JSON.parse(await readFile(FILE, 'utf8')); } catch (e) { console.error(`cannot read ${FILE}: ${e.message}`); process.exit(1); }
checkSchema(data);

const count = (arr) => arr.reduce((m, k) => m.set(k, (m.get(k) ?? 0) + 1), new Map());
const fmt = (m) => [...m.entries()].map(([k, v]) => `${k} ${v}`).join(', ');
const places = (data.legends ?? []).flatMap((l) => l.places ?? []);
if (!QUIET) {
  console.log(`${FILE}`);
  console.log(`legends ${data.legends?.length ?? 0}, places ${places.length}, sources ${places.reduce((n, p) => n + (p.sources?.length ?? 0), 0)}`);
  console.log(`by kind: ${fmt(count((data.legends ?? []).map((l) => l.kind)))}`);
  console.log(`by status: ${fmt(count((data.legends ?? []).map((l) => l.status)))}`);
  console.log(`place standing: ${fmt(count(places.map((p) => p.standing)))}`);
}
for (const w of warnings) console.log(`warning  ${w}`);
for (const e of errors) console.log(`ERROR    ${e}`);
console.log(`schema: ${errors.length} error(s), ${warnings.length} warning(s)`);

let onlineProblems = 0;
if (flag('--online') && errors.length === 0) {
  console.log('\nonline: coordinates against Wikidata P625 (through the English Wikipedia title)');
  const c = await checkCoordinates(data);
  for (const line of c.missing) console.log(`ERROR    ${line}`);
  for (const line of c.qidChanged) console.log(`changed  ${line}`);
  for (const line of c.noCoords) console.log(`no-coord ${line}`);
  for (const line of c.moved) console.log(`moved    ${line}`);
  for (const line of c.coarse) console.log(`coarse   ${line}  [within the stated precision]`);
  console.log(`coordinates: ${c.checked} compared, ${c.moved.length} more than 5 km off and outside precision, ${c.coarse.length} more than 5 km off but within precision, ${c.qidChanged.length} QID change(s), ${c.noCoords.length} without reference coordinates, ${c.missing.length} unresolved title(s)`);
  onlineProblems += c.missing.length + c.moved.length + c.qidChanged.length;

  console.log('\nonline: source URLs (HEAD, then GET)');
  const { results, uses } = await checkSources(data);
  const by = (state) => results.filter((r) => r.state === state).sort((a, b) => a.url.localeCompare(b.url));
  for (const r of by('blocked')) console.log(`blocked  [${r.status || 'no response'}] ${r.url}  (${r.note})`);
  for (const r of by('error')) console.log(`ERROR    [${r.status || 'no response'}] ${r.url} ${r.note}  used by ${uses.get(r.url).join(', ')}`);
  console.log(`sources: ${results.length} unique URLs, ${by('ok').length} ok, ${by('blocked').length} blocked, ${by('error').length} error(s)`);
  onlineProblems += by('error').length;
} else if (flag('--online')) {
  console.log('\nonline checks skipped: fix the schema errors first');
}

process.exit(errors.length > 0 || (flag('--strict') && onlineProblems > 0) ? 1 : 0);
