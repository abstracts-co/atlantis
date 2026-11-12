// Bundles the engine into dist/app.js and copies the page and data next to it.
import { build } from 'esbuild';
import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
// --out <dir> builds somewhere else, so two people can build at once without overwriting each other.
const at = process.argv.indexOf('--out');
const out = at > 0 ? `${process.argv[at + 1].replace(/\/$/, '')}/` : `${root}dist/`;
await mkdir(out, { recursive: true });
const result = await build({
  entryPoints: [`${root}engine/boot.js`],
  bundle: true, format: 'esm', minify: !process.argv.includes('--dev'), sourcemap: process.argv.includes('--dev') ? 'inline' : false,
  target: 'es2022', outfile: `${out}app.js`, metafile: true, legalComments: 'none',
});
await writeFile(`${out}index.html`, await readFile(`${root}engine/page.html`));
for (const f of ['legends.json', 'sources.json', 'reconstruction.json', 'case.json', 'evidence.json', 'open.json', 'story-media.json', 'worldfit.json', 'worldfit.png', 'worldfit-2k.png']) if (existsSync(`${root}../data/${f}`)) await cp(`${root}../data/${f}`, `${out}${f}`);
// The finer depth grids for the places with scenes sit beside the page in patches/.
if (existsSync(`${root}../data/patches`)) { await mkdir(`${out}patches`, { recursive: true }); for (const f of await readdir(`${root}../data/patches`)) if (f.endsWith('.png')) await cp(`${root}../data/patches/${f}`, `${out}patches/${f}`); }
// The story spoken and the sound effects, when they have been made, sit beside the page in audio/.
if (existsSync(`${root}../data/audio`)) await cp(`${root}../data/audio`, `${out}audio`, { recursive: true });
// The pictures shown while the story is told.
if (existsSync(`${root}../data/story`)) await cp(`${root}../data/story`, `${out}story`, { recursive: true });
// Pictures the city's materials are made from sit beside the page in city/.
if (existsSync(`${root}engine/city/assets`)) await cp(`${root}engine/city/assets`, `${out}city`, { recursive: true });
const bytes = Object.values(result.metafile.outputs)[0].bytes;
console.log(`app.js ${(bytes / 1024).toFixed(0)} KB`);
