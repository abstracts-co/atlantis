// Building forms the whole city is put together from. Each writes into a bin, in the frame given by (x, y, z, rot):
// X along the front, Y into the depth, Z up; the front of a building is its -Y side.
import { S, TINT } from './surfaces.js';
import { TAU } from './kit.js';

const mulTint = (t, k) => [Math.min(255, t[0] * k), Math.min(255, t[1] * k), Math.min(255, t[2] * k)];

// A column: shaft with flat sides (which read as flutes), a spreading cap and a square slab on top.
export const column = (g, x, y, z, r, h, { n = 12, surf = S.smooth, tint = TINT.white, base = false, shade = 1, simple = false } = {}) => {
  g.surf(surf, tint);
  if (simple) {   // seen from far: a plain shaft, or a square pier, and a slab
    if (simple === 'pier') g.box(x, y, z, r * 2, r * 2, h, 0, { top: false, foot: 0.8 * shade, head: 0.95 * shade });
    else { g.shaft(x, y, z, r, r * 0.82, h - r * 0.5, 6, { foot: 0.82 * shade, head: 0.95 * shade }); g.box(x, y, z + h - r * 0.5, r * 2.5, r * 2.5, r * 0.5, 0, { foot: 0.9 * shade, top: false, bottom: true }); }
    return;
  }
  const capH = r * 0.55, abH = r * 0.42, sh = h - capH - abH;
  let z0 = z;
  if (base) { g.shaft(x, y, z, r * 1.3, r * 1.3, r * 0.35, n, { foot: 0.8 * shade, head: shade, cap: true }); z0 += r * 0.35; }
  g.shaft(x, y, z0, r, r * 0.8, sh - (z0 - z), n, { foot: 0.82 * shade, head: 0.95 * shade });
  g.shaft(x, y, z + sh, r * 0.8, r * 1.22, capH, n, { foot: 0.8 * shade, head: shade });
  g.box(x, y, z + sh + capH, r * 2.7, r * 2.7, abH, 0, { foot: 0.9 * shade, topShade: 0.7 * shade });
};

// A row of columns from (x0, y0) to (x1, y1), ends included.
export const colonnade = (g, x0, y0, x1, y1, z, count, r, h, o) => { for (let i = 0; i < count; i++) { const t = count > 1 ? i / (count - 1) : 0.5; column(g, x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, z, r, h, o); } };

// A pitched roof over w (X) by d (Y), its ridge along X, standing on z. Tiles above, the wall's stone in the gable ends.
export const gableRoof = (g, w, d, z, rise, { over = 0.6, tile = TINT.tile[0], wall = [S.plaster, TINT.plaster[0]], thick = 0.28, ridgeAlongY = false } = {}) => {
  const F = g.F, saved = ridgeAlongY ? F.push(0, 0, 0, Math.PI / 2) : null;
  if (ridgeAlongY) [w, d] = [d, w];
  const hw = w / 2 + over * 0.5, hd = d / 2 + over, drop = (rise * over) / (d / 2), z0 = z - drop, z1 = z + rise;
  g.surf(S.tiles, tile);
  g.quad([-hw, -hd, z0], [hw, -hd, z0], [hw, 0, z1], [-hw, 0, z1], 0.92, 0.92, 1, 1);
  g.quad([hw, hd, z0], [-hw, hd, z0], [-hw, 0, z1], [hw, 0, z1], 0.92, 0.92, 1, 1);
  // the edge of the tiles along the eaves and up the verges
  g.surf(S.tiles, mulTint(tile, 0.7));
  g.wall(-hw, -hd, hw, -hd, z0 - thick, z0, 0.7, 0.85); g.wall(hw, hd, -hw, hd, z0 - thick, z0, 0.7, 0.85);
  for (const sx of [-1, 1]) {
    const X = sx * hw;
    const a = [X, -hd, z0], b = [X, 0, z1], c = [X, hd, z0], dn = (p) => [p[0], p[1], p[2] - thick];
    if (sx > 0) { g.quad(dn(a), dn(b), b, a, 0.75); g.quad(dn(b), dn(c), c, b, 0.75); } else { g.quad(dn(b), dn(a), a, b, 0.75); g.quad(dn(c), dn(b), b, c, 0.75); }
  }
  // the soffit: the underside of the overhang, in shade
  g.surf(S.wood, TINT.darkWood);
  g.quad([hw, -hd, z0 - thick], [-hw, -hd, z0 - thick], [-hw, -d / 2, z - thick], [hw, -d / 2, z - thick], 0.45);
  g.quad([-hw, hd, z0 - thick], [hw, hd, z0 - thick], [hw, d / 2, z - thick], [-hw, d / 2, z - thick], 0.45);
  // the gable ends
  g.surf(wall[0], wall[1]);
  g.tri([w / 2, -d / 2, z], [w / 2, d / 2, z], [w / 2, 0, z1 - 0.05], 0.8, 0.8, 0.95);
  g.tri([-w / 2, d / 2, z], [-w / 2, -d / 2, z], [-w / 2, 0, z1 - 0.05], 0.8, 0.8, 0.95);
  if (saved) F.pop(saved);
};

