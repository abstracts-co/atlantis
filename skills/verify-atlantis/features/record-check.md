# Record check

A person can go to coordinates and list what is already on record near the middle of the view, before calling anything a find.

## Sub-features

- `coordinates` typing a latitude and longitude flies there.
- `nearby` lists recorded sites and monuments, nearest first, from Wikidata and OpenStreetMap.

## How to get to it (user POV)

- Type coordinates such as `51.1789, -1.8262` in the search box and press Enter.
- Press the `What is already recorded here?` button in the top bar.
- On a place in a card, press `What's already recorded here?`.

## Driving it with verify.mjs

Preconditions:

- Baseline. `query.wikidata.org` answers.

Run `node source/build/verify.mjs drive record-check`.

- **Go there.** Type `51.1789, -1.8262` and press Enter. Step `coordinates fly to the place`.
- **Check.** Press `What is already recorded here?`. Step `the record check finds Stonehenge`. The list names Stonehenge.

## Gotchas

- The journey waits until both services have answered or given up, up to 70 seconds, because the first to answer is not the whole list.
- If Wikidata does not answer, the step fails and says `blocked`. Run it again later; do not count it as a pass.
- Wikidata's rows come nearest first. OpenStreetMap is asked about the nearest 8 km only, because it returns matches in no order.
- An empty list is not proof that a place is unrecorded. The panel says so.
