// The city's pictures. Two texture arrays, one slice per layer of surfaces.js: colour, and normal (red, green) with
// roughness (blue). They are first drawn in code, small, so the city appears at once and still appears when no file
// can be loaded (the one-file build ships none). Then the CC0 files in city/ are fetched and swapped in.
import * as THREE from 'three';
import { LAYERS } from './surfaces.js';

const TAU = Math.PI * 2;
// The shipped pictures, by layer: [colour, normal with roughness]. Listed in assets/CREDITS.md.
export const MANIFEST = Object.fromEntries(LAYERS.map((n) => [n, [`${n}_c.jpg`, `${n}_n.jpg`]]));
const hash = (x, y, s) => { let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
// Value noise that repeats every `period` cells, so the picture tiles.
const noise = (x, y, period, seed) => {
  const xi = Math.floor(x), yi = Math.floor(y), fx = x - xi, fy = y - yi, u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
  const w = (a, b) => hash(((a % period) + period) % period, ((b % period) + period) % period, seed);
  return (w(xi, yi) * (1 - u) + w(xi + 1, yi) * u) * (1 - v) + (w(xi, yi + 1) * (1 - u) + w(xi + 1, yi + 1) * u) * v;
};
const fbm = (x, y, period, seed, oct = 4) => { let a = 0, amp = 0.5, f = 1; for (let o = 0; o < oct; o++) { a += amp * noise(x * f, y * f, period * f, seed + o); amp *= 0.5; f *= 2; } return a / (1 - 2 ** -oct); };

// Each layer: at (u, v) in 0..1 give [red, green, blue (sRGB 0..255), height 0..1, roughness 0..1].
const DRAW = {
  ashlar: (u, v) => {
    const rows = 8, j = Math.floor(v * rows), fv = v * rows - j, n = 2 + (j % 3 === 1 ? 1 : 0), off = hash(j, 0, 3) * 0.6;
    const x = (u + off) * n, i = Math.floor(x), fu = x - i, w = 1 / n;
    const joint = Math.min(fu * w * 4.2, (1 - fu) * w * 4.2, fv * 0.525, (1 - fv) * 0.525) / 0.022;   // metres from the joint, over the joint's width
    const k = Math.min(1, joint), tone = 0.86 + 0.2 * hash(i % n, j, 7), g = fbm(u * 24, v * 24, 24, 5), stain = fbm(u * 3, v * 3, 3, 9);
    const c = 214 * tone * (0.9 + 0.2 * g) * (0.9 + 0.14 * stain) * (0.55 + 0.45 * k);
    return [c, c * 0.985, c * 0.95, k * (0.75 + 0.25 * g), 0.9 - 0.12 * g];
  },
  paving: (u, v) => {
    const n = 5, x = u * n, y = v * n + (Math.floor(u * n) % 2) * 0.5, i = Math.floor(x), j = Math.floor(y), fu = x - i, fv = y - j;
    const k = Math.min(1, Math.min(fu, 1 - fu, fv, 1 - fv) / 0.03), tone = 0.84 + 0.22 * hash(i % n, j % n, 11), g = fbm(u * 28, v * 28, 28, 13);
    const c = 208 * tone * (0.88 + 0.22 * g) * (0.5 + 0.5 * k);
    return [c, c * 0.98, c * 0.93, k * (0.8 + 0.2 * g), 0.86 - 0.14 * g];
  },
  tiles: (u, v) => {
    const cols = 10, rows = 8, x = u * cols, y = v * rows, i = Math.floor(x), j = Math.floor(y), fu = x - i, fv = y - j;
    const pan = Math.abs(Math.sin(fu * Math.PI)), lap = fv, tone = 0.8 + 0.3 * hash(i, j, 17), g = fbm(u * 30, v * 30, 30, 19);
    const h = 0.25 + 0.55 * pan + 0.2 * (1 - lap), c = tone * (0.86 + 0.25 * g) * (0.62 + 0.38 * pan) * (lap < 0.08 ? 0.7 : 1);
    return [196 * c, 112 * c, 76 * c, h, 0.82];
  },
  plaster: (u, v) => { const g = fbm(u * 6, v * 6, 6, 23, 5), f = fbm(u * 40, v * 40, 40, 29, 2), c = 212 * (0.9 + 0.14 * g) * (0.95 + 0.08 * f); return [c, c * 0.99, c * 0.96, 0.5 + 0.3 * g + 0.2 * f, 0.9]; },
  metal: (u, v) => {
    const n = 2, x = u * n, y = v * n * 2, fu = x - Math.floor(x), fv = y - Math.floor(y);
    const seam = Math.min(1, Math.min(fu, 1 - fu, (fv * 0.5), (1 - fv) * 0.5) / 0.012), brushed = fbm(u * 3, v * 90, 3, 31, 3), spot = fbm(u * 9, v * 9, 9, 37);
    const rivet = Math.hypot(((fu * 8) % 1) - 0.5, (fv - 0.06) * 4) < 0.16 || Math.hypot(((fu * 8) % 1) - 0.5, (fv - 0.94) * 4) < 0.16 ? 1 : 0;
    const c = 222 * (0.9 + 0.1 * brushed) * (0.86 + 0.16 * spot) * (0.72 + 0.28 * seam);
    return [c, c, c, 0.5 * seam + 0.1 * brushed + 0.4 * rivet, 0.34 + 0.32 * spot + 0.1 * brushed + 0.2 * (1 - seam)];
  },
  grass: (u, v) => { const g = fbm(u * 8, v * 8, 8, 41, 5), f = fbm(u * 60, v * 60, 60, 43, 2), dry = fbm(u * 3, v * 3, 3, 47); const k = 0.7 + 0.5 * g * f * 2; return [(86 + 46 * dry) * k, (112 + 16 * dry) * k, 54 * k, f, 0.95]; },
  sand: (u, v) => { const g = fbm(u * 10, v * 10, 10, 53, 4), f = hash(Math.floor(u * 256), Math.floor(v * 256), 59); const c = 0.86 + 0.14 * g + 0.06 * f; return [216 * c, 198 * c, 162 * c, 0.5 * g + 0.5 * f, 0.96]; },
  wood: (u, v) => {
    const n = 6, y = v * n, j = Math.floor(y), fv = y - j, gap = Math.min(1, Math.min(fv, 1 - fv) / 0.04), grain = fbm(u * 4 + hash(j, 0, 61) * 9, v * 70, 4, 67, 3), tone = 0.8 + 0.3 * hash(j, 1, 71);
    const c = tone * (0.75 + 0.4 * grain) * (0.55 + 0.45 * gap);
    return [150 * c, 112 * c, 78 * c, gap * (0.6 + 0.4 * grain), 0.8];
  },
  rock: (u, v) => { const g = fbm(u * 5, v * 5, 5, 73, 6), s = fbm(u * 2, v * 14, 2, 79, 3), c = 150 * (0.6 + 0.5 * g) * (0.85 + 0.25 * s); return [c, c * 0.97, c * 0.92, 0.6 * g + 0.4 * s, 0.94]; },
  leaf: (u, v) => { const g = fbm(u * 12, v * 12, 12, 83, 3), f = fbm(u * 36, v * 36, 36, 89, 2), k = 0.45 + 1.1 * g * (0.6 + 0.8 * f); return [84 * k, 112 * k, 58 * k, g * f * 1.6, 0.86]; },
};

// One layer drawn in code at n × n: { colour, detail } as RGBA bytes.
const drawLayer = (name, n) => {
  const colour = new Uint8Array(n * n * 4), detail = new Uint8Array(n * n * 4), height = new Float32Array(n * n), f = DRAW[name];
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const p = f((x + 0.5) / n, (y + 0.5) / n), o = (y * n + x) * 4;
    colour[o] = Math.min(255, p[0]); colour[o + 1] = Math.min(255, p[1]); colour[o + 2] = Math.min(255, p[2]); colour[o + 3] = 255;
    height[y * n + x] = p[3]; detail[o + 2] = Math.min(255, p[4] * 255); detail[o + 3] = 255;
  }
  const k = n / 64;   // slope strength, so small and large drawings look alike
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const dx = (height[y * n + ((x + 1) % n)] - height[y * n + ((x + n - 1) % n)]) * k, dy = (height[((y + 1) % n) * n + x] - height[((y + n - 1) % n) * n + x]) * k;
    const l = Math.hypot(dx, dy, 1), o = (y * n + x) * 4;
    detail[o] = (-dx / l * 0.5 + 0.5) * 255; detail[o + 1] = (-dy / l * 0.5 + 0.5) * 255;
  }
  return { colour, detail };
};

