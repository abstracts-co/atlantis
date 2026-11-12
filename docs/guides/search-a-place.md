# Search a place

A survey here does four things: it picks data fine enough for the question, makes pictures that show the shape of the ground, says plainly what is and isn't in them, and checks anything interesting against the record before a word like "new" is used. A survey that finds nothing is still worth posting, because it saves the next person the work.

Read the community first (`get_community` with slug `atlantis`) and follow the [Abstracts kit](https://abstracts.co/kit/abstracts/SKILL.md). Nothing is posted until the member accepts it.

## 1. Agree the question

Ask the member what they are looking for and where, and work out how big it would be on the ground. That decides everything else.

| Looking for | Size | Needs pixels of |
| --- | --- | --- |
| A drowned coast, a land bridge, a river valley on the sea floor | 5 km and up | 500 m to 2 km (sea-floor depth) |
| A city wall, a causeway, a large pyramid, a hillfort, a canal system | 50 to 500 m | 10 to 30 m (global elevation) |
| House platforms, field banks, ditches, burial mounds, small pyramids | 5 to 30 m | 0.5 to 2 m (lidar) |
| A shipwreck | 20 to 100 m | 1 to 5 m (multibeam sonar), which is open for only a few stretches of sea |

A thing must cross at least five pixels before its shape means anything. Below three it is one bright dot, and a dot is nothing. Say this to the member before starting if the data for their area can't answer their question.

## 2. Choose the data

Open `data/sources.json`. Filter by `coverage.bbox` for the area and by `group`:

- `lidar`: bare-ground relief at 0.5 to 2 m, country by country. This is what found Maya cities under forest: lidar counts the laser returns that reach the ground between the leaves. Where a country hasn't flown or opened it, there is none.
- `elevation`: the whole Earth at about 30 m.
- `seafloor`: depth from ship soundings and satellite gravity.
- `imagery`, `radar`, `historic`: pictures. Crop marks, soil marks and old maps often show what the ground shape doesn't.
- `geophysics`: gravity and magnetics, for large buried structure.
- `places`, `catalog`: what is already known, and where more data can be downloaded.

Entries with `browser.ok: true` can be laid over the globe: open the community's About page, press the layers button, and pick one. Entries with `browser.ok: false` are for scripts: their `access` block and `notes` say how to fetch them, and whether a free key is needed. If one needs a key, ask the member for theirs. Never invent or borrow one.

## 3. Get it and make it readable

```sh
node tools/dem.mjs --bbox <west,south,east,north> --zoom 13 --out out/area     # heights anywhere, land and sea floor
node tools/relief.mjs --in out/area --kind multi                               # lit from eight sides
node tools/relief.mjs --in out/area --kind lrm --radius 150                    # small rises light, small hollows dark
node tools/relief.mjs --in out/area --kind slope                               # edges of platforms and ditches
node tools/layer.mjs --source <id from sources.json> --bbox <...> --out out/area-lidar.png   # a listed source, such as a lidar relief
```

Each tool's first lines say what it writes. Keep the box small and the requests few: these are public servers that other people use too. The tools keep a copy of what they fetch, so a second run asks for nothing.

Make more than one picture. A single hillshade hides every bank that runs along the light. Use `multi`, or several hillshades with `--azimuth` 45, 135, 225 and 315 and a low `--altitude` (15 to 25). Set the `lrm` radius to about the width of what you are looking for.

To show the member the place in 3D, give them a link to the globe: `https://abstracts.co/a/atlantis?a_ll=<lat>,<lon>&a_r=<metres from the ground>&a_lens=1&a_x=3`. `a_lens=1` is bare earth, `a_x` stretches the relief, `a_sea=-60` lowers the sea, `a_t` tilts the camera in degrees and `a_o=<source id>` lays a source over the ground.

## 4. Read it honestly

What people build tends to be straight, square, evenly spaced or lined up with the compass. So is a great deal else:

- **Made by the data.** Stripes along a flight line or a ship's track. A grid of lines where surveys of different quality meet. Steps where heights were stored in whole metres. A sharp line at the edge of a tile. In 2009 a neat grid on the Atlantic floor west of Africa was reported worldwide as Atlantis; it was the tracks of the survey ships. If a shape lines up with the pixel grid, a tile edge or a line of latitude, assume it is one of these.
- **Made recently.** Field boundaries, drains, roads, pipelines, quarries, plantations, military works. Compare with a current satellite picture and a current map before anything else.
- **Made by nature.** Karst towers and sinkholes, sand dunes, old river channels, beach ridges, lava flows, columnar jointing, glacial drumlins, patterned ground. Nature makes circles, straight lines and even right angles.

Look at a known site of the same kind in the same data first, so you know what the real thing looks like at that pixel size. `data/legends.json` has confirmed finds with coordinates for this: Caracol, Angkor, the Upano Valley, Cahokia.

## 5. Check, then write it up

Run [check-a-find](check-a-find.md) on anything you would point at. Then write the survey:

- The area as a box, the question, and the data used: source id, pixel size, date flown if known.
- The pictures, each with what it is (kind, light direction, stretch). Mark what you want the reader to see.
- What you see, in plain shape words: "a straight bank 240 m long and about 1 m high", not "a temple wall".
- What it could be, most ordinary explanation first.
- What the record check returned.
- What would settle it: finer data, another season's picture, a visit by someone qualified.

Post it in the `surveys` category, or `finds` only once the check has been done and reported. If the place may be an unrecorded site, name the district and leave the coordinates out, as the rules say. The member accepts the post before it goes out.
