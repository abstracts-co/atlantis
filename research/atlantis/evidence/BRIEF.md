# Evidence on the ground: shared rules and format

Read this whole file before you start. It applies to every site.

## What this is for

We are building a public 3D globe of the real Earth for one question: where could Atlantis have been, and what does the evidence say about each place people have proposed? The draft is in `/Users/home/abstracts-drafts/lost/`. It is not published.

Today the globe shows each proposed place as a pin and a card of text. The owner's verdict: "you just go to different spots of the earth, but you don't see any evidence that was uncovered, it forces you to read more than explore 3D objects and scenes". So each well-studied place is becoming a **scene**: the real terrain and sea floor, with the research drawn on it where it happened. The survey box on the sea bed. The line the ship sailed. The core holes, each with what came up. The excavation. The shape someone said was a wall, drawn the way they drew it, and next to it what the check found. A switch flips between **claimed** and **found**.

Your job is one site: find every piece of fieldwork and every claimed structure there **that can be put at a real position**, with its source, and write it in the format below. The owner's instruction for this round is: "as historically and data accurate as possible". A feature we cannot place honestly is worse than no feature.

The globe must stay honest. Most classicists read Atlantis as a fiction Plato invented to make a philosophical point, and no proposed location has archaeological support. Do not tilt the data towards "it existed", or towards mocking anyone who looked.

## Rules

- **Work only in `/Users/home/abstracts-drafts/lost/research/atlantis/evidence/`.** Write `<site>.json` and `<site>.md` there (your site id is in your task). Do not change any other file or folder. Do not create repositories, push, post or publish anything. Do not start subagents. Do the work yourself, on this machine. Do not open any window on the screen: the owner is live-streaming from this computer. Scripts and headless tools only.
- **Read these first, read-only.** They already hold sources for your site, so start from them and do not repeat their work:
  - Your site's entry in `/Users/home/abstracts-drafts/lost/data/hypotheses.json` (who proposed it, what is said to fit and break, the tests).
  - The entries for your site in `/Users/home/abstracts-drafts/lost/data/searches.json` (expeditions and how they ended) and `/Users/home/abstracts-drafts/lost/data/site-data.json` (open data at the place and the surveys).
  - `/Users/home/abstracts-drafts/lost/data/plato.json`: what Plato says, as claims with ids and numbers. Use these ids.
  - `/Users/home/abstracts-drafts/lost/data/sources.json`: 105 data layers the globe can already draw. Use their ids.
  - `/Users/home/abstracts-drafts/lost/library/out/catalog.json`: 144 works already catalogued, 31 of them stored as text you can read under `library/out/indexes/<id>/` (`index.json` is a tree of titles and summaries; `text/<node_id>.md` is one section). Read from here before you fetch the same thing again.
- **Nothing from memory.** Every fact and every position needs a source you fetched today and read. Prefer the paper (DOI page, open copy), the cruise report, the dataset's own record, the project's own site. News and Wikipedia are fine for finding things and as second sources, never as the only source for a contested fact or for a position.
- **Quote the evidence.** Each feature and each measurement carries a short exact quote from its source in `evidence`. If you only saw a title or abstract, say so in `notes`.
- **Say what kind of source it is** in `kind`: peer-reviewed, cruise-report, dataset, official, book, preprint, press, proponent-site, self-published.
- **Be fair to people.** Say what a named person proposed, did or published, neutrally, with the published replies. No guesses about motives.
- If you cannot verify something, leave it out of `features` and put one line in `not_located` or `not_verified`. Do not pad.
- Be polite to servers: a descriptive User-Agent where you script, a few requests a second at most, give up on a host after three failures.
- Write the JSON early and keep it valid as you go. Validate before you finish (see the end of this file).
- Writing: plain words, short sentences, no hype, no em dashes. `line` and `label` fields are read by the public on the globe: make them clear to someone who knows nothing about the subject, and never longer than the limit given.

## Positions: the part that matters most

Every feature has a real position, and says how we know it. In order of preference:

