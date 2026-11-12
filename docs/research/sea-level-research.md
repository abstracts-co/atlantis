# Drowned lands: prior work on past coastlines and sea level

Lane `drowned-lands`. Checked 2026-11-11. Data in `drowned-lands.json` (50 entries; ids in `code` are used below).

## Progress

What the research says, in one paragraph: the ice-age sea-level low is known to within about 10 to 20 m, not to the metre, and the local sea level at any one coast differs from the global figure by more than that. Fine shoreline maps exist for a few shelves (North Sea, Baltic, Sunda, Persian Gulf, north-west Australia), and one Europe-wide open layer exists. Most famous "sunken land" claims either have a real literature that disagrees with itself (Black Sea, Younger Dryas impact) or press coverage without a paper behind it (Doñana).

### Global sea-level history

| Source | Low point | Near 14.5 ka | Near 11.5 ka | Near 8 ka | Kind |
| --- | --- | --- | --- | --- | --- |
| Fairbanks 1989 (`fairbanks-1989-barbados`) | -121 +/- 5 m (Barbados, relative) | rapid rise (1A) | rapid rise (1B) | not read | coral, peer-reviewed |
| Yokoyama and others 2018 (`yokoyama-2018-two-step-lgm`) | -118 m at the Great Barrier Reef (local); -125 to -130 m global at about 20.5 ka | not read | not read | not read | coral + GIA model |
| Lambeck and others 2014 (`lambeck-2014-esl`) | -134 m, 29 to 21 ka (global) | MWP-1A starts, about 20 m in about 500 y | no global 1B; near-uniform rise 11.4 to 8.2 ka at about 15 m per thousand years | rate falling | corals + GIA model |
| Spratt and Lisiecki 2016 (`spratt-lisiecki-2016-stack`) | scaled to -130 m at 24 ka; GIA models give -130 to -134 m; error 9 to 12 m (1 sigma) | not read | not read | not read | isotope stack |
| Sathiamurthy and Voris 2006 (`sathiamurthy-voris-2006-sunda-maps`) | -116 m, -117 m at 21 ka (Sunda, local) | -85 and -90 m at 14.5 ka | -45 m at 11.2 ka, -50 m at 11.5 ka | -10 m at 8.4 ka | Sunda Shelf table |
| PaleoMIST 1.0, Gowan and others 2021 (`gowan-2021-paleomist`) | -116 m (global ice-equivalent) | not read | not read | not read | ice-sheet model |
| Our globe (`our-globe-sea-level-presets`) | -134 m | about -95 m | about -60 m (at 11.4 ka) | none | Lambeck plus our sums |

"Not read" means I did not find the number in the pages I read, not that it does not exist. Lambeck's paper gives -134 m and rates of rise in its text; the level at each date is in its SI file, which I did not open. Our -95 and -60 m are therefore unchecked here.

Meltwater pulse sizes: Lambeck about 20 m in about 500 years; Deschamps 12 to 22 m at Tahiti, most probably 14 to 18 m, 14,650 to 14,310 years ago (`deschamps-2012-mwp1a-tahiti`); Hanebuth up to 16 m in 300 years on the Sunda Shelf (`hanebuth-2000-sunda-flooding`); Liu and others 8 to 15 m (`liu-2016-mwp1a-amplitude`).

### Models that give a different sea level at each place

| Model | What is downloadable | Grid | Time steps | Licence |
| --- | --- | --- | --- | --- |
| ICE-6G_C (VM5a), Peltier and others 2015 | NetCDF: topography with bathymetry, difference from present, ice thickness, land fraction | 1 x 1 degree (about 111 km) | 48 files, 26 to 0 ka (1 ka steps to 21 ka, then 0.5 ka) | none stated; page asks for citation |
| ICE-7G_NA (VM7) | NetCDF paleo-topography | 1 x 1 degree | 0.5 ka steps from 26 ka (list read to 5 ka) | none stated |
| PaleoMIST 1.0, Gowan and others 2021 | NetCDF ice thickness, deformation, sea-level change, paleo-topography; scripts for any resolution | 1 and 0.25 degree | 2,500 y steps, 80 ka to present | CC BY 4.0 |
| ANU (Lambeck) | I found no download page | | | |

`peltier-ice6g-ice7g-data` and `gowan-2021-paleomist` have the links.

### Ready-made past coastlines and viewers

