# How the globe works

The globe (`artifacts/earth/`) is one page of three.js with no server of its own. Everything it shows is fetched by the viewer's browser from open tile services, listed in `data/sources.json`. Its code is in [`source/`](../source/).

## What it draws

- **Shape.** The planet is a quadtree of Web Mercator tiles wrapped on a sphere. Each tile is a 32 × 32 grid of triangles lifted by a height texture, with finer tiles swapped in as you get closer, down to zoom 15 for heights. Heights come from Terrain Tiles: about 30 m a pixel on land for most of the world, finer in the United States and parts of Europe, and 500 m to 2 km on the sea floor.
- **Colour.** From far away, NASA's Blue Marble. Closer than about 500 m a pixel, the Sentinel-2 cloudless mosaic of 2016, 10 m a pixel. The sea floor has no photograph, so where the sea has been lowered it gets a plain material shaded by depth.
- **Light.** One sun, set by compass direction and height above the horizon at the place you are looking at. Slopes are lit from the height data, hills cast shadows, and the air scatters light the way air does: blue overhead, pale at the horizon, red at dusk. From orbit the shading of slopes is drawn steeper than true, as on a printed relief map, because real slopes are too gentle to see from there. The shape itself is not changed unless you move the Relief slider.
- **Sea.** A flat surface at the level you set. At today's level its colour near the coast is the photograph; elsewhere it is a model of clear water over the real depth.

## The three views

- **Satellite**: the photograph, relit.
- **Bare earth**: no colour, one pale material, so only shape shows. Hollows are darkened and edges lightened by how sharply the ground curves, which is how lidar relief is usually drawn. It works everywhere, at the detail the height data has.
- **Height and depth**: colour by height on land and depth at sea.

Any source in `data/sources.json` that a browser can draw can be laid over the ground. Lidar relief layers go to 1 m or finer where a country has flown and opened them.

## Lowering the sea

One level for the whole planet. Each preset is the middle of what is published, and the panel says the range.

