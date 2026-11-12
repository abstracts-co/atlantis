#!/usr/bin/env node
// Checks data/story-media.json, the pictures shown while the story is told: each names a sentence the story has, a
// file that is there, a caption, who made it, a licence that lets it be shown, and the page it comes from; and it is
// on screen inside the time its sentence takes to say.
//   node tools/check-story.mjs [--quiet]
import { readFileSync, existsSync, statSync } from 'node:fs';
import { storyLines, lineKey } from '../source/engine/storytext.js';
const top = new URL('..', import.meta.url).pathname, read = (f) => JSON.parse(readFileSync(top + f, 'utf8'));
const doc = read('data/story-media.json'), audio = existsSync(`${top}data/audio/index.json`) ? read('data/audio/index.json') : null;
const lines = storyLines({ worldfit: existsSync(`${top}data/worldfit.json`) ? read('data/worldfit.json') : null, cas: existsSync(`${top}data/case.json`) ? read('data/case.json') : null });
let errors = 0, bytes = 0;
const fail = (t) => { console.log(t); errors++; };
const FREE = /^(Public domain|CC0|CC BY(-SA)? [234]\.0)$/;
for (const m of doc.media ?? []) {
  const id = m.file ?? '?', line = lines.find((l) => l.id === m.line);
  if (!line) fail(`${id}: the story has no sentence "${m.line}"`);
  if (!m.file || !existsSync(`${top}data/${m.file}`)) fail(`${id}: the file is not in data/`); else bytes += statSync(`${top}data/${m.file}`).size;
  for (const k of ['caption', 'by', 'licence', 'source']) if (typeof m[k] !== 'string' || !m[k].trim()) fail(`${id}: needs "${k}"`);
  if (m.licence && !FREE.test(m.licence)) fail(`${id}: "${m.licence}" is not a licence this page may show a picture under`);
  if (m.source && !/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(m.source)) fail(`${id}: the source must be the picture's own page on Wikimedia Commons`);
  if (!(m.at >= 0) || !(m.for >= 1.5)) fail(`${id}: needs "at" (seconds into the sentence) and "for" (at least 1.5 seconds)`);
  const spoken = line && audio?.narration?.[lineKey(line.say)]?.seconds;
  if (spoken && m.at + m.for > spoken + 0.9) fail(`${id}: on screen until ${(m.at + m.for).toFixed(1)} s, but its sentence is over at ${spoken} s`);
}
if (!process.argv.includes('--quiet') || errors) console.log(`story pictures: ${doc.media?.length ?? 0}, ${(bytes / 1024).toFixed(0)} KB, ${errors} error(s)`);
process.exit(errors ? 1 : 0);
