# Sea level

A person can lower or raise the sea for the whole planet, jump to dated levels, or drain the oceans.

## Sub-features

- `slider` sets the sea from -150 m to +70 m.
- `presets` Today, 9600 BCE (-50 m), 12,500 BCE (-95 m), 19,000 BCE (-125 m).
- `drain` removes the water and shows the bare sea floor.

## How to get to it (user POV)

- Press the `Sea level` button in the top bar.
- Press `Set the sea to Plato's date` in the intro.
- Open a link that carries `a_sea=<metres>` or `a_dry=1`.

## Driving it with verify.mjs

Preconditions:

- Baseline.

Run `node source/build/verify.mjs drive sea-level`.

- **Slider.** Drag the slider to -120. Step `the slider lowers the sea`. The sea is at -120 m.
- **Ice age.** Press `19,000 BCE`. Step `the ice-age preset sets -125 m`.
- **Plato's date.** Press `9600 BCE`. Step `Plato's date sets -50 m`.
- **Drain.** Tick `Drain the oceans and show the bare sea floor`. Step `draining the oceans turns the water off`.
- **Back.** Untick it and press `Today`. Step `Today puts the sea back`.

## Gotchas

- Each preset is the middle of a published range: -116 to -134 m for the ice-age low (`data/sea-level-research.json`) and -43 to -58 m for Plato's date (`data/world-9600bce.json`). -95 m is our own sum from one paper's rates and is unchecked. If those files change, change the presets and this file together.
- The journey checks the level, not the picture. Shorelines depend on tiles that load after the level changes.