// A roof sloping to all four sides.
export const hipRoof = (g, w, d, z, rise, { over = 0.6, tile = TINT.tile[0], thick = 0.28 } = {}) => {
  const hw = w / 2 + over, hd = d / 2 + over, z0 = z - 0.15, z1 = z + rise, rl = Math.max(0, w / 2 - d / 2);
  g.surf(S.tiles, tile);
  g.quad([-hw, -hd, z0], [hw, -hd, z0], [rl, 0, z1], [-rl, 0, z1], 0.92, 0.92, 1, 1);
  g.quad([hw, hd, z0], [-hw, hd, z0], [-rl, 0, z1], [rl, 0, z1], 0.92, 0.92, 1, 1);
  g.tri([hw, -hd, z0], [hw, hd, z0], [rl, 0, z1], 0.92, 0.92, 1);
  g.tri([-hw, hd, z0], [-hw, -hd, z0], [-rl, 0, z1], 0.92, 0.92, 1);
  g.surf(S.tiles, mulTint(tile, 0.7));
  g.box(0, 0, z0 - thick, hw * 2, hd * 2, thick, 0, { top: false, bottom: true, foot: 0.7 });
};

// Doors and windows are thin panels a hand's breadth proud of the wall. face: 0 front (-Y), 1 right (+X), 2 back, 3 left.
const onFace = (g, w, d, face, u, z, pw, ph, proud) => {
  const hw = w / 2, hd = d / 2;
  if (face === 0) g.wall(u - pw / 2, -hd - proud, u + pw / 2, -hd - proud, z, z + ph, 0.85, 1);
  else if (face === 1) g.wall(hw + proud, u - pw / 2, hw + proud, u + pw / 2, z, z + ph, 0.85, 1);
  else if (face === 2) g.wall(u + pw / 2, hd + proud, u - pw / 2, hd + proud, z, z + ph, 0.85, 1);
  else g.wall(-hw - proud, u + pw / 2, -hw - proud, u - pw / 2, z, z + ph, 0.85, 1);
};
export const door = (g, w, d, face, u, z, { pw = 1.5, ph = 2.5, frame = TINT.white, leaf = TINT.darkWood } = {}) => {
  g.surf(S.smooth, frame); onFace(g, w, d, face, u, z, pw + 0.5, ph + 0.3, 0.05);
  g.surf(S.wood, leaf); onFace(g, w, d, face, u, z, pw, ph, 0.09);
};
export const windowAt = (g, w, d, face, u, z, { pw = 0.8, ph = 1.1 } = {}) => {
  g.surf(S.smooth, TINT.white); onFace(g, w, d, face, u, z - 0.12, pw + 0.3, ph + 0.24, 0.04);
  g.surf(S.dark, TINT.shade); onFace(g, w, d, face, u, z, pw, ph, 0.07);
};

