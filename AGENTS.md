# Agents in a/atlantis

This file is the map. Read it, pick the row that fits the task, and open only that.

The quickest way to see where the case stands is the globe's board (`https://abstracts.co/a/atlantis?a_board=1`): each proposed place against each thing Plato wrote. A blank cell is work nobody has done, and filling one is the most useful thing an agent can do here.

Read the community with `get_community` (slug `atlantis`) and follow the [Abstracts kit](https://abstracts.co/kit/abstracts/SKILL.md): the member sees a preview and accepts it before anything is posted, committed or pushed, under their own GitHub account. The one skill to install is [skills/atlantis](skills/atlantis/SKILL.md).

## Where things are

| You need | Open | Its check |
| --- | --- | --- |
| What Plato says: every claim, number and passage | [data/plato.json](data/plato.json) | `node tools/check-data.mjs` |
| The text itself, by passage | `indexes/plato-*/` | `node tools/check-library.mjs` |
| Any other book or paper | [library/catalog.json](library/catalog.json), then `indexes/<id>/` | `node tools/check-library.mjs` |
| Every proposed place, who proposed it, what fits, what was tested | [data/hypotheses.json](data/hypotheses.json) | `node tools/check-data.mjs` |
| Every search and how it ended | [data/searches.json](data/searches.json) | `node tools/check-data.mjs` |
| The research at a place, with positions: surveys, tracks, cores, digs, claimed shapes | `research/atlantis/evidence/<site>.json`, merged into [data/evidence.json](data/evidence.json) by `node tools/merge-evidence.mjs` | `node tools/check-evidence.mjs` |
| The case at a glance, as the globe's board shows it | [data/case.json](data/case.json), made by `node tools/make-case.mjs`; never edited by hand | `node source/build/verify.mjs drive the-board` |
| The whole Earth scored against five of Plato's clues: the hunt's map, the best matches, the famous claims by the same rules | [data/worldfit.json](data/worldfit.json) and `data/worldfit.png`, made by `node tools/make-worldfit.mjs`; the rules are in the file | `node source/build/verify.mjs drive hunt` |
| The story's words, its narration and the sound effects | `source/engine/storytext.js`, then `data/audio/` made by `node tools/make-audio.mjs` (needs an ElevenLabs key for that command) | `node tools/make-audio.mjs --check`, `node source/build/verify.mjs drive sound` |
| Finer sea-floor depth under a scene | `data/patches/`, made by `node tools/make-patches.mjs` | `node source/build/verify.mjs drive scenes` |
| The world at Plato's date: sea level, ice, what people built | [data/world-9600bce.json](data/world-9600bce.json) | `node tools/check-data.mjs` |
| Map layers and downloads, tested | [data/sources.json](data/sources.json) | `node tools/check-sources.mjs` |
| The pins on the globe | [data/legends.json](data/legends.json) | `node tools/check-legends.mjs` |
| How the 3D city follows the text | [data/reconstruction.json](data/reconstruction.json), `source/engine/city.js` and `source/engine/city/` (one file per kind of part; measurements in `plan.js`) | `node tools/check-reconstruction.mjs`, `node source/build/verify.mjs drive platos-city` |
| Walking the city, and what is solid | `source/engine/walk.js`; the ground is `source/engine/city/plan.js` | `node source/build/verify.mjs drive walk` |
| The hall at the centre: its walls, its boards, its globe | `source/engine/city/hall.js` (the building), `source/engine/hall.js` (what hangs in it, made from the data) | `node source/build/verify.mjs drive hall` |
| Other people in the city: figures, text, voice | `source/engine/meet.js`; the room is Abstracts' own (kit: web-artifacts, "Live rooms") | `node source/build/verify.mjs drive meet` |
| The pictures shown while the story is told | [data/story-media.json](data/story-media.json), files in `data/story/`, each one's record in `research/story-media/commons.json` | `node tools/check-story.mjs` |
| The page's own controls (everything that is not the 3D scene) | `source/engine/page.html` and the scripts that write into it. They stay quiet: no hint lines, tooltips or explainer text | `node tools/check-quiet.mjs` |
| The page people see, built from `source/` and `data/` | `artifacts/earth/` (never edited by hand) | `node tools/check-artifact.mjs` |
| Work that is open for anyone to pick up | [data/open.json](data/open.json) | `node tools/check-open.mjs` |
| The globe's code | [source/README.md](source/README.md) | `node source/build/verify.mjs drive all` |
| Formats of every data file | [data/README.md](data/README.md) | |
| Heights, relief pictures, a source picture, known sites near a point | `tools/dem.mjs`, `relief.mjs`, `layer.mjs`, `known.mjs` | each file starts with how to run it |

## Read a text without reading all of it

Every work in `indexes/<id>/` is a tree: `index.json` has titles and short summaries, and `text/<node_id>.md` has the words of each leaf. Walk down by titles to the leaf you need, read that leaf, and quote from it. With the Abstracts MCP server: `list_indexes`, `read_index`, then `read_file` on the leaf's `text_path`. Plato's leaves are titled by Stephanus number, so "Critias 115d" finds the canal. For many questions at once, `library/pageindex/` is a PageIndex local store: `PageIndexClient(index={"storage_path": "library/pageindex"})`. [library/NOTES.md](library/NOTES.md) says how each tree was made and why each work may be shared.

## Pick up open work

[data/open.json](data/open.json) lists what is open, by area: graphics, research, data, sound, play, the hall. Each task says why it matters, the files it starts in, the checks that must pass and when it is done. The hall in the city shows the same list and gives a prompt for each task. To take one: tell the member which you would take and offer to say so on the Wall; do it on a branch; run its checks; show the member; then one pull request that names the task. When a task is done, set its `status` to `done` in the same pull request. A new task is one more entry in that file.

## Change something

1. Find the row above. Change that one file.
2. Run its check. For anything a person sees on the globe, also run the matching journey in [skills/verify-atlantis](skills/verify-atlantis/SKILL.md) and keep its evidence.
3. If you changed anything in `source/` or `data/`, rebuild the page people see: `cd source && npm ci && cd .. && node tools/check-artifact.mjs --fix`. It writes `artifacts/earth/` from `source/` and `data/`; `node tools/check-artifact.mjs` must then pass. The live page changes when the pull request is merged.
4. Show the member the result and wait for them to accept it. One pull request, one kind of change.

To try a different idea without changing the page everyone sees (another way to draw the city, a new set of viewpoints), post it as its own artifact, Based on this one: a copy of the page in `artifacts/<your-id>/` with your change, built the same way with `node source/build/bundle.mjs --out artifacts/<your-id>/`, posted with `based_on: "earth"` (MCP `create_post`) or **Build on this** on the website, so it is linked to the page it improves. Through MCP each file sent inline is at most 5 MB and all of them together 10 MB, 100 files at most; larger files go first with `start_upload` (see the Abstracts kit). It is on the community's Artifacts tab as soon as it is posted, under the member's name. The owner can then pin it, make it the community's About page in its place, or fold it into the main page. To make folding it in one step, send the same change to `source/` and `data/` as a pull request too, with `artifacts/earth/` rebuilt (step 3), and link the two.

Guides for the common jobs: [add a scene: the research at a place](docs/guides/add-a-scene.md), [add a proposal or correct one](docs/guides/add-a-legend.md), [add a data source](docs/guides/add-a-source.md), [survey a place](docs/guides/search-a-place.md), [check a find](docs/guides/check-a-find.md), [post](docs/publish.md).

## Three rules that matter most here

1. **Nothing from memory.** A claim goes in only with a source you opened. Quotes are checked by script against the text they cite.
2. **Standing is what scholars think**, not what is popular. Plato's Atlantis is a `legend`. A tested and failed proposal is `rejected`.
3. **Text or choice.** In the reconstruction, every part is either tied to a passage or listed as a choice. Do not blur the two.
4. **A position or nothing.** Anything drawn at a place says how its position is known: a data record, printed coordinates, a map in the source, or a description. A shape no source drew is not drawn.
