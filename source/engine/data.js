// The community's data files: legends (what people look for), sources (what they can look with), the Atlantis case at a
// glance (case.json), the research drawn at each place (evidence.json) and the rebuilt city's notes (reconstruction.json).

export const KINDS = [
  ['sunken-land', 'Sunken lands'],
  ['lost-city', 'Lost cities'],
  ['remote-sensing-find', 'Found from above'],
  ['treasure', 'Treasure'],
  ['shipwreck', 'Shipwrecks'],
  ['tomb', 'Tombs'],
  ['relic', 'Relics'],
];
export const KIND_LABEL = Object.fromEntries(KINDS);
export const KIND_ONE = { 'sunken-land': 'Sunken land', 'lost-city': 'Lost city', 'remote-sensing-find': 'Found from above', treasure: 'Treasure', shipwreck: 'Shipwreck', tomb: 'Tomb', relic: 'Relic' };
export const STATUS = { legend: 'Legend', unlocated: 'Not found yet', disputed: 'Disputed', found: 'Found', hoax: 'Hoax' };
export const STANDING = { confirmed: 'Confirmed', mainstream: 'Leading view', plausible: 'Plausible', fringe: 'Fringe', rejected: 'Rejected', hoax: 'Hoax' };
export const ROLE = { found: 'Found here', candidate: 'Proposed', 'search-area': 'Search area', claimed: 'Claimed find', inspiration: 'Possible inspiration', origin: 'Where it began' };

const STANDING_RANK = { confirmed: 0, mainstream: 1, plausible: 2, fringe: 3, rejected: 4, hoax: 5 };
const ROLE_RANK = { found: 0, candidate: 1, 'search-area': 2, inspiration: 3, claimed: 4, origin: 5 };

export const fold = (s) => (s ?? '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

export const loadData = async (base = './') => {
  // A one-file copy of the page carries its data inside it (build/single.mjs); otherwise the files sit beside the page.
  const inline = globalThis.__DATA__;
  const get = (f, fallback) => (inline?.[f] ? Promise.resolve(inline[f]) : fetch(base + f).then((r) => (r.ok ? r.json() : fallback)).catch(() => fallback));
  const [l, s, reconstruction, cas, evidence, worldfit, audio, open, storyMedia] = await Promise.all([get('legends.json', { legends: [] }), get('sources.json', { sources: [] }), get('reconstruction.json', null), get('case.json', null), get('evidence.json', null), get('worldfit.json', null), get('audio/index.json', null), get('open.json', null), get('story-media.json', null)]);
  const legends = (l.legends ?? []).filter((x) => x && x.id && x.name && Array.isArray(x.places));
  for (const legend of legends) {
    legend.places = legend.places.filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lon));
    // The place a pin stands on when only one is shown: the best-supported one, and among equals the accepted find.
    legend.main = [...legend.places].sort((a, b) => (STANDING_RANK[a.standing] ?? 9) - (STANDING_RANK[b.standing] ?? 9) || (ROLE_RANK[a.role] ?? 9) - (ROLE_RANK[b.role] ?? 9))[0] ?? null;
    legend.key = fold([legend.name, ...(legend.aka ?? [])].join(' '));
    legend.tagKey = fold((legend.tags ?? []).join(' '));
    for (const p of legend.places) p.key = fold(p.name);
  }
  return { legends: legends.filter((x) => x.main), sources: s.sources ?? [], reconstruction, cas, evidence: evidence?.sites ?? [], worldfit, audio, open, storyMedia: storyMedia?.media ?? [], checked: l.checked ?? null };
};

// "36.4, 25.4", "36.4N 25.4E", "36°24'N 25°24'E"
export const parseCoords = (text) => {
  const t = text.trim().toUpperCase().replace(/[′’]/g, "'").replace(/[″”]/g, '"');
  const dms = [...t.matchAll(/(-?\d+(?:\.\d+)?)\s*°?\s*(?:(\d+(?:\.\d+)?)\s*')?\s*(?:(\d+(?:\.\d+)?)\s*")?\s*([NSEW])?/g)].filter((m) => m[0].trim());
  if (dms.length !== 2) return null;
  const val = (m) => (Math.abs(Number(m[1])) + Number(m[2] ?? 0) / 60 + Number(m[3] ?? 0) / 3600) * (Number(m[1]) < 0 || m[4] === 'S' || m[4] === 'W' ? -1 : 1);
  let [a, b] = dms;
  if (/[EW]/.test(a[4] ?? '') && /[NS]/.test(b[4] ?? '')) [a, b] = [b, a];
  const lat = val(a), lon = val(b);
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) return null;
  return { lat, lon };
};

export const search = (legends, text, limit = 8) => {
  const q = fold(text);
  if (!q) return [];
  const out = [];
  for (const legend of legends) {
    let score = 0;
    if (legend.key.startsWith(q)) score = 100;
    else if (legend.key.split(' ').some((w) => w.startsWith(q))) score = 80;
    else if (legend.key.includes(q)) score = 60;
    else if (legend.tagKey.split(' ').includes(q)) score = 30;
    if (score) out.push({ score, legend });
    for (const place of legend.places) {
      const s = place.key.startsWith(q) ? 55 : place.key.split(' ').some((w) => w.startsWith(q)) ? 45 : place.key.includes(q) && q.length > 2 ? 25 : 0;
      if (s && s > score - 30) out.push({ score: s, legend, place });
    }
  }
  return out.sort((a, b) => b.score - a.score || a.legend.name.localeCompare(b.legend.name)).slice(0, limit);
};

// A source from sources.json as a layer the globe can drape, or null when it can't be shown in a browser.
export const sourceLayer = (s, variant) => {
  const a = variant ? { ...s.access, ...variant } : s.access;
  if (!s.browser?.ok || !a?.url) return null;
  if (!['xyz', 'wmts', 'wms', 'arcgis-image', 'arcgis-map'].includes(s.access.type)) return null;
  if (a.crs && a.crs !== 'EPSG:3857') return null;
  if (s.kind === 'elevation-tiles') return null;
  const tiled = a.url.includes('{z}');
  if (!tiled && !a.url.includes('{bbox}')) return null;
  // A survey at a metre a pixel is only grey noise from far away, and a far-away tile makes its server draw a whole
  // country: ask for it from the zoom where it starts to mean something.
  const fine = s.resolution_m && s.resolution_m <= 30 ? Math.min(11, Math.max(0, Math.round(15 - Math.log2(s.resolution_m)) - 5)) : 0;
  return {
    id: `src-${s.id}${variant ? `-${variant.id}` : ''}`,
    kind: 'image',
    url: a.url,
    // A service that draws to order is asked for a picture twice as wide at every second zoom: a quarter of the requests.
    size: tiled ? 256 : 512,
    every: tiled ? 1 : 2,
    minZoom: Math.max(s.access.min_zoom ?? 0, fine, tiled ? 0 : 3),
    maxZoom: s.access.max_zoom ?? 15,
    maxActive: tiled ? 8 : 4,   // a service that draws each picture to order gets fewer requests at once
    bbox: s.coverage?.bbox ?? null,
    asIs: s.kind === 'hillshade' || s.kind === 'colour-relief' || s.kind === 'anomaly-map' || s.kind === 'coverage-map',
    credit: s.license?.attribution ?? s.name,
  };
};
