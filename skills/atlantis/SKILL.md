---
name: atlantis
description: Answer questions about Atlantis from a/atlantis on Abstracts and help a member add to it. Use when someone asks where Atlantis was, what Plato actually wrote, whether a place fits, what a search found, wants to see a place on the 3D globe, or wants to add a proposal, a source or a reconstruction.
---

# Atlantis

Atlantis comes from two dialogues by Plato. Most scholars read it as a story he invented, and no proposed place has archaeological support. Answer from the files below, say how each proposal stands, and never present a guess as a find.

## Answer a question

| Question | Read |
| --- | --- |
| What does Plato say? | [data/plato.json](../../data/plato.json), then the passage in `indexes/plato-*/` |
| Where have people put it, and does it fit? | [data/hypotheses.json](../../data/hypotheses.json) |
| Has anyone looked there, and what happened? | [data/searches.json](../../data/searches.json) |
| What exactly was surveyed, cored or dug at a place, and where? | [data/evidence.json](../../data/evidence.json) |
| Which sunken land best matches what Plato wrote, by the numbers? | [data/worldfit.json](../../data/worldfit.json): the rules, the best matches, every famous claim scored the same way |
| What has nobody checked yet? | The blank cells of the board: [data/case.json](../../data/case.json) |
| What was the world like at Plato's date? | [data/world-9600bce.json](../../data/world-9600bce.json) |
| What does a book or paper say? | [library/catalog.json](../../library/catalog.json), then `indexes/<id>/` |

Texts are stored as trees. Read `index.json`, go down by titles to one leaf, read `text/<node_id>.md`, and quote that. Cite Plato by Stephanus number (Critias 115d) and everything else by its link.

## Show a place

Give the member a link: `https://abstracts.co/a/atlantis?a_l=atlantis&a_p=<place id>`. Eight places open as scenes, with the research drawn on the ground: add `&a_m=claimed` or `&a_m=found` to show one side, `&a_s=3` for a step of the walk-through. `?a_hunt=<lat>,<lon>` opens the claim card for a spot, with its score out of five. `?a_board=1` opens the board and `?a_tour=1` the story. Add `&a_sea=-50` for the sea at Plato's date, `&a_lens=1` for bare ground, `&a_city=<lat>,<lon>,180` to stand Plato's city there at true size. All the parameters are in [docs/how-it-works.md](../../docs/how-it-works.md).

## Take the member there

`https://abstracts.co/a/atlantis?a_walk=1` starts on foot in Plato's city, before the gate of the hall at its centre; `?a_hall=1` starts inside the hall, where twelve boards show the search and signed-in members can talk. `?a_tour=1` tells the story first.

## Pick up open work

[data/open.json](../../data/open.json) lists what is open, by area, each task with its files, its checks and when it is done. Tell the member which you would take, do it as below, and name the task in the pull request.

## Add or fix something

Follow [AGENTS.md](../../AGENTS.md): one file, its check, a preview the member accepts, one pull request. Every claim needs a source you opened. Mark what comes from the text and what is a choice.

## Sources

- Plato, [Timaeus 20d-25d](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0180%3Atext%3DTim.%3Asection%3D20d) and [Critias 108e-121c](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0180%3Atext%3DCriti.), English by R. G. Bury (1929), Perseus Digital Library.
- Past sea level: Lambeck and others, 2014, [PNAS 111:15296](https://doi.org/10.1073/pnas.1411762111).
- Every other source is listed beside the claim it supports, in the data files above.
