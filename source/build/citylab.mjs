// The city's own lab: stands Plato's city somewhere, jumps the camera to each test view, saves a picture of each and
// measures how long a frame takes. Headless only; it opens nothing on the screen.
//   node source/build/citylab.mjs --round r01 [--views air,harbour,temple,street] [--site santorini|spartel]
//        [--az 295 --alt 48] [--port 9417] [--w 1280 --h 800 --dpr 1] [--perf] [--phone] [--out <dir>]
//        [--view "name:x,y,range,tilt,heading[,az,alt]"]... [--js "<code run in the page before the pictures>"]
// A view's x and y are metres east and north of the city's centre; the camera looks at that point.
// Serve the lab build first: node source/build/serve.mjs 9417 source/.citylab/dist &
import { chromium } from 'playwright-core';
import { mkdir, writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const all = (name) => args.flatMap((a, i) => (a === `--${name}` ? [args[i + 1]] : []));
const flag = (name) => args.includes(`--${name}`);

const SITES = { santorini: { city: '36.40,25.40,180' }, spartel: { city: '35.92,-5.97,180', sea: -125 }, richat: { city: '21.124,-11.402,180' } };
const site = SITES[opt('site', 'santorini')];
const round = opt('round', 'r00');
const out = opt('out', new URL('../../research/city-shots/', import.meta.url).pathname);
const port = opt('port', '9417');
const W = Number(opt('w', 1280)), H = Number(opt('h', 800)), dpr = Number(opt('dpr', 1));
const sun = { az: Number(opt('az', 295)), alt: Number(opt('alt', 48)) };

// The four views of the brief. The page fills in x and y for the named spots from the city it built.
const VIEWS = {
  air: { spot: 'centre', range: 9000, tilt: 60, heading: 18 },
  harbour: { spot: 'harbour', range: 1000, tilt: 77, heading: 338, az: 165, alt: 36 },
  temple: { spot: 'temple', range: 215, tilt: 70, heading: 40 },
  street: { spot: 'quay', range: 26, tilt: 85, heading: 285, az: 175, alt: 40 },
};
const wanted = opt('views', 'air,harbour,temple,street').split(',').filter(Boolean).map((name) => ({ name, ...VIEWS[name] }));
for (const v of all('view')) {
  const [name, rest] = v.split(':'), [x, y, range, tilt, heading, az, alt] = rest.split(',').map(Number);
  wanted.push({ name, x, y, range, tilt, heading, az, alt });
}

const exe = process.env.CHROME_BIN ?? `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1200/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
// CITYLAB_GL picks the graphics backend: "metal" on the owner's Mac (the default there), "swiftshader" for software
// WebGL on a machine with no graphics card (the default on Linux). CITYLAB_FLAGS replaces the flags outright.
const backend = process.env.CITYLAB_GL ?? (process.platform === 'darwin' ? 'metal' : 'swiftshader');
const glFlags = process.env.CITYLAB_FLAGS ? process.env.CITYLAB_FLAGS.split(/\s+/).filter(Boolean)
  : backend === 'swiftshader' ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox']
  : [`--use-angle=${backend}`, '--enable-gpu', '--ignore-gpu-blocklist'];
const software = backend === 'swiftshader';
// With software drawing a frame takes seconds, so the lab keeps the map tiles in a disk cache between runs
// (CITYLAB_CACHE, a folder) and does not draw while a view is loading.
const cacheDir = process.env.CITYLAB_CACHE ?? (software ? new URL('../.citylab/chrome-cache/', import.meta.url).pathname : null);
const launch = { executablePath: exe, headless: true, args: [...glFlags, '--hide-scrollbars', '--disable-gpu-vsync', '--disable-frame-rate-limit'] };
const context = cacheDir ? await chromium.launchPersistentContext(cacheDir, { ...launch, viewport: { width: W, height: H }, deviceScaleFactor: dpr }) : null;
const browser = context ? { close: () => context.close() } : await chromium.launch(launch);
let code = 0;
// A hard stop, so a stuck page can never leave a browser running.
const started = Date.now();
const tick = (what) => { if (flag('log') || flag('time')) console.error(`${((Date.now() - started) / 1000).toFixed(1)}s ${what}`); };
const watchdog = setTimeout(async () => { console.error('citylab: timed out'); await browser.close().catch(() => {}); process.exit(2); }, Number(opt('max', 900)) * 1000);
try {
  await mkdir(out, { recursive: true });
  const page = context ? await context.newPage() : await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: dpr });
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning' || flag('log')) logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}\n${e.stack ?? ''}`));
  const q = new URLSearchParams({ city: site.city, clean: '1', still: '1', az: String(sun.az), alt: String(sun.alt) });
  if (site.sea != null) q.set('sea', String(site.sea));
  q.set('phone', flag('phone') ? '1' : '0');   // a small lab window must not be taken for a phone
  for (const extra of all('query')) { const [k, v] = extra.split('='); q.set(k, v); }
  const t0 = Date.now();
  await page.goto(`http://127.0.0.1:${port}/?${q}`, { waitUntil: 'load' });
  const draw = (on) => page.evaluate((on) => { const p = world.pipeline; p.realRender ??= p.render; p.render = on ? p.realRender : () => {}; world.stamp++; }, on);
  await page.waitForFunction(() => globalThis.world?.pipeline, null, { timeout: 60000 });
  if (software) await draw(false);
  tick('page up');
  await page.waitForFunction(() => globalThis.world?.globe.ready && globalThis.ui && globalThis.world.city.active, null, { timeout: 300000 });
  const gl = await page.evaluate(() => { const g = world.renderer.getContext(); return g.getParameter(g.VERSION); });
  if (!/WebGL 2/.test(gl)) throw new Error(`no WebGL2: ${gl}`);
  const built = Date.now() - t0;
  tick('page and city up');
  // Nothing loading for a second, and the city's own pictures in.
  const settle = async (extra = 300) => {
    if (software) await draw(false);
    for (let i = 0, quiet = 0; i < 900 && quiet < 5; i++) {
      await page.waitForTimeout(200);
      quiet = (await page.evaluate(() => world.globe.loader.busy + (world.control.fly ? 1 : 0) + (world.city.pending ?? 0))) === 0 ? quiet + 1 : 0;
    }
    await page.waitForTimeout(extra);
    if (software) await draw(true);
    // Two whole frames drawn after things went quiet, however slow a frame is.
    await page.evaluate(() => new Promise((done) => { world.stamp++; requestAnimationFrame(() => requestAnimationFrame(() => { world.stamp++; requestAnimationFrame(() => requestAnimationFrame(done)); })); }));
  };
  await page.evaluate(() => { world.adaptive = false; world.scale = 1; world.rest = false; world.renderer.info.autoReset = false; });
  const js = opt('js', '');
  if (js) await page.evaluate((src) => new Function('world', 'ui', src)(world, ui), js);
  const results = [];
  for (const v of wanted) {
    const where = await page.evaluate(([v, sun]) => {
      const DEG = Math.PI / 180, R = 6371008.8, c = world.city, s = c.site;
      let x = v.x, y = v.y, view = null;
      if (v.spot) {
        const spot = c.labSpots?.()[v.spot];
        if (spot) [x, y] = spot;
        else {
          // Before the city names its own spots: work them out from its rings, with the sea to the south.
          const [rIsle, , , , rL2, rW3] = c.city.shores;
          [x, y] = { centre: [0, 0], harbour: [96, -(rL2 + rW3) / 2], temple: [0, rIsle * 0.42], quay: [60, -rW3 - 12] }[v.spot];
        }
      }
      world.sun.azimuth = Number.isFinite(v.az) ? v.az : sun.az;
      world.sun.altitude = Number.isFinite(v.alt) ? v.alt : sun.alt;
      view = { lat: s.lat * DEG + y / R, lon: s.lon * DEG + x / (R * Math.cos(s.lat * DEG)), range: v.range, tilt: v.tilt * DEG, heading: v.heading * DEG };
      world.control.jump(view);
      world.control.idle = false;
      return { x: Math.round(x), y: Math.round(y) };
    }, [v, sun]);
    await settle(Number(opt('wait', 700)));
    tick(`${v.name}: settled`);
    const file = `${out}${v.name}-${round}.jpg`;
    // Milestone pictures are committed, so keep each under 300 KB. The picture is taken from the canvas inside the
    // page's own frame (world.snap), which works however slow a frame is; a browser screenshot can time out.
    const shot = await page.evaluate(() => new Promise((done) => {
      const t0 = performance.now();
      world.snap = async (blob) => {
        const ms = performance.now() - t0, bmp = await createImageBitmap(blob), c = document.createElement('canvas');
        c.width = bmp.width; c.height = bmp.height;
        c.getContext('2d').drawImage(bmp, 0, 0);
        for (const q of [0.88, 0.8, 0.72, 0.62, 0.5]) { const url = c.toDataURL('image/jpeg', q); if (url.length * 0.75 <= 300 * 1024 || q === 0.5) return done({ url, ms }); }
      };
      world.stamp++;
    }));
    await writeFile(file, Buffer.from(shot.url.split(',')[1], 'base64'));
    const r = { view: v.name, at: where, file, frame_ms_software: software ? Math.round(shot.ms) : undefined };
    // What one frame costs, counted: draw calls and triangles, shadows included. A second frame with the camera still
    // shows the cost once the shadow maps are settled.
    Object.assign(r, await page.evaluate(async () => {
      const info = world.renderer.info;
      info.autoReset = false;
      // The page's own frame callback runs before ours, so: reset after one frame, read after the next.
      const frameOf = (force) => new Promise((done) => requestAnimationFrame(() => { info.reset(); world.stamp++; if (force) world.city.forceShadows?.(); requestAnimationFrame(() => done({ calls: info.render.calls, triangles: info.render.triangles })); }));
      const moving = await frameOf(true);
      const still = await frameOf(false);
      return { moving, still };
    }));
    if (flag('perf')) {
      Object.assign(r, await page.evaluate(async () => {
        const gl = world.renderer.getContext(), info = world.renderer.info;
        let n = 0, tris = 0, calls = 0;
        const t0 = performance.now();
        await new Promise((done) => { const f = () => { n++; gl.finish(); tris = info.render.triangles; calls = info.render.calls; info.reset(); if (performance.now() - t0 < 2500) requestAnimationFrame(f); else done(); }; requestAnimationFrame(f); });
        const ms = (performance.now() - t0) / n;
        return { ms: Number(ms.toFixed(2)), fps: Math.round(1000 / ms), triangles: tris, calls, canvas: `${world.renderer.domElement.width}x${world.renderer.domElement.height}`, scale: world.scale };
      }));
    }
    results.push(r);
    tick(`${v.name}: done`);
  }
  console.log(JSON.stringify({ gl, software, tier: await page.evaluate(() => (world.phone ? 'phone' : 'desktop')), pictures: await page.evaluate(() => world.city.pictures ?? null), built_ms: built, city_build_ms: await page.evaluate(() => world.city.buildMs ?? null), results }, null, 1));
  if (logs.length) console.log(logs.slice(0, 40).join('\n'));
} catch (e) {
  console.error(e);
  code = 1;
} finally {
  clearTimeout(watchdog);
  await browser.close();
}
process.exit(code);