1. **`from-dataset`**: an open record gives the coordinates. Look here first:
   - Cores, dredges, grabs and samples: PANGAEA (`https://www.pangaea.de`, search by cruise, author or bounding box; its API returns JSON), the Index to Marine and Lacustrine Geological Samples at NOAA NCEI, IODP, ODP and DSDP site lists.
   - Ship tracks and multibeam surveys: NOAA NCEI trackline and multibeam services, the Marine Geoscience Data System, EMODnet Bathymetry (survey outlines; `emodnet-highres-outlines` and other ids in `sources.json`), national hydrographic offices, the cruise's own data page.
   - Excavations and monuments: OpenStreetMap (Overpass), Wikidata, the national heritage register, the project's own GIS.
2. **`stated-coordinates`**: the paper, report or announcement prints the coordinates, or a table of them.
3. **`digitised-from-figure`**: you read the position off a map in the source that has a latitude and longitude grid or at least two points you can fix. Name the figure, say which control points you used, and give an honest `error_m`.
4. **`from-description`**: only a verbal description ("about 80 km south-east of the island, at 1,500 m depth"). Allowed for a single point with a large `error_m`. Never for a line or an outline.

Never draw a shape that no source drew. If a claimed structure was shown only in a picture with no position or scale, it goes in `not_located` with what is missing. If two sources give different positions, keep the better one and note the other in `notes` with the distance between them.

Coordinates are WGS84, `[longitude, latitude]` in decimal degrees, as in GeoJSON. An optional third number is metres relative to today's sea level (negative below it). Keep features light: at most 200 points in one feature, at most 60 features for the site. Pick the features that tell the story; note in the `.md` what you left out.

Check yourself: after writing, compute each feature's distance from the site centre and look at any that is further than `radius_km`. A swapped latitude and longitude is the commonest mistake.

## Output: `<site>.json`

```json
{
  "lane": "evidence/<site-id>",
  "checked": "2026-11-11",
  "site": {
    "id": "<site-id>",
    "hypothesis_id": "<id in data/hypotheses.json>",
    "name": "Name as the public knows it",
    "centre": { "lat": 0, "lon": 0, "how": "what this point is and how it was fixed", "source": "https://..." },
    "radius_km": 20,
    "claimed": { "line": "What was announced or proposed, one sentence, at most 140 characters", "who": "", "year": 2001, "source": "https://...", "evidence": "exact quote", "kind": "peer-reviewed" },
    "found": { "line": "What the checks showed, one sentence, at most 140 characters", "who": "", "year": 2005, "source": "https://...", "evidence": "exact quote", "kind": "peer-reviewed" },
    "needs_sea_level": { "m": -60, "when": "about 9600 BCE", "why": "one sentence: why the proposal depends on a lower sea", "source": "https://...", "evidence": "exact quote" },
    "best_layers": ["ids from data/sources.json that show this place best, most useful first"]
  },
  "features": [
    {
      "id": "short-unique-id",
      "side": "claimed | checked | found | context",
      "kind": "survey-area | track | core | sample | dive | dig | structure | outline | place",
      "label": "At most 40 characters",
      "who": "Person or team",
      "year": 2003,
      "what": "One sentence: what was done or claimed here.",
      "result": "One sentence: what it showed. null for a claim that was never checked.",
      "geometry": { "type": "Point | LineString | Polygon", "coordinates": [] },
      "position": { "how": "from-dataset | stated-coordinates | digitised-from-figure | from-description", "source": "https://...", "detail": "the record id, table or figure, and the control points if digitised", "error_m": 200 },
      "column": [ { "from_m": 0, "to_m": 1.2, "what": "grey marsh clay", "age": "about 2000 BCE, radiocarbon, calibrated" } ],
      "search_id": "<id in data/searches.json, or null>",
      "source": "https://...",
      "evidence": "exact quote, at most 300 characters",
      "kind_of_source": "peer-reviewed",
      "confidence": "high | medium | low",
      "notes": ""
    }
  ],
  "measurements": [
    {
      "id": "short-unique-id",
      "what": "What was measured, in plain words",
      "value": 14, "unit": "km",
      "plato_claim": "<claim id from data/plato.json that this number can be held against, or null>",
      "plato_value": "What Plato gives, with the Stephanus reference, or null",
      "source": "https://...", "evidence": "exact quote", "kind": "peer-reviewed"
    }
  ],
  "story": [
    { "step": 1, "side": "claimed | checked | found", "line": "One sentence, at most 160 characters", "show": ["feature ids to light up"], "search_id": "<id in data/searches.json, or null>" }
  ],
  "not_located": [ { "what": "", "why": "what is missing: no position, no scale, source not open", "source": "https://..." } ],
  "handoffs": [ { "lane": "another lane or site", "what": "one line", "url": "https://..." } ],
  "not_verified": [ "what you could not fetch or confirm, and why" ]
}
```

