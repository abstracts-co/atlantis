// Tile sources and the loader: fetches map tiles with a priority queue, decodes elevation, hands back GPU textures.
import * as THREE from 'three';
import { applyPatches, onPatch } from './patches.js';

const HALF_WORLD = 20037508.342789244;
export const NONE = 0, LOADING = 1, READY = 2, FAILED = 3, EMPTY = 4;

// A layer is one tiled source on the Web Mercator grid.
//   url      template with {z} {x} {y}, or {bbox} {size} for services that draw any box
//   kind     'elevation' (Terrarium heights) or 'image'
//   minZoom, maxZoom   native range; beyond maxZoom the nearest parent tile is stretched
//   bbox     [west, south, east, north] in degrees, where the layer has data
export const tileUrl = (layer, z, x, y) => {
  if (layer.url.includes('{bbox}')) {
    const span = (2 * HALF_WORLD) / 2 ** z;
    const minx = -HALF_WORLD + x * span, maxy = HALF_WORLD - y * span;
    return layer.url.replace('{bbox}', `${minx},${maxy - span},${minx + span},${maxy}`).replaceAll('{size}', String(layer.size ?? 256));
  }
  const s = layer.subdomains ? layer.subdomains[(x + y) % layer.subdomains.length] : '';
  return layer.url.replace('{s}', s).replace('{z}', z).replace('{x}', x).replace('{y}', y);
};

export const covers = (layer, tile) => {
  if (tile.z < (layer.minZoom ?? 0)) return false;
  if (layer.every > 1 && (tile.z - (layer.minZoom ?? 0)) % layer.every) return false;   // the tile above carries this one's picture
  const b = layer.bbox;
  if (!b) return true;
  return tile.east > b[0] && tile.west < b[2] && tile.north > b[1] && tile.south < b[3];
};

let canvas, ctx;
const pixels = (bitmap) => {
  if (!canvas) {
    canvas = typeof OffscreenCanvas === 'undefined' ? Object.assign(document.createElement('canvas'), { width: 256, height: 256 }) : new OffscreenCanvas(256, 256);
    ctx = canvas.getContext('2d', { willReadFrequently: true });
  }
  ctx.globalCompositeOperation = 'copy';
  ctx.drawImage(bitmap, 0, 0, 256, 256);
  return ctx.getImageData(0, 0, 256, 256).data;
};

// Terrarium tiles carry sea-floor depth only up to zoom 10. Deeper tiles store the sea as 0 (and a few broken values along
// seams), so the sea in those is filled from the zoom-10 tile above: land keeps its fine detail and the floor keeps its depth.
const SEA_ZOOM = 10;
// Height textures are 258 across: the tile's 256 pixels and a one-pixel rim that carries its slope past the edge. Two tiles
// side by side then agree, near enough, on the height along their shared edge, and no line shows where they meet.
export const GRID = 258;
const seaSource = (tile, id) => {
  let t = tile.parent;
  while (t && t.z > SEA_ZOOM) t = t.parent;
  for (; t; t = t.parent) if (t.slots[id]?.state === READY) return t;
  return null;
};

// The coarse grid draws its coastline in blocks about 150 m across, a little outside the true shore, with land heights
// inside. Read as it is, that leaves a flat ledge around every island once the sea is lowered. So the sea is first spread
// four pixels into the coarse land: each land pixel next to the sea takes the average depth of its sea neighbours. Depth
// within a few hundred metres of a coast is therefore the nearest real sounding, not a measurement of that spot.
const extendSea = (slot) => {
  const from = THREE.DataUtils.fromHalfFloat;
  let e = new Float32Array(65536);
  for (let y = 0, i = 0; y < 256; y++) for (let x = 0; x < 256; x++, i++) e[i] = slot.base + from(slot.heights[(y + 1) * GRID + x + 1]);
  for (let r = 0; r < 4; r++) {
    const next = Float32Array.from(e);
    let changed = 0;
    for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) {
      const i = y * 256 + x;
      if (e[i] < -0.5) continue;
      let sum = 0, n = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const xx = x + dx, yy = y + dy;
        if (xx < 0 || yy < 0 || xx > 255 || yy > 255) continue;
        const v = e[yy * 256 + xx];
        if (v < -0.5) { sum += v; n++; }
      }
      if (n) { next[i] = sum / n; changed++; }
    }
    e = next;
    if (!changed) break;
  }
  // Same one-pixel rim as the height textures, so the fill runs smoothly across the edge into the next coarse tile.
  const out = new Float32Array(GRID * GRID);
  for (let y = -1; y <= 256; y++) {
    const yi = y < 0 ? 0 : y > 255 ? 255 : y, yn = y < 0 ? 1 : y > 255 ? 254 : y;
    for (let x = -1; x <= 256; x++) {
      const xi = x < 0 ? 0 : x > 255 ? 255 : x, xn = x < 0 ? 1 : x > 255 ? 254 : x;
      out[(y + 1) * GRID + x + 1] = xi === xn && yi === yn ? e[y * 256 + x] : 2 * e[yi * 256 + xi] - e[yn * 256 + xn];
    }
  }
  return out;
};

