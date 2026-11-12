// The research at one place, drawn where it happened. Flat things (survey boxes, ship tracks, outlines, the shapes
// somebody says are walls) are painted into two pictures that the ground shader lays over the terrain: a sharp one
// round the point being looked at and a coarse one eight times wider for the distance. Things that stand up (cores,
// dives, digs, samples) are small models in a scene of their own, drawn into the same picture and depth as the planet.
// The data is data/evidence.json; every feature there carries its source and how its position is known.
import * as THREE from 'three';
import { R, DEG, frame, toDir, dot, clamp } from './geo.js';

export const TONES = {
  claimed: { ink: '#ffab5c', name: 'Claimed' },
  checked: { ink: '#7fc0ff', name: 'Checked' },
  found: { ink: '#7fe3a0', name: 'Found' },
  context: { ink: '#e9edf5', name: 'Place' },
  plato: { ink: '#f2cc6b', name: "Plato's measure" },
};
export const MODES = { claimed: ['claimed', 'context', 'plato'], found: ['checked', 'found', 'context', 'plato'], all: ['claimed', 'checked', 'found', 'context', 'plato'] };
const FAR = 8;            // the coarse picture is this many times wider than the sharp one
const STANDING = new Set(['core', 'sample', 'dive', 'dig', 'place']);   // kinds drawn as a model standing on the ground
const ORDER = { context: 0, plato: 1, checked: 2, found: 3, claimed: 4 };

// Layers of a core, coloured by what they are made of. This is a drawing convention of ours, not data.
const STRATA = [
  [/basalt|lava|gabbro|dolerite|volcanic rock|bedrock|basement/i, '#4a4d55'], [/ash|tephra|pumice|ignimbrite/i, '#b9b4ad'],
  [/salt|evaporite|gypsum|halite/i, '#eef0f2'], [/limestone|carbonate|beachrock|chalk|coral|reef|ooze|marl/i, '#d9cfb4'],
  [/peat|organic|lignite|soil/i, '#4b3a2a'], [/shell|coquina/i, '#e6dcc8'], [/gravel|pebble|cobble|conglomerate|breccia/i, '#8d8478'],
  [/sand/i, '#d7bf86'], [/silt/i, '#a89a80'], [/clay|mud|turbidite/i, '#7d7468'],
];
export const strataColour = (what) => (STRATA.find(([re]) => re.test(what ?? '')) ?? [0, '#9a9488'])[1];

const rings = (g) => (g.type === 'Polygon' ? g.coordinates : g.type === 'MultiPolygon' ? g.coordinates.flat() : []);
const lines = (g) => (g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : []);
const points = (g) => (g.type === 'Point' ? [g.coordinates] : g.type === 'MultiPoint' ? g.coordinates : []);
const everyPoint = (g) => [...points(g), ...lines(g).flat(), ...rings(g).flat()];
// Where a feature's label and marker go: the point itself, the middle of a line, the centre of an outline.
export const anchorOf = (f) => {
  const g = f.geometry;
  if (g.type === 'Point') return g.coordinates;
  if (g.type === 'LineString') return g.coordinates[Math.floor(g.coordinates.length / 2)];
  const all = everyPoint(g);
  return [all.reduce((s, p) => s + p[0], 0) / all.length, all.reduce((s, p) => s + p[1], 0) / all.length];
};
// How far across a feature is, in metres.
export const spanOf = (f) => {
  const all = everyPoint(f.geometry), a = anchorOf(f);
  let far = 0;
  for (const p of all) far = Math.max(far, Math.hypot((p[0] - a[0]) * Math.cos(a[1] * DEG), p[1] - a[1]) * DEG * R);
  return far * 2;
};
const vague = (f) => f.position?.how === 'from-description' || (f.position?.error_m ?? 0) >= 500;

