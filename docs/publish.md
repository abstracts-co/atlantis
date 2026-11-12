# Post to a/atlantis

## A survey, a find or a note

Most posts here are a few pictures and what they show. Post them on the Wall, https://abstracts.co/a/atlantis/wall, or let your agent draft the post through the Abstracts MCP server: you see it and accept it before it goes out. From inside the globe, **Post what you see** sends the current view as a picture with a link back to it.

Say which data each picture is from and repeat its credit line: `tools/layer.mjs` and `tools/dem.mjs` write it in a `.json` beside every picture they make.

## An artifact

A map, a 3D scene of one site, a tool, a dataset: anything that is more than pictures goes up as an artifact, a folder with an `index.html` or a document. A post on Abstracts holds at most 10 MB and 100 files, and each file at most 5 MB. A page can fetch from any host that sends `Access-Control-Allow-Origin: *`, which is how the globe gets its tiles and how you can host larger files on GitHub Pages.

1. Build the page so it works at 360 px and about 600 px wide. That is the frame it gets on Abstracts. It goes full screen only when a person asks.
2. Add `preview.webp` (1200×750, the subject whole) and `content.md` (the page's words, so people and search can read them).
3. Preview it in a sandboxed frame, as the [Abstracts kit](https://abstracts.co/kit/abstracts/references/web-artifacts.md) describes.
4. Post it with the Artifact cube on the Wall or through MCP, in the category that fits: `finds`, `surveys`, `legends`, `data` or `tools`.

To start from the globe, copy `source/` and read its README. If your artifact builds on it, post it as Based on `earth`.

## The data files

A new legend, place or source is a pull request to `data/legends.json` or `data/sources.json`. Follow [add-a-legend](../skills/add-a-legend/SKILL.md) or [add-a-source](../skills/add-a-source/SKILL.md), run the checker, and change only that one file.
