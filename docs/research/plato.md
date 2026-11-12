# Plato: the text of Atlantis

Lane `plato`, checked 2026-11-11. Data: `plato.json` (44 claims, 12 scholars, 9 ancient witnesses). Everything quoted below was fetched today. Plato quotes are from Jowett (public domain), checked by machine against the Gutenberg files; the Loeb text (Bury, via Perseus) and the Greek are alongside in the JSON.

## What the text is

Atlantis exists in two places only: **Timaeus 20d-26e** (a short summary, told by Critias) and **Critias 108e-121c** (a long description that stops in mid-sentence as Zeus calls the gods together). The war and the sinking are told in a few sentences, at Timaeus 24e-25d. The Critias gives the geography, the city, the plain, the kings and the army, and then breaks off before the war. Perseus returns nothing after Critias 121c; Jowett's last note says "The rest of the Dialogue of Critias has been lost", while Nesselrath treats it as unfinished.

The framing is part of the data. Critias says the tale came from Egyptian priests at Sais to Solon, then through Dropides to the elder Critias, who told it at about ninety to the narrator, then about ten. He calls it a tale that, "though strange, is certainly true" (Timaeus 20d). Socrates calls it "a fact and not a fiction" (26e). In the same passage Critias says he will move yesterday's imaginary city "to the world of reality" and treat it as ancient Athens (26c-d). Nesselrath reads that as a deliberate matching, not a match found in history; Johansen and Broadie also read the story as fabricated for the dialogue's purpose.

## What the numbers are (the useful part for the globe)

Plato's figures are given in stades, plethra and feet, and they agree with each other:

- Central island 5 stades across. Ring widths outward from it: water 1, land 2, water 2, land 3, water 3. So the outer water ring ends 13.5 stades from the centre, 27 stades across.
- A canal from the sea to the outer ring: 3 plethra wide, 100 feet deep, 50 stades long. The outer wall runs 50 stades beyond the largest ring and meets the sea at the canal's mouth, so the whole city is about 127 stades across.
- A plain 3,000 by 2,000 stades (the 2,000 measured inland from the sea at the middle), with a ditch a stade wide, a plethron deep and 10,000 stades long. 2 x (3,000 + 2,000) = 10,000. Straight canals 100 feet wide, 100 stades apart.
- 60,000 lots of 10 by 10 stades. 3,000 x 2,000 / 100 = 60,000. Also 10,000 chariots and 1,200 ships.
- A temple a stade long and three plethra wide (Jowett: half a stade). A bridge a plethron wide.
- 9,000 years before; 8,000 for Egypt.

What the numbers become depends on the stade. Sizes by stadion length (our arithmetic; `dimensions.derived_metres` has every figure):

| Feature | 157.5 m | 178 m | 185 m | 192 m | 209 m |
| --- | --- | --- | --- | --- | --- |
| Central island, diameter | 787.5 m | 890 m | 925 m | 960 m | 1.0 km |
| Outer water ring, outer edge (diameter) | 4.3 km | 4.8 km | 5.0 km | 5.2 km | 5.6 km |
| Canal, sea to outer ring | 7.9 km | 8.9 km | 9.3 km | 9.6 km | 10.4 km |
| Outer wall (diameter) | 20.0 km | 22.6 km | 23.5 km | 24.4 km | 26.5 km |
| Plain, long side | 473 km | 534 km | 555 km | 576 km | 627 km |
| Plain, depth inland | 315 km | 356 km | 370 km | 384 km | 418 km |
| Ditch, length | 1575 km | 1780 km | 1850 km | 1920 km | 2090 km |

