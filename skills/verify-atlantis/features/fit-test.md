# Fit test

Lay Plato's own measurements on any proposed place and read what the ground is like there: is it above water, is there level ground for the rings, how far is the sea, is there room for the plain, and where does it lie from the strait.

## Sub-features

- `measure` the heights are read from the open elevation tiles, at the sea level in use.
- `plan` his rings, canal, outer wall and plain are drawn on the ground at true size, and the city stands in the middle.
- `rows` five rows, each with Plato's figure and passage beside what was measured here.
- `sea-levels` the same test at today's sea, at Plato's date and at the ice-age low.
- `copy` the numbers as text, for a post or an agent.
- `clear` takes the plan and the city off the globe.

## How to get to it (user POV)

- Open a place and press `Test the fit`.
- Press `Today`, `Plato's date` or `Ice-age low` to measure again.
- Press `Copy these numbers` or `Clear the gold lines`.

## Driving it with verify.mjs

Preconditions:

- Baseline. The machine can reach the elevation tiles. The place driven is the Richat Structure.

Run `node source/build/verify.mjs drive fit-test`.

- **Measure.** Press `Test the fit`: the card fills in.
- **Sizes.** The rings and the wall have the sizes that follow from the numbers in `case.json` at the stadion in `reconstruction.json`.
- **Ground.** At the Richat Structure the ground is dry, more than 300 m up, with no sea within 150 km.
- **Plan.** Six shapes are drawn and the city is standing.
- **Rows.** The card has five rows.
- **Sea levels.** Press `Plato's date`: the sea is at -50 m and the card fills in again.
- **Clear.** Press `Clear the gold lines`: no shapes are drawn and the city is gone.

## Gotchas

- These are our measurements from open data, not published results, and the card says so. They describe the ground; they do not decide a claim.
- If the elevation tiles do not answer, the journey reports the test as blocked, not passed.
- Plato does not say where the plain's corners were. The test sets its seaward side on the nearest shore, and says so on the card.
- A place that is under water at the chosen sea level is reported as under water, with the distance to the nearest land.
