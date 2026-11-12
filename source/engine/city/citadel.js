// The central island (Critias 116c-117b, 119c-d): the closed shrine of Cleito and Poseidon inside its wall of gold,
// Poseidon's temple in silver with gold pinnacles and everything the text puts inside it, the statues and offerings
// round it, the altar, the palace, the two springs with their basins and baths, the grove, the guards' dwellings.
import { S, TINT } from './surfaces.js';
import { TAU, rnd } from './kit.js';
import { column, colonnade, gableRoof, hall, stoa, court, figure, statue, door, mulTint } from './forms.js';
import { buildHall } from './hall.js';

const DEG = Math.PI / 180;

// A horse with wings, smooth and plain, about `len` long, facing +X.
const wingedHorse = (g, x, y, z, len, rot, tint) => {
  const saved = g.F.push(x, y, z, rot), L = len, bh = L * 0.5;   // bh: height of the body's centre
  g.surf(S.gilt, tint);
  const ring = (cx, cz, ry, rz, n = 8) => Array.from({ length: n }, (_, i) => { const a = (i / n) * TAU; return [cx, Math.cos(a) * ry, cz + Math.sin(a) * rz]; });
  g.loft([ring(-L * 0.36, bh, 0.02, 0.02), ring(-L * 0.32, bh, L * 0.1, L * 0.12), ring(-L * 0.1, bh - L * 0.01, L * 0.105, L * 0.125), ring(L * 0.16, bh, L * 0.1, L * 0.13), ring(L * 0.27, bh + L * 0.05, L * 0.07, L * 0.11), ring(L * 0.36, bh + L * 0.2, L * 0.05, L * 0.075), ring(L * 0.42, bh + L * 0.33, L * 0.04, L * 0.055), ring(L * 0.52, bh + L * 0.3, L * 0.028, L * 0.04), ring(L * 0.6, bh + L * 0.25, L * 0.02, L * 0.03)], { closed: true });
  for (const [lx, ly, fwd] of [[-L * 0.26, -1, 0], [-L * 0.26, 1, 0], [L * 0.18, -1, 1], [L * 0.18, 1, 1]]) g.shaft(lx + (fwd && ly > 0 ? L * 0.06 : 0), ly * L * 0.07, fwd && ly > 0 ? L * 0.12 : 0, L * 0.022, L * 0.04, bh - L * 0.08 - (fwd && ly > 0 ? L * 0.12 : 0), 5);
  for (const sy of [-1, 1]) {   // a wing: two blades swept up and back
    g.quad([L * 0.14, sy * L * 0.09, bh + L * 0.08], [-L * 0.1, sy * L * 0.1, bh + L * 0.06], [-L * 0.42, sy * L * 0.34, bh + L * 0.5], [-L * 0.05, sy * L * 0.3, bh + L * 0.42]);
    g.quad([-L * 0.05, sy * L * 0.3, bh + L * 0.42], [-L * 0.42, sy * L * 0.34, bh + L * 0.5], [-L * 0.62, sy * L * 0.5, bh + L * 0.74], [-L * 0.2, sy * L * 0.46, bh + L * 0.6]);
  }
  g.F.pop(saved);
};
// A leaping dolphin with a rider: one of the hundred Nereids.
const nereid = (g, x, y, z, rot, tint) => {
  const saved = g.F.push(x, y, z, rot), L = 3.6;
  g.surf(S.gilt, tint);
  const ring = (t, r, n = 6) => { const cx = (t - 0.5) * L, cz = 1.0 + Math.sin(t * Math.PI) * 0.9; return Array.from({ length: n }, (_, i) => { const a = (i / n) * TAU; return [cx, Math.cos(a) * r * 0.8, cz + Math.sin(a) * r]; }); };
  g.loft([ring(0, 0.03), ring(0.12, 0.2), ring(0.4, 0.42), ring(0.62, 0.4), ring(0.85, 0.2), ring(1, 0.04)], { closed: true });
  g.tri([-L * 0.5, -0.6, 1.0], [-L * 0.5, 0.6, 1.0], [-L * 0.38, 0, 1.3]);            // the tail
  g.tri([L * 0.02, 0, 2.25], [L * 0.2, 0, 2.2], [L * 0.02, 0, 2.75]);                 // the fin
  figure(g, -0.15, 0, 2.0, 2.5, 0, { n: 6, tint });
  g.F.pop(saved);
};

