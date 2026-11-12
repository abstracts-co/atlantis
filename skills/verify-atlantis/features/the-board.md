# The board

One screen that shows the state of the whole case: how many places, how many checked, every search and how it ended, and each place against each thing Plato wrote. Blank cells are work nobody has done.

## Sub-features

- `numbers` four counts: places proposed, places where Plato's city has been found, places never checked on the ground, and Plato's checkable details never measured anywhere.
- `searches` every search in date order, each with a sign for how it ended.
- `grid` a row for each place, a column for each detail of Plato's that has been held against a place, a mark where it is said to fit or to break.
- `unmeasured` shaded columns for the checkable details nobody has measured.
- `reasons` a mark opens the reason, its source and the passage; a column head opens Plato's words and how to check them.
- `go` a place's name closes the board and goes there.

## How to get to it (user POV)

- Open the menu at the top left and press `The board`, or press `Open the board` in the list of famous claims.
- Press a sign on the line of searches, a mark in the grid, a column head, or a place's name.
- Close it with the cross, or the Escape key.

## Driving it with verify.mjs

Preconditions:

- Baseline.

Run `node source/build/verify.mjs drive the-board`.

- **Open.** Press `The board` in the menu: the board opens.
- **Numbers.** The four numbers equal the counts made from `legends.json` and `case.json`.
- **Searches.** The line has one sign for each search in `case.json`. Press one: a card gives its title and how it ended.
- **Grid.** There is one row for each place and one mark for each fit or break in the data.
- **Reasons.** Press the first mark: the card has the passage quoted and a source link.
- **Unmeasured.** The number of shaded columns equals the number of checkable details not held against any place. Press one: its card says it has not been held against any place yet.
- **Go.** Press the first place's name: the board closes and that place is open.

## Gotchas

- The numbers are counted when the page loads. Nothing on the board is typed by hand, so a wrong number means wrong data.
- On a narrow screen the grid scrolls sideways; the place names stay in view.
- "Tested, and the result stands" describes the check, not Atlantis: no search has found it.
