# City rebuild: notes for whoever owns the rest of the page

Written by the agent that rebuilt Plato's city on the branch `city-rebuild`. These are things in files it does not own.
Nothing here blocks the city from working.

## Requests

1. **Stars in the day sky** (`source/engine/shaders.js`, `compositeFragment`). Where no ground is drawn, the composite
   pass sets the colour to `stars(dir)` whatever the sun's height, and adds the scattered light on top. From street
   level in the city, looking level, the sky came out dark blue with stars at a sun height of 48°. The city now draws its
   own pale sky dome while the eye is below 2.5 km (`cityscene.js`, `this.dome`), so the air pass treats the sky as
   something 38 km away and lays haze over it. If the globe's own sky is fixed (fade the stars with the sun's height;
   check the sky's brightness against sunlit ground), delete the dome: search for `this.dome` in `cityscene.js`.

2. **The build should not copy `CREDITS.md` and nothing else needs to change** (`source/build/bundle.mjs`). It copies
   `source/engine/city/assets/` to `city/` beside the page, which is right. `CREDITS.md` goes with it (3 KB, one file of
   the 21). If the file count matters, skip `.md` there.

3. **The one-file build** (`source/build/single.mjs`) ships no pictures. The city then draws all ten layers in code
   (`textures.js`), at 128 px. It is recognisably the same city, flatter close up. If the one-file build may carry about
   2.7 MB more, set `globalThis.__ASSETS__` to a base the files can be fetched from, or inline them as data URLs and
   have `loadTextures` accept a map of URLs; say so and the city side is ten lines.

4. **The page's text about the city** (`ui.js`, `drawCity`) can now use `world.city.parts()` for a walk from the sea to
   the temple, `viewOf(id)` to fly to a part, `highlight(id)` while its passage is on screen, `setGhost(on)` for "only
   what the text fixes", `cutaway(on)` for the inside of the temple, and `pick(x, y)` on a tap. What each returns is in
   the comment at the top of each method in `cityscene.js`.

5. **`pick` is a plain ray test against about a million triangles** and takes some tens of milliseconds. Call it on a
   tap or a click, not on every pointer move.

6. **Frame loop** (`main.js`). The signature that decides whether a frame is drawn includes `world.stamp`; the city adds
   one whenever a highlight, the ghost, the cutaway or a late picture changes what is seen. The water's ripple moves
   with `world.time`, so it advances only in frames that are drawn (one in three when idle), as before.

7. **Lab script on other machines**: `source/build/citylab.mjs` now takes its graphics backend from `CITYLAB_GL`
   (`metal` on a Mac, `swiftshader` for software WebGL; the default follows the platform) and writes pictures to
   `research/city-shots/`. On the Mac, `--out shots/city/` keeps them out of git as before.

## Things the parent may want to know

- `reconstruction.json` has a new field on some `from_text` entries: `"shape": "ours"`. It marks things Plato states
  without giving any size or form (the palace, the baths, the barracks, the ships). `setGhost(true)` draws those pale
  together with the choices. `"drawn": false` marks what is in the text and not in the model (the bulls, the canal's
  mouth on the sea).
- `build/check-reconstruction.mjs` now also fails if the model names a part that is not an entry.
- The city's measurements are in `source/engine/city/plan.js` (`DEFAULTS`, re-exported from `city.js`). `bank` is now
  8 m, `hill` 24 m, `modelledTown` 2.5 stadia.
- The levelled pad under the city now reaches `city.radius - 80` = 3,030 m at 185 m to the stadion (was about 3,300 m).
