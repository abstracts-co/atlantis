# The globe's source

Search the Earth is one page of three.js. It has no server: the viewer's browser fetches every tile from the open services in `data/sources.json`.

```sh
npm ci
node build/bundle.mjs --dev          # dist/app.js and dist/index.html, with the two data files beside them
node build/serve.mjs 8930 "$PWD/"    # a static server that sends CORS headers
```

Open `http://127.0.0.1:8930/dist/index.html` for the full window, or `http://127.0.0.1:8930/preview/preview.html` to see it framed the way Abstracts frames it (`?w=360` for a phone). `node build/shot.mjs <url> out.png 1200 760` takes a picture once the tiles have loaded; set `CHROME_BIN` to a Chrome or Chromium.

`node build/publish.mjs` writes `publish/artifact/earth/` (the post) and `publish/repo/` (this repository).

## The parts

| File | What it does |
| --- | --- |
| `engine/geo.js` | Sphere and Web Mercator maths |
| `engine/tiles.js` | Fetches tiles in priority order, decodes heights, fills the sea floor into fine tiles |
| `engine/globe.js` | The quadtree: picks the tiles a view needs and gives three.js one mesh for each |
| `engine/shaders.js` | Ground, sea, air, stars, bloom and the film curve, in GLSL |
| `engine/camera.js` | Look-at camera: drag, pinch, tilt, fly to |
| `engine/post.js` | The passes after the planet is drawn |
| `engine/main.js` | Starts everything and runs the frame loop |
| `engine/data.js` | Reads `legends.json` and `sources.json`, search, turns a source into a layer |
| `engine/ui.js` | Search, pins, the legend card, readings, sea level, the known-sites check, sharing |
| `engine/host.js` | Talks to the Abstracts page: height, layout, share, post |
| `engine/page.html` | The page and its styles |

## Looks from the address bar

For testing a view: `?ll=36.4,25.4&r=60000&t=40&hd=30` (place, distance, tilt, heading), `&sea=-60`, `&dry=1`, `&lens=1`, `&x=3`, `&l=atlantis&p=santorini`, `&o=<source id>`, `&az=300&alt=20` (sun), `&still=1` (don't spin), `&clean=1` (no controls, for cover pictures), `&phone=1`.

## Things to know before changing it

- **Precision.** Positions are metres from the Earth's centre, far too big for 32-bit floats. Each tile's vertices are stored relative to the tile's centre, and three.js multiplies camera and tile matrices in 64-bit before sending them to the GPU. Keep it that way or the ground will shake when you zoom in.
- **Height textures are 258 pixels**, not 256: a one-pixel rim carries each tile's slope past its edge so neighbours meet without a line. `GRID` in `tiles.js`.
- **The sea in fine tiles comes from zoom 10.** See "Heights from Terrain Tiles" in `data/README.md`.
- **Don't multisample.** Tiles are dense meshes, so MSAA shades most pixels several times over. Edges are smoothed in the last pass instead.
- **The air is drawn at half size** and laid over the sharp picture by the composite pass, which picks half-size neighbours at a similar distance so haze doesn't bleed across a ridge line. At full size it cost three times the rest of the frame.
- **The frame budget** is `pixelBudget` in `main.js`. The loop lowers resolution by itself when frames run slow.
- Tile servers are other people's. Keep the request count per view low, and never add a source without its licence.
