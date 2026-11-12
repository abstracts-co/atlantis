// The ground of the city: the island and its hill, the rings of land with their harbour strips and banks, the water,
// the roofed ship passages, the rock-cut docks, the town's ground and the lines that carry Plato's numbers out over the
// real land.
import * as THREE from 'three';
import { S, TINT } from './surfaces.js';
import { TAU } from './kit.js';
import { mulTint } from './forms.js';

export const buildGround = (M, plan, tier) => {
  const { B, Q, rIsle, rW1, rL1, rW2, rL2, rW3, rA, r1a, r1b, r2a, r2b, rT, core, edge, Zp, Rp, Rs, zSlopeTop, zSlopeFoot, SEA, roadAngle, arcsExcept, canalHalf, bridgeHalf, tunnelHalf, off, rampTop, rampFoot, k } = plan;
  const step = tier.phone ? 14 : 8, deep = -3.2;
  const quays = M.to('rings'), furniture = M.to('quays'), stone = M.to('stone'), rings = M.to('rings'), island = M.to('island'), hill = M.to('hill');
  const gap = (r, half) => Math.asin(Math.min(1, half / r));

  // ----- the island (Critias 113c-d, 116a) -----
  const dockHalf = 21, NORTH = Math.PI / 2;
  const isleArcs = arcsExcept([[NORTH, gap(rIsle, dockHalf)]]);
  quays.surf(S.stone, TINT.white).sweep([[rIsle, deep, 0.6], [rIsle, Q, 0.95]], { arcs: isleArcs, step });
  quays.surf(S.paving, TINT.white).sweep([[rIsle, Q, 0.95], [rA, Q, 0.8]], { arcs: isleArcs, step });
  stone.surf(S.stoneCourses, TINT.white).sweep([[rA, Q, 0.7], [rA, B, 0.95]], { arcs: arcsExcept([[NORTH, gap(rA, dockHalf)]]), step });
  island.surf(S.grass, [235, 235, 225]).sweep([[rA, B], [Rs + 26, B]], { step });
  island.surf(S.paving, TINT.white).sweep([[Rs + 26, B + 0.02], [Rs, B + 0.02, 0.8]], { step });
  const rampGap = (r) => [[roadAngle(r), gap(r, bridgeHalf + 0.6)]];
  hill.surf(S.stoneBands, TINT.white).sweep([[Rs, B, 0.7], [Rs, zSlopeFoot + 0.9, 1]], { arcs: arcsExcept(rampGap(Rs)), step });
  hill.surf(S.smooth, TINT.white).sweep([[Rs, zSlopeFoot + 0.9], [Rs - 0.7, zSlopeFoot + 0.9], [Rs - 0.7, zSlopeFoot, 0.8]], { arcs: arcsExcept(rampGap(Rs)), step });
  hill.surf(S.grass, [255, 255, 245]).sweep([[Rs - 0.7, zSlopeFoot], [Rp, zSlopeTop, 0.85]], { step });
  hill.surf(S.stoneBands, TINT.white).sweep([[Rp, zSlopeTop, 0.7], [Rp, Zp + 1.0, 1]], { arcs: arcsExcept(rampGap(Rp)), step });
  hill.surf(S.smooth, TINT.white).sweep([[Rp, Zp + 1.0], [Rp - 0.8, Zp + 1.0], [Rp - 0.8, Zp, 0.8]], { arcs: arcsExcept(rampGap(Rp)), step });
  island.surf(S.paving, TINT.white).sweep([[Rp, Zp], [Rp * 0.5, Zp], [0.5, Zp]], { step: step * 2 });

  // ----- the two rings of land (Critias 113d, 115e) -----
  const ring = (a, b, sa, sb, face) => {
    const tunnel = (r) => [[SEA, gap(r, tunnelHalf)]];
    quays.surf(S.stone, TINT.white).sweep([[a, deep, 0.6], [a, Q, 0.95]], { arcs: arcsExcept(tunnel(a)), step, sense: -1 });
    quays.surf(S.paving, TINT.white).sweep([[a, Q, 0.95], [a + sa, Q, 0.8]], { arcs: arcsExcept(tunnel(a)), step, sense: -1 });
    stone.surf(face[0], face[1]).sweep([[a + sa, Q, 0.7], [a + sa, B, 0.95]], { arcs: arcsExcept(tunnel(a + sa)), step, sense: -1 });
    rings.surf(S.grass, [240, 236, 220]).sweep([[a + sa, B], [b - sb, B]], { step, sense: -1 });
    stone.surf(face[0], face[1]).sweep([[b - sb, B, 0.95], [b - sb, Q, 0.7]], { arcs: arcsExcept(tunnel(b - sb)), step, sense: -1 });
    quays.surf(S.paving, TINT.white).sweep([[b - sb, Q, 0.8], [b, Q, 0.95]], { arcs: arcsExcept(tunnel(b)), step, sense: -1 });
    quays.surf(S.stone, TINT.white).sweep([[b, Q, 0.95], [b, deep, 0.6]], { arcs: arcsExcept(tunnel(b)), step, sense: -1 });
  };
  ring(rW1, rL1, r1a - rW1, rL1 - r1b, [S.stoneBands, TINT.white]);
  ring(rW2, rL2, r2a - rW2, rL2 - r2b, [S.stoneChequer, TINT.white]);

  // ----- the roofed passages for ships through the rings of land (Critias 115d-e) -----
  const pass = M.to('ship-passages'), roof = 5.6, th = tunnelHalf;
  const yAt = (r, x = th) => -Math.sqrt(r * r - x * x);
  for (const [a, b, sa, sb] of [[rW1, rL1, r1a - rW1, rL1 - r1b], [rW2, rL2, r2a - rW2, rL2 - r2b]]) {
    // open cuts through the two harbour strips
    for (const [ya, yb] of [[yAt(a), yAt(a + sa)], [yAt(b - sb), yAt(b)]]) for (const sx of [-1, 1]) {
      quays.surf(S.stone, TINT.white);
      if (sx > 0) quays.wall(th, ya, th, yb, deep, Q, 0.6, 0.95); else quays.wall(-th, yb, -th, ya, deep, Q, 0.6, 0.95);
    }
    // the passage under the raised ground: two walls and the rock roof, in deep shade
    const y0 = yAt(a + sa), y1 = yAt(b - sb);
    pass.surf(S.rock, [120, 116, 110]);
    pass.wall(th, y0, th, y1, deep, roof, 0.3, 0.2); pass.wall(-th, y1, -th, y0, deep, roof, 0.3, 0.2);
    pass.quad([-th, y0, roof], [th, y0, roof], [th, y1, roof], [-th, y1, roof], 0.25);
    // the two mouths: a lintel of great blocks and a frame in red stone
    for (const [y, out] of [[y0, 1], [y1, -1]]) {
      pass.surf(S.stone, TINT.red);
      const f = y + out * 0.25;
      if (out > 0) { pass.wall(th + 2.2, f, -th - 2.2, f, roof, B, 0.85, 1); pass.wall(th + 2.2, f, th, f, Q, roof, 0.8, 0.9); pass.wall(-th, f, -th - 2.2, f, Q, roof, 0.8, 0.9); }
      else { pass.wall(-th - 2.2, f, th + 2.2, f, roof, B, 0.85, 1); pass.wall(th, f, th + 2.2, f, Q, roof, 0.8, 0.9); pass.wall(-th - 2.2, f, -th, f, Q, roof, 0.8, 0.9); }
      pass.surf(S.rock, [120, 116, 110]).quad([-th, y, roof], [th, y, roof], [th, y + out * 0.3, roof], [-th, y + out * 0.3, roof], 0.3);
    }
  }

  // ----- the two docks cut into the rock under the island (Critias 116b) -----
  const docks = M.to('rock-docks'), dockDeep = 52 * k, yFace = Math.sqrt(rA * rA - dockHalf * dockHalf), yShore = Math.sqrt(rIsle * rIsle - dockHalf * dockHalf), dw = 17, pier = (dockHalf * 2 - dw * 2) / 3;
  const dockRoof = B - 1.2;
  docks.surf(S.rock, [150, 144, 132]);
  // the rock face above and between the mouths, flush with the bank
  docks.wall(-dockHalf, yFace, dockHalf, yFace, dockRoof, B, 0.8, 1);
  const mouths = [-dockHalf + pier + dw / 2, dockHalf - pier - dw / 2];
  for (const x of [-dockHalf + pier / 2, 0, dockHalf - pier / 2]) { docks.wall(x - pier / 2, yFace, x + pier / 2, yFace, deep, dockRoof, 0.55, 0.9); }
  for (const cx of mouths) {
    docks.surf(S.rock, [118, 112, 104]);
    docks.wall(cx - dw / 2, yFace, cx - dw / 2, yFace - dockDeep, deep, dockRoof, 0.32, 0.22);
    docks.wall(cx + dw / 2, yFace - dockDeep, cx + dw / 2, yFace, deep, dockRoof, 0.32, 0.22);
    docks.wall(cx - dw / 2, yFace - dockDeep, cx + dw / 2, yFace - dockDeep, deep, dockRoof, 0.2, 0.16);
    docks.quad([cx - dw / 2, yFace - dockDeep, dockRoof], [cx + dw / 2, yFace - dockDeep, dockRoof], [cx + dw / 2, yFace, dockRoof], [cx - dw / 2, yFace, dockRoof], 0.2, 0.2, 0.35, 0.35);
    // a slip of rock rising from the water at the back, where a hull is drawn up
    docks.surf(S.rock, [140, 134, 122]).quad([cx - dw / 2, yFace - dockDeep + 22, -1.2], [cx + dw / 2, yFace - dockDeep + 22, -1.2], [cx + dw / 2, yFace - dockDeep, 1.6], [cx - dw / 2, yFace - dockDeep, 1.6], 0.3);
  }
  // the ends of the island's quay either side of the docks
  for (const sx of [-1, 1]) {
    quays.surf(S.stone, TINT.white);
    if (sx > 0) quays.wall(dockHalf, yFace, dockHalf, yShore, deep, Q, 0.6, 0.95); else quays.wall(-dockHalf, yShore, -dockHalf, yFace, deep, Q, 0.6, 0.95);
  }

  // ----- the town's ground, the canal's banks, and the bank the made ground ends in -----
  const town = M.to('houses'), canal = M.to('canal'), ext = M.to('extent');
  const cs = 12 * k, cb = canalHalf + cs, g0 = gap(rT, cb);
  const townArcs = arcsExcept([[SEA, g0]]);
  quays.surf(S.stone, TINT.white).sweep([[rW3, deep, 0.6], [rW3, Q, 0.95]], { arcs: arcsExcept([[SEA, gap(rW3, canalHalf)]]), step, sense: -1 });
  quays.surf(S.paving, TINT.white).sweep([[rW3, Q, 0.95], [rT, Q, 0.8]], { arcs: arcsExcept([[SEA, gap(rW3, canalHalf)]]), step, sense: -1 });
  stone.surf(S.stoneCourses, TINT.white).sweep([[rT, Q, 0.7], [rT, B, 0.95]], { arcs: townArcs, step, sense: -1 });
  town.surf(S.earth, [196, 184, 160]).sweep([[rT, B], [(rT + core) / 2, B], [core, B]], { arcs: townArcs, step: step * 1.5, sense: -1 });
  ext.surf(S.grass, [225, 220, 190]).sweep([[core, B], [edge, -3.2]], { arcs: townArcs, step: step * 2, sense: -1 });
  for (const sx of [-1, 1]) {
    const x0 = sx * canalHalf, x1 = sx * cb, ya = -Math.sqrt(rW3 * rW3 - canalHalf * canalHalf), yb = -Math.sqrt(rT * rT - cb * cb), ye = -edge;
    const W = (bin, xa, y0, xb, y1, z0, z1, f, h) => (sx > 0 ? bin.wall(xb, y1, xa, y0, z0, z1, f, h) : bin.wall(xa, y0, xb, y1, z0, z1, f, h));
    canal.surf(S.stone, TINT.white); W(canal, x0, ya, x0, ye, deep, Q, 0.6, 0.95);
    canal.surf(S.paving, TINT.white);
    const A = [x0, ya, Q], Bp = [x0, ye, Q], C = [x1, ye, Q], D = [x1, yb, Q];
    if (sx > 0) canal.quad(A, D, C, Bp, 0.9); else canal.quad(A, Bp, C, D, 0.9);
    canal.surf(S.stoneCourses, TINT.white); W(canal, x1, yb, x1, ye, Q, B, 0.7, 0.95);
    // the slivers of ground between the straight bank and the edge of the swept ground
    const e0 = SEA + sx * g0, P0 = [rT * Math.cos(e0), rT * Math.sin(e0)], P1 = [core * Math.cos(e0), core * Math.sin(e0)], P2 = [edge * Math.cos(e0), edge * Math.sin(e0)];
    const yc = -Math.sqrt(core * core - cb * cb);
    town.surf(S.earth, [196, 184, 160]);
    if (sx > 0) town.tri([P0[0], P0[1], B], [P1[0], P1[1], B], [x1, yc, B]); else town.tri([P0[0], P0[1], B], [x1, yc, B], [P1[0], P1[1], B]);
    ext.surf(S.grass, [225, 220, 190]);
    if (sx > 0) ext.quad([x1, yc, B], [P1[0], P1[1], B], [P2[0], P2[1], -3.2], [x1, ye, B]); else ext.quad([x1, yc, B], [x1, ye, B], [P2[0], P2[1], -3.2], [P1[0], P1[1], B]);
  }

  // ----- steps down to the water and mooring posts along the quays -----
  const posts = (r, dir, n, skip) => {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU;
      if (skip(a)) continue;
      const c = Math.cos(a), s = Math.sin(a), rr = r - dir * 1.2;
      furniture.surf(S.smooth, mulTint(TINT.white, 0.8)).shaft(rr * c, rr * s, Q, 0.32, 0.26, 0.9, 6, { cap: true, foot: 0.7 });
    }
  };
  const nearAxis = (a) => Math.abs(Math.atan2(Math.sin(a - SEA), Math.cos(a - SEA))) < 0.06;
  if (!tier.phone) { posts(rIsle, 1, 90, (a) => Math.abs(a - NORTH) < 0.06); posts(rW1, -1, 130, nearAxis); posts(rL1, 1, 200, nearAxis); posts(rW2, -1, 270, nearAxis); posts(rL2, 1, 380, nearAxis); posts(rW3, -1, 480, nearAxis); }

  return { dock: { mouths, yFace, dockDeep, dw }, canalStrip: cs };
};

