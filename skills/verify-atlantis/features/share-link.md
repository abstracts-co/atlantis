# Share link

A view has an address. Opening the address shows the same place, sea level, view and city.

## Sub-features

- `address` the current view can be written as link parameters.
- `restore` opening those parameters restores the view.

## How to get to it (user POV)

- On a card, press `Share this view`.
- Open a link with parameters such as `ll`, `r`, `sea`, `lens`, `l`, `p`, `o` and `city`. On abstracts.co each carries the `a_` prefix.

## Driving it with verify.mjs

Preconditions:

- Baseline.

Run `node source/build/verify.mjs drive share-link`.

- **Make a view.** Stand the city on the first Atlantis place, set the sea to -60 m and the view to bare earth. Step `the view has an address`. The parameters include `city`, `sea=-60` and `lens=1`.
- **Reopen.** Open those parameters in a new tab. Step `opening that address in a new tab restores the view`. The city stands, the sea is at -60 m and the view is bare earth.

## Gotchas

- The journey sets the view through the page's own link handler, then reads the address back. It does not press `Share this view`, which hands the link to the system share sheet.
- On abstracts.co the parameters reach the page through the host. That path is not covered here.
