// Writes the artifact's readable text (content.md) from the data files, so people, search engines and agents can read
// what the globe holds without running it.
import { readFile } from 'node:fs/promises';

const KIND = { 'sunken-land': 'Sunken lands', 'lost-city': 'Lost cities', 'remote-sensing-find': 'Found from above', treasure: 'Treasure', shipwreck: 'Shipwrecks', tomb: 'Tombs', relic: 'Relics' };
const STATUS = { legend: 'legend', unlocated: 'not found yet', disputed: 'disputed', found: 'found', hoax: 'hoax' };
const STANDING = { confirmed: 'confirmed', mainstream: 'leading view', plausible: 'plausible', fringe: 'fringe', rejected: 'rejected', hoax: 'hoax' };
const ROLE = { found: 'found here', candidate: 'proposed', 'search-area': 'search area', claimed: 'claimed find', inspiration: 'possible inspiration', origin: 'where it began' };
const GROUP = { lidar: 'Lidar relief', elevation: 'Terrain', seafloor: 'Sea floor', imagery: 'Satellite pictures', radar: 'Radar', geophysics: 'Gravity, magnetics and geology', historic: 'Old maps and photos', places: 'Records of known sites', catalog: 'Catalogues and downloads' };
const ll = (p) => `${Math.abs(p.lat).toFixed(2)}°${p.lat >= 0 ? 'N' : 'S'} ${Math.abs(p.lon).toFixed(2)}°${p.lon >= 0 ? 'E' : 'W'}`;

