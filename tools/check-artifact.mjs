#!/usr/bin/env node
// The page people see is artifacts/earth/. It is built from source/ and data/ and must not fall behind them: every data
// file the page reads must be the same in artifacts/earth/ as in data/, and its app.js must be what source/ builds.
//   node tools/check-artifact.mjs            compare; exit 1 on any difference
//   node tools/check-artifact.mjs --fix      rebuild artifacts/earth/ from source/ and data/ first
import { readFileSync, existsSync, readdirSync, statSync, mkdtempSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
const top = new URL('..', import.meta.url).pathname, art = `${top}artifacts/earth/`;
if (!existsSync(art) || !existsSync(`${top}source/build/bundle.mjs`)) { console.log('artifact: nothing to check here (no artifacts/earth/ or source/)'); process.exit(0); }
const build = (out) => spawnSync('node', [`${top}source/build/bundle.mjs`, '--out', out], { encoding: 'utf8' });
if (process.argv.includes('--fix')) { const b = build(art); if (b.status) { console.log(b.stderr.slice(-800)); process.exit(1); } }
// What source/ and data/ build now, in a scratch folder, compared file by file with what is committed.
const tmp = mkdtempSync(`${tmpdir()}/atlantis-artifact-`);
const b = build(`${tmp}/`);
if (b.status) { console.log(`the build failed:\n${b.stderr.slice(-800)}`); rmSync(tmp, { recursive: true, force: true }); process.exit(1); }
const files = (d, at = '') => readdirSync(d).flatMap((f) => (statSync(d + f).isDirectory() ? files(`${d}${f}/`, `${at}${f}/`) : [at + f]));
const differ = files(`${tmp}/`).filter((f) => !existsSync(art + f) || !readFileSync(art + f).equals(readFileSync(`${tmp}/${f}`)));
rmSync(tmp, { recursive: true, force: true });
for (const f of differ) console.log(`out of date: artifacts/earth/${f}`);
console.log(`artifact: ${differ.length ? `${differ.length} file(s) behind source/ and data/: run node tools/check-artifact.mjs --fix` : 'artifacts/earth/ is what source/ and data/ build'}`);
process.exit(differ.length ? 1 : 0);
