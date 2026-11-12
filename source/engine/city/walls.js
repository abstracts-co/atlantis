// The walls of stone round the island and the rings with their metal faces (Critias 116a-c), the bridges with their
// towers and gates (115c, 116a), the road, and the channels that carry the spring water over the bridges (117b).
import { S, TINT } from './surfaces.js';
import { TAU } from './kit.js';
import { tower, merlons, mulTint, stairs } from './forms.js';

export const buildWalls = (M, plan, tier) => {
  const { B, Q, H, T, rA, r1a, r1b, r2a, r2b, rT, core, SEA, roadAngle, arcsExcept, bridgeHalf, off, bridges, Zp, rampTop, rampFoot, k, Rp, Rs } = plan;
  const step = tier.phone ? 14 : 8;
  const body = M.to('ring-walls'), teeth = M.to('ring-walls#teeth'), towers = M.to('wall-towers');
  const gap = (r, half) => Math.asin(Math.min(1, half / r));

  // One wall on the edge of a bank. dir 1: its metal face looks outward (away from the centre); -1: inward.
  const ringWall = (R, dir, metal, id) => {
    const face = M.to(id), arcs = arcsExcept([[roadAngle(R), gap(R, bridgeHalf + 0.5)]]), o = { arcs, step, sense: dir };
    const zc = B + H - 0.9, Ro = R + dir * 0.3, Ri = R - dir * T;
    face.surf(S.metal, metal).sweep([[R, B - 0.3, 0.72], [R, B + H * 0.45, 0.95], [R, zc, 1]], o);
    body.surf(S.stone, TINT.white).sweep([[R, zc, 0.6], [Ro, zc, 0.75], [Ro, B + H, 0.95], [Ri, B + H, 0.85], [Ri, B, 0.7]], o);
    // the walk's parapet and its teeth
    const zt = B + H, Rp0 = Ro, Rp1 = Ro - dir * 0.7;
    body.sweep([[Rp0, zt, 0.9], [Rp0, zt + 0.9, 1], [Rp1, zt + 0.9, 0.95], [Rp1, zt, 0.8]], o);
    const pitch = tier.phone ? 6.4 : 3.2, rm = (Rp0 + Rp1) / 2;
    teeth.surf(S.stone, TINT.white);
    for (const [a0, a1] of arcs) {
      const n = Math.round(((a1 - a0) * R) / pitch);
      for (let i = 0; i < n; i++) { const a = a0 + ((a1 - a0) * (i + 0.5)) / n; teeth.box(rm * Math.cos(a), rm * Math.sin(a), zt + 0.9, tier.phone ? 3 : 1.6, 0.7, 1.25, a + Math.PI / 2, { foot: 0.95, topShade: 0.95 }); }
    }
    // towers at intervals (a choice), clear of the gate
    const ga = roadAngle(R), count = Math.max(8, Math.round((TAU * R) / (118 * k))), clear = gap(R, bridgeHalf + 22);
    for (let i = 0; i < count; i++) {
      const a = ga + clear + ((TAU - 2 * clear) * (i + 0.5)) / count, rc = R - dir * (T / 2 - 1.6);
      tower(towers, rc * Math.cos(a), rc * Math.sin(a), B - 0.3, 8.4, H + 5.6, a, { face: [S.metal, metal], crown: [S.stone, TINT.white], band: [S.stone, TINT.white] });
    }
  };
  ringWall(rA, 1, TINT.orichalcum, 'wall-orichalcum');
  ringWall(r1a, -1, TINT.tin, 'wall-tin');
  ringWall(r1b, 1, TINT.tin, 'wall-tin');
  ringWall(r2a, -1, TINT.brass, 'wall-brass');
  ringWall(r2b, 1, TINT.brass, 'wall-brass');

  // ----- the bridges and the road -----
  const deck = M.to('bridges'), gates = M.to('bridge-gates'), water = M.to('aqueducts');
  const metals = [[TINT.orichalcum, TINT.tin], [TINT.tin, TINT.brass], [TINT.brass, TINT.brass]];
  const gate = (d, facing, metal, open = true) => {
    // facing 1: the outside of the gate is towards the sea (-Y)
    const saved = gates.F.push(off, -d, B, facing > 0 ? 0 : Math.PI);
    const tw = 9, th = H + 10, gw = bridgeHalf * 2 - tw * 2, gh = 9.2;
    for (const sx of [-1, 1]) tower(gates, sx * (bridgeHalf - tw / 2), 0, -0.3, tw, th, 0, { face: [S.metal, metal], crown: [S.stone, TINT.white], band: [S.stone, TINT.red] });
    // the wall over the gateway, its walk and teeth
    gates.surf(S.stoneBands, TINT.white).box(0, 0, gh, gw, 4.4, th - 4 - gh, 0, { bottom: true, foot: 0.7, topShade: 0.8 });
    gates.surf(S.stone, TINT.white); merlons(gates, -gw / 2, -2.2, gw / 2, -2.2, th - 4, { pitch: 2.6, w: 1.3 }); merlons(gates, gw / 2, 2.2, -gw / 2, 2.2, th - 4, { pitch: 2.6, w: 1.3 });
    // a lintel in red stone and the two leaves of the gate, faced in the ring's metal, standing open
    gates.surf(S.stone, TINT.red).box(0, -2.3, gh - 0.9, gw + 1.6, 0.5, 1.3, 0, { bottom: true, foot: 0.8 });
    for (const sx of [-1, 1]) {
      const lw = gw / 2 - 0.2, ang = open ? sx * 1.32 : 0, hx = sx * (gw / 2 - 0.15);
      gates.surf(S.metal, mulTint(metal, 0.9)).box(hx - sx * Math.cos(ang) * lw / 2, 1.6 + Math.abs(Math.sin(ang)) * lw / 2, 0.15, lw, 0.35, gh - 0.4, ang, { foot: 0.6, head: 0.85 });
    }
    gates.F.pop(saved);
  };
  bridges.forEach(([a, b], i) => {
    const len = b - a, mid = -(a + b) / 2;
    // the deck and its paving
    deck.surf(S.stone, TINT.white).box(off, mid, B - 1.5, bridgeHalf * 2, len, 1.5, 0, { top: false, bottom: true, foot: 0.7, head: 0.95 });
    deck.surf(S.paving, TINT.white).slab(off, mid, B, bridgeHalf * 2, len, 0, 0.95);
    // piers with stepped corbels under the deck: openings a ship can pass
    const n = Math.max(2, Math.round(len / 17));
    for (let j = 0; j <= n; j++) {
      const y = -a - (len * j) / n;
      deck.surf(S.stoneCourses, TINT.white).box(off, y, -3.2, bridgeHalf * 2 - 1.2, 3.6, B - 3 + 3.2, 0, { top: false, foot: 0.55, head: 0.8 });
      deck.surf(S.stone, TINT.white).box(off, y, B - 3, bridgeHalf * 2 - 0.6, 5.6, 0.8, 0, { bottom: true, top: false, foot: 0.6 });
      deck.box(off, y, B - 2.2, bridgeHalf * 2 - 0.2, 7.8, 0.7, 0, { bottom: true, top: false, foot: 0.65 });
    }
    // the wall along each side of the bridge (116a: "on this side and on that")
    for (const sx of [-1, 1]) {
      const x = off + sx * (bridgeHalf - 0.6);
      body.surf(S.stone, TINT.white).box(x, mid, B, 1.2, len - 9, 2.3, 0, { foot: 0.8, topShade: 0.9 });
      if (sx > 0) merlons(body, x + 0.6, -a - 4.5, x + 0.6, -b + 4.5, B + 2.3, { pitch: tier.phone ? 6.4 : 3.2, lowWall: 0 }); else merlons(body, x - 0.6, -b + 4.5, x - 0.6, -a - 4.5, B + 2.3, { pitch: tier.phone ? 6.4 : 3.2, lowWall: 0 });
    }
    // the covered channel for the spring water, along the west wall, with an inspection block now and then
    const cx = off - bridgeHalf + 2.2;
    water.surf(S.stone, TINT.white).box(cx, mid, B, 1.6, len - 10, 1.25, 0, { foot: 0.75, topShade: 0.9 });
    water.surf(S.smooth, TINT.white); for (let y = -a - 14; y > -b + 10; y -= 24) water.box(cx, y, B + 1.25, 1.9, 2.2, 0.3, 0, { foot: 0.9 });
    gate(a, -1, metals[i][0]); gate(b, 1, metals[i][1]);
  });
  // where the channel comes down on each ring: a basin, drawn with the pool water by city.js
  const basins = bridges.slice(0, 2).map(([, b]) => ({ x: off - bridgeHalf - 9, y: -b - 16, z: B, w: 9, d: 14 }));
  for (const p of basins) { water.surf(S.stone, TINT.white); for (const [dx, dy, w, d] of [[0, -p.d / 2, p.w + 1.2, 0.7], [0, p.d / 2, p.w + 1.2, 0.7], [-p.w / 2, 0, 0.7, p.d], [p.w / 2, 0, 0.7, p.d]]) water.box(p.x + dx, p.y + dy, p.z, w, d, 1.0, 0, { foot: 0.8, topShade: 0.9 }); water.surf(S.stone, TINT.white).box(p.x + p.w / 2 + 4, p.y + p.d / 2 + 6, p.z, 1.6, 18, 1.25, 0.35, { foot: 0.75 }); }

  // the road across the rings and through the town, paved, with a kerb
  const road = (d0, d1, z = B) => {
    deck.surf(S.paving, TINT.white).slab(off, -(d0 + d1) / 2, z + 0.14, bridgeHalf * 2, d1 - d0, 0, 0.95);
    for (const sx of [-1, 1]) deck.surf(S.smooth, TINT.white).box(off + sx * bridgeHalf, -(d0 + d1) / 2, z, 0.5, d1 - d0, 0.34, 0, { foot: 0.8 });
  };
  road(bridges[0][1], bridges[1][0]); road(bridges[1][1], bridges[2][0]); road(bridges[2][1], Math.sqrt(core * core - off * off));
  road(rampFoot, bridges[0][0]);
  // up the hill: a broad stair between walls, from the level ground to the plateau
  {
    const saved = deck.F.push(off, -rampFoot, 0, 0), run = rampFoot - rampTop, w = bridgeHalf * 2;
    stairs(deck, w, run, B, Zp, { surf: S.paving, treads: tier.phone ? 20 : 60 });
    for (const sx of [-1, 1]) {
      const x = sx * (w / 2 + 0.6);
      // the side wall follows the stair, down to the ground beside it
      const n = 12;
      for (let i = 0; i < n; i++) {
        const y0 = (run * i) / n, y1 = (run * (i + 1)) / n, z0 = B + ((Zp - B) * i) / n, z1 = B + ((Zp - B) * (i + 1)) / n;
        deck.surf(S.stoneBands, TINT.white);
        const out = x + sx * 0.6, inn = x - sx * 0.6, base = B - 0.2;
        if (sx > 0) { deck.quad([out, y0, base], [out, y1, base], [out, y1, z1 + 1.1], [out, y0, z0 + 1.1], 0.7, 0.7, 1, 1); deck.quad([inn, y1, z1], [inn, y0, z0], [inn, y0, z0 + 1.1], [inn, y1, z1 + 1.1], 0.8); }
        else { deck.quad([out, y1, base], [out, y0, base], [out, y0, z0 + 1.1], [out, y1, z1 + 1.1], 0.7, 0.7, 1, 1); deck.quad([inn, y0, z0], [inn, y1, z1], [inn, y1, z1 + 1.1], [inn, y0, z0 + 1.1], 0.8); }
        deck.surf(S.smooth, TINT.white).quad([x - 0.6, y0, z0 + 1.1], [x + 0.6, y0, z0 + 1.1], [x + 0.6, y1, z1 + 1.1], [x - 0.6, y1, z1 + 1.1], 0.95);
      }
    }
    deck.F.pop(saved);
  }
  return { basins };
};
