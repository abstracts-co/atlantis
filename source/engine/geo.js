// Earth as a sphere, Web Mercator tiles on top. World frame: +Z is the north pole, +X is lon 0, +Y is lon 90°E. Metres.
export const R = 6371008.8;
export const CIRC = 2 * Math.PI * R;
export const DEG = Math.PI / 180;
export const MAX_LAT = Math.atan(Math.sinh(Math.PI)); // 85.0511° in radians

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const wrapLon = (lon) => lon - 2 * Math.PI * Math.floor((lon + Math.PI) / (2 * Math.PI));

// Fractional tile coordinates at zoom z for lon/lat in radians.
export const lonToX = (lon, z) => ((lon + Math.PI) / (2 * Math.PI)) * 2 ** z;
export const latToY = (lat, z) => {
  const l = clamp(lat, -MAX_LAT, MAX_LAT);
  return ((1 - Math.log(Math.tan(l) + 1 / Math.cos(l)) / Math.PI) / 2) * 2 ** z;
};
export const xToLon = (x, z) => (x / 2 ** z) * 2 * Math.PI - Math.PI;
export const yToLat = (y, z) => Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / 2 ** z)));

// Unit vector for lon/lat in radians, written into out[0..2].
export const toDir = (lon, lat, out = [0, 0, 0]) => {
  const c = Math.cos(lat);
  out[0] = c * Math.cos(lon);
  out[1] = c * Math.sin(lon);
  out[2] = Math.sin(lat);
  return out;
};
export const fromDir = (v) => {
  const l = Math.hypot(v[0], v[1], v[2]);
  return [Math.atan2(v[1], v[0]), Math.asin(clamp(v[2] / l, -1, 1))];
};

// Local frame at lon/lat: east, north, up as unit vectors.
export const frame = (lon, lat) => {
  const up = toDir(lon, lat);
  const east = [-Math.sin(lon), Math.cos(lon), 0];
  const north = [up[1] * east[2] - up[2] * east[1], up[2] * east[0] - up[0] * east[2], up[0] * east[1] - up[1] * east[0]];
  return { east, north, up };
};

export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const norm = (a) => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
export const add = (a, b, s = 1) => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
export const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s];

// Great-circle angle between two lon/lat points, radians.
export const arc = (lon1, lat1, lon2, lat2) => {
  const s1 = Math.sin((lat2 - lat1) / 2);
  const s2 = Math.sin((lon2 - lon1) / 2);
  return 2 * Math.asin(Math.min(1, Math.sqrt(s1 * s1 + Math.cos(lat1) * Math.cos(lat2) * s2 * s2)));
};

// Ray (origin o, unit direction d) against a sphere of radius r at the origin. Returns the near hit distance, or -1.
export const raySphere = (o, d, r) => {
  const b = dot(o, d);
  const c = dot(o, o) - r * r;
  const disc = b * b - c;
  if (disc < 0) return -1;
  const s = Math.sqrt(disc);
  const t = -b - s;
  return t > 0 ? t : -b + s > 0 ? -b + s : -1;
};

export const formatLatLon = (latDeg, lonDeg, digits = 4) =>
  `${Math.abs(latDeg).toFixed(digits)}°${latDeg >= 0 ? 'N' : 'S'} ${Math.abs(lonDeg).toFixed(digits)}°${lonDeg >= 0 ? 'E' : 'W'}`;

export const formatDistance = (m) => (m >= 100000 ? `${Math.round(m / 1000).toLocaleString('en')} km` : m >= 1000 ? `${(m / 1000).toFixed(m >= 10000 ? 0 : 1)} km` : `${Math.round(m)} m`);
