// The shrine of Cleito and Poseidon at the centre of the island, and its wall of gold (Critias 116c).
// Plato says three things: it stood in the centre, it was holy ground that nobody entered, and a wall of gold ran
// round it. He gives no shape, no size and nothing of its inside. So everything here but the wall of gold is ours:
// a round building with a ring of columns and an open eye in its roof, and it stands OPEN. The one closed place in the
// text is this community's hall: the research hangs on its wall and a globe stands on its table (source/engine/hall.js
// puts those there). The entries "shrine", "shrine-wall" and "hall" in data/reconstruction.json say which is which.
import { S, TINT } from './surfaces.js';
import { TAU } from './kit.js';
import { column } from './forms.js';

export const buildHall = (M, plan, tier) => {
  const { Zp, SEA, arcsExcept } = plan;
  // RG the wall of gold; RH the hall's wall (outside), RI (inside); RC the ring of columns; RS the edge of its floor; RO the eye in the roof.
  const RG = 44, RH = 20, TH = 1.1, RI = RH - TH, RC = 24.4, RS = RC + 2, RO = 5.5, HW = 9.5, DOOR = 3.4, DH = 6.4, GATE = 6;
  const floor = Zp + 0.45, z0 = floor, z1 = floor + HW;
  const half = (r, w) => Math.asin(Math.min(1, w / r));
  const step = tier.phone ? 5 : 3;

  // ----- the wall of gold, with a gate towards the sea (the gate is ours) -----
  const gold = M.to('shrine-wall').surf(S.metal, TINT.gold);
  gold.sweep([[RG, Zp, 0.8], [RG, Zp + 4.5, 1], [RG - 0.9, Zp + 4.5, 0.95], [RG - 0.9, Zp, 0.75]], { arcs: arcsExcept([[SEA, half(RG, GATE)]]), step });
  for (const s of [-1, 1]) { const a = SEA + s * half(RG, GATE + 0.5); gold.shaft((RG - 0.45) * Math.cos(a), (RG - 0.45) * Math.sin(a), Zp, 0.95, 0.8, 6.4, 10, { cap: true, foot: 0.8 }); }

  // ----- the shrine: a round hall -----
  const h = M.to('shrine');
  for (let i = 0; i < 3; i++) h.surf(S.smooth, TINT.white).sweep([[RS + (2 - i) * 0.55, Zp + i * 0.15, 0.8], [RS + (2 - i) * 0.55, Zp + (i + 1) * 0.15, 0.92], [RS + (1 - i) * 0.55, Zp + (i + 1) * 0.15, 0.95]], { step: step + 1 });
  h.surf(S.paving, TINT.white).sweep([[RS - 0.55, floor, 0.95], [RI, floor, 0.95]], { step: step + 1 });
  // the wall: stone outside; inside, dark to above head height so that what hangs on it reads, pale above
  const walls = arcsExcept([[SEA, half(RH, DOOR)]]), over = [[SEA - half(RH, DOOR), SEA + half(RH, DOOR)]];
  h.surf(S.stoneCourses, TINT.white).sweep([[RH, z0, 0.8], [RH, z1, 1]], { arcs: walls, step });
  h.surf(S.stoneCourses, TINT.white).sweep([[RH, z0 + DH, 0.85], [RH, z1, 1]], { arcs: over, step });
  h.surf(S.smooth, TINT.white).sweep([[RI, z1, 0.8], [RI, z0 + 6.3, 0.7]], { arcs: walls, step });
  h.surf(S.smooth, TINT.white).sweep([[RI, z1, 0.8], [RI, z0 + DH, 0.7], [RH, z0 + DH, 0.6]], { arcs: over, step });
  const dark = M.to('hall');
  dark.surf(S.smooth, TINT.shade).sweep([[RI, z0 + 6.3, 0.9], [RI, z0, 0.7]], { arcs: walls, step });
  dark.surf(S.gilt, TINT.gold).sweep([[RI - 0.04, z0 + 6.42, 1], [RI - 0.04, z0 + 6.3, 1]], { arcs: walls, step });
  // the doorway's two sides, in gold
  for (const s of [-1, 1]) { const a = SEA + s * half(RH, DOOR), c = Math.cos(a), n = Math.sin(a); h.surf(S.gilt, TINT.gold).quad([RI * c, RI * n, z0], [RH * c, RH * n, z0], [RH * c, RH * n, z0 + DH], [RI * c, RI * n, z0 + DH], 0.9); }
  // the floor inside: pale paving, a dark ring and a gold line round the table
  dark.surf(S.paving, TINT.white).sweep([[RI, floor, 0.9], [7.2, floor, 0.92]], { step });
  dark.surf(S.smooth, TINT.shade).sweep([[7.2, floor, 0.9], [6.2, floor, 0.9]], { step: 2 });
  dark.surf(S.gilt, TINT.gold).sweep([[6.2, floor, 1], [6.0, floor, 1]], { step: 2 });
  dark.surf(S.paving, TINT.white).sweep([[6.0, floor, 0.92], [0, floor, 0.95]], { step: 2 });
  // the ring of columns, the beam they carry and the roof, which rises to an open eye over the table
  const NC = tier.phone ? 20 : 28;
  for (let i = 0; i < NC; i++) { const a = SEA + ((i + 0.5) / NC) * TAU; column(h, RC * Math.cos(a), RC * Math.sin(a), floor, 0.72, HW, { n: tier.phone ? 8 : 14, tint: TINT.white }); }
  h.surf(S.smooth, TINT.white).sweep([[RC + 1, z1, 0.75], [RC + 1, z1 + 1.1, 0.95], [RC - 1, z1 + 1.1, 0.9], [RC - 1, z1, 0.7], [RC + 1, z1, 0.6]], { step });
  h.surf(S.gilt, TINT.gold).sweep([[RC + 1.05, z1 + 0.46, 1], [RC + 1.05, z1 + 0.62, 1]], { step });
  h.surf(S.smooth, TINT.white).sweep([[RH, z1 + 0.04, 0.55], [RC - 1, z1 + 0.04, 0.6]], { step });
  h.surf(S.tiles, TINT.tile[1]).sweep([[RC + 1.5, z1 + 1.05, 0.9], [RO, z1 + 5.4, 1]], { step });
  dark.surf(S.smooth, TINT.shade).sweep([[RO, z1 + 5.1, 0.6], [RI, z1, 0.4]], { step });
  h.surf(S.gilt, TINT.gold).sweep([[RO, z1 + 5.1, 0.9], [RO, z1 + 5.45, 1]], { step: 2, sense: -1 });
  // ----- the table the globe stands on -----
  dark.surf(S.smooth, TINT.white).shaft(0, 0, floor, 3.0, 2.7, 0.75, 28, { cap: true, foot: 0.8, head: 0.96 });
  dark.surf(S.gilt, TINT.gold).shaft(0, 0, floor + 0.75, 1.15, 0.85, 0.55, 18, { cap: true, foot: 0.9 });

  // Where the research hangs: twelve places on the inside of the wall, in order from the left of the door, round to its right.
  const NP = 12, clear = 0.44, panels = [];
  for (let i = 0; i < NP; i++) { const a = SEA - clear - (i * (TAU - 2 * clear)) / (NP - 1), r = RI - 0.32; panels.push({ x: r * Math.cos(a), y: r * Math.sin(a), z: floor + 3.15, w: 7.2, h: 4.0, a }); }
  return {
    RG, RH, RI, RC, RS, RO, floor, height: HW, panels,
    door: { a: SEA, half: DOOR }, gate: { a: SEA, half: GATE },
    globe: { x: 0, y: 0, z: floor + 3.6, r: 2.2 },
    // What a person on foot cannot walk through: rings with one opening each, and round things.
    rings: [{ r: RG - 0.45, t: 0.8, a: SEA, gap: GATE - 0.9 }, { r: RH - TH / 2, t: 0.95, a: SEA, gap: DOOR - 0.7 }],
    circles: [{ x: 0, y: 0, r: 3.5 }, ...Array.from({ length: NC }, (_, i) => { const a = SEA + ((i + 0.5) / NC) * TAU; return { x: RC * Math.cos(a), y: RC * Math.sin(a), r: 1.15 }; })],
  };
};