- **EMODnet Geology submerged landscapes** (`emodnet-geology-submerged-landscapes`): more than 10,000 features in 26 classes, including mapped and modelled palaeocoastlines; "Last Glacial Maximum Landscapes" as shapefile and WMS, CC BY 4.0, British Geological Survey.
- **Sathiamurthy and Voris** (`sathiamurthy-voris-2006-sunda-maps`): a 31-row CSV of Sunda sea level, CC BY 4.0.
- **Viewers that already let people lower the sea**: Sea Level Map (`sea-level-map-vercel`, now "500,000 years") and DisasterMap's Ice Age Mode (`disastermap-ice-age-mode`, ICE-7G_NA, 48 time slices, self-reported April 2026).
- **SPLASHCOS Viewer** (`splashcos-viewer`) and its book (`bailey-2020-drowned-landscapes`): known submerged prehistoric finds in Europe. I could not open the viewer.

### Places studied in detail

| Place | What was found | Data | Entry |
| --- | --- | --- | --- |
| North Sea, Dogger Bank | Ice margin at Dogger Bank about 23 ka; 1,330 km2 buried river network; marine by about 8 ka; Storegga tsunami deposit | seismic, cone tests, cores, sedaDNA | `emery-2020-dogger-bank-drainage`, `gaffney-2020-storegga-doggerland` |
| North Sea (models) | 500-year palaeogeographies, 11,000 cal BP to present | GIA models | `sturt-2013-nw-europe-palaeogeography` |
| Baltic, Bay of Mecklenburg | Blinkerwall: 1,673 stones over 971 m at 21 m depth | ship and AUV sonar to cm resolution | `geersen-2024-blinkerwall` |
| Solent | Bouldnor Cliff, about 11 m deep; wheat DNA 8,000 years old | sedaDNA | `smith-2015-bouldnor-cliff` |
| Carmel coast, Israel | Tel Hreiz village and a >100 m seawall (7,500 to 7,000 BP); Atlit Yam is nearby | diving | `galili-2019-tel-hreiz-seawall` |
| North-west Australia | Archipelago in MIS 4, exposed shelf with inland sea in MIS 2; about half drowned by two rapid rises | bathymetry plus models | `norman-2024-northwest-shelf` |
| Murujuga | Two underwater sites, >260 artefacts to -2.4 m, a find at a -14 m spring | aerial and underwater remote sensing, divers | `benjamin-2020-murujuga` |
| Sunda Shelf | LGM maps, candidate drowned lakes; sediment-based sea-level record | ETOPO2, cores | `sathiamurthy-voris-2006-sunda-maps`, `hanebuth-2000-sunda-flooding` |
| Bering Strait | Opened about 11 cal ka; flooded from 46 to 35.7 ka | cores | `jakobsson-2017-bering-flooding`, `farmer-2022-bering-strait` |
| Persian Gulf | "Gulf Oasis" hypothesis; flooding from 11.5 ka, marine by 8.8 ka | cores, models | `rose-2010-gulf-oasis`, `naderi-beni-2024-persian-gulf`, `lambeck-1996-persian-gulf` |
| Black Sea | Flood at 7,150 radiocarbon years BP (1997) or 9,300 cal BP in under 40 years (2017) | cores, seismic | `ryan-1997-black-sea`, `yanchilina-2017-black-sea` |
| Lake Huron | Alpena-Amberley Ridge, dry corridor 9,000 years ago, caribou drive lanes | sonar, divers, cores | `oshea-2014-alpena-amberley` |
| Florida | Page-Ladson, 14,550 B.P., in the Aucilla River | diving, radiocarbon | `halligan-2016-page-ladson` |

### Claims tied to the legends

| Claim | What the literature says | Status | Entry |
| --- | --- | --- | --- |
| Younger Dryas impact, about 12.9 ka | Firestone and others 2007 argue an impact; Paquay and others 2009 find no iridium; Holliday and others 2023 call it refuted; Sweatman, Powell and West 2024 rebut that | disputed | `firestone-2007-ydih`, `paquay-2009-no-ydih-pge`, `holliday-2023-ydih-refutation`, `sweatman-2024-ydih-rebuttal` |
| Thera eruption date | Radiocarbon 1609 to 1560 BCE (95%); older archaeological date about 1500 BCE | peer-reviewed, debated | `pearson-2018-thera` |
| Spartel Bank | Palaeo-island under 56 m of water; Gutscher 2005 matches Plato to a tsunami about 11.6 ka | disputed | `gutscher-2005-spartel` |
| Doñana | Satellite and ground-radar claim, 2004 and 2011 | press, no paper found | `kuhne-2004-donana-atlantis` |
| Richat | Igneous and hydrothermal dome, not an impact crater; 550 km inland | peer-reviewed | `matton-2005-richat` |

