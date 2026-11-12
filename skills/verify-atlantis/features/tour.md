# The story

A person can watch Plato's tale told over the globe in under two minutes, one sentence at a time, in his own words where he has them, with what the data says about it. When it ends they are standing in the city, before the gate of the hall.

## Sub-features

- `sentences` eleven lines: the tale, the island, the city, its fall, the date, the land that has gone under, the best match, the searches, the city rebuilt, the shrine opened, and "Walk in".
- `quotations` words between quotation marks are Plato's, from the translations in the research data.
- `numbers` every number in it is taken from the data when the story is told.
- `pictures` real things appear over the globe as they are named: Raphael's Plato, Kircher's map, a tenth-century Timaeus, the Great Bahama Bank from orbit, Rudbeck's and Donnelly's books, Santorini and the Richat Structure from the space station. Each has a one-line caption.
- `views` at "a city of rings" the view cuts from the rings to the silver temple to the wall of orichalcum, as the sentence names them.
- `globe` the globe moves with each line: the city stands beyond the strait, the sea falls and rises, the sunken land glows, the best match is scanned.
- `controls` `Pause`, `Next`, and `Skip to the city`.
- `ending` the last line is spoken with the visitor already on foot; then the story's bar goes away.

## How to get to it (user POV)

- Press `Watch the story` on the intro.
- Open the menu at the top left and press `Watch the story`.
- Open a link that carries `a_tour=1`.

## Driving it with verify.mjs

Preconditions:

- Baseline.

Run `node source/build/verify.mjs drive tour`.

- **Start.** Press `Watch the story`. Steps `the story starts with Plato, in his own words` and `it opens on the whole Earth, with no city on it`.
- **Pause.** Press `Pause`. Step `"Pause" holds it`. Press `Play`.
- **The city.** Press `Next` to the third line. Step `at "a city of rings" the city stands beyond the strait, on open sea`.
- **The land gone under.** Press `Next` to the sixth line. Step `at "gone under" the sea is back at today's level and the sunken land glows`.
- **The end.** Press `Next` to the last line. Step `its last sentence is spoken with the visitor already on foot`. Press `Finish`. Step `"Finish" leaves them standing before the gate in the wall of gold`.
- **Skip.** Start it again from the menu and press `Skip to the city`. Step `"Skip to the city" ends the story at once, on foot`.

## Gotchas

- The sentences are made by `source/engine/storytext.js`. `node tools/make-audio.mjs --check` fails if a quotation in one is not in the research data, word for word.
- The count of searches and how they ended come from `data/case.json`; the land that has gone under and the best match come from `data/worldfit.json`. When those change, the sentences change and must be recorded again (see [Sound](./sound.md)).
- The pictures are listed in `data/story-media.json`, each with its maker, its licence and its page on Wikimedia Commons. `node tools/check-story.mjs` fails on one without a source or one still on screen after its sentence has ended. The journey does not look at them: watch the story once after changing the list.
- "Not one has found the city" is the story's own summary of the record. If a search is ever recorded as having found it, that line must go.
