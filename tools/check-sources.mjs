#!/usr/bin/env node
// Re-tests every entry in data/sources.json the way a sandboxed browser iframe would reach it.
//
//   node tools/check-sources.mjs [path/to/sources.json] [--only id1,id2] [--quiet]
//
// For each source it requests browser.tested_url with the header `Origin: null` and checks:
//   - HTTP status is 200
//   - Access-Control-Allow-Origin is `*` or `null` (WebGL textures need one of these)
//   - the content type matches what the catalog recorded
//   - the bytes really are that kind of file, and are not a blank or placeholder tile
// Entries with browser.ok = false are probed too (first bytes only) and reported as "info";
// they can never fail the run. Exit code is 1 if any entry marked browser.ok = true fails.
//
// Needs Node 20 or newer. No dependencies.

import { readFileSync } from 'node:fs';
import { inflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const USER_AGENT = 'abstracts-lost-source-check/1.0 (+https://abstracts.co; low volume re-test of catalog URLs)';
const DELAY_MS = 350; // between requests, so no host sees more than about 3 per second
const TIMEOUT_MS = 70_000;
const HOST_FAILURE_LIMIT = 3; // stop asking a host after this many failed requests

const args = process.argv.slice(2);
const here = dirname(fileURLToPath(import.meta.url));
let file = resolve(here, '..', 'data', 'sources.json');
let only = null;
let quiet = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--only') only = new Set(args[++i].split(','));
  else if (args[i] === '--quiet') quiet = true;
  else file = resolve(args[i]);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const mime = (v) => (v || '').split(';')[0].trim().toLowerCase();

function startsWith(buf, bytes, offset = 0) {
  if (buf.length < offset + bytes.length) return false;
  for (let i = 0; i < bytes.length; i++) if (buf[offset + i] !== bytes[i]) return false;
  return true;
}

// What the bytes are, whatever the server called them.
function sniff(buf) {
  if (startsWith(buf, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return 'png';
  if (startsWith(buf, [0xff, 0xd8, 0xff])) return 'jpeg';
  if (startsWith(buf, [0x47, 0x49, 0x46, 0x38])) return 'gif';
  if (startsWith(buf, [0x52, 0x49, 0x46, 0x46]) && startsWith(buf, [0x57, 0x45, 0x42, 0x50], 8)) return 'webp';
  if (startsWith(buf, [0x49, 0x49, 0x2a, 0x00]) || startsWith(buf, [0x4d, 0x4d, 0x00, 0x2a])) return 'tiff';
  const head = buf.subarray(0, 12).toString('latin1');
  if (head.startsWith('CntZImage') || head.startsWith('Lerc2')) return 'lerc';
  const text = buf.subarray(0, 200).toString('utf8').trimStart();
  if (text.startsWith('<')) return 'markup';
  if (text.startsWith('{') || text.startsWith('[')) return 'json';
  return 'unknown';
}

// Decodes a non-interlaced PNG far enough to tell whether every pixel is the same
// or every pixel is fully transparent. Returns null when it cannot tell.
function pngBlankness(buf) {
  try {
    let pos = 8;
    let ihdr = null;
    let trns = null;
    const idat = [];
    while (pos + 8 <= buf.length) {
      const len = buf.readUInt32BE(pos);
      const type = buf.subarray(pos + 4, pos + 8).toString('latin1');
      const data = buf.subarray(pos + 8, pos + 8 + len);
      if (type === 'IHDR') ihdr = data;
      else if (type === 'tRNS') trns = data;
      else if (type === 'IDAT') idat.push(data);
      else if (type === 'IEND') break;
      pos += 12 + len;
    }
    if (!ihdr || idat.length === 0) return null;
    const width = ihdr.readUInt32BE(0);
    const height = ihdr.readUInt32BE(4);
    const depth = ihdr[8];
    const colorType = ihdr[9];
    if (ihdr[12] !== 0) return null; // interlaced: fall back to the size check
    const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[colorType];
    if (!channels) return null;
    const bitsPerPixel = channels * depth;
    const bpp = Math.max(1, bitsPerPixel >> 3);
    const stride = Math.ceil((width * bitsPerPixel) / 8);
    const raw = inflateSync(Buffer.concat(idat));
    if (raw.length < (stride + 1) * height) return null;
    const out = Buffer.alloc(stride * height);
    for (let y = 0; y < height; y++) {
      const filter = raw[y * (stride + 1)];
      const src = y * (stride + 1) + 1;
      const dst = y * stride;
      for (let x = 0; x < stride; x++) {
        const a = x >= bpp ? out[dst + x - bpp] : 0;
        const b = y > 0 ? out[dst - stride + x] : 0;
        const c = x >= bpp && y > 0 ? out[dst - stride + x - bpp] : 0;
        let v = raw[src + x];
        if (filter === 1) v += a;
        else if (filter === 2) v += b;
        else if (filter === 3) v += (a + b) >> 1;
        else if (filter === 4) {
          const p = a + b - c;
          const pa = Math.abs(p - a);
          const pb = Math.abs(p - b);
          const pc = Math.abs(p - c);
          v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
        }
        out[dst + x] = v & 0xff;
      }
    }
    let uniform = true;
    for (let i = bpp; i < out.length && uniform; i++) if (out[i] !== out[i % bpp]) uniform = false;
    let transparent = false;
    if ((colorType === 6 || colorType === 4) && depth === 8) {
      transparent = true;
      for (let i = channels - 1; i < out.length; i += channels) {
        if (out[i] !== 0) {
          transparent = false;
          break;
        }
      }
    } else if (colorType === 3 && trns && uniform) {
      const index = depth === 8 ? out[0] : out[0] >> (8 - depth);
      transparent = index < trns.length && trns[index] === 0;
    }
    return { uniform, transparent, width, height };
  } catch {
    return null;
  }
}

async function request(url, { rangeOnly, sendRange = rangeOnly }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const headers = { Origin: 'null', 'User-Agent': USER_AGENT, Accept: '*/*' };
  if (sendRange) headers.Range = 'bytes=0-1023';
  try {
    const res = await fetch(url, { headers, redirect: 'follow', signal: controller.signal });
    const info = {
      http: res.status,
      contentType: mime(res.headers.get('content-type')),
      acao: res.headers.get('access-control-allow-origin'),
      declaredLength: Number(res.headers.get('content-length')) || null,
      body: null,
    };
    if (rangeOnly) {
      // Headers are all we need; do not pull gigabytes if the server ignored Range.
      controller.abort();
    } else {
      info.body = Buffer.from(await res.arrayBuffer());
    }
    return info;
  } finally {
    clearTimeout(timer);
  }
}

function judge(source, got) {
  const want = source.browser;
  const problems = [];
  if (got.http !== 200) problems.push(`HTTP ${got.http}`);
  if (got.acao !== '*' && got.acao !== 'null') problems.push(`no usable CORS header (${got.acao ?? 'missing'})`);
  const wantType = mime(want.content_type);
  if (wantType && got.contentType !== wantType) {
    const bothImages = wantType.startsWith('image/') && got.contentType.startsWith('image/');
    problems.push(bothImages ? `image type changed (${got.contentType}, catalog says ${wantType})` : `content type ${got.contentType || 'missing'}, catalog says ${wantType}`);
  }
  const body = got.body ?? Buffer.alloc(0);
  const kind = sniff(body);
  const wantsImage = wantType.startsWith('image/');
  if (wantsImage && !['png', 'jpeg', 'gif', 'webp', 'tiff'].includes(kind)) {
    problems.push(`body is not an image (looks like ${kind})`);
  } else if (source.access?.format === 'lerc' && kind !== 'lerc') {
    problems.push(`body is not LERC (looks like ${kind})`);
  }
  if (kind === 'png') {
    const state = pngBlankness(body);
    if (state?.transparent) problems.push('blank tile (fully transparent)');
    else if (state?.uniform) problems.push('blank tile (one colour)');
  }
  // Placeholder and "no data" tiles are tiny. The catalog stores the size seen on the day it was built.
  const floor = Math.max(400, Math.floor((want.bytes || 0) * 0.3));
  if (body.length < floor) problems.push(`only ${body.length} bytes (catalog saw ${want.bytes})`);
  return problems;
}

function pad(text, width) {
  const s = String(text ?? '');
  return s.length >= width ? s.slice(0, width - 1) + '…' : s.padEnd(width);
}

const catalog = JSON.parse(readFileSync(file, 'utf8'));
const sources = catalog.sources.filter((s) => !only || only.has(s.id));
const hostFailures = new Map();
const rows = [];
let failed = 0;

console.log(`Checking ${sources.length} sources from ${file}`);
console.log(`Catalog version ${catalog.version}, checked ${catalog.checked}; today is ${new Date().toISOString().slice(0, 10)}\n`);

for (const source of sources) {
  const url = source.browser?.tested_url;
  const mustPass = source.browser?.ok === true;
  const row = { id: source.id, must: mustPass, result: '', http: '', type: '', acao: '', bytes: '', note: '' };
  if (!url) {
    row.result = mustPass ? 'FAIL' : 'info';
    row.note = 'no tested_url in catalog';
    if (mustPass) failed++;
    rows.push(row);
    continue;
  }
  const host = new URL(url).host;
  if ((hostFailures.get(host) || 0) >= HOST_FAILURE_LIMIT) {
    row.result = mustPass ? 'FAIL' : 'info';
    row.note = `skipped: ${host} already failed ${HOST_FAILURE_LIMIT} times`;
    if (mustPass) failed++;
    rows.push(row);
    continue;
  }
  let got = null;
  let error = null;
  const attempts = mustPass ? 2 : 1; // one retry for layers the globe depends on
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      got = await request(url, { rangeOnly: !mustPass });
      // A few APIs answer a Range request with a 5xx; ask again without it before reporting.
      if (!mustPass && got.http >= 500) got = await request(url, { rangeOnly: true, sendRange: false });
      error = null;
      if (!mustPass || got.http < 500) break;
    } catch (e) {
      // An aborted range probe still gave us headers; anything else is a real failure.
      error = e?.name === 'AbortError' ? 'timed out' : e?.cause?.code || e?.message || String(e);
    }
    if (attempt < attempts) {
      row.note = 'retried once; ';
      await sleep(2500);
    }
  }
  if (got) {
    row.http = got.http;
    row.type = got.contentType;
    row.acao = got.acao ?? '-';
    row.bytes = got.body ? got.body.length : got.declaredLength ?? '';
  }
  if (mustPass) {
    const problems = error ? [`request failed: ${error}`] : judge(source, got);
    if (problems.length) {
      row.result = 'FAIL';
      row.note += problems.join('; ');
      failed++;
      hostFailures.set(host, (hostFailures.get(host) || 0) + 1);
    } else {
      row.result = 'PASS';
    }
  } else {
    row.result = 'info';
    if (error) {
      row.note += `request failed: ${error}`;
      hostFailures.set(host, (hostFailures.get(host) || 0) + 1);
    } else {
      const cors = got.acao === '*' || got.acao === 'null' ? 'CORS open' : 'no CORS';
      row.note += `marked not browser-ready; ${cors}`;
      const seen = got.http === 206 ? 200 : got.http; // 206 is just our Range header being honoured
      if (seen !== source.browser.http) row.note += `; HTTP ${got.http} today, catalog recorded ${source.browser.http}`;
    }
  }
  rows.push(row);
  if (!quiet) process.stderr.write(`${row.result.padEnd(4)} ${row.id}\n`);
  await sleep(DELAY_MS);
}

const header = `${pad('result', 7)}${pad('id', 44)}${pad('http', 5)}${pad('content-type', 26)}${pad('acao', 6)}${pad('bytes', 11)}note`;
console.log('\n' + header);
console.log('-'.repeat(header.length + 30));
for (const r of rows) {
  console.log(`${pad(r.result, 7)}${pad(r.id, 44)}${pad(r.http, 5)}${pad(r.type, 26)}${pad(r.acao, 6)}${pad(r.bytes, 11)}${r.note}`);
}
const must = rows.filter((r) => r.must);
console.log(`\n${must.length - failed} of ${must.length} browser-usable sources passed; ${rows.length - must.length} other sources probed for information.`);
if (failed) {
  console.log(`${failed} FAILED: ${rows.filter((r) => r.result === 'FAIL').map((r) => r.id).join(', ')}`);
  process.exitCode = 1;
}
