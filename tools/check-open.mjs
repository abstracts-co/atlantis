#!/usr/bin/env node
// Checks data/open.json, the list of work that is open: every task has what it needs for someone to pick it up, its
// area is one of the listed areas, its ids are unique, and the files it points to exist.
//   node tools/check-open.mjs [--quiet]
import { readFileSync, existsSync } from 'node:fs';
const top = new URL('..', import.meta.url).pathname;
const open = JSON.parse(readFileSync(`${top}data/open.json`, 'utf8'));
let errors = 0;
const fail = (t) => { console.log(t); errors++; };
const seen = new Set();
// A task's files are named as they are in the community's repository. Where the repository is put together from a
// working copy, the same files are found there under build/ (for tools/) and repo/ (for docs/).
const there = (f) => [f, f.replace(/^tools\//, 'build/'), `repo/${f}`].some((p) => existsSync(top + p));
for (const t of open.work ?? []) {
  for (const k of ['id', 'area', 'size', 'title', 'why', 'done_when']) if (typeof t[k] !== 'string' || !t[k].trim()) fail(`${t.id ?? '?'}: needs "${k}"`);
  if (seen.has(t.id)) fail(`${t.id}: used twice`); seen.add(t.id);
  if (!open.areas?.[t.area]) fail(`${t.id}: area "${t.area}" is not one of ${Object.keys(open.areas ?? {}).join(', ')}`);
  if (!['small', 'medium', 'large'].includes(t.size)) fail(`${t.id}: size must be small, medium or large`);
  if (!Array.isArray(t.start) || !t.start.length) fail(`${t.id}: needs "start", the files to begin with`);
  for (const f of t.start ?? []) if (!there(f)) fail(`${t.id}: start names a file that is not here: ${f}`);
  if (!Array.isArray(t.check) || !t.check.length) fail(`${t.id}: needs "check", the commands that must pass`);
  if (t.status && !['open', 'taken', 'done'].includes(t.status)) fail(`${t.id}: status must be open, taken or done`);
}
if (!Array.isArray(open.how) || open.how.length < 3) fail('"how" must say how to pick a task up');
if (!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/.test(open.repository ?? '')) fail('"repository" must be the address of the community\'s repository');
if (!process.argv.includes('--quiet') || errors) console.log(`open work: ${open.work?.length ?? 0} tasks in ${Object.keys(open.areas ?? {}).length} areas, ${errors} error(s)`);
process.exit(errors ? 1 : 0);