Sources for the stadion lengths: 185 m Attic (Wikipedia's table of Cuntz and Dicks, Encyclopaedia Britannica 1911, and Russo 2013 calling it the most widely accepted); 192 m at Olympia and 178 m at Nemea and Delphi (the Nemea Games site); 157.5 m (Hultsch 1882, via Russo 2013); 209 m (Lehmann-Haupt 1929, via Wikipedia). These were proposed for geographers' distances. No source I read says which one Plato meant.

## Where sources disagree

- **9,000 years, from when?** Timaeus 23e: the priest says "9000 years ago" to Solon, about 590 BCE, so about 9600 BCE. Critias 108e and 111b: 9,000 is "the sum of years" from the war to the day of the conversation, which is some time after Solon (Plato gives no year). Plato does not reconcile them. Cameron (1983) and Nesselrath (2002) both write 9600 BCE.
- **Stade.** 157.5 m (Hultsch) against 185 m (Attic) against 192 m (Olympia) against 209 m. The plain is 473 km, 555 km, 576 km or 627 km long across those values.
- **Translators.** Bury and Jowett differ on the plain's orientation, whether the plain touches the sea, the Gadeira clue and one family relation. See the section below.
- **Why Solon dropped the poem.** Critias says Solon was "forced to lay it aside owing to the seditions" at home (Timaeus 21c). Plutarch says it was "not for lack of leisure, as Plato says, but rather because of his old age" (Solon 31). Plutarch cites Plato, not another source.
- **Crantor and the pillars.** Proclus says Crantor held the story to be plain history and cited Egyptian priests' pillars. Jowett: "we require better assurance than Proclus can give us". Cameron (1983) says the Crantor and Posidonius reports are not good props for belief; the later reading of the Proclus sentence is disputed in sources I saw only as search summaries.
- **Atlantis: invented or based on something.** Vidal-Naquet, Gill, Nesselrath, Cameron, Johansen, Broadie, Pradeau: Plato's invention, with Athens as the real subject. Frost (1913): Minoan Crete. Zangger (1993): an Egyptian memory of Troy. Gutscher (2005): a case that the Spartel Bank island matches. Franke (2006): Atlantis could have been real. None of the second group is mainstream among the classicists I read; Nesselrath's review lists the Troy idea among "recent popular fantasies", and his book argues against changing Plato's figures while keeping his authority.
- **Aristotle's remark.** Strabo 13.1.36 gives Aristotle's line about the poet building and destroying the Achaean wall. Strabo 2.3.6 uses the same wording for Atlantis without naming him. That Aristotle said it of Atlantis is an inference.
- **Perseus credit.** The Perseus page for the English text says "translated by W.R.M. Lamb, 1925"; library records and search results name R. G. Bury (1929) for the Loeb volume with Timaeus and Critias. I use Bury and did not resolve it.
- **Wikipedia on the foot.** Its table gives the Greek foot as 0.308 m; its own prose gives 296 mm for Athens.

## Nothing before Plato

I found no text before Plato that names an island or empire called Atlantis. Herodotus has the "Atlantic" sea (1.202) and the Libyan Atlantes (4.184). Jowett says none of Homer, Pindar, Herodotus or Aristotle mentions an Atlantis; Nesselrath uses Isocrates' silence in two speeches; Cameron writes that the story "rests entirely on an elaborate Platonic myth". I could not run a corpus search (Perseus blocked it), so this is "none found", not a proof. After Plato: Theopompus (a parody, per Nesselrath), Crantor via Proclus, Posidonius via Strabo, Pliny ("if we are to believe Plato"), Plutarch, Diodorus' "Atlantians" (a different story on the African coast), Proclus (a survey of allegories). All depend on Plato.

## The claims a searcher can test

27 of the 44 claims leave a physical trace. "Strong" means a number or shape data could confirm or rule out. None has been run here; this is the list of tests, not results.

| Claim id | Strength | What to look for | Data |
| --- | --- | --- | --- |
| `ring-widths` | strong | Radial widths in the ratio 3:3:2:2:1 round an island 5 units across | same, at the finest resolution available |
| `ringed-city` | strong | Concentric near-circular rings, equally spaced, round a low hill | terrain (aws-terrain-tiles-terrarium, copernicus-dem-aws), radar (nasa-gibs-opera-sentinel1-rtc), sea-floor (emodnet-bathymetry-multicolour, gmrt-point-and-grid) |
| `central-island-diameter` | strong | A flat disc about 0.8 to 1.0 km across inside the inner ring | same |
| `canal-to-sea` | strong | A straight cut about 9 km long (at 185 m a stade), 90 m wide, 30 m deep, sea to outer ring | sonar (noaa-ncei-multibeam-mosaic, noaa-ncei-survey-coverage), relief |
| `outer-wall-50-stades` | strong | A wall circle 23.5 km across (at 185 m) meeting the sea at the canal mouth | relief, satellite colour (eox-s2cloudless-2016) |
| `great-plain` | strong | A flat oblong plain about 555 x 370 km (at 185 m), mountains round it, sea along one side | any depth grid (srtm15-plus, emodnet-bathymetry-multicolour) with the sea slider lowered |
| `plain-ditch` | strong | A rectilinear trench round the plain, 185 m wide, 31 m deep, 1,850 km long | depth and relief grids |
| `plain-canals` | weak | Parallel straight channels 18.5 km apart (100 stades), 31 m wide | high-resolution relief only |
| `poseidon-cleito-hill` | strong | A low natural hill about 9 km from the middle of the plain, by the sea | terrain tiles; sea-floor grids if drowned |
| `larger-than-libya-and-asia` | strong | A continental-size platform in the Atlantic that was dry at some lowered sea level | srtm15-plus, emodnet-bathymetry-multicolour, gmrt-point-and-grid, sea slider (-60, -95, -134 m) |
| `sank-in-a-day-and-night` | strong | A dated sudden collapse: tsunami deposit, turbidite, fault scarp, collapse scar | cores (open-context), plate-boundaries-pb2002, usgs-earthquakes-geojson, sea-floor grids |
| `impassable-mud` | weak | A shallow fine-sediment bank near the surface in the open sea | bathymetry, sediment maps, cores |
| `nine-thousand-years` | strong | Anything dated to about 9600 BCE (or somewhat later): coasts, sea level, a site | world-9600bce lane, dated cores |
| `beyond-pillars` | weak | A site in the open Atlantic, outside the strait | any map |
| `gadeirus-end-of-island` | weak | A site that reaches or faces the Gadeira (Cádiz) coast | any map |
| `islands-and-opposite-continent` | weak | A chain of islands or shoals leading across the ocean | bathymetry (weak: fits any ocean) |
| `lofty-coast` | weak | A steep, high coast with the plain in a recess | relief, bathymetry |
| `mountains-shelter-north` | weak | A south-facing plain with mountains on its north side | elevation data |
| `red-white-black-stone` | weak | Three colours of workable rock, one cut from below the site | geology (macrostrat-geology); colour is not in the data |
| `stone-walls-and-metals` | weak | Straight stone walls (metal coats will not survive) | high-resolution relief |
| `bridges-and-trireme-channels` | weak | Bridges 31 m wide and roofed channels | site survey or lidar only |
| `temple-of-poseidon` | weak | A building foundation about 185 x 92 m (at 185 m a stade) | excavation or ground-penetrating survey, after the rings |
| `hot-and-cold-springs` | weak | Thermal and cold springs together | geology and volcano layers (smithsonian-gvp-volcanoes); weak, many places have both |
| `two-harvests` | weak | Winter rain and dry summer needing irrigation | climate record for the date (world-9600bce lane); weak |
| `elephants` | weak | Elephant remains of the right age | fossil and museum records; not a map layer |
| `orichalcum-and-metals` | weak | Copper, tin, silver and gold in one district | geology (macrostrat-geology); orichalcum itself cannot be tested |
| `attica-eroded-after-deluges` | weak | Episodic soil loss in Attica over millennia | Attic sediment records; about Athens, not Atlantis |

The text-only claims (ten kings, the bull ritual, the army, the war, the Egyptian chain of transmission, the claim that it is true) are not testable against terrain.

## Where translations disagree

Perseus prints Bury's Loeb translation; Jowett is the public-domain one. Both are given for each point in the JSON (`quote` and `quote_bury`).

| Passage | Bury (Loeb) | Jowett | Greek |
| --- | --- | --- | --- |
| Plain, 118a | "3000 stades long on either side" | "extending in one direction three thousand stadia" | ἐπὶ μὲν θάτερα τρισχιλίων σταδίων (literally "toward the other, of 3000 stades") |
| Orientation, 118b | "this region, all along the island, faced towards the South and was sheltered from the Northern blasts" | "This part of the island looked towards the south, and was sheltered from the north" | ὁ δὲ τόπος οὗτος ὅλης τῆς νήσου πρὸς νότον ἐτέτραπτο, ἀπὸ τῶν ἄρκτων κατάβορρος. Perseus word tool for κατάβορρος: "sheltered from the north" |
| Plain and sea, 113c | "Bordering on the sea and extending through the center of the whole island" | "Looking towards the sea, but in the centre of the whole island" | πρὸς θαλάττης μέν, κατὰ δὲ μέσον πάσης |
| Hill, 113c | "over against its center" | "also in the centre of the island" | πρὸς τῷ πεδίῳ δὲ αὖ κατὰ μέσον |
| Gadeira, 114b | "up to the part of the country now called Gadeira" | "facing the country which is now called the region of Gades" | ἐπὶ τὸ τῆς Γαδειρικῆς νῦν χώρας |
| Who kept Solon's writings, 113b | "in the possession of my grandfather" | "My great-grandfather, Dropides, had the original writing" | παρὰ τῷ πάππῳ (πάππος is grandfather) |
| The mud, 25d | "blocked up by the shoal mud which the island created as it settled down" | "because there is a shoal of mud in the way" (his Introduction says "shallows") | πηλοῦ κάρτα βραχέος ἐμποδὼν ("very shallow mud in the way") |
| Impassable, 25d | "impassable and unsearchable" | "impassable and impenetrable" | ἄπορον καὶ ἀδιερεύνητον |
| The day and night, 25c-d | "one grievous day and night" | "a single day and night of misfortune" | μιᾶς ἡμέρας καὶ νυκτὸς χαλεπῆς. Neither says "terrible" |
| Tyrrhenia, 25b | "Tuscany" | "Tyrrhenia" | Τυρρηνίας |
| "In front of the strait", 24e | "in front of the mouth" | "in front of the straits" | πρὸ τοῦ στόματος |
| The way to the far continent, 24e | "it was possible … to cross from it to the other islands" | "was the way to other islands" | ἐξ ἧς ἐπιβατὸν ἐπὶ τὰς ἄλλας νήσους |
| Canal width, 115d | "three plethra" | "three hundred feet" | τρίπλεθρον. Same value at 100 feet a plethron |
| Ditch depth, 118c | "a plethrum" | "a hundred feet" | πλέθρου. Same value |
| Temple width, 116d | "three plethra" | "half a stadium" | τρίπλεθρος. Same if a stade is 6 plethra |
| Bridge, 116a | "a plethrum in breadth" | "the sixth part of a stadium" | πλεθριαίαν |
| Canals, 118d | "of about 100 feet in width" | "of a hundred feet in width" (no "about") | τὸ πλάτος μάλιστα ἑκατὸν ποδῶν |
| "True" vs "fiction", 26e | "no invented fable but genuine history" | "a fact and not a fiction" | μὴ πλασθέντα μῦθον ἀλλ᾽ ἀληθινὸν λόγον |
| 20d | "passing strange, yet wholly true" | "though strange, is certainly true" | λόγου μάλα μὲν ἀτόπου, παντάπασί γε μὴν ἀληθοῦς |
| Plants, 115b | "perhaps the olive, or coco-palm" (editor's note) | adds "chestnuts" | Greek has ὁ ξύλινος … καρπός (woody fruit); the Perseus Greek has no word for chestnut |
| End of the Critias | breaks off at "he spake thus:" | "The rest of the Dialogue of Critias has been lost." (his note) | … καὶ συναγείρας εἶπεν (the Greek text stops here) |

The differences that change a map: the plain's orientation and whether the plain meets the sea (Plain and sea; Orientation), whether the island reached or faced Gadeira, and whether "3000 on either side" is a rectangle of 3,000 by 2,000.

## What to load first

1. **A ruler overlay from the text, not a find.** Rings, canal, wall and plain at the stadion the viewer picks (157.5, 185, 192, 209 m), centred on a clicked point. The rings are 5 km across, the wall 23 km, the plain 555 by 370 km at 185 m. Draw these before any site is claimed.
2. **Sea-floor depth with the sea lowered**: emodnet-bathymetry-multicolour, srtm15-plus, gmrt-point-and-grid at -60, -95 and -134 m. The largest claim (an island larger than Libya and Asia) and the plain are tests of exactly this.
3. **Earthquake and plate layers** for the sinking claim: plate-boundaries-pb2002, usgs-earthquakes-geojson.
4. **Sonar where it exists**: noaa-ncei-multibeam-mosaic and noaa-ncei-survey-coverage, so a candidate's rings or canal can be looked for at survey resolution.
5. **Geology**: macrostrat-geology for the three-colour stone and metal claims (both weak).

## What I could not verify

See `not_verified` in the JSON. The main gaps: the year of the dialogues; LSJ entries for most Greek words (translators' glosses are used); dates of the ancient writers; a corpus search for pre-Plato mentions; Aelian and the Greek of Strabo, Proclus and Diodorus; and the scholars' own works. Only Nesselrath's book and the opening of Zangger's article were read in full; the others are reviews, abstracts or extracts. The Perseus Lamb/Bury credit and the Attic foot (0.296 or 0.308 m) are unresolved.
