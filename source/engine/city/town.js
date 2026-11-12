// The town between the largest harbour and the outer wall (Critias 117e): "many houses set close together". Only the
// band nearest the harbour is modelled. Houses stand in blocks; a block is one shape drawn many times, in three
// detailed kinds near the eye and one plain kind far away.
import { S, TINT } from './surfaces.js';
import { TAU, rnd, Bin, Frame } from './kit.js';
import { hall, gableRoof, door, windowAt } from './forms.js';

// One block of houses, about 44 m along the street (X) and 30 m deep (Y), round a yard.
const block = (seed, detailed) => {
  const g = new Bin(new Frame(), 'block'), r = rnd(seed);
  const row = (y, face) => {
    let x = -22;
    while (x < 21) {
      const w = Math.min(22 - x, 7.5 + r() * 6.5), d = 9 + r() * 3.5, h = r() < 0.35 ? 6.2 + r() * 1.4 : 3.3 + r() * 1.2, tint = TINT.plaster[(r() * 6) | 0], tile = TINT.tile[(r() * 4) | 0];
      const cy = y + (face > 0 ? -1 : 1) * (d / 2 - 5);
      const flat = r() < 0.24;
      if (detailed) hall(g, x + w / 2, cy, 0, w - 0.25, d, h, face > 0 ? 0 : Math.PI, { wall: [S.plaster, tint], tile, roof: flat ? 'flat' : 'gable', windows: 1, doors: [[0, (r() - 0.5) * (w - 3.4)]], rise: 1.3 + r() * 0.8, ridgeAlongY: false, over: 0.45, base: r() < 0.4 ? [S.stone, TINT.white] : null });
      else {
        const f = g.F.push(x + w / 2, cy, 0, face > 0 ? 0 : Math.PI), rise = 1.3 + r() * 0.8, hw = (w - 0.25) / 2;
        g.surf(S.plaster, tint).box(0, 0, 0, w - 0.25, d, h + (flat ? 0.6 : 0), 0, { top: flat, foot: 0.78, sides: flat ? 15 : 1 | 2, topShade: 0.82 });
        if (!flat) {
        g.surf(S.tiles, tile).quad([-hw, -d / 2 - 0.4, h - 0.2], [hw, -d / 2 - 0.4, h - 0.2], [hw, 0, h + rise], [-hw, 0, h + rise], 0.92, 0.92, 1, 1);
        g.quad([hw, d / 2 + 0.4, h - 0.2], [-hw, d / 2 + 0.4, h - 0.2], [-hw, 0, h + rise], [hw, 0, h + rise], 0.92, 0.92, 1, 1);
        g.surf(S.plaster, tint).tri([hw, -d / 2, h], [hw, d / 2, h], [hw, 0, h + rise], 0.85); g.tri([-hw, d / 2, h], [-hw, -d / 2, h], [-hw, 0, h + rise], 0.85);
        }
        g.F.pop(f);
      }
      x += w;
    }
  };
  row(-10, 1); row(10, -1);
  if (detailed) {   // the yard: a wall across each end, a tree's worth of shade left to the trees
    g.surf(S.plaster, TINT.plaster[1]).box(-21.6, 0, 0, 0.5, 9, 2.4, 0, { foot: 0.75 }); g.box(21.6, 0, 0, 0.5, 9, 2.4, 0, { foot: 0.75 });
    g.surf(S.wood, TINT.darkWood).wall(-21.9, 1, -21.9, -1, 0, 2, 0.8);
    g.surf(S.earth, [205, 192, 168]).slab(0, 0, 0.04, 43, 9, 0, 0.75);
  }
  return g.geometry();
};

export const buildTown = (plan, tier) => {
  const { rT, core, B, SEA, off, bridgeHalf, canalHalf, k } = plan;
  const r = rnd(1180), protos = { low: block(11, false), high: [block(21, true), block(22, true), block(23, true)] };
  const sectors = tier.phone ? 8 : 24, list = Array.from({ length: sectors }, () => ({ blocks: [], cx: 0, cy: 0 }));
  const pitchR = 37, rows = Math.floor((core - rT - 18) / pitchR), maxRows = tier.phone ? Math.min(rows, 7) : rows;
  const trees = [];
  for (let j = 0; j < maxRows; j++) {
    const rad = rT + 24 + j * pitchR, n = Math.floor((TAU * rad) / 50);
    for (let i = 0; i < n; i++) {
      const a = SEA + ((i + 0.5) / n) * TAU, x = rad * Math.cos(a), y = rad * Math.sin(a);
      if (y < 0 && (Math.abs(x) < canalHalf + 12 * k + 30 || Math.abs(x - off) < bridgeHalf + 28)) continue;   // the canal, the road
      const av = ((a - SEA) / TAU) * 16; if (Math.abs(av - Math.round(av)) * (TAU / 16) * rad < 29) continue;   // sixteen avenues to the harbour
      if (r() < 0.035) { for (let t = 0; t < 5; t++) trees.push({ x: x + (r() - 0.5) * 34, y: y + (r() - 0.5) * 22, z: B, s: 6 + r() * 5, kind: r() < 0.5 ? 'plane' : 'cypress', id: 'house-form' }); continue; }   // a small square with trees
      const sec = Math.min(sectors - 1, Math.floor((((a - SEA) / TAU) % 1) * sectors));
      const shade = 0.86 + r() * 0.28;
      list[sec].blocks.push({ x, y, z: B, rot: a + Math.PI / 2 + (r() < 0.5 ? Math.PI : 0), sx: (TAU * rad) / n / 50, sy: 1, sz: 0.9 + r() * 0.25, tint: [255 * Math.min(1, shade), 255 * Math.min(1, shade * 0.985), 255 * Math.min(1, shade * 0.95)], kind: (r() * 3) | 0 });
    }
  }
  for (let s = 0; s < sectors; s++) { const a = SEA + ((s + 0.5) / sectors) * TAU, rm = (rT + core) / 2; list[s].cx = rm * Math.cos(a); list[s].cy = rm * Math.sin(a); list[s].reach = (TAU * rm) / sectors / 2 + (core - rT) / 2; }
  return { protos, sectors: list, trees };
};
