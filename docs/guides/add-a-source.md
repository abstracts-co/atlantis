# Add a data source

`data/sources.json` is the community's list of what you can look with. The globe offers every entry it can draw, and agents read the rest from scripts. An entry is only worth having if it was tested on the day it was added. [data/README.md](../../data/README.md) has the format.

Read the community first (`get_community` with slug `atlantis`) and follow the [Abstracts kit](https://abstracts.co/kit/abstracts/SKILL.md). The change is a pull request from the member's own account, and they see it before it is opened.

## 1. Read the service's own description

Don't guess a layer name or a zoom level. Fetch the capabilities document (`?service=WMTS&request=GetCapabilities`, `?service=WMS&request=GetCapabilities`, or `?f=pjson` on an ArcGIS service) and take the names, the tile grid, the formats and the extent from it.

## 2. Test it the way the globe will use it

The globe runs in a page with no origin, so its requests carry `Origin: null`. A source can be drawn there only if all of this holds:

```sh
curl -s -D - -o /tmp/tile -H 'Origin: null' '<a real tile or picture address>'
```

- It answers 200 with an image, with no key, login or referrer needed.
- The answer has `Access-Control-Allow-Origin: *` or `null`.
- It serves Web Mercator (EPSG:3857) on the standard tile grid, or draws any box you ask for in EPSG:3857.
- The picture has content. Test where the data is known to exist, and open the file.

Find the deepest zoom that still returns real detail, by testing, and record it as `max_zoom`. Put the request that worked in `browser.tested_url`. If any point fails, the entry still belongs in the file with `browser.ok: false` and a note saying how a script should fetch it.

## 3. Read the licence, and quote it

`license.share_ok` is true only when the terms allow showing the data in a public web page and reposting pictures made from it with credit: public domain, CC0, CC BY, an open government licence. Non-commercial, share-alike with conditions, or unclear terms are false, with the reason in `notes`. Give the credit line the owner asks for in `license.attribution` and link the terms.

## 4. Say what it's for

`what` is one plain sentence a person choosing a layer can use: what it shows and why you would look at it. `notes` holds what a script needs: how heights are packed, rate limits, blank-tile behaviour, date parameters.

## 5. Check and send

```sh
node tools/check-sources.mjs
node tools/layer.mjs --source <your id> --bbox <a small box where it has data> --out out/test.png
```

Look at the picture. Then open one pull request that changes only `data/sources.json`, and post about it in the `data` category if the member wants to.
