// Records a short film of the page: the story, then on foot through the gate into the hall, where someone else is
// standing, then up to the globe and a claim.
// Usage: node build/tour.mjs <url> <out-dir> [width] [height] [--no-story | --story-only]
// It writes <out-dir>/film.mp4, with the page's own sound: the page notes every sound it starts and stops, and the
// same files are laid under the picture at the same moments, faded and looped the way the page does it (sound.js).
import { chromium } from 'playwright-core';
import { mkdir, writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { spawn, spawnSync } from 'node:child_process';
const args = process.argv.slice(2).filter((a) => !a.startsWith('--')), [url, dir, w = '1280', h = '720'] = args, story = !process.argv.includes('--no-story'), storyOnly = process.argv.includes('--story-only');
const here = new URL('.', import.meta.url).pathname;
const exe = process.env.CHROME_BIN ?? `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1200/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
// A stand-in room on this machine, so a second person can be in the hall.
const port = 9460 + Math.floor(Math.random() * 400);
const relay = spawn('node', [`${here}room-relay.mjs`, String(port)], { stdio: 'ignore' });
const room = `room=${encodeURIComponent(`ws://127.0.0.1:${port}/rooms/atlantis/earth/HALL22`)}`;
const browser = await chromium.launch({ executablePath: exe, headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
const size = { width: Number(w), height: Number(h) };
const context = await browser.newContext({ viewport: size, deviceScaleFactor: 1 });
const page = await context.newPage();
await page.addInitScript(() => { globalThis.__AUDIOLOG__ = true; });
// Frames come from Chrome's screencast and are joined by the system ffmpeg afterwards, each held for as long as it was on screen.
await mkdir(dir, { recursive: true });
const cdp = await context.newCDPSession(page);
const frames = [];
cdp.on('Page.screencastFrame', ({ data, metadata, sessionId }) => {
  const file = `${dir}/f${String(frames.length).padStart(5, '0')}.jpg`;
  frames.push({ file, t: metadata.timestamp });
  writeFile(file, Buffer.from(data, 'base64'));
  cdp.send('Page.screencastFrameAck', { sessionId }).catch(() => {});
});
await page.goto(`${url}${url.includes('?') ? '&' : '?'}${room}&as=Ada`, { waitUntil: 'load' });
await page.waitForFunction(() => globalThis.world?.globe.ready && globalThis.ui, null, { timeout: 30000 });
const wait = (ms) => page.waitForTimeout(ms);
// Wait until the flight is over and nothing has been loading for a second: tiles arrive level by level, with short lulls between.
const settle = async (extra = 1200) => { for (let i = 0, quiet = 0; i < 160 && quiet < 6; i++) { await wait(150); quiet = (await page.evaluate(() => !!world.control.fly || world.globe.loader.busy > 0)) ? 0 : quiet + 1; } await wait(extra); };
const mark = async () => (await page.evaluate(() => performance.now())) / 1000;
const hold = async (key, ms) => { await page.keyboard.down(key); await wait(ms); await page.keyboard.up(key); };
const turn = async (dx, dy = 0, ms = 900) => { const n = Math.round(ms / 30); await page.mouse.move(640, 360); await page.mouse.down(); for (let i = 1; i <= n; i++) { await page.mouse.move(640 + (dx * i) / n, 360 + (dy * i) / n); await wait(30); } await page.mouse.up(); };
await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, everyNthFrame: 1 });
const t0 = await mark();
const rad = Math.PI / 180;
await wait(2400);                                                          // the opening
if (story) {
  await page.click('#intro [data-act="tour"]');                            // the story, to its end: on foot at the gate
  await page.waitForFunction(() => !ui.tour.on, null, { timeout: 200000 }).catch(() => {});
} else await page.click('#intro [data-act="enter"]');
await wait(1200);
if (!storyOnly) {
// Someone else is in the hall already.
const other = await context.newPage();
await other.goto(`${url}${url.includes('?') ? '&' : '?'}${room}&as=Ben&hall=1`, { waitUntil: 'load' });
await other.waitForFunction(() => globalThis.ui?.walk.on && ui.meet.state.state === 'on', null, { timeout: 30000 }).catch(() => {});
await other.evaluate(() => ui.walk.enter({ x: 6.5, y: 3, look: [0, -14] })).catch(() => {});
await hold('KeyW', 9300);                                                  // through the gate and the door, to the table
await wait(500);
await other.fill('#mt-text', 'Welcome. The open questions are on the far wall.').catch(() => {}); await other.press('#mt-text', 'Enter').catch(() => {});
await turn(-420, -30, 1500); await wait(900);                              // look round the boards
await turn(700, 10, 2200); await wait(900);
await turn(-280, -40, 1000); await wait(600);
await page.evaluate(() => { ui.walk.enter({ x: 0, y: -8.5, look: [0, 0] }); ui.walk.state.pitch = 0.3; }); await wait(1600);
await page.keyboard.press('KeyE');                                         // the globe: up to the whole Earth
await wait(4200); await settle(600);
await page.evaluate(([to]) => world.control.flyTo(to, 4.5), [{ lon: -77.51 * rad, lat: 22.91 * rad, range: 1.3e6, tilt: 30 * rad, heading: 0 }]); await settle(1500);   // the best match on Earth
await page.locator('#hunt [data-act="h-claim"]').click(); await wait(4200);                                                                                           // claim it
}
console.log(`recorded ${((await mark()) - t0).toFixed(1)} s, ${frames.length} frames`);
const heard = await page.evaluate(() => ({ now: performance.now(), epoch: Date.now(), log: globalThis.ui?.sound?.state.log ?? [] }));
const told = await page.evaluate(() => (globalThis.ui?.tour.steps ?? []).map((x) => ({ id: x.id, say: x.say })));
await cdp.send('Page.stopScreencast');
await wait(300);
await writeFile(`${dir}/frames.txt`, frames.map((f, i) => `file '${f.file.split('/').pop()}'\nduration ${Math.max(0.01, (frames[i + 1]?.t ?? f.t + 0.04) - f.t).toFixed(4)}`).join('\n') + '\n');
await context.close();
await browser.close();
relay.kill();

// ---------- the film: the frames joined, then the same sounds the page played laid under them ----------
const run = (a) => { const p = spawnSync('ffmpeg', ['-loglevel', 'error', '-y', ...a], { encoding: 'utf8' }); if (p.status) throw new Error(p.stderr.slice(-800)); };
run(['-f', 'concat', '-safe', '0', '-i', `${dir}/frames.txt`, '-vf', 'fps=30,format=yuv420p', '-c:v', 'libx264', '-crf', '22', '-preset', 'medium', '-movflags', '+faststart', `${dir}/silent.mp4`]);
const length = frames.at(-1).t - frames[0].t;
const at = (e) => (heard.epoch - (heard.now - e.t)) / 1000 - frames[0].t;   // when in the film a sound started
const audioDir = new URL('../../data/audio/', import.meta.url).pathname;
const index = JSON.parse(readFileSync(`${audioDir}index.json`, 'utf8'));
const lengthOf = Object.fromEntries([...Object.values(index.narration), ...Object.values(index.sfx)].map((e) => [e.file, e.seconds]));
const inputs = [], chains = [], outs = [];
const input = (file) => { inputs.push('-i', audioDir + file); return inputs.length / 2; };   // 0 is the picture
const delay = (t) => `adelay=${Math.max(0, Math.round(t * 1000))}:all=1`;
// One sound from `offset`, for `secs` at most: up in 6 ms, down in `out` at its end.
const one = (file, start, volume, { offset = 0, secs = null, out = 0.04 } = {}) => {
  const n = input(file), len = Math.max(0.05, Math.min(secs ?? 1e9, (lengthOf[file] ?? 1) - offset));
  chains.push(`[${n}:a]atrim=start=${offset.toFixed(3)}:end=${(offset + len).toFixed(3)},asetpts=PTS-STARTPTS,afade=t=in:st=0:d=0.006,afade=t=out:st=${Math.max(0, len - out).toFixed(3)}:d=${out},volume=${volume},${delay(start)}[s${n}]`);
  outs.push(`[s${n}]`);
};
// A sound that goes round from `start` to `end`: passes that each fade into the next over `cross` seconds, as on the page.
const round = (file, start, end, volume, cross) => {
  const D = lengthOf[file], step = D - cross, n = Math.max(1, Math.ceil((end - start + 1.6) / step)), parts = [];
  for (let k = 0; k < n; k++) { const i = input(file); chains.push(`[${i}:a]atrim=0:${D},asetpts=PTS-STARTPTS${k ? `,afade=t=in:st=0:d=${cross}:curve=qsin` : ''},afade=t=out:st=${step.toFixed(3)}:d=${cross}:curve=qsin,${delay(k * step)}[p${i}]`); parts.push(`[p${i}]`); }
  const id = `l${outs.length}`, span = end - start;
  chains.push(`${parts.join('')}amix=inputs=${parts.length}:normalize=0:duration=longest,afade=t=in:st=0:d=1.2,afade=t=out:st=${span.toFixed(2)}:d=1.5,atrim=0:${(span + 1.6).toFixed(2)},volume=${volume},${delay(start)}[${id}]`);
  outs.push(`[${id}]`);
};
const open = new Map(), log = heard.log;
log.forEach((e, i) => {
  if (e.kind === 'sfx') one(e.file, at(e), e.volume);
  else if (e.kind === 'say') {
    // A voice that was hushed before its end is cut there, with the page's own short fade.
    const stop = log.slice(i + 1).find((x) => x.kind === 'hush' && x.file === e.file), cut = stop ? at(stop) - at(e) + 0.14 : null;
    one(e.file, at(e), e.volume ?? 1, { offset: e.offset ?? 0, secs: cut, out: cut ? 0.14 : 0.04 });
  } else if (e.kind === 'loop-on') open.set(e.file, e);
  else if (e.kind === 'loop-off' && open.has(e.file)) { const from = open.get(e.file); round(e.file, at(from), at(e), from.volume, from.cross ?? 2.5); open.delete(e.file); }
});
for (const from of open.values()) round(from.file, at(from), length, from.volume, from.cross ?? 2.5);
await writeFile(`${dir}/timeline.json`, `${JSON.stringify({ length, lines: told, sounds: log.filter((e) => e.kind === 'say' || e.kind === 'sfx').map((e) => ({ at: Number(at(e).toFixed(2)), kind: e.kind, file: e.file })) }, null, 1)}\n`);
const out = `${dir}/film.mp4`;
// The page passes everything through one limiter; so does the film.
if (outs.length) run(['-i', `${dir}/silent.mp4`, ...inputs, '-filter_complex', `${chains.join(';')};${outs.join('')}amix=inputs=${outs.length}:normalize=0:duration=longest,alimiter=limit=0.89:attack=3:release=220[mix]`, '-map', '0:v', '-map', '[mix]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k', '-t', length.toFixed(2), '-movflags', '+faststart', out]);
else run(['-i', `${dir}/silent.mp4`, '-c', 'copy', out]);
console.log(`${out}: ${length.toFixed(1)} s, ${outs.length} sounds laid in`);
