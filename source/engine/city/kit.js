// The city's geometry kit: everything is written straight into typed arrays, one bin per part of the reconstruction.
// A vertex is a position, a normal, and four bytes: a tint (sRGB, with baked shade multiplied in) and the surface it is
// made of (see surfaces.js). One material draws every surface, so a part is one draw call however many stones it mixes.
import * as THREE from 'three';

export const TAU = Math.PI * 2;
export const rnd = (seed) => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
export const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

// The frame the next vertices are written in: turned about Z, then moved.
export class Frame {
  constructor() { this.c = 1; this.s = 0; this.x = 0; this.y = 0; this.z = 0; }
  set(x = 0, y = 0, z = 0, rot = 0) { this.c = Math.cos(rot); this.s = Math.sin(rot); this.x = x; this.y = y; this.z = z; return this; }
  // A frame inside the current one.
  push(x, y, z, rot = 0) {
    const saved = [this.c, this.s, this.x, this.y, this.z];
    const c = Math.cos(rot), s = Math.sin(rot);
    const nx = this.x + this.c * x - this.s * y, ny = this.y + this.s * x + this.c * y;
    const nc = this.c * c - this.s * s, ns = this.s * c + this.c * s;
    this.c = nc; this.s = ns; this.x = nx; this.y = ny; this.z += z;
    return saved;
  }
  pop(saved) { [this.c, this.s, this.x, this.y, this.z] = saved; }
}

