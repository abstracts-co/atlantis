// The planet: a quadtree of Web Mercator tiles wrapped on a sphere. Each frame it picks the tiles the camera needs,
// asks the loader for their pictures and heights, and hands three.js one mesh per tile.
import * as THREE from 'three';
import { R, CIRC, DEG, MAX_LAT, xToLon, yToLat, lonToX, latToY, toDir, clamp, arc, wrapLon } from './geo.js';
import { Loader, READY, GRID, disposeSlots } from './tiles.js';
import { terrainVertex, terrainFragment, capVertex, capFragment } from './shaders.js';

const ROOT_Z = 2;
const LATTICE = [12, 17, 22];

// Land below sea level that the sea doesn't reach. Without these the water shader would flood it. [west, south, east, north]
const DRY = [
  [44.0, 35.5, 56.5, 48.5], // Caspian Sea and its depression (the lake keeps its photo)
  [34.9, 30.0, 36.2, 33.4], // Dead Sea and the Jordan valley
  [-117.6, 35.6, -116.2, 37.0], // Death Valley
  [-116.4, 32.4, -115.0, 33.8], // Salton Trough
  [25.5, 28.3, 30.3, 30.6], // Qattara Depression
  [39.5, 11.0, 42.8, 15.0], // Danakil and Lake Assal
  [88.5, 42.3, 90.5, 43.3], // Turpan Depression
  [3.3, 51.2, 7.3, 53.6], // Dutch polders
  [5.5, 33.5, 9.0, 34.8], // Chott Melrhir and Chott el Gharsa
  [136.5, -29.6, 138.3, -27.6], // Lake Eyre
  [-68.6, -49.8, -67.9, -49.3], // Laguna del Carbón
  [50.9, 43.2, 52.3, 44.0], // Karagiye
  [-0.6, 52.2, 0.5, 52.9], // The Fens
];

class Tile {
  constructor(z, x, y, parent) {
    this.z = z; this.x = x; this.y = y; this.parent = parent; this.children = null;
    this.lon0 = xToLon(x, z); this.lon1 = xToLon(x + 1, z);
    this.latN = yToLat(y, z); this.latS = yToLat(y + 1, z);
    this.west = this.lon0 / DEG; this.east = this.lon1 / DEG; this.north = this.latN / DEG; this.south = this.latS / DEG;
    const lonC = (this.lon0 + this.lon1) / 2, latC = yToLat(y + 0.5, z);
    this.center = toDir(lonC, latC).map((v) => v * R);
    let r = 0;
    for (const [lo, la] of [[this.lon0, this.latN], [this.lon1, this.latN], [this.lon0, this.latS], [this.lon1, this.latS]]) {
      const c = toDir(lo, la);
      r = Math.max(r, Math.hypot(c[0] * R - this.center[0], c[1] * R - this.center[1], c[2] * R - this.center[2]));
    }
    this.radius = r;
    this.minH = parent ? parent.minH : -8000;
    this.maxH = parent ? parent.maxH : 6000;
    this.slots = {};
    this.visit = 0;
    this.geom = null;
    this.dead = false;
    this.dry = null;
    for (const b of DRY) {
      if (this.east > b[0] && this.west < b[2] && this.north > b[1] && this.south < b[3]) {
        this.dry = [lonToX(b[0] * DEG, z) - x, latToY(b[3] * DEG, z) - y, lonToX(b[2] * DEG, z) - x, latToY(b[1] * DEG, z) - y];
        break;
      }
    }
    const lat = [];
    for (const k of LATTICE) {
      const s = 2 ** (k - z);
      lat.push([(x * s) % 64, (y * s) % 64, s]);
    }
    this.lattice = lat;
  }

  split() {
    const { z, x, y } = this;
    this.children = [new Tile(z + 1, 2 * x, 2 * y, this), new Tile(z + 1, 2 * x + 1, 2 * y, this), new Tile(z + 1, 2 * x, 2 * y + 1, this), new Tile(z + 1, 2 * x + 1, 2 * y + 1, this)];
  }
}

