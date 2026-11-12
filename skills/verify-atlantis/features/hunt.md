# The hunt

The page opens as a hunt. Every 10 km of land that has gone under since Plato's date is scored on five things he says, and the sunken land that matches glows on the globe. A reticle reads the score of whatever is under it, and a person can claim a spot and post the result.

## Sub-features

- `glow` sunken land glows by its score: dim for one or two clues, sea-green for three, gold for four.
- `reticle` a ring at the middle of the view, and one small bar at the bottom: the score, five lights, one button.
- `claim` a card for one spot: the score, a line for each clue with its passage, how it ranks, and a block of five squares to post.
- `link` a claim has an address that opens the same claim.
- `best` the best matches on Earth, then every famous claim scored by the same rules.
- `rules` the rule and passage behind each clue, and what the score cannot tell.

## How to get to it (user POV)

- Open the page and press `Start hunting`, or just move the globe.
- Drag the globe so a spot sits under the ring. Read the five clue lights and the score.
- Press `Claim this spot`.
- Open the menu at the top left for `Best on Earth` and `How it's scored`.
- On a claim, press `Share my claim`, or the copy, X and save buttons beside it. `More to do here` has the fit test and Plato's city.

## Driving it with verify.mjs

Preconditions:

- Baseline. The score map (`worldfit.png`) has loaded.

Run `node source/build/verify.mjs drive hunt`.

- **Glow and reticle.** Press `Start hunting`: the ring and its read-out show, and the glow is on.
- **Read-out.** Put the best match in `worldfit.json` under the ring: the score and the number of clues lit equal the data.
- **Dry land.** Put the Richat Structure under the ring: the read-out says it never sank.
- **Claim.** Press `Claim this spot` on the best match: the card gives the score, five rows, a block with as many green squares as the score, and a link that carries the spot.
- **Honest.** The card is labelled `Landscape match`: the label says what a score is, so no disclaimer is needed. (That a match is not evidence of a city is said in the story, on the hall's boards and in the docs.)
- **Link.** Open the link in a new tab: the same claim is shown.
- **Best.** Press `Best on Earth`: the best matches and all the famous claims are listed, and it says nothing scores 5.
- **Rules.** Press `How it's scored`: five rules, and what the score cannot tell.

## Gotchas

- The score map is one pixel for each 10 km. A bank smaller than that is missed, and a pin a few kilometres off a shelf edge can read as open sea: the famous claims take the best cell within 20 km of their pin.
- The read-out hides while a scene, the board, the story or Plato's city has the stage. The glow stays, fainter.
- The rules and thresholds are ours. They are printed under `How it's scored` and stored in `data/worldfit.json`; `tools/make-worldfit.mjs` makes the map again with others.
- A high score says the landscape resembles five things Plato wrote. It is not evidence of a city, and the page never says it is.