What the fields mean:

- **`side`**. `claimed`: something a proposer says is there, drawn the way they drew or described it. `checked`: where a check was carried out (a survey, a track, a core, a dive, a dig), with its `result`. `found`: something a check established is really there (a mapped outline, an excavated building, a dated deposit). `context`: a named place or natural shape that helps a visitor get their bearings.
- **`kind`**. `survey-area`: the ground or sea bed an instrument survey covered (Polygon). `track`: a ship track, seismic line or dive transect (LineString). `core`: a drilled core or borehole (Point); add `column` when the layers are published. `sample`: a dredge, grab or rock sample (Point). `dive`: a dive, submersible or camera station (Point). `dig`: an excavation (Point or Polygon). `structure`: a shape somebody says is man-made, as they drew it (LineString or Polygon). `outline`: a natural shape that was mapped, such as a crater rim, a ring ridge or a former shore (LineString or Polygon). `place`: a named point.
- **`column`** is optional and only for cores and digs with published layers. Depths are metres below the surface or the sea bed.
- **`needs_sea_level`** is null when the proposal does not depend on a lower sea.
- **`measurements`** are the numbers a visitor can hold against Plato: how big the island or the rings really are, how deep, how far from the sea, how old. Where Plato gives a number for the same thing, name the claim and give his number from `data/plato.json`.
- **`story`** is the scene's short walk-through: 4 to 7 steps in the order things happened, from the first claim to the latest check. Each step lights up some features.

## Output: `<site>.md`

A plain summary a busy person can read in five minutes: what was claimed, what was checked and where, what was found, how good the positions are (count features by `position.how`), disagreements between sources (each as "A says X, B says Y", with numbers and sources), what you left out, and what you could not find.

## Before you finish

Run this and fix what it reports:

```
node -e "
const f=process.argv[1],j=JSON.parse(require('fs').readFileSync(f,'utf8'));
const c=j.site.centre,R=6371,rad=Math.PI/180,d=(a,b)=>{const x=(b[0]-a[0])*rad*Math.cos((a[1]+b[1])*rad/2),y=(b[1]-a[1])*rad;return Math.hypot(x,y)*R;};
const flat=(g)=>g.type==='Point'?[g.coordinates]:g.type==='LineString'?g.coordinates:g.coordinates.flat();
for(const x of j.features){const far=Math.max(...flat(x.geometry).map(p=>d([c.lon,c.lat],p)));
  const bad=[];if(far>j.site.radius_km)bad.push('outside radius: '+far.toFixed(1)+' km');
  for(const k of ['id','side','kind','label','what','source','evidence'])if(!x[k])bad.push('missing '+k);
  if(x.label&&x.label.length>40)bad.push('label too long');if(!x.position||!x.position.how||!x.position.source)bad.push('no position source');
  if(bad.length)console.log(x.id,'::',bad.join('; '));}
for(const k of ['claimed','found'])if(j.site[k].line.length>140)console.log(k,'line too long');
console.log('features',j.features.length,'measurements',j.measurements.length,'story',j.story.length);
" <site>.json
```

## Your final message

What you produced, with counts by `side` and by `position.how`. The three features that will matter most in the scene. Disagreements between sources. What you could not place and why.
