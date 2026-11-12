// Writes the whole globe as one HTML file, code and data inside it, for showing it where only a single file can go.
// It still fetches map tiles from the public servers. Usage: node build/single.mjs [out.html] [--no-city-pictures]
// --no-city-pictures leaves out the pictures the city's materials are made from (about 3.6 MB as text); the city is then drawn in code.
import { build } from 'esbuild';
import { readFile, writeFile, readdir } from 'node:fs/promises';
const root = new URL('..', import.meta.url).pathname, top = new URL('../..', import.meta.url).pathname;
const args = process.argv.slice(2).filter((a) => !a.startsWith('--')), out = args[0] ?? `${root}dist/atlantis-single.html`;
const js = (await build({ entryPoints: [`${root}engine/boot.js`], bundle: true, format: 'esm', minify: true, target: 'es2022', write: false, legalComments: 'none' })).outputFiles[0].text;
const data = {};
for (const f of ['legends.json', 'sources.json', 'reconstruction.json', 'case.json', 'evidence.json', 'open.json', 'story-media.json', 'worldfit.json']) data[f] = JSON.parse(await readFile(`${top}data/${f}`, 'utf8'));
// The finer depth grids go in as data addresses, so the scenes have their sea floor without any file beside the page.
const patches = {};
for (const p of JSON.parse(await readFile(`${top}data/patches/index.json`, 'utf8').catch(() => '{"patches":[]}')).patches) patches[p.file] = `data:image/png;base64,${(await readFile(`${top}data/${p.file}`)).toString('base64')}`;
// So does the sound, when there is any.
const audio = {};
try { const ix = JSON.parse(await readFile(`${top}data/audio/index.json`, 'utf8')); data['audio/index.json'] = ix; for (const e of [...Object.values(ix.narration), ...Object.values(ix.sfx)]) audio[e.file] = `data:audio/mpeg;base64,${(await readFile(`${top}data/audio/${e.file}`)).toString('base64')}`; } catch { /* no sound made yet */ }
// And the pictures the city's materials are made from.
const citytex = {};
if (!process.argv.includes('--no-city-pictures')) for (const f of (await readdir(`${root}engine/city/assets`).catch(() => [])).filter((f) => f.endsWith('.jpg'))) citytex[f] = `data:image/jpeg;base64,${(await readFile(`${root}engine/city/assets/${f}`)).toString('base64')}`;
// The pictures shown while the story is told.
const story = {};
for (const m of data['story-media.json']?.media ?? []) story[m.file] = `data:image/webp;base64,${(await readFile(`${top}data/${m.file}`)).toString('base64')}`;
// The hunt's score map goes in the same way.
const worldfit = {};
for (const f of ['worldfit.png', 'worldfit-2k.png']) worldfit[f] = `data:image/png;base64,${(await readFile(`${top}data/${f}`)).toString('base64')}`;
const safe = (s) => s.replaceAll('</', '<\\/');
let page = await readFile(`${root}engine/page.html`, 'utf8');
page = page.replace('</style>', '  html, body { background: transparent; }\n  #stage { border-radius: var(--radius, 14px); }\n</style>')
  .replace(/<script>globalThis\.__ASSETS__[\s\S]*?<\/script>\s*<script type="module" src="\.\/app\.js"><\/script>/, () => `<script type="application/json" id="data">${safe(JSON.stringify(data))}</script>\n<script>globalThis.__DATA__ = JSON.parse(document.getElementById('data').textContent); globalThis.__PATCHES__ = ${JSON.stringify(patches)}; globalThis.__WORLDFIT__ = ${JSON.stringify(worldfit)}; globalThis.__AUDIO__ = ${JSON.stringify(audio)}; globalThis.__CITYTEX__ = ${JSON.stringify(citytex)}; globalThis.__STORY__ = ${JSON.stringify(story)}; globalThis.__LAYOUT__ = 'content'; globalThis.__STILL__ = true;</script>\n<script type="module">${safe(js)}</script>`);
if (!page.includes('id="data"')) throw new Error('the page template changed: could not inline the script');
await writeFile(out, page);
console.log(`${out}  ${(page.length / 1048576).toFixed(2)} MB`);