## Overlaps

- **Our globe and two public tools do the same thing.** Sea Level Map (`sea-level-map-vercel`) and DisasterMap Ice Age Mode (`disastermap-ice-age-mode`) both put a time slider on a globe and show Doggerland, Beringia and Sundaland. DisasterMap says it uses ICE-7G_NA (a local, model-based sea level), which ours does not. Our difference has to be real depth data, lidar, legends and finds, not the slider.
- **Same model, same data.** DisasterMap and the Peltier files (`peltier-ice6g-ice7g-data`); Lambeck and Spratt and Lisiecki (both lean on the same coral-based low point); PaleoMIST and ICE-6G_C (both open, both coarse).
- **Same area.** The North Sea studies (Emery, Gaffney, Weninger, Hill, Sturt) all cover Doggerland. Norman 2024 and Benjamín 2020 cover the north-west Australian shelf at two scales. Rose 2010, Lambeck 1996 and Naderi Beni 2024 all concern the Persian Gulf. EMODnet Geology and the SPLASHCOS viewer cover European shelf prehistory; EMODnet has a Human Activities layer from the same project that I only saw in a search result.
- **Our catalogue.** EMODnet Bathymetry (`emodnet-bathymetry-wms`) is the sea-floor base for the same European shelf as the LGM layer. `aws-terrain-tiles-terrarium` is what our globe lowers.

## Contradictions

1. **The ice-age low point.** Fairbanks 1989 says -121 +/- 5 m (`fairbanks-1989-barbados`). Yokoyama and others 2018 say -125 to -130 m global, -118 m at the Great Barrier Reef. Spratt and Lisiecki 2016 use -130 m and say GIA models give -130 to -134 m. Lambeck and others 2014 say -134 m and explain that the commonly cited -125 m is not corrected for isostatic effects. Gowan and others 2021 (PaleoMIST) say -116 m with 42.2 million km3 of ice, against Lambeck's 53 million km3 (a gap of 14 to 19 m). Simms and others 2019 count 18.1 +/- 9.6 m of "missing ice". Why they differ: some are local relative levels, some global ice-equivalent; the ice-sheet models and the coral data do not close. The better-supported statement is "about -120 to -135 m, with a model-dependent global figure near -130 m"; our single -134 m is the top of the range. (`lambeck-2014-esl`, `gowan-2021-paleomist`, `simms-2019-missing-ice`)
2. **Before the low point.** Farmer and others 2022 say sea-level estimates before the last glacial maximum "vary by > 60 m" and that the Bering Strait was open until 35.7 ka; Lambeck has a rapid 40 m fall near 30 ka. We start at 21 ka, so we do not show this. (`farmer-2022-bering-strait`)
3. **Meltwater pulse 1A.** About 20 m in about 500 years (Lambeck); 12 to 22 m, most probably 14 to 18 m, 14,650 to 14,310 years ago (Deschamps); up to 16 m in 300 years, 14.6 to 14.3 ka (Hanebuth); 8 to 15 m (Liu and others). (`liu-2016-mwp1a-amplitude`)
4. **Meltwater pulse 1B.** Abdul and others 2016: 14 +/- 2 m at Barbados, 11.45 to 11.1 ka. Bard and others 2010 (Tahiti), Lambeck 2014 and Bard and others' 2016 comment: absent or very small. Jakobsson and others tie the opening of the Bering Strait at about 11 cal ka BP to "MWP-1b". Not resolved. (`abdul-2016-barbados-mwp1b`, `bard-2010-tahiti-mwp1b`)
5. **The date a basin flooded.** Black Sea: 7,150 radiocarbon years BP (Ryan and others 1997) against 9,300 cal BP in under 40 years (Yanchilina and others 2017); two replies are titled "Is the abrupt drowning ... a myth?" (2001) and "Persistent Holocene Outflow ... Contradicts Noah's Flood Hypothesis" (2002), which I saw by title only. Persian Gulf: about 8,000 years ago (Rose, via press) against from 11.5 ka and marine by 8.8 ka (Naderi Beni and others 2024). Doggerland: "around 8200 calBP", catastrophic (Weninger and others 2008), against "temporary, localized" tsunami effects (Gaffney and others 2020) and rising sea as the main cause (Hill and others 2017).
6. **Local against global sea level, and which way the difference goes.** Sunda: -116 to -117 m at 21 ka (Sathiamurthy and Voris) against Lambeck's global -134 m; Great Barrier Reef: -118 m (Yokoyama) against a global -125 to -130 m. In Lambeck's and Yokoyama's models the far-field coast sits shallower than the global figure. Gowan and others say the opposite for their model: with a global fall of only -116 m, "coastal regions of southern and southeastern Asia have calculated sea level below the global average", so far-field records deeper than -120 m "are not representative of the global average". So the sign of the local correction in south-east Asia depends on the ice model. (`yokoyama-2018-two-step-lgm`, `sathiamurthy-voris-2006-sunda-maps`, `gowan-2021-paleomist`)
7. **Thera.** Radiocarbon and Bayesian work (Manning 2022) 1609 to 1560 BCE at 95%; the older archaeological date is mid 16th to early 15th century BCE. Pearson and others 2018 move the radiocarbon range toward the 16th century. (`pearson-2018-thera`)
8. **Younger Dryas impact.** Holliday and others 2023 (refuted) against Sweatman, Powell and West 2024 (corroborated at more than 50 sites). Holliday and others replied again in 2024. (`holliday-2023-ydih-refutation`)
9. **Leads in the task that were off.** Murujuga (Benjamín and others 2020) is in PLOS ONE, not PNAS. The Rose 2010 title is "New Light on Human Prehistory in the Arabo-Persian Gulf Oasis". Nothing else in the leads was contradicted.

