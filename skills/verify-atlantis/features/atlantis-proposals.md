# Atlantis proposals

A person arriving sees one question, where was Atlantis, and every place proposed for it as a pin. They can list the places, open one, and read how it stands against what Plato wrote.

## Sub-features

- `counts` the strip at the top gives the number of places, how many have been checked on the ground and how many have turned up Plato's city.
- `pins` each pin is coloured by the proposal's standing, hollow where nobody has checked on the ground, and ringed where the place has a scene.
- `list` every proposed place in one list, the places with scenes first.
- `card` one place: who proposed it, its standing, what is said to fit Plato and what breaks, the checks made on the ground.
- `marks` each mark opens the reason behind it and Plato's own words.
- `full-case` the longer text and the sources, folded away until asked for.
- `search` the search box finds Atlantis and its places.
- `other-legends` the other legends are reached through the search box.

## How to get to it (user POV)

- Open the page. It opens on Atlantis with the intro showing.
- Open the menu at the top left and press `Famous claims` for the list. Or press any pin.
- In the list press a place. In its card press a mark under `Against Plato`, or open `Read the full case`.
- `‹ All places` at the top of a card goes back to the list.
- Press the search button at the top right and type.

## Driving it with verify.mjs

Preconditions:

- Baseline.

Run `node source/build/verify.mjs drive atlantis-proposals`.

- **Counts.** Open the menu: `Famous claims` shows the number of places in `legends.json`.
- **List.** Press `Famous claims`: the list has one row for each place in the data, and one hollow dot for each place with no check.
- **Card.** Press a place that has no scene: its card opens, the view moves, and it shows one mark for each detail of Plato's the data holds against it.
- **Marks.** Press the first mark: a card opens with the reason and the passage quoted.
- **Full case.** Open `Read the full case`: at least one source link is shown.
- **Back.** Press `‹ All places`: the full list is back.
- **Search.** Type `atlan`: the first result is `Atlantis`.
- **Other legends.** Search `troy` and press Enter: that legend's card opens.

## Gotchas

- Pins on the far side of the planet are not drawn, so counting pins proves nothing about the data. The journey counts rows in the list instead.
- Places with a scene behave differently when opened: see [Scenes](./scenes.md).
- Until tiles have loaded the globe is covered by a loading veil. The harness waits for it.
