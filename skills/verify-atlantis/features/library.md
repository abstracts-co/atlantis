# Library

A person's agent can find a passage in any indexed work without reading the whole work: it walks the index by titles and summaries to one leaf, and reads that leaf.

## Sub-features

- `catalogue` `library/catalog.json` lists every work and says which are indexed.
- `tree` each indexed work has `indexes/<id>/index.json`.
- `reference` every leaf of Plato is titled with its Stephanus reference.
- `walk` titles and summaries lead to the right leaf.
- `read` the leaf's text holds the passage.

## How to get to it (user POV)

- Open `library/catalog.json`, pick a work, open `indexes/<id>/index.json`, then `indexes/<id>/text/<node_id>.md`.
- With the Abstracts MCP server: `list_indexes`, `read_index`, then `read_file` on the leaf's `text_path`.
- On the site: https://abstracts.co/a/atlantis/documents.

## Driving it with verify.mjs

Preconditions:

- `indexes/` and `library/catalog.json` are in the checkout. No browser or network is needed.

Run `node source/build/verify.mjs drive library`.

- **Catalogue.** Read the catalogue. Step `the catalogue lists the works and which are indexed`. It reports both counts.
- **Trees.** Step `every indexed work has its tree`.
- **References.** Read the Critias in Bury's English. Step `each leaf of the Critias carries its Stephanus reference`.
- **Walk.** Look for the canal by titles and summaries only. Step `titles and summaries lead to the leaf about the canal`. It names the leaf.
- **Read.** Open that leaf. Step `that leaf gives the canal as three plethra wide and fifty stades long (Critias 115d)`.

## Gotchas

- This proves one passage in one work. `node tools/check-library.mjs` checks the shape of every index.
- Jowett's leaves were matched to Stephanus ranges by content, so a range can be a sentence or two out at its edges. Use Bury or the Greek when the exact section matters.
- The MCP route and the site's documents page are not driven here: they need the community to be published.