## Relevant data

Most useful first.

1. **PaleoMIST 1.0 paleo-topography and sea-level change**, <https://doi.org/10.1594/PANGAEA.905800>. NetCDF, 1 and 0.25 degree, 2,500-year steps, CC BY 4.0, 3.5 GB. The only open, licensed, local sea-level product I found.
2. **ICE-6G_C and ICE-7G_NA files**, <https://www.atmosp.physics.utoronto.ca/~peltier/data.php>. 1 degree NetCDF; `Topo_Diff` gives a local difference from present. No licence text; cite and ask before redistributing.
3. **EMODnet Geology Last Glacial Maximum Landscapes**, CC BY 4.0, WMS layer `bgs:cp_wp8_last_glacial_maximum` at <https://drive.emodnet-geology.eu/geoserver/bgs/wms>. European seas only.
4. **Sathiamurthy and Voris sea-level CSV**, <https://doi.org/10.5281/zenodo.3929568>, CC BY 4.0.
5. **Copernicus Marine global coastal satellite-derived bathymetry**, 100 m, Sentinel-2, NetCDF-4. Fixes "nearest sounding carried inshore" in clear water. Quality and licence not read.
6. **ICESat-2 ATL24**, <https://nsidc.org/data/atl24>. Along-track near-shore depth, free login. Lines, not a grid.
7. **Lambeck 2014 SI series** (esl against age) to replace our hand-added -95 and -60 m. Not opened.
8. Handed to `seafloor-wrecks`: GEBCO and Seabed 2030 coverage; the wider satellite-derived bathymetry picture.

## Gaps

- Nobody I found has published a side-by-side of how far one global sea level misplaces coasts against local levels, for the places the public asks about. Section below is my own count.
- No fine, open, local-sea-level paleo-topography at short time steps. The finest is 0.25 degree at 2.5 ka steps, which is too coarse for the fast melt.
- No survey of the Persian Gulf floor; the Gulf Oasis rests on reasoning from coastal sites.
- No peer-reviewed report of the Doñana expedition.
- No world list of submerged prehistoric sites, only Europe (SPLASHCOS) and national work such as Australia's.
- Meltwater pulse 1B and the size of 1A are open.

## What our globe gets wrong, and by how much

Method: for five boxes I counted, on the same Terrain Tiles our globe uses (zoom 8, about 610 m per pixel), the sea floor that stands above a flat sea level (`our-exposure-calculation`). That is dry-land area in the globe, not shoreline length. Numbers are my own; they have a few percent error from pixel size and from lakes and lowlands inside each box. Where I give "the study's level", it is the local figure from the cited entry; our own level is a global one.

