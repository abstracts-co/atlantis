// Builds everything that goes to GitHub and Abstracts into ../publish/:
//   publish/artifact/earth/   the post: the page, its code, data, cover and readable text
//   publish/repo/             the community repository: the map, data, library indexes, tools, skills, source and the artifact
// Usage: node build/publish.mjs [slug]   (the drafts are written for a/atlantis)
import { build } from 'esbuild';
import { cp, mkdir, readFile, rm, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { content } from './content.mjs';

const root = new URL('..', import.meta.url).pathname;        // source/
const top = new URL('../..', import.meta.url).pathname;      // the draft folder
const slug = process.argv[2] ?? 'atlantis';
const out = `${top}publish/`, art = `${out}artifact/earth/`, repo = `${out}repo/`;
const copyIf = async (from, to, opts) => { if (existsSync(from)) { await mkdir(to.replace(/[^/]+\/?$/, ''), { recursive: true }); await cp(from, to, opts); return true; } return false; };
await rm(out, { recursive: true, force: true });
await mkdir(art, { recursive: true });

// The artifact.
const result = await build({ entryPoints: [`${root}engine/boot.js`], bundle: true, format: 'esm', minify: true, target: 'es2022', outfile: `${art}app.js`, metafile: true, legalComments: 'none' });
await writeFile(`${art}index.html`, await readFile(`${root}engine/page.html`));
for (const f of ['legends.json', 'sources.json', 'reconstruction.json', 'case.json', 'evidence.json', 'open.json', 'story-media.json', 'worldfit.json', 'worldfit.png', 'worldfit-2k.png']) await cp(`${top}data/${f}`, `${art}${f}`);
// The finer depth grids for the places with scenes, and the pictures the city's materials are made from.
const patchFiles = existsSync(`${top}data/patches`) ? (await readdir(`${top}data/patches`)).filter((f) => f.endsWith('.png')) : [];
if (patchFiles.length) { await mkdir(`${art}patches`, { recursive: true }); for (const f of patchFiles) await cp(`${top}data/patches/${f}`, `${art}patches/${f}`); }
await copyIf(`${root}engine/city/assets/`, `${art}city/`, { recursive: true });
await copyIf(`${top}data/audio/`, `${art}audio/`, { recursive: true });
await copyIf(`${top}data/story/`, `${art}story/`, { recursive: true });
await writeFile(`${art}content.md`, await content(`${top}data/`, slug));
await writeFile(`${art}artifact.json`, `${JSON.stringify({ title: 'Atlantis', description: "Walk Plato's city as he wrote it, meet people in the hall at its centre, and hunt the whole Earth for the place that fits his words. Every claim, search and open question is on its walls.", kind: 'web', entry: 'index.html', poster: 'preview.webp', category: 'tools', permissions: ['microphone'], rooms: { seats: 100 } }, null, 2)}\n`);
await copyIf(`${top}assets/preview.webp`, `${art}preview.webp`);

// The repository.
await cp(`${top}repo/`, repo, { recursive: true });
for (const f of ['legends.json', 'sources.json', 'reconstruction.json', 'case.json', 'evidence.json', 'open.json', 'story-media.json', 'worldfit.json', 'worldfit.png', 'worldfit-2k.png']) await cp(`${top}data/${f}`, `${repo}data/${f}`);
await copyIf(`${top}data/patches/`, `${repo}data/patches/`, { recursive: true });
await copyIf(`${top}data/audio/`, `${repo}data/audio/`, { recursive: true });
await copyIf(`${top}data/story/`, `${repo}data/story/`, { recursive: true });
await copyIf(`${top}research/story-media/commons.json`, `${repo}research/story-media/commons.json`);
// The research behind each scene, as its author wrote it, with the brief that says how to add another.
await copyIf(`${top}research/atlantis/evidence/`, `${repo}research/atlantis/evidence/`, { recursive: true });
// Research data, as each lane finishes: the files agents answer from, and each lane's plain summary.
const lanes = [];
for (const lane of ['plato', 'hypotheses', 'searches', 'world-9600bce', 'site-data']) {
  if (await copyIf(`${top}data/${lane}.json`, `${repo}data/${lane}.json`)) lanes.push(lane);   // written by build/merge-atlantis.mjs
  await copyIf(`${top}research/atlantis/${lane}.md`, `${repo}docs/research/${lane}.md`);
}
if (await copyIf(`${top}research/prior/drowned-lands.json`, `${repo}data/sea-level-research.json`)) lanes.push('sea-level-research');
await copyIf(`${top}research/prior/drowned-lands.md`, `${repo}docs/research/sea-level-research.md`);
// The library: the catalogue of every work, and a tree for each work we may share.
const indexed = existsSync(`${top}library/out/indexes`) ? (await readdir(`${top}library/out/indexes`)).filter((d) => !d.startsWith('.')) : [];
if (indexed.length) await cp(`${top}library/out/indexes/`, `${repo}indexes/`, { recursive: true });
await copyIf(`${top}library/out/catalog.json`, `${repo}library/catalog.json`);
// Tools: the agent tools, and the checks (written in build/, living with the tools in the repository).
await cp(`${top}tools/`, `${repo}tools/`, { recursive: true });
for (const f of ['check-legends.mjs', 'check-sources.mjs', 'check-reconstruction.mjs', 'check-data.mjs', 'check-evidence.mjs', 'merge-atlantis.mjs', 'merge-evidence.mjs', 'make-case.mjs', 'make-patches.mjs', 'make-worldfit.mjs', 'make-audio.mjs', 'check-open.mjs', 'check-story.mjs', 'check-quiet.mjs']) if (existsSync(`${top}build/${f}`)) await writeFile(`${repo}tools/${f}`, (await readFile(`${top}build/${f}`, 'utf8')).replaceAll('node build/', 'node tools/').replace(/\bbuild\/(check|merge|make)-/g, 'tools/$1-'));
// The library's check was written for library/out/; in the repository the catalogue is library/catalog.json and the trees are indexes/.
if (existsSync(`${top}library/check-library.mjs`)) await writeFile(`${repo}tools/check-library.mjs`, (await readFile(`${top}library/check-library.mjs`, 'utf8'))
  .replace("const catalogPath = path.join(out, 'catalog.json');", "const catalogPath = path.join(here, '..', 'library', 'catalog.json');")
  .replace("const indexesDir = path.join(out, 'indexes');", "const indexesDir = path.join(here, '..', 'indexes');")
  .replace("path.join(out, w.index, 'index.json')", "path.join(here, '..', w.index, 'index.json')")
  .replace("path.join(here, '..', 'research', 'atlantis')", "path.join(here, '..', 'data')")
  .replaceAll('out/catalog.json', 'library/catalog.json').replaceAll('out/indexes', 'indexes'));
// The PageIndex local store, for PageIndexClient(index={"storage_path": "library/pageindex"}).
await copyIf(`${top}library/out/pageindex/`, `${repo}library/pageindex/`, { recursive: true });
await copyIf(`${top}library/NOTES.md`, `${repo}library/NOTES.md`);
// The globe's source.
await mkdir(`${repo}source/build`, { recursive: true });
await cp(`${root}engine/`, `${repo}source/engine/`, { recursive: true });
for (const f of ['bundle.mjs', 'serve.mjs', 'shot.mjs', 'drive.mjs', 'verify.mjs', 'publish.mjs', 'content.mjs', 'single.mjs', 'citylab.mjs', 'room-relay.mjs', 'tour.mjs']) await cp(`${root}build/${f}`, `${repo}source/build/${f}`);
await cp(`${root}preview/`, `${repo}source/preview/`, { recursive: true });
for (const f of ['package.json', 'package-lock.json', 'README.md', '.gitignore']) await copyIf(`${root}${f}`, `${repo}source/${f}`);
await cp(art, `${repo}artifacts/earth/`, { recursive: true });
for (const f of ['logo.png', 'banner.webp']) await copyIf(`${top}assets/${f}`, `${repo}assets/${f}`);

// One name everywhere.
if (slug !== 'atlantis') {
  const walk = async (dir) => { for (const e of await readdir(dir, { withFileTypes: true })) { const p = `${dir}${e.name}`; if (e.isDirectory()) { if (e.name !== 'indexes') await walk(`${p}/`); } else if (/\.(md|json|mjs|js|html)$/.test(e.name) && !/legends\.json|sources\.json|app\.js|package-lock/.test(e.name)) { const t = await readFile(p, 'utf8'); const n = t.replaceAll('a/atlantis', `a/${slug}`).replaceAll('slug `atlantis`', `slug \`${slug}\``).replaceAll('abstracts-atlantis-tools', `abstracts-${slug}-tools`).replaceAll('?a_l=atlantis', '?a_l=ATLANTIS_ENTRY').replaceAll('ATLANTIS_ENTRY', 'atlantis'); if (n !== t) await writeFile(p, n); } } };
  await walk(out);
}

// Some names are kept out of everything that is published, at the owner's word (build/keep-out.json, which is not
// published itself). Any sentence that has one is dropped from the published copies of the research notes; the
// working copies keep it. The run fails if one is still anywhere in what goes out.
const KEEP_OUT = existsSync(`${top}build/keep-out.json`) ? JSON.parse(await readFile(`${top}build/keep-out.json`, 'utf8')).names.map((n) => new RegExp(n, 'i')) : [];
const without = (text) => text.split(/(?<=[.!?])\s+(?=[A-Z"“'(])/).filter((sentence) => !KEEP_OUT.some((re) => re.test(sentence))).join(' ');
const scrub = (v) => (typeof v === 'string' ? (KEEP_OUT.some((re) => re.test(v)) ? without(v) : v) : Array.isArray(v) ? v.map(scrub).filter((x) => x !== '') : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, scrub(x)])) : v);
for (const f of [`${repo}data/searches.json`]) if (existsSync(f)) await writeFile(f, `${JSON.stringify(scrub(JSON.parse(await readFile(f, 'utf8'))), null, 1)}\n`);
for (const f of [`${repo}docs/research/searches.md`]) if (existsSync(f)) await writeFile(f, (await readFile(f, 'utf8')).split('\n').map((line) => (KEEP_OUT.some((re) => re.test(line)) ? without(line) : line)).join('\n'));
{
  const left = [];
  const look = async (dir) => { for (const e of await readdir(dir, { withFileTypes: true })) { const path = `${dir}${e.name}`; if (e.isDirectory()) await look(`${path}/`); else if (/\.(json|md|js|mjs|html|txt)$/.test(e.name)) { const text = await readFile(path, 'utf8'); if (KEEP_OUT.some((re) => re.test(text))) left.push(path); } } };
  await look(repo); await look(art);
  if (left.length) { console.error(`kept-out text is still in: ${left.join(', ')}`); process.exit(1); }
}
const sizes = {};
let total = 0;
let files = 0;
const weigh = async (dir, at) => { for (const e of await readdir(dir, { withFileTypes: true })) { if (e.isDirectory()) { await weigh(`${dir}${e.name}/`, `${at}${e.name}/`); continue; } const b = (await readFile(`${dir}${e.name}`)).length; sizes[`${at}${e.name}`] = `${(b / 1024).toFixed(0)} KB`; total += b; files++; } };
await weigh(art, '');
// The site's limits for an artifact (https://abstracts.co/docs, "Limits"): 40 MB a file, 1 GB and 100 files in all.
const biggest = Math.max(...Object.values(sizes).map((v) => parseFloat(v) * (/MB/.test(v) ? 1024 : 1)));
console.log(`artifact (${(total / 1048576).toFixed(2)} MB, ${files} files of 100, largest file ${(biggest / 1024).toFixed(2)} MB of 40):`, JSON.stringify(sizes));
if (files > 100 || biggest > 40 * 1024 || total > 1024 ** 3) { console.error('the artifact is over the site\'s limits'); process.exit(1); }
console.log(`repository: research data [${lanes.join(', ') || 'none yet'}], ${indexed.length} indexed works`);
