# Scenes

At the places that have been studied on the ground, the research is drawn where it happened: survey boxes and ship tracks on the sea bed, cores and digs standing on the ground, the shape somebody claimed, and what the checks found. A switch flips between claimed and found.

## Sub-features

- `draw` opening the place draws every feature in `data/evidence.json` for it, each with a label.
- `sea` a proposal that needs a lower sea is shown with the sea at that level, and the sea goes back on leaving.
- `depth` where the place has its own finer depth grid, the sea floor comes from it.
- `claimed-found` `Claimed` shows what was claimed, `Found` what was checked and what turned up, `Both` everything.
- `walk` numbered steps tell the story in order; each lights up its own features and moves the view.
- `feature` choosing a feature shows what it is, its result, the quote, the source and how its position is known.
- `keep` closing the card leaves the scene on the globe; a note at the bottom brings the card back or leaves the scene.

## How to get to it (user POV)

- Press a ringed pin, or a place marked `scene` in the list.
- In its card press `Claimed`, `Found` or `Both`.
- Press a numbered step, or `Start ›` and `Next ›`.
- Press a feature in the card's list, or its label on the globe.
- Close the card with the cross. Use `open its card` or `leave` in the note at the bottom left.

## Driving it with verify.mjs

Preconditions:

- Baseline. The place driven is Spartel Bank, which has a finer depth grid and needs a lower sea.

Run `node source/build/verify.mjs drive scenes`.

- **Draw.** Open the place from the list: the number of features drawn equals the number in `evidence.json`, and at least one label shows.
- **Sea.** The sea goes to the level given in the data.
- **Depth.** The height of the globe at a feature that carries a surveyed depth is within 15 m of that depth.
- **Claimed and found.** `Claimed` draws only claimed features and places; `Found` draws checked and found features and places.
- **Walk.** Press step 1: the features lit are the ones the data lists for that step, and its sentence shows.
- **Feature.** Press the first feature: its card has a source link and says how its position is known.
- **Keep.** Close the card: the scene stays. Press `open its card`: the card is back.
- **Leave.** Press `‹ All places`: nothing is drawn and the sea is back at today's level.

## Gotchas

- The finer depth grid arrives a moment after the place opens, and the ground is read again when it does. The journey waits for it.
- A position known only roughly is drawn with the circle it could lie in, and its line is dashed. That is the data being honest, not a drawing fault.
- Labels that would overlap are reduced to dots. Counting labels proves little; the journey counts features drawn.
- If a feature has no source, no quote or no stated way its position is known, it is not in `evidence.json` at all: `tools/merge-evidence.mjs` leaves it out and says so.
