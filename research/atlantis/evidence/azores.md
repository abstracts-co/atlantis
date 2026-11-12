# Azores Plateau and the Mid-Atlantic Ridge: evidence on the ground

Lane `evidence/azores`, checked 2026-11-11. Data: `azores.json` (31 features, 14 measurements, 7 story steps). Scene centre 38.624 N, 28.031 W (the Azores), radius 2,100 km, because Donnelly's drawn shape reaches 2,050 km away.

## What was claimed

- **Donnelly, 1882.** In the chapter "The Testimony of the Sea" he says deep-sea soundings (the US ship Dolphin, the German Gazelle, the British Hydra, Porcupine and Challenger) show a great ridge in the Atlantic, that the Azores are its peaks, and that "The Atlantis of Plato may have been confined to the 'Dolphin Ridge' of our map." His map has a latitude and longitude grid, so I digitised the outline (one feature, `donnelly-dolphins-ridge`). It is about 3,000 km by 1,600 km, about 2.85 million square km.
- **Termier, 1912 (lecture, English text in the Smithsonian Report for 1915).** Cable-repair grapnels in 1898 brought up chips of basalt glass (tachylyte) from rocky sea floor at 47 N, "29 deg 40 min west from Paris", about 3,100 m deep. He argued the glass could only form in air, so "the entire region north of the Azores and perhaps the very region of the Azores ... was very recently submerged".
- **Malaise (1951) and Kolbe (1957).** Malaise read freshwater diatoms reported by R. W. Kolbe in Swedish Deep-Sea Expedition cores as signs of exposed ridge. I could not find the core positions (see below).

## What was checked, and where

