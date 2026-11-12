// Ships (Critias 117d-e): triremes in the sheds and the inner harbours, merchantmen filling the canal and the largest
// harbour. The text says no more than that; the shapes follow Greek ships of Plato's own time (see reconstruction.json).
import { S, TINT } from './surfaces.js';
import { TAU, rnd, Bin, Frame } from './kit.js';
import { mulTint } from './forms.js';

// A hull lofted through stations from stern (x = -len / 2) to bow. profile(t) gives half-breadth, depth of keel, height
// of the rail and lift of the whole section at t in 0..1.
const hull = (g, len, profile, stations, tint) => {
  const rings = [];
  for (let i = 0; i <= stations; i++) {
    const t = i / stations, [b, keel, rail, lift] = profile(t), x = (t - 0.5) * len;
    rings.push([[x, -b, rail + lift], [x, -b * 0.96, rail * 0.45 + lift], [x, -b * 0.6, -keel * 0.55 + lift], [x, 0, -keel + lift], [x, b * 0.6, -keel * 0.55 + lift], [x, b * 0.96, rail * 0.45 + lift], [x, b, rail + lift]]);
  }
  g.surf(S.wood, tint).loft(rings, { flip: true });
  g.surf(S.wood, mulTint(TINT.wood, 1.05));   // the deck
  for (let i = 0; i < stations; i++) { const a = rings[i], b = rings[i + 1]; g.quad([a[0][0], a[0][1], a[0][2] - 0.25], [b[0][0], b[0][1], b[0][2] - 0.25], [b[6][0], b[6][1], b[6][2] - 0.25], [a[6][0], a[6][1], a[6][2] - 0.25], 0.8); }
  return rings;
};
const stay = (g, a, b, w = 0.07) => g.quad([a[0], a[1] - w, a[2]], [a[0], a[1] + w, a[2]], [b[0], b[1] + w, b[2]], [b[0], b[1] - w, b[2]]);