// One grid layout shared by every tile: the main surface plus a skirt hanging from its edge to hide gaps between detail levels.
const gridTemplate = (n) => {
  const side = n + 1;
  const main = side * side;
  const count = main + 4 * side;
  const uv = new Float32Array(count * 2);
  const skirt = new Float32Array(count);
  const edge = new Uint32Array(4 * side);
  for (let j = 0; j < side; j++) for (let i = 0; i < side; i++) { uv[(j * side + i) * 2] = i / n; uv[(j * side + i) * 2 + 1] = j / n; }
  for (let i = 0; i < side; i++) {
    edge[i] = i; // north edge
    edge[side + i] = n * side + i; // south edge
    edge[2 * side + i] = i * side; // west edge
    edge[3 * side + i] = i * side + n; // east edge
  }
  for (let k = 0; k < 4 * side; k++) { uv[(main + k) * 2] = uv[edge[k] * 2]; uv[(main + k) * 2 + 1] = uv[edge[k] * 2 + 1]; skirt[main + k] = 1; }
  const index = [];
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const a = j * side + i, b = a + 1, c = a + side, d = c + 1;
    index.push(a, c, b, b, c, d);
  }
  for (let e = 0; e < 4; e++) for (let i = 0; i < n; i++) {
    const a = edge[e * side + i], b = edge[e * side + i + 1], c = main + e * side + i, d = c + 1;
    index.push(a, c, b, b, c, d);
  }
  return { n, side, main, count, edge, uv: new THREE.BufferAttribute(uv, 2), skirt: new THREE.BufferAttribute(skirt, 1), index: new THREE.BufferAttribute(count > 65535 ? new Uint32Array(index) : new Uint16Array(index), 1) };
};

