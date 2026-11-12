#!/usr/bin/env node
// Validates library/catalog.json and every indexes/<id>/index.json. Node 20+, no dependencies.
// Usage: node check-library.mjs [--quiet]   Exits 1 on any error.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, 'out');
const quiet = process.argv.includes('--quiet');
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const NODE_RE = /^\d{4}$/;
const CATALOG_KINDS = new Set(['ancient-text', 'book', 'paper', 'report', 'thesis', 'film', 'web']);
const INDEX_KINDS = new Set(['ancient-text', 'book', 'paper', 'report']);
const QUALITY = new Set(['primary', 'peer-reviewed', 'book', 'self-published', 'press']);
const MAX_TEXT = 280000;
const MAX_SUMMARY_WORDS = 60;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const words = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const nonEmpty = (v) => typeof v === 'string' && v.trim().length > 0;
const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    err(`${path.relative(here, file)}: cannot read or parse JSON (${e.message})`);
    return null;
  }
}

function claimIds() {
  const ids = new Set();
  const lanes = path.join(here, '..', 'data');
  try {
    const brief = fs.readFileSync(path.join(lanes, 'BRIEF.md'), 'utf8');
    for (const m of brief.matchAll(/^\|\s*`([a-z0-9-]+)`\s*\|/gm)) ids.add(m[1]);
  } catch { /* brief not present */ }
  try {
    const plato = JSON.parse(fs.readFileSync(path.join(lanes, 'plato.json'), 'utf8'));
    for (const c of plato.claims || []) if (c.id) ids.add(c.id);
  } catch { /* plato.json not present */ }
  return ids;
}

// ---------- catalog
const catalogPath = path.join(here, '..', 'library', 'catalog.json');
const catalog = fs.existsSync(catalogPath) ? readJson(catalogPath) : (err('library/catalog.json is missing'), null);
const knownClaims = claimIds();
const catalogById = new Map();
const indexedBy = new Map(); // index path -> catalog id