export const shipProtos = (tier) => {
  const proto = () => new Bin(new Frame(), 'ship');
  // ----- a trireme, about 37 m by 5.5 m: low, narrow, a ram at the bow, the stern curling up -----
  const trireme = (rigged, coarse) => {
    const g = proto(), len = 37;
    hull(g, len, (t) => {
      const b = 2.75 * Math.min(1, Math.sin(Math.min(1, t * 1.25) * Math.PI / 2) ** 0.7) * (t > 0.82 ? Math.max(0.06, 1 - ((t - 0.82) / 0.18) ** 1.6) : 1);
      const lift = t < 0.16 ? ((0.16 - t) / 0.16) ** 2 * 4.2 : t > 0.9 ? ((t - 0.9) / 0.1) ** 2 * 1.2 : 0;
      return [Math.max(0.12, b * (t < 0.1 ? 0.35 + t * 6.5 : 1)), 1.0 * (t < 0.12 ? t / 0.12 : 1), 2.1, lift];
    }, coarse || tier.phone ? 7 : 12, TINT.hull);
    g.surf(S.gilt, TINT.brass).box(len / 2 + 0.9, 0, -0.5, 2.6, 0.5, 0.9, 0, { bottom: true });                  // the ram, sheathed in bronze
    g.surf(S.wood, TINT.hull); for (const sy of [-1, 1]) g.box(0, sy * 3.0, 1.5, len * 0.66, 0.6, 0.5, 0, { bottom: true, foot: 0.7 });   // the outriggers the upper oars work on
    g.surf(S.wood, mulTint(TINT.red, 1.1)).box(len / 2 - 2.2, 0, 2.1, 0.5, 2.6, 0.9, 0);                         // the bow screen, painted
    // the stern ornament: a fan of curved timbers
    for (let i = -1; i <= 1; i++) g.surf(S.wood, TINT.hull).quad([-len / 2 + 0.2, i * 0.5 - 0.12, 6.0], [-len / 2 + 0.2, i * 0.5 + 0.12, 6.0], [-len / 2 + 2.6 + Math.abs(i) * 0.3, i * 0.9 + 0.12, 8.4 - Math.abs(i) * 0.5], [-len / 2 + 2.6 + Math.abs(i) * 0.3, i * 0.9 - 0.12, 8.4 - Math.abs(i) * 0.5]);
    if (rigged) {
      g.surf(S.wood, TINT.wood).shaft(1.5, 0, 1.8, 0.2, 0.13, 10.5, 5);
      g.box(1.5, 0, 11.4, 0.3, 11, 0.3, 0, { bottom: true });
      g.surf(S.cloth, TINT.sail).box(1.5, 0, 10.9, 0.5, 10.4, 0.55, 0, { bottom: true });                        // the sail, furled on its yard
      g.surf(S.wood, TINT.darkWood); stay(g, [1.5, 0, 12.2], [len / 2 - 2, 0, 2.6]); stay(g, [1.5, 0, 12.2], [-len / 2 + 2, 0, 5]);
      // the oars, three banks seen as one fan each side
      const n = tier.phone ? 12 : 28;
      for (let i = 0; i < n; i++) for (const sy of [-1, 1]) { const x = -len * 0.3 + (len * 0.6 * i) / (n - 1); g.surf(S.wood, TINT.wood).quad([x, sy * 2.9, 1.5], [x + 0.14, sy * 2.9, 1.5], [x + 0.14 - 1.2, sy * 7.2, 0.05], [x - 1.2, sy * 7.2, 0.05]); }
    }
    return g.geometry();
  };
  // ----- a merchant ship: round and deep, one mast, a square sail furled or set, two steering oars -----
  const merchant = (sail) => {
    const g = proto(), len = 19;
    hull(g, len, (t) => {
      const b = 3.0 * Math.sin(Math.min(1, t * 1.6) * Math.PI / 2) ** 0.6 * (t > 0.72 ? Math.max(0.05, Math.cos(((t - 0.72) / 0.28) * Math.PI / 2) ** 0.8) : 1);
      const lift = t < 0.14 ? ((0.14 - t) / 0.14) ** 1.6 * 3.0 : t > 0.86 ? ((t - 0.86) / 0.14) ** 1.6 * 2.2 : 0;
      return [Math.max(0.1, b), 1.5 * Math.min(1, t / 0.1, (1 - t) / 0.08), 1.9, lift];
    }, 7, mulTint(TINT.hull, 1.15));
    g.surf(S.wood, mulTint(TINT.hull, 0.9)); for (const sy of [-1, 1]) g.box(0, sy * 3.02, 1.35, len * 0.7, 0.16, 0.3, 0, { bottom: true });   // the wale
    g.surf(S.wood, TINT.wood).shaft(0.6, 0, 1.6, 0.24, 0.15, 12.5, 5);
    g.box(0.6, 0, 12.6, 0.3, 11.5, 0.3, 0, { bottom: true });
    if (sail) { g.surf(S.cloth, TINT.sail); const rows = 4; for (let i = 0; i < rows; i++) { const z0 = 12.6 - (i * 8.2) / rows, z1 = 12.6 - ((i + 1) * 8.2) / rows, bx = (t) => 0.75 + Math.sin(t * Math.PI) * 1.6, t0 = i / rows, t1 = (i + 1) / rows; g.quad([bx(t0), -5.4, z0], [bx(t0), 5.4, z0], [bx(t1), 5.2, z1], [bx(t1), -5.2, z1], 1, 1, 0.9, 0.9); } }
    else g.surf(S.cloth, TINT.sail).box(0.6, 0, 12.1, 0.55, 10.8, 0.6, 0, { bottom: true });
    g.surf(S.wood, TINT.darkWood); stay(g, [0.6, 0, 14], [len / 2 - 0.6, 0, 4.2]); stay(g, [0.6, 0, 14], [-len / 2 + 1, 0, 4.6]);
    for (const sy of [-1, 1]) { g.quad([0.6, 0, 13.6], [0.74, 0, 13.6], [0.74, sy * 2.9, 2.0], [0.6, sy * 2.9, 2.0]); g.surf(S.wood, TINT.wood).box(-len / 2 + 2.2, sy * 2.6, -0.6, 0.25, 0.5, 4.4, 0, { foot: 0.8 }); }
    g.surf(S.wood, mulTint(TINT.wood, 0.9)).box(-len / 2 + 3.4, 0, 1.6, 2.6, 3.2, 1.5, 0, { foot: 0.8 });      // the deckhouse aft
    g.surf(S.tiles, [240, 200, 170]); for (const [x, y] of [[3.5, -0.8], [4.6, 0.7]]) g.shaft(x, y, 1.6, 0.34, 0.46, 0.95, 5, { cap: true });   // jars of cargo
    return g.geometry();
  };
  return { trireme: trireme(true), hull: trireme(false, true), merchant: merchant(false), sailing: merchant(true) };
};