// Terrarium PNG -> half-float texture of (height - base), plus the height range. The same array answers height questions on the CPU.
const decodeElevation = (bitmap, tile, id) => {
  const px = pixels(bitmap);
  const n = 256 * 256;
  const h = new Float32Array(n);
  for (let i = 0, j = 0; i < n; i++, j += 4) h[i] = px[j] * 256 + px[j + 1] + px[j + 2] / 256 - 32768;
  let land = 0;
  if (tile.z > SEA_ZOOM) {
    const src = seaSource(tile, id);
    const s = src?.slots[id];
    const k = src ? 2 ** (tile.z - src.z) : 1;
    const ox = src ? (tile.x - src.x * k) * 256 : 0, oy = src ? (tile.y - src.y * k) * 256 : 0;
    let d = null;
    for (let y = 0, i = 0; y < 256; y++) {
      for (let x = 0; x < 256; x++, i++) {
        const v = h[i];
        if (v > 0.001) { land++; continue; }
        if (!s) { h[i] = v < -11100 ? 0 : v; continue; }
        d ??= s.seaWide ??= extendSea(s);
        // Position in the coarse grid, counted from its rim.
        const ax = (ox + x + 0.5) / k + 0.5, ay = (oy + y + 0.5) / k + 0.5;
        const x0 = ax | 0, y0 = ay | 0, fx = ax - x0, fy = ay - y0, o = y0 * GRID + x0;
        const a = (d[o] * (1 - fx) + d[o + 1] * fx) * (1 - fy) + (d[o + GRID] * (1 - fx) + d[o + GRID + 1] * fx) * fy;
        // Where even the widened sea doesn't reach (a lagoon, a river mouth), it is water of unknown depth.
        h[i] = a < -0.5 ? a : v < -11100 ? -0.5 : Math.min(v, -0.5);
      }
    }
  } else land = 1;
  // Where a place has its own finer depth grid, that replaces the coarse sea floor (patches.js). A tile on such a grid
  // is never written off as open sea, so the tiles below it are still fetched and carry the grid's detail.
  applyPatches(h, tile);
  if (onPatch(tile)) land = Math.max(land, 1);
  let min = Infinity, max = -Infinity, sum = 0;
  for (let i = 0; i < n; i++) { const v = h[i]; if (v < min) min = v; if (v > max) max = v; sum += v; }
  const base = Math.round(sum / n);
  const half = new Uint16Array(GRID * GRID);
  const to = THREE.DataUtils.toHalfFloat;
  const at = (x, y) => h[y * 256 + x];
  for (let y = -1; y <= 256; y++) {
    const yi = y < 0 ? 0 : y > 255 ? 255 : y, yn = y < 0 ? 1 : y > 255 ? 254 : y;
    for (let x = -1; x <= 256; x++) {
      const xi = x < 0 ? 0 : x > 255 ? 255 : x, xn = x < 0 ? 1 : x > 255 ? 254 : x;
      // Inside: the pixel. On the rim: the edge pixel plus the step from its inner neighbour.
      const v = xi === xn && yi === yn ? at(x, y) : 2 * at(xi, yi) - at(xn, yn);
      half[(y + 1) * GRID + x + 1] = to(v - base);
    }
  }
  const tex = new THREE.DataTexture(half, GRID, GRID, THREE.RedFormat, THREE.HalfFloatType);
  tex.internalFormat = 'R16F';
  tex.magFilter = tex.minFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return { tex, heights: half, base, min, max, allSea: land === 0 };
};

const imageTexture = (bitmap, anisotropy) => {
  const tex = new THREE.Texture(bitmap);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.flipY = false;
  tex.premultiplyAlpha = false;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = anisotropy;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
};

