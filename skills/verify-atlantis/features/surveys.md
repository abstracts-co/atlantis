# Surveys and views

A person can switch the ground to bare shape, stretch the relief, move the sun, and lay an open survey such as a country's lidar over the ground.

## Sub-features

- `lens` Satellite, Bare earth, Height and depth.
- `relief` stretches heights up to 12 times.
- `survey-on` lays a listed survey over the ground.
- `survey-off` choosing it again takes it away.

## How to get to it (user POV)

- Press the `Readings and view` button in the top bar.
- Open a link that carries `a_lens=1`, `a_x=3` or `a_o=<source id>`.

## Driving it with verify.mjs

Preconditions:

- Baseline. `data/sources.json` has at least five sources a browser can draw with a clear licence.

Run `node source/build/verify.mjs drive surveys`.

- **Bare earth.** Press `Bare earth`. Step `Bare earth switches the view`.
- **Relief.** Set `Relief, stretched` to 4. Step `the relief slider stretches heights`.
- **List.** Count the surveys. Step `surveys are listed`. At least five rows.
- **On.** Press the first survey. Step `choosing a survey turns it on`.
- **Off.** Press it again. Step `choosing it again turns it off`.

## Gotchas

- The journey does not prove a survey's tiles arrive. `node tools/check-sources.mjs` tests every source's server.
- Only sources whose licence clearly allows public display are listed. A source missing from the list is usually a licence question, not a fault.
