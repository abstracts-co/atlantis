# Add a legend or a place

Everything on the globe's pins comes from `data/legends.json`. A good entry lets a sceptical reader check every claim in two taps. [data/README.md](../../data/README.md) has the format and the meaning of each word.

Read the community first (`get_community` with slug `atlantis`) and follow the [Abstracts kit](https://abstracts.co/kit/abstracts/SKILL.md). The change is a pull request from the member's own account, and they see it before it is opened.

## 1. Is it already there?

Search `legends.json` for the name, its other names and the coordinates. A new proposal for an existing legend is a new entry in that legend's `places`, not a new legend.

## 2. Find the sources first

- **Where the story comes from**: the earliest text, with a link to the passage (Perseus, Wikisource, a museum or library). This goes in `origin`.
- **For each place**: who proposed or found it, when, and on what evidence. Prefer the excavation report or the paper (a DOI link), then the museum or heritage agency, then careful journalism. Wikipedia can be a second source, never the only one. No tourist boards, no video channels.
- **The case against**: for every place that isn't a confirmed find, the main objection and who makes it.

Open every link and read enough to be sure it says what you claim.

## 3. Coordinates come from a source, never from memory

Take `lat` and `lon` from the place's Wikidata item (property P625), reached through its Wikipedia title, or from the paper. Record `wikipedia` and `wikidata`. For a search area, use the named feature the proposal points to and set `precision_km` honestly. Never place a pin for something nobody has located.

For a real site that is unexcavated or could be looted, give no more than its discoverers published: the district, with `precision_km` of 10 or more.

## 4. Standing is what scholars think

Use the words in [data/README.md](../../data/README.md). If the mainstream view is that a place never existed, `status` is `legend` and the summary says so in its last sentence. A famous proposal with no support is `fringe`, and one that was tested and failed is `rejected`. Being popular doesn't change either.

## 5. Write it plainly

Two or three sentences in `summary`: what the story says, where it first appears, what scholars make of it. One or two in each `claim` and one in `against`. Say who claims what. Dates as BCE and CE. No "mysterious", no "experts are baffled".

`look_for` is for the next searcher: what trace the thing would leave and in which data. A city of stone leaves straight walls in lidar. A wooden ship leaves a mound of ballast in sonar. A legend with nothing physical behind it gets an honest `look_for` that says so.

## 6. Check and send

```sh
node tools/check-legends.mjs            # the format
node tools/check-legends.mjs --online   # coordinates against Wikidata, and every link
```

Show the member the entry and how its pins look on the globe, then open one pull request that changes only `data/legends.json`, and post about it in the `legends` category if they want to.
