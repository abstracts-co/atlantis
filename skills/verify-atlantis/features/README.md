# a/atlantis verification map

This folder is the maintained source for verifying what a person can do on the a/atlantis globe. Read this index before driving the page, then use the matching feature file as the recipe.

## Baseline preconditions

- `node source/build/verify.mjs launch` has printed `ready:` and `node source/build/verify.mjs doctor` prints only `ok` lines.
- The page is driven at 1100 by 760 pixels, full window, in a fresh browser with no stored state.
- The page fetches map tiles from public servers, so the machine is online. Journeys that also need a lookup service say so under Gotchas.
- Never drive an instance this harness did not start.

## Driving conventions

- Every journey starts from a fresh page load: the globe in orbit, with the intro showing its three ways in (`Enter the city`, `Watch the story`, `Hunt on the globe`).
- The page's own controls are quiet: no hint lines, tooltips or explainer text. A control is known by its label, and an icon button by its accessible name. `node tools/check-quiet.mjs` guards this.
- Controls are found by their visible label or their accessible name, not by position. Most things beyond the hunt itself are in the menu at the top left.
- One command runs one journey: `node source/build/verify.mjs drive <feature id>`. Each step it prints is one bullet in the feature file.
- Journeys change nothing outside the browser tab. There is nothing to restore.

## Proof and skip reporting

- The proof of a feature is its `.json` in `source/.verify/evidence/<feature id>/`: every step with what was observed, the build hash, and the end-state picture beside it.
- A step that could not run because a service did not answer is reported as blocked, with the service named. It is not a pass.
- Do not report a feature as verified through a different entry point than the one its file lists.

## Feature entry contract

Each feature file has an H1 title and one paragraph on what the person can do, then exactly four H2 sections in this order: `Sub-features`, `How to get to it (user POV)`, `Driving it with verify.mjs`, `Gotchas`. No implementation details: only user paths, labels, required state, the command and what can be observed.

## Features

- [On foot](./walk.md): walking Plato's city, what is solid, using what is in front, leaving and coming back.
- [The hall](./hall.md): the room at the centre: twelve boards made from the data, the open work with a prompt for an AI, the globe that opens the hunt.
- [Meeting](./meet.md): other people as figures, text for the room, voice for those near, rooms that fill.
- [The hunt](./hunt.md): the glow of matching sunken land, the reticle and its score, claiming a spot, the leaderboard, the rules.
- [Atlantis proposals](./atlantis-proposals.md): the counts, the list of famous claims, a place's card and its marks, search.
- [The board](./the-board.md): the case at a glance: the counts, every search, each place against what Plato wrote.
- [Scenes](./scenes.md): the research drawn at a place, claimed and found, the walk-through, the finer sea floor.
- [Fit test](./fit-test.md): Plato's measurements laid on a place and compared with the ground.
- [Sound](./sound.md): the story spoken, the effects of the hunt, the air of the city, the speaker button.
- [The story](./tour.md): Plato's tale in his own words over the globe, what the data says, and at its end the visitor on foot at the gate of the hall.
- [Plato's city](./platos-city.md): standing the rebuilt city on a place, its measurements, the notes, removing it.
- [Sea level](./sea-level.md): the slider, the dated presets, draining the oceans.
- [Surveys and views](./surveys.md): bare earth, stretched relief, laying a survey over the ground.
- [Move the globe](./move-the-globe.md): drag, zoom, tilt, compass.
- [Record check](./record-check.md): going to coordinates and listing what is already recorded there.
- [Share link](./share-link.md): a view's address reopens the same view.
- [Library](./library.md): finding a passage by walking an index, and reading it.
- [Data files](./data-files.md): the checks that guard the data.

## Not mapped yet

- The page inside the Abstracts frame: its height report, and the wheel needing a held key.
- Touch on a phone: one-finger drag, pinch, two-finger turn and tilt.
- Posting a view to the Wall from the card. It needs a signed-in member.
- Meeting on abstracts.co itself, between two signed-in members, and voice between two real microphones.
- Walking on a phone.
- The board, a scene and the fit test on a phone-sized screen.