export const buildCitadel = (M, plan, tier) => {
  const { B, Zp, Rp, Rs, rA, T, S: stadion, P, k, off, bridgeHalf, SEA, roadAngle, zSlopeTop, zSlopeFoot, islandZ } = plan;
  const r = rnd(1160), trees = [], pools = [];
  const polar = (rad, deg) => [rad * Math.cos(deg * DEG), rad * Math.sin(deg * DEG)];

  // ===== the shrine of Cleito and Poseidon, kept closed, and its wall of gold (116c) =====
  // The text keeps it closed and says nothing of its inside. Here it stands open, as this community's hall (hall.js).
  const hallPlan = buildHall(M, plan, tier);

  // ===== Poseidon's temple (116d-e, 119c-d) =====
  const L = P.templeLength * stadion, W = P.templeWidth * stadion, tx = -45 * k, ty = -135 * k;
  const temple = M.to('temple'), roofBin = M.to('temple#roof'), inside = M.to('temple-interior'), ceiling = M.to('temple-ceiling#roof'), pin = M.to('pinnacles#roof');
  const stepH = 0.9, steps = 4, zs = steps * stepH, hc = W * 0.325, he = W * 0.076, rc = W * 0.0185, rise = W * 0.14;
  const F = temple.F, saved = F.push(tx, ty, Zp, 0);   // every bin shares the one frame
  {
    // the stepped base, in the three stones
    const tones = [TINT.black, TINT.white, TINT.red, TINT.white];
    for (let i = 0; i < steps; i++) temple.surf(S.smooth, tones[i]).box(0, 0, i * stepH, L + (steps - 1 - i) * 3.4, W + (steps - 1 - i) * 3.4, stepH, 0, { foot: 0.78, topShade: 0.86 });
    // the colonnade all round, in silver
    const nw = 11, nl = 22, ins = rc * 1.7, silver = { n: tier.phone ? 10 : 16, surf: S.metal, tint: TINT.silver };
    for (const sy of [-1, 1]) colonnade(temple, -L / 2 + ins, sy * (W / 2 - ins), L / 2 - ins, sy * (W / 2 - ins), zs, nl, rc, hc, silver);
    for (const sx of [-1, 1]) colonnade(temple, sx * (L / 2 - ins), -W / 2 + ins + (W - 2 * ins) / (nw - 1), sx * (L / 2 - ins), W / 2 - ins - (W - 2 * ins) / (nw - 1), zs, nw - 2, rc, hc, silver);
    // the beam over the columns: three bands, the middle one with a line of gold. It is a ring, not a lid: with the
    // roof lifted (cutaway) the room inside is seen from above.
    const ze = zs + hc, bw = ins * 2, ia = (L - 0.6) / 2 - bw, ib = (W - 0.6) / 2 - bw;
    const ring = (z, oa, ob, qa, qb, shade, up = true) => {
      const O = [[-oa, -ob], [oa, -ob], [oa, ob], [-oa, ob]], I = [[-qa, -qb], [qa, -qb], [qa, qb], [-qa, qb]];
      for (let i = 0; i < 4; i++) { const j = (i + 1) % 4, a = [...O[i], z], b = [...O[j], z], c = [...I[j], z], d = [...I[i], z]; if (up) temple.quad(a, b, c, d, shade); else temple.quad(d, c, b, a, shade); }
    };
    temple.surf(S.metal, TINT.silver).box(0, 0, ze, L - 0.6, W - 0.6, he * 0.4, 0, { foot: 0.75, top: false });
    ring(ze, (L - 0.6) / 2, (W - 0.6) / 2, ia, ib, 0.6, false);
    temple.surf(S.metal, mulTint(TINT.silver, 0.9)).box(0, 0, ze + he * 0.4, L - 0.2, W - 0.2, he * 0.38, 0, { top: false, foot: 0.9 });
    temple.surf(S.gilt, TINT.gold).box(0, 0, ze + he * 0.4, L - 0.1, W - 0.1, he * 0.07, 0, { top: false });
    temple.surf(S.metal, TINT.silver).box(0, 0, ze + he * 0.78, L + 1.6, W + 1.6, he * 0.22, 0, { foot: 0.7, top: false });
    ring(ze + he, (L + 1.6) / 2, (W + 1.6) / 2, ia, ib, 0.9);
    temple.surf(S.metal, mulTint(TINT.silver, 0.8));   // the beam's inner faces
    temple.wall(ia, -ib, -ia, -ib, ze, ze + he, 0.6, 0.75); temple.wall(-ia, ib, ia, ib, ze, ze + he, 0.6, 0.75); temple.wall(-ia, -ib, -ia, ib, ze, ze + he, 0.6, 0.75); temple.wall(ia, ib, ia, -ib, ze, ze + he, 0.6, 0.75);
    // the room inside the colonnade: silver without, orichalcum within
    const cl = L - 30 * k, cw = W - 30 * k, tw = 2.2, dw = 9, dh = hc * 0.66;
    temple.surf(S.metal, TINT.silver);
    temple.wall(-cl / 2, -cw / 2, cl / 2, -cw / 2, zs, ze, 0.72, 0.9); temple.wall(cl / 2, cw / 2, -cl / 2, cw / 2, zs, ze, 0.72, 0.9); temple.wall(-cl / 2, cw / 2, -cl / 2, -cw / 2, zs, ze, 0.72, 0.9);
    temple.wall(cl / 2, -cw / 2, cl / 2, -dw / 2, zs, ze, 0.72, 0.9); temple.wall(cl / 2, dw / 2, cl / 2, cw / 2, zs, ze, 0.72, 0.9); temple.wall(cl / 2, -dw / 2, cl / 2, dw / 2, zs + dh, ze, 0.8, 0.9);
    temple.surf(S.gilt, TINT.gold);   // the door's frame, and its two leaves standing open
    temple.box(cl / 2 + 0.2, -dw / 2 - 0.6, zs, 0.6, 1.2, dh + 1.2, 0, { foot: 0.8 }); temple.box(cl / 2 + 0.2, dw / 2 + 0.6, zs, 0.6, 1.2, dh + 1.2, 0, { foot: 0.8 }); temple.box(cl / 2 + 0.2, 0, zs + dh, 0.6, dw + 2.4, 1.2, 0, { bottom: true });
    for (const sy of [-1, 1]) temple.surf(S.metal, TINT.silver).box(cl / 2 + dw / 4 + 0.3, sy * (dw / 2 + 0.25), zs, dw / 2, 0.35, dh, 0, { foot: 0.7 });
    const il = cl - tw * 2, iw = cw - tw * 2, ori = TINT.orichalcum;
    ring(ze, cl / 2, cw / 2, il / 2, iw / 2, 0.85);   // the top of the room's wall
    inside.surf(S.metal, ori);
    inside.wall(il / 2, -iw / 2, -il / 2, -iw / 2, zs, ze, 0.6, 0.85); inside.wall(-il / 2, iw / 2, il / 2, iw / 2, zs, ze, 0.6, 0.85); inside.wall(-il / 2, -iw / 2, -il / 2, iw / 2, zs, ze, 0.6, 0.85);
    inside.wall(il / 2, -dw / 2, il / 2, -iw / 2, zs, ze, 0.6, 0.85); inside.wall(il / 2, iw / 2, il / 2, dw / 2, zs, ze, 0.6, 0.85); inside.wall(il / 2, dw / 2, il / 2, -dw / 2, zs + dh, ze, 0.7, 0.85);
    for (const sy of [-1, 1]) { inside.wall(il / 2, sy * dw / 2, cl / 2, sy * dw / 2, zs, zs + dh, 0.7); }
    inside.surf(S.metal, mulTint(ori, 0.92)).slab(0, 0, zs + 0.04, il, iw, 0, 0.8);
    temple.surf(S.smooth, TINT.white).slab(0, 0, zs + 0.02, L - 0.2, W - 0.2, 0, 0.82);
    // two rows of pillars, covered with orichalcum
    const np = 14, py = iw * 0.27;
    for (const sy of [-1, 1]) colonnade(inside, -il / 2 + 9, sy * py, il / 2 - 9, sy * py, zs, np, 1.45, hc, { n: tier.phone ? 8 : 12, surf: S.metal, tint: ori, shade: 0.85 });

    // the ceiling: ivory, picked out in gold, silver and orichalcum (116d). It lifts with the roof.
    const zc = ze - 0.05, cx = 26, cy = 10, pw = il / cx, ph = iw / cy, metals = [TINT.gold, TINT.silver, ori];
    ceiling.surf(S.ivory, TINT.ivory).quad([-il / 2, iw / 2, zc], [il / 2, iw / 2, zc], [il / 2, -iw / 2, zc], [-il / 2, -iw / 2, zc], 0.8);
    for (let i = 0; i < cx; i++) for (let j = 0; j < cy; j++) {
      const x = -il / 2 + (i + 0.5) * pw, y = -iw / 2 + (j + 0.5) * ph, m = metals[(i + j * 2) % 3], s = 0.3;
      ceiling.surf(S.gilt, m).quad([x - pw * s, y + ph * s, zc - 0.12], [x + pw * s, y + ph * s, zc - 0.12], [x + pw * s, y - ph * s, zc - 0.12], [x - pw * s, y - ph * s, zc - 0.12], 0.9);
    }
    // the ceiling of the walk between the columns and the room
    roofBin.surf(S.metal, mulTint(TINT.silver, 0.8)).quad([-L / 2, W / 2, ze + he * 0.3], [L / 2, W / 2, ze + he * 0.3], [L / 2, -W / 2, ze + he * 0.3], [-L / 2, -W / 2, ze + he * 0.3], 0.5);
    // the roof, in silver sheets, and the gables
    const zr = ze + he, hw = L / 2 + 1.2, hd = W / 2 + 1.6, z1 = zr + rise;
    roofBin.surf(S.metal, mulTint(TINT.silver, 0.95));
    roofBin.quad([-hw, -hd, zr], [hw, -hd, zr], [hw, 0, z1], [-hw, 0, z1], 0.92, 0.92, 1, 1); roofBin.quad([hw, hd, zr], [-hw, hd, zr], [-hw, 0, z1], [hw, 0, z1], 0.92, 0.92, 1, 1);
    const ribs = tier.phone ? 0 : 46;
    for (let i = 0; ribs && i <= ribs; i++) { const x = -hw + (2 * hw * i) / ribs; for (const sy of [-1, 1]) roofBin.quad([x - 0.25, sy * hd, zr + 0.25], [x + 0.25, sy * hd, zr + 0.25], [x + 0.25, 0, z1 + 0.25], [x - 0.25, 0, z1 + 0.25], 1); }
    for (const sx of [-1, 1]) {
      const X = sx * (L / 2 - 0.4);
      // the gables stand on the roof and lift with it
      roofBin.surf(S.metal, TINT.silver);
      if (sx > 0) roofBin.tri([X, -W / 2, zr], [X, W / 2, zr], [X, 0, z1 - 0.3], 0.8, 0.8, 0.95); else roofBin.tri([X, W / 2, zr], [X, -W / 2, zr], [X, 0, z1 - 0.3], 0.8, 0.8, 0.95);
      // a sun-disc of gold in each gable: the foreign note the text asks for
      roofBin.surf(S.gilt, TINT.gold);
      const R0 = rise * 0.3, n = 20;
      for (let i = 0; i < n; i++) { const a = (i / n) * TAU, b = ((i + 1) / n) * TAU, P0 = [X + sx * 0.25, 0, zr + rise * 0.4], P1 = [X + sx * 0.25, Math.cos(a) * R0, zr + rise * 0.4 + Math.sin(a) * R0], P2 = [X + sx * 0.25, Math.cos(b) * R0, zr + rise * 0.4 + Math.sin(b) * R0]; if (sx > 0) roofBin.tri(P0, P1, P2); else roofBin.tri(P0, P2, P1); }
    }
    // the pinnacles, coated with gold (116d): tall finials on the gable tops and corners, a crest along the ridge
    const finial = (x, y, z, h) => pin.surf(S.gilt, TINT.gold).turned(x, y, z, [[h * 0.1, 0], [h * 0.13, h * 0.08], [h * 0.05, h * 0.2], [h * 0.16, h * 0.45], [h * 0.19, h * 0.58], [h * 0.07, h * 0.78], [h * 0.03, h * 0.9], [0, h]], 8);
    for (const sx of [-1, 1]) { finial(sx * hw, 0, z1, 9.5); for (const sy of [-1, 1]) finial(sx * hw, sy * hd, zr, 6.5); }
    const crest = tier.phone ? 12 : 44;
    for (let i = 1; i < crest; i++) pin.surf(S.gilt, TINT.gold).shaft(-hw + (2 * hw * i) / crest, 0, z1, 0.5, 0.05, 2.6, 4);
    for (let i = 0; i <= (tier.phone ? 0 : 44); i++) for (const sy of [-1, 1]) pin.shaft(-hw + (2 * hw * i) / 44, sy * hd, zr, 0.45, 0.05, 1.5, 4);

    // ----- inside: Poseidon in his chariot behind six winged horses, his head at the roof (116d-e) -----
    const pos = M.to('poseidon'), cxp = -il / 2 + 34;
    pos.surf(S.gilt, TINT.gold).box(cxp - 6, 0, zs, 30, 22, 1.2, 0, { foot: 0.7, topShade: 0.8 });
    pos.box(cxp - 9, 0, zs + 3.4, 9, 7, 2.6, 0, { bottom: true, foot: 0.8 });                       // the car
    for (const sy of [-1, 1]) { const f = pos.F.push(cxp - 9, sy * 4.2, zs + 4.0, 0); for (let i = 0; i < 14; i++) { const a = (i / 14) * TAU, b = ((i + 1) / 14) * TAU; pos.tri([0, 0, 0], [Math.cos(a) * 2.8, 0, Math.sin(a) * 2.8], [Math.cos(b) * 2.8, 0, Math.sin(b) * 2.8]); } pos.F.pop(f); }
    figure(pos, cxp - 9, 0, zs + 6.0, hc - 6.3, -Math.PI / 2, { n: 12, arm: true });
    for (let i = 0; i < 6; i++) wingedHorse(pos, cxp + 8 + (i % 2) * 2.5, (i - 2.5) * 3.9, zs + 1.2, 10.5, 0, TINT.gold);
    // the hundred Nereids on dolphins (116e): two rows down each side, the rest before the chariot
    const ner = M.to('nereids');
    let count = 0;
    for (let i = 0; i < 22 && count < 100; i++) for (const [yy, face] of [[py - 5.4, 1], [py + 5.4, -1], [-py + 5.4, -1], [-py - 5.4, 1]]) { if (count >= 88) break; const x = -il / 2 + 12 + (i * (il - 30)) / 21; ner.surf(S.metal, ori).box(x, yy, zs, 2.4, 1.6, 1.3, 0, { foot: 0.6 }); nereid(ner, x, yy, zs + 0.9, face > 0 ? 0 : Math.PI, TINT.gold); count++; }
    for (let i = 0; count < 100; i++, count++) { const a = (-0.42 + (0.84 * i) / 11) * Math.PI, x = cxp + 30 + Math.cos(a) * 9, y = Math.sin(a) * 15; ner.surf(S.metal, ori).box(x, y, zs, 2.4, 1.6, 1.3, a, { foot: 0.6 }); nereid(ner, x, y, zs + 0.9, a, TINT.gold); }
    // other statues, the offerings of private men (116e)
    const vin = M.to('votive-inside');
    for (let i = 0; i < 24; i++) { const x = -il / 2 + 14 + ((il - 60) * (i >> 1)) / 11.5 + 4, sy = i % 2 ? 1 : -1; statue(vin, x, sy * (iw / 2 - 2.6), zs, 3.2 + r() * 1.4, sy > 0 ? -Math.PI / 2 : Math.PI / 2, { plinth: [S.metal, ori], tint: i % 3 ? TINT.gold : TINT.silver }); }
    // the pillar of orichalcum with the laws (119c-d)
    const pil = M.to('pillar');
    pil.surf(S.metal, ori).box(il / 2 - 52, 0, zs, 4.2, 4.2, 0.9, 0, { foot: 0.7 }); pil.box(il / 2 - 52, 0, zs + 0.9, 2.2, 1.0, 7.5, 0, { foot: 0.85 }); pil.box(il / 2 - 52, 0, zs + 8.4, 2.6, 1.3, 0.5, 0, { bottom: true });
  }
  F.pop(saved);
  const zTop = Zp + zs + hc + he + rise;

  // ===== round the temple: the kings and their wives in gold (116e), and other offerings =====
  const st = M.to('statues'), vo = M.to('votive-outside');
  {
    const ex = L / 2 + 15, ey = W / 2 + 15, per = 2 * (2 * ex + 2 * ey), n = 60;
    for (let i = 0; i < n; i++) {
      let d = ((i + 0.5) / n) * per, x, y, rot;
      if (d < 2 * ex) { x = -ex + d; y = -ey; rot = -Math.PI / 2; } else if ((d -= 2 * ex) < 2 * ey) { x = ex; y = -ey + d; rot = 0; } else if ((d -= 2 * ey) < 2 * ex) { x = ex - d; y = ey; rot = Math.PI / 2; } else { d -= 2 * ex; x = -ex; y = ey - d; rot = Math.PI; }
      if (x === ex && Math.abs(y) < 9) continue;   // the way in
      statue(st, tx + x, ty + y, Zp, 4.4, rot + Math.PI / 2, { plinth: [S.smooth, i % 2 ? TINT.white : TINT.red] });
    }
    // offerings: figures on columns, slabs, great bowls on stands
    for (let i = 0; i < 38; i++) {
      const side = i % 2 ? 1 : -1, x = off + side * (bridgeHalf + 4 + (i % 3) * 3.2), y = -plan.rampTop + 12 + (i >> 1) * 5.6, kind = i % 4, z = Zp;
      if (Math.hypot(x, y) > Rp - 6) continue;
      if (kind === 0) { column(vo, x, y, z, 0.42, 5.2, { n: 8, tint: TINT.white }); figure(vo, x, y, z + 5.2, 2.2, -Math.PI / 2, { n: 6, tint: TINT.gold }); }
      else if (kind === 1) { vo.surf(S.smooth, TINT.white).box(x, y, z, 1.5, 0.9, 0.4, 0); vo.surf(S.smooth, i % 3 ? TINT.white : TINT.black).box(x, y, z + 0.4, 1.0, 0.32, 2.7, 0, { foot: 0.85 }); }
      else if (kind === 2) { vo.surf(S.gilt, i % 3 ? TINT.brass : TINT.silver).turned(x, y, z, [[0.5, 0], [0.16, 0.25], [0.12, 1.1], [0.3, 1.25], [0.85, 1.75], [0.9, 1.85], [0.0, 1.6]], 8); }
      else statue(vo, x, y, z, 2.6, -Math.PI / 2 * side, { tint: i % 3 ? TINT.gold : TINT.brass });
    }
  }
  // ===== the altar (116e-117a): long, stepped, before the east front =====
  const altar = M.to('altar'), ax = tx + L / 2 + 34 * k, ay = ty;
  for (let i = 0; i < 3; i++) altar.surf(S.smooth, [TINT.white, TINT.red, TINT.white][i]).box(ax, ay, Zp + i * 0.5, 15 - i * 2.2, 50 - i * 2.2, 0.5, 0, { foot: 0.8, topShade: 0.88 });
  altar.surf(S.stoneCourses, TINT.white).box(ax, ay, Zp + 1.5, 6.5, 42, 3.1, 0, { foot: 0.8 });
  altar.surf(S.smooth, TINT.white).box(ax, ay, Zp + 4.6, 7.6, 43.2, 0.55, 0, { bottom: true, foot: 0.8, topShade: 0.9 });
  for (const sy of [-1, 1]) altar.surf(S.smooth, TINT.white).box(ax, ay + sy * 21.2, Zp + 5.15, 7.6, 0.9, 1.3, 0, { foot: 0.9 });
  altar.surf(S.gilt, TINT.gold).box(ax, ay, Zp + 1.6, 6.7, 42.2, 0.3, 0, { top: false });

  // ===== the palace (115c-d, 117a): ranges round courts, north of the shrine =====
  const pal = M.to('palace');
  const bands = [S.stoneBands, TINT.white], cheq = [S.stoneChequer, TINT.white], white = [S.stone, TINT.white], red = [S.stone, TINT.red];
  const gold = TINT.gold;
  hall(pal, 0, 215 * k, Zp, 150, 22, 14, 0, { wall: bands, cornice: TINT.white, base: [S.stone, TINT.black], windows: 2, doors: [[0, -40], [0, 40]], tile: TINT.tile[1] });
  hall(pal, -86, 152 * k, Zp, 22, 104, 12, 0, { wall: white, cornice: TINT.red, base: [S.stone, TINT.red], windows: 2, doors: [[1, -30], [1, 30]], tile: TINT.tile[0] });
  hall(pal, 86, 152 * k, Zp, 22, 104, 12, 0, { wall: white, cornice: TINT.red, base: [S.stone, TINT.red], windows: 2, doors: [[3, -30], [3, 30]], tile: TINT.tile[0] });
  hall(pal, 0, 196 * k, Zp, 34, 18, 25, 0, { wall: cheq, roof: 'hip', cornice: gold, windows: 2, doors: [], tile: TINT.tile[2] });
  // the great hall, with a deep porch of columns and steps down to the court before the shrine
  hall(pal, 0, 148 * k, Zp + 1.2, 44, 64, 17, 0, { wall: bands, cornice: gold, base: [S.stone, TINT.black], windows: 0, doors: [], tile: TINT.tile[1], rise: 7 });
  pal.surf(S.smooth, TINT.white).box(0, 148 * k, Zp, 48, 68, 1.2, 0, { foot: 0.8 });
  pal.surf(S.smooth, TINT.white).box(0, 148 * k - 34 - 6, Zp, 44, 12, 1.2, 0, { foot: 0.8, topShade: 0.86 }); pal.box(0, 148 * k - 34 - 13.5, Zp, 40, 3, 0.8, 0, { foot: 0.8 }); pal.box(0, 148 * k - 34 - 16, Zp, 40, 2.5, 0.4, 0, { foot: 0.8 });
  colonnade(pal, -19.5, 148 * k - 34 - 10.5, 19.5, 148 * k - 34 - 10.5, Zp + 1.2, 6, 1.15, 14.6, { n: 14, tint: TINT.red });
  pal.surf(S.smooth, TINT.white).box(0, 148 * k - 34 - 6, Zp + 15.8, 44, 12, 1.4, 0, { bottom: true, foot: 0.75 });
  { const f = pal.F.push(0, 148 * k - 34 - 6, 0, 0); gableRoof(pal, 44, 12, Zp + 17.2, 7, { tile: TINT.tile[1], wall: [S.smooth, TINT.white], ridgeAlongY: true }); pal.F.pop(f); }
  door(pal, 44, 64, 0, 0, 0, { pw: 5, ph: 9, leaf: TINT.brass }); { const f = pal.F.push(0, 148 * k, Zp + 1.2, 0); door(pal, 44, 64, 0, 0, 0, { pw: 5, ph: 9.5, leaf: TINT.brass, frame: gold }); pal.F.pop(f); }
  for (const sx of [-1, 1]) { stoa(pal, sx * 71, 150 * k, Zp, 96, 7, 6.2, sx > 0 ? Math.PI / 2 : -Math.PI / 2, { wall: white, colTint: TINT.red, r: 0.42, simple: false }); pal.surf(S.gilt, gold).shaft(sx * 86, 152 * k, Zp + 12 + 4.6, 0.5, 0.04, 3, 6); }
  hall(pal, -150, 62 * k, Zp, 20, 66, 10, -0.5, { wall: red, cornice: TINT.white, base: [S.stone, TINT.black], windows: 2, doors: [[1, 0]], tile: TINT.tile[3] });
  hall(pal, 160, 66 * k, Zp, 20, 60, 10, 0.45, { wall: [S.stoneCourses, TINT.white], cornice: TINT.white, windows: 2, doors: [[3, 0]], tile: TINT.tile[3] });
  hall(pal, -205, 150 * k, Zp, 18, 50, 8, -0.95, { wall: white, windows: 1, doors: [[1, 0]], tile: TINT.tile[0] });
  hall(pal, 205, 150 * k, Zp, 18, 50, 8, 0.95, { wall: white, windows: 1, doors: [[3, 0]], tile: TINT.tile[0] });
  for (const sx of [-1, 1]) for (let i = 0; i < 7; i++) trees.push({ x: sx * 40, y: 108 * k + i * 12, z: Zp, s: 7 + r() * 2, kind: 'cypress', id: 'palace' });

  // ===== the dwellings of the most trusted guards, within the acropolis round the kings (117d) =====
  const gd = M.to('guard-dwellings');
  for (let i = 0; i < 16; i++) { const a = 196 + i * 6.6, [x, y] = polar(Rs + 50 * k, a); if (i % 5 === 4) continue; hall(gd, x, y, B, 15, 9, 4.4 + (i % 3) * 0.6, a * DEG + Math.PI / 2, { wall: [S.plaster, TINT.plaster[i % 6]], windows: 1, doors: [[0, -3]], tile: TINT.tile[i % 4], base: [S.stone, TINT.white] }); }

  // ===== the two springs, their basins and the baths (113e, 117a-b) =====
  const sp = M.to('springs'), res = M.to('reservoirs'), baths = M.to('baths'), rb = (Rs + 26 + rA - T) / 2 + 2;
  const tholos = (g, x, y, tint) => {
    g.surf(S.smooth, TINT.white).shaft(x, y, B, 8.6, 8.6, 0.5, 20, { cap: true, foot: 0.8, head: 0.85 });
    for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU; column(g, x + Math.cos(a) * 7.4, y + Math.sin(a) * 7.4, B + 0.5, 0.42, 5.6, { n: 8, tint }); }
    g.surf(S.smooth, TINT.white).shaft(x, y, B + 6.1, 8.2, 8.2, 0.7, 20, { foot: 0.75 });
    g.surf(S.tiles, TINT.tile[1]).shaft(x, y, B + 6.8, 8.9, 0.3, 4.2, 20, { foot: 0.9, head: 1 });
    g.surf(S.gilt, TINT.gold).shaft(x, y, B + 10.9, 0.35, 0.03, 1.6, 6);
    g.surf(S.smooth, TINT.white).shaft(x, y, B + 0.5, 4.4, 4.4, 0.8, 16, { foot: 0.8 }); g.shaft(x, y, B + 0.5, 3.8, 3.8, 0.8, 16, { foot: 0.6 });
    pools.push({ x, y, z: B + 1.1, r: 3.8, id: 'springs' });
  };
  const [hx, hy] = polar(rb, 36), [kx, ky] = polar(rb, 58);
  tholos(sp, hx, hy, TINT.red); tholos(sp, kx, ky, TINT.white);
  const pool = (g, deg, w, d, id) => { const [x, y] = polar(rb, deg), rot = deg * DEG + Math.PI / 2; const f = g.F.push(x, y, B, rot); g.surf(S.smooth, TINT.white); for (const [dx, dy, ww, dd] of [[0, -d / 2, w + 1.6, 0.8], [0, d / 2, w + 1.6, 0.8], [-w / 2, 0, 0.8, d], [w / 2, 0, 0.8, d]]) g.box(dx, dy, 0, ww, dd, 0.8, 0, { foot: 0.8, topShade: 0.9 }); g.surf(S.paving, TINT.white).slab(0, 0, 0.05, w + 5, d + 5, 0, 0.85); g.F.pop(f); pools.push({ x, y, z: B + 0.6, w, d, rot, id }); };
  pool(res, 47, 26, 15, 'reservoirs'); pool(res, 26, 22, 14, 'reservoirs');
  for (const deg of [20, 64]) { const [x, y] = polar(rb + 3, deg); hall(res, x, y, B, 30, 15, 6.5, deg * DEG + Math.PI / 2, { wall: [S.stoneCourses, TINT.white], windows: 0, doors: [[0, 0]], tile: TINT.tile[2], cornice: TINT.white }); }
  const bath = (deg, w, d, h, wall, tile) => { const [x, y] = polar(rb, deg); court(baths, x, y, B, w, d, h, deg * DEG + Math.PI / 2, { depth: 6, wall, tile, floor: [S.paving, TINT.white] }); pools.push({ x, y, z: B + 0.35, w: w - 22, d: d - 20, rot: deg * DEG + Math.PI / 2, id: 'baths' }); };
  bath(73, 40, 34, 5.2, [S.stoneBands, TINT.white], TINT.tile[1]);     // the kings'
  bath(84, 54, 38, 4.8, [S.stone, TINT.white], TINT.tile[0]);          // the citizens'
  bath(96, 36, 32, 4.6, [S.stone, TINT.red], TINT.tile[3]);            // the women's
  { const [x, y] = polar(rb, 9); stoa(baths, x, y, B, 46, 9, 4.6, 9 * DEG - Math.PI / 2, { wall: [S.stone, TINT.black], cols: 10 }); const [px, py] = polar(rb - 13, 9); pool(baths, 9, 0.01, 0.01, 'baths'); pools.pop(); pools.push({ x: px, y: py, z: B + 0.3, w: 40, d: 9, rot: 9 * DEG + Math.PI / 2, id: 'baths' }); baths.surf(S.smooth, TINT.white).box(px, py, B, 42, 11, 0.5, 9 * DEG + Math.PI / 2, { foot: 0.8, topShade: 0.85 }); }   // for horses and beasts of burden
  // the channel that takes the outflow to the grove and to the bridge (117b)
  const ch = M.to('aqueducts'), rch = Rs + 30 * k, a0 = roadAngle(rch) + 0.06, a1 = 205 * DEG;
  ch.surf(S.smooth, TINT.white).sweep([[rch + 1.1, B, 0.8], [rch + 1.1, B + 0.45], [rch + 0.7, B + 0.45], [rch + 0.7, B + 0.1, 0.6], [rch - 0.7, B + 0.1, 0.6], [rch - 0.7, B + 0.45], [rch - 1.1, B + 0.45], [rch - 1.1, B, 0.8]], { arcs: [[a0, a1]], step: 6 });
  pools.push({ arc: [a0, a1], r0: rch - 0.7, r1: rch + 0.7, z: B + 0.34, id: 'aqueducts' });

  // ===== trees: round the springs, the sacred grove (117b), and food-bearing trees on the slope (113e) =====
  for (let i = 0; i < 46; i++) { const deg = 12 + r() * 92, [x, y] = polar(Rs + 30 + r() * (rA - T - Rs - 36), deg); trees.push({ x, y, z: B, s: 7 + r() * 5, kind: i % 3 ? 'plane' : 'cypress', id: 'springs', soft: true }); }
  const groveN = tier.phone ? 260 : 520;
  for (let i = 0; i < groveN; i++) { const deg = 104 + r() * 86, rr = Rs + 32 + r() * (rA - T - Rs - 38), [x, y] = polar(rr, deg); trees.push({ x, y, z: B, s: 13 + r() * 13, kind: ['cypress', 'plane', 'pine', 'plane'][i % 4], id: 'grove' }); }
  const slopeN = tier.phone ? 300 : 620;
  for (let i = 0; i < slopeN; i++) {
    const a = r() * TAU, rr = Rp + 7 + (Math.floor(r() * 6) / 6) * (Rs - Rp - 14) + r() * 2;
    if (Math.abs(Math.atan2(Math.sin(a - roadAngle(rr)), Math.cos(a - roadAngle(rr)))) < (bridgeHalf + 6) / rr) continue;
    trees.push({ x: rr * Math.cos(a), y: rr * Math.sin(a), z: islandZ(rr), s: 3.2 + r() * 2.6, kind: i % 3 ? 'olive' : 'fruit', id: 'island-gardens' });
  }
  return { trees, pools, hall: hallPlan, temple: { x: tx, y: ty, z: Zp, L, W, top: zTop, floor: Zp + zs, room: { l: L - 30 * k, w: W - 30 * k, door: 9 } }, altar: { x: ax, y: ay }, springs: [[hx, hy], [kx, ky]] };
};