export class Evidence {
  constructor(world) {
    this.world = world;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.camera.matrixAutoUpdate = false;
    this.entry = null;          // the place being shown: one of the sites in data/evidence.json
    this.extras = [];           // other shapes on the ground: Plato's plain and rings at true size
    this.mode = 'all';
    this.focus = null;          // ids lit up while the rest dims, or null
    this.selected = null;
    this.labels = [];           // what the page writes next to each feature
    this.markers = new Map();
    this.on = 0;
    this.origin = null;
    const S = world.globe.shared;
    this.size = world.phone ? 1024 : 2048;
    this.near = this.sheet(); this.far = this.sheet();
    S.tDecal.value = this.near.tex; S.tDecalFar.value = this.far.tex;
    this.painted = null;
    this.dirty = true;
    this.tick = 0;
    this.geo = this.shapes();
    this.mats = new Map();
  }

  sheet() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = this.size;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.NoColorSpace;      // the shader reads screen values and converts them itself
    tex.premultiplyAlpha = true;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.anisotropy = 8;
    return { canvas, g: canvas.getContext('2d'), tex };
  }

  shapes() {
    const up = (g, z = 0) => { g.rotateX(Math.PI / 2); g.translate(0, 0, z); return g; };
    return {
      stem: up(new THREE.CylinderGeometry(0.007, 0.007, 1, 6), 0.5),
      core: up(new THREE.CylinderGeometry(0.05, 0.05, 1, 20, 1, false), 0.5),
      cap: up(new THREE.CylinderGeometry(0.066, 0.066, 0.03, 20), 1.0),
      sample: new THREE.OctahedronGeometry(0.085).translate(0, 0, 1.06),
      dive: new THREE.SphereGeometry(0.075, 18, 12).translate(0, 0, 1.06),
      dig: new THREE.BoxGeometry(0.13, 0.13, 0.13).rotateZ(Math.PI / 4).translate(0, 0, 1.06),
      place: new THREE.SphereGeometry(0.045, 14, 10).translate(0, 0, 0.62),
    };
  }

  ink(side, gain = 1.7) {
    const key = `${side}:${gain}`;
    if (!this.mats.has(key)) this.mats.set(key, new THREE.MeshBasicMaterial({ color: new THREE.Color(TONES[side].ink).multiplyScalar(gain) }));
    return this.mats.get(key);
  }

  // A core's layers as a picture wrapped round its column: the top of the picture is the surface.
  column(f) {
    const c = document.createElement('canvas');
    c.width = 8; c.height = 256;
    const g = c.getContext('2d'), col = (f.column ?? []).filter((l) => Number.isFinite(l.from_m) && Number.isFinite(l.to_m) && l.to_m > l.from_m);
    if (col.length) {
      const top = Math.min(...col.map((l) => l.from_m)), bottom = Math.max(...col.map((l) => l.to_m));
      g.fillStyle = '#9a9488'; g.fillRect(0, 0, 8, 256);
      for (const l of col) { g.fillStyle = strataColour(l.what); g.fillRect(0, ((l.from_m - top) / (bottom - top)) * 256, 8, Math.max(2, ((l.to_m - l.from_m) / (bottom - top)) * 256)); }
      g.fillStyle = 'rgba(0,0,0,0.35)';
      for (const l of col) g.fillRect(0, ((l.to_m - top) / (bottom - top)) * 256 - 1, 8, 1.5);
    } else {
      g.fillStyle = TONES[f.side].ink; g.fillRect(0, 0, 8, 256);
      g.fillStyle = 'rgba(0,0,0,0.28)';
      for (let y = 32; y < 256; y += 32) g.fillRect(0, y, 8, 2);
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshBasicMaterial({ map: t, color: new THREE.Color(1.25, 1.25, 1.25) });
  }

  marker(f) {
    const group = new THREE.Group();
    if (f.kind === 'core') group.add(new THREE.Mesh(this.geo.core, this.column(f)), new THREE.Mesh(this.geo.cap, this.ink(f.side)));
    else {
      const stem = new THREE.Mesh(this.geo.stem, this.ink('context', 1.1));
      if (f.kind === 'place') stem.scale.z = 0.6;
      group.add(stem, new THREE.Mesh(this.geo[f.kind] ?? this.geo.dive, this.ink(f.side)));
    }
    group.userData.feature = f;
    return group;
  }

  // Show one place's research, or null for none.
  show(entry) {
    this.entry = entry ?? null;
    this.focus = null; this.selected = null;
    this.rebuild();
  }

  setExtras(list) { this.extras = list ?? []; this.rebuild(); }
  setMode(mode) { if (MODES[mode] && mode !== this.mode) { this.mode = mode; this.rebuild(); } }
  setFocus(ids) { this.focus = ids?.length ? new Set(ids) : null; this.restyle(); }
  select(id) { this.selected = id ?? null; this.restyle(); }
  get active() { return !!(this.entry || this.extras.length); }

  // Everything drawn in the present mode, flat things first.
  visible() {
    const sides = new Set(MODES[this.mode]);
    return [...(this.entry?.features ?? []), ...this.extras].filter((f) => sides.has(f.side) && f.geometry).sort((a, b) => ORDER[a.side] - ORDER[b.side]);
  }

  lit(f) { return !this.focus || this.focus.has(f.id) || f.id === this.selected; }

  rebuild() {
    for (const m of this.markers.values()) { this.scene.remove(m); for (const c of m.children) if (c.material.map) { c.material.map.dispose(); c.material.dispose(); } }
    this.markers.clear();
    const first = this.entry?.centre ?? (this.extras[0] && { lon: anchorOf(this.extras[0])[0], lat: anchorOf(this.extras[0])[1] });
    this.origin = first ? { lon: first.lon * DEG, lat: first.lat * DEG, frame: frame(first.lon * DEG, first.lat * DEG) } : null;
    this.labels = [];
    for (const f of this.visible()) {
      const [lon, lat] = anchorOf(f);
      const label = { id: f.id, text: f.label, year: f.year ?? null, side: f.side, kind: f.kind, lon, lat, lift: 0, lit: true, feature: f };
      if (STANDING.has(f.kind) && f.geometry.type === 'Point') {
        const m = this.marker(f);
        m.userData.label = label;
        this.markers.set(f.id, m);
        this.scene.add(m);
      }
      if (f.label) this.labels.push(label);
    }
    this.restyle();
  }

  restyle() {
    for (const l of this.labels) l.lit = this.lit(l.feature);
    for (const m of this.markers.values()) m.userData.dim = !this.lit(m.userData.feature);
    this.dirty = true;
    this.heights = 0;
    this.world.stamp++;
  }

  // Paint the flat features into one sheet. centre: { lon, lat } in radians; half: half its width in metres;
  // px: sheet pixels to one screen pixel at the point being looked at, so lines keep their width on screen.
  paint(sheet, centre, half, px) {
    const g = sheet.g, N = this.size, k = N / (2 * half), f0 = frame(centre.lon, centre.lat), d = [0, 0, 0];
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, N, N);
    g.lineJoin = g.lineCap = 'round';
    const at = ([lon, lat]) => { toDir(lon * DEG, lat * DEG, d); return dot(d, f0.up) < 0.05 ? null : [N / 2 + dot(d, f0.east) * R * k, N / 2 - dot(d, f0.north) * R * k]; };
    const path = (coords, close) => {
      let n = 0, inside = false;
      g.beginPath();
      for (const c of coords) { const p = at(c); if (!p) continue; if (n++) g.lineTo(p[0], p[1]); else g.moveTo(p[0], p[1]); if (p[0] > -200 && p[1] > -200 && p[0] < N + 200 && p[1] < N + 200) inside = true; }
      if (close) g.closePath();
      return inside && n > 1;
    };
    const stroke = (ink, w, alpha, dash) => {
      const width = Math.max(1.5, w * px);
      g.setLineDash([]); g.globalAlpha = 0.55 * alpha; g.strokeStyle = '#04070c'; g.lineWidth = width + Math.max(2, 2.4 * px); g.stroke();
      g.setLineDash(dash ? dash.map((v) => Math.max(2, v * px)) : []); g.globalAlpha = alpha; g.strokeStyle = ink; g.lineWidth = width; g.stroke();
      g.setLineDash([]);
    };
    for (const f of this.visible()) {
      // Places and other background things are drawn quietly, so what was claimed and what was found stand out.
      const quiet = f.side === 'context' && f.id !== this.selected ? 0.55 : 1;
      const ink = TONES[f.side].ink, lit = this.lit(f), a = (lit ? 1 : 0.28) * quiet, sel = f.id === this.selected, geo = f.geometry;
      const dash = f.dash ?? (vague(f) ? [7, 6] : f.kind === 'track' ? [12, 5] : null);
      const w = (f.width ?? (f.kind === 'structure' ? 3.2 : f.kind === 'survey-area' ? 1.8 : f.kind === 'outline' ? 1.9 : 2.2)) * (sel ? 1.5 : 1);
      for (const ring of rings(geo)) {
        if (!path(ring, true)) continue;
        if (f.fill !== false) { g.globalAlpha = (f.kind === 'survey-area' ? 0.13 : f.kind === 'dig' ? 0.34 : 0.1) * a * quiet * (sel ? 1.6 : 1); g.fillStyle = ink; g.fill(); }
        stroke(ink, w, a, dash);
      }
      for (const line of lines(geo)) if (path(line, false)) stroke(ink, w, a, dash);
      for (const c of points(geo)) {
        const p = at(c);
        if (!p || p[0] < -50 || p[1] < -50 || p[0] > N + 50 || p[1] > N + 50) continue;
        // A position known only roughly is drawn with the circle it could lie in.
        const err = (f.position?.error_m ?? 0) * k;
        if (err > 6 * px) { g.beginPath(); g.arc(p[0], p[1], err, 0, Math.PI * 2); g.globalAlpha = 0.07 * a * quiet; g.fillStyle = ink; g.fill(); stroke(ink, 1.1, 0.6 * a, [5, 5]); }
        g.beginPath(); g.arc(p[0], p[1], Math.max(2.5, (sel ? 5.5 : 3.6) * px), 0, Math.PI * 2);
        g.globalAlpha = a; g.fillStyle = ink; g.fill();
        g.globalAlpha = 0.7 * a; g.strokeStyle = '#04070c'; g.lineWidth = Math.max(1, 1.4 * px); g.stroke();
        if (sel) { g.beginPath(); g.arc(p[0], p[1], 13 * px, 0, Math.PI * 2); stroke('#ffffff', 1.6, 0.9, null); }
      }
    }
    g.globalAlpha = 1;
    sheet.tex.needsUpdate = true;
  }

  // Called once a frame. Returns what the pipeline should draw after the planet, or null.
  update() {
    const { world } = this, S = world.globe.shared, control = world.control;
    const want = this.active ? 1 : 0;
    if (this.on !== want) { this.on = clamp(this.on + (want ? 0.08 : -0.12), 0, 1); world.stamp++; }
    S.uDecalOn.value = this.on;
    if (!this.active || !this.origin) return null;

    // Repaint when the view has moved far enough that the pictures no longer fit it. Not more than six times a second.
    const now = performance.now(), half = Math.max(control.range * 0.7, 30);
    const p = this.painted;
    const moved = p ? Math.hypot((control.lon - p.lon) * Math.cos(p.lat), control.lat - p.lat) * R : Infinity;
    if ((this.dirty || !p || moved > p.half * 0.3 || half > p.half * 1.5 || half < p.half * 0.62) && (this.dirty || now - (p?.at ?? 0) > 160)) {
      const centre = { lon: control.lon, lat: control.lat };
      const screen = (2 * Math.tan(control.fovY / 2) * control.range) / Math.max(world.renderer.domElement.clientHeight, 1);   // metres to a screen pixel
      this.paint(this.near, centre, half, screen / ((2 * half) / this.size));
      this.paint(this.far, centre, half * FAR, screen / ((2 * half * FAR) / this.size));
      this.painted = { ...centre, half, at: now, frame: frame(centre.lon, centre.lat) };
      this.dirty = false;
      world.stamp++;
    }
    const q = this.painted, c = q.frame.up, pos = control.pos;
    S.uDecalO.value.set(c[0] * R - pos[0], c[1] * R - pos[1], c[2] * R - pos[2]);
    S.uDecalU.value.set(...q.frame.east).multiplyScalar(1 / (2 * q.half));
    S.uDecalV.value.set(...q.frame.north).multiplyScalar(1 / (2 * q.half));
    if (!this.markers.size) return null;

    // The globe's camera seen from this place's own frame (east, north, up from its centre). Done in doubles.
    const f = this.origin.frame, o = [f.up[0] * R, f.up[1] * R, f.up[2] * R];
    const L = (v) => [dot(v, f.east), dot(v, f.north), dot(v, f.up)];
    const b = control.basis, x = L(b.right), y = L(b.up), z = L([-b.fwd[0], -b.fwd[1], -b.fwd[2]]), e = L([pos[0] - o[0], pos[1] - o[1], pos[2] - o[2]]);
    const cam = this.camera;
    cam.matrix.set(x[0], y[0], z[0], e[0], x[1], y[1], z[1], e[1], x[2], y[2], z[2], e[2], 0, 0, 0, 1);
    cam.matrixWorld.copy(cam.matrix);
    cam.matrixWorldInverse.copy(cam.matrix).invert();
    cam.projectionMatrix.copy(world.camera.projectionMatrix);
    cam.projectionMatrixInverse.copy(world.camera.projectionMatrixInverse);

    // Stand each marker on the ground (or on the sea, where there is sea), and keep it the same size on screen.
    const fresh = this.tick++ % 20 === 0 || this.heights < 3;
    if (fresh) this.heights++;
    const exag = S.uExag.value, sea = S.uWater.value > 0.5 ? S.uSea.value : -1e5, dir = [0, 0, 0];
    for (const m of this.markers.values()) {
      const l = m.userData.label;
      if (fresh || m.userData.h == null) {
        const h = Math.max(world.globe.heightAt(l.lon * DEG, l.lat * DEG) ?? 0, sea) * exag;
        toDir(l.lon * DEG, l.lat * DEG, dir);
        const w = [dir[0] * (R + h) - o[0], dir[1] * (R + h) - o[1], dir[2] * (R + h) - o[2]];
        m.position.set(...L(w));
        // Its own up, so it stands straight however far it is from the centre of the scene.
        m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...L(dir)));
        m.userData.h = h;
      }
      const dist = Math.hypot(m.position.x - e[0], m.position.y - e[1], m.position.z - e[2]);
      // The same size on screen near the point being looked at, and smaller beyond it: a core on the horizon should not
      // stand as tall as the island in front of it.
      const s = dist * 0.05 * Math.min(1, (control.range * 1.25) / dist) ** 0.6 * (m.userData.feature.id === this.selected ? 1.3 : 1) * (m.userData.dim ? 0.62 : 1);
      m.scale.setScalar(s);
      l.lift = s * (m.userData.feature.kind === 'place' ? 0.72 : 1.16);
      m.updateMatrixWorld(true);
    }
    return { scene: this.scene, camera: cam };
  }

  // A view that takes in one feature, or the whole place.
  viewOf(f) {
    if (!f) {
      const s = this.entry;
      if (!s) return null;
      // Open on where most of the work was done: a far-off outlier (a tsunami site on another island) should not
      // shrink the rest to a dot. The view takes in four fifths of the features, measured from the centre.
      const far = s.features.map((x) => { const p = anchorOf(x); return Math.hypot((p[0] - s.centre.lon) * Math.cos(s.centre.lat * DEG), p[1] - s.centre.lat) * DEG * R + spanOf(x) / 2; }).sort((a, b) => a - b);
      const reach = far.length ? far[Math.min(far.length - 1, Math.floor(far.length * 0.8))] : (s.radius_km ?? 20) * 1000;
      return { lon: s.centre.lon * DEG, lat: s.centre.lat * DEG, range: clamp(Math.max(reach, 2500) * 2.9, 6000, 6e6), tilt: 46 * DEG, heading: 0 };
    }
    const [lon, lat] = anchorOf(f);
    return { lon: lon * DEG, lat: lat * DEG, range: clamp(Math.max(spanOf(f) * 2.2, (f.position?.error_m ?? 0) * 6, 900), 400, 6e6), tilt: 50 * DEG, heading: this.world.control.heading };
  }
}
