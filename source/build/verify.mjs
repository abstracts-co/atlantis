#!/usr/bin/env node
// The harness behind skills/verify-atlantis: starts the globe, checks it is the right build, drives one feature the way a
// person would, and keeps the proof.
//
//   node source/build/verify.mjs launch            build, serve on a free port, wait until the page answers
//   node source/build/verify.mjs launch --artifact serve the built artifact (artifacts/earth/) as it is, without building
//   node source/build/verify.mjs doctor            is that instance ours, alive, and the build on disk?
//   node source/build/verify.mjs drive <feature>   run one journey from the feature map (or: drive all)
//   node source/build/verify.mjs stop              stop what launch started; the evidence stays
//
// Evidence goes to source/.verify/evidence/<feature>/: a .json of every step (action, what was observed, pass or fail)
// and a .png of the end state. Needs a Chrome or Chromium: set CHROME_BIN, or have Playwright's Chromium installed.
import { spawn, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createServer } from 'node:net';
import { existsSync, mkdirSync, openSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname;
const RUN = `${ROOT}.verify/`, STATE = `${RUN}run.json`, EVIDENCE = `${RUN}evidence/`;
const [cmd, arg] = process.argv.slice(2);
const sha = (file) => createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 16);
const read = (file) => JSON.parse(readFileSync(file, 'utf8'));
const dataFile = (name) => [`${ROOT}../data/${name}`].find(existsSync);
const freePort = () => new Promise((done) => { const s = createServer(); s.listen(0, '127.0.0.1', () => { const { port } = s.address(); s.close(() => done(port)); }); });
const alive = (pid) => { try { process.kill(pid, 0); return true; } catch { return false; } };
const chrome = () => {
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
  const base = `${process.env.HOME}/Library/Caches/ms-playwright`;
  const dir = existsSync(base) && readdirSync(base).filter((d) => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? `${base}/${dir}/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing` : undefined;
};

const launch = async () => {
  if (existsSync(STATE) && alive(read(STATE).pid)) { console.log(`already running: ${read(STATE).url}`); return; }
  mkdirSync(RUN, { recursive: true });
  // Either the working build (source/dist/), or the artifact exactly as it will be posted.
  const artifact = arg === '--artifact' && [`${ROOT}../artifacts/earth/`, `${ROOT}../publish/artifact/earth/`].find(existsSync);
  if (arg === '--artifact' && !artifact) { console.error('no built artifact found: run node source/build/publish.mjs first'); process.exit(1); }
  if (!artifact) { const built = spawnSync('node', [`${ROOT}build/bundle.mjs`, '--dev'], { stdio: 'inherit' }); if (built.status) process.exit(built.status); }
  const dir = artifact || `${ROOT}dist/`;
  const port = Number(process.env.VERIFY_PORT) || (await freePort());
  const log = openSync(`${RUN}server.log`, 'w');
  const child = spawn('node', [`${ROOT}build/serve.mjs`, String(port), artifact || ROOT], { detached: true, stdio: ['ignore', log, log] });
  child.unref();
  const url = `http://127.0.0.1:${port}/${artifact ? '' : 'dist/'}index.html`;
  writeFileSync(STATE, `${JSON.stringify({ pid: child.pid, port, url, dir, artifact: !!artifact, build: sha(`${dir}app.js`), started: new Date().toISOString() }, null, 2)}\n`);
  for (let i = 0; i < 50; i++) { if (await fetch(url).then((r) => r.ok).catch(() => false)) { console.log(`ready: ${url} (pid ${child.pid})`); return; } await new Promise((r) => setTimeout(r, 100)); }
  console.error('the server did not answer; see source/.verify/server.log');
  process.exit(1);
};

const doctor = async (quiet) => {
  const checks = [];
  const check = (name, ok, note = '') => { checks.push(ok); if (!quiet) console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${note ? `  (${note})` : ''}`); };
  if (!existsSync(STATE)) { check('launched by this harness', false, 'run launch first'); return false; }
  const run = read(STATE);
  check('the server we started is alive', alive(run.pid), `pid ${run.pid}`);
  const page = await fetch(run.url).then((r) => r.status).catch(() => 0);
  check('the page answers', page === 200, `${run.url} -> ${page}`);
  const served = await fetch(run.url.replace('index.html', 'app.js')).then((r) => r.arrayBuffer()).then((b) => createHash('sha256').update(Buffer.from(b)).digest('hex').slice(0, 16)).catch(() => '');
  check(`it serves the ${run.artifact ? 'artifact' : 'build'} on disk`, served === sha(`${run.dir}app.js`), `${served} served, ${sha(`${run.dir}app.js`)} on disk`);
  const legends = read(`${run.dir}legends.json`).legends;
  const atlantis = legends.find((l) => l.id === 'atlantis');
  check('the data has the Atlantis entry', !!atlantis && atlantis.places.length > 0, `${atlantis?.places.length ?? 0} places`);
  check('the reconstruction notes are present', existsSync(`${run.dir}reconstruction.json`));
  check('the case file and the scenes are present', existsSync(`${run.dir}case.json`) && existsSync(`${run.dir}evidence.json`));
  check('a browser is available', !!chrome() && existsSync(chrome()), chrome() ?? 'set CHROME_BIN');
  return checks.every(Boolean);
};

// ---------- journeys, one per file in skills/verify-atlantis/features/ ----------
const state = (page) => page.evaluate(() => ({ ...world.control.state(), sea: world.globe.shared.uSea.value, water: world.globe.shared.uWater.value, lens: world.globe.shared.uLens.value, exag: world.globe.shared.uExag.value, sheet: ui.st.sheet, kind: ui.st.kind, legend: ui.st.legend?.id ?? null, place: ui.st.place?.id ?? null, overlay: ui.st.overlay?.id ?? null, city: world.city.active, scene: ui.A?.a.scene?.id ?? null, drawn: world.evidence.active ? world.evidence.visible().filter((f) => f.side !== 'plato').length : 0, marks: [...document.querySelectorAll('.mark')].filter((m) => m.style.display !== 'none').length, board: !!ui.A?.boardOpen, pins: [...document.querySelectorAll('.pin')].filter((p) => p.style.display !== 'none').length }));
const settle = async (page) => { for (let i = 0; i < 90; i++) { await page.waitForTimeout(150); if (!(await page.evaluate(() => !!world.control.fly))) return; } };
const atlantisPlaces = () => read(`${read(STATE).dir}legends.json`).legends.find((l) => l.id === 'atlantis').places;
const menu = async (page, item) => { await page.click('#b-menu'); await page.click(item.startsWith('#') ? item : `#menu [data-menu="${item}"]`); };
const caseFile = () => read(`${read(STATE).dir}case.json`);
const sites = () => read(`${read(STATE).dir}evidence.json`).sites;

const FEATURES = {
  'atlantis-proposals': async (page, step) => {
    const places = atlantisPlaces(), checked = places.filter((p) => (p.tests ?? []).length).length, known = new Set(caseFile().claims.map((c) => c.id)), withScene = new Set(sites().map((x) => x.place));
    let s = await state(page);
    await page.click('#b-menu');
    const count = await page.textContent('#m-claims');
    step('opens on Atlantis only, and the menu counts the famous claims from the data', s.kind === 'atlantis' && count === String(places.length), `${count} in the menu`);
    await page.click('#menu [data-menu="claims"]'); await settle(page);
    s = await state(page);
    step('"Famous claims" opens the list', s.sheet === 'legend' && s.legend === 'atlantis');
    const listed = await page.locator('#body .prow').count();
    step('the list has every proposed place in the data', listed === places.length, `${listed} listed, ${places.length} in legends.json`);
    const hollow = await page.locator('#body .prow .sdot.hollow').count();
    step('a hollow dot marks each place never checked on the ground', hollow === places.length - checked, `${hollow} hollow, ${places.length - checked} without a check`);
    const plain = places.find((p) => !withScene.has(p.id) && ((p.fits ?? []).length || (p.conflicts ?? []).length));
    const before = await state(page);
    await page.locator(`#body .prow[data-id="${plain.id}"]`).click(); await settle(page);
    s = await state(page);
    step('choosing a place opens its card and moves the view', s.place === plain.id && (Math.abs(s.lat - before.lat) > 0.01 || Math.abs(s.lon - before.lon) > 0.01), plain.id);
    const marks = new Set([...(plain.fits ?? []), ...(plain.conflicts ?? [])].filter((id) => known.has(id))).size, chips = await page.locator('#body .sc-chip').count();
    step('the card marks what is said to fit and what breaks', chips === marks, `${chips} marks, ${marks} in the data`);
    await page.locator('#body .sc-chip').first().click();
    step("a mark opens the reason, with Plato's words", (await page.locator('#pop.open .quote').count()) === 1);
    await page.locator('#pop [data-act="pop-x"]').click();
    await page.locator('#body details.full summary').click();
    step('"Read the full case" shows the sources', (await page.locator('#body details.full .src').count()) >= 1);
    await page.locator('#body .back').click();
    step('"All places" goes back to the list', (await page.locator('#body .prow').count()) === places.length);
    await page.click('#sheet .x');
    await page.click('#search label'); await page.keyboard.type('atlan'); await page.waitForSelector('#results.open .res');
    step('search lists Atlantis first', (await page.textContent('#results .res b')) === 'Atlantis');
    await page.keyboard.press('Escape');
    await page.click('#search label'); await page.fill('#q', 'troy'); await page.waitForSelector('#results.open .res');
    await page.keyboard.press('Enter'); await settle(page);
    s = await state(page);
    step('search reaches the other legends too', s.legend !== null && s.sheet === 'legend', s.legend);
  },
  hunt: async (page, step) => {
    const wf = read(`${read(STATE).dir}worldfit.json`), best = wf.best.find((b) => !b.near_old_ice);
    await page.waitForFunction(() => ui.H?.ready, null, { timeout: 30000 });
    await page.click('#intro [data-act="hunt"]'); await page.waitForTimeout(600);
    let h = await page.evaluate(() => ({ hud: document.querySelector('#hunt').classList.contains('open'), reticle: document.querySelector('#reticle').classList.contains('open'), glow: world.globe.shared.uHeat.value }));
    step('"Start hunting" shows the reticle and its read-out, and the sunken land glows', h.hud && h.reticle && h.glow > 0.5, `glow ${h.glow.toFixed(2)}`);
    await page.evaluate(([lat, lon]) => world.control.jump({ lat: lat * Math.PI / 180, lon: lon * Math.PI / 180, range: 1.2e6 }), [best.lat, best.lon]); await page.waitForTimeout(500);
    const lit = await page.locator('#hunt .h-c.on').count();
    step('on the best match on Earth the read-out gives the score in the data', (await page.textContent('#h-score')) === `${best.top}/5` && lit === best.clues.length, `${await page.textContent('#h-score')}, ${lit} clues lit, ${best.near?.name ?? ''}`);
    await page.evaluate(() => world.control.jump({ lat: 21.12 * Math.PI / 180, lon: -11.4 * Math.PI / 180, range: 1.2e6 })); await page.waitForTimeout(500);
    step('on land that never sank the first light, "sank", stays off, and the read-out says so to a screen reader', /never sank/.test(await page.getAttribute('#h-score', 'aria-label')) && !(await page.locator('#hunt .h-c').first().getAttribute('class')).includes('on') && /sank/i.test(await page.locator('#hunt .h-c').first().textContent()));
    await page.evaluate(([lat, lon]) => world.control.jump({ lat: lat * Math.PI / 180, lon: lon * Math.PI / 180, range: 1.2e6 }), [best.lat, best.lon]); await page.waitForTimeout(400);
    await page.locator('#hunt [data-act="h-claim"]').click(); await page.waitForTimeout(500);
    const text = await page.textContent('#c-share');
    step('"Check this spot" gives the score, five squares and a link back to the spot', (await page.textContent('#body .c-hero b')) === `${best.top}/5` && (await page.locator('#body .c-row').count()) === 5 && text.includes(`${best.top}/5`) && (text.match(/🟩/g) ?? []).length === best.top && /hunt=/.test(text), text.split('\n').slice(0, 2).join(' '));
    step('the card is labelled for what it is: a landscape match', (await page.textContent('#eyebrow')).trim() === 'Landscape match');
    const link = text.split('\n').pop();
    const second = await page.context().newPage();
    await second.goto(link, { waitUntil: 'load' });
    await second.waitForFunction(() => globalThis.ui?.H?.ready && ui.st.sheet === 'claim', null, { timeout: 30000 }).catch(() => {});
    step('opening that link shows the same claim', (await second.textContent('#body .c-hero b').catch(() => '')) === `${best.top}/5`);
    await second.close();
    await page.click('#sheet .x');
    await menu(page, 'best');
    const rows = await page.locator('#body .prow').count();
    step('"Top scores" lists the best matches and every famous claim by the same rules', rows >= wf.places.length + 3 && /Nothing scores 5/.test(await page.textContent('#body')), `${rows} rows`);
    await menu(page, 'rules');
    step('"How it\'s scored" gives the rule for each clue and what the score cannot tell', (await page.locator('#body .c-row').count()) === 5 && /cannot tell/.test(await page.textContent('#body')));
  },
  'the-board': async (page, step) => {
    const places = atlantisPlaces(), c = caseFile(), known = new Set(c.claims.map((x) => x.id));
    const checked = places.filter((p) => (p.tests ?? []).length).length, pairs = places.reduce((n, p) => n + new Set([...(p.fits ?? []), ...(p.conflicts ?? [])].filter((id) => known.has(id))).size, 0);
    const used = new Set(places.flatMap((p) => [...(p.fits ?? []), ...(p.conflicts ?? [])])), checkable = c.claims.filter((x) => x.testable), blank = checkable.filter((x) => !used.has(x.id));
    await menu(page, 'board');
    step('"The board" in the menu opens it', (await page.locator('#board.open').count()) === 1);
    const tiles = await page.locator('#board .tile b').allTextContents();
    step('its four numbers are counted from the data', tiles[0] === String(places.length) && tiles[1] === '0' && tiles[2] === String(places.length - checked) && tiles[3] === `${blank.length} of ${checkable.length}`, tiles.join(' | '));
    step('every search is on the line', (await page.locator('#board .tl-b').count()) === c.searches.length, `${c.searches.length} in case.json`);
    const first = c.searches[1];
    await page.locator(`#board .tl-b[data-search="${first.id}"]`).click();
    const card = await page.textContent('#pop');
    step('a search opens how it ended', (await page.locator('#pop.open').count()) === 1 && card.includes(first.title) && card.includes('How it ended'), first.title);
    step('each place has a row', (await page.locator('#board tbody tr').count()) === places.length);
    const drawn = await page.locator('#board td.c button').count();
    step('every mark on the grid is in the data', drawn === pairs, `${drawn} drawn, ${pairs} in legends.json`);
    await page.locator('#board td.c button').first().click();
    step('a mark opens the reason, its source and the passage', (await page.locator('#pop.open .quote').count()) === 1 && (await page.locator('#pop a[href^="http"]').count()) >= 1);
    step('the shaded columns are the details nobody has measured', (await page.locator('#board th.col.dim').count()) === blank.length, `${blank.length} unmeasured`);
    await page.locator('#board th.col.dim button').first().click();
    step('a column head opens what Plato wrote and how to check it', /Not held against any place yet/.test(await page.textContent('#pop')));
    const name = await page.locator('#board tbody th button').first().getAttribute('data-go');
    await page.locator('#board tbody th button').first().click(); await settle(page);
    const s = await state(page);
    step('a name closes the board and goes to that place', !s.board && s.place === name, name);
  },
  scenes: async (page, step) => {
    const all = sites(), sc = all.find((x) => x.id === 'spartel-bank') ?? all[0];
    step('some places have their research drawn', all.length > 0, `${all.length} in evidence.json`);
    if (!sc) return;
    await menu(page, 'claims');
    await page.locator(`#body .prow[data-id="${sc.place}"]`).click(); await settle(page);
    let s = await state(page);
    const count = (sides) => sc.features.filter((f) => sides.includes(f.side)).length;
    step('opening the place draws its research on the ground', s.scene === sc.id && s.drawn === sc.features.length, `${s.drawn} drawn, ${sc.features.length} in evidence.json`);
    step('what is drawn is labelled', s.marks >= 1, `${s.marks} labels`);
    if (sc.needs_sea_level) {
      await page.waitForFunction((m) => Math.abs(world.globe.shared.uSea.value - m) < 0.6, sc.needs_sea_level.m, { timeout: 12000 }).catch(() => {});
      step('the sea goes to the level the proposal needs', Math.abs((await state(page)).sea - sc.needs_sea_level.m) < 0.6, `${sc.needs_sea_level.m} m`);
    }
    const deep = sc.dem && sc.features.find((f) => f.geometry.type === 'Point' && Number.isFinite(f.geometry.coordinates[2]) && f.geometry.coordinates[2] < -1);
    if (deep) {
      const [lon, lat, want] = deep.geometry.coordinates;
      await page.waitForFunction(([lo, la, w]) => Math.abs((world.globe.heightAt(lo * Math.PI / 180, la * Math.PI / 180) ?? 1e9) - w) < 15, [lon, lat, want], { timeout: 30000 }).catch(() => {});
      const got = await page.evaluate(([lo, la]) => world.globe.heightAt(lo * Math.PI / 180, la * Math.PI / 180), [lon, lat]);
      step(`the sea floor comes from the finer grid: "${deep.label}" is at the surveyed depth`, Math.abs(got - want) < 15, `${Math.round(got)} m on the globe, ${want} m in the data`);
    }
    await page.locator('#body .seg.modes button', { hasText: 'Claimed' }).click();
    s = await state(page);
    step('"Claimed" leaves only what was claimed and the places round it', s.drawn === count(['claimed', 'context']), `${s.drawn} drawn`);
    await page.locator('#body .seg.modes button', { hasText: 'Found' }).click();
    s = await state(page);
    step('"Found" shows what was checked and what turned up', s.drawn === count(['checked', 'found', 'context']), `${s.drawn} drawn`);
    await page.locator('#body .steps button[data-i="0"]').click(); await settle(page);
    const lit = await page.evaluate(() => [...(world.evidence.focus ?? [])].sort().join(','));
    step('a step of the walk-through lights up its own features and shows its sentence', lit === [...sc.story[0].show].sort().join(',') && (await page.textContent('#a-line')).includes(sc.story[0].line.slice(0, 40)), lit);
    await page.locator('#body .feat').first().click(); await settle(page);
    step('choosing a feature shows what it is, its source and how its position is known', (await page.locator('#body .fcard a[href^="http"]').count()) >= 1 && /Position/.test(await page.textContent('#body .fcard')));
    await page.click('#sheet .x'); await page.waitForTimeout(400);
    s = await state(page);
    step('closing the card leaves the scene on the globe', s.sheet === null && s.scene === sc.id);
    await page.locator('#seatag [data-act="scene-open"]').click();
    step('the note at the bottom brings the card back', (await state(page)).sheet === 'legend');
    await page.locator('#body .back').click(); await page.waitForTimeout(3200);
    s = await state(page);
    step('going back to the list clears the scene and puts the sea back', s.scene === null && s.drawn === 0 && Math.abs(s.sea) < 0.6, `sea ${Math.round(s.sea)} m`);
  },
  'fit-test': async (page, step) => {
    const c = caseFile(), num = (id, starts) => c.claims.find((x) => x.id === id).numbers.find((n) => n.what.startsWith(starts)).value;
    const stadion = read(`${read(STATE).dir}reconstruction.json`).units.stadion_m, ring = (num('central-island-diameter', 'diameter') / 2 + c.claims.find((x) => x.id === 'ring-widths').numbers.reduce((t, n) => t + n.value, 0)) * stadion, wall = ring + num('outer-wall-50-stades', 'distance') * stadion;
    await menu(page, 'claims');
    await page.locator('#body .prow[data-id="richat"]').click(); await settle(page);
    await page.locator('#body [data-act="a-fit"]').click();
    await page.waitForFunction(() => ['done', 'failed'].includes(ui.A.a.fit?.state), null, { timeout: 70000 }).catch(() => {});
    let f = await page.evaluate(() => { const x = ui.A.a.fit; return x && { state: x.state, ringR: x.ringR, wallR: x.wallR, dry: x.dry, mid: x.rings?.mid, relief: x.rings?.relief, shore: x.shore?.distance ?? null, land: x.plain?.land, shapes: x.shapes?.length, drawn: world.evidence.extras.length, city: world.city.active, sea: x.sea }; });
    step('"Test the fit" measures the ground', f?.state === 'done', f?.state === 'failed' ? 'blocked: the elevation tiles did not answer' : '');
    if (f?.state !== 'done') return;
    step("the rings and the wall are sized from Plato's own numbers", Math.abs(f.ringR - ring) < 1 && Math.abs(f.wallR - wall) < 1, `rings ${Math.round(2 * f.ringR)} m across, wall ${Math.round(f.wallR)} m out`);
    step('at the Richat Structure the ground is dry, hundreds of metres up, with no sea within 150 km', f.dry && f.mid > 300 && f.shore === null && f.land > 0.99, `${Math.round(f.mid)} m up, relief ${Math.round(f.relief)} m`);
    step('his plan is drawn on the ground at true size, with the city standing in it', f.drawn === f.shapes && f.city, `${f.drawn} shapes`);
    step('the card sets each of his measurements beside what is here', (await page.locator('#body .fit').count()) === 5);
    await page.locator('#body .presets .chip', { hasText: "Plato's date" }).click();
    await page.waitForFunction(() => ui.A.a.fit?.state === 'done' && ui.A.a.fit.sea === -50, null, { timeout: 70000 }).catch(() => {});
    step("it measures again with the sea at Plato's date", (await state(page)).sea === -50);
    await page.locator('#body [data-act="a-fit-off"]').click();
    const s = await state(page);
    step('"Clear the gold lines" removes the plan and the city', !s.city && (await page.evaluate(() => world.evidence.extras.length)) === 0);
  },
  tour: async (page, step) => {
    const wf = read(`${read(STATE).dir}worldfit.json`), cas = read(`${read(STATE).dir}case.json`);
    await page.click('#intro [data-act="tour"]'); await page.waitForTimeout(700);
    const ids = await page.evaluate(() => ui.tour.steps.map((s) => s.id)), n = ids.length;
    const at = () => page.evaluate(() => ui.tour.steps[ui.tour.step]?.id);
    const until = async (id) => { for (let i = 0; i < n && (await at()) !== id; i++) await page.evaluate(() => ui.tour.next()); };
    const soon = (f, arg, ms = 9000) => page.waitForFunction(f, arg, { timeout: ms }).then(() => true, () => false);
    const first = await page.evaluate(() => ({ text: document.querySelector('#tour p').textContent, city: world.city.active, range: world.control.range }));
    step('it opens on the city itself, saying it is a story nobody has found', /story Plato told/.test(first.text) && /Nobody has ever found it/.test(await page.evaluate(() => ui.tour.steps[0].say)) && first.city && first.range < 20000, `${n} sentences`);
    await page.locator('#tour [data-act="tour-pause"]').click();
    const held = await page.evaluate(() => ui.tour.step); await page.waitForTimeout(1200);
    step('"Pause" holds it', (await page.evaluate(() => ui.tour.step)) === held && (await page.getAttribute('#tour [data-act="tour-pause"]', 'aria-label')) === 'Play');
    await page.locator('#tour [data-act="tour-pause"]').click();
    await until('tale');
    const box = await page.locator('#tour .scrub').boundingBox();
    await page.mouse.click(box.x + box.width * 0.55, box.y + box.height / 2); await page.waitForTimeout(500);
    const mid = await page.evaluate(() => ui.tour.steps[ui.tour.step].id);
    await page.mouse.click(box.x + box.width * 0.02, box.y + box.height / 2); await page.waitForTimeout(500);
    const back = await page.evaluate(() => ({ id: ui.tour.steps[ui.tour.step].id, city: world.city.active, walk: ui.walk.on }));
    step('the scrubber goes forward and back to any point', !['legend', 'tale'].includes(mid) && back.id === 'legend' && back.city && !back.walk, `went to "${mid}", then back to "${back.id}"`);
    await until('tale');
    step('a picture of a real thing appears with its caption', await soon(() => document.querySelector('#shot.on img')?.complete && /Plato/.test(document.querySelector('#shot figcaption')?.textContent ?? '')));
    await until('island');
    step('the Pillars of Heracles are named on the globe', await soon(() => document.querySelector('#t-mark.on')?.textContent === 'The Pillars of Heracles'));
    await until('city');
    const temple = await soon(() => world.city.cut === true && /From the text/.test(document.querySelector('#citybar.present')?.textContent ?? '') && /temple/i.test(document.querySelector('#citybar.present').textContent), null, 12000);
    step('at "a temple coated with silver" the temple\'s roof lifts, with the passage it comes from', temple, await page.evaluate(() => (document.querySelector('#citybar.present .quote')?.textContent ?? '').slice(0, 70)));
    step('at "a wall that sparkled like fire" the wall of orichalcum is shown, with its passage', await soon(() => /orichalcum/i.test(document.querySelector('#citybar.present')?.textContent ?? '') && world.city.cut === false, null, 9000));
    await until('fall');
    step('the city goes under the sea', await soon(() => (world.city.city?.group.position.z ?? 0) < -8 || !world.city.active, null, 9000), `lowered ${await page.evaluate(() => Math.round(-(world.city.city?.group.position.z ?? 0)))} m when looked at`);
    await until('date');
    step('"9600 BCE" is written large as it is said', await soon(() => document.querySelector('#stat.on b')?.textContent === '9600 BCE'));
    await until('sank'); await page.waitForTimeout(2600);
    const k = await page.evaluate(() => ({ sea: world.globe.shared.uSea.value, glow: ui.H.state.glow, city: world.city.active }));
    step('at "gone under" the sea is back at today\'s level and the sunken land glows', Math.abs(k.sea) < 0.6 && k.glow > 0.9 && !k.city, `sea ${k.sea.toFixed(1)} m, glow ${k.glow}`);
    step('the area is written large, from the data', await soon((t) => document.querySelector('#stat.on b')?.textContent === t, `${(wf.totals.land_that_sank_km2 / 1e6).toFixed(1)} million km²`));
    await until('scored'); await settle(page); await page.waitForTimeout(600);
    const best = wf.best.find((b) => !b.near_old_ice) ?? wf.best[0];
    step('at the best match the hunt\'s own read-out shows its score', (await page.evaluate(() => getComputedStyle(document.querySelector('#hunt')).display !== 'none' && document.querySelector('#h-score').textContent)) === `${best.top}/5`, `${await page.textContent('#h-score')} on screen`);
    await until('search');
    step('every search on record is a dot, and a place people named opens with its research drawn', (await page.locator('#dots.on i').count()) === cas.searches.length && await soon(() => !!ui.A.a.scene, null, 6000), `${await page.locator('#dots.on i').count()} dots`);
    await until('hall');
    step('at "we opened it" the view goes inside the hall and turns past the boards', await soon(() => ui.walk.on && ui.walk.state.where === 'The hall' && ui.walk.state.pan !== 0, null, 12000));
    await until('turn'); await page.waitForTimeout(400);
    await page.evaluate(() => ui.tour.next()); await page.waitForTimeout(700);
    const e = await page.evaluate(() => ({ tour: ui.tour.on, walk: ui.walk.on, where: ui.walk.state.where, pan: ui.walk.state.pan, hud: !document.querySelector('#walk').hidden, use: document.querySelector('#w-use')?.textContent ?? '' }));
    step('the story\'s end leaves the visitor in the hall, facing the globe, with one thing to do', !e.tour && e.walk && e.hud && e.where === 'The hall' && e.pan === 0 && /Open the globe/.test(e.use), e.use);
    await menu(page, 'story'); await page.waitForTimeout(500);
    await page.locator('#tour [data-act="tour-stop"]').click(); await page.waitForTimeout(700);
    step('"Skip" ends the story at once, on foot in the hall', await page.evaluate(() => !ui.tour.on && ui.walk.on && world.city.active && ui.walk.state.where === 'The hall'));
  },
  sound: async (page, step) => {
    const ix = read(`${read(STATE).dir}audio/index.json`);
    step('the page has a sound button', (await page.locator('#b-sound:not([hidden])').count()) === 1);
    await page.evaluate(() => { globalThis.__AUDIOLOG__ = true; });
    await page.click('#intro [data-act="tour"]'); await page.waitForTimeout(1600);
    const lines = await page.evaluate(() => ui.tour.steps.map((s) => s.say));
    const key = (t) => { let h = 2166136261; for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16).padStart(8, '0'); };
    const missing = lines.filter((t) => !ix.narration[key(t)]);
    step('every sentence of the story as it stands is recorded, word for word', missing.length === 0 && lines.every((t) => ix.narration[key(t)].text === t), `${lines.length - missing.length} of ${lines.length}`);
    let v = await page.evaluate(() => ({ ...ui.sound.voiceState(), total: ui.tour.steps[0].total, bed: ui.sound.state.loops.has('bed'), running: ui.sound.context.state }));
    step('the story speaks its first sentence, over a quiet bed', v.playing && v.at > 0.3 && v.bed, `${v.at.toFixed(1)} s in, sound ${v.running}`);
    step('the sentence stays up for as long as it takes to say', v.total >= ix.narration[key(lines[0])].seconds * 1000, `${Math.round(v.total)} ms for ${ix.narration[key(lines[0])].seconds} s of speech`);
    // A sound that goes round must never reach its own end: the next pass starts while this one is still fading.
    const lp = await page.evaluate(() => { const L = ui.sound.state.loops.get('bed'); return L?.parts.length ? { overlap: L.parts.at(-1).end - L.next, len: L.buffer.duration } : null; });
    step('the bed goes round with each pass fading into the next', !!lp && Math.abs(lp.overlap - 2.5) < 0.05, lp ? `${lp.overlap.toFixed(2)} s of overlap in a ${lp.len.toFixed(1)} s sound` : 'not started');
    await page.locator('#tour [data-act="tour-pause"]').click(); await page.waitForTimeout(400);
    v = await page.evaluate(() => ui.sound.voiceState());
    step('"Pause" stops the voice, and "Play" takes it up from where it stopped', v.paused && !v.playing && v.at > 0.5, `held at ${v.at.toFixed(1)} s`);
    await page.locator('#tour [data-act="tour-pause"]').click(); await page.waitForTimeout(500);
    const back = await page.evaluate(() => ui.sound.voiceState());
    step('it resumes a breath before that point, not from the start', back.playing && back.at > v.at - 0.4 && back.at < v.at + 1.2, `${back.at.toFixed(1)} s`);
    await page.evaluate(() => ui.tour.next()); await page.waitForTimeout(1200);
    await page.evaluate(() => ui.tour.next()); await page.waitForTimeout(1200);
    // Moving on mid-sentence: the voice that was speaking is faded out before the next begins, never cut dead and never two at once.
    const order = await page.evaluate(() => ui.sound.state.log.filter((e) => e.kind === 'say' || e.kind === 'hush').map((e) => e.kind));
    const clean = order.every((kind, i) => kind !== 'say' || i === 0 || order[i - 1] === 'hush');
    step('moving on mid-sentence fades the old voice out before the new one starts', clean && order.filter((x) => x === 'say').length >= 3, order.join(' '));
    await page.locator('#tour [data-act="tour-stop"]').click(); await page.waitForTimeout(2600);
    const air = await page.evaluate(() => ({ walk: ui.walk.on, city: ui.sound.state.loops.has('city'), bed: ui.sound.state.loops.has('bed'), voice: ui.sound.voiceState().playing }));
    step('the story over, the visitor is in the hall: its quiet is heard and the voice is gone', air.walk && air.bed && !air.city && !air.voice);
    await page.evaluate(() => ui.enterCity('gate')); await page.waitForTimeout(2600);
    step('out of doors the harbour is heard instead', await page.evaluate(() => ui.sound.state.loops.has('city') && !ui.sound.state.loops.has('bed')));
    await page.keyboard.down('KeyW'); await page.waitForTimeout(1500); await page.keyboard.up('KeyW');
    const steps = await page.evaluate((f) => ui.sound.state.log.filter((e) => e.file === f).length, ix.sfx.step.file);
    step('walking is heard as footsteps', steps >= 2, `${steps} in a second and a half`);
    await page.evaluate(() => ui.openGlobe()); await page.waitForTimeout(4200);
    await page.evaluate(() => world.control.jump({ lat: 22.91 * Math.PI / 180, lon: -77.51 * Math.PI / 180, range: 1.2e6 })); await page.waitForTimeout(700);
    await page.locator('#hunt [data-act="h-claim"]').click(); await page.waitForTimeout(900);
    const log = await page.evaluate(() => ui.sound.state.log.map((e) => e.file).filter(Boolean));
    step('claiming a spot sounds the sonar, and a strong match the chime', log.includes(ix.sfx.ping.file) && log.includes(ix.sfx.lock.file), [...new Set(log)].length + ' different sounds so far');
    await page.click('#b-sound'); await page.waitForTimeout(2200);
    const before = await page.evaluate(() => ui.sound.state.log.filter((e) => e.kind === 'say' || e.kind === 'sfx').length);
    await page.click('#sheet .x'); await page.locator('#hunt [data-act="h-claim"]').click(); await page.waitForTimeout(600);
    step('the sound button turns everything off', await page.evaluate((n) => !ui.sound.on && ui.sound.state.loops.size === 0 && ui.sound.state.log.filter((e) => e.kind === 'say' || e.kind === 'sfx').length === n, before));
  },
  walk: async (page, step) => {
    await page.click('#intro [data-act="enter"]'); await page.waitForTimeout(1200);
    const a = await page.evaluate(() => ({ on: ui.walk.on, city: world.city.active, lat: world.city.site.lat, lon: world.city.site.lon, floor: world.globe.heightAt(world.control.lon, world.control.lat), eye: world.control.altitude, hud: !document.querySelector('#walk').hidden, hunt: getComputedStyle(document.querySelector('#hunt')).display, pins: getComputedStyle(document.querySelector('#pins')).display }));
    step('"Walk the city" puts the visitor on foot in Plato\'s city', a.on && a.city && a.hud);
    step('the city stands where the text points, beyond the strait, on open sea', Math.abs(a.lat - 35.3) < 0.01 && Math.abs(a.lon + 9.9) < 0.01 && a.floor < -1000, `the sea floor there is ${Math.round(a.floor)} m`);
    step('the eye is at head height', Math.abs(a.eye - 1.7) < 0.15, `${a.eye.toFixed(2)} m above the paving`);
    step('the globe\'s own controls are put away', a.hunt === 'none' && a.pins === 'none');
    const p0 = await page.evaluate(() => ({ x: ui.walk.state.x, y: ui.walk.state.y }));
    await page.keyboard.down('KeyW'); await page.waitForTimeout(1500); await page.keyboard.up('KeyW'); await page.waitForTimeout(300);
    const p1 = await page.evaluate(() => ({ x: ui.walk.state.x, y: ui.walk.state.y }));
    const went = Math.hypot(p1.x - p0.x, p1.y - p0.y);
    step('W walks forward at a walking pace', went > 4 && went < 11 && p1.y > p0.y, `${went.toFixed(1)} m in 1.5 s`);
    await page.keyboard.down('ShiftLeft'); await page.keyboard.down('KeyS'); await page.waitForTimeout(1000); await page.keyboard.up('KeyS'); await page.keyboard.up('ShiftLeft'); await page.waitForTimeout(300);
    const p2 = await page.evaluate(() => ({ x: ui.walk.state.x, y: ui.walk.state.y }));
    step('Shift runs', Math.hypot(p2.x - p1.x, p2.y - p1.y) > 8, `${Math.hypot(p2.x - p1.x, p2.y - p1.y).toFixed(1)} m in a second`);
    const d0 = await page.evaluate(() => ui.walk.state.dir);
    const box = await page.locator('#view').boundingBox();
    await page.mouse.move(box.x + 500, box.y + 300); await page.mouse.down(); await page.mouse.move(box.x + 620, box.y + 300, { steps: 6 }); await page.mouse.up();
    step('dragging turns the head', Math.abs((await page.evaluate(() => ui.walk.state.dir)) - d0) > 0.2);
    // No instructions are on screen, so the obvious thing must work: click the ground to go there.
    await page.evaluate(() => { const g = world.city.city.hall; ui.walk.enter({ x: 0, y: -(g.RG + 30), look: [0, 0] }); ui.walk.state.pitch = -0.25; }); await page.waitForTimeout(300);
    const c0 = await page.evaluate(() => ({ x: ui.walk.state.x, y: ui.walk.state.y, words: [...document.querySelectorAll('#walk p, #walk kbd')].length }));
    await page.mouse.click(box.x + box.width / 2, box.y + box.height * 0.62); await page.waitForTimeout(500);
    const locked = await page.evaluate(() => ui.walk.state.locked);
    if (locked) {
      // The click took the pointer, as in a game: now the mouse looks with no button held, and a click acts on the middle of the view.
      const l0 = await page.evaluate(() => ui.walk.state.dir);
      await page.mouse.move(box.x + box.width / 2 + 90, box.y + box.height * 0.62, { steps: 5 }); await page.waitForTimeout(200);
      step('after one click the mouse looks around with no button held', Math.abs((await page.evaluate(() => ui.walk.state.dir)) - l0) > 0.05);
      await page.evaluate(() => { ui.walk.state.dir = 0; ui.walk.state.pitch = -0.25; const g = world.city.city.hall; ui.walk.enter({ x: 0, y: -(g.RG + 30), look: [0, 0], grab: false }); ui.walk.state.pitch = -0.25; });
      await page.mouse.click(box.x + box.width / 2, box.y + box.height * 0.62);
    } else {
      // A browser with no window will not give the pointer. The page's side of it is checked by telling it the pointer was given:
      // then moving the mouse, with no button down, must turn the head, and a click must act on the middle of the view.
      const sim = await page.evaluate(() => {
        const c = world.renderer.domElement, d0 = ui.walk.state.dir;
        Object.defineProperty(document, 'pointerLockElement', { configurable: true, get: () => c });
        document.dispatchEvent(new Event('pointerlockchange'));
        const m = new MouseEvent('mousemove', { bubbles: true }); Object.defineProperty(m, 'movementX', { value: 90 }); Object.defineProperty(m, 'movementY', { value: 0 });
        document.dispatchEvent(m);
        return { locked: ui.walk.state.locked, turned: Math.abs(ui.walk.state.dir - d0), aim: getComputedStyle(document.querySelector('#w-aim')).display };
      });
      step('after one click the mouse looks around with no button held', sim.locked && sim.turned > 0.1 && sim.aim !== 'none', `turned ${sim.turned.toFixed(2)} rad with no button down (the pointer's capture was simulated: this browser has no window)`);
      await page.evaluate(() => { const g = world.city.city.hall; ui.walk.enter({ x: 0, y: -(g.RG + 30), look: [0, 0], grab: false }); ui.walk.state.pitch = -0.25; });
      await page.mouse.click(box.x + 40, box.y + 120);   // anywhere: with the pointer taken, a click acts on the middle of the view
      await page.evaluate(() => { delete document.pointerLockElement; document.dispatchEvent(new Event('pointerlockchange')); });
    }
    await page.waitForTimeout(2600);
    const c1 = await page.evaluate(() => ({ x: ui.walk.state.x, y: ui.walk.state.y, goal: ui.walk.state.goal }));
    step('clicking the ground walks there, with no line of instructions on screen', c0.words === 0 && Math.hypot(c1.x - c0.x, c1.y - c0.y) > 3 && c1.y > c0.y && c1.goal === null, `${Math.hypot(c1.x - c0.x, c1.y - c0.y).toFixed(1)} m, then stopped`);
    await page.evaluate(() => ui.walk.unlock());
    // What is solid is solid. From outside the wall of gold, away from its gate, walking at it gets nowhere.
    const hold = async (ms) => { await page.keyboard.down('KeyW'); await page.waitForTimeout(ms); await page.keyboard.up('KeyW'); await page.waitForTimeout(250); };
    await page.evaluate(() => { const g = world.city.city.hall; ui.walk.enter({ x: g.RG + 12, y: 0, look: [0, 0] }); }); await hold(3000);
    const w1 = await page.evaluate(() => ({ r: Math.hypot(ui.walk.state.x, ui.walk.state.y), RG: world.city.city.hall.RG }));
    step('the wall of gold cannot be walked through', w1.r > w1.RG - 0.2, `stopped ${(w1.r - w1.RG).toFixed(1)} m outside it`);
    await page.evaluate(() => { const g = world.city.city.hall; ui.walk.enter({ x: 0, y: -(g.RG + 12), look: [0, 0] }); }); await hold(8200);
    const w2 = await page.evaluate(() => ({ r: Math.hypot(ui.walk.state.x, ui.walk.state.y), g: world.city.city.hall, where: ui.walk.state.where }));
    step('its gate, and the door of the hall behind it, can', w2.r < w2.g.RI, `now ${w2.r.toFixed(0)} m from the centre: ${w2.where}`);
    const solid = await page.evaluate(() => {
      const c = world.city.city, P = c.plan, t = c.temple, w = ui.walk;
      return {
        water: w.canStand(0, (P.rIsle + P.rW1) / 2, 0), outside: w.canStand(P.edge + 50, 0, P.B),
        bridge: w.canStand(P.off, -(P.bridges[0][0] + P.bridges[0][1]) / 2, P.B), besideBridge: w.canStand(P.off + P.bridgeHalf + 20, -(P.bridges[0][0] + P.bridges[0][1]) / 2, P.B),
        ringWall: w.canStand(-(P.r1b - 2), 0, P.B), gateway: w.canStand(P.off, -Math.sqrt((P.r1b - 2) ** 2 - P.off ** 2), P.B),
        step1: world.city.localFloor(t.x + t.L / 2 + 4.5, t.y) - t.z, top: world.city.localFloor(t.x, t.y) - t.z, room: w.canStand(t.x - t.room.l / 2, t.y + 3, t.floor), door: w.canStand(t.x + t.room.l / 2, t.y, t.floor),
      };
    });
    step('water and the world outside the city cannot be stood on', !solid.water && !solid.outside);
    step('a ring of water is crossed by its bridge and nowhere else', solid.bridge && !solid.besideBridge);
    step('a ring wall is passed by its gateway and nowhere else', solid.gateway && !solid.ringWall);
    step('the temple is climbed by its four steps and entered by its door', Math.abs(solid.step1 - 0.9) < 0.01 && Math.abs(solid.top - 3.6) < 0.01 && solid.door && !solid.room, `first step ${solid.step1.toFixed(2)} m, platform ${solid.top.toFixed(2)} m`);
    // Every part of the walk can be reached on foot: there is footing within 320 m of the place it is looked at from
    // (a harbour is looked at from over its water, a ring of water being 555 m across at the widest).
    const lost = await page.evaluate(() => { const c = world.city.city; return c.parts.map((p) => p.id).filter((id) => { const s = c.spots[id]; return !s || !ui.walk.footing(s[0], s[1], 320); }); });
    step('every part of the city has ground to stand on near it', lost.length === 0, lost.join(', '));
    await page.locator('#walk [data-act="w-up"]').click(); await page.waitForTimeout(3000);
    const up = await page.evaluate(() => ({ on: ui.walk.on, range: world.control.range, bar: document.querySelector('#citybar').classList.contains('open'), hud: document.querySelector('#walk').hidden }));
    step('"Overview" leaves the ground and shows the city from above', !up.on && up.hud && up.range > 200 && up.bar, `${Math.round(up.range)} m up`);
    await page.locator('#citybar [data-act="cb-foot"]').click(); await page.waitForTimeout(800);
    step('"Walk" on the city\'s bar comes back down', await page.evaluate(() => ui.walk.on));
  },
  hall: async (page, step) => {
    const dir = read(STATE).dir, open = read(`${dir}open.json`), cas = read(`${dir}case.json`), wf = read(`${dir}worldfit.json`), ev = read(`${dir}evidence.json`);
    await menu(page, 'hall'); await page.waitForTimeout(1500);
    const a = await page.evaluate(() => ({ on: ui.walk.on, where: ui.walk.state.where, boards: ui.hall.state.boards.map((b) => b.id), counts: ui.hall.counts, inside: Math.hypot(ui.walk.state.x, ui.walk.state.y) < world.city.city.hall.RI, entry: !!ui.A.atlantis && ui.hall.state.boards.every((b) => b.mesh.parent) }));
    step('"The hall" in the menu stands the visitor inside it', a.on && a.inside && a.where === 'The hall');
    step('twelve boards hang on its wall', a.boards.length === 12 && a.entry, a.boards.join(', '));
    // Each board is a picture made from the data. It must have something on it, and its numbers must be the data's.
    const ink = await page.evaluate(() => ui.hall.state.boards.map((b) => { const g = b.canvas.getContext('2d'), d = g.getImageData(0, 0, b.canvas.width, b.canvas.height).data; let n = 0; for (let i = 0; i < d.length; i += 16) if (d[i] + d[i + 1] + d[i + 2] > 300) n++; return n; }));
    step('every board has writing on it', ink.every((n) => n > 400), `least: ${Math.min(...ink)} bright points`);
    const openSearches = cas.searches.filter((x) => x.status === 'unresolved' || x.status === 'never-tested').length, work = open.work.filter((t) => (t.status ?? 'open') !== 'done').length;
    step('its counts are the data\'s: open work, open searches', a.counts.work === work && a.counts.openSearches === openSearches, `${a.counts.work} tasks, ${a.counts.openSearches} searches with no answer`);
    // Face the board of open work, close to it, and use it.
    const look = async (id, back = 6) => { await page.evaluate(([id, back]) => { const b = ui.hall.state.boards.find((x) => x.id === id).at, r = Math.hypot(b.x, b.y); ui.walk.enter({ x: b.x * (1 - back / r), y: b.y * (1 - back / r), look: [b.x, b.y] }); ui.walk.state.pitch = 0.2; }, [id, back]); await page.waitForTimeout(500); };
    await look('work');
    step('facing a board, a line says what using it will do', (await page.locator('#w-use:not([hidden])').count()) === 1 && /Help build/.test(await page.textContent('#w-use')), await page.textContent('#w-use'));
    await page.keyboard.press('KeyE'); await page.waitForTimeout(400);
    const tasks = await page.locator('#body .hl-task').count();
    step('E opens it: every open task, by area', tasks === work, `${tasks} of ${work}`);
    await page.locator('#body .hl-task summary').first().click();
    const first = open.work[0];
    const prompt = await page.evaluate((t) => ui.hall.promptFor(t), first);
    step('a task\'s prompt names the task, its files, its checks and the repository, and asks before posting or pushing', prompt.includes(first.id) && first.start.every((f) => prompt.includes(f)) && first.check.every((c) => prompt.includes(c)) && prompt.includes(open.repository.replace(/\/[^/]+$/, '')) && /wait until I accept/.test(prompt) && /Post only if I say yes/.test(prompt), `${prompt.length} characters`);
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']).catch(() => {});
    await page.locator('#body [data-act="hl-prompt"]').first().click(); await page.waitForTimeout(300);
    const copied = await page.evaluate(() => navigator.clipboard.readText().catch(() => document.querySelector('#body .c-share')?.textContent ?? ''));
    step('"Copy the prompt for my AI" puts it on the clipboard', copied.includes(first.id) && copied.includes('AGENTS.md'));
    await page.click('#sheet .x');
    await look('unknown');
    await page.keyboard.press('KeyE'); await page.waitForTimeout(300);
    const rows = await page.locator('#body .known').count(), unscored = await page.evaluate(() => ui.hall.counts.unscored), lost = ev.sites.flatMap((x) => x.not_located ?? []).length;
    step('"Still unknown" lists every search with no answer, every claim not scored and everything claimed with no position', rows === openSearches + unscored + lost, `${rows} rows: ${openSearches} + ${unscored} + ${lost}`);
    await page.click('#sheet .x');
    // Clicking a board, anywhere on it, reads it: no key is needed.
    await look('searches', 7);
    await page.mouse.click(550 + 120, 380 - 40); await page.waitForTimeout(400);
    step('clicking a board opens it', /Searches/.test(await page.textContent('#body h2')));
    await page.click('#sheet .x');
    // The globe on the table opens the whole Earth.
    await page.evaluate(() => { ui.walk.enter({ x: 0, y: -9, look: [0, 0] }); ui.walk.state.pitch = 0.3; }); await page.waitForTimeout(500);
    step('facing the globe, the line offers to open it', /Open the globe/.test(await page.textContent('#w-use')));
    const painted = await page.evaluate(() => { const c = ui.hall.state.globe.tex.image, d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let land = 0, sunk = 0; for (let i = 0; i < d.length; i += 4) { if (d[i] === 59 && d[i + 1] === 74) land++; else if (d[i + 1] > 100) sunk++; } return { land, sunk }; });
    step('it is painted from the hunt\'s own map: land, sea and the sunken land by its score', painted.land > 20000 && painted.sunk > 300, `${painted.land} points of land, ${painted.sunk} of sunken land`);
    await page.keyboard.press('KeyE'); await page.waitForTimeout(4600);
    const g = await page.evaluate(() => ({ walk: ui.walk.on, range: world.control.range, hud: document.querySelector('#hunt').classList.contains('open') || getComputedStyle(document.querySelector('#hunt')).display !== 'none', city: world.city.active }));
    step('E rises out of the city to the whole Earth, where the hunt is', !g.walk && g.range > 5e6 && g.hud && g.city, `${Math.round(g.range / 1000)} km up`);
    await page.click('#b-city'); await page.waitForTimeout(1200);
    step('the button at the top goes back down into the city', await page.evaluate(() => ui.walk.on));
    void wf;
  },
  meet: async (page, step) => {
    // Three people in one browser, and a stand-in for the Abstracts room on this machine (source/build/room-relay.mjs).
    const relay = async (seats, mode) => { const port = await freePort(); const child = spawn('node', [`${ROOT}build/room-relay.mjs`, String(port), String(seats), ...(mode ? [mode] : [])], { stdio: 'ignore' }); for (let i = 0; i < 40; i++) { if (await fetch(`http://127.0.0.1:${port}/`).then((r) => r.ok).catch(() => false)) break; await new Promise((r) => setTimeout(r, 100)); } return { port, child }; };
    const visit = async (port, name) => { const p = await page.context().newPage(); await p.goto(`${read(STATE).url}?room=${encodeURIComponent(`ws://127.0.0.1:${port}/rooms/atlantis/earth/HALL22`)}&as=${name}&hall=1`, { waitUntil: 'load' }); await p.waitForFunction(() => globalThis.world?.globe.ready && globalThis.ui?.walk.on, null, { timeout: 30000 }); await p.click('#meet [data-act="mt-start"]'); return p; };
    const joined = (p, n) => p.waitForFunction((n) => ui.meet.state.state === 'on' && ui.meet.state.members.size === n, n, { timeout: 8000 }).then(() => true, () => false);
    // Alone and signed out (no room to join here): the city is still walked, and nothing about meeting is shown.
    await page.click('#intro [data-act="enter"]'); await page.waitForTimeout(900);
    step('nothing is joined or asked on arrival: multiplayer waits for one button', await page.evaluate(() => ui.walk.on && ui.meet.state.state === 'elsewhere' && !ui.meet.state.socket && document.querySelector('#meet [data-act="mt-start"]')?.textContent === 'Multiplayer'));
    const big = await relay(2), pages = [];
    try {
      const ada = await visit(big.port, 'Ada'); pages.push(ada);
      const ben = await visit(big.port, 'Ben'); pages.push(ben);
      step('two people in the hall are in one room', (await joined(ada, 1)) && (await joined(ben, 1)));
      const fire = await ada.evaluate(() => ui.hall.state.brazier.fire.visible);
      await ada.evaluate(() => ui.walk.use(ui.walk.state.hotspots.find((h) => h.id === 'multiplayer'))); await ada.waitForTimeout(400);
      const out = await ada.evaluate(() => ({ state: ui.meet.state.state, fire: ui.hall.state.brazier.fire.visible }));
      await ada.evaluate(() => ui.walk.use(ui.walk.state.hotspots.find((h) => h.id === 'multiplayer'))); await joined(ada, 1); await ada.waitForTimeout(300);
      step('the brazier in the hall burns while multiplayer is on, and pressing it turns multiplayer off and on', fire && out.state === 'off' && !out.fire && (await ada.evaluate(() => ui.hall.state.brazier.fire.visible)));
    step('who else is here shows at the top, as a face and a count', await ada.evaluate(() => !document.querySelector('#here').hidden && document.querySelector('#here b')?.textContent === '2'));
      await ben.evaluate(() => ui.walk.enter({ x: 4, y: -9, look: [0, 0] })); await ada.evaluate(() => ui.walk.enter({ x: -4, y: -12, look: [4, -9] })); await ada.waitForTimeout(1500);
      const seen = await ada.evaluate(() => { const p = [...ui.meet.state.members.values()][0]; return { name: p.name, x: p.x, y: p.y, shown: p.fig.visible && !!p.fig.parent, tag: document.querySelector('#people .person span')?.textContent, tagOn: getComputedStyle(document.querySelector('#people .person')).display !== 'none' }; });
      step('each sees the other as a figure with a name, where they stand', seen.shown && seen.name === 'Ben' && seen.tag === 'Ben' && seen.tagOn && Math.hypot(seen.x - 4, seen.y + 9) < 0.6, `Ben at ${seen.x.toFixed(1)}, ${seen.y.toFixed(1)}`);
      await ben.evaluate(() => ui.walk.enter({ x: 9, y: -3, look: [0, 0] })); await ada.waitForTimeout(1500);
      const moved = await ada.evaluate(() => { const p = [...ui.meet.state.members.values()][0]; return Math.hypot(p.x - 9, p.y + 3); });
      step('when one walks, the other sees them go', moved < 0.8, `${moved.toFixed(2)} m from where Ben stands`);
      await ben.fill('#mt-text', 'Has anyone checked the Azores cores?'); await ben.press('#mt-text', 'Enter'); await ada.waitForTimeout(600);
      step('a line written by one is read by the other, with the name', /Ben\s+Has anyone checked the Azores cores\?/.test(await ada.textContent('#mt-log')) && /Has anyone checked/.test(await ben.textContent('#mt-log')));
      await ada.fill('#mt-text', 'typing…'); await ben.fill('#mt-text', 'A second line'); await ben.waitForTimeout(950); await ben.press('#mt-text', 'Enter'); await ada.waitForTimeout(500);
      step('a line arriving does not wipe what is being typed', (await ada.inputValue('#mt-text')) === 'typing…' && /A second line/.test(await ada.textContent('#mt-log')));
      // Voice, with the browser's stand-in microphone: a call between the two, and sound arriving.
      await ada.click('#mt-mic'); await ben.click('#mt-mic');
      const call = await ada.waitForFunction(() => [...ui.meet.state.voice.peers.values()].some((c) => c.pc.connectionState === 'connected' && c.gain), null, { timeout: 12000 }).then(() => true, () => false);
      await ada.waitForTimeout(1500);
      const heard = call ? await ada.evaluate(async () => { const c = [...ui.meet.state.voice.peers.values()][0]; let bytes = 0; (await c.pc.getStats()).forEach((r) => { if (r.type === 'inbound-rtp' && r.kind === 'audio') bytes += r.bytesReceived; }); return { bytes, gain: c.gain.gain.value, calls: ui.meet.state.voice.peers.size }; }) : { bytes: 0, gain: 0, calls: 0 };
      step('with voice on, the two are in a call and sound arrives', call && heard.bytes > 2000 && heard.calls === 1, `${heard.bytes} bytes of sound`);
      step('a voice 13 m away is quieter than one at arm\'s length', heard.gain > 0.2 && heard.gain < 0.9, `level ${heard.gain.toFixed(2)}`);
      await ben.evaluate(() => { const P = world.city.city.plan; ui.walk.enter({ x: 0, y: -(P.Rp - 20), look: [0, 0] }); }); await ada.waitForTimeout(2200);
      step('walking out of earshot ends the call', await ada.evaluate(() => ui.meet.state.voice.peers.size === 0));
      // A full room: the third person is put in the next one.
      const cy = await visit(big.port, 'Cy'); pages.push(cy);
      const third = await cy.waitForFunction(() => ui.meet.state.state === 'on', null, { timeout: 8000 }).then(() => cy.evaluate(() => ({ room: ui.meet.state.room, alone: ui.meet.state.members.size })), () => null);
      step('when a room is full, the next person is put in the next room', !!third && third.room === 1 && third.alone === 0, third ? `room ${third.room + 1}` : 'did not join');
      await ben.close(); pages.splice(pages.indexOf(ben), 1); await ada.waitForTimeout(700);
      step('someone leaving is gone from the hall, and the room says so', await ada.evaluate(() => ui.meet.state.members.size === 0 && !document.querySelector('#people .person') && /Ben\s+left/.test(document.querySelector('#mt-log').textContent)));
    } finally { for (const p of pages) await p.close().catch(() => {}); big.child.kill(); }
    // A site that does not know bigger rooms yet: positions still get through, as ordinary messages.
    const old = await relay(8, 'old'), more = [];
    try {
      const dee = await visit(old.port, 'Dee'); more.push(dee);
      const eli = await visit(old.port, 'Eli'); more.push(eli);
      await joined(dee, 1); await eli.evaluate(() => ui.walk.enter({ x: -6, y: 7, look: [0, 0] })); await dee.waitForTimeout(1600);
      const far = await dee.evaluate(() => { const p = [...ui.meet.state.members.values()][0]; return p ? { d: Math.hypot(p.x + 6, p.y - 7), batch: ui.meet.state.batch } : null; });
      step('on a site with rooms of eight and no position frames, people are still seen where they stand', !!far && far.d < 0.8 && far.batch === false, far ? `${far.d.toFixed(2)} m off, sent as messages` : 'nobody seen');
    } finally { for (const p of more) await p.close().catch(() => {}); old.child.kill(); }
  },
  'sea-level': async (page, step) => {
    await menu(page, '#b-sea');
    await page.locator('#sea-range').fill('-120');
    step('the slider lowers the sea', (await state(page)).sea === -120);
    await page.locator('.presets .chip', { hasText: '19,000 BCE' }).click();
    step('the ice-age preset sets -125 m', (await state(page)).sea === -125);
    await page.locator('.presets .chip', { hasText: '9600 BCE' }).click();
    step("Plato's date sets -50 m", (await state(page)).sea === -50);
    await page.check('#sea-off');
    step('draining the oceans turns the water off', (await state(page)).water === 0);
    await page.uncheck('#sea-off');
    await page.locator('.presets .chip', { hasText: 'Today' }).click();
    const s = await state(page);
    step('Today puts the sea back', s.sea === 0 && s.water === 1);
  },
  'platos-city': async (page, step) => {
    const rec = read(`${read(STATE).dir}reconstruction.json`);
    await menu(page, 'claims');
    await page.locator('#body .prow').first().click(); await settle(page);
    await page.locator('#body [data-act="a-city"]').click(); await settle(page);
    step('"Stand Plato\'s city here" builds it and flies there', (await state(page)).city);
    const c = await page.evaluate(() => ({ shores: world.city.city.shores, p: world.city.city.params, ids: world.city.city.parts.map((x) => x.id), site: world.city.site, wall: world.city.city.wallRadius }));
    const S = rec.units.stadion_m, want = [2.5, 3.5, 5.5, 7.5, 10.5, 13.5].map((v) => v * S);
    step('ring shores stand at 2.5, 3.5, 5.5, 7.5, 10.5 and 13.5 stadia (Critias 115e-116a)', c.shores.every((v, i) => Math.abs(v - want[i]) < 0.01), c.shores.map((v) => Math.round(v)).join(', ') + ' m');
    step('canal 50 stadia by 3 plethra, outer wall 50 stadia out (115d, 117e)', c.p.canalLength === 50 && c.p.canalWidthPlethra === 3 && c.p.outerWallDistance === 50 && Math.abs(c.wall - (want[5] + 50 * S)) < 0.01, `wall at ${Math.round(c.wall)} m from the centre`);
    step('temple a stadion by three plethra (116d)', c.p.templeLength === 1 && c.p.templeWidth === 0.5);
    // The stops of the walk are the model's own list; each must be a part of the city that was built, and every part an entry of the record.
    const { WALK } = await import('../engine/city/surfaces.js'), entries = new Set([...rec.from_text, ...rec.choices].map((x) => x.id));
    step('every stop of the walk is a part of the model', WALK.every((id) => c.ids.includes(id)), WALK.filter((id) => !c.ids.includes(id)).join(', ') || `${WALK.length} stops, ${c.ids.length} parts`);
    step('every part of the model is an entry of the record', c.ids.every((id) => entries.has(id)), c.ids.filter((id) => !entries.has(id)).join(', '));
    step('the sea is to the south (118a-b)', c.p.seaBearing === 180);
    await page.waitForTimeout(600);
    step('a bar for the city appears while it stands', (await page.locator('#citybar.open').count()) === 1);
    // The walk: each stop flies to a part, lights it and shows where it comes from.
    await page.locator('#citybar [data-act="cb-walk"]').click(); await settle(page);
    const first = await page.evaluate(() => ({ n: ui.cityBar.state.parts.length, i: ui.cityBar.state.walk, lit: world.city.lit, text: document.querySelector('#citybar .cb-what')?.textContent ?? '' }));
    step('"Walk through it" starts at the first part, lit, with what it is', first.i === 0 && first.n === WALK.length && first.lit === WALK[0] && first.text.length > 12, `${first.n} stops; first: ${first.text.slice(0, 70)}`);
    const before = await state(page);
    await page.locator('#citybar [data-act="cb-next"]').click(); await settle(page);
    const second = await page.evaluate(() => ({ i: ui.cityBar.state.walk, lit: world.city.lit })), after = await state(page);
    step('Next goes to the second part and the view moves', second.i === 1 && second.lit === WALK[1] && (before.lat !== after.lat || before.lon !== after.lon || before.range !== after.range));
    await page.locator('#citybar [data-act="cb-end"]').click(); await settle(page);
    step('"Done" puts the city back as it was', (await page.evaluate(() => ui.cityBar.state.walk === -1 && world.city.lit === null)));
    await page.locator('#citybar [data-act="cb-ghost"]').click();
    step('"Text or guess" draws our choices pale', (await page.evaluate(() => world.city.ghost === true && world.city.city.meshes.some((m) => m.userData.ghostable && m.material === world.city.materials.ghost))));
    await page.locator('#citybar [data-act="cb-ghost"]').click();
    await page.locator('#citybar [data-act="cb-cut"]').click(); await settle(page);
    // Asked of what is seen, not of a flag: a ray down the middle of the view must land inside the room, on nothing that lifts and not on the outside of the temple.
    const seen = await page.evaluate(() => { const c = world.renderer.domElement; return { cut: world.city.cut, hit: world.city.pick(c.clientWidth / 2, c.clientHeight / 2)?.id ?? null }; });
    step('"Open the temple" lifts its roof and the room inside is seen', seen.cut === true && seen.hit !== null && !['temple', 'temple-ceiling', 'pinnacles'].includes(seen.hit), `the middle of the view lands on: ${seen.hit}`);
    await page.locator('#citybar [data-act="cb-cut"]').click(); await settle(page);
    await page.locator('#citybar [data-act="cb-notes"]').click();
    const rows = await page.locator('#body .known').count();
    step('the notes list what is from the text and what is our choice', rows === rec.from_text.length + rec.choices.length, `${rows} rows, ${rec.from_text.length} + ${rec.choices.length} in reconstruction.json`);
    await page.locator('#body [data-act="city-off"]').click();
    step('Remove takes the city away', !(await state(page)).city);
  },
  surveys: async (page, step) => {
    await menu(page, '#b-layers');
    await page.locator('.seg button', { hasText: 'Bare earth' }).click();
    step('Bare earth switches the view', (await state(page)).lens === 1);
    await page.locator('#exag').fill('4');
    step('the relief slider stretches heights', (await state(page)).exag === 4);
    const rows = await page.locator('#body .layer').count();
    step('surveys are listed', rows >= 5, `${rows} rows`);
    await page.locator('#body .layer').first().click();
    step('choosing a survey turns it on', (await state(page)).overlay !== null);
    await page.locator('#body .layer.on').click();
    step('choosing it again turns it off', (await state(page)).overlay === null);
  },
  'move-the-globe': async (page, step) => {
    await page.evaluate(() => { world.control.jump({ lat: 0.63, lon: 0.44, range: 60000 }); world.control.idle = false; }); await page.waitForTimeout(1200);
    const a = await state(page);
    await page.mouse.move(700, 400); await page.mouse.down(); await page.mouse.move(560, 430, { steps: 8 }); await page.mouse.up(); await page.waitForTimeout(400);
    const b = await state(page);
    step('dragging moves the ground', Math.abs(b.lon - a.lon) > 0.001 || Math.abs(b.lat - a.lat) > 0.001);
    await page.mouse.move(600, 400); await page.mouse.wheel(0, -600); await page.waitForTimeout(900);
    const c = await state(page);
    step('the wheel zooms in (full window)', c.range < b.range * 0.8, `${Math.round(b.range / 1000)} km to ${Math.round(c.range / 1000)} km`);
    await page.click('#z-out'); await page.waitForTimeout(900);
    step('the minus button zooms out', (await state(page)).range > c.range * 1.5);
    await page.mouse.move(600, 400); await page.mouse.down({ button: 'right' }); await page.mouse.move(640, 330, { steps: 6 }); await page.mouse.up({ button: 'right' });
    const d = await state(page);
    step('right-drag turns and tilts', d.tilt > 5 && Math.abs(d.heading) > 1, `tilt ${Math.round(d.tilt)}, heading ${Math.round(d.heading)}`);
    await page.click('#compass'); await settle(page);
    const e = await state(page);
    step('the compass faces north and looks down', Math.abs(e.heading) < 0.5 && e.tilt < 0.5);
  },
  'record-check': async (page, step) => {
    await page.click('#search label'); await page.fill('#q', '51.1789, -1.8262'); await page.waitForSelector('#results.open .res');
    await page.keyboard.press('Enter'); await settle(page);
    const s = await state(page);
    step('coordinates fly to the place', Math.abs(s.lat - 51.1789) < 0.01 && Math.abs(s.lon + 1.8262) < 0.01);
    // Both databases must have answered or given up: the first to answer is not the whole list. A database that did
    // not answer is asked again, twice at most: a public service that is busy for a moment is not a fault of the page.
    let text = '', tries = 0;
    for (; tries < 3; tries++) {
      await menu(page, '#b-known');
      await page.waitForFunction(() => { const t = document.querySelector('#body')?.textContent ?? ''; return /Sites and monuments|No recorded site/.test(t) && !/Still waiting|Asking Wikidata/.test(t); }, null, { timeout: 70000 }).catch(() => {});
      text = await page.textContent('#body');
      if (/Stonehenge/.test(text) || !/Could not reach|Asking Wikidata|Still waiting/.test(text)) break;
      await page.click('#sheet .x'); await page.waitForTimeout(4000);
    }
    // If a database never answered, the journey is blocked, not passed: say so.
    step('the record check finds Stonehenge', /Stonehenge/.test(text), /Asking Wikidata/.test(text) ? 'blocked: neither Wikidata nor OpenStreetMap answered' : /Could not reach: [^.]*Wikidata/.test(text) ? `blocked: Wikidata did not answer in ${tries} tries` : `${text.slice(0, 70).replace(/\s+/g, ' ')}${tries ? ` (asked ${tries + 1} times)` : ''}`);
  },
  'share-link': async (page, step) => {
    const place = atlantisPlaces()[0];
    await page.evaluate(([lat, lon]) => { ui.apply({ city: `${lat},${lon},180`, sea: '-60', lens: '1' }); }, [place.lat, place.lon]);
    await page.waitForTimeout(500);
    const params = await page.evaluate(() => ui.viewParams());
    step('the view has an address', !!params.city && params.sea === -60 && params.lens === 1, JSON.stringify(params));
    const second = await page.context().newPage();
    await second.goto(`${read(STATE).url}?${new URLSearchParams(params)}`, { waitUntil: 'load' });
    await second.waitForFunction(() => globalThis.world?.globe.ready && globalThis.ui, null, { timeout: 30000 });
    await second.waitForTimeout(600);
    const s = await state(second);
    step('opening that address in a new tab restores the view', s.city && s.sea === -60 && s.lens === 1 && Math.abs(s.lat - place.lat) < 0.2, `city ${s.city}, sea ${s.sea}, lens ${s.lens}`);
    await second.close();
  },
};
// No browser: the data checks.
const DATA_CHECKS = [['check-legends.mjs', []], ['check-data.mjs', []], ['check-evidence.mjs', ['--quiet']], ['make-audio.mjs', ['--check']], ['check-open.mjs', ['--quiet']], ['check-story.mjs', ['--quiet']], ['check-quiet.mjs', ['--quiet']], ['check-reconstruction.mjs', []], ['check-library.mjs', ['--quiet']]];
const dataFiles = (step) => {
  for (const [name, args] of DATA_CHECKS) {
    const file = [`${ROOT}../tools/${name}`, `${ROOT}../build/${name}`, `${ROOT}../library/${name}`].find(existsSync);
    if (!file) { step(`${name}`, false, 'not found'); continue; }
    const run = spawnSync('node', [file, ...args], { encoding: 'utf8' });
    step(`node ${name}`, run.status === 0, (run.stdout + run.stderr).trim().split('\n').pop());
  }
};

// No browser: find a passage the way an agent does, by walking an index's titles and summaries, then read that leaf.
const library = (step) => {
  const dir = [`${ROOT}../indexes/`, `${ROOT}../library/out/indexes/`].find(existsSync);
  const catalogFile = [`${ROOT}../library/catalog.json`, `${ROOT}../library/out/catalog.json`].find(existsSync);
  if (!dir || !catalogFile) return step('the library is present', false, 'no indexes/ or library/catalog.json');
  const works = read(catalogFile).works, indexed = works.filter((w) => w.index);
  step('the catalogue lists the works and which are indexed', works.length > 50 && indexed.length > 10, `${works.length} works, ${indexed.length} indexed`);
  step('every indexed work has its tree', indexed.every((w) => existsSync(`${dir}${w.index.split('/').pop()}/index.json`)));
  const leaves = [];
  const walk = (nodes) => nodes.forEach((n) => (n.nodes?.length ? walk(n.nodes) : leaves.push(n)));
  walk(read(`${dir}plato-critias-bury/index.json`).tree);
  step("each leaf of the Critias carries its Stephanus reference", leaves.every((n) => /\b1[0-2]\d[a-e]/.test(n.title)), `${leaves.length} leaves`);
  const hit = leaves.find((n) => /canal|channel/i.test(`${n.title} ${n.summary}`));
  step('titles and summaries lead to the leaf about the canal', !!hit, hit?.title ?? 'no leaf mentions the canal');
  const text = hit && existsSync(`${dir}plato-critias-bury/text/${hit.node_id}.md`) ? readFileSync(`${dir}plato-critias-bury/text/${hit.node_id}.md`, 'utf8') : '';
  step('that leaf gives the canal as three plethra wide and fifty stades long (Critias 115d)', /three plethra/.test(text) && /fifty stades/.test(text), `${text.length} characters`);
};

const drive = async (feature) => {
  if (!['data-files', 'library'].includes(feature) && !FEATURES[feature]) { console.error(`No feature "${feature}". Features: ${[...Object.keys(FEATURES), 'library', 'data-files'].join(', ')}`); return false; }
  const offline = ['data-files', 'library'].includes(feature); // these read files only: no instance needed
  if (!offline && !(await doctor(true))) { console.error('doctor failed: run `node source/build/verify.mjs doctor`'); return false; }
  const run = existsSync(STATE) ? read(STATE) : { build: null, url: null };
  const stamp = new Date().toISOString().replace(/[:.]/g, '-'), dir = `${EVIDENCE}${feature}/`, steps = [];
  mkdirSync(dir, { recursive: true });
  const step = (name, ok, observed = '') => { steps.push({ step: name, ok: !!ok, observed: String(observed) }); console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${observed ? `  (${observed})` : ''}`); };
  let shot = null;
  if (feature === 'data-files') dataFiles(step);
  else if (feature === 'library') library(step);
  else {
    const { chromium } = await import('playwright-core');
    // On a machine with no graphics card (a cloud VM), set VERIFY_SOFTWARE=1: slower, but every journey still runs.
    const gl = process.env.VERIFY_SOFTWARE ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-angle=metal', '--enable-gpu'];
    const browser = await chromium.launch({ executablePath: chrome(), headless: true, args: [...gl, '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
    try {
      const context = await browser.newContext({ viewport: { width: 1100, height: 760 } });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      await page.goto(read(STATE).url, { waitUntil: 'load' });
      await page.waitForFunction(() => globalThis.world?.globe.ready && globalThis.ui, null, { timeout: 30000 });
      await page.waitForTimeout(700);
      await FEATURES[feature](page, step).catch((e) => step('the journey ran to its end', false, e.message.split('\n')[0]));
      step('no script errors', errors.length === 0, errors.slice(0, 2).join(' | '));
      shot = `${dir}${stamp}.png`;
      await page.screenshot({ path: shot });
    } finally { await browser.close(); }
  }
  const ok = steps.every((s) => s.ok);
  writeFileSync(`${dir}${stamp}.json`, `${JSON.stringify({ feature, ok, at: new Date().toISOString(), build: run.build, url: run.url, steps, screenshot: shot }, null, 2)}\n`);
  console.log(`${ok ? 'PASS' : 'FAIL'} ${feature}: evidence in ${dir}${stamp}.json`);
  return ok;
};

if (cmd === 'launch') await launch();
else if (cmd === 'doctor') process.exit((await doctor()) ? 0 : 1);
else if (cmd === 'drive') {
  const list = arg === 'all' ? [...Object.keys(FEATURES), 'library', 'data-files'] : [arg];
  let ok = true;
  for (const f of list) ok = (await drive(f)) && ok;
  process.exit(ok ? 0 : 1);
} else if (cmd === 'stop') {
  if (existsSync(STATE)) { const { pid } = read(STATE); if (alive(pid)) process.kill(pid); rmSync(STATE); console.log(`stopped pid ${pid}; evidence kept in ${EVIDENCE}`); } else console.log('nothing to stop');
} else { console.error('usage: node source/build/verify.mjs launch | doctor | drive <feature|all> | stop'); process.exit(2); }