// A plain building: four walls and a roof, with doors and windows. The workhorse.
// o: wall [surface, tint], roof 'gable' | 'hip' | 'flat', rise, tile, doors: [[face, u], …], windows: rows on the long
// sides, base: [surface, tint] for a plinth course, cornice: tint of a projecting band under the eaves.
export const hall = (g, x, y, z, w, d, h, rot, o = {}) => {
  const { wall = [S.plaster, TINT.plaster[0]], roof = 'gable', rise = Math.min(w, d) * 0.22, tile = TINT.tile[0], doors = [[0, 0]], windows = 1, base = null, cornice = null, ridgeAlongY = d > w, over = 0.6 } = o;
  const saved = g.F.push(x, y, z, rot);
  g.surf(wall[0], wall[1]).box(0, 0, 0, w, d, h, 0, { top: roof === 'flat', foot: 0.78, head: 1, topShade: 0.9 });
  if (base) g.surf(base[0], base[1]).box(0, 0, 0, w + 0.3, d + 0.3, Math.min(1.1, h * 0.2), 0, { foot: 0.72, head: 0.9, topShade: 0.8 });
  if (cornice) g.surf(S.smooth, cornice).box(0, 0, h - 0.45, w + 0.5, d + 0.5, 0.45, 0, { bottom: true, foot: 0.8, topShade: 0.8 });
  if (roof === 'gable') gableRoof(g, w, d, h, rise, { tile, wall, ridgeAlongY, over });
  else if (roof === 'hip') hipRoof(g, w, d, h, rise, { tile, over });
  else { g.surf(wall[0], wall[1]); for (const [a, b, c, e] of [[0, -d / 2 + 0.2, w, 0.4], [0, d / 2 - 0.2, w, 0.4], [-w / 2 + 0.2, 0, 0.4, d - 0.8], [w / 2 - 0.2, 0, 0.4, d - 0.8]]) g.box(a, b, h, c, e, 0.7, 0, { foot: 0.9, topShade: 0.95 }); }
  for (const [face, u] of doors) door(g, w, d, face, u, 0, { ph: Math.min(2.6, h * 0.62) });
  if (windows) {
    const storeys = Math.max(1, Math.round(h / 3.4));
    for (let s = 0; s < storeys; s++) {
      const zz = (h / storeys) * s + (h / storeys) * 0.52;
      for (const face of [0, 2, 1, 3]) {
        const len = face % 2 ? d : w, n = Math.floor(len / 3.6) * (windows > 1 ? 1 : 1);
        for (let i = 0; i < n; i++) {
          const u = -len / 2 + (len * (i + 0.5)) / n;
          if (s === 0 && doors.some(([f, du]) => f === face && Math.abs(du - u) < 1.6)) continue;
          if ((i + s + face) % (windows > 1 ? 1 : 2)) continue;
          windowAt(g, w, d, face, u, zz, { pw: 0.7, ph: 1.0 });
        }
      }
    }
  }
  g.F.pop(saved);
};

// A long open hall: a back wall, a row of columns in front, a lean-to roof. Its open side is -Y.
export const stoa = (g, x, y, z, len, depth, h, rot, { wall = [S.stone, TINT.white], tile = TINT.tile[1], cols = Math.max(3, Math.round(len / 3.4)), colTint = TINT.white, r = 0.34, simple = true } = {}) => {
  const saved = g.F.push(x, y, z, rot);
  g.surf(S.paving, TINT.white).box(0, 0, 0, len + 1, depth + 1, 0.3, 0, { foot: 0.8, topShade: 0.75 });
  g.surf(wall[0], wall[1]).box(0, depth / 2 - 0.3, 0.3, len, 0.6, h + 1.1, 0, { foot: 0.7 });
  for (const sx of [-1, 1]) g.box(sx * (len / 2 - 0.3), 0, 0.3, 0.6, depth, h + 0.5, 0, { foot: 0.7 });
  colonnade(g, -len / 2 + 0.6, -depth / 2 + 0.5, len / 2 - 0.6, -depth / 2 + 0.5, 0.3, cols, r, h - 0.4, { n: 8, tint: colTint, simple });
  g.surf(S.smooth, colTint).box(0, -depth / 2 + 0.5, h - 0.1, len, 0.8, 0.5, 0, { bottom: true, foot: 0.7 });
  const zf = h + 0.4, zb = h + 1.5, hw = len / 2 + 0.4;
  g.surf(S.tiles, tile).quad([-hw, -depth / 2 - 0.5, zf], [hw, -depth / 2 - 0.5, zf], [hw, depth / 2 + 0.1, zb], [-hw, depth / 2 + 0.1, zb], 0.92, 0.92, 1, 1);
  g.surf(S.wood, TINT.darkWood).quad([hw, -depth / 2 - 0.5, zf - 0.2], [-hw, -depth / 2 - 0.5, zf - 0.2], [-hw, depth / 2, zb - 0.25], [hw, depth / 2, zb - 0.25], 0.4);
  g.F.pop(saved);
};

