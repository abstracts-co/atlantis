# Add a scene: the research at a place

A scene is a proposed place with its research drawn on the globe where it happened. Eight places have one. This guide adds another, or adds features to one that exists.

## Before you start

Read [research/atlantis/evidence/BRIEF.md](../../research/atlantis/evidence/BRIEF.md) in full. It has the rules and the exact format. The short version:

- **Nothing from memory.** Every feature needs a source you opened, a quote from it, and a real position.
- **Say how the position is known**, in this order of preference: an open data record, coordinates printed in the source, a map in the source that you read against its grid, or a description (a single point only, with a large error).
- **Never draw a shape no source drew.** What cannot be placed goes in `not_located`, with what is missing.
- **Be fair to people.** Say what someone proposed or published, with the published replies.

## Steps

1. Pick the place. Its id is in [data/hypotheses.json](../../data/hypotheses.json), and what is already known about it is in that file, in [data/searches.json](../../data/searches.json) and in [data/site-data.json](../../data/site-data.json).
2. Write `research/atlantis/evidence/<site>.json` and `<site>.md` as the brief describes. Run the self-check at the end of the brief.
3. Merge and check:

   ```sh
   node tools/merge-evidence.mjs
   node tools/check-evidence.mjs
   ```

   The merge leaves out any feature that fails and says why. Fix the research file, not `data/evidence.json`.
4. If the place is under water and small, look at how the open elevation tiles see it: `node tools/dem.mjs --bbox <west,south,east,north> --zoom 10 --out out/<site>`. If a bank or basin that matters is missing, add a box for the place in `tools/make-patches.mjs` and run it. It prints how far the finer grid differs from the tiles.
5. See it. Build and open the place:

   ```sh
   node source/build/verify.mjs launch
   node source/build/shot.mjs "<the url it printed>?l=atlantis&p=<place id>" out/<site>.png
   node source/build/verify.mjs drive scenes
   ```

   Look at the picture. Every feature should sit where its source puts it: a core on the shore it was drilled on, an outline on the island it traces. A feature in the sea that should be on land is almost always a swapped latitude and longitude.
6. Show the member the picture and the `.md` summary, and wait for them to accept it. One pull request.

## What makes a good scene

- A `claimed` line and a `found` line a stranger can read in five seconds.
- Something claimed and something found that can be seen side by side: an outline as drawn against the ground as it is, a claimed wall against the cores taken through it.
- A walk-through of four to seven steps, in the order things happened.
- Numbers to hold against Plato: how big, how deep, how far from the sea, how old.
- An honest `.md`: how good the positions are, where sources disagree, what was left out.