**What it shows first: the global figure hardly matters at the ice-age low, and matters a lot in the middle.** The shelf edge is steep, so the area changes little between -134 and -116 m, but between -60 and -15 m the shelf is flat and each 10 m moves tens of thousands of km2.

| Place (box) | Dry at -134 m | Dry at -116 m | Dry at -95 m | Dry at -60 m | Dry at -30 m | Dry at -15 m |
| --- | --- | --- | --- | --- | --- | --- |
| North Sea (4 W to 9 E, 50 to 61 N) | 533,844 | 492,308 | 437,011 | 320,377 | 140,920 | 56,421 |
| Sunda Shelf (95 to 120 E, 9 S to 8 N) | 1,843,942 | 1,805,865 | 1,722,336 | 1,345,194 | 620,266 | 323,199 |
| Persian Gulf (47 to 58 E, 23.5 to 31 N) | 250,979 | 249,935 | 245,548 | 202,191 | 128,992 | 65,929 |
| Bering, east half (180 to 160 W, 60 to 70 N) | 652,374 | 636,586 | 601,097 | 487,523 | 181,140 | 66,008 |
| Bahamas and Florida (82.5 to 72 W, 22 to 31 N) | 172,145 | 170,104 | 167,379 | 160,741 | 140,153 | 104,737 |

Areas in km2.

**Sunda Shelf (largest effect).**
- At 21 ka: Sathiamurthy and Voris use -117 m, we use -134 m. That is about 35,000 km2 of land we show that their curve would leave under water (1,843,942 against 1,808,847 km2).
- At 14.5 ka: they have -85 to -90 m, we use -95 m. About 43,000 to 66,000 km2 of difference (1,722,336 against 1,679,149 at -88 m and 1,656,598 at -85 m).
- At 11.2 to 11.5 ka: they have -45 to -50 m, we use -60 m at 11.4 ka. About 165,000 to 322,000 km2 of land we show that their curve would flood (1,345,194 against 1,180,632 at -50 m and 1,022,916 at -45 m). This is the largest gap I found. Caveat: our -60 m is our own sum of Lambeck's rates, and Sathiamurthy and Voris is a 2006 curve, so the gap could be in either; Lambeck's own value at 11.4 ka is in his SI, which I did not read. (`sathiamurthy-voris-2006-sunda-maps`, `our-globe-sea-level-presets`)
- The size of the whole box at the ice-age low (1.8 million km2) matches the "Sundaland" description; no entry gave an area for me to check against.