if (catalog) {
  if (catalog.version !== 1) err('catalog.version must be 1');
  if (!DATE_RE.test(catalog.checked || '')) err('catalog.checked must be YYYY-MM-DD');
  if (!Array.isArray(catalog.works)) err('catalog.works must be an array');
  for (const w of catalog.works || []) {
    const where = `catalog work ${w && w.id}`;
    if (!isObj(w)) { err('catalog has a non-object work'); continue; }
    if (!nonEmpty(w.id) || !ID_RE.test(w.id)) err(`${where}: id must be lowercase letters, digits and dashes`);
    if (catalogById.has(w.id)) err(`${where}: duplicate id`);
    catalogById.set(w.id, w);
    if (!nonEmpty(w.title)) err(`${where}: title missing`);
    if (!Array.isArray(w.authors) || !w.authors.length || !w.authors.every(nonEmpty)) err(`${where}: authors must be a non-empty list of strings`);
    if (!Array.isArray(w.translators)) err(`${where}: translators must be a list (empty if none)`);
    if (!(w.year === null || Number.isInteger(w.year))) err(`${where}: year must be an integer or null`);
    if (!CATALOG_KINDS.has(w.kind)) err(`${where}: kind "${w.kind}" is not one of ${[...CATALOG_KINDS].join(', ')}`);
    if (!nonEmpty(w.language)) err(`${where}: language missing`);
    if (!nonEmpty(w.what)) err(`${where}: "what" missing`);
    else if (words(w.what) > 90) warn(`${where}: "what" is ${words(w.what)} words; keep it to two or three sentences`);
    if (!isObj(w.about)) err(`${where}: about must be an object`);
    else {
      for (const k of ['claims', 'places', 'topics']) if (!Array.isArray(w.about[k])) err(`${where}: about.${k} must be a list`);
      if (knownClaims.size) for (const c of w.about.claims || []) if (!knownClaims.has(c)) err(`${where}: unknown claim id "${c}"`);
    }
    if (!nonEmpty(w.url)) err(`${where}: url missing`);
    else if (!/^https?:\/\//.test(w.url)) err(`${where}: url must start with http(s)://`);
    if (!(w.doi === null || nonEmpty(w.doi))) err(`${where}: doi must be a string or null`);
    if (!Array.isArray(w.cited_by_lanes)) err(`${where}: cited_by_lanes must be a list`);
    if (!QUALITY.has(w.quality)) err(`${where}: quality "${w.quality}" is not one of ${[...QUALITY].join(', ')}`);
    const lic = w.licence;
    if (!isObj(lic)) err(`${where}: licence must be an object`);
    else {
      if (!nonEmpty(lic.name)) err(`${where}: licence.name missing`);
      if (typeof lic.redistributable !== 'boolean') err(`${where}: licence.redistributable must be true or false`);
      if (!nonEmpty(lic.how_decided)) err(`${where}: licence.how_decided missing`);
      if (!(typeof lic.url === 'string')) err(`${where}: licence.url must be a string`);
    }
    if (w.index === null) {
      if (!nonEmpty(w.not_indexed_because)) err(`${where}: not indexed, so not_indexed_because must say why`);
    } else {
      if (!nonEmpty(w.index) || !/^indexes\/[a-z0-9-]+$/.test(w.index)) err(`${where}: index must be null or "indexes/<id>"`);
      else {
        if (indexedBy.has(w.index)) err(`${where}: index ${w.index} is already used by ${indexedBy.get(w.index)}`);
        indexedBy.set(w.index, w.id);
        if (!fs.existsSync(path.join(here, '..', w.index, 'index.json'))) err(`${where}: ${w.index}/index.json does not exist`);
      }
      if (w.not_indexed_because !== null) err(`${where}: indexed works must have not_indexed_because: null`);
      if (isObj(lic)) {
        if (lic.redistributable !== true) err(`${where}: indexed, but licence.redistributable is not true`);
        if (!nonEmpty(lic.name) || !nonEmpty(lic.url)) err(`${where}: indexed works need a licence name and URL`);
        if (/\b(CC[- ]BY[- ](SA|NC)|share-?alike|non-?commercial)\b/i.test(lic.name || '')) err(`${where}: indexed, but licence "${lic.name}" is BY-SA or BY-NC`);
      }
      if (!INDEX_KINDS.has(w.kind)) err(`${where}: kind "${w.kind}" cannot be indexed (index kinds: ${[...INDEX_KINDS].join(', ')})`);
    }
  }
}

// ---------- indexes
const indexesDir = path.join(here, '..', 'indexes');
const dirs = fs.existsSync(indexesDir) ? fs.readdirSync(indexesDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort() : [];
let leafCount = 0;
let missingFiles = 0;
let shaChecked = 0;
for (const id of dirs) {
  const dir = path.join(indexesDir, id);
  const rel = `indexes/${id}`;
  const where = `index ${id}`;
  if (!ID_RE.test(id)) err(`${where}: directory name must be lowercase letters, digits and dashes`);
  if (!indexedBy.has(rel)) err(`${where}: no catalog entry points at ${rel}`);
  const idxFile = path.join(dir, 'index.json');
  if (!fs.existsSync(idxFile)) { err(`${where}: index.json missing`); continue; }
  const idx = readJson(idxFile);
  if (!idx) continue;
  if (idx.id !== id) err(`${where}: index.json id "${idx.id}" does not match the directory`);
  const cat = catalogById.get(indexedBy.get(rel));
  for (const k of ['title', 'summary', 'language', 'kind', 'built']) if (!nonEmpty(idx[k])) err(`${where}: ${k} missing`);
  if (!INDEX_KINDS.has(idx.kind)) err(`${where}: kind "${idx.kind}" invalid`);
  if (cat && cat.kind !== idx.kind) err(`${where}: kind "${idx.kind}" differs from the catalog's "${cat.kind}"`);
  if (!DATE_RE.test(idx.built || '')) err(`${where}: built must be YYYY-MM-DD`);
  const sentences = (idx.summary || '').split(/(?<=[.!?])\s+/).filter(Boolean).length;
  if (sentences > 4) warn(`${where}: summary has ${sentences} sentences; the brief says two or three`);
  const s = idx.source;
  if (!isObj(s)) err(`${where}: source must be an object`);
  else {
    for (const k of ['url', 'publisher', 'date', 'file', 'sha256', 'license', 'license_url']) if (!nonEmpty(s[k])) err(`${where}: source.${k} missing`);
    if (!Number.isInteger(s.pages) || s.pages < 0) err(`${where}: source.pages must be a non-negative integer`);
    if (!/^[0-9a-f]{64}$/.test(s.sha256 || '')) err(`${where}: source.sha256 is not a SHA-256 hex string`);
    if (nonEmpty(s.file)) {
      const f = path.join(here, s.file);
      if (fs.existsSync(f) && fs.statSync(f).isFile()) {
        const h = crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
        shaChecked++;
        if (h !== s.sha256) err(`${where}: sha256 of ${s.file} is ${h}, index.json says ${s.sha256}`);
      } else missingFiles++;
    }
  }
  const t = idx.tool;
  if (!isObj(t) || !nonEmpty(t.name) || !nonEmpty(t.method) || !Array.isArray(t.models) || typeof t.version !== 'string') err(`${where}: tool needs name, version (string), method and models (list)`);
  if (!Array.isArray(idx.tree) || !idx.tree.length) { err(`${where}: tree must be a non-empty list`); continue; }

  const seen = new Set();
  const textDir = path.join(dir, 'text');
  const leafIds = new Set();
  const maxPage = s && Number.isInteger(s.pages) && s.pages > 0 ? s.pages : null;
  const walk = (nodes, parent, depth) => {
    let prevStart = -Infinity;
    for (const n of nodes) {
      const nw = `${where} node ${n && n.node_id}`;
      if (!isObj(n)) { err(`${where}: tree has a non-object node`); continue; }
      if (!NODE_RE.test(n.node_id || '')) err(`${nw}: node_id must be a four-digit string`);
      if (seen.has(n.node_id)) err(`${nw}: duplicate node_id`);
      seen.add(n.node_id);
      if (!nonEmpty(n.title)) err(`${nw}: title missing`);
      if (!nonEmpty(n.summary)) err(`${nw}: summary missing`);
      else if (words(n.summary) > MAX_SUMMARY_WORDS) err(`${nw}: summary is ${words(n.summary)} words (limit ${MAX_SUMMARY_WORDS})`);
      const a = n.start_page, b = n.end_page;
      if (!Number.isInteger(a) || !Number.isInteger(b)) err(`${nw}: start_page and end_page must be integers`);
      else {
        if (a < 1) err(`${nw}: start_page ${a} is below 1`);
        if (b < a) err(`${nw}: end_page ${b} is before start_page ${a}`);
        if (maxPage && b > maxPage) err(`${nw}: end_page ${b} is past the source's ${maxPage} pages`);
        if (parent && Number.isInteger(parent.start_page)) {
          if (a < parent.start_page || b > parent.end_page) err(`${nw}: pages ${a}-${b} are outside the parent's ${parent.start_page}-${parent.end_page}`);
        }
        if (a < prevStart) err(`${nw}: starts at ${a}, before the previous sibling's start ${prevStart}`);
        prevStart = a;
      }
      if (!Array.isArray(n.nodes)) err(`${nw}: nodes must be a list (empty for a leaf)`);
      if (Array.isArray(n.nodes) && n.nodes.length) walk(n.nodes, n, depth + 1);
      else {
        leafCount++;
        leafIds.add(n.node_id);
        const f = path.join(textDir, `${n.node_id}.md`);
        if (!fs.existsSync(f)) { err(`${nw}: leaf text file text/${n.node_id}.md is missing`); continue; }
        const buf = fs.readFileSync(f);
        if (buf.length > MAX_TEXT) err(`${nw}: text file is ${buf.length} bytes (limit ${MAX_TEXT}); split the leaf`);
        const txt = buf.toString('utf8');
        const head = `# ${n.title}`;
        if (!txt.startsWith(head)) err(`${nw}: text file must start with "${head.slice(0, 70)}"`);
        const body = txt.slice(head.length).trim();
        if (body.length < 20) err(`${nw}: text file is empty after the title`);
      }
    }
  };
  walk(idx.tree, null, 0);
  if (fs.existsSync(textDir)) {
    for (const f of fs.readdirSync(textDir)) {
      const m = f.match(/^(\d{4})\.md$/);
      if (!m) { err(`${where}: unexpected file text/${f}`); continue; }
      if (!leafIds.has(m[1])) err(`${where}: text/${f} does not belong to a leaf`);
    }
  } else err(`${where}: text/ directory missing`);

  // Plato leaves: the Stephanus reference is in every title; Bury and Greek texts open with that marker
  if (/^plato-/.test(id)) {
    const steph = /\b(\d{2,3}[a-e])(-\d{2,3}[a-e])?\b/;
    const check = (nodes) => {
      for (const n of nodes) {
        if (n.nodes && n.nodes.length) { check(n.nodes); continue; }
        if (/Jowett's introduction/.test(n.title)) continue;
        const m = steph.exec(n.title || '');
        if (!m) { err(`${where} node ${n.node_id}: Plato leaf title has no Stephanus reference`); continue; }
        if (/-(bury|greek)$/.test(id)) {
          const txt = fs.readFileSync(path.join(textDir, `${n.node_id}.md`), 'utf8');
          const body = txt.slice(`# ${n.title}`.length).trim();
          if (!body.startsWith(`[${m[1]}]`)) err(`${where} node ${n.node_id}: text should open with the marker [${m[1]}]`);
        }
      }
    };
    check(idx.tree);
  }
}
for (const [rel, cid] of indexedBy) if (!dirs.includes(rel.replace('indexes/', ''))) err(`catalog work ${cid}: ${rel} has no directory`);

const kinds = {};
let indexedN = 0;
const indexedKinds = {};
if (catalog && Array.isArray(catalog.works)) {
  for (const w of catalog.works) {
    kinds[w.kind] = (kinds[w.kind] || 0) + 1;
    if (w.index) { indexedN++; indexedKinds[w.kind] = (indexedKinds[w.kind] || 0) + 1; }
  }
}

if (!quiet) {
  console.log(`catalog: ${catalog ? catalog.works.length : 0} works; indexed: ${indexedN} (${dirs.length} index directories, ${leafCount} leaves)`);
  console.log('catalogued by kind:', JSON.stringify(kinds));
  console.log('indexed by kind:', JSON.stringify(indexedKinds));
  console.log(`sha256 checked against files in work/: ${shaChecked}; source file not present: ${missingFiles}`);
  for (const w of warnings) console.log('warning: ' + w);
}
if (errors.length) {
  for (const e of errors) console.error('error: ' + e);
  console.error(`${errors.length} error(s)`);
  process.exit(1);
}
console.log('check-library: ok');
