# Atlantis: where people have proposed it (hypotheses lane)

Checked 2026-11-11. Data: `hypotheses.json` (same folder). 42 proposals, 15 already in the globe and 27 new.

## What I found

- **42 proposals**, each with a coordinate from Wikidata (property P625) or a gazetteer, who proposed it and when, which of Plato's claims it is said to fit and conflict with, tests, published replies, and a standing with the reason and whose view it is.
- **Standing** (what specialists think): mainstream: 0, plausible: 3, fringe: 27, rejected: 12, hoax: 0. **Role**: candidate: 28, inspiration: 10, claimed: 4, search-area: 0.
- **No proposal has archaeological support.** Only a few were ever tested on the ground or on the sea floor: Spartel Bank, Cyprus Basin, the Bimini Road, the Richat Structure, Antarctica and the Azores. None of those tests found a built city. Little Sole Bank was announced and never surveyed; Cuba (2001) and Cádiz (1973) were each looked at once and nothing was confirmed.
- **Many proposals need one of Plato's details read differently.** Proposers change the date (9,600 BCE moved to 5510 BCE, 3100 BCE, 1600 BCE or 1200 BCE), the size, the Pillars of Heracles, or the Egyptian source. The matrix below shows which claims each proposal supports and which it breaks.
- The sources are mixed on purpose. Where I could read only Wikipedia or Atlantipedia (an editor's A to Z guide, with his own opinions), the record says so and confidence is `low`.

## How to read the records

- `fits` is what the proponent says; `conflicts` is what does not fit and who says so. I did not score proposals. Where a conflict rests on our own earlier `legends.json` note, the source is marked `local`.
- `tests` are surveys, cores, dating or digs that looked. A "test" of a related claim (for example the Black Sea flood, or the Cuban sonar targets) is labelled as such.
- `bbox` is `[west, south, east, north]`, a framing box I chose around the pin. It is not a surveyed extent.

## The disagreements

- **Spartel Bank.** Collina-Girard says the drowned island west of Gibraltar fits Plato and dates its drowning to about 11,400 years ago (Wikipedia's account; Gutscher's abstract says ca. 11.6 ka). Gutscher, who mapped it and tested a Lisbon-type tsunami, said it could not have held a Bronze Age city, and a 2005 report has him estimating it was under 500 m across (reposted, original not fetched). The Bryn Mawr Classical Review says Collina-Girard "has not found Plato's Atlantis" and finds his Plato derivative.
- **Santorini.** Galanopoulos, Luce and later writers (as listed by Atlantipedia and Wikipedia) tie the 1600 BCE eruption to Plato; Marinatos's 1939 paper is about the Minoan palaces; Robert Ballard says the dates do not coincide. Even the eruption date is "fiercely debated" (Wikipedia, Minoan eruption).
- **Doñana.** Kühne sees "concentric rings just as Plato described", rings slightly larger than Plato's, and offers a 20% longer stade. Tony Wilkinson, a remote-sensing archaeologist, saw "several leaps of faith" and wanted a date. The Spanish Hinojos Project's Villarías-Robles says Freund was "a newcomer" with his own Solomon-and-Tartessos idea.
- **Cyprus Basin.** Sarmast reads sonar walls as Atlantis; Hübscher and others read a salt-tectonic fold and a slide scar, and ODP cores show the basin has been under water for millions of years (as summarised by Wikipedia). Benny Peiser called the reading "blinkered".
- **Bimini Road.** Followers read a road; US Geological Survey and University of Miami dating of core samples gives beachrock of about 2,780 to 3,510 14C years before present, not 11,600 (Wikipedia, citing Calvert and others 1979).
- **Where the Pillars are.** Frau says the strait between Sicily and Tunisia, Schoppe the Bosporus, Herrmann a barrier near the Tunisian chotts, Santos the Krakatau and Dempo volcanoes. Every proposal that moves the Pillars depends on that one change being right.
- **The date.** The proposed events run from Plato's 9,600 BCE (Spartel, Antarctica, Azov) through 6,200 BCE (Doggerland), 5510 BCE (Black Sea), about 3100 BCE (Irish Sea, Dunbavin), about 1600 BCE (Thera) and about 1200 BCE (Troy, Heligoland, Tantalis) to 800 to 500 BCE (Kühne at Doñana).
- **Standing of the 15 already in the globe.** I would change none today. Richat could move from fringe to rejected if the Atlantis claim is tested directly; Spartel is rejected by its own analyst but the island is real, so keep the note.

## What to load into the globe first

1. **Spartel Bank** and the Strait of Gibraltar: the one claim with a published bathymetric test. Lowered sea about -60 m.
2. **Dogger Bank and Heligoland** in the North Sea: open EMODnet bathymetry shows the drowned plain well, and a lowered sea shows Doggerland.
3. **Cyprus Basin**: open EMODnet and GMRT data let anyone compare the "walls" with the salt-fold explanation.
4. **Richat Structure**: a Sahara dome with rings, easy to show with a DEM, with geology papers to compare.
5. **Doñana / Tartessos** with Spanish lidar (`spain-pnoa-lidar-dsm`), and **Souss-Massa** in Morocco.
6. **Sundaland** with a lowered sea (about -60 to -95 m) to show the Sunda shelf as dry land.

The site-data lane has the sources and exact load steps.

## Handoffs

- **site-data:** Spartel Bank: Gutscher's 2005 high-resolution bathymetry is the one survey made to test an Atlantis claim; find open multibeam and load at a sea level near -60 m (sources.json: emodnet-bathymetry-multicolour, gmrt-wms).
- **site-data:** Dogger Bank, Heligoland, Little Sole Bank, Le Danois Bank and the Cyprus Basin all sit on open EMODnet bathymetry; Doñana and Souss-Massa need land DEM or lidar (sources.json: spain-pnoa-lidar-dsm, copernicus-dem-aws).
- **site-data:** Richat: Matton et al. 2005 geology and the Acheulean artefact surveys are the tests; macrostrat-geology and copernicus-dem-aws can show the dome and rings.
- **searches:** Claims that were announced and then not followed by a published survey: Sarmast (Cyprus, 2004), Zelitsky (Cuba, 2001), Asher (Cádiz, 1973), Koudriavtsev (Little Sole Bank, planned 1998), Spanuth's 1952 dive (Heligoland), Freund (Doñana, 2011), Los Atlantes (Lanzarote, 2024).
- **plato:** Several proposers change Plato's numbers or terms: Herrmann cuts the dimensions by 30 (schoinos versus stade), Kühne uses a stade 20% longer, Zangger and James treat the Egyptian source as distorted, Schoppe and Santos and Frau move the Pillars. Please record the Greek for 'Atlantic', 'Pillars' and the length units.
- **plato:** Claim ids from the brief were enough for me. Only 'ten-kings' ties to a place name (Gadeiros and Cádiz, per Atlantipedia); please confirm the Greek for that link.
- **world-9600bce:** Proposals need sea level and coastlines at several dates: about 9,600 BCE (Spartel, Antarctica, Azov), about 6,200 BCE (Doggerland, Storegga), about 5,500 BCE (Black Sea and Bosporus), about 3,100 BCE (Dunbavin) and about 1,200 BCE (Heligoland, Sardinia). Sundaland needs its own shelf flooding dates.

## The matrix

F = the proponent says it fits; C = does not fit and someone says so; F/C = both. Blank = nothing sourced either way, which is not a score. Columns are numbered; the key is below the table.

| Proposal | Standing | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Santorini (Thera) | plausible | C |  |  |  | C |  | F |  |  |  |  |  |  |  |  |  |  |  |
| Minoan Crete (Knossos) | plausible | C |  |  |  | C |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Helike | plausible | C | C |  |  |  |  | F |  |  |  |  |  |  |  |  |  |  |  |
| Spartel Bank | rejected | F | C |  |  | F |  | F | C |  |  |  |  |  |  |  |  |  |  |
| Doñana marshes (Marisma de Hinojos) and Tartessos | fringe | F | C |  |  | C |  |  | F | F |  |  |  |  |  | F |  |  |  |
| Richat Structure (Eye of the Sahara) | fringe | C |  |  |  |  |  |  | F/C |  |  |  |  |  |  |  |  |  |  |
| Azores Plateau and the Mid-Atlantic Ridge | rejected | F |  |  |  | C |  |  |  |  |  | F | F | F |  |  |  |  |  |
| Bimini Road | rejected |  |  |  |  | C |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Antarctica | rejected | C |  |  |  | F |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Heligoland | rejected |  |  |  |  | C |  | F |  |  |  |  |  |  | C |  |  |  |  |
| Sweden (Old Uppsala) | rejected | C |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Ireland | fringe | F |  |  |  |  |  | C |  |  |  |  |  |  |  |  |  |  |  |
| Cyprus Basin (seabed southeast of Cyprus) | rejected | C |  |  |  | C |  |  | F |  |  |  |  |  |  |  |  |  |  |
| Sardinia | fringe | F |  |  |  | C |  | F |  |  |  |  |  |  |  |  |  |  |  |
| Troy (Hisarlık) | fringe | C |  |  |  |  | F | F |  |  |  |  |  |  |  |  |  |  |  |
| Lake Copais, Boeotia | fringe | C |  |  |  | C |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Malta | fringe |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Tantalis near Mount Sipylus (western Anatolia) | fringe | C |  |  |  |  |  | F |  |  |  |  |  |  |  |  |  |  |  |
| Black Sea (Snake Island and the north-west shelf) | fringe | C |  |  |  | C |  | F |  | F |  |  |  |  |  |  |  |  | C |
| Sea of Azov | fringe | C |  |  |  | F |  |  |  | F |  |  |  |  |  |  |  |  |  |
| Souss-Massa plain, Morocco | fringe | F |  |  | C |  |  |  |  |  |  |  | F |  |  |  |  |  | F |
| Atlas Mountains and Morocco (Godron, Berlioux, Lagneau) | fringe | F |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Salé and Chellah, near Rabat | fringe | F |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Chott el Djerid and the Gulf of Gabès, Tunisia | fringe |  |  |  |  | C |  |  | C |  |  |  |  |  | F |  | F |  |  |
| Hoggar (Ahaggar) Mountains, Sahara | fringe | C |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Ife, south-west Nigeria (Frobenius) | fringe |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Canary Islands, Madeira and Cape Verde | rejected | F |  | F |  | C |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Los Atlantes seamount, east of Lanzarote | fringe |  |  |  |  | C |  | F |  |  |  |  |  |  |  |  |  |  |  |
| Le Danois Bank (El Cachucho), Bay of Biscay | fringe | F |  |  |  | C |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Irish Sea plain (Anglesey to the Isle of Man) | fringe |  |  |  |  | C |  |  |  | F |  |  |  |  |  |  |  |  |  |
| Little Sole Bank and the Celtic Shelf | fringe | F |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Dogger Bank and Silverpit crater | fringe |  |  |  |  | C |  | F | C |  |  |  |  |  |  |  |  |  |  |
| The New World (López de Gómara to Bacon) | rejected | F |  | F |  |  |  | C |  |  |  |  |  |  |  |  |  |  |  |
| Seabed off Cabo San Antonio, western Cuba | fringe |  |  |  |  | C |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Pampa Aullagas, Bolivian Altiplano | fringe | C |  |  | C |  |  |  | F |  | F |  | F |  |  |  |  |  |  |
| Yucatán and the Maya (Brasseur, Le Plongeon) | rejected |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Sundaland and Indonesia | fringe | C |  |  |  | F |  |  |  |  |  |  |  |  |  |  |  |  |  |
| The Arctic and Spitsbergen (Bailly) | rejected | C |  |  |  |  |  |  |  |  |  |  |  |  | F |  |  |  |  |
| The North Pole (William F. Warren) | fringe | C |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| The Holy Land, Israel and Sinai | rejected | C |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Cádiz (Gadir) and its bay | fringe |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | F |  |
| Greenland and the north Atlantic (La Mothe le Vayer to Dantas) | fringe | C |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

Key: 1. `beyond-pillars`; 2. `larger-than-libya-and-asia`; 3. `islands-and-opposite-continent`; 4. `empire-to-egypt-and-tyrrhenia`; 5. `nine-thousand-years`; 6. `war-with-athens`; 7. `sank-in-a-day-and-night`; 8. `ringed-city`; 9. `great-plain`; 10. `plain-ditch`; 11. `mountains-shelter-north`; 12. `red-white-black-stone`; 13. `hot-and-cold-springs`; 14. `elephants`; 15. `orichalcum-and-metals`; 16. `two-harvests`; 17. `ten-kings`; 18. `fleet-and-harbours`.

Claims with no sourced cell for any proposal: `impassable-mud`, `canal-to-sea`, `temple-of-poseidon`, `bull-ritual`. That reflects what I could verify today, not proof that no one argues from them: the globe's Crete entry cites bull ritual, but the Frost abstract I read does not mention it.

## Proposals that were tested

Someone looked at the place or the evidence for it, and reported a result:

- **Spartel Bank:** High-resolution bathymetry of Spartel and a tsunami hazard analysis (Marc-André Gutscher, 2005). The morphology of the paleoisland was mapped and the viability of habitation discussed. A great earthquake and tsunami are plausible for the Gulf of Cádiz, but Gutscher later said the island could not have held Plato's Bronze Age city. [source](https://doi.org/10.1130/g21597ar.1)
- **Richat Structure (Eye of the Sahara):** Geological study of the structure (Matton, Jébrak and Lee, 2005). It is the eroded top of a Cretaceous alkaline complex with a hydrothermal karst breccia core, formed by doming and erosion over millions of years. [source](https://doi.org/10.1130/g21542ar.1)
- **Richat Structure (Eye of the Sahara):** Archaeological survey of the structure's depressions (Prehistoric artefact mapping from 1974 onward (as summarised by Wikipedia), 1974). Acheulean stone tools along the wadis and sparse Neolithic points; no settlement debris. [source](https://en.wikipedia.org/wiki/Richat_Structure)
- **Azores Plateau and the Mid-Atlantic Ridge:** Rock study of the Azores and dredged seabed lavas (Charles Schuchert, 1917). The Azores are volcanic and not remnants of a continent; the dredged tachylytes formed where they lie; no geologic data support Plato's Atlantis in historic times. [source](https://doi.org/10.1073/pnas.3.2.65)
- **Bimini Road:** Coring and radiocarbon dating of the stones (Eugene Shinn (USGS) with the University of Miami radiocarbon laboratory; Marshall McKusick, 1979). The blocks are carbonate-cemented shell beachrock, native to the Bahamas, with dates of about 2,780 to 3,510 14C years before present. [source](https://en.wikipedia.org/wiki/Bimini_Road)
- **Antarctica:** Ice core drilled through the ice at Dome C (EPICA community members, 2004). The core records eight glacial cycles of continuous ice, which an ice-free Antarctica about 11,600 years ago would break. [source](https://doi.org/10.1038/nature02599)
- **Cyprus Basin (seabed southeast of Cyprus):** Salt tectonics and mud volcanism survey of the Cyprus and Latakia basins (Christian Hübscher and colleagues, 2009). Per Wikipedia, the 'walls' are a natural fold from salt tectonics and a slide scar with compressional folds. [source](https://en.wikipedia.org/wiki/Location_hypotheses_of_Atlantis)
- **Helike:** Excavation and boreholes in the Helike delta (Katsonopoulou, Soter and the Helike Project, 2011). An Early Bronze Age settlement and a Classical site were found buried under 3 to 5 m of lagoon mud; the Classical site may be the city destroyed in 373 BCE. The buried city was found, not drowned, which differs from a sunken island. [source](https://doi.org/10.1002/gea.20366)
- **Canary Islands, Madeira and Cape Verde:** Geological and marine-terrace studies of the Canaries and Cape Verde (Various geologists, as summarised by Wikipedia). Uplift with no sign of catastrophic subsidence: Pliocene pillow lavas lifted 46 to 143 m, raised terraces on Fuerteventura, and no evidence the surrounding ocean floor was ever above water. [source](https://en.wikipedia.org/wiki/Location_hypotheses_of_Atlantis)
- **Malta:** Examination of the 1828 'Atlantis stone' and manuscript (Thorsten C. Franke (Atlantis-Scout, historical review), 2013). Concludes that the stone and the 'Eumalus of Cyrene' manuscript were forgeries produced by Fortia d'Urban and Grognet. [source](https://www.atlantis-scout.de/atlantis-malta-hoax.htm)
- **Seabed off Cabo San Antonio, western Cuba:** ROV visit and filming of the sonar targets (Zelitsky, Weinzweig and geologist Manuel Iturralde, 2001). Iturralde called the structures 'extremely peculiar' and said he would 'have a hard time' explaining them geologically; no excavation or sampling followed in the pages I read. [source](https://www.ancient-origins.net/ancient-places-americas/what-happened-sunken-city-cuba-001883?nopaging=1)
- **Cádiz (Gadir) and its bay:** Expedition off Cádiz (Maxine Asher, 1973). Despite claims of having discovered Plato's island, nothing verifiable was found. [source](https://atlantipedia.ie/samples/cadiz/)
- **Doñana marshes (Marisma de Hinojos) and Tartessos:** Remote-sensing assessment of the satellite images (Tony Wilkinson, University of Edinburgh (asked by the BBC), 2004). He saw something there but said it needed a date range and field verification, calling the identification 'several leaps of faith'. [source](https://news.bbc.co.uk/2/hi/science/nature/3766863.stm)
- **Doñana marshes (Marisma de Hinojos) and Tartessos:** Excavation and geophysics at Doñana (Spanish Hinojos Project, with Freund's 2009 to 2010 visits) (Juan Villarías-Robles and colleagues; Richard Freund, 2011). The Spanish Hinojos team has dug a first-millennium BCE settlement in the Doñana area since 2005, and Freund's 2009 to 2010 geophysical scans were presented in a National Geographic documentary as a city on an island. I found no publication showing a city of Plato's date. [source](https://www.jasoncolavito.com/blog/natgeos-shameful-atlantis-documentary-more-atlantis-bible-nonsense)

Tests of a related claim or feature, not of Atlantis itself:

- **Santorini (Thera):** Excavation of Akrotiri (Spyridon Marinatos and later teams, 1967). A Bronze Age town buried by the eruption was found. The dig does not test any link to Plato's text. [source](https://en.wikipedia.org/wiki/Santorini)
- **Lake Copais, Boeotia:** Excavation and survey of the Mycenaean drainage works of north Kopais (Kountouri and colleagues, 2013). Surface survey, geophysics and excavation of the Bronze Age dykes and canals confirm large engineered drainage in the Late Bronze Age; no one has linked this to Plato's ditch by test. [source](https://en.wikipedia.org/wiki/Lake_Copais)
- **Black Sea (Snake Island and the north-west shelf):** Marine archaeology on the Black Sea shelf off Turkey (Robert Ballard's expeditions (tests the Ryan-Pitman flood, not Atlantis), 2000). Ancient shorelines, drowned river valleys and apparent worked timbers were reported in about 100 m of water; the rapid-flood interpretation is contested by gradual-inundation models. [source](https://en.wikipedia.org/wiki/Black_Sea_deluge_hypothesis)
- **Hoggar (Ahaggar) Mountains, Sahara:** Claim of discovering Queen Tin Hinan's tomb as support for an Atlantean link (Byron Khun de Prorok; James Bramwell, 1937). Atlantipedia reports that a related claim of de Prorok 'did not stand up to closer scrutiny as James Bramwell revealed in his Lost Atlantis'. [source](https://atlantipedia.ie/samples/de-prorok-count-byron-khun/)
- **Yucatán and the Maya (Brasseur, Le Plongeon):** Attempted decipherment of Maya glyphs by Brasseur and Le Plongeon (Later epigraphers (via Atlantipedia)). Atlantipedia says the efforts to link Latin with Mayan glyphs and the de Landa alphabet 'bore little fruit'. [source](https://atlantipedia.ie/samples/le-plongeon-augustus/)
- **Los Atlantes seamount, east of Lanzarote:** ROV survey of the seamount's summit and flanks (IGME-CSIC team, 2024). Beaches, cliffs and sand dunes at a flat summit show it was once above water; the sinking dates to millions of years ago. [source](https://www.livescience.com/planet-earth/volcanos/this-could-be-the-origin-of-the-atlantis-legend-mountain-that-sank-beneath-the-waves-discovered-off-canary-islands)

Announced, but no independent test is known:

- **Heligoland:** Diving round Heligoland to look for structures (Jürgen Spanuth, 1952). He reported underwater structures (per Life magazine 1952 as cited by Atlantipedia). The Schleswig-Holstein state archaeology journal looked back on the affair in 2025. [source](https://atlantipedia.ie/samples/spanuth-dr-jurgen/)
- **Little Sole Bank and the Celtic Shelf:** Planned marine expedition to Little Sole Bank in 1998 (Viatcheslav Koudriavtsev, 1998). Atlantipedia reports he sought funding and apparently failed, so the survey did not take place. [source](https://atlantipedia.ie/samples/koudriavtsev-viatcheslav/)

No test of any kind was found for: Minoan Crete (Knossos); Sweden (Old Uppsala); Ireland; Sardinia; Troy (Hisarlık); Tantalis near Mount Sipylus (western Anatolia); Sea of Azov; Souss-Massa plain, Morocco; Atlas Mountains and Morocco (Godron, Berlioux, Lagneau); Salé and Chellah, near Rabat; Chott el Djerid and the Gulf of Gabès, Tunisia; Ife, south-west Nigeria (Frobenius); Le Danois Bank (El Cachucho), Bay of Biscay; Irish Sea plain (Anglesey to the Isle of Man); Dogger Bank and Silverpit crater; The New World (López de Gómara to Bacon); Pampa Aullagas, Bolivian Altiplano; Sundaland and Indonesia; The Arctic and Spitsbergen (Bailly); The North Pole (William F. Warren); The Holy Land, Israel and Sinai; Greenland and the north Atlantic (La Mothe le Vayer to Dantas).

## What I could not verify

- Mid-Atlantic Ridge sediment-core 'test' (Pettersson's 1947 to 1948 Albatross expedition, freshwater diatoms): a search found the cores and the diatom literature but nothing tying them to Atlantis, so it is not used.
- Great Meteor Seamount, Gorringe Bank, Ampere Seamount, Rockall and the Faroe area: no published Atlantis proposal found. The Marine Regions gazetteer lists an 'Atlantis-Great Meteor Seamount Chain' (a name for the feature, not a proposal). A claim that Heezen and others (1954) suggested the Atlantis seamount was an island in the last 12,000 years appeared only on a fringe site and is not used.
- Finland, India and Sri Lanka, South China Sea, Brazil, Denmark: not included. Atlantipedia's entries mention Hancock's Underworld and a Gulf of Cambay article, a Tamil Kumari Kandam tradition, a few Brazilian claims and a Catalan Wikipedia note with no authority, but I found no work that proposes Atlantis there and that I could cite. The Jakarta Post quotes the head of LIPI on a sunken island under the South China Sea, which is cited under Sundaland only.
- Strait of Sicily: Atlantipedia lists John Borg (1910), and a search surfaced 'A scientific approach to Plato's Atlantis' (Atti della Accademia Peloritana dei Pericolanti) and a preprint by Massimo Rapisarda. The journal and preprint pages did not load for me, so there is no pin. Sergio Frau's Sardinia case rests on the Strait of Sicily being the Pillars.
- Primary books and papers not read: Rudbeck, Spanuth (Das enträtselte Atlantis), Zangger (The Flood from Heaven), Schoppe, Frobenius, Berlioux, Allen, Mifsud et al., Dunbavin, Santos, Natawidjaja, Bailly, Warren, Brasseur de Bourbourg, Le Plongeon, Scranton, James, Erlingsson, Frau, Sarmast, Ribero-Meneses, Galanopoulos, Luce, Frost 1909. Where I give their arguments the source is a Crossref abstract, Wikipedia, Atlantipedia or press, as marked in each record.
- Papers whose text or abstract I could not read: Hübscher et al. 2009 (Cyprus), Collina-Girard 2001 (abstract not available), McKusick and Shinn 1980 (Nature, paywalled; Wikipedia gives the radiocarbon dates), Ickerodt et al. 2025 (Heligoland, blocked), Schuchert 1917 full text (bot check), Kühne 2004 (PDF would not extract), Kountouri et al. 2013 (Copais; PDF would not extract).
- Atlantis Hypothesis conference proceedings (Milos 2005, Athens 2008, Santorini 2011): not obtained. Atlantipedia cites Bergman (2005), Allen and Hübner (2008, 2011), and Dantas (2008) as papers there; I did not check the proceedings.
- Richat: the earliest published Richat-as-Atlantis proposal was not traced; a search surfaced a book by Charles Giuliani, but I did not fetch it.
- The 'standing' of the 15 existing places was checked only against the sources fetched today. No change is recommended for any of them; see each record's notes for the nuance (Richat could become 'rejected' if someone tests the claim directly).
- Wikipedia pages for Spanuth, Erlingsson, Frau, Sarmast, Collina-Girard and the Cuban formation returned nothing under the titles I tried (and the site rate-limited me for a few minutes), so those accounts rest on other fetched pages.
- Several box limits (`bbox`) are framing boxes I chose around the Wikidata or gazetteer pin; they are not surveyed extents, and I did not source them.

## All proposals at a glance

| id | name | lat, lon | standing | confidence |
| --- | --- | --- | --- | --- |
| santorini | Santorini (Thera) | 36.415, 25.4325 | plausible | medium |
| crete | Minoan Crete (Knossos) | 35.298, 25.1632 | plausible | low |
| helike | Helike | 38.222, 22.1318 | plausible | medium |
| spartel-bank | Spartel Bank | 35.9167, -5.9668 | rejected | medium |
| donana | Doñana marshes (Marisma de Hinojos) and Tartessos | 37.02, -6.44 | fringe | medium |
| richat | Richat Structure (Eye of the Sahara) | 21.124, -11.402 | fringe | medium |
| azores | Azores Plateau and the Mid-Atlantic Ridge | 38.624, -28.031 | rejected | high |
| bimini-road | Bimini Road | 25.765, -79.28 | rejected | medium |
| antarctica | Antarctica | -90, 0 | rejected | medium |
| heligoland | Heligoland | 54.1825, 7.8853 | rejected | low |
| gamla-uppsala | Sweden (Old Uppsala) | 59.8944, 17.6389 | rejected | medium |
| ireland | Ireland | 53.351, -7.921 | fringe | medium |
| cyprus-basin | Cyprus Basin (seabed southeast of Cyprus) | 35, 33 | rejected | medium |
| sardinia | Sardinia | 40, 9 | fringe | medium |
| troy | Troy (Hisarlık) | 39.9575, 26.2389 | fringe | medium |
| lake-copais | Lake Copais, Boeotia | 38.45, 23.05 | fringe | low |
| malta | Malta | 35.9, 14.4 | fringe | medium |
| tantalis-sipylus | Tantalis near Mount Sipylus (western Anatolia) | 38.567, 27.4548 | fringe | low |
| black-sea | Black Sea (Snake Island and the north-west shelf) | 43.41, 34.26 | fringe | low |
| sea-of-azov | Sea of Azov | 46, 37 | fringe | low |
| souss-massa | Souss-Massa plain, Morocco | 30.08, -8.48 | fringe | medium |
| atlas-morocco | Atlas Mountains and Morocco (Godron, Berlioux, Lagneau) | 31.0619, -7.9161 | fringe | low |
| sale-chellah | Salé and Chellah, near Rabat | 34.0067, -6.8203 | fringe | low |
| tunisian-chotts | Chott el Djerid and the Gulf of Gabès, Tunisia | 33.7, 8.4333 | fringe | medium |
| hoggar-sahara | Hoggar (Ahaggar) Mountains, Sahara | 23.2886, 5.5342 | fringe | low |
| nigeria-ife | Ife, south-west Nigeria (Frobenius) | 7.4667, 4.5667 | fringe | low |
| canary-islands | Canary Islands, Madeira and Cape Verde | 28, -15.75 | rejected | medium |
| los-atlantes | Los Atlantes seamount, east of Lanzarote | 29.035, -13.635 | fringe | medium |
| le-danois-bank | Le Danois Bank (El Cachucho), Bay of Biscay | 44.0833, -5.1 | fringe | low |
| irish-sea | Irish Sea plain (Anglesey to the Isle of Man) | 53.5, -5 | fringe | low |
| little-sole-bank | Little Sole Bank and the Celtic Shelf | 48.5, -8.75 | fringe | low |
| dogger-bank | Dogger Bank and Silverpit crater | 55.25, 3.5 | fringe | low |
| americas-early-modern | The New World (López de Gómara to Bacon) | 19, -96 | rejected | medium |
| cuba-guanahacabibes | Seabed off Cabo San Antonio, western Cuba | 21.72, -84.33 | fringe | medium |
| bolivian-altiplano | Pampa Aullagas, Bolivian Altiplano | -19.1964, -67.0617 | fringe | low |
| yucatan-maya | Yucatán and the Maya (Brasseur, Le Plongeon) | 19.5511, -89.2964 | rejected | low |
| sundaland | Sundaland and Indonesia | 0, 110 | fringe | low |
| arctic-spitsbergen | The Arctic and Spitsbergen (Bailly) | 78.75, 16 | rejected | medium |
| north-pole-warren | The North Pole (William F. Warren) | 90, 0 | fringe | low |
| holy-land | The Holy Land, Israel and Sinai | 31, 35 | rejected | low |
| cadiz-gades | Cádiz (Gadir) and its bay | 36.535, -6.2975 | fringe | low |
| greenland | Greenland and the north Atlantic (La Mothe le Vayer to Dantas) | 72, -40 | fringe | low |
