// Drives the page through a few steps and takes a picture after each. Headless; it opens nothing on the screen.
//   node build/drive.mjs <url> <out-prefix> [--size 1200x760] [--wait 600] "<js to run in the page>" ["<js>" ...]
// After each step it waits until the camera has stopped and the tile queue is empty, then saves <out-prefix>-<n>.jpg.
// The page exposes `world` and `ui` (ui.A is the Atlantis side). Console errors are printed at the end.
import { chromium } from 'playwright-core';

const args = process.argv.slice(2);
const take = (name, fallback) => { const i = args.indexOf(`--${name}`); if (i < 0) return fallback; const v = args[i + 1]; args.splice(i, 2); return v; };
const [w, h] = take('size', '1200x760').split('x').map(Number), extra = Number(take('wait', 600)), software = args.includes('--software');
if (software) args.splice(args.indexOf('--software'), 1);
const [url, prefix, ...steps] = args;
const exe = process.env.CHROME_BIN ?? `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1200/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const gl = software ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-angle=metal', '--enable-gpu'];
const browser = await chromium.launch({ executablePath: exe, headless: true, args: [...gl, '--ignore-gpu-blocklist', '--hide-scrollbars'] });
const kill = setTimeout(() => { console.log('timed out'); browser.close().finally(() => process.exit(2)); }, 240000);
const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
const logs = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
await page.goto(url, { waitUntil: 'load' });
const quiet = async (limit = 30000) => {
  const t0 = Date.now();
  let calm = 0;
  while (Date.now() - t0 < limit && calm < 4) {
    await page.waitForTimeout(200);
    const busy = await page.evaluate(() => (globalThis.world ? world.globe.loader.busy + (world.globe.ready ? 0 : 1) + (world.control.fly ? 1 : 0) : 1)).catch(() => 1);
    calm = busy === 0 ? calm + 1 : 0;
  }
  await page.waitForTimeout(extra);
};
await quiet(40000);
let n = 0;
for (const js of ['', ...steps]) {
  if (js) {
    const r = await page.evaluate(`(async () => { ${js} })()`).catch((e) => `ERROR ${e.message}`);
    if (r !== undefined) console.log(`step ${n}:`, typeof r === 'string' ? r : JSON.stringify(r));
    await quiet();
  }
  await page.screenshot({ path: `${prefix}-${n}.jpg`, type: 'jpeg', quality: 82 });
  n++;
}
const info = await page.evaluate(() => globalThis.world && ({ fps: Math.round(world.fps), scale: world.scale, failed: world.globe.loader.failed })).catch((e) => String(e));
console.log(JSON.stringify(info));
if (logs.length) console.log(logs.slice(0, 25).join('\n'));
clearTimeout(kill);
await browser.close();