const makeArray = (n, srgb) => {
  const t = new THREE.DataArrayTexture(new Uint8Array(n * n * 4 * LAYERS.length), n, n, LAYERS.length);
  t.format = THREE.RGBAFormat; t.type = THREE.UnsignedByteType;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = true; t.anisotropy = 8;
  return t;
};

// The arrays drawn in code. Fast enough to make while the visitor's click is still being answered.
export const drawnTextures = (n = 128) => {
  const colour = makeArray(n, true), detail = makeArray(n, false);
  LAYERS.forEach((name, i) => { const d = drawLayer(name, n); colour.image.data.set(d.colour, i * n * n * 4); detail.image.data.set(d.detail, i * n * n * 4); });
  colour.needsUpdate = detail.needsUpdate = true;
  return { colour, detail, size: n };
};

// Small waves for the harbours, as a normal map that tiles.
export const waveTexture = (n = 256) => {
  const data = new Uint8Array(n * n * 4);
  let seed = 5;
  const r = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const waves = Array.from({ length: 18 }, () => { const fx = Math.round((r() - 0.5) * 26) || 1, fy = Math.round((r() - 0.5) * 26); return [fx, fy, r() * TAU, 1 / Math.hypot(fx, fy) ** 1.2]; });
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    let dx = 0, dy = 0;
    for (const [fx, fy, ph, a] of waves) { const k = Math.cos((TAU * (fx * x + fy * y)) / n + ph) * a; dx += k * fx; dy += k * fy; }
    const nx = -dx * 0.16, ny = -dy * 0.16, l = Math.hypot(nx, ny, 1), o = (y * n + x) * 4;
    data[o] = (nx / l * 0.5 + 0.5) * 255; data[o + 1] = (ny / l * 0.5 + 0.5) * 255; data[o + 2] = (1 / l * 0.5 + 0.5) * 255; data[o + 3] = 255;
  }
  const t = new THREE.DataTexture(data, n, n, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.generateMipmaps = true; t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
};

