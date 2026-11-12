// Web Mercator tile maths and a polite tile fetcher with a disk cache. Shared by the tools in this folder.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export const HALF = 20037508.342789244;
export const lonToX = (lon, z) => ((lon + 180) / 360) * 2 ** z;
export const latToY = (lat, z) => { const l = (Math.max(-85.0511, Math.min(85.0511, lat)) * Math.PI) / 180; return ((1 - Math.log(Math.tan(l) + 1 / Math.cos(l)) / Math.PI) / 2) * 2 ** z; };
export const xToLon = (x, z) => (x / 2 ** z) * 360 - 180;
export const yToLat = (y, z) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / 2 ** z))) * 180) / Math.PI;
export const lonToMeters = (lon) => (lon / 180) * HALF;
export const latToMeters = (lat) => (Math.log(Math.tan(((90 + lat) * Math.PI) / 360)) / Math.PI) * HALF;
export const metresPerPixel = (lat, z) => (40075016.686 * Math.cos((lat * Math.PI) / 180)) / 2 ** z / 256;
export const km = (lat1, lon1, lat2, lon2) => {
  const r = Math.PI / 180, a = Math.sin(((lat2 - lat1) * r) / 2) ** 2 + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(((lon2 - lon1) * r) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(a));
};

export const args = (argv = process.argv.slice(2)) => {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) { const k = argv[i].slice(2); out[k] = argv[i + 1] === undefined || argv[i + 1].startsWith('--') ? true : argv[++i]; } else out._.push(argv[i]);
  }
  return out;
};
export const parseBox = (text) => {
  const b = String(text ?? '').split(',').map(Number);
  if (b.length !== 4 || b.some((v) => !Number.isFinite(v)) || b[0] >= b[2] || b[1] >= b[3]) throw new Error('--bbox needs west,south,east,north in degrees, for example --bbox 25.3,36.3,25.5,36.5');
  return b;
};

const UA = 'abstracts-atlantis-tools/1 (+https://abstracts.co/a/atlantis)';
const CACHE = process.env.LOST_CACHE ?? join(tmpdir(), 'atlantis-tiles');
// Fetches a URL, keeping a copy on disk so a second run asks the server for nothing. Returns a Buffer, or null for a missing tile.
export const get = async (url, { tries = 3, headers = {} } = {}) => {
  const file = join(CACHE, createHash('sha1').update(url).digest('hex'));
  try { const hit = await readFile(file); return hit.length ? hit : null; } catch {}
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA, ...headers }, signal: AbortSignal.timeout(60000) });
      if (r.status === 404 || r.status === 204) { await mkdir(CACHE, { recursive: true }); await writeFile(file, ''); return null; }
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const buf = Buffer.from(await r.arrayBuffer());
      await mkdir(CACHE, { recursive: true });
      await writeFile(file, buf);
      return buf;
    } catch (e) {
      if (i === tries - 1) throw new Error(`${url}: ${e.message}`);
      await new Promise((r) => setTimeout(r, 600 * (i + 1)));
    }
  }
};
// Runs jobs a few at a time, so a public server never sees a burst.
export const pool = async (items, n, fn) => {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => { while (next < items.length) { const i = next++; out[i] = await fn(items[i], i); } }));
  return out;
};