// Where the ships lie. Triremes that are not in a shed ride in the two inner rings of water; merchantmen crowd the
// outer ring and the canal, moored stern-to along the quays and under way in the fairway.
export const placeShips = (plan, tier) => {
  const { rIsle, rW1, rL1, rW2, rL2, rW3, canalHalf, edge, SEA, off, bridgeHalf, k } = plan, r = rnd(1190);
  const triremes = [], hulls = [], merchants = [], sailing = [];
  const clear = (x, y) => !(y < 0 && Math.abs(x - off) < bridgeHalf + 16);
  const f = tier.phone ? 0.5 : 1;
  // triremes under oars in the inner rings, and moored along the island's quay
  for (let i = 0; i < 9 * f; i++) { const a = r() * TAU, rad = (rIsle + rW1) / 2 + (r() - 0.5) * 70, x = rad * Math.cos(a), y = rad * Math.sin(a); if (clear(x, y)) triremes.push({ x, y, z: 0.25, rot: a + Math.PI / 2 + (r() - 0.5) * 0.3 }); }
  for (let i = 0; i < 16 * f; i++) { const a = r() * TAU, rad = (rL1 + rW2) / 2 + (r() - 0.5) * 190, x = rad * Math.cos(a), y = rad * Math.sin(a); if (clear(x, y)) triremes.push({ x, y, z: 0.25, rot: a + Math.PI / 2 + (r() - 0.5) * 0.4 }); }
  for (let i = 0; i < 26 * f; i++) { const a = r() * TAU, rad = rIsle + 5.5, x = rad * Math.cos(a), y = rad * Math.sin(a); if (clear(x, y) && Math.abs(a - Math.PI / 2) > 0.12) hulls.push({ x, y, z: 0.25, rot: a + Math.PI / 2 }); }
  // merchantmen moored stern-to on both quays of the largest harbour
  for (const [rad, out] of [[rL2 + 12, 1], [rW3 - 12, -1]]) {
    const n = Math.floor((TAU * rad) / 15);
    for (let i = 0; i < n; i++) {
      if (r() > 0.21 * f) continue;
      const a = SEA + ((i + 0.5) / n) * TAU, x = rad * Math.cos(a), y = rad * Math.sin(a);
      if (!clear(x, y) || Math.abs(Math.atan2(Math.sin(a - SEA), Math.cos(a - SEA))) < 90 / rad) continue;
      merchants.push({ x, y, z: 0.1, rot: out > 0 ? a : a + Math.PI, sx: 0.8 + r() * 0.5 });
    }
  }
  // and riding or sailing in the fairway and the canal
  for (let i = 0; i < 110 * f; i++) { const a = r() * TAU, rad = (rL2 + rW3) / 2 + (r() - 0.5) * 380, x = rad * Math.cos(a), y = rad * Math.sin(a); if (!clear(x, y)) continue; (r() < 0.3 ? sailing : merchants).push({ x, y, z: 0.1, rot: a + Math.PI / 2 + (r() - 0.5) * 1.4 + (r() < 0.5 ? Math.PI : 0), sx: 0.8 + r() * 0.5 }); }
  for (let i = 0; i < 26 * f; i++) { const d = rW3 + r() * (edge - rW3 - 30), lane = r() < 0.5 ? -1 : 1; (r() < 0.55 ? sailing : merchants).push({ x: lane * canalHalf * (0.25 + r() * 0.4), y: -d, z: 0.1, rot: lane > 0 ? Math.PI / 2 : -Math.PI / 2, sx: 0.85 + r() * 0.45 }); }
  for (let i = 0; i < 30 * f; i++) { const d = rW3 + 60 + r() * (edge - rW3 - 120), side = r() < 0.5 ? -1 : 1; merchants.push({ x: side * (canalHalf - 3.6), y: -d, z: 0.1, rot: Math.PI / 2 * (r() < 0.5 ? 1 : -1), sx: 0.8 + r() * 0.4 }); }
  return { triremes, hulls, merchants, sailing };
};
