// Takes a picture of a page once the globe has stopped loading. Usage: node build/shot.mjs <url> <out.png> [width] [height] [dpr] [waitMs]
import { chromium } from 'playwright-core';
const [url, out, w = '1200', h = '760', dpr = '1', wait = '0'] = process.argv.slice(2);
const exe = process.env.CHROME_BIN ?? `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1200/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const browser = await chromium.launch({ executablePath: exe, headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader', '--hide-scrollbars'] });
const page = await browser.newPage({ viewport: { width: Number(w), height: Number(h) }, deviceScaleFactor: Number(dpr) });
const logs = [];
page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
await page.goto(url, { waitUntil: 'load' });
const t0 = Date.now();
// Wait for the tile queue to drain: nothing loading for a full second, up to 40 s.
let quiet = 0;
const framed = url.includes('preview.html');   // the sandboxed frame can't be read from outside: just give it time
if (framed) await page.waitForTimeout(Number(process.env.FRAME_WAIT ?? 9000));
while (!framed && Date.now() - t0 < 40000 && quiet < 5) {
  await page.waitForTimeout(200);
  const busy = await page.evaluate(() => (globalThis.world ? globalThis.world.globe.loader.busy + (globalThis.world.globe.ready ? 0 : 1) + (globalThis.world.control.fly ? 1 : 0) : 1)).catch(() => 1);
  quiet = busy === 0 ? quiet + 1 : 0;
}
if (Number(wait)) await page.waitForTimeout(Number(wait));
const info = await page.evaluate(() => globalThis.world && ({ tiles: world.globe.stats, fps: Math.round(world.fps), scale: world.scale, loaded: world.globe.loader.loaded, failed: world.globe.loader.failed, count: world.globe.count, gl: world.renderer.getContext().getParameter(world.renderer.getContext().VERSION) })).catch((e) => String(e));
await page.screenshot({ path: out, fullPage: framed });
console.log(JSON.stringify({ ms: Date.now() - t0, info }));
if (logs.length) console.log(logs.slice(0, 30).join('\n'));
await browser.close();
