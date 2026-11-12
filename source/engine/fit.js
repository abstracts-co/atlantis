// How well Plato's plan fits a point on the Earth. Every number here is measured from the open elevation tiles (dem.js)
// at the sea level the visitor has set; Plato's numbers come from data/case.json, which copies them from data/plato.json.
// Nothing here says a place "is" or "is not" Atlantis. It lays his measurements on the ground and reports what is there.
import { DEG, R } from './geo.js';
import { heights, zoomFor } from './dem.js';

// The Strait of Gibraltar, which Bury's note takes the Pillars of Heracles to be. Position: Wikidata Q36124, read 2026-11-11.
export const STRAIT = { lat: 35.97389, lon: -5.51611 };

// The point a distance away along a compass bearing, on the sphere. Degrees in, [lon, lat] in degrees out.
export const reach = (lat, lon, bearing, metres) => {
  const d = metres / R, b = bearing * DEG, la = lat * DEG, lo = lon * DEG;
  const la2 = Math.asin(Math.sin(la) * Math.cos(d) + Math.cos(la) * Math.sin(d) * Math.cos(b));
  const lo2 = lo + Math.atan2(Math.sin(b) * Math.sin(d) * Math.cos(la), Math.cos(d) - Math.sin(la) * Math.sin(la2));
  return [((lo2 / DEG + 540) % 360) - 180, la2 / DEG];
};
export const apart = (lat1, lon1, lat2, lon2) => {
  const a = Math.sin(((lat2 - lat1) * DEG) / 2) ** 2 + Math.cos(lat1 * DEG) * Math.cos(lat2 * DEG) * Math.sin(((lon2 - lon1) * DEG) / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
};
export const bearingTo = (lat1, lon1, lat2, lon2) => {
  const y = Math.sin((lon2 - lon1) * DEG) * Math.cos(lat2 * DEG);
  const x = Math.cos(lat1 * DEG) * Math.sin(lat2 * DEG) - Math.sin(lat1 * DEG) * Math.cos(lat2 * DEG) * Math.cos((lon2 - lon1) * DEG);
  return (Math.atan2(y, x) / DEG + 360) % 360;
};
const COMPASS = ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west'];
export const compassWord = (deg) => COMPASS[Math.round(deg / 45) % 8];

// Plato's measurements, in stades, read from the claims' own numbers.
export const platoNumbers = (cas) => {
  const of = (id) => cas.claims.find((c) => c.id === id) ?? { numbers: [] };
  const num = (id, starts) => of(id).numbers.find((n) => n.what.startsWith(starts))?.value;
  return {
    island: num('central-island-diameter', 'diameter'),
    rings: of('ring-widths').numbers.reduce((s, n) => s + n.value, 0),
    canal: num('canal-to-sea', 'canal length'),
    wall: num('outer-wall-50-stades', 'distance'),
    plainLong: num('great-plain', 'plain length'), plainWide: num('great-plain', 'plain width'),
    canalGap: num('plain-canals', 'spacing'),
    refs: { rings: of('ring-widths').ref, island: of('central-island-diameter').ref, canal: of('canal-to-sea').ref, wall: of('outer-wall-50-stades').ref, plain: of('great-plain').ref, canals: of('plain-canals').ref, pillars: of('beyond-pillars').ref, years: of('nine-thousand-years').ref },
  };
};

const spread = (list) => {
  const s = [...list].sort((a, b) => a - b), at = (q) => s[Math.min(s.length - 1, Math.floor(q * s.length))];
  return { low: at(0.05), mid: at(0.5), high: at(0.95), min: s[0], max: s[s.length - 1] };
};

// Measure. lat, lon in degrees; sea: the sea level in metres against today; stadion in metres.
// Returns the numbers, and the shapes of Plato's plan as features for the ground drawing (evidence.js).
export const measureFit = async ({ lat, lon, sea, cas, stadion = 185 }) => {
  const P = platoNumbers(cas), S = stadion;
  const ringR = (P.island / 2 + P.rings) * S;       // from the centre to the outer edge of the largest ring of water
  const wallR = ringR + P.wall * S;                 // the outer wall, and the canal's length from the sea, both 50 stades beyond that
  const out = { lat, lon, sea, stadion: S, plato: P, ringR, wallR, made: new Date().toISOString().slice(0, 10) };

  // 1. The ground the rings need: a disc 27 stades across.
  const zr = zoomFor(120, lat), disc = [];
  for (let y = -ringR; y <= ringR; y += 110) for (let x = -ringR; x <= ringR; x += 110) if (x * x + y * y <= ringR * ringR) disc.push([lon + (x / (R * Math.cos(lat * DEG))) / DEG, lat + y / R / DEG]);
  const hr = await heights(disc, zr), sr = spread(hr);
  out.rings = { across: 2 * ringR, low: sr.min, high: sr.max, mid: sr.mid, relief: sr.high - sr.low, underSea: hr.filter((h) => h < sea).length / hr.length, here: hr[Math.floor(hr.length / 2)], zoom: zr };
  const dry = out.rings.mid >= sea;
  out.dry = dry;

  // 2. The nearest sea (from land) or the nearest land (from under water), looking every 5 degrees out to 150 km.
  const zs = zoomFor(260, lat), rays = [], step = 400, far = 150000;
  for (let b = 0; b < 360; b += 5) for (let d = step; d <= far; d += step) rays.push([b, d, reach(lat, lon, b, d)]);
  const hs = await heights(rays.map((r) => r[2]), zs);
  let best = null;
  for (let i = 0; i < rays.length; i++) {
    const other = dry ? hs[i] < sea : hs[i] >= sea;
    if (other && (!best || rays[i][1] < best.distance)) best = { distance: rays[i][1], bearing: rays[i][0], at: rays[i][2] };
  }
  out.shore = best ? { ...best, kind: dry ? 'sea' : 'land' } : { distance: null, bearing: null, kind: dry ? 'sea' : 'land', beyond: far };
  out.canal = { want: P.canal * S + ringR, from: 'centre' };

  // 3. The plain: 3,000 stades along the sea and 2,000 inland, round the city. We set its seaward side on the nearest
  // shore and run it inland from there; the text gives the size and that it faced south, not where its corners were.
  // From a point that is under water at this sea level, "towards the sea" is taken as away from the nearest land.
  const toSea = dry ? out.shore.bearing ?? 180 : ((out.shore.bearing ?? 0) + 180) % 360, inland = (toSea + 180) % 360, alongA = (toSea + 90) % 360;
  const edge = dry && out.shore.distance != null ? out.shore.distance : 0;
  const L = P.plainLong * S, Wd = P.plainWide * S;
  const corner = (u, v) => { const p = reach(lat, lon, toSea, edge - v); return reach(p[1], p[0], alongA, u); };   // u along the shore, v inland from it
  const zp = zoomFor(Math.max(1200, L / 110), lat), grid = [];
  for (let j = 0; j < 44; j++) for (let i = 0; i < 66; i++) grid.push(corner(((i + 0.5) / 66 - 0.5) * L, ((j + 0.5) / 44) * Wd));
  const hp = await heights(grid, zp), land = hp.filter((h) => h >= sea);
  const sp = land.length ? spread(land) : null;
  out.plain = { long: L, wide: Wd, land: land.length / hp.length, low: sp?.low ?? null, high: sp?.high ?? null, mid: sp?.mid ?? null, level: sp ? land.filter((h) => Math.abs(h - sp.mid) <= 100).length / hp.length : 0, inland, zoom: zp };

  // 4. Where it lies from the strait.
  const d = apart(lat, lon, STRAIT.lat, STRAIT.lon);
  const inside = lon > STRAIT.lon && lon < 42 && lat > 30 && lat < 47.5;   // a plain box round the Mediterranean and the Black Sea
  out.strait = { distance: d, bearing: bearingTo(STRAIT.lat, STRAIT.lon, lat, lon), inside };

  // The shapes, for drawing on the ground at true size.
  const ring = (radius, n = 96) => Array.from({ length: n + 1 }, (_, i) => reach(lat, lon, (i / n) * 360, radius));
  const plato = (id, label, geometry, more = {}) => ({ id: `plato-${id}`, side: 'plato', kind: 'outline', label, geometry, fill: false, ...more });
  const shapes = [
    plato('rings', `Plato's rings, ${(2 * ringR / 1000).toFixed(1)} km across`, { type: 'Polygon', coordinates: [ring(ringR)] }, { fill: true, width: 2.4 }),
    plato('island', null, { type: 'LineString', coordinates: ring((P.island / 2) * S, 48) }, { width: 1.4 }),
    plato('wall', `Outer wall, ${P.wall} stades out`, { type: 'LineString', coordinates: ring(wallR, 128) }, { width: 1.8, dash: [9, 6] }),
    plato('canal', `Canal, ${P.canal} stades`, { type: 'LineString', coordinates: [reach(lat, lon, toSea, ringR), reach(lat, lon, toSea, wallR)] }, { width: 2.6 }),
    plato('plain', `The plain, ${Math.round(L / 1000)} by ${Math.round(Wd / 1000)} km`, { type: 'Polygon', coordinates: [[corner(-L / 2, 0), corner(L / 2, 0), corner(L / 2, Wd), corner(-L / 2, Wd), corner(-L / 2, 0)]] }, { width: 2.2 }),
  ];
  // The canals across the plain, a hundred stades apart (118d). Plato does not say which way they ran; these run inland.
  const lines = [];
  for (let u = -L / 2 + P.canalGap * S; u < L / 2 - 1; u += P.canalGap * S) lines.push([corner(u, 0), corner(u, Wd / 2), corner(u, Wd)]);
  shapes.push(plato('canals', null, { type: 'MultiLineString', coordinates: lines }, { width: 0.9 }));
  out.shapes = shapes;
  out.seaBearing = toSea;
  return out;
};
