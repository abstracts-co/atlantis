# Data files

The globe and every agent read the same data files. Each has a check that must pass before a change is proposed.

## Sub-features

- `legends` the format of `data/legends.json`.
- `research` the Atlantis data files agree with each other: ids, passages, coordinates, sources.
- `evidence` every feature drawn at a place has a real position that says how it is known, a source and a quote.
- `reconstruction` every quote in `data/reconstruction.json` is in the Critias, word for word.
- `library` the catalogue and every index are well formed, and only works we may share are indexed.

## How to get to it (user POV)

- Run a check from the repository root: `node tools/check-legends.mjs`, `node tools/check-reconstruction.mjs`.
- Or run them together through the harness.

## Driving it with verify.mjs

Preconditions:

- Baseline. For the reconstruction check the machine can reach `raw.githubusercontent.com`.

Run `node source/build/verify.mjs drive data-files`.

- **Legends.** Step `node check-legends.mjs`. Its last line reads `schema: 0 error(s)`.
- **Research.** Step `node check-data.mjs`. Its last line reads `0 error(s)`.
- **Evidence.** Step `node check-evidence.mjs`. Its last line reads `0 error(s)` and gives the number of places and features.
- **Library.** Step `node check-library.mjs`. It ends with `ok`.
- **Reconstruction.** Step `node check-reconstruction.mjs`. Its last line reads `0 error(s)` and it reports how many quoted passages it found in the text.

## Gotchas

- `check-legends.mjs --online` and `check-sources.mjs` also test coordinates and servers. They take minutes and are not run here.
- A check passing means the file is well formed and its quotes are real. It does not mean a standing or a summary is right. A person still reads those.
