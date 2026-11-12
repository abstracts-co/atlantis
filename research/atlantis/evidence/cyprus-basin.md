# Sea bed south-east of Cyprus (Sarmast, 2004): evidence summary

Checked 2026-11-11. Data: `cyprus-basin.json` (13 features, 11 measurements, 6 story steps).

## What was claimed

Robert Sarmast, an American architect, published *Discovery of Atlantis* in 2003. It puts Plato's city on the sea bed of the eastern Mediterranean south-east of Cyprus. In November 2004 he led a six-day sonar trip from Limassol (vessel *Flying Enterprise*, run by EDT) and held a news conference on 14 November.

- Position as announced, in words only: "50 miles (80 kilometers) off the southeast coast of Cyprus", "between Cyprus and Syria", 1.5 km down (Reuters via NBC, 15 Nov 2004). Reuters of 13 Nov says "some 70 miles off the eastern coast of Cyprus toward Syria". **No latitude and longitude was published** in anything I could open.
- Shapes: "a 2-mile-long (3-kilometer-long) wall, a walled hill summit and deep trenches" (Reuters/NBC). The BBC said "two straight, 2-km (1.25 mile) long walls on a hill". Sarmast's own January 2005 update says the wall at the base of the hill is "practically ruler-straight for the first two kilometers", then turns 90 degrees toward the hill. His own list of matches with Plato gives the hill 3 miles (27 stades) across.
- He showed only animated simulations of the hill at the news conference, said the evidence was "irrefutable", and said a closer look with a remote vehicle was needed.
- His idea needs the sea bed to have been dry land in human times. His own 3D model draws the "island" at 1,650 m below today's sea.

## What was checked, and where

- **BLAC cruise, 29 Oct to 16 Nov 2003**, R/V *Le Suroît*, French-led with Christian Hübscher (Hamburg) as co-author. About 20,000 km² mapped between Cyprus and Syria with a Simrad EM300 multibeam, on 88 tracks with seismic, echo-sounder, gravity and magnetic data (Benkhelil and others 2005, *C. R. Géoscience* 337, open PDF). I digitised the survey outline and four labelled seismic lines (09, 14, 20, 59) from its Fig. 2. This is the best set of real positions I found.
- **Hübscher and others 2009** (*Tectonophysics* 470, 173-182) used the BLAC data and, per one search summary, a 2004 R/V *Pelagia* cruise (SAGA). I could not open the paper (see "Could not verify").
- **ODP Leg 160 (1995)**: Sites 965 and 966 on the Eratosthenes Seamount, about 200 km west-south-west. Positions from PANGAEA, text from the preliminary report. Site 965 is in 1,507 m of water, close to Sarmast's 1.5 km, but it is a seamount, not the Cyprus Basin.

## What was found

- The BLAC paper (2005) does not mention Sarmast. It maps the area as a plateau at 800 to 1,000 m (Larnaca-Latakia), a Central domain at about 1,500 m, and the Levantine basin at about 2,000 m. It reads the small hills and ridges as "the interaction between halokinetics, mud-diapirism and tectonics" and shows a mud diapir on Profile 20. Salt (Messinian evaporites) lies under about 500 m of younger sediment in the Levantine basin.
- Per Wikipedia, Hübscher and others (2009) "demonstrated that the features which Sarmast interprets to be Atlantis consist only of a natural compressional fold caused by local salt tectonics and a slide scar". This is a second-hand statement; I did not read it in the paper.
- Replies at the time: Benny Peiser (Live Science, 15 Nov 2004): Sarmast's "selective interpretation is nothing more than the blinkered reading of very ambiguous and unconvincing images". Cyprus Mail (20 Nov 2004): an unnamed German physicist called it "a 100,000 year-old underwater mud volcano" and said he and two others "had surveyed the same area last year"; Ulf Erlingsson: "100,000-year-old mud volcanoes exist on the spot". Sarmast replied it was a "table top mountain".
- **Deep time**: the Mediterranean was refilled 5.33 million years ago (Garcia-Castellanos and others 2009, *Nature*; abstract read). ODP cores show open-sea mud above older rock, with no dry-land layer in the parts I read. Plato's date is 9,000 years before the telling.

## Positions: how good