export class Loader {
  constructor({ maxActive = 16, anisotropy = 4 } = {}) {
    this.maxActive = maxActive;
    this.anisotropy = anisotropy;
    this.queue = [];
    this.active = new Set();
    this.decodeBudget = 5;
    this.pendingDecodes = [];
    this.loaded = 0;
    this.failed = 0;
    this.onLoad = null;
  }

  // Ask for a tile's slot in a layer. Returns the slot; its state moves NONE -> LOADING -> READY | FAILED.
  want(tile, layer, priority) {
    let slot = tile.slots[layer.id];
    if (!slot) {
      slot = tile.slots[layer.id] = { state: covers(layer, tile) && tile.z <= layer.maxZoom ? NONE : EMPTY, tex: null, layer, tile, priority: 0, queued: false, abort: null };
      // Open sea below a tile that was all sea: nothing finer to fetch.
      if (layer.kind === 'elevation' && tile.parent?.allSea) { slot.state = EMPTY; tile.allSea = true; }
    }
    slot.priority = priority;
    if (slot.state === NONE && !slot.queued) {
      slot.queued = true;
      this.queue.push(slot);
    }
    return slot;
  }

  pump(frame) {
    // Turn what arrived into textures, but only for a few milliseconds a frame, so moving stays smooth while tiles pour in.
    const t0 = performance.now();
    for (let i = 0; i < this.decodeBudget && this.pendingDecodes.length && performance.now() - t0 < 5; i++) this.pendingDecodes.shift()();
    // Drop requests for tiles nobody has looked at lately.
    for (const slot of this.active) if (slot.tile.visit < frame - 30 && slot.abort) slot.abort.abort();
    if (!this.queue.length) return;
    this.queue = this.queue.filter((s) => {
      if (s.tile.visit >= frame - 5 && !s.tile.dead) return true;
      s.queued = false;
      return false;
    });
    if (this.active.size >= this.maxActive) return;
    this.queue.sort((a, b) => a.priority - b.priority);
    const busy = new Map();
    for (const s of this.active) busy.set(s.layer.id, (busy.get(s.layer.id) ?? 0) + 1);
    // Highest priority first, skipping layers that already have as many requests out as their server should get.
    for (let i = this.queue.length - 1; i >= 0 && this.active.size < this.maxActive; i--) {
      const s = this.queue[i], n = busy.get(s.layer.id) ?? 0;
      if (n >= (s.layer.maxActive ?? this.maxActive)) continue;
      busy.set(s.layer.id, n + 1);
      this.queue.splice(i, 1);
      this.start(s);
    }
  }

  start(slot) {
    slot.queued = false;
    slot.state = LOADING;
    slot.abort = new AbortController();
    this.active.add(slot);
    const { tile, layer } = slot;
    const done = (state) => {
      this.active.delete(slot);
      slot.abort = null;
      slot.state = state;
      if (state === READY) this.loaded++;
      if (state === FAILED) this.failed++;
      this.onLoad?.(slot);
    };
    fetch(tileUrl(layer, tile.z, tile.x, tile.y), { signal: slot.abort.signal, mode: 'cors', credentials: 'omit', referrerPolicy: 'no-referrer' })
      .then((r) => {
        if (!r.ok) throw Object.assign(new Error(`HTTP ${r.status}`), { status: r.status });
        return r.blob();
      })
      .then((blob) => createImageBitmap(blob, { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }))
      .then((bitmap) => {
        this.pendingDecodes.push(() => {
          if (tile.dead) return bitmap.close?.();
          if (layer.kind === 'elevation') {
            const e = decodeElevation(bitmap, tile, layer.id);
            bitmap.close?.();
            Object.assign(slot, e);
            tile.minH = e.min;
            tile.maxH = e.max;
            tile.allSea = e.allSea;
          } else {
            slot.tex = imageTexture(bitmap, this.anisotropy);
            slot.tex.onUpdate = () => { bitmap.close?.(); slot.tex.onUpdate = null; };
          }
          done(READY);
        });
      })
      .catch((err) => {
        // An aborted request goes back to NONE so it can be asked for again; a missing tile stays FAILED.
        if (err.name === 'AbortError') {
          this.active.delete(slot);
          slot.abort = null;
          slot.state = NONE;
        } else done(FAILED);
      });
  }

  get busy() {
    return this.active.size + this.queue.length + this.pendingDecodes.length;
  }
}

export const disposeSlots = (tile) => {
  for (const id in tile.slots) {
    const s = tile.slots[id];
    s.abort?.abort();
    s.tex?.dispose();
    s.tex = null;
    s.heights = null;
    s.seaWide = null;
  }
  tile.slots = {};
};
