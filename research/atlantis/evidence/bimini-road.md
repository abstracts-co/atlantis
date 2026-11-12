# Bimini Road: evidence on the ground

Checked 2026-11-11. Data: `bimini-road.json` (6 features, 10 measurements, 6 story steps).

## What was claimed

On 2 September 1968 J. Manson Valentine, Jacques Mayol and Robert Angove dived in about 5.5 m of water off the north-west coast of North Bimini and found what they called a "pavement" of stones (Wikipedia, which cites the dive). Later writers called it a road, wall or harbour from Atlantis, and linked it to Edgar Cayce's readings. Shinn (2004) gives Cayce's line as "in the Bahamas near Bimini". David Zink wrote *The Stones of Atlantis* (1978). Greg Little (A.R.E.) says the line is 1,900 feet long and J-shaped, and that it is a harbour breakwater and quay (2007 report on a proponent site).

## What was checked, and where

- **Shinn's cores, mid-1970s.** Eugene Shinn (USGS) cored two stones, then planned 17 oriented cores from separate adjacent stones, in about 15 ft (4.6 m) of water. He cut and X-rayed them. Shinn reports bedding dipping toward deep water in every core, as on a beach, and no artefacts.
- **Radiocarbon.** Calvert, Introne and Stipp (*Radiocarbon* 21, 1979, read in full) list seven dates on the cores, collected 1977: whole rock 2780, 3500, 3350; shells 3510; cement 2750, 2770, 2840 (all 14C years BP, uncalibrated, errors 70 to 90). The shells are older than the cement, as beachrock should be.
- **Other checks** (known only from summaries): Harrison 1971 (Nature abstract: "coquina limestone", marble and cement cylinders nearby); Gifford and Ball 1980; McKusick and Shinn 1980; Strasser and Davaud 1986 (abstract: beachrock forms by progradation, cementation and erosion on North Bimini).
- **Proponent replies.** Little (2007) says tiers of stones, prop stones and mortise stones were found in 2005 and 2006, and that Shinn's core report was misread. This was not checked against the original report.

## What was found

The consensus is that the stones are jointed beachrock. The dates are 2,750 to 3,510 radiocarbon years; Plato's date is about 11,500 years before 1950 (9,000 years before Solon, about 590 BCE; our arithmetic). The U-Th date of 14,992 ± 258 BP on the older limestone beneath (Gifford and Ball) is cited by proponents. Wikipedia calls it invalid because the sample was recrystallised; I did not check this against the paper. Sea level at 9600 BCE was tens of metres lower, so the spot was dry land then. That is not the weak point: the dates are.

## Positions: honest summary

**The line itself is not drawn, and no position here is good to 20 m.**

- No open published plan of the line, with a scale and a position, was found. Gifford and Ball 1980 and Zink 1978 are not open.
- Three public points exist: OSM node 11160204576 (25.76725, -79.27794), Wikipedia (25.766967, -79.278826), Wikidata (25.765, -79.28). They are 94, 248 and 324 m apart. The OSM point is about 780 m off the OSM shoreline.
- The 1977 radiocarbon page prints the core site as "26° 0' N, 77° 30' W" and "ca 10km from W Bimini shoreline". That point is in open water about 180 km east of Bimini, and the OSM point is under 1 km offshore. I took both as printing errors and placed the cores at the Road point with error 500 m.
- No core position on any single stone is published in anything open.

By `position.how`: from-dataset 2 (OSM point and OSM shoreline), stated-coordinates 2 (Wikipedia, Wikidata), from-description 2 (the two core features), digitised-from-figure 0.
By `side`: claimed 1, checked 2, found 0, context 3. The "found" result is carried by the two core features.

**Imagery.** Esri World Imagery at this spot is Vantor Vivid, 29 March 2023, 0.5 m, stated accuracy 5 m (service metadata). Zoom 18 is the finest real tile; zoom 19 returns "Map data not yet available". In it I see a dark north-east line, a few hundred metres long, with a hook at its south-west end, close to the OSM point. I did not record its vertices and cannot confirm it is the Road, so I did not draw it. Anyone who wants a line should check it by eye first. The OSM shoreline, in contrast, follows the beach edge in that imagery.

## Disagreements between sources

- Length: Wikipedia says 0.8 km; Little says 1,900 ft (580 m).
- Depth: Wikipedia 5.5 m (18 ft); Shinn 2004 15 ft; Calvert about 4.6 m; Shinn and Swart 2005 abstract 5 to 7 m.
- Discovery: Wikipedia says September 1968; Shinn says "early 1960s" for the finding of the stones.
- Ages: Shinn 2004 says "ages range from 2,000 to 4,000 years"; the lab list gives 2,750 to 3,510 14C years.
- Core reading: Shinn says bedding matched from stone to stone; Little says the first report showed "great differences" between cores.
- Citation: the earlier lanes cite Davaud and Strasser 1984; the paper found is Strasser and Davaud 1986, J. Sed. Research 56:422-428.
- Sample numbers: `data/searches.json` has UM-1365 at 2770; the printed table has UM-1364 at 2770, UM-1365 at 2840.

## Left out

Wikipedia's second and third lines (50 and 60 m), Proctor's Road, the Paradise Point Pier, stone circles, Donato's 100 ft rectangles, the Harrison 1971 cylinders and the Harrison 2007 inlet boreholes. Each is described without coordinates, so they are in `not_located`. The Andros platform and Andros wall are in `handoffs`.

## Could not find

Full text of Gifford and Ball, McKusick and Shinn, Shinn 1978 and 2009. A peer-reviewed Bahamas sea-level value for 9600 BCE (the Smithsonian copy of Toscano and Macintyre 2003 was down; Springer, PNAS and PeerJ blocked fetches). Calibrated ages (not computed). Any open lidar or bathymetry at the line: the NOAA and GMRT layers already in `sources.json` are too coarse to show stones a few metres wide. The Cayce 1940 reading was not checked.
