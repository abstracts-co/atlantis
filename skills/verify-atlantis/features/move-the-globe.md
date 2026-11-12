# Move the globe

A person can drag the ground, zoom, turn and tilt the view, and return to north.

## Sub-features

- `drag` moves the ground under the pointer.
- `wheel` zooms towards the pointer.
- `buttons` plus and minus zoom in steps.
- `turn-tilt` the right mouse button turns and tilts.
- `compass` faces north and looks straight down.

## How to get to it (user POV)

- Drag on the globe.
- Scroll over the globe, or press `Zoom in` and `Zoom out`.
- Drag with the right mouse button, or with a modifier key held.
- Press the compass button.

## Driving it with verify.mjs

Preconditions:

- Baseline.

Run `node source/build/verify.mjs drive move-the-globe`.

- **Drag.** Drag left across the globe. Step `dragging moves the ground`.
- **Wheel.** Scroll up. Step `the wheel zooms in (full window)`.
- **Minus.** Press `Zoom out`. Step `the minus button zooms out`.
- **Turn and tilt.** Right-drag up and to the right. Step `right-drag turns and tilts`.
- **Compass.** Press the compass. Step `the compass faces north and looks down`.

## Gotchas

- Inside the Abstracts page column the wheel zooms only with Ctrl or Command held. This journey runs full window, where it zooms freely.
- Touch gestures are not covered here.