// Fetch the shipped pictures and build the full-size arrays. A layer whose file does not arrive keeps its drawing,
// enlarged. Resolves with { colour, detail, loaded, missing } or null when nothing at all could be loaded.
// The page runs in a sandboxed frame, so: fetch, blob, createImageBitmap. An <img> can be refused there.
export const loadTextures = async (n, manifest) => {
  // The one-file build carries the pictures inside the page (globalThis.__CITYTEX__: file name to data address).
  const base = `${globalThis.__ASSETS__ || './'}city/`, inside = globalThis.__CITYTEX__;
  const bitmap = async (file) => {
    const res = await fetch(inside?.[file] ?? base + file);
    if (!res.ok) throw new Error(`${file}: ${res.status}`);
    return createImageBitmap(await res.blob(), { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
  };
  const got = await Promise.all(LAYERS.map(async (name) => {
    const m = manifest[name];
    if (!m) return null;
    try { return { colour: await bitmap(m[0]), detail: await bitmap(m[1]) }; } catch { return null; }
  }));
  if (!got.some(Boolean)) return null;
  const colour = makeArray(n, true), detail = makeArray(n, false);
  const canvas = typeof OffscreenCanvas === 'function' ? new OffscreenCanvas(n, n) : Object.assign(document.createElement('canvas'), { width: n, height: n });
  const g = canvas.getContext('2d', { willReadFrequently: true });
  // Drawn upside down, so that up in the picture is up on a wall (the first row of a texture is its bottom).
  const pixels = (bmp) => { g.setTransform(1, 0, 0, -1, 0, n); g.clearRect(0, 0, n, n); g.drawImage(bmp, 0, 0, n, n); bmp.close?.(); return g.getImageData(0, 0, n, n).data; };
  const small = 128;
  const enlarge = (bytes) => {   // a drawn layer, enlarged by repeating pixels
    const out = new Uint8Array(n * n * 4), k = n / small;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { const s = (((y / k) | 0) * small + ((x / k) | 0)) * 4, o = (y * n + x) * 4; out[o] = bytes[s]; out[o + 1] = bytes[s + 1]; out[o + 2] = bytes[s + 2]; out[o + 3] = 255; }
    return out;
  };
  const missing = [];
  for (let i = 0; i < LAYERS.length; i++) {
    if (got[i]) { colour.image.data.set(pixels(got[i].colour), i * n * n * 4); detail.image.data.set(pixels(got[i].detail), i * n * n * 4); }
    else { missing.push(LAYERS[i]); const d = drawLayer(LAYERS[i], small); colour.image.data.set(enlarge(d.colour), i * n * n * 4); detail.image.data.set(enlarge(d.detail), i * n * n * 4); }
    await new Promise((next) => setTimeout(next, 0));   // a breath between layers, so the page does not stall
  }
  colour.needsUpdate = detail.needsUpdate = true;
  return { colour, detail, size: n, loaded: LAYERS.length - missing.length, missing };
};