export const content = async (dataDir, slug) => {
  const { legends } = JSON.parse(await readFile(`${dataDir}legends.json`, 'utf8'));
  const { sources } = JSON.parse(await readFile(`${dataDir}sources.json`, 'utf8').catch(() => '{"sources":[]}'));
  const places = legends.reduce((n, l) => n + l.places.length, 0);
  const scenes = JSON.parse(await readFile(`${dataDir}evidence.json`, 'utf8').catch(() => '{"sites":[]}')).sites;
  const out = [];
  const atlantis = legends.find((l) => l.id === 'atlantis');
  out.push(`# Atlantis

Walk the city Plato describes, meet people in the hall at its centre, and hunt the real Earth, sea floor included, for the place that fits his words.

Atlantis comes from two dialogues by Plato, the Timaeus and the Critias, written about 360 BCE. Most scholars read it as a story he invented, and no proposed place has archaeological support. Everything here says where it comes from.

## What you can do

- **Enter the city.** Plato's city, built to the measurements in the Critias, stands on the open Atlantic beyond the strait, where his words point and where there is nothing. Walk it: click the ground to go there, drag to look. Water and walls are solid, and the rings are crossed by their bridges.
- **Go into the hall.** The shrine at the centre, which Plato says nobody entered, stands open. Twelve boards on its wall show his claims, how the Earth scores against them, the places people have named, every search since 1679, what is still unknown, and work that is open for anyone. A globe on its table opens the whole Earth.
- **Meet people there.** Signed in on Abstracts, you see who else is in the city, write to the room, and talk by voice with whoever stands near you. Walking needs no account.
- **Watch the story**: Plato's tale in his own words over the globe, with what it names shown as it is named, in under two minutes.
- **Pick up work.** Each open task comes with a prompt to hand to your AI.
- **Hunt.** Every 10 km of land that has gone under since Plato's date is scored on five things he says: it sank, it lay beyond the Pillars, it had a great plain, mountains to the north, and it was an island. The land that matches glows. Point at any spot for its score, claim it, and post the result. Nothing on Earth scores five of five.
- **See the ${atlantis ? atlantis.places.length : ''} proposed places.** Each pin shows how the proposal stands with scholars and whether anyone has checked on the ground. A place's card shows what is said to fit Plato and what breaks, with the reason and source behind each mark.
- **Explore ${scenes.length} places as scenes** (${scenes.map((s) => s.name.replace(/\s*\(.*?\)/g, '')).join(', ')}): the research is drawn where it happened. Survey boxes and ship tracks on the sea bed, cores and digs on the ground, the shape that was claimed and what the checks found. Switch between claimed and found, or walk through it step by step. ${scenes.reduce((n, s) => n + s.features.length, 0)} features in all, each with its source and how its position is known.
- **Open the board.** Every place against every detail Plato gives, and every search since 1679 with how it ended. A blank cell is work nobody has done.
- **Test the fit.** Lay Plato's measurements on any place and read the ground: is it above water, is there level ground for the rings, how far is the sea, is there room for the plain.
- **Lower the sea to Plato's date**, about 9600 BCE, or to the low point of the last ice age, and see which land was dry.
- **Stand Plato's city on any place, at true size.** It is built to the measurements in the Critias: a central island five stadia across, three rings of sea and two of land, a canal fifty stadia long, walls faced with brass, tin and orichalcum. A panel lists what comes from the text, passage by passage, and what is our choice.
- **Strip the ground bare** and move the sun, or lay open lidar and sea-floor surveys over it.
- **Check what is already recorded** near any spot, from Wikidata and OpenStreetMap.
- **Share a view** as a link, or post a picture of it.

## What it can't show

Sea-floor depth is 500 m to 2 km a pixel away from a few surveyed strips, and 60 to 500 m at the five places with their own depth grid: it shows banks and seamounts, never a wall. Only research with a known position is drawn; what could not be placed is listed, not guessed. One sea level is used for the whole planet, though real coasts also rose and sank. The rebuilt city is a drawing of a text. Nothing like it has been found.

## Build on it

Everything is in this community's repository: what Plato says claim by claim (\`data/plato.json\`), every proposal and every search (\`data/hypotheses.json\`, \`data/searches.json\`), the research drawn at each place (\`data/evidence.json\`), the texts and research as trees an agent can walk (\`indexes/\`), and tools. \`AGENTS.md\` is the map. Read the community at https://abstracts.co/a/${slug}.md.
`);
  out.push('## The places and the other legends\n');
  for (const [kind, label] of Object.entries(KIND)) {
    // Atlantis first, then the rest by name.
    const list = legends.filter((l) => l.kind === kind).sort((a, b) => (b.id === 'atlantis') - (a.id === 'atlantis') || a.name.localeCompare(b.name));
    if (!list.length) continue;
    out.push(`### ${label}\n`);
    for (const l of list) {
      out.push(`#### ${l.name} (${STATUS[l.status] ?? l.status})\n`);
      out.push(`${l.summary}${l.when ? ` *${l.when}.*` : ''}\n`);
      if (l.look_for) out.push(`What to look for: ${l.look_for}\n`);
      for (const p of l.places) {
        const src = (p.sources ?? []).slice(0, 2).map((s) => `[${(s.title ?? 'source').replace(/[\[\]]/g, '')}](${s.url})`).join('; ');
        out.push(`- **${p.name}** (${ROLE[p.role] ?? p.role}, ${STANDING[p.standing] ?? p.standing}; ${ll(p)}${p.precision_km ? `, give or take ${p.precision_km} km` : ''}). ${p.claim ?? ''}${p.against ? ` Against: ${p.against}` : ''}${src ? ` Sources: ${src}.` : ''}`);
      }
      out.push('');
    }
  }
  if (sources.length) {
    out.push('## The data sources\n');
    out.push(`${sources.length} sources, each tested. Those marked "on the globe" can be laid over the ground; the rest are for scripts.\n`);
    for (const [g, label] of Object.entries(GROUP)) {
      const list = sources.filter((s) => s.group === g);
      if (!list.length) continue;
      out.push(`### ${label}\n`);
      for (const s of list) out.push(`- **${s.name}**${s.browser?.ok && s.license?.share_ok !== false ? ' (on the globe)' : ''}: ${s.what ?? ''}${s.coverage?.note ? ` Covers: ${s.coverage.note}.` : ''}${s.license?.name ? ` Licence: ${s.license.name}.` : ''}`);
      out.push('');
    }
  }
  out.push(`## Credits

Elevation and sea-floor depth: Terrain Tiles (Mapzen, hosted by AWS Open Data). Pictures of the Earth: NASA Blue Marble Next Generation and Black Marble through NASA GIBS; Sentinel-2 cloudless 2016 by EOX (contains modified Copernicus Sentinel data 2016), CC BY 4.0. Past sea levels: Lambeck and others, 2014, PNAS 111:15296. Known-sites check: Wikidata (CC0) and OpenStreetMap contributors (ODbL). Place search: Photon by Komoot, on OpenStreetMap data. Further sources are credited where they are shown.
`);
  return out.join('\n');
};
