# The hall

The shrine at the centre of the city, which Plato says nobody entered, stands open as this community's hall. Twelve boards on its wall show the search at a glance, each made from the data, and a globe on the table opens the whole Earth.

## Sub-features

- `boards` twelve, in order from the left of the door: what the room is, Plato's claims, what the Earth says, the best matches, the eight studied places in pairs, every search, what is still unknown, open work, how to help.
- `read` clicking a board, or using it, opens its full text in the side sheet.
- `unknown` every search with no answer, every claim of Plato's not yet scored, and everything claimed at a place with no published position.
- `work` every open task by area, each with a prompt to copy and hand to an AI.
- `globe` using the globe leaves the city for the whole Earth and the hunt; the building button at the top comes back.

## How to get to it (user POV)

- On foot, walk through the gate in the wall of gold and the door behind it.
- Open the menu at the top left and press `The hall`. While on foot, press `The hall` at the bottom right.
- Open the menu and press `Help build this` for the open work without walking.
- Open a link that carries `a_hall=1`.

## Driving it with verify.mjs

Preconditions:

- Baseline. `node tools/check-open.mjs` prints no errors.

Run `node source/build/verify.mjs drive hall`.

- **Inside.** Press `The hall` in the menu. Steps `"The hall" in the menu stands the visitor inside it` and `twelve boards hang on its wall`.
- **Boards.** Steps `every board has writing on it` and `its counts are the data's: open work, open searches`.
- **Use a board.** Face the board of open work. Step `facing a board, a line says what using it will do`. Press `E`. Step `E opens it: every open task, by area`.
- **Prompt.** Steps `a task's prompt names the task, its files, its checks and the repository, and asks before posting or pushing` and `"Copy the prompt for my AI" puts it on the clipboard`.
- **Click.** Click the board of searches. Step `clicking a board opens it`.
- **Unknown.** Use the board `Still unknown`. Step `"Still unknown" lists every search with no answer, every claim not scored and everything claimed with no position`.
- **Globe.** Face the globe. Steps `facing the globe, the line offers to open it` and `it is painted from the hunt's own map: land, sea and the sunken land by its score`. Press `E`. Step `E rises out of the city to the whole Earth, where the hunt is`.
- **Back.** Press the building button at the top right. Step `the button at the top goes back down into the city`.

## Gotchas

- The hall is not in Plato. The record says so (`data/reconstruction.json`, entries `hall` and `shrine-form`), and `Text or guess` draws it pale.
- A board's words are drawn once, when the city is built. After the data changes, reload the page.
- The journey checks that a board has writing and that its counts match the data. It does not read the picture: look at the end-state picture after changing a board.
- The repository named in a prompt comes from `data/open.json` and from the community the page is shown in.
