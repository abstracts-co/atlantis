// The plan of the city in numbers: where every shore, wall, road and terrace lies, and how high the ground is at any
// point. No three.js here. The frame is the city's own: metres, origin at the centre of the central island at water
// level, the sea (and the canal) towards -Y, X to the left hand of someone walking in from the sea... that is, with the
// sea to the south, +X is east and +Y is north. cityscene.js turns this frame to the bearing asked for.
export const DEFAULTS = {
  stadion: 185, // metres to the stadion; data/plato.json lists the lengths scholars use
  islandDiameter: 5, // Critias 116a: the central island was five stadia across
  rings: [['water', 1], ['land', 2], ['water', 2], ['land', 3], ['water', 3]], // Critias 115e-116a, from the centre outward
  canalLength: 50, canalWidthPlethra: 3, // Critias 115d: three plethra wide, fifty stadia from the sea to the outermost ring
  bridgeWidthPlethra: 1, // Critias 116a: the bridge was a plethron wide
  templeLength: 1, templeWidth: 0.5, // Critias 116d: a stadion long and three plethra wide
  racecourseWidth: 1, // Critias 117c: a stadion wide, running round the larger island
  outerWallDistance: 50, // Critias 117e: fifty stadia from the largest ring on every side
  // Not in the text. Choices, listed in data/reconstruction.json.
  bank: 8, hill: 24, wallHeight: 11, wallThickness: 4.5, seaBearing: 180, modelledTown: 2.5,
};

export const makePlan = (opts = {}) => {
  const P = { ...DEFAULTS, ...opts };
  const S = P.stadion, plethron = S / 6, k = S / 185;
  const shores = [(P.islandDiameter / 2) * S];
  for (const [, w] of P.rings) shores.push(shores[shores.length - 1] + w * S);
  const [rIsle, rW1, rL1, rW2, rL2, rW3] = shores;
  const B = P.bank, Q = 2, H = P.wallHeight, T = P.wallThickness;
  const canalHalf = (P.canalWidthPlethra * plethron) / 2, bridgeHalf = (P.bridgeWidthPlethra * plethron) / 2;
  // The harbour strips: level ground at quay height between the water and the foot of each bank.
  const strip = { isle: 12 * k, r1in: 46 * k, r1out: 46 * k, r2in: 46 * k, r2out: 40 * k, town: 36 * k };
  // The raised ground: the island inside its wall, the two rings between their walls, the town.
  const rA = rIsle - strip.isle, r1a = rW1 + strip.r1in, r1b = rL1 - strip.r1out, r2a = rW2 + strip.r2in, r2b = rL2 - strip.r2out, rT = rW3 + strip.town;
  const core = rW3 + P.modelledTown * S, edge = core + 70 * k;   // the town is modelled to core; the ground falls away to edge
  const rWall = rW3 + P.outerWallDistance * S;
  // The road runs beside the line of the canal and the ship passages, this far to the east of it.
  const off = canalHalf + bridgeHalf + 34 * k;
  const tunnelHalf = 7.5;
  // The island: a plateau, a planted slope held by two terrace walls, and level ground inside the wall.
  const Zp = B + P.hill, Rp = rIsle * 0.6, Rs = rIsle * 0.76, zSlopeTop = Zp - 5, zSlopeFoot = B + 3;
  const rampTop = Math.sqrt(Rp * Rp - off * off), rampFoot = Rs + 44 * k;   // distances towards the sea along the road
  const rcMid = (r2a + r2b) / 2, rcHalf = (P.racecourseWidth * S) / 2;
  const along = (r) => Math.sqrt(Math.max(0, r * r - off * off));   // how far towards the sea the road meets a circle of radius r
  const bridges = [[along(rA), along(r1a)], [along(r1b), along(r2a)], [along(r2b), along(rT)]];
  const onRoad = (x) => Math.abs(x - off) <= bridgeHalf;

  const islandZ = (r) => (r <= Rp ? Zp : r <= Rs ? zSlopeTop + ((zSlopeFoot - zSlopeTop) * (r - Rp)) / (Rs - Rp) : B);
  // The height of the ground someone could stand on at (x, y): paving, quay, bridge deck or hill. Water is 0.
  // null outside the modelled city. `what` (optional object) is told which kind of ground it is.
  const groundZ = (x, y, what) => {
    const r = Math.hypot(x, y), tell = (z, kind) => { if (what) what.kind = kind; return z; };
    if (r > edge) return null;
    const d = -y;   // distance towards the sea
    if (onRoad(x) && d > 0) {
      for (const [a, b] of bridges) if (d >= a - 1 && d <= b + 1) return tell(B, 'bridge');
      if (d <= rampFoot && d >= rampTop) return tell(Zp + ((B - Zp) * (d - rampTop)) / (rampFoot - rampTop), 'ramp');
    }
    if (r <= rA) return tell(islandZ(r), r <= Rp ? 'plateau' : r <= Rs ? 'slope' : 'island');
    if (r <= rIsle) return tell(Q, 'quay');
    if (r < rW1) return tell(0, 'water');
    if (r <= r1a || (r >= r1b && r <= rL1)) return tell(Math.abs(x) < tunnelHalf && d > 0 ? 0 : Q, 'quay');
    if (r <= r1b) return tell(B, 'ring-inner');
    if (r < rW2) return tell(0, 'water');
    if (r <= r2a || (r >= r2b && r <= rL2)) return tell(Math.abs(x) < tunnelHalf && d > 0 ? 0 : Q, 'quay');
    if (r <= r2b) return tell(B, Math.abs(r - rcMid) < rcHalf ? 'racecourse' : 'ring-outer');
    if (r < rW3) return tell(0, 'water');
    if (Math.abs(x) < canalHalf && d > 0) return tell(0, 'water');
    if (r <= rT) return tell(Q, 'quay');
    if (r <= core) return tell(B, 'town');
    return tell(B + ((-3 - B) * (r - core)) / (edge - core), 'bank');
  };
  // Angles, measured from +X towards +Y. The sea is at -90°.
  const SEA = -Math.PI / 2;
  const roadAngle = (r) => SEA + Math.asin(Math.min(1, off / r));
  // The whole circle less some gaps: gaps [[centre angle, half width in radians], …] gives [[a0, a1], …].
  const arcsExcept = (gaps) => {
    const g = gaps.map(([c, h]) => { let a = c - h; a = ((a % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); return [a, a + 2 * h]; }).sort((p, q) => p[0] - q[0]);
    if (!g.length) return [[0, 2 * Math.PI]];
    const out = [];
    for (let i = 0; i < g.length; i++) { const from = g[i][1], to = i + 1 < g.length ? g[i + 1][0] : g[0][0] + 2 * Math.PI; if (to - from > 1e-6) out.push([from, to]); }
    return out;
  };
  return { SEA, roadAngle, arcsExcept, P, S, k, plethron, shores, rIsle, rW1, rL1, rW2, rL2, rW3, B, Q, H, T, canalHalf, bridgeHalf, strip, rA, r1a, r1b, r2a, r2b, rT, core, edge, rWall, off, tunnelHalf, Zp, Rp, Rs, zSlopeTop, zSlopeFoot, rampTop, rampFoot, rcMid, rcHalf, along, bridges, onRoad, islandZ, groundZ };
};