13 features: 8 `digitised-from-figure`, 4 `from-dataset`, 1 `from-description`, 0 `stated-coordinates`.

| How | Features | Error |
|---|---|---|
| digitised-from-figure | BLAC outline, 4 seismic lines, 3 labelled places (Cyprus Basin, Hecataeus Rise, Latakia Ridge) | 2.5 to 6 km |
| from-dataset | ODP 965 and 966 (PANGAEA), Cape Greco and Eratosthenes (Wikidata) | 0.2 to 10 km |
| from-description | Sarmast's claimed site | 40 km |

The figure is a small picture (588 by 676 px, about 0.45 km a pixel). The grid is tick marks at 30-minute spacing; I fixed it from those and checked it against Beirut, Tripoli, Tartus, Larnaca and Latakia, which fall 1 to 4 km from where they should. The outline is the coloured area, so it leaves out a thin strip running south from the Latakia Ridge. The seismic lines are the straight white lines drawn on the map.

The claimed point is 80 km from the Cape Greco node in OpenStreetMap (34.9597 N, 34.0838 E) on a south-east bearing. The sea bed there is 1,828 m deep (GMRT point query), not 1.5 km. Along the same 80 km arc the depth is 1,500 m on a bearing of 130 degrees and 2,000 m or more from 150 degrees south. So the point is a guess inside a wide band. The profile 20 line passes about 13 km from it.

## Disagreements between sources

- **Distance**: Reuters (Nov 2004 and Aug 2005) and NBC say 80 km (50 miles) off the south-east coast; the Reuters wire of 13 Nov says 70 miles (about 113 km) off the eastern coast; one Reuters piece on the planned trip says "70 miles (112.7 km) offshore".
- **Depth**: 1.5 km (BBC, NBC, Reuters) or 1.6 km (Reuters, April 2004); Sarmast's model uses 1,650 m. GMRT gives 1,828 m at the point I computed.
- **Wall length**: "two straight, 2-km walls" (BBC) or "a 2-mile-long (3-kilometer-long) wall" (Reuters/NBC) or "two walls three kilometres long" (Cyprus Mail, Sarmast's words).
- **Cape Greco**: Wikidata puts it at 35.000 N, 34.017 E; OSM at 34.960 N, 34.084 E (about 8 km apart). I used the Wikidata point for the label and the OSM point for the 80 km calculation.
- **Mud volcano or fold**: the critics in 2004 said a 100,000-year-old mud volcano; Wikipedia's account of Hübscher says a compressional salt fold and a slide scar. The BLAC paper itself says mud diapirs and salt folds shape the sea floor here.

## Left out

- The BLAC inset map of the 88 ship tracks has no grid; I did not digitise it.
- ODP Sites 967 and 968 (PANGAEA gives 967 at 34.0696 N, 32.7254 E); not read for lithology.
- Hübscher 2009 figure positions, Hall's Levant bathymetry, Maillard 2011 on the Latakia Ridge, EMODnet survey outlines and Michael Hall's reply: not reached (see below).
- The mud volcano, fold and slide scar: no position, so not drawn.

## Could not place

- The hill and both "walls" as Sarmast drew them: only 3D models and animations, no latitude, longitude or scale.
- The 2004 ship track, the six-day sonar box, and the capsule dropped on 30 April 2004 ("closest land below at -1600 meters", no coordinates).
- Anything from the Hübscher 2009 map figures.

## Could not verify

- The text of the 2009 paper (ScienceDirect and ResearchGate blocked; Crossref, Unpaywall, OpenAlex and Semantic Scholar hold no abstract). What it says about Atlantis is only Wikipedia's statement. I cannot say whether the paper names Sarmast.
- That the German physicist in the Cyprus Mail is Hübscher. The article does not name him.
- The SAGA / *Pelagia* 2004 cruise: from a search-tool summary only.
- The 2006 follow-up: Sarmast's own page (Feb to May 2006) says a second expedition "may also happen" depending on funds; I found no record that it did.
- The original BBC page: read from Sarmast's copy of it (Wayback Machine, Dec 2004).
- Ifremer's BLAC page and the EMODnet/SISMER outline: the Ifremer cruise page did not load. A real outline would replace my digitised one.
- Michael Hall, John Hall: names from the brief; I found no source for them.