**North Sea.**
- At -134 m our globe shows the whole North Sea floor as bare ground, 533,844 km2 in the box. Emery and others place the ice-sheet margin at Dogger Bank about 23 ka. About 352,000 km2 of the box lies north of 54.5 N, so roughly two thirds of what we show as walkable land at the ice-age low was under or beside ice or its meltwater, not open ground. The 54.5 N line is my approximation of the Dogger Bank latitude. (`emery-2020-dogger-bank-drainage`)
- In the middle of the melt the North Sea changes by about 33,000 to 42,000 km2 for each 10 m (between -50 and -75 m). The final flooding of Doggerland was around 8,200 years ago (Weninger and others), when the global level was shallower than about -30 m (the Sunda table has -10 m at 8.4 ka and -15 m at 9.2 ka; I did not read Lambeck's value). In that range our count changes by about 70,000 km2 for each 10 m between -30 and -20 m. A local-sea-level model matters most exactly here. (`weninger-2008-doggerland-storegga`, `sturt-2013-nw-europe-palaeogeography`)
- Direction of the local error: I did not find a number for the southern North Sea in the pages I read, so I do not state one.

**Persian Gulf.**
- At the ice-age low the whole box is dry either way: 250,979 against 249,935 km2, a difference of about 1,000 km2. Rose's "size of Great Britain" is of the same order as our count. (`rose-2010-gulf-oasis`)
- The action is between -40 and -10 m, where each 10 m moves about 28,000 to 46,000 km2 (157,014 at -40 m, 128,992 at -30, 89,516 at -20, 43,750 at -10), that is 11 to 18% of the Gulf floor. Naderi Beni and others say flooding ran from 11.5 to 8.8 ka cal BP; Lambeck 1996 says the sea level change in the Gulf varies considerably across the region, which a flat sea cannot show. At our 11.4 ka preset (-60 m) the box shows 202,191 km2 of floor dry, 81%. (`naderi-beni-2024-persian-gulf`, `lambeck-1996-persian-gulf`)

**Beringia.**
- Between -60 and -45 m the dry area of the box falls from 487,523 to 301,319 km2, about 186,000 km2 for 15 m, which at 15 m per thousand years is about 1,000 years.
- Jakobsson and others date the opening of the Bering Strait (about 53 m deep) to about 11 cal ka BP. At -60 m (our 11.4 ka) about 7 m of land still stands above the water; at 15 m per thousand years the strait floods about 500 years later, near 10.9 ka. That agrees with Jakobsson within a few hundred years. Farmer and others add that the strait was open until 35.7 ka and closed after, a part of the story we do not draw at all. (`jakobsson-2017-bering-flooding`, `farmer-2022-bering-strait`)

**Bahamas and Florida.**
- The banks are shallow and the edges steep: from -134 to -116 m the dry area changes by about 2,000 km2 (1%). In the Holocene it matters: from -30 to -10 m the dry area falls from 140,153 to 92,220 km2, about 24,000 km2 for each 10 m.
- Local effect: the Bahamas lie on the forebulge of the former Laurentide ice sheet, so their relative sea level has been moved by ice-sheet loads (Dyer and others, about the last interglacial). I found no published ice-age figure for the Bahamas or Florida; so I cannot say by how much, or in which direction, our level is off there. (`dyer-2021-bahamas`)
- Page-Ladson, 9 m under water in a Florida river, was dry when occupied at 14,550 B.P. (`halligan-2016-page-ladson`).

**What to change in the text of `how-it-works.md`.** It says the fall was "usually a little less than the global figure" and that the presets are good to "about 5 m". For coral coasts that is what Lambeck's and Yokoyama's models give (Great Barrier Reef 118 against 125 to 130; Sunda 117 against 134), but the gap is 7 to 18 m, not a little, and PaleoMIST has the opposite sign for south-east Asia. The global figure itself ranges -116 to -134 m across the models and corals I read. A safer wording is "about -120 to -135 m, depending on the study and the coast", with the local correction shown as a range.

## Not verified

- Lambeck's esl values at 14.5, 11.4 and 8 ka (SI file not opened); our -95 and -60 m.
- Waelbroeck and others 2002: I found only its metadata and a NOAA dataset listing in a search result; I did not read a low-point value, so it is not an entry. The NOAA/WDS record is "Sea-level and Deep Water Temperature 430KYr Reconstructions".
- Peltier and Fairbanks 2006 (title only); Clark and Tarasov 2014 (title only); the ICE-6G_C ESL at the LGM.
- ANU model output and licence; ICE-7G_NA whether the global fields are updated; no licence text on the Peltier page.
- Pavlopetri: I saw only bibliographic records (Harding and others 1969; Henderson and others 2011), not a paper.
- Atlit Yam itself (only the nearby Tel Hreiz paper read); Atlit Yam's depth of 8 to 12 m is from our `legends.json`.
- Bouldnor Cliff's 11 m depth (from our legends file and a search summary).
- SPLASHCOS viewer: not reachable from this machine (DNS timeout, 2026-11-11). Europe's Lost Frontiers site: host did not resolve.
- Lambeck 1996 (Persian Gulf): details are from a search summary; the abstract was not opened.
- Collina-Girard 2001, Görür and others 2001, Aksu and others 2002, Soulet 2018 comment and the Yanchilina reply, Holliday and others 2024 reply, Abdeina and others 2024, Kühne 2004: titles or records only.
- Doñana: the criticism by Villarias-Robles is from a search summary of Spanish press; the Popular Science page was read.
- Spartel Bank's 56 m summit depth and the Bryn Mawr review quote are from Wikipedia.
- Page-Ladson's 9 m depth and 11.5 km distance are from press summaries, not the paper.
- The Sea Level Map's data and method (JavaScript app, pages returned the same shell); DisasterMap's site (post read, site not opened).
- Copernicus SDB accuracy and licence; ATL24 spatial resolution ("Not Specified" on the page).
- OpenAlex's free quota ran out part-way, so later lookups used Crossref and Europe PMC; I did not create an API key.
- My exposure counts: not checked against another source; sea-floor data is 500 m to 2 km, so area differences below a few percent are noise.
