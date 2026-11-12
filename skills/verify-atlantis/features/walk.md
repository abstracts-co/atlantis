# On foot

A person can walk through Plato's city as in a game: move with keys or a thumb, look with the mouse or a finger, and use what is in front of them. Water, walls and gates are solid, so the rings are crossed by their bridges as the text has it.

## Sub-features

- `enter` puts the visitor on foot before the gate in the wall of gold, at the centre of the city.
- `where` the city stands on the open Atlantic beyond the strait unless someone has stood it on a proposed place.
- `look` with a mouse, one click takes the pointer, as in a game: after that moving the mouse looks, with no button held, and `Esc` gives the pointer back. On a phone two faint sticks are on screen: the left walks, the right looks; a drag anywhere else also looks.
- `move` click or tap the ground to walk there. `W` `A` `S` `D` or the arrow keys also walk and `Shift` runs, for those who reach for them.
- `solid` water, the world outside, the ring walls and the wall of gold cannot be walked through; bridges, gateways, the stair to the citadel and the temple's steps can.
- `no instructions` nothing on screen says how to move. The obvious things work.
- `use` click or tap a thing to use it. A label under the middle of the view names what is straight ahead; pressing it, or `E`, uses that.
- `leave` `Fly up` shows the city from above; `The globe` goes to the whole Earth; `The hall` goes inside the hall.

## How to get to it (user POV)

- Press `Enter the city` on the intro.
- Open the menu at the top left and press `Walk the city`, or press the building button at the top right.
- Watch the story to its end, or press `Skip to the city` in it.
- With the city shown from above, press `Go on foot` on its bar.
- Open a link that carries `a_walk=1`.

## Driving it with verify.mjs

Preconditions:

- Baseline.

Run `node source/build/verify.mjs drive walk`.

- **Enter.** Press `Enter the city`. Steps `"Enter the city" puts the visitor on foot in Plato's city`, `the city stands where the text points, beyond the strait, on open sea`, `the eye is at head height` and `the globe's own controls are put away`.
- **Walk.** Hold `W`, then `Shift` and `S`. Steps `W walks forward at a walking pace` and `Shift runs`.
- **Look.** Drag across the view. Step `dragging turns the head`.
- **Mouse look.** Click once. Step `after one click the mouse looks around with no button held`.
- **Click to walk.** Click the paving ahead. Step `clicking the ground walks there, with no line of instructions on screen`.
- **Wall of gold.** Walk at it away from its gate, then through the gate. Steps `the wall of gold cannot be walked through` and `its gate, and the door of the hall behind it, can`.
- **Water, bridges, walls.** Steps `water and the world outside the city cannot be stood on`, `a ring of water is crossed by its bridge and nowhere else` and `a ring wall is passed by its gateway and nowhere else`.
- **Temple.** Step `the temple is climbed by its four steps and entered by its door`.
- **Reach.** Step `every part of the city has ground to stand on near it`.
- **Leave and return.** Press `Fly up`, then `Go on foot`. Steps `"Fly up" leaves the ground and shows the city from above` and `"Go on foot" on the city's bar comes back down`.

## Gotchas

- A browser with no window will not give the pointer to a page, so the journey tells the page the pointer was taken and checks what the page then does. That the browser really hands it over on a click has to be tried once by a person in a real browser.
- The two sticks show only on a touch screen. Nobody has tried them on a real phone.
- The journey walks with real key presses, so a slow machine covers less ground in the same time. The pace steps allow a wide range.
- Walking was measured on a laptop. A real phone has not been tried: see `g-phone` in `data/open.json`.
- Columns, statues and houses are not solid yet. Only the things listed under `solid` are.