export class Bin {
  constructor(frame, id) {
    this.F = frame; this.id = id;
    this.cap = 1024; this.icap = 2048;
    this.pos = new Float32Array(this.cap * 3); this.nrm = new Int8Array(this.cap * 4); this.col = new Uint8Array(this.cap * 4);
    this.idx = new Uint32Array(this.icap);
    this.nv = 0; this.ni = 0;
    this.s = 0; this.r = 255; this.g = 255; this.b = 255;
  }
  // What the next faces are made of: a surface index and a tint ([r, g, b] 0 to 255, sRGB).
  surf(s, tint) { this.s = s; if (tint) { this.r = tint[0]; this.g = tint[1]; this.b = tint[2]; } else this.r = this.g = this.b = 255; return this; }
  room(v, i) {
    if (this.nv + v > this.cap) {
      while (this.nv + v > this.cap) this.cap *= 2;
      const p = new Float32Array(this.cap * 3); p.set(this.pos.subarray(0, this.nv * 3)); this.pos = p;
      const n = new Int8Array(this.cap * 4); n.set(this.nrm.subarray(0, this.nv * 4)); this.nrm = n;
      const c = new Uint8Array(this.cap * 4); c.set(this.col.subarray(0, this.nv * 4)); this.col = c;
    }
    if (this.ni + i > this.icap) { while (this.ni + i > this.icap) this.icap *= 2; const x = new Uint32Array(this.icap); x.set(this.idx.subarray(0, this.ni)); this.idx = x; }
  }
  // One vertex in the current frame, with its normal (also turned) and a shade from 0 to 1.
  v(x, y, z, nx, ny, nz, ao = 1) {
    this.room(1, 0);
    const F = this.F, k = this.nv, p = k * 3, q = k * 4;
    this.pos[p] = F.x + F.c * x - F.s * y; this.pos[p + 1] = F.y + F.s * x + F.c * y; this.pos[p + 2] = F.z + z;
    this.nrm[q] = (F.c * nx - F.s * ny) * 127; this.nrm[q + 1] = (F.s * nx + F.c * ny) * 127; this.nrm[q + 2] = nz * 127;
    this.col[q] = this.r * ao; this.col[q + 1] = this.g * ao; this.col[q + 2] = this.b * ao; this.col[q + 3] = this.s;
    return this.nv++;
  }
  tri3(a, b, c) { this.room(0, 3); this.idx[this.ni++] = a; this.idx[this.ni++] = b; this.idx[this.ni++] = c; }
  quad4(a, b, c, d) { this.room(0, 6); const i = this.idx; let n = this.ni; i[n++] = a; i[n++] = b; i[n++] = c; i[n++] = a; i[n++] = c; i[n++] = d; this.ni = n; }
  // A flat four-sided face, corners counter-clockwise seen from outside. Each corner [x, y, z]; shade per corner.
  quad(a, b, c, d, s0 = 1, s1 = s0, s2 = s1, s3 = s0) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = d[0] - a[0], vy = d[1] - a[1], vz = d[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    const i = this.v(a[0], a[1], a[2], nx, ny, nz, s0);
    this.v(b[0], b[1], b[2], nx, ny, nz, s1); this.v(c[0], c[1], c[2], nx, ny, nz, s2); this.v(d[0], d[1], d[2], nx, ny, nz, s3);
    this.quad4(i, i + 1, i + 2, i + 3);
    return this;
  }
  tri(a, b, c, s0 = 1, s1 = s0, s2 = s0) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    const i = this.v(a[0], a[1], a[2], nx, ny, nz, s0);
    this.v(b[0], b[1], b[2], nx, ny, nz, s1); this.v(c[0], c[1], c[2], nx, ny, nz, s2);
    this.tri3(i, i + 1, i + 2);
    return this;
  }
  // An upright wall face from (x0, y0) to (x1, y1), between heights z0 and z1. Its outside is on the right of the walk
  // from the first point to the second. Shade at the foot and the head.
  wall(x0, y0, x1, y1, z0, z1, foot = 1, head = foot) { return this.quad([x0, y0, z0], [x1, y1, z0], [x1, y1, z1], [x0, y0, z1], foot, foot, head, head); }
  // A level face (looking up) over the rectangle centred at (x, y), w along X and d along Y, turned by rot.
  slab(x, y, z, w, d, rot = 0, shade = 1) {
    const c = Math.cos(rot) / 2, s = Math.sin(rot) / 2, ax = c * w, ay = s * w, bx = -s * d, by = c * d;
    return this.quad([x - ax - bx, y - ay - by, z], [x + ax - bx, y + ay - by, z], [x + ax + bx, y + ay + by, z], [x - ax + bx, y - ay + by, z], shade);
  }
  // A box standing on z0: w along X, d along Y, h tall, centred at (x, y), turned by rot. foot and head shade the sides.
  box(x, y, z0, w, d, h, rot = 0, { top = true, bottom = false, foot = 1, head = foot, sides = 15, topShade = 1 } = {}) {
    const c = Math.cos(rot) / 2, s = Math.sin(rot) / 2, ax = c * w, ay = s * w, bx = -s * d, by = c * d, z1 = z0 + h;
    const p = [[x - ax - bx, y - ay - by], [x + ax - bx, y + ay - by], [x + ax + bx, y + ay + by], [x - ax + bx, y - ay + by]];
    for (let k = 0; k < 4; k++) if (sides & (1 << k)) { const a = p[k], b = p[(k + 1) % 4]; this.wall(a[0], a[1], b[0], b[1], z0, z1, foot, head); }
    if (top) this.quad([p[0][0], p[0][1], z1], [p[1][0], p[1][1], z1], [p[2][0], p[2][1], z1], [p[3][0], p[3][1], z1], topShade);
    if (bottom) this.quad([p[3][0], p[3][1], z0], [p[2][0], p[2][1], z0], [p[1][0], p[1][1], z0], [p[0][0], p[0][1], z0], foot * 0.6);
    return this;
  }
  // A surface swept round the Z axis. profile: [[radius, height, shade?], …]; walking the profile with the axis on your
  // left, the outside is on your right when sense is 1 (an outward-facing wall goes bottom to top), and the other way
  // when sense is -1. arcs: [[a0, a1], …] in radians. step: the longest chord, in metres.
  sweep(profile, { arcs = [[0, TAU]], step = 8, sense = 1 } = {}) {
    const rmax = Math.max(...profile.map((p) => p[0]), 1);
    for (const [a0, a1] of arcs) {
      const n = Math.max(2, Math.ceil(((a1 - a0) * rmax) / step));
      for (let k = 0; k < profile.length - 1; k++) {
        const p = profile[k], q = profile[k + 1];
        if (Math.abs(p[0] - q[0]) < 1e-6 && Math.abs(p[1] - q[1]) < 1e-6) continue;
        const sp = p[2] ?? 1, sq = q[2] ?? 1;
        for (let i = 0; i < n; i++) {
          const t0 = a0 + ((a1 - a0) * i) / n, t1 = a0 + ((a1 - a0) * (i + 1)) / n, c0 = Math.cos(t0), s0 = Math.sin(t0), c1 = Math.cos(t1), s1 = Math.sin(t1);
          const A = [p[0] * c0, p[0] * s0, p[1]], B = [p[0] * c1, p[0] * s1, p[1]], C = [q[0] * c1, q[0] * s1, q[1]], D = [q[0] * c0, q[0] * s0, q[1]];
          if (sense > 0) this.quad(A, B, C, D, sp, sp, sq, sq); else this.quad(B, A, D, C, sp, sp, sq, sq);
        }
      }
    }
    return this;
  }
  // A round or many-sided upright shaft with flat sides: r0 at the foot, r1 at the head. Flat sides read as flutes.
  shaft(x, y, z0, r0, r1, h, n = 12, { foot = 1, head = foot, cap = false, phase = 0 } = {}) {
    for (let k = 0; k < n; k++) {
      const a = phase + (k / n) * TAU, b = phase + ((k + 1) / n) * TAU, ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
      this.quad([x + r0 * ca, y + r0 * sa, z0], [x + r0 * cb, y + r0 * sb, z0], [x + r1 * cb, y + r1 * sb, z0 + h], [x + r1 * ca, y + r1 * sa, z0 + h], foot, foot, head, head);
      if (cap) this.tri([x, y, z0 + h], [x + r1 * ca, y + r1 * sa, z0 + h], [x + r1 * cb, y + r1 * sb, z0 + h], head);
    }
    return this;
  }
  // A smooth body of revolution about an upright axis at (x, y): profile [[radius, height], …] from the foot up.
  turned(x, y, z0, profile, n = 8, { squash = 1, rot = 0, shade = 1 } = {}) {
    const base = this.nv, m = profile.length;
    for (let j = 0; j < m; j++) {
      const [r, z] = profile[j], prev = profile[Math.max(0, j - 1)], next = profile[Math.min(m - 1, j + 1)];
      const dr = next[0] - prev[0], dz = next[1] - prev[1], l = Math.hypot(dr, dz) || 1, nr = dz / l, nz = -dr / l;
      for (let k = 0; k < n; k++) {
        const a = rot + (k / n) * TAU, c = Math.cos(a), s = Math.sin(a) * squash;
        this.v(x + r * c, y + r * s, z0 + z, nr * c, nr * Math.sin(a), nz, shade);
      }
    }
    for (let j = 0; j < m - 1; j++) for (let k = 0; k < n; k++) { const a = base + j * n + k, b = base + j * n + ((k + 1) % n); this.quad4(a, b, b + n, a + n); }
    return this;
  }
  // A lofted skin through rings of points (each ring the same length), smooth. closed: join the last point to the first.
  loft(rings, { closed = false, flip = false, shade = 1 } = {}) {
    const base = this.nv, m = rings.length, n = rings[0].length;
    for (let j = 0; j < m; j++) for (let k = 0; k < n; k++) {
      const P = rings[j][k];
      const U = rings[Math.min(m - 1, j + 1)][k], D = rings[Math.max(0, j - 1)][k];
      const R = rings[j][closed ? (k + 1) % n : Math.min(n - 1, k + 1)], L = rings[j][closed ? (k + n - 1) % n : Math.max(0, k - 1)];
      const ux = U[0] - D[0], uy = U[1] - D[1], uz = U[2] - D[2], vx = R[0] - L[0], vy = R[1] - L[1], vz = R[2] - L[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      const l = (Math.hypot(nx, ny, nz) || 1) * (flip ? -1 : 1);
      this.v(P[0], P[1], P[2], nx / l, ny / l, nz / l, P[3] ?? shade);
    }
    const kn = closed ? n : n - 1;
    for (let j = 0; j < m - 1; j++) for (let k = 0; k < kn; k++) {
      const a = base + j * n + k, b = base + j * n + ((k + 1) % n);
      if (flip) this.quad4(a, b, b + n, a + n); else this.quad4(a, a + n, b + n, b);
    }
    return this;
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos.slice(0, this.nv * 3), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(this.nrm.slice(0, this.nv * 4), 4, true));
    g.setAttribute('aTint', new THREE.BufferAttribute(this.col.slice(0, this.nv * 4), 4, true));
    g.setIndex(new THREE.BufferAttribute(this.nv > 65535 ? this.idx.slice(0, this.ni) : new Uint16Array(this.idx.subarray(0, this.ni)), 1));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

// All the bins of one build, by part id.
export class Mesher {
  constructor() { this.F = new Frame(); this.bins = new Map(); }
  to(id) { let b = this.bins.get(id); if (!b) this.bins.set(id, (b = new Bin(this.F, id))); return b; }
  // A loose bin, for a shape that will be drawn many times (a house, a tree, a ship).
  proto(id) { return new Bin(new Frame(), id); }
}

// Many copies of one shape. list: [{ x, y, z, rot, sx, sy, sz, tint }]
export const instances = (geometry, material, list) => {
  const mesh = new THREE.InstancedMesh(geometry, material, list.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
  let coloured = false;
  list.forEach((o, i) => {
    e.set(o.tilt ?? 0, 0, o.rot ?? 0, 'ZXY'); q.setFromEuler(e); s.set(o.sx ?? 1, o.sy ?? o.sx ?? 1, o.sz ?? o.sx ?? 1); p.set(o.x, o.y, o.z ?? 0);
    mesh.setMatrixAt(i, m.compose(p, q, s));
    if (o.tint) { coloured = true; mesh.setColorAt(i, c.setRGB(o.tint[0] / 255, o.tint[1] / 255, o.tint[2] / 255, THREE.SRGBColorSpace)); }
    else if (coloured) mesh.setColorAt(i, c.setRGB(1, 1, 1));
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.computeBoundingSphere();
  mesh.computeBoundingBox();
  return mesh;
};
