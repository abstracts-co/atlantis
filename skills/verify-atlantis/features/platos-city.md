# Plato's city

A person can stand the city Plato describes in the Critias on any proposed place, at true size, and read which parts come from the text and which are choices.

## Sub-features

- `stand` builds the city at the chosen place and flies to it.
- `measurements` the rings, canal, outer wall and temple have Plato's sizes.
- `parts` every part the model draws is an entry of the record, and every stop of the walk is a part.
- `walk` forty stops from the canal's mouth to the temple; each flies to a part, lights it and shows the passage it comes from.
- `text or guess` draws our choices pale and leaves solid only what the text fixes.
- `open the temple` lifts the roof, the ceiling and the gables off Poseidon's temple to show the room inside.
- `press a part` pressing a part of the city shows where it comes from.
- `notes` a panel lists what is from the text, with passages, and what is our choice.
- `remove` takes the city away.

## How to get to it (user POV)

- Open a place from the list or its pin and press `Stand Plato's city here`.
- Open a link that carries `a_city=<lat>,<lon>,<bearing>`.
- With the city shown from above, a bar appears at the bottom: `Go on foot`, `See each part`, `Text or guess`, `Open the temple`, `Every part` for the notes, and `Remove`.
- Press any part of the city.

## Driving it with verify.mjs

Preconditions:

- Baseline. `data/reconstruction.json` is present and `node tools/check-reconstruction.mjs` passes.

Run `node source/build/verify.mjs drive platos-city`.

- **Stand it.** Open the first place in the list and press `Stand Plato's city here`. Step `"Stand Plato's city here" builds it and flies there`. The city is on the globe.
- **Rings.** Read the model's shore radii. Step `ring shores stand at 2.5, 3.5, 5.5, 7.5, 10.5 and 13.5 stadia (Critias 115e-116a)`. At 185 m to the stadion they are 463, 648, 1018, 1388, 1943 and 2498 m.
- **Canal and wall.** Step `canal 50 stadia by 3 plethra, outer wall 50 stadia out (115d, 117e)`.
- **Temple.** Step `temple a stadion by three plethra (116d)`.
- **Parts.** Steps `every stop of the walk is a part of the model` and `every part of the model is an entry of the record`. The stops are the model's own list (`WALK` in `source/engine/city/surfaces.js`).
- **South.** Step `the sea is to the south (118a-b)`.
- **Bar.** Step `a bar for the city appears while it stands`.
- **Part by part.** Press `See each part`, `Next ›`, then `End the walk`. Steps `"Walk through it" starts at the first part, lit, with what it is`, `Next goes to the second part and the view moves` and `"End the walk" puts the city back as it was`.
- **Text or guess.** Press it. Step `"Text or guess" draws our choices pale`.
- **Open the temple.** Press it. Step `"Open the temple" lifts its roof and the room inside is seen`: a ray down the middle of the view lands on something inside the room.
- **Notes.** Press `Every part` on the bar. Step `the notes list what is from the text and what is our choice`. The rows equal the entries of `reconstruction.json`.
- **Remove.** Press `Remove the city`. Step `Remove takes the city away`.

## Gotchas

- This journey proves the model's measurements, not its looks. Look at the end-state picture for those, or run `node source/build/citylab.mjs` for four test views and the time a frame takes.
- The open-temple step asks what is seen, not whether a flag is set. An earlier model hid its roof and still showed a lid, because the beam over the columns was a solid box. A part that should lift is put in a bin named `<id>#roof`.
- The one-file build carries the city's pictures only when made without `--no-city-pictures`. Without them the city is drawn in code and looks flatter close up.
- The stadion length is a choice. Changing it scales every radius: update the expected metres here too.
- The quotes in the notes are checked against the Greek text's English by `tools/check-reconstruction.mjs`, not by this journey.