// A small temple on a stepped base: a closed room, a porch of columns at the front (-Y... its long axis is Y), a pediment.
export const shrine = (g, x, y, z, w, len, rot, { wall = [S.stone, TINT.white], colTint = TINT.white, tile = TINT.tile[0], cols = 4, steps = 3, closed = false, finial = null } = {}) => {
  const saved = g.F.push(x, y, z, rot), st = 0.32, ch = w * 0.82, r = w * 0.052, porch = closed ? 0 : Math.min(len * 0.28, w * 0.6);
  for (let i = 0; i < steps; i++) g.surf(S.smooth, TINT.white).box(0, 0, i * st, w + 2.6 - i * 0.9, len + 2.6 - i * 0.9, st, 0, { foot: 0.8, topShade: 0.85 });
  const z0 = steps * st;
  g.surf(wall[0], wall[1]).box(0, porch / 2, z0, w - 1.2, len - porch - 0.6, ch, 0, { top: false, foot: 0.75 });
  if (!closed) {
    colonnade(g, -w / 2 + r * 1.6, -len / 2 + r * 1.6, w / 2 - r * 1.6, -len / 2 + r * 1.6, z0, cols, r, ch, { tint: colTint });
    door(g, w - 1.2, len - porch - 0.6, 0, 0, z0, { pw: w * 0.2, ph: ch * 0.62 });
    const f = g.F.push(0, porch / 2, 0); g.F.pop(f);
  }
  g.surf(S.smooth, colTint).box(0, 0, z0 + ch, w + 0.1, len + 0.1, w * 0.1, 0, { bottom: true, foot: 0.78, topShade: 0.8 });
  gableRoof(g, w + 0.1, len + 0.1, z0 + ch + w * 0.1, w * 0.19, { tile, wall: [S.smooth, colTint], ridgeAlongY: true, over: 0.5 });
  if (finial) for (const sy of [-1, 1]) { g.surf(S.gilt, finial); g.shaft(0, sy * (len / 2 + 0.3), z0 + ch + w * 0.29, w * 0.035, 0.02, w * 0.16, 6, { foot: 0.9 }); }
  g.F.pop(saved);
};

// A court with a colonnade on all four sides: a place of exercise, a market, a bath. Outer size w by d.
export const court = (g, x, y, z, w, d, h, rot, { depth = 5, wall = [S.stone, TINT.white], tile = TINT.tile[1], floor = [S.sand, TINT.sand], gate = true } = {}) => {
  const saved = g.F.push(x, y, z, rot);
  g.surf(floor[0], floor[1]).slab(0, 0, 0.06, w - depth * 2, d - depth * 2, 0, 0.95);
  stoa(g, 0, d / 2 - depth / 2, 0, w, depth, h, 0, { wall, tile });
  stoa(g, 0, -d / 2 + depth / 2, 0, w, depth, h, Math.PI, { wall, tile });
  stoa(g, w / 2 - depth / 2, 0, 0, d - depth * 2, depth, h, -Math.PI / 2, { wall, tile });
  stoa(g, -w / 2 + depth / 2, 0, 0, d - depth * 2, depth, h, Math.PI / 2, { wall, tile });
  if (gate) { g.surf(S.wood, TINT.darkWood).wall(-1.4, -d / 2 - 0.08, 1.4, -d / 2 - 0.08, 0.3, 3.2, 0.8, 1); }
  g.F.pop(saved);
};

// Teeth along the top of a wall from (x0, y0) to (x1, y1): the outside is on the right of the walk.
export const merlons = (g, x0, y0, x1, y1, z, { pitch = 3.2, w = 1.7, t = 0.7, h = 1.3, lowWall = 0.9 } = {}) => {
  const len = Math.hypot(x1 - x0, y1 - y0), n = Math.max(1, Math.round(len / pitch)), ux = (x1 - x0) / len, uy = (y1 - y0) / len, rot = Math.atan2(uy, ux);
  const nx = uy, ny = -ux;   // outward
  if (lowWall) g.box((x0 + x1) / 2 - nx * t / 2, (y0 + y1) / 2 - ny * t / 2, z, len, t, lowWall, rot, { foot: 0.9, topShade: 0.9 });
  for (let i = 0; i < n; i++) { const s = ((i + 0.5) / n) * len; g.box(x0 + ux * s - nx * t / 2, y0 + uy * s - ny * t / 2, z + lowWall, w, t, h, rot, { foot: 0.92, topShade: 0.95 }); }
};