const tileGeometry = (tile, g) => {
  const pos = new Float32Array(g.count * 3);
  const { n, side } = g;
  const [cx, cy, cz] = tile.center;
  const cosLon = new Float64Array(side), sinLon = new Float64Array(side);
  for (let i = 0; i < side; i++) {
    const lon = tile.lon0 + ((tile.lon1 - tile.lon0) * i) / n;
    cosLon[i] = Math.cos(lon); sinLon[i] = Math.sin(lon);
  }
  for (let j = 0; j < side; j++) {
    const lat = yToLat(tile.y + j / n, tile.z);
    const c = Math.cos(lat) * R, s = Math.sin(lat) * R;
    for (let i = 0; i < side; i++) {
      const o = (j * side + i) * 3;
      pos[o] = c * cosLon[i] - cx; pos[o + 1] = c * sinLon[i] - cy; pos[o + 2] = s - cz;
    }
  }
  for (let k = 0; k < 4 * side; k++) {
    const from = g.edge[k] * 3, to = (g.main + k) * 3;
    pos[to] = pos[from]; pos[to + 1] = pos[from + 1]; pos[to + 2] = pos[from + 2];
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geom.setAttribute('uv', g.uv);
  geom.setAttribute('skirt', g.skirt);
  geom.setIndex(g.index);
  return geom;
};

const blankTexture = (r, g, b, a = 255) => {
  const t = new THREE.DataTexture(new Uint8Array([r, g, b, a]), 1, 1, THREE.RGBAFormat);
  t.needsUpdate = true;
  return t;
};

export class Globe {
  constructor({ renderer, scene, segments = 64, threshold = 340, budget = 380, layers }) {
    this.scene = scene;
    this.grid = gridTemplate(segments);
    this.threshold = threshold;
    this.budget = budget;
    this.loader = new Loader({ anisotropy: Math.min(8, renderer.capabilities.getMaxAnisotropy()) });
    this.layers = layers; // { elevation, base, overlay, night }
    this.maxZ = 17;
    this.frame = 0;
    this.count = 0;
    this.roots = [];
    for (let y = 0; y < 2 ** ROOT_Z; y++) for (let x = 0; x < 2 ** ROOT_Z; x++) this.roots.push(new Tile(ROOT_Z, x, y, null));
    this.count = this.roots.length;
    this.drawn = [];
    this.pool = [];
    this.group = new THREE.Group();
    scene.add(this.group);
    this.blank = blankTexture(20, 30, 45);
    this.blankElev = (() => {
      const t = new THREE.DataTexture(new Uint16Array([0]), 1, 1, THREE.RedFormat, THREE.HalfFloatType);
      t.internalFormat = 'R16F';
      t.needsUpdate = true;
      return t;
    })();
    this.black = blankTexture(0, 0, 0, 0);

    // Values every tile shares. The objects are shared too, so one write reaches all materials.
    this.shared = {
      uCamPos: { value: new THREE.Vector3() },
      uSun: { value: new THREE.Vector3(1, 0, 0) },
      uSea: { value: 0 },
      uWater: { value: 1 },
      uSeaClamp: { value: 0 },
      uExag: { value: 1 },
      uTime: { value: 0 },
      uPixAngle: { value: 0.001 },
      uLens: { value: 0 },
      uOverMix: { value: 1 },
      uOverMode: { value: 0 },
      uBathy: { value: 0.45 },
      uShadows: { value: 1 },
      uContours: { value: 0 },
      uNightOn: { value: 1 },
      uPad: { value: new THREE.Vector4(0, 0, 0, 0) },
      uPadH: { value: 0 },
      tDecal: { value: this.black }, tDecalFar: { value: this.black }, uDecalOn: { value: 0 },
      tHeat: { value: this.black }, uHeat: { value: 0 }, uHeatLod: { value: 0 }, uScan: { value: new THREE.Vector4(0, 0, 1, 0) }, uScanA: { value: 0 },
      uDecalO: { value: new THREE.Vector3() }, uDecalU: { value: new THREE.Vector3() }, uDecalV: { value: new THREE.Vector3() },
    };
    this.frustum = new THREE.Frustum();
    this.caps = this.makeCaps();
    this.stats = { tiles: 0, depth: 0 };
  }

  makeMaterial() {
    const u = {
      ...this.shared,
      uCenter: { value: new THREE.Vector3() },
      uCenterRel: { value: new THREE.Vector3() },
      uSkirt: { value: 0 },
      tElev: { value: this.blankElev }, uElevUV: { value: new THREE.Vector4(1, 1, 0, 0) }, uElevBase: { value: 0 }, uElevMpp: { value: 1 },
      tFar: { value: this.blankElev }, uFarUV: { value: new THREE.Vector4(1, 1, 0, 0) }, uFarBase: { value: 0 }, uFarMpp: { value: 1 }, uFarTop: { value: 9000 },
      tBase: { value: this.blank }, uBaseUV: { value: new THREE.Vector4(1, 1, 0, 0) }, uBaseTexels: { value: 256 },
      tGlobe: { value: this.blank }, uGlobeUV: { value: new THREE.Vector4(1, 1, 0, 0) }, uGlobeOn: { value: 0 },
      tOver: { value: this.black }, uOverUV: { value: new THREE.Vector4(1, 1, 0, 0) }, uOverOn: { value: 0 },
      tNight: { value: this.black }, uNightUV: { value: new THREE.Vector4(1, 1, 0, 0) },
      uDry: { value: new THREE.Vector4(2, 2, -1, -1) },
      uLat: { value: [new THREE.Vector2(), new THREE.Vector2(), new THREE.Vector2()] },
      uLatS: { value: [1, 1, 1] },
    };
    return new THREE.ShaderMaterial({ uniforms: u, vertexShader: terrainVertex, fragmentShader: terrainFragment, glslVersion: THREE.GLSL3, side: THREE.DoubleSide });
  }

  makeCaps() {
    const rings = 8, around = 96;
    const caps = [];
    for (const sign of [1, -1]) {
      const pos = new Float32Array((rings * around + 1) * 3);
      const height = new Float32Array(rings * around + 1);
      const centre = [0, 0, sign * R];
      for (let r = 0; r < rings; r++) {
        const lat = sign * (MAX_LAT + ((Math.PI / 2 - MAX_LAT) * r) / rings);
        for (let a = 0; a < around; a++) {
          const d = toDir((a / around) * 2 * Math.PI - Math.PI, lat);
          const o = (r * around + a) * 3;
          pos[o] = d[0] * R; pos[o + 1] = d[1] * R; pos[o + 2] = d[2] * R - centre[2];
        }
      }
      const index = [];
      for (let r = 0; r < rings - 1; r++) for (let a = 0; a < around; a++) {
        const i0 = r * around + a, i1 = r * around + ((a + 1) % around), j0 = i0 + around, j1 = i1 + around;
        index.push(i0, i1, j0, i1, j1, j0);
      }
      const pole = rings * around;
      for (let a = 0; a < around; a++) index.push((rings - 1) * around + a, (rings - 1) * around + ((a + 1) % around), pole);
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geom.setAttribute('height', new THREE.BufferAttribute(height, 1));
      geom.setIndex(index);
      const mat = new THREE.ShaderMaterial({
        uniforms: { uCamPos: this.shared.uCamPos, uSun: this.shared.uSun, uExag: this.shared.uExag, uCenter: { value: new THREE.Vector3(...centre) }, uCenterRel: { value: new THREE.Vector3() } },
        vertexShader: capVertex, fragmentShader: capFragment, glslVersion: THREE.GLSL3, side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.frustumCulled = false;
      mesh.position.set(...centre);
      mesh.updateMatrixWorld();
      this.scene.add(mesh);
      caps.push({ mesh, sign, rings, around, centre, set: false });
    }
    return caps;
  }

  // Match the caps to the land or ice at the last row of tiles, so no step shows at 85°.
  fitCaps() {
    const sea = this.shared.uWater.value > 0.5 ? this.shared.uSea.value : -1e5;
    for (const cap of this.caps) {
      const h = cap.mesh.geometry.attributes.height;
      let mean = 0;
      const edge = [];
      for (let a = 0; a < cap.around; a++) {
        const v = Math.max(this.heightAt((a / cap.around) * 2 * Math.PI - Math.PI, cap.sign * (MAX_LAT - 0.002)) ?? 0, sea);
        edge.push(v);
        mean += v / cap.around;
      }
      for (let r = 0; r < cap.rings; r++) for (let a = 0; a < cap.around; a++) h.array[r * cap.around + a] = edge[a] + (mean - edge[a]) * (r / cap.rings);
      h.array[cap.rings * cap.around] = mean;
      h.needsUpdate = true;
    }
  }

  // Nearest loaded tile, this one or a parent, for a layer; with the part of its picture that covers this tile.
  resolve(tile, layer) {
    for (let t = tile; t; t = t.parent) {
      const s = t.slots[layer.id];
      if (s && s.state === READY) {
        const k = 2 ** (tile.z - t.z);
        return { slot: s, z: t.z, scale: 1 / k, ox: (tile.x - t.x * k) / k, oy: (tile.y - t.y * k) / k };
      }
    }
    return null;
  }

  // Height in metres at lon/lat (radians) from the best tile already loaded, or null before anything has arrived.
  heightAt(lon, lat) {
    lon = wrapLon(lon);
    lat = clamp(lat, -MAX_LAT + 1e-6, MAX_LAT - 1e-6);
    const n = 2 ** ROOT_Z;
    let t = this.roots[clamp(Math.floor(latToY(lat, ROOT_Z)), 0, n - 1) * n + clamp(Math.floor(lonToX(lon, ROOT_Z)), 0, n - 1)];
    let best = null;
    const id = this.layers.elevation.id;
    while (t) {
      const s = t.slots[id];
      if (s && s.state === READY) best = t;
      if (!t.children) break;
      const fx = lonToX(lon, t.z + 1) - 2 * t.x, fy = latToY(lat, t.z + 1) - 2 * t.y;
      t = t.children[(fy >= 1 ? 2 : 0) + (fx >= 1 ? 1 : 0)];
    }
    if (!best) return null;
    const s = best.slots[id];
    const px = clamp((lonToX(lon, best.z) - best.x) * 256 - 0.5, 0, 255), py = clamp((latToY(lat, best.z) - best.y) * 256 - 0.5, 0, 255);
    const x0 = Math.floor(px), y0 = Math.floor(py), x1 = Math.min(x0 + 1, 255), y1 = Math.min(y0 + 1, 255);
    const fx = px - x0, fy = py - y0;
    const g = (x, y) => THREE.DataUtils.fromHalfFloat(s.heights[(y + 1) * GRID + x + 1]);
    return s.base + (g(x0, y0) * (1 - fx) + g(x1, y0) * fx) * (1 - fy) + (g(x0, y1) * (1 - fx) + g(x1, y1) * fx) * fy;
  }

  measure(tile, cam) {
    const exag = this.shared.uExag.value;
    // Nearest point of the tile to the spot under the camera.
    let lonP = cam.lon;
    if (!(lonP >= tile.lon0 && lonP <= tile.lon1)) {
      const d0 = Math.abs(wrapLon(cam.lon - tile.lon0)), d1 = Math.abs(wrapLon(cam.lon - tile.lon1));
      lonP = d0 < d1 ? tile.lon0 : tile.lon1;
    }
    const latP = clamp(cam.lat, tile.latS, tile.latN);
    const ang = arc(cam.lon, cam.lat, lonP, latP);
    const top = Math.max(tile.maxH, cam.sea) * exag;
    if (ang > cam.horizon + Math.acos(Math.min(1, cam.occluder / (R + Math.max(top, 0) + 50))) + 0.002) return null;
    const rel = this._v.set(tile.center[0] - cam.pos[0], tile.center[1] - cam.pos[1], tile.center[2] - cam.pos[2]);
    this._sphere.center.copy(rel);
    this._sphere.radius = tile.radius + Math.max(Math.abs(tile.minH), Math.abs(tile.maxH)) * exag + 200;
    if (!this.frustum.intersectsSphere(this._sphere)) return null;
    const hP = clamp(cam.ground, tile.minH, tile.maxH) * exag;
    const p = toDir(lonP, latP, this._p);
    const rr = R + Math.max(hP, cam.sea * exag);
    const d = Math.max(Math.hypot(p[0] * rr - cam.pos[0], p[1] * rr - cam.pos[1], p[2] * rr - cam.pos[2]), 20);
    const width = (CIRC * Math.cos(latP)) / 2 ** tile.z;
    // Ground seen at a slant is squeezed on screen, so it can make do with less detail.
    const facing = Math.abs((p[0] * (p[0] * rr - cam.pos[0]) + p[1] * (p[1] * rr - cam.pos[1]) + p[2] * (p[2] * rr - cam.pos[2])) / d);
    return (width / d) * cam.pxPerRad * Math.max(0.45, Math.sqrt(facing));
  }

  ensure(tile, px) {
    const L = this.layers, ld = this.loader;
    const e = ld.want(tile, L.elevation, px + 2e6);
    // Far tiles show the whole-planet photograph; from its last zoom on, the close-up mosaic takes over.
    const split = L.globe ? L.globe.maxZoom : -1;
    const g = L.globe && tile.z <= split ? ld.want(tile, L.globe, px + 1e6) : null;
    const b = tile.z >= split ? ld.want(tile, L.base, px + 1e6) : g;
    if (L.overlay) ld.want(tile, L.overlay, px);
    if (L.night && this.shared.uNightOn.value > 0.5) ld.want(tile, L.night, px - 1e5);
    return e.state >= READY && b.state >= READY;
  }

  visit(tile, px, cam) {
    tile.visit = this.frame;
    const ready = this.ensure(tile, px);
    if (ready && tile.z < this.maxZ && px > this.threshold && this.drawn.length < 700) {
      if (!tile.children) { tile.split(); this.count += 4; }
      let all = true;
      for (const c of tile.children) {
        c._px = this.measure(c, cam);
        if (c._px === null) continue;
        c.visit = this.frame;
        if (!this.ensure(c, c._px)) all = false;
      }
      if (all) {
        for (const c of tile.children) if (c._px !== null) this.visit(c, c._px, cam);
        return;
      }
    }
    if (ready) this.drawn.push(tile);
  }

  // cam: { pos:[x,y,z], lon, lat, ground, viewProjectionRel: Matrix4, pxPerRad }
  update(cam) {
    this.frame++;
    const S = this.shared;
    const exag = S.uExag.value;
    const water = S.uWater.value > 0.5;
    cam.sea = water ? S.uSea.value : -12000;
    const camR = Math.hypot(cam.pos[0], cam.pos[1], cam.pos[2]);
    cam.occluder = R + (water ? Math.min(S.uSea.value, -450) : -11000) * exag - 100;
    cam.horizon = camR > cam.occluder ? Math.acos(cam.occluder / camR) : Math.PI;
    this._v ??= new THREE.Vector3();
    this._p ??= [0, 0, 0];
    this._sphere ??= new THREE.Sphere();
    this.frustum.setFromProjectionMatrix(cam.viewProjectionRel);
    S.uSeaClamp.value = water ? S.uSea.value : -1e5;

    this.drawn.length = 0;
    for (const root of this.roots) {
      const px = this.measure(root, cam);
      if (px === null) { root.visit = this.frame; this.ensure(root, 1); continue; }
      this.visit(root, px, cam);
    }
    this.assign(cam);
    this.loader.pump(this.frame);
    if (this.frame % 90 === 0) this.prune();
    if (!this.capsFitted && this.roots.every((r) => r.slots[this.layers.elevation.id]?.state >= READY)) { this.fitCaps(); this.capsFitted = true; }
    for (const cap of this.caps) cap.mesh.material.uniforms.uCenterRel.value.set(cap.centre[0] - cam.pos[0], cap.centre[1] - cam.pos[1], cap.centre[2] - cam.pos[2]);
  }

  assign(cam) {
    const L = this.layers;
    let deepest = 0;
    for (let i = 0; i < this.drawn.length; i++) {
      const tile = this.drawn[i];
      let mesh = this.pool[i];
      if (!mesh) {
        mesh = this.pool[i] = new THREE.Mesh(undefined, this.makeMaterial());
        mesh.frustumCulled = false;
        mesh.matrixAutoUpdate = false;
        this.group.add(mesh);
      }
      tile.geom ??= tileGeometry(tile, this.grid);
      mesh.geometry = tile.geom;
      mesh.visible = true;
      mesh.matrix.makeTranslation(tile.center[0], tile.center[1], tile.center[2]);
      mesh.matrixWorld.copy(mesh.matrix);
      const u = mesh.material.uniforms;
      u.uCenter.value.set(tile.center[0], tile.center[1], tile.center[2]);
      u.uCenterRel.value.set(tile.center[0] - cam.pos[0], tile.center[1] - cam.pos[1], tile.center[2] - cam.pos[2]);
      u.uSkirt.value = Math.max(CIRC / 2 ** tile.z * 0.04, 30) * Math.max(1, this.shared.uExag.value * 0.5);

      const e = this.resolve(tile, L.elevation);
      if (e) {
        const k = 256 / GRID;
        u.tElev.value = e.slot.tex; u.uElevUV.value.set(e.scale * k, e.scale * k, (1 + 256 * e.ox) / GRID, (1 + 256 * e.oy) / GRID); u.uElevBase.value = e.slot.base; u.uElevMpp.value = CIRC / 2 ** e.z / 256;
      } else { u.tElev.value = this.blankElev; u.uElevBase.value = 0; u.uElevMpp.value = CIRC / 2 ** tile.z / 256; }
      // Shadows read a tile three levels up, which reaches well past this tile's own edges.
      let far = null;
      for (let t = tile, up = 0; t; t = t.parent, up++) {
        const s = t.slots[L.elevation.id];
        if (s && s.state === READY && (up >= 3 || !t.parent)) { far = t; break; }
      }
      if (far) {
        const k = 2 ** (tile.z - far.z), s = far.slots[L.elevation.id];
        u.tFar.value = s.tex; u.uFarUV.value.set(256 / GRID / k, 256 / GRID / k, (1 + (256 * (tile.x - far.x * k)) / k) / GRID, (1 + (256 * (tile.y - far.y * k)) / k) / GRID); u.uFarBase.value = s.base; u.uFarMpp.value = CIRC / 2 ** far.z / 256; u.uFarTop.value = s.max;
      } else { u.tFar.value = u.tElev.value; u.uFarUV.value.copy(u.uElevUV.value); u.uFarBase.value = u.uElevBase.value; u.uFarMpp.value = u.uElevMpp.value; u.uFarTop.value = tile.maxH; }

      const gl = L.globe && this.resolve(tile, L.globe);
      const b = this.resolve(tile, L.base) ?? gl;
      if (b) { u.tBase.value = b.slot.tex; u.uBaseUV.value.set(b.scale, b.scale, b.ox, b.oy); u.uBaseTexels.value = 256 * 2 ** b.z; }
      else { u.tBase.value = this.blank; u.uBaseTexels.value = 256 * 2 ** tile.z; }
      if (gl) { u.tGlobe.value = gl.slot.tex; u.uGlobeUV.value.set(gl.scale, gl.scale, gl.ox, gl.oy); u.uGlobeOn.value = 1; }
      else { u.tGlobe.value = this.blank; u.uGlobeOn.value = 0; }

      const o = L.overlay && this.resolve(tile, L.overlay);
      if (o) { u.tOver.value = o.slot.tex; u.uOverUV.value.set(o.scale, o.scale, o.ox, o.oy); u.uOverOn.value = 1; }
      else { u.tOver.value = this.black; u.uOverOn.value = 0; }

      const n = L.night && this.shared.uNightOn.value > 0.5 && this.resolve(tile, L.night);
      if (n) { u.tNight.value = n.slot.tex; u.uNightUV.value.set(n.scale, n.scale, n.ox, n.oy); }
      else u.tNight.value = this.black;

      if (tile.dry) u.uDry.value.set(tile.dry[0], tile.dry[1], tile.dry[2], tile.dry[3]);
      else u.uDry.value.set(2, 2, -1, -1);
      for (let k = 0; k < 3; k++) { u.uLat.value[k].set(tile.lattice[k][0], tile.lattice[k][1]); u.uLatS.value[k] = tile.lattice[k][2]; }
      if (tile.z > deepest) deepest = tile.z;
    }
    for (let i = this.drawn.length; i < this.pool.length; i++) this.pool[i].visible = false;
    this.stats.tiles = this.drawn.length;
    this.stats.depth = deepest;
  }

  // Forget tiles nobody has looked at for a while, deepest first.
  prune() {
    const patience = this.count > this.budget ? 45 : 900;
    const walk = (tile) => {
      if (!tile.children) return;
      let leaves = true;
      for (const c of tile.children) { walk(c); if (c.children || c.visit >= this.frame - patience) leaves = false; }
      if (leaves) {
        for (const c of tile.children) { c.dead = true; disposeSlots(c); c.geom?.dispose(); c.geom = null; }
        tile.children = null;
        this.count -= 4;
      }
    };
    for (const r of this.roots) walk(r);
  }

  // Read the heights again inside a box [west, south, east, north] in degrees: a finer depth grid has arrived for it.
  // Tiles coarser than zoom 7 are left as they are, so there is always ground to draw while the rest reloads.
  refresh(bbox) {
    const id = this.layers.elevation.id, [w, s, e, n] = bbox.map((v) => v * DEG);
    const walk = (t) => {
      if (xToLon(t.x + 1, t.z) <= w || xToLon(t.x, t.z) >= e || yToLat(t.y, t.z) <= s || yToLat(t.y + 1, t.z) >= n) return;
      if (t.z >= 7) { const slot = t.slots[id]; if (slot) { slot.abort?.abort(); slot.tex?.dispose(); delete t.slots[id]; } t.allSea = false; }
      t.children?.forEach(walk);
    };
    this.roots.forEach(walk);
  }

  // Swap a layer. Old pictures for it are dropped as their tiles are pruned or revisited.
  setLayer(role, layer) {
    const old = this.layers[role];
    this.layers[role] = layer;
    if (old && (!layer || old.id !== layer.id)) {
      const walk = (t) => {
        const s = t.slots[old.id];
        if (s) { s.abort?.abort(); s.tex?.dispose(); delete t.slots[old.id]; }
        if (t.children) t.children.forEach(walk);
      };
      this.roots.forEach(walk);
    }
  }

  get ready() {
    const pic = (this.layers.globe ?? this.layers.base).id;
    return this.roots.every((r) => r.slots[this.layers.elevation.id]?.state >= READY && r.slots[pic]?.state >= READY);
  }
}