// The water and the lines over the land are their own meshes, with their own materials.
export const buildWater = (plan, mats) => {
  const { rIsle, rW3, canalHalf, edge, rWall, core, B } = plan;
  const out = [];
  const sea = new THREE.Mesh(new THREE.RingGeometry(rIsle - 70, rW3 + 3, 180, 1), mats.sea);
  sea.userData = { id: 'harbours' }; out.push(sea);
  const len = edge - rW3 + 60, canal = new THREE.Mesh(new THREE.PlaneGeometry(canalHalf * 2, len), mats.sea);
  canal.position.set(0, -(rW3 + len / 2) + 2, 0.0);
  canal.userData = { id: 'canal' }; out.push(canal);
  for (const m of out) { m.receiveShadow = true; m.renderOrder = 2; m.userData.water = true; }
  // Lines over the real land: the outer wall, 50 stadia out (117e), and the canal's course to the sea (115d).
  const g = Math.asin(Math.min(1, canalHalf / rWall)) * 3;
  const wall = new THREE.Mesh(new THREE.RingGeometry(rWall - 22, rWall + 22, 360, 1, -Math.PI / 2 + g, Math.PI * 2 - g * 2), mats.wallLine);
  wall.userData = { id: 'outer-wall', line: true };
  const course = new THREE.Mesh(new THREE.PlaneGeometry(canalHalf * 2, rWall - edge), mats.canalLine);
  course.position.set(0, -(edge + rWall) / 2, 0);
  course.userData = { id: 'canal', line: true };
  for (const m of [wall, course]) { m.renderOrder = 5; m.position.z = B; out.push(m); }
  return out;
};
