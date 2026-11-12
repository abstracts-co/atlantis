#!/usr/bin/env node
// Checks data/reconstruction.json against the text it cites: every quote must be in the Critias, word for word.
//   node tools/check-reconstruction.mjs [--offline]
// It also checks that every part the 3D model draws is an entry of that file (source/engine/city/).
// It fetches the Perseus Digital Library's English Critias (R. G. Bury), strips the editor's notes, and looks for each
// quote. "…" in a quote marks words left out; each piece between is checked. Exit 1 if a quote is not found.
import { readFileSync, existsSync } from 'node:fs';
const here = new URL('.', import.meta.url).pathname;
const file = [`${here}../data/reconstruction.json`].find(existsSync);
const rec = JSON.parse(readFileSync(file, 'utf8'));
let errors = 0;
const fail = (m) => { console.log(`error  ${m}`); errors++; };
const ids = new Set();
for (const list of [rec.from_text, rec.choices]) for (const x of list) { if (!x.id || ids.has(x.id)) fail(`missing or repeated id: ${x.id}`); ids.add(x.id); if (!x.what) fail(`${x.id}: no "what"`); }
for (const x of rec.from_text) { if (!/^Critias \d{3}[a-e]/.test(x.ref ?? '')) fail(`${x.id}: ref must be a Stephanus reference, got "${x.ref}"`); if (!x.quote) fail(`${x.id}: no quote`); }
for (const x of rec.choices) if (!x.why) fail(`${x.id}: a choice needs a "why"`);
for (const x of rec.choices) for (const src of x.sources ?? []) if (!src.what || !/^https?:\/\//.test(src.url ?? '')) fail(`${x.id}: a source needs "what" and a "url"`);
// Every id the model can put on a mesh, and every stop of the walk, must be an entry here.
const model = await import(`${here}../source/engine/city/surfaces.js`).catch((e) => { fail(`could not read the model's ids: ${e.message}`); return null; });
if (model) {
  for (const id of new Set([...model.WALK, ...model.DRAWN])) if (!ids.has(id)) fail(`the model uses "${id}", which is not an entry`);
  const used = new Set();
  const { readdirSync } = await import('node:fs');
  const dir = `${here}../source/engine/city/`, files = [...readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => dir + f), `${here}../source/engine/city.js`];
  for (const f of files) for (const m of readFileSync(f, 'utf8').matchAll(/(?:M\.to\(|add\([^,]+,\s*|id:\s*)'([a-z][a-z-]+)(?:#[a-z]+)?'/g)) used.add(m[1]);
  for (const id of used) if (!ids.has(id)) fail(`the code names "${id}", which is not an entry`);
  for (const x of rec.from_text) if (x.drawn !== false && !used.has(x.id) && !['rings', 'ring-widths', 'walls', 'stone', 'faces-south', 'bridges', 'temple', 'ring-buildings', 'statues', 'harbours', 'island', 'hill', 'outer-wall'].includes(x.id) && !model.DRAWN.includes(x.id)) fail(`${x.id}: in the text, and nothing in the model names it`);
  console.log(`${used.size} ids named by the model, all of them entries`);
}
if (!process.argv.includes('--offline')) {
  const xml = await fetch(rec.text.checked_against).then((r) => (r.ok ? r.text() : Promise.reject(new Error(`HTTP ${r.status}`)))).catch((e) => { fail(`could not fetch the text: ${e.message}`); return ''; });
  const norm = (s) => s.replace(/<note[\s\S]*?<\/note>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ').replace(/ ([,.;:])/g, '$1').trim();
  const text = norm(xml);
  let found = 0;
  for (const x of rec.from_text) for (const piece of x.quote.split('…').map((p) => norm(p)).filter(Boolean)) { if (text.includes(piece)) found++; else fail(`${x.id}: not in the text: "${piece.slice(0, 70)}"`); }
  console.log(`${found} quoted passages found in the text`);
}
console.log(`reconstruction: ${rec.from_text.length} from the text, ${rec.choices.length} choices, ${errors} error(s)`);
process.exit(errors ? 1 : 0);