- **Schuchert 1917 (PNAS 3:65).** He answered Termier. Three conclusions, quoted from the paper: the Azores are volcanic islands "not the remnants of a more or less large continental mass"; the tachylytes north of the Azores "were in all probability formed where they are now, at the bottom of the ocean"; and "there are no known geologic data that prove or even help to prove the existence of Plato's Atlantis in historic times". He quotes A. L. Day (Carnegie Geophysical Laboratory) and L. V. Pirsson that pressure matters little to whether lava turns to glass. He also computes that sinking 210,000 square miles would lower the sea about 15 feet and leave a terrace along the Atlantic shores.
- **Hogbom 1938 and Pettersson 1944** (from Thorwald Franke's summary only): lava can cool to glass under water, and ice-age iceberg rocks lie near today's Azores shores, so land and sea there have stood at about today's level since the ice age. Pettersson: continents do not sink and the ridge is erupting new crust.
- **Woods Hole ketch Atlantis, 1931.** A 42-day currents cruise around the Azores, reported in the press as a probe for Atlantis. WHOI says the crew "returned home empty-handed" and the logbooks record no finding. No station positions are public.
- **Deep Sea Drilling Project.** Seven holes on or beside the plateau, each a `core` feature with its layers and the age of the oldest sediment. Positions are printed in the site chapters:
  - Leg 37 (1974), 36.9 to 37.3 N, 33.6 to 35.2 W: Sites 332 and 333 (Deep Drill Valley, 15 km from the axis; ooze 104 to 219 m over basalt, late Pliocene), 334 (260 m of ooze, early late Miocene, basalt over gabbro) and 335 (454 m of ooze, about 13 million years, pillow basalt).
  - Leg 82 (1981), on the flow line through the Azores triple junction: Site 556 (basement nannofossils 30 to 34 Ma), 557 (anomaly 5D, 18 Ma, on the shallow side), 558 (basement nannofossils 34 to 37 Ma, 408 m of sediment).
  - The EarthByte 2020 age grid agrees with each: 3.0, 3.6, 9.9, 16.7, 29.6, 17.3 and 34.4 Ma.

## What was found

- The sea floor around the Azores is ocean crust, 0 to about 37 million years old in the area drilled, made at the ridge and carried away at about 25 mm a year. Nothing continental was drilled. The Azores centre point sits on 17 million year old crust.
- **Termier's dredge point lies on the ridge axis.** Read as west of Paris (as he wrote it) the point is 27.33 W, 0.3 km from the PB2002 ridge line, on crust the age grid puts at 0.06 Ma. A place where fresh glassy basalt is erupting is what one would expect. This is my finding from the data, not something Schuchert or Pettersson wrote.
- **The plateau is a swollen volcanic ridge.** Heezen, Tharp and Ewing (1959): 52,000 square miles shallower than 1,000 fathoms. My contour from the GMRT grid encloses about 116,000 square km of it.
- **Sea level.** Dropping the sea 58 m (about 9600 BCE) gives the nine islands about 2,985 square km instead of 2,435, 23 percent more land (GMRT grid, med resolution). Nine `coast58-*` outlines show it. Lambeck and others (2014) put the global rise from 11,400 to 8,200 years ago at about 15 m per thousand years.
- **Sediment against "a day and a night".** Sites 335, 556, 557 and 558 have 408 to 461 m of undisturbed ooze on the basalt. Plato's sinking is said to have been followed by mud; these are quiet pelagic sediments laid down over millions of years.

## How good the positions are

By `position.how`: `stated-coordinates` 8 (the seven drill sites, Termier's dredge), `from-dataset` 22 (nine islands from Wikidata, the PB2002 axis and triple junction, Great Meteor, the plateau contour, nine -58 m coast contours), `digitised-from-figure` 1 (Donnelly's outline). By side: claimed 1, checked 8, found 10, context 12.

- Drill sites: error about 1 km (ship fix).
- Termier: error about 15 km, plus one reading choice (below).
- Donnelly's outline: error about 400 km. Fit to his grid is good (0.1 degree in longitude, up to 0.6 in latitude), but his own six Azores dots plot about 4 degrees east of the real islands, so the whole drawing is probably shifted. I kept the grid reading as the brief requires and said so in `notes`.
- Plateau and coast outlines are my own contours of GMRT data, not published maps.

## Where sources disagree

- **Termier's longitude.** The Smithsonian translation says 29 deg 40 min west of Paris; Schuchert's reprint says 29 deg 41 min (1 minute, about 1.3 km). If the longitude is read as Greenwich the point moves 177 km west and 169 km off the ridge axis. I use Paris, which puts it on the axis.
- **Termier's distance and depth.** The same lecture says "about 500 miles north of the Azores" and "900 kilometers (562.5 miles)". Real distance from the Azores centre is about 930 km. He gives about 3,100 m; GMRT gives 3,195 m.
- **Plateau area.** Heezen and others 134,700 square km; my contour 115,800 square km (box edge, coarser grid).
- **Donnelly's size.** His text: "one thousand miles in width, and two or three thousand miles long". His map outline: about 1,000 by 1,850 miles.
- **Sea level at 9600 BCE.** Barbados reading -58 m, global stack -45 m (both from the world-9600bce lane, not re-fetched). Franke says Pettersson considered a fall of "ca. 200 meters"; Lambeck and others give -134 m at the glacial maximum.
- **Schuchert's wording.** `hypotheses.json` says he showed the tachylytes "formed where they lie". The paper says "in all probability".

## What I left out

- Leg 82 Sites 559 to 564 and Leg 94 (outside the Azores area), and the Great Meteor chain's Atlantis, Plato and Cruiser seamounts (no open position).
- Nothing on a "Faroe plateau", as asked.
- Features beyond the story: Gorringe Bank and the Madeira and Canary outlines Donnelly drew (handoffs).

## What I could not find

- **Kolbe's diatom cores.** Kolbe 1957 (Science 126:1053) is paywalled. Search results place the cores in the equatorial Atlantic, not at the Azores.
- **Ewing's beach-sand cores (1947 to 1949).** Only a search-result summary; no core positions, no readable copy of the article.
- **Positions of the Atlantis, Plato and Cruiser seamounts**, and of the 1931 cruise stations and the Albatross cores near the Azores.
- **NOAA sample index.** The API address in the brief returned 404, so dredge and core positions were not searched there.
- Several papers were behind bot checks (PNAS, PMC PDFs, GEOMAR, WHOI repository). Schuchert was read from an Internet Archive scan.
- The 9600 BCE sea level and Great Meteor ages rest on sources I did not open at the paper (see `not_verified` in the JSON).

## Sources I read today

Donnelly 1882 (library text and Internet Archive page scan); Termier 1912 in the Smithsonian Report 1915 (Internet Archive); Schuchert 1917 (Internet Archive scan of PNAS); Franke on Pettersson (atlantis-scout.de); WHOI article on the 1931 cruise; DSDP Initial Reports Legs 37 and 82 (deepseadrilling.org); Heezen, Tharp and Ewing 1959 (Project Gutenberg 49069); Lambeck and others 2014 (PMC); EarthByte 2020 age and spreading-rate grids; GMRT GridServer and PointServer; PB2002 plate boundaries; Wikidata; Hydro International on Mid-Atlantic Ridge mapping (Maury's "Middle Ground").
