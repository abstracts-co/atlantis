#!/usr/bin/env node
// Pictures that make faint ground shapes visible, from a height grid written by dem.mjs.
//
//   node tools/relief.mjs --in out/site --kind lrm --radius 150 --out out/site-lrm.png
//
// --kind hillshade   one light. --azimuth (compass degrees, default 315) --altitude (default 35) --exaggerate (default 1)
//        multi       the average of eight lights around the compass: shows banks and ditches whichever way they run
//        slope       flat is white, steep is black: edges of platforms, terraces and ditches
//        lrm         local relief: each height minus the average around it (--radius in metres, default 100).
//                    Small rises come out light and small hollows dark, on any slope. The standard way to read
//                    lidar for earthworks. It also sharpens noise and survey seams, so check a find in another kind.
// The output is a grey PNG the same size as the grid.
import { readFile, writeFile } from 'node:fs/promises';
import { encodePng } from './png.mjs';
import { args } from './geo.mjs';
import { hillshade } from './dem.mjs';

export const load = async (path) => {
  const meta = JSON.parse(await readFile(`${path}.json`, 'utf8'));
  const buf = await readFile(`${path}.f32`);
  return { width: meta.width, height: meta.height, metresPerPixel: meta.metres_per_pixel, data: new Float32Array(buf.buffer, buf.byteOffset, meta.width * meta.height), meta };
};

// Running-sum box blur, three passes: close to a Gaussian, and its cost doesn't grow with the radius.
const blur = (src, w, h, r) => {
  let a = Float32Array.from(src), b = new Float32Array(w * h);
  for (let pass = 0; pass < 3; pass++) {
    for (let y = 0; y < h; y++) {
      let sum = 0;
      for (let x = -r; x <= r; x++) sum += a[y * w + Math.min(Math.max(x, 0), w - 1)];
      for (let x = 0; x < w; x++) { b[y * w + x] = sum / (2 * r + 1); sum += a[y * w + Math.min(x + r + 1, w - 1)] - a[y * w + Math.max(x - r, 0)]; }
    }
    for (let x = 0; x < w; x++) {
      let sum = 0;
      for (let y = -r; y <= r; y++) sum += b[Math.min(Math.max(y, 0), h - 1) * w + x];
      for (let y = 0; y < h; y++) { a[y * w + x] = sum / (2 * r + 1); sum += b[Math.min(y + r + 1, h - 1) * w + x] - b[Math.max(y - r, 0) * w + x]; }
    }
  }
  return a;
};

export const render = (d, kind, o = {}) => {
  const { width: w, height: h, data, metresPerPixel: mpp } = d;
  const out = new Uint8Array(w * h);
  if (kind === 'hillshade') return hillshade(d, o);
  if (kind === 'multi') {
    const sum = new Float32Array(w * h);
    for (let k = 0; k < 8; k++) { const s = hillshade(d, { ...o, azimuth: k * 45, altitude: o.altitude ?? 30 }); for (let i = 0; i < sum.length; i++) sum[i] += s[i]; }
    for (let i = 0; i < sum.length; i++) out[i] = Math.round(sum[i] / 8);
    return out;
  }
  if (kind === 'slope') {
    const at = (x, y) => data[Math.min(Math.max(y, 0), h - 1) * w + Math.min(Math.max(x, 0), w - 1)];
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const deg = (Math.atan(Math.hypot(at(x + 1, y) - at(x - 1, y), at(x, y + 1) - at(x, y - 1)) / (2 * mpp)) * 180) / Math.PI;
      out[y * w + x] = Math.round(255 * (1 - Math.min(deg / (o.max ?? 35), 1)));
    }
    return out;
  }
  if (kind === 'lrm') {
    const r = Math.max(1, Math.round((o.radius ?? 100) / mpp));
    const smooth = blur(data, w, h, r);
    const diff = new Float32Array(w * h);
    let sq = 0;
    for (let i = 0; i < diff.length; i++) { diff[i] = data[i] - smooth[i]; sq += diff[i] * diff[i]; }
    // Stretch to two and a half standard deviations either side, so one cliff doesn't flatten everything else to grey.
    const range = o.range ?? Math.max(2.5 * Math.sqrt(sq / diff.length), 0.05);
    for (let i = 0; i < diff.length; i++) out[i] = Math.max(0, Math.min(255, Math.round(127.5 + (diff[i] / range) * 127.5)));
    return out;
  }
  throw new Error(`Unknown --kind ${kind}. Use hillshade, multi, slope or lrm.`);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = args();
  if (!a.in) { console.error('Usage: node tools/relief.mjs --in out/name --kind hillshade|multi|slope|lrm [--out file.png]'); process.exit(2); }
  const kind = a.kind ?? 'multi';
  const d = await load(a.in);
  const num = (k) => (a[k] === undefined ? undefined : Number(a[k]));
  const png = encodePng(d.width, d.height, 1, render(d, kind, { azimuth: num('azimuth'), altitude: num('altitude'), exaggerate: num('exaggerate') ?? 1, radius: num('radius'), range: num('range'), max: num('max') }));
  const out = a.out ?? `${a.in}-${kind}.png`;
  await writeFile(out, png);
  console.log(`${out}  ${d.width} x ${d.height} px, ${d.metresPerPixel} m a pixel`);
}