- **The ice-age low point**, about 21,000 years ago: −125 m. Estimates run from −116 m (PaleoMIST, Gowan and others 2021) through −121 ± 5 m (Fairbanks 1989) and −125 to −130 m (Yokoyama and others 2018) to −134 m (Lambeck and others 2014, [PNAS 111](https://doi.org/10.1073/pnas.1411762111)). [data/sea-level-research.json](../data/sea-level-research.json) has each with its source.
- **Plato's date**, about 11,600 years ago: −50 m. Published values run from −43 m to −58 m ([data/world-9600bce.json](../data/world-9600bce.json)). That range decides things at Spartel Bank. The paper that proposed it puts the bank's top 56 m down; today's surveyed depth grids put it about 72 m down. So at Plato's date it was a small island at best, and by the grids a shoal ([research/atlantis/evidence/spartel-bank.md](../research/atlantis/evidence/spartel-bank.md)).
- **14,500 years ago**: about −95 m. This is our own sum of the rates of rise in Lambeck and others 2014. We could not check it against their tables.

Five limits:

- Real coasts differed from the global figure by ten metres or more, and the direction depends on the model: the sea floor rose as the weight of water came off it, and the land rose and sank under ice.
- No ice is drawn. At the ice-age low much of the northern North Sea was under ice, not open plain.

- Real coasts also moved because the land itself rose and sank: under the weight of ice, by earthquakes, by silt. A local shoreline here is a first guess.
- Lakes and inland seas don't follow the ocean. A basin that is sea today stays water at the lowered level if it is deeper than that. Land that lies below sea level and is dry today, such as the Dead Sea shore, Death Valley and the Dutch polders, is kept dry by a short list in the code.
- Depth within a few hundred metres of a coast is the nearest real sounding carried inshore. The source stores none there. See "Heights from Terrain Tiles" in [data/README.md](../data/README.md).

## The hunt: the whole Earth scored

`tools/make-worldfit.mjs` reads the planet's heights at 10 km a cell and scores every cell that was land at Plato's date on five things he says that the shape of the land can answer: it sank (land with the sea 50 m lower, open sea today), it lay beyond the Pillars (Atlantic water, outside the strait), it had a great plain (level low ground of 3,000 by 2,000 stades), mountains sheltered it from the north, and it was an island. The exact thresholds are in `data/worldfit.json`, with the totals, the best matches and the score of every famous claim. `data/worldfit.png` holds the map, one pixel a cell.

On the globe the sunken land that matches glows: dim for one or two clues, sea-green for three, gold for four. No cell scores five. A ring at the middle of the view reads the score of the spot under it, and `Claim this spot` makes a card with the score, the passage behind each clue, and a block of squares to post.

The score describes the landscape. It is five clues of the 27 that could be checked, one sea level for the whole planet, no ice, and 10 km a cell. Places beyond 45 degrees north or south are marked, because the land there has risen or sunk a great deal since the ice melted. A high score is not evidence of a city.

## Sound

The story's sentences are made by `source/engine/storytext.js`: Plato's own words where he has them, and every number from the data. `tools/make-audio.mjs` has each one spoken with ElevenLabs, word for word (only units are written out for the voice), each asked for on its own and then cleaned: cut to the speech, faded at both ends, set to one loudness, with a little silence before and after. It also makes the effects from the prompts written in that file. The files and an index are in `data/audio/`. A recording is matched to its sentence by a key made from the exact words, so a sentence the data has changed is shown in silence until it is recorded again.

While a sentence is told, real things it names appear over the globe: pictures in the public domain, listed with their makers and sources in `data/story-media.json`. Where the sentence is about the city, the view cuts to the part it names instead.

In the page all sound goes through one graph (`source/engine/sound.js`). Every sound fades in and out, a voice cut short fades out before the next begins, a looping sound never reaches its own end because each pass fades into the next, and everything passes one limiter. The speaker button turns sound off.

## On foot, the hall, and meeting

`Enter the city` puts the visitor on foot in Plato's city (`source/engine/walk.js`). The ground is the city's own plan, so water cannot be stood on, the rings are crossed by their bridges, and walls are passed by their gates. Unless someone has stood the city on a proposed place, it stands on the open Atlantic beyond the strait, where the text points and where the sea is about 3.8 km deep: a choice, written down in `data/reconstruction.json` as `home-site`.

At the centre is the shrine of Cleito and Poseidon. Plato says it was holy ground inside a wall of gold and says nothing of its inside. Here it is open, as the community's hall (`source/engine/city/hall.js` for the building, `source/engine/hall.js` for what is in it). Twelve boards on its wall are drawn from the data when the city is built: Plato's claims, the land that has gone under and how it scores, the best matches, the eight studied places with what was claimed and what was found, every search, what is still unknown, and the open work from `data/open.json` with a prompt for each task. The globe on its table is painted from the hunt's own map; using it leaves the city for the whole Earth.

People in the city at the same time meet through an Abstracts room (`source/engine/meet.js`). The page asks the page around it for a room token, which only a signed-in member can get, so walking needs no account while being seen, writing and speaking do. Positions go to the room as one small value each. Voice is peer to peer and only with the nearest eight people who have it on, so a full hall is not a hundred calls. `artifact.json` asks the site for rooms of 100 and for the microphone. `source/build/room-relay.mjs` stands in for the room in the checks.

## Scenes: the research drawn at a place

Eight places open as scenes. `data/evidence.json` lists, for each, every piece of fieldwork and every claimed shape that could be given a real position: survey areas, ship tracks and seismic lines, cores with their layers, samples, dives, digs, outlines, and the shapes somebody says are walls. Flat things are painted on the ground, things that stand up are small models on it, and each has a label. Three colours: orange for what was claimed, blue for where a check was made, green for what a check found.

Every feature says how its position is known (an open data record, coordinates printed in the source, a map in the source, or only a description) and how far off it may be. A position known only roughly is drawn dashed, with the circle it could lie in. A shape no source drew is not drawn: each scene's research file lists what could not be placed and why.

A scene has a `claimed` line and a `found` line, a switch between the two, and a short walk-through in the order things happened. A proposal that needs a lower sea is shown with the sea at that level.

## Finer sea floor under five scenes

Terrain Tiles take their sea floor from a coarse world grid that smooths small banks away: they put the top of Spartel Bank about 220 m down, where surveyed grids put it about 72 m down. A scene about a drowned island is no use if the island is not in the data. So five places (Spartel Bank, Santorini, the Cyprus Basin, Bimini and Helike) each ship a small depth grid cut from the GMRT synthesis (CC BY 4.0), 60 to 500 m a pixel, in `data/patches/`. It replaces the tiles' sea floor inside its box. Land is left alone. `data/patches/index.json` gives each grid's box, pixel size, source and how far it differs from the tiles.

## The board

The strip at the top of the page opens the board: four counts, every search in date order with how it ended, and a grid of each place against each detail Plato gives. A mark means the detail is said to fit or to break, and opens the reason with its source. Shaded columns are details that could be checked and never have been. All of it is counted from `data/legends.json` and `data/case.json` when the page loads.

## The fit test

`Test the fit` on a place lays Plato's measurements on the ground there and reads the open elevation tiles: whether the point is above water at the sea level in use, how much relief lies under the 27 stades the rings need, how far the nearest sea is against the 50-stade canal, how much of a 3,000 by 2,000 stade box is level land, and where the place lies from the Strait of Gibraltar. His plan is drawn in gold at true size. These are our measurements, not published results, and the card says so. Plato gives the plain's size and that it faced south, not its corners: the test sets its seaward side on the nearest shore.

## Plato's city

The city in the Critias can be stood on any place at true size. It is built by `source/engine/city.js` from the numbers in the text: a central island five stadia across, rings of water and land 1, 2, 2, 3 and 3 stadia wide, a canal 50 stadia long and 3 plethra wide, an outer wall 50 stadia out, a temple a stadion long. [data/reconstruction.json](../data/reconstruction.json) lists every part with its passage and quote, and every choice we made where the text is silent: the stadion's length in metres, all heights, the look of the buildings. `node tools/check-reconstruction.mjs` looks up each quote in the Critias.

The model is in `source/engine/city/`, one file per kind of part (ground and water, walls, the citadel with Poseidon's temple, the rings, the town, ships, trees), with its measurements in `plan.js`. Its materials are made from CC0 pictures of stone, plaster, tiles, metal and wood, credited in `source/engine/city/assets/CREDITS.md`; a picture that does not arrive is replaced by one drawn in code. While the city stands, a bar offers a walk of forty stops from the canal's mouth to the temple, each with the passage it comes from; `Text or guess`, which draws our choices pale and leaves solid only what the text fixes; and `Open the temple`, which lifts the roof to show the room Plato describes, with Poseidon in his chariot and the hundred Nereids.

The ground under the city is levelled to the sea or the land at that spot. The city is a drawing of a text. It is not evidence that a city stood there.

## Quiet controls

Everything on the page that is not the 3D scene follows the Abstracts design system's rule that the layout explains itself: no taglines, hint lines, tooltips or explainer text, short placeholders, one label for each control, an accessible name on each icon button, short motion that eases out, and tap targets of 44 px on a phone. `tools/check-quiet.mjs` fails on what breaks it. What is exempt is the 3D scene, the boards drawn in the hall, the story's sentences, and text someone opens on purpose or copies out.

## What it can't show

- Anything smaller than a few pixels of the data in view. On the sea floor that means anything smaller than a few kilometres, except in strips surveyed by sonar.
- What the ground looked like when the sea was lower: no forests, rivers or ice sheets are drawn on exposed sea floor.
- Whether a shape is a ruin. That needs the checks in [skills/check-a-find](../skills/check-a-find/SKILL.md), and then a specialist.

## Links into the globe

Parameters after `https://abstracts.co/a/atlantis?`, each with the `a_` prefix:

| Parameter | Meaning |
| --- | --- |
| `a_ll=36.40,25.40` | Latitude and longitude to look at |
| `a_r=60000` | Distance from that point, in metres |
| `a_t=40`, `a_hd=90` | Tilt and compass heading of the camera, in degrees |
| `a_sea=-50` | Sea level in metres against today. `a_dry=1` removes the sea |
| `a_lens=1` | 0 satellite, 1 bare earth, 2 height and depth |
| `a_x=3` | Stretch the relief this many times |
| `a_l=atlantis`, `a_p=santorini` | Open a legend, and one of its places, by id |
| `a_m=claimed` or `a_m=found` | In a scene, show only what was claimed, or what was checked and found |
| `a_s=3` | In a scene, open that step of the walk-through |
| `a_hunt=24.5,-77.9` | Open the claim card for that latitude and longitude |
| `a_board=1`, `a_tour=1` | Open the board; start the story |
| `a_walk=1`, `a_hall=1` | Start on foot before the gate of the hall; start inside the hall |
| `a_o=<source id>` | Lay a source from `data/sources.json` over the ground |
| `a_city=36.0,-7.2,180` | Stand Plato's city at that latitude and longitude, with the sea in that compass direction |

The Share button on a card writes such a link for the current view.
