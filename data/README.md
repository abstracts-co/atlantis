# The data files

Plain JSON, meant to be read by people's agents and built on. The globe reads `legends.json`, `sources.json`, `reconstruction.json`, `case.json` and `evidence.json`, and the depth grids in `patches/`.

| File | What it holds | Check |
| --- | --- | --- |
| `plato.json` | What Plato says: each claim with its passage, quote and Greek terms; every measurement; the chain of tellers; ancient writers on Atlantis; modern readings | `node tools/check-data.mjs` |
| `hypotheses.json` | Every proposed place: who proposed it, which claims it is said to fit, which it breaks, the tests it has had, the replies, its standing | `node tools/check-data.mjs` |
| `searches.json` | Expeditions, sonar and satellite claims, films and AI searches, each with what was announced and how it ended | `node tools/check-data.mjs` |
| `world-9600bce.json` | The world at Plato's date: sea level by source, ice sheets, what people were building, what did not exist yet | `node tools/check-data.mjs` |
| `sea-level-research.json` | The research on past sea levels and drowned landscapes, with overlaps and contradictions | |
| `evidence.json` | The research at each well-studied place, for drawing: every survey, track, core, sample, dive, dig, outline and claimed shape that has a real position, with its source, a quote, and how the position is known. Merged from `research/atlantis/evidence/<site>.json` by `node tools/merge-evidence.mjs`; the format is in `research/atlantis/evidence/BRIEF.md` | `node tools/check-evidence.mjs` |
| `case.json` | The case at a glance: Plato's claims with short names and numbers, every search in date order, and the reason behind each fit and break. Made by `node tools/make-case.mjs` from `plato.json`, `searches.json` and `hypotheses.json`. Do not edit it by hand | |
| `worldfit.json`, `worldfit.png`, `worldfit-2k.png` | The whole Earth scored against five of Plato's clues, 10 km a cell: the rules and thresholds, how much land sank and how it scores, the best matches, and every famous claim by the same rules. The pictures hold the map (red: score of sunken land; green: which clues; blue: sea then, land, or sunk). Made by `node tools/make-worldfit.mjs` | |
| `story-media.json`, `story/` | The pictures shown while the story is told: for each, the sentence it belongs to (`line`), when and for how long (`at`, `for`, in seconds), its `caption`, who made it (`by`), its `licence` and its page on Wikimedia Commons (`source`). All are in the public domain | `node tools/check-story.mjs` |
| `open.json` | Work that is open for anyone to pick up: `how` (the steps), `areas`, and `work` (each task's `id`, `area`, `size`, `title`, `why`, `start` files, `check` commands, `done_when`, and `status` once taken or done). The hall shows it | `node tools/check-open.mjs` |
| `audio/` | The story spoken and the sound effects, with `index.json` giving each recording's exact words, the voice, and each effect's prompt. Made by `node tools/make-audio.mjs` with an ElevenLabs key | `node tools/make-audio.mjs --check` |
| `patches/` | Finer sea-floor depth for five places, as pictures that hold heights the way Terrain Tiles do, with `index.json` giving each one's box, source and licence. Made by `node tools/make-patches.mjs` | |
| `reconstruction.json` | How the 3D city follows the Critias: each part with its passage and quote, and each choice | `node tools/check-reconstruction.mjs` |
| `legends.json` | The pins on the globe, described below | `node tools/check-legends.mjs` |
| `sources.json` | Map layers and downloads, each tested, described below | `node tools/check-sources.mjs` |

The claim ids in `plato.json` (`ringed-city`, `great-plain`, `elephants` and so on) are the shared vocabulary: proposals and searches refer to them. Passages are cited by Stephanus number. The full text of each cited work is under `indexes/`; `library/catalog.json` lists every work, indexed or not.

Each research file carries `not_verified`: what its author could not fetch or confirm. Read it before relying on an entry.

## `legends.json`: what people look for

```json
{
  "id": "atlantis",
  "name": "Atlantis",
  "aka": ["Island of Atlas"],
  "kind": "sunken-land",
  "status": "legend",
  "summary": "What the story says, where it first appears, and what scholars make of it.",
  "when": "Set by Plato about 9600 BCE; written about 360 BCE",
  "origin": { "text": "Plato, Timaeus 24e-25d and Critias", "url": "https://..." },
  "look_for": "What trace this would leave, and in which kind of data.",
  "sea_level_m": -60,
  "tags": ["plato", "atlantic"],
  "places": [
    {
      "id": "santorini",
      "name": "Santorini (Thera)",
      "lat": 36.404, "lon": 25.396, "precision_km": 10,
      "role": "inspiration",
      "standing": "plausible",
      "claim": "Who proposed it, when, and the evidence for.",
      "against": "The main objection. Null for a confirmed find.",
      "wikipedia": "Santorini", "wikidata": "Q129296",
      "country": "GR", "underwater": false,
      "sources": [{ "title": "Author or publisher, title, year", "url": "https://..." }]
    }
  ]
}
```

- `kind`: `sunken-land`, `lost-city`, `treasure`, `shipwreck`, `tomb`, `relic`, or `remote-sensing-find` (a real site found by lidar, satellite or geophysics).
- `status`, for the legend as a whole: `legend` (no evidence it existed as told), `unlocated` (real and attested, not found), `disputed` (a claimed find scholars contest), `found` (located and accepted), `hoax`.
- `role`, for a place: `found` (the accepted location), `candidate` (proposed), `search-area` (where searches concentrate), `claimed` (a find someone announced that isn't accepted), `inspiration` (a real place thought to lie behind the story), `origin` (where the story or the object started).
- `standing`, for a place: `confirmed`, `mainstream` (the leading scholarly view), `plausible` (taken seriously by some specialists), `fringe` (argued mostly outside scholarship), `rejected` (examined and refuted), `hoax`.
- `lat`, `lon` come from a source that was opened and read: the place's Wikidata item or a cited paper, never from memory. `precision_km` is how far the real or proposed spot could be from the pin: 1 for an excavated site, 10 to 50 for an island or a district, more for a vague search area.
- For real sites that are unexcavated or at risk of looting, the pin is no sharper than what the discoverers published, and `precision_km` is 10 or more.
- `sea_level_m` is set only where a past sea level is the point of the story and a source supports the number. The globe offers to set the sea to it.
- `country` is ISO 3166-1 alpha-2, or null in international waters.

`node tools/check-legends.mjs` checks the format; with `--online` it also compares every coordinate with Wikidata and tries every source link.

## `sources.json`: what they can look with

```json
{
  "id": "usgs-3dep-elevation",
  "name": "USGS 3DEP elevation",
  "group": "lidar",
  "kind": "hillshade",
  "what": "One sentence: what it shows and why a site hunter would look at it.",
  "coverage": { "bbox": [-180, -15, 180, 72], "note": "United States; 1 m where lidar has been flown" },
  "resolution_m": 1,
  "access": {
    "type": "arcgis-image",
    "url": "https://.../exportImage?bbox={bbox}&bboxSR=3857&imageSR=3857&size={size},{size}&format=jpgpng&f=image",
    "tile_order": null, "crs": "EPSG:3857", "min_zoom": 0, "max_zoom": 16,
    "format": "jpg", "encoding": null, "key_required": false,
    "variants": [{ "id": "slope", "name": "Slope", "url": "..." }]
  },
  "browser": { "ok": true, "acao": "*", "tested_url": "https://...", "http": 200, "content_type": "image/jpeg", "bytes": 12345 },
  "license": { "name": "Public domain", "url": "https://...", "attribution": "USGS 3D Elevation Program", "share_ok": true },
  "docs": "https://...",
  "notes": "Rate limits, quirks, how to decode."
}
```

- `group`: `lidar`, `elevation`, `seafloor`, `imagery`, `radar`, `geophysics`, `historic`, `places`, `catalog`.
- `kind`: `hillshade`, `elevation-tiles` (heights packed into an image: `access.encoding` says how), `imagery`, `colour-relief`, `anomaly-map`, `coverage-map`, `point-cloud`, `raster-download`, `vector-places`, `api`.
- `access.type`: `xyz`, `wmts`, `wms`, `arcgis-image`, `arcgis-map` can be drawn as map tiles; `ept`, `cog`, `stac`, `download`, `api`, `sparql` are for scripts.
- In `access.url`, `{z}`, `{x}`, `{y}` are tile numbers on the standard Web Mercator grid, in the order they appear. `{bbox}` is `minx,miny,maxx,maxy` in EPSG:3857 metres and `{size}` is pixels, for services that draw any box.
- `coverage.bbox` is `[west, south, east, north]` in degrees.
- `browser.ok` is true only if the source was fetched, on the `checked` date at the top of the file, from a page with no origin: no key, an `Access-Control-Allow-Origin` header, Web Mercator, and a real picture back. `browser.tested_url` is the request that proved it. Sources with `browser.ok: false` still work from a script.
- `license.share_ok` is true when the terms allow showing the data in a public web page and reposting pictures made from it, with credit. The globe offers only those. Always repeat `license.attribution` with a picture.

`node tools/check-sources.mjs` fetches every `tested_url` again and reports what has stopped working.

### Heights from Terrain Tiles

`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png`, zoom 0 to 15. Height in metres is `red × 256 + green + blue ÷ 256 − 32768`. Two things to know, both handled by `tools/dem.mjs` and by the globe:

- Sea-floor depth is in the tiles only up to zoom 10. From zoom 11 the sea is stored as 0, with a few broken values (below −11,000) along seams. Take the sea from zoom 10.
- At zoom 10 the coastline is drawn in blocks about 150 m across, a little outside the true shore, with land heights inside it. To avoid a false ledge around every island when the sea is lowered, spread the sea values a few pixels into the coarse land first, then let the fine tile decide where the shore is.
