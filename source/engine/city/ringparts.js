// What stands on the two rings of land (Critias 117c-d): temples, gardens, exercise grounds for men and for horses,
// the racecourse round the larger ring with barracks on both sides, the guard house on the smaller ring, and the
// ship sheds along the inner harbours (117d).
import { S, TINT } from './surfaces.js';
import { TAU, rnd } from './kit.js';
import { hall, stoa, shrine, court, tower, mulTint, column } from './forms.js';

export const buildRings = (M, plan, tier) => {
  const { B, Q, T, rW1, rL1, rW2, r1a, r1b, r2a, r2b, rcMid, rcHalf, off, bridgeHalf, SEA, roadAngle, k, rL2, rT, rW3, strip } = plan;
  const r = rnd(1170), trees = [], hulls = [];
  const step = tier.phone ? 14 : 8;
  const temples = M.to('ring-temples'), gyms = M.to('gymnasia'), horses = M.to('horse-grounds'), gardens = M.to('gardens'), patterned = M.to('patterned-buildings'), layout = M.to('ring-layout');
  const nearRoad = (rad, a, margin) => { const x = rad * Math.cos(a), y = rad * Math.sin(a); return y < 0 && Math.abs(x - off) < bridgeHalf + margin; };
  const pick = (list) => list[(r() * list.length) | 0];

  // ----- what a lot can hold. Each is drawn in a frame whose -Y side faces the street. w: along the street, d: deep -----
  const lots = {
    temple: (x, y, rot, w, d) => {
      const g = temples, f = g.F.push(x, y, B, rot), pw = Math.min(w - 8, 78), pd = Math.min(d - 8, 84);
      // the precinct wall, with a gateway
      g.surf(S.stone, TINT.white);
      for (const [cx, cy, ww, dd] of [[0, pd / 2, pw, 0.8], [-pw / 2, 0, 0.8, pd], [pw / 2, 0, 0.8, pd], [-pw / 4 - 2, -pd / 2, pw / 2 - 4, 0.8], [pw / 4 + 2, -pd / 2, pw / 2 - 4, 0.8]]) g.box(cx, cy, 0, ww, dd, 2.1, 0, { foot: 0.78, topShade: 0.9 });
      for (const sx of [-1, 1]) g.surf(S.stone, TINT.red).box(sx * 4.6, -pd / 2, 0, 1.4, 1.4, 3.4, 0, { foot: 0.8 });
      const tw = 11 + r() * 7, style = (r() * 3) | 0;
      shrine(g, 0, pd * 0.12, 0, tw, tw * (1.9 + r() * 0.5), 0, { wall: [[S.stone, S.stoneBands, S.stoneCourses][style], TINT.white], colTint: style === 2 ? TINT.red : TINT.white, tile: pick(TINT.tile), cols: tw > 14 ? 6 : 4, finial: r() < 0.5 ? TINT.gold : null });
      g.surf(S.smooth, TINT.white).box(0, -pd * 0.3, 0, 5, 2.4, 1.3, 0, { foot: 0.8 });   // its altar
      g.surf(S.paving, TINT.white).slab(0, -pd * 0.2, 0.05, 7, pd * 0.5, 0, 0.9);
      g.F.pop(f);
      for (const sx of [-1, 1]) for (let i = 0; i < 5; i++) { const lx = sx * (pw / 2 - 5), ly = -pd / 2 + 8 + i * ((pd - 16) / 4), c = Math.cos(rot), s = Math.sin(rot); trees.push({ x: x + c * lx - s * ly, y: y + s * lx + c * ly, z: B, s: 9 + r() * 4, kind: 'cypress', id: 'ring-temples' }); }
    },
    gym: (x, y, rot, w, d) => {
      const cw = Math.min(w - 10, 74), cd = Math.min(d - 12, 62);
      court(gyms, x, y, B, cw, cd, 4.8, rot, { depth: 6, wall: [S.stone, pick([TINT.white, TINT.white, TINT.red])], tile: pick(TINT.tile) });
      const f = gyms.F.push(x, y, B, rot); for (let i = 0; i < 2; i++) gyms.surf(S.smooth, TINT.white).box((i ? 1 : -1) * 6, 0, 0.06, 1, 1, 1.5, 0, { foot: 0.8 }); gyms.F.pop(f);   // posts of the running track
    },
    horses: (x, y, rot, w, d) => {
      const g = horses, f = g.F.push(x, y, B, rot), pw = Math.min(w - 10, 88), pd = Math.min(d - 22, 58);
      g.surf(S.sand, TINT.sand).slab(0, -4, 0.07, pw, pd, 0, 0.95);
      g.surf(S.wood, TINT.wood);
      const rail = (x0, y0, x1, y1) => { const len = Math.hypot(x1 - x0, y1 - y0), a = Math.atan2(y1 - y0, x1 - x0); for (const z of [0.7, 1.25]) g.box((x0 + x1) / 2, (y0 + y1) / 2, z, len, 0.12, 0.16, a, { bottom: true }); const n = Math.round(len / 7); for (let i = 0; i <= n; i++) g.box(x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n, 0, 0.2, 0.2, 1.5, a, { foot: 0.7 }); };
      rail(-pw / 2, -4 - pd / 2, pw / 2, -4 - pd / 2); rail(pw / 2, -4 - pd / 2, pw / 2, -4 + pd / 2); rail(-pw / 2, -4 + pd / 2, -pw / 2, -4 - pd / 2);
      g.F.pop(f);
      const c = Math.cos(rot), s = Math.sin(rot), ly = -4 + pd / 2 + 6;
      stoa(g, x - s * ly, y + c * ly, B, pw, 8, 4.2, rot, { wall: [S.stone, TINT.white], tile: pick(TINT.tile), cols: Math.round(pw / 5.5), r: 0.3, simple: 'pier' });   // the stables
    },
    garden: (x, y, rot, w, d) => {
      const g = gardens, f = g.F.push(x, y, B, rot), gw = w - 12, gd = d - 12;
      g.surf(S.paving, TINT.white).slab(0, 0, 0.06, 3, gd, 0, 0.9); g.slab(0, 0, 0.065, gw, 3, 0, 0.9);
      g.surf(S.smooth, TINT.white).shaft(0, 0, 0, 3.4, 3.4, 0.7, 12, { cap: true, foot: 0.8, head: 0.55 });   // a basin where the paths cross
      g.surf(S.stone, TINT.white); for (const [cx, cy, ww, dd] of [[0, gd / 2, gw, 0.5], [0, -gd / 2, gw, 0.5], [-gw / 2, 0, 0.5, gd], [gw / 2, 0, 0.5, gd]]) g.box(cx, cy, 0, ww, dd, 0.9, 0, { foot: 0.8 });
      g.F.pop(f);
      const kind = pick(['olive', 'fruit', 'fruit', 'plane']), pitch = kind === 'plane' ? 15 : 11.5, c = Math.cos(rot), s = Math.sin(rot);
      for (let lx = -gw / 2 + 5; lx < gw / 2 - 3; lx += pitch) for (let ly = -gd / 2 + 5; ly < gd / 2 - 3; ly += pitch) {
        if (Math.abs(lx) < 4 || Math.abs(ly) < 4) continue;
        if (tier.phone && ((lx + ly) | 0) % 2) continue;
        trees.push({ x: x + c * lx - s * ly + (r() - 0.5), y: y + s * lx + c * ly + (r() - 0.5), z: B, s: (kind === 'plane' ? 9 : 4) + r() * 2.5, kind, id: 'gardens' });
      }
    },
    houses: (x, y, rot, w, d) => {
      const g = patterned, f = g.F.push(x, y, B, rot), n = 2 + ((r() * 3) | 0);
      for (let i = 0; i < n; i++) {
        const hw = 14 + r() * 12, hd = 9 + r() * 5, hh = 5 + r() * 5, hx = -w / 2 + 12 + ((w - 24) * (i + 0.5)) / n + (r() - 0.5) * 4, hy = (r() - 0.5) * (d - 40);
        hall(g, hx, hy, 0, Math.min(hw, (w - 16) / n), hd, hh, (r() < 0.3 ? Math.PI / 2 : 0), { wall: [pick([S.stoneBands, S.stoneChequer, S.stoneCourses, S.stone, S.stone]), pick([TINT.white, TINT.white, TINT.red, TINT.black])], cornice: TINT.white, tile: pick(TINT.tile), windows: 1, doors: [[0, 0]] });
      }
      g.F.pop(f);
      for (let i = 0; i < 4; i++) { const lx = (r() - 0.5) * (w - 14), ly = d / 2 - 8 - r() * 8, c = Math.cos(rot), s = Math.sin(rot); trees.push({ x: x + c * lx - s * ly, y: y + s * lx + c * ly, z: B, s: 6 + r() * 5, kind: pick(['plane', 'cypress', 'olive']), id: 'gardens' }); }
    },
  };
  // A band of lots between two radii, facing a street. face 1: the lots look outward, -1: inward.
  const band = (ra, rb, face, sequence, lotW = 104) => {
    const rm = (ra + rb) / 2, d = rb - ra, n = Math.floor((TAU * rm) / lotW), w = (TAU * rm) / n - 2;
    for (let i = 0; i < n; i++) {
      const a = SEA + ((i + 0.5) / n) * TAU;
      if (nearRoad(rm, a, w / 2 + 6)) continue;
      const kind = sequence[(i * 7 + ((r() * 2) | 0)) % sequence.length];
      lots[kind](rm * Math.cos(a), rm * Math.sin(a), face > 0 ? a + Math.PI / 2 : a - Math.PI / 2, Math.min(w, lotW), d);
    }
  };
  const street = (rad, w) => layout.surf(S.paving, [226, 220, 205]).sweep([[rad - w / 2, B + 0.05], [rad + w / 2, B + 0.05]], { step, sense: -1 });

  // ----- the smaller ring -----
  const a1 = r1a + T + 5, b1 = r1b - T - 5, m1 = (a1 + b1) / 2;
  street(m1, 9);
  const seq1 = ['temple', 'garden', 'gym', 'garden', 'houses', 'horses', 'temple', 'garden', 'houses'];
  band(a1, m1 - 6, 1, seq1); band(m1 + 6, b1, -1, seq1);
  // The guard house of the more trusted spearmen, by the road (117c-d): a walled court with towers at its corners.
  {
    const g = M.to('guard-house'), a = roadAngle(m1) + 0.2, x = (m1 + 10) * Math.cos(a), y = (m1 + 10) * Math.sin(a), f = g.F.push(x, y, B, a - Math.PI / 2), w = 96, d = 78;
    for (const [cx, cy, ww, dd, rot] of [[0, d / 2 - 6, w, 12, 0], [0, -d / 2 + 6, w, 12, 0], [-w / 2 + 6, 0, 12, d - 24, 0], [w / 2 - 6, 0, 12, d - 24, 0]]) hall(g, cx, cy, 0, ww, dd, 9, rot, { wall: [S.stoneBands, TINT.white], base: [S.stone, TINT.black], cornice: TINT.red, windows: 2, doors: [[cy > 0 ? 0 : 2, 0]], tile: TINT.tile[2] });
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) tower(g, sx * (w / 2 - 2), sy * (d / 2 - 2), 0, 9, 14, 0, { face: [S.stone, TINT.red], crown: [S.stone, TINT.white] });
    g.surf(S.sand, TINT.sand).slab(0, 0, 0.06, w - 24, d - 24, 0, 0.95);
    g.F.pop(f);
  }

  // ----- the larger ring: the racecourse in the middle (117c), barracks on both sides, the rest outside them -----
  const a2 = r2a + T + 5, b2 = r2b - T - 5, rc0 = rcMid - rcHalf, rc1 = rcMid + rcHalf;
  const course = M.to('racecourse'), form = M.to('racecourse-form'), barracks = M.to('barracks');
  course.surf(S.sand, TINT.sand).sweep([[rc0, B + 0.1], [rcMid, B + 0.1, 0.96], [rc1, B + 0.1]], { step, sense: -1 });
  for (const [rad, dir] of [[rc0, -1], [rc1, 1]]) form.surf(S.smooth, TINT.white).sweep([[rad - 0.5, B, 0.8], [rad - 0.5, B + 1.0], [rad + 0.5, B + 1.0], [rad + 0.5, B, 0.8]], { step, sense: 1 * (dir > 0 ? 1 : 1) });
  for (let i = 0; i < 48; i++) { const a = (i / 48) * TAU; if (nearRoad(rcMid, a, 30)) continue; column(form, rcMid * Math.cos(a), rcMid * Math.sin(a), B + 0.1, 0.7, 6.5, { n: 8, tint: i % 6 ? TINT.white : TINT.red }); if (i % 6 === 0) form.surf(S.gilt, TINT.gold).shaft(rcMid * Math.cos(a), rcMid * Math.sin(a), B + 6.6, 0.5, 0.05, 2, 6); }
  // stepped seats of stone on the outer side, either side of the road
  for (const da of [-0.13, -0.085, 0.085, 0.13]) { const a = roadAngle(rc1) + da, f = form.F.push((rc1 + 9) * Math.cos(a), (rc1 + 9) * Math.sin(a), B, a + Math.PI / 2); for (let i = 0; i < 6; i++) form.surf(S.smooth, TINT.white).box(0, -i * 1.3 + 3.3, 0, 60, 1.3, 0.6 + (5 - i) * 0.62, 0, { foot: 0.8, topShade: 0.88 }); form.F.pop(f); }
  const hutN = (rad) => Math.floor((TAU * rad) / 66);
  for (const [rad, face] of [[rc0 - 15, -1], [rc1 + 15, 1], [rc0 - 31, -1], [rc1 + 31, 1]]) {
    const n = hutN(rad);
    for (let i = 0; i < n; i++) {
      const a = SEA + ((i + 0.5) / n) * TAU;
      if (nearRoad(rad, a, 40) || (i % 9 === 4)) continue;
      hall(barracks, rad * Math.cos(a), rad * Math.sin(a), B, 56, 9.5, 4.6, face > 0 ? a - Math.PI / 2 : a + Math.PI / 2, { wall: [S.stone, i % 4 === 1 ? TINT.red : TINT.white], windows: 1, doors: [[0, -16], [0, 0], [0, 16]], tile: TINT.tile[i % 4], base: [S.stone, TINT.black], rise: 2.3 });
    }
  }
  street(rc0 - 45, 7); street(rc1 + 45, 7);
  const seq2 = ['garden', 'temple', 'gym', 'garden', 'horses', 'houses', 'garden', 'horses', 'temple', 'gym'];
  band(a2, rc0 - 50, 1, seq2); band(rc1 + 50, b2, -1, seq2);

  // ----- the ship sheds along the three inner harbour strips, and the hulls drawn up in them (117d) -----
  const sheds = M.to('ship-sheds'), sl = 40, sw = 7.4;
  const shed = (x, y, rot, endWall) => {
    const f = sheds.F.push(x, y, 0, rot), h = 4.3, hw = sw / 2, y0 = -sl / 2, y1 = sl / 2, zb = Q + 0.25;
    sheds.surf(S.paving, mulTint(TINT.white, 0.9)).quad([-hw, y0 - 7, -1.3], [hw, y0 - 7, -1.3], [hw, y1, zb + 1.2], [-hw, y1, zb + 1.2], 0.6, 0.6, 0.45, 0.45);
    sheds.surf(S.stone, TINT.white);
    // the wall between this shed and the next: a row of piers under a beam
    for (let i = 0; i < 5; i++) sheds.box(hw, y0 + 2 + i * ((sl - 4) / 4), Q, 0.7, 2.2, h, 0, { foot: 0.7 });
    sheds.box(hw, 0, Q + h, 0.7, sl, 0.5, 0, { bottom: true, foot: 0.7 });
    if (endWall) { for (let i = 0; i < 5; i++) sheds.box(-hw, y0 + 2 + i * ((sl - 4) / 4), Q, 0.7, 2.2, h, 0, { foot: 0.7 }); sheds.box(-hw, 0, Q + h, 0.7, sl, 0.5, 0, { bottom: true, foot: 0.7 }); }
    sheds.wall(hw, y1, -hw, y1, Q, Q + h + 0.5, 0.6, 0.8);
    const zr = Q + h + 0.5, z1 = zr + 1.9;
    sheds.surf(S.tiles, TINT.tile[(Math.abs(x * 7 + y * 3) | 0) % 4]);
    sheds.quad([-hw - 0.2, y0 - 0.6, zr], [0, y0 - 0.6, z1], [0, y1 + 0.3, z1], [-hw - 0.2, y1 + 0.3, zr], 0.95); sheds.quad([0, y0 - 0.6, z1], [hw + 0.2, y0 - 0.6, zr], [hw + 0.2, y1 + 0.3, zr], [0, y1 + 0.3, z1], 0.95);
    sheds.surf(S.wood, TINT.darkWood).tri([-hw, y0, zr], [hw, y0, zr], [0, y0, z1], 0.55); sheds.tri([hw, y1, zr], [-hw, y1, zr], [0, y1, z1], 0.7);
    sheds.F.pop(f);
  };
  for (const [rad, inner] of [[rW1, true], [rL1, false], [rW2, true]]) {
    const rc = inner ? rad + 1 + sl / 2 : rad - 1 - sl / 2, n = Math.floor((TAU * rc) / (sw + 0.7));
    for (let i = 0; i < n; i++) {
      const a = SEA + ((i + 0.5) / n) * TAU, grp = i % 14;
      if (grp >= 6 || Math.abs(Math.atan2(Math.sin(a - SEA), Math.cos(a - SEA))) < 34 / rc) continue;
      if (nearRoad(rc, a, 24)) continue;
      if (tier.phone && i % 28 >= 9) continue;
      const rot = inner ? a - Math.PI / 2 : a + Math.PI / 2;
      shed(rc * Math.cos(a), rc * Math.sin(a), rot, grp === 0);
      if (r() < 0.7) { const rr = inner ? rc + 2 : rc - 2; hulls.push({ x: rr * Math.cos(a), y: rr * Math.sin(a), z: Q + 1.0, rot: inner ? a + Math.PI : a, tilt: 0, sx: 1 }); }
    }
  }
  // ----- the merchants' side: storehouses along the outer harbour's two quays, and steps up to the town -----
  const quays = M.to('quays');
  for (const [rad, face, len] of [[r2b + 7, 1, 44], [rT - 7, -1, 52]]) {
    const n = Math.floor((TAU * rad) / (len + 26));
    for (let i = 0; i < n; i++) {
      const a = SEA + ((i + 0.5) / n) * TAU;
      if (nearRoad(rad, a, len / 2 + 8) || Math.abs(Math.atan2(Math.sin(a - SEA), Math.cos(a - SEA))) < 110 / rad) continue;
      if (i % 5 === 3) {   // steps between quay and bank top
        const f = quays.F.push((rad + face * -6.4) * Math.cos(a), (rad + face * -6.4) * Math.sin(a), 0, face > 0 ? a + Math.PI / 2 : a - Math.PI / 2);
        for (let s = 0; s < 14; s++) quays.surf(S.smooth, TINT.white).box(0, -9 + s * 0.7 + 4.5, Q, 9, 0.7, ((B - Q) * (s + 1)) / 14, 0, { foot: 0.75, topShade: 0.9 });
        quays.F.pop(f);
        continue;
      }
      stoa(quays, rad * Math.cos(a), rad * Math.sin(a), Q, len, 9, 4.4, face > 0 ? a + Math.PI / 2 : a - Math.PI / 2, { wall: [S.stone, i % 3 ? TINT.white : TINT.red], tile: TINT.tile[i % 4], r: 0.4, cols: Math.round(len / 5.5), simple: 'pier' });
    }
  }
  return { trees, hulls, strip, rW3, rL2 };
};
