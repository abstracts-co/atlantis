#!/usr/bin/env node
// The page's own controls stay quiet: the layout explains itself. This is the Abstracts design system's rule 8
// (packages/ui/README.md in the site's repository) and the motion and touch rules beside it, applied to everything in
// this page that is not the 3D scene. It fails on:
//   a title= tooltip on anything but an icon button, or a title set from a script;
//   a placeholder of more than three words;
//   "(optional)", "Tip:", "Note:", "How it works", "Learn more", "What is this?";
//   an element that exists only to hold helper text (class lede, hint, help, tagline, subtitle, pitch, sub, fine),
//   or a key cap that teaches a key;
//   a disclaimer or warning line under content;
//   developer words in what a visitor reads (GitHub, repository, pull request, commit, branch, merge, install, token);
//   "transition: all" and ease-in in the styles.
// What is exempt: the 3D scene and what is drawn in it (the boards in the hall), the story's sentences, and text a
// person opens on purpose or copies out (marked in the source between "quiet:document" and "quiet:end").
//   node tools/check-quiet.mjs [--quiet]
import { readFileSync, readdirSync, existsSync } from 'node:fs';
const top = new URL('..', import.meta.url).pathname, dir = `${top}source/engine/`;
let errors = 0;
const fail = (file, line, what, text) => { console.log(`${file}:${line}  ${what}: ${String(text).slice(0, 90)}`); errors++; };
const lineOf = (src, i) => src.slice(0, i).split('\n').length;
const PHRASES = [[/\(optional\)/i, '"(optional)"'], [/\bTip:/, '"Tip:"'], [/\bNote:/, '"Note:"'], [/\bhow it works\b/i, '"How it works"'], [/\blearn more\b/i, '"Learn more"'], [/\bwhat is this\?/i, '"What is this?"']];
const DEVELOPER = /\b(GitHub|repositor(?:y|ies)|pull requests?|commits?|branch(?:es)?|merge[sd]?|merging|install(?:s|ed|ing)?|tokens?)\b/;
const HELPER = /class="(?:[^"]* )?(lede|hint|help|tagline|subtitle|pitch|sub|c-fine|fine)(?: [^"]*)?"|id="pitch"|<kbd\b/;
const NOT_UI = new Set(['storytext.js', 'shaders.js', 'geo.js', 'tiles.js', 'globe.js', 'post.js', 'camera.js', 'main.js', 'dem.js', 'fit.js', 'patches.js', 'evidence.js', 'data.js', 'host.js', 'boot.js', 'city.js', 'cityscene.js', 'sound.js']);
const files = ['page.html', ...readdirSync(dir).filter((f) => f.endsWith('.js') && !NOT_UI.has(f))];
for (const file of files) {
  let src = readFileSync(dir + file, 'utf8');
  // Leave out what is a document, keeping the line numbers.
  src = src.replace(/\/\/ quiet:document[\s\S]*?\/\/ quiet:end/g, (m) => m.replace(/[^\n]/g, ' '));
  const css = file === 'page.html' ? (src.match(/<style>[\s\S]*?<\/style>/)?.[0] ?? '') : '';
  if (css) {
    for (const m of css.matchAll(/transition:\s*all\b/g)) fail(file, lineOf(src, src.indexOf(css) + m.index), 'transition: all', m[0]);
    for (const m of css.matchAll(/\bease-in(?!-out)\b/g)) fail(file, lineOf(src, src.indexOf(css) + m.index), 'ease-in', css.slice(Math.max(0, m.index - 40), m.index + 10));
  }
  const body = file === 'page.html' ? src.replace(/<style>[\s\S]*?<\/style>/, (m) => m.replace(/[^\n]/g, ' ')) : src;
  // Tooltips: a title is allowed only on a control whose whole content is an icon.
  for (const m of body.matchAll(/<([a-z][\w-]*)\b[^<>]*?\stitle="([^"]*)"[^<>]*>/g)) {
    const after = body.slice(m.index + m[0].length, m.index + m[0].length + 60);
    if (!/^\s*(<svg\b|\$\{(ICON|MIC|glyph|mark)\b)/.test(after) && !/^(link|iframe)$/.test(m[1])) fail(file, lineOf(body, m.index), 'a tooltip on something that is not an icon', m[2]);
  }
  for (const m of body.matchAll(/\.title\s*=|setAttribute\(\s*['"]title['"]/g)) fail(file, lineOf(body, m.index), 'a tooltip set from a script', body.slice(m.index, m.index + 60));
  for (const m of body.matchAll(/placeholder="([^"]*)"/g)) if (m[1].trim().split(/\s+/).length > 3) fail(file, lineOf(body, m.index), 'a placeholder over three words', m[1]);
  for (const m of body.matchAll(new RegExp(HELPER.source, 'g'))) fail(file, lineOf(body, m.index), 'an element that only holds helper text', m[0]);
  // Words a visitor reads: text between tags in the page, and the text of strings in the scripts.
  const read = file === 'page.html' ? [...body.replace(/<script[\s\S]*?<\/script>/g, '').matchAll(/>([^<>{}]+)</g)].map((m) => [m.index, m[1]]) : [...body.matchAll(/(['`])((?:\\.|(?!\1)[^\\\n])*?[A-Za-z]{2,} [A-Za-z]{2,}(?:\\.|(?!\1)[^\\\n])*?)\1/g)].map((m) => [m.index, m[2].replace(/<[^>]*>/g, ' ')]);
  for (const [i, text] of read) {
    if (/^\s*\/\//.test(body.slice(body.lastIndexOf('\n', i) + 1, i))) continue;   // a comment
    for (const [re, what] of PHRASES) if (re.test(text)) fail(file, lineOf(body, i), what, text.trim());
    const dev = text.match(DEVELOPER);
    if (dev && !/[=;{}()]|=>|\$\{[^}]*$/.test(text.slice(0, 40)) && /[A-Z]/.test(text) && !/^[a-z-]+$/.test(text.trim())) fail(file, lineOf(body, i), `a developer word ("${dev[1]}")`, text.trim());
  }
}
if (!existsSync(`${dir}page.html`)) { console.log('no page to check'); process.exit(1); }
if (!process.argv.includes('--quiet') || errors) console.log(`quiet: ${files.length} files of the page's own controls, ${errors} problem(s)`);
process.exit(errors ? 1 : 0);