// A square tower with a walk and teeth on top. face: [surface, tint] of its outer skin.
export const tower = (g, x, y, z, w, h, rot, { face = [S.stone, TINT.white], crown = [S.stone, TINT.white], slits = true, band = null } = {}) => {
  const saved = g.F.push(x, y, z, rot), hw = w / 2;
  g.surf(face[0], face[1]).box(0, 0, 0, w, w, h, 0, { top: false, foot: 0.72 });
  g.surf(crown[0], crown[1]).box(0, 0, h, w + 0.7, w + 0.7, 0.7, 0, { bottom: true, foot: 0.8, topShade: 0.7 });
  if (band) g.surf(band[0], band[1]).box(0, 0, h * 0.62, w + 0.3, w + 0.3, 0.6, 0, { bottom: true, foot: 0.85 });
  const zt = h + 0.7, e = hw + 0.35;
  g.surf(crown[0], crown[1]);
  merlons(g, -e, -e, e, -e, zt, { pitch: 2.6, w: 1.3 }); merlons(g, e, -e, e, e, zt, { pitch: 2.6, w: 1.3 }); merlons(g, e, e, -e, e, zt, { pitch: 2.6, w: 1.3 }); merlons(g, -e, e, -e, -e, zt, { pitch: 2.6, w: 1.3 });
  if (slits) { g.surf(S.dark, TINT.shade); for (const f of [0, 1, 2, 3]) { const a = (f * Math.PI) / 2, c = Math.cos(a), s = Math.sin(a); const px = s * (hw + 0.06), py = -c * (hw + 0.06); g.wall(px - c * 0.25, py - s * 0.25, px + c * 0.25, py + s * 0.25, h * 0.7, h * 0.7 + 1.8); } }
  g.F.pop(saved);
};

// A standing draped figure, smooth and without features: the statues of the kings, the offerings.
const FIGURE = [[0.125, 0], [0.12, 0.08], [0.098, 0.42], [0.112, 0.6], [0.092, 0.69], [0.128, 0.795], [0.118, 0.83], [0.05, 0.855], [0.062, 0.9], [0.066, 0.94], [0.045, 0.985], [0.0, 1.0]];
export const figure = (g, x, y, z, h, rot = 0, { n = 8, tint = TINT.gold, surf = S.gilt, arm = false } = {}) => {
  g.surf(surf, tint);
  const saved = g.F.push(x, y, z, rot);
  g.turned(0, 0, 0, FIGURE.map(([r, t]) => [r * h, t * h]), n, { squash: 0.62 });
  if (arm) { g.box(h * 0.16, -h * 0.03, h * 0.72, h * 0.3, h * 0.05, h * 0.05, 0.25, { bottom: true }); }
  g.F.pop(saved);
};
// A figure on a block of stone.
export const statue = (g, x, y, z, h, rot, { plinth = [S.smooth, TINT.white], tint = TINT.gold, ph = h * 0.32, pw = h * 0.36 } = {}) => {
  g.surf(plinth[0], plinth[1]).box(x, y, z, pw * 1.25, pw * 1.25, ph * 0.2, rot, { foot: 0.75, topShade: 0.8 });
  g.box(x, y, z + ph * 0.2, pw, pw, ph * 0.8, rot, { foot: 0.85, topShade: 0.8 });
  figure(g, x, y, z + ph, h, rot, { tint });
};

// Broad steps climbing along +Y from z0 to z1 over `run` metres, w wide (centred on x = 0, starting at y = 0).
export const stairs = (g, w, run, z0, z1, { surf = S.smooth, tint = TINT.white, treads = Math.max(2, Math.round(Math.abs(z1 - z0) / 0.4)) } = {}) => {
  g.surf(surf, tint);
  const dz = (z1 - z0) / treads, dy = run / treads;
  for (let i = 0; i < treads; i++) {
    g.wall(-w / 2, i * dy, w / 2, i * dy, z0 + i * dz, z0 + (i + 1) * dz, 0.72, 0.85);
    g.quad([-w / 2, i * dy, z0 + (i + 1) * dz], [w / 2, i * dy, z0 + (i + 1) * dz], [w / 2, (i + 1) * dy, z0 + (i + 1) * dz], [-w / 2, (i + 1) * dy, z0 + (i + 1) * dz], 0.95);
  }
};
export { mulTint, TAU };
