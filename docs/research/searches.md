# Searches for Atlantis: who looked, with what, and how it ended

Lane: `searches`. Checked 11 November 2026. 32 entries in `searches.json`. Every fact below was read in a page fetched today; where I only saw a title, a search summary or a quote inside another page, the entry says so in `notes`.

## What I found

People have gone looking for Atlantis in four ways: by argument from books (Rudbeck 1679, Donnelly 1882, Frost 1913), by sea-floor sampling and sonar (a 1931 Woods Hole cruise, Soviet photographs in 1974, Cuba 2001, Cyprus 2004, Cádiz 2023), by satellite pictures (Doñana 2004, Google Ocean 2009, Merlin Burrows 2018), and by geology and dating that tested a proposal (Bimini cores, Spartel, Richat, Thera, Doñana sediments). None has produced evidence that a city described by Plato existed. Outcomes by status: 7 refuted, 5 corrected, 5 confirmed, 8 unresolved, 4 never-tested, 3 no-claim. "Confirmed" here means the test result stands (a real settlement, a dated eruption, a natural origin), not that Atlantis was found.

This month's wave is different in kind. On 11 November 2026 (05:41 UTC, the evening of 10 November in San Francisco) pash, who works on Codex at OpenAI, posted: "I’ve had codex running for 26 days searching for atlantis. Best bet right now is faraoe plateau but needs more time". The post gives no method, data, map or repository, and his replies that day add none. Polymarket reposted it as "vibe archaeology". I found no earlier AI-agent Atlantis search. So the AI entry is `unresolved`: it names a place, the Faroe Plateau, and nothing that can be checked.

## Five things that matter most

1. **The AI search has no checkable content yet.** One post, one place name, no data. Treat the Faroe Plateau as a new, unvetted candidate until someone publishes how it was reached.
2. **Most "finds" met an explanation quickly.** Google's grid (days), Cyprus (a German physicist within a week), Bimini (found in 1968, cored in 1977 and dated by 1979). The Doñana "circles" were explained by a 2012 paper on ponds dug in 2004 and 2005.
3. **The Doñana marsh has been claimed three times (2004, 2011, 2018), and the Cádiz coast twice since (2023, 2025).** The Spanish CSIC team that cored the marsh reports a settlement about 5,000 years old and a marine flood and tsunami around 2200 to 2000 BCE. Its press release does not mention Atlantis.
4. **Real tests moved the Thera date, not the story.** Radiocarbon puts the eruption at 1627 to 1600 BCE, a century earlier than the Egyptian-based date and still about 8,000 years after Plato's date.
5. **The geological case against an Atlantic island is old.** Högbom (1938) and Pettersson (1944) made it before plate tectonics was accepted, as summarised by Franke. I found no drilling report in this lane.

## Disagreements between sources

- **Cuba depth and age.** The Globe and Mail (7 December 2001) says "may be a 6,000-year-old city"; BBC the same day says stone structures more than 2,000 feet (650 m) down; Iturralde says "If I had to explain this geologically, I would have a hard time" (via Ancient Origins); Fitzpatrick-Matthews notes Ice Age sea level fell only about 100 m. BBC says the structures were first seen in 2000, Ancient Origins says 2001.
- **Bimini dates.** Gifford and Ball dated limestone under the stones to 14,992 ± 258 BP (uranium-thorium); the 1977 core gave 2,770 to 2,780 ± 70 to 80 radiocarbon years BP for cement and shells. Proponents say whole-rock samples can be contaminated; Wikipedia says the background data show not all were whole-rock.
- **Doñana, 2011.** Popular Science reports "a 4,000-year-old civilization" (Freund's team); Colavito says initial radiocarbon dates were 5,000 to 2,400 years; the Spanish CSIC team dates the settlement to about 5,000 years ago. None is near Plato's date of about 9600 BCE.
- **Google grid.** In 2009 Google said the lines were the track of a survey boat; in 2012 Sandwell said depth errors from one grid-pattern cruise made the grid. Both say artefact.
- **Spartel.** Collina-Girard puts an island 10 to 12 km across, drowned near 9400 BCE; Gutscher says it could not have been Atlantis (Bronze Age society). The Bryn Mawr review says he "has not found Plato's Atlantis".
- **Milos criteria.** The 2005 list, as Atlantipedia prints it, says Atlantis was larger than "Libya and Anatolia and Middle East and Sinai", not Plato's "Libya and Asia".
- **pash's date.** The task said 10 November; the API timestamp is 11 November 05:41 UTC, the evening of 10 November in San Francisco.
- **Marinatos.** His 1939 abstract does not mention Atlantis. The link between Thera and Atlantis came from other writers.

## Data to load first

Places where a claim can be checked against open data we already catalogue:

1. **Doñana and the Cádiz coast**: Spain PNOA lidar (`spain-pnoa-lidar-dsm`) and EMODnet bathymetry (`emodnet-bathymetry-multicolour`), beside the CSIC sediment results and the Frisch et al. pond map. This covers Kühne, Freund, Merlin Burrows and Donnellan.
2. **Spartel Bank**: EMODnet and GMRT sea-floor depth (`emodnet-bathymetry-multicolour`, `gmrt-wms`), with the Collina-Girard and Gutscher papers.
3. **Faroe Plateau**: GEBCO or EMODnet depth, so the AI claim can be shown next to the sea floor. No page I fetched gives coordinates for it, so the site-data lane should choose them.
4. **Cyprus Basin**: GMRT depth, with Hübscher et al. 2009.
5. **Google grid**: the Sandwell and Smith ship-track KMZ and `srtm15-plus`, which shows an artefact in a depth grid.
6. **Richat**: `copernicus-dem-aws`, with Matton et al. 2005.

The timeline below (the 32 entries) should become the globe's search layer.

## What I could not verify

See `not_verified` in `searches.json`. The main gaps: Spanuth's Heligoland work, the SAA letter text and date, the Atlantis Rising film itself and the "anchor stones off Cádiz" lead, Corsetti's video, Freund's own words, Spartel survey dates, any Azores drilling report, and every Soviet and Russian expedition other than Ampère. A same-day GitHub thesis placing Atlantis at Chicxulub is handed to the hypotheses lane.

## A timeline

- **1679 to 1702**: Olof Rudbeck's Atlantica: Sweden as Atlantis (book). **never-tested**: The argument was made from texts, so nobody ran a physical test. `rudbeck-atlantica-1679`
- **1882**: Ignatius Donnelly, Atlantis: The Antediluvian World (book). **refuted**: Swedish oceanographer Hans Pettersson argued in 1944 that no island in the Atlantic could have sunk in the time Plato gives, because continents do not sink and the Mid-Atlantic Ridge is building volcanic crust. `donnelly-antediluvian-world-1882`
- **1913 to 1938**: Termier's Atlantis lecture and the Azores lava glass (scientific-test). **refuted**: Högbom said in 1938 that lava can cool to glass under water, and that rocks rafted by Ice Age icebergs to the Azores all settled near today's coast, which means land and sea levels there have been about the same since the last Ice Age. `termier-azores-tachylite-1913`
- **1913-11**: K. T. Frost: the Critias and Minoan Crete (book). **never-tested**: The identification is a literary argument, and I found no survey or excavation reported as a test of it as Atlantis. `frost-critias-minoan-crete-1913`
- **1931**: Bigelow and Iselin's Azores cruise on the ketch Atlantis (expedition). **no-claim**: The crew found nothing and made no claim. `whoi-atlantis-azores-cruise-1931`
- **1939-12**: Marinatos: volcanic destruction of Minoan Crete (book). **corrected**: The Antiquity editors added a postscript saying the evidence was insufficient for the claim that the eruption destroyed Minoan civilisation, and the hypothesis has since been rejected as stated. `marinatos-volcanic-destruction-1939`
- **1944**: Pettersson's geophysical case against an Atlantic Atlantis (scientific-test). **confirmed**: Franke notes that continental drift was accepted only in the 1960s and 1970s, which supports Pettersson's reasoning. `pettersson-atlantis-och-atlanten-1944`
- **1966**: Mavor's search for Atlantis off Thera (expedition). **unresolved**: WHOI says a long dispute over credit left the findings in doubt. `whoi-mavor-thera-1966`
- **1967 to 1974**: Akrotiri excavations on Thera begin (expedition). **confirmed**: The town is real and was destroyed in the Theran eruption in the 16th century BCE per Wikipedia; radiocarbon work gives 1627 to 1600 BCE. That is about 8,000 years after Plato's date, and the site is inside the Aegean. `akrotiri-excavation-1967`
- **1968-09**: Bimini Road found; Cayce's Atlantis readings (expedition). **refuted**: Geologists who studied it found beachrock jointed into blocks. `bimini-road-discovery-1968`
- **1974-03 to 1979**: Soviet photographs of a 'wall' on Ampère Seamount (expedition). **corrected**: Atlantipedia says that when better images were obtained, Aksyonov declared the features natural. `ampere-seamount-soviet-photos-1974`
- **1977 to 1980**: Cores and dating of the Bimini Road (scientific-test). **refuted**: The published consensus is natural beachrock broken by joints. `bimini-cores-and-dating-1977-1980`
- **2000 to 2001-12**: Sonar images of structures off western Cuba (ADC survey) (sonar-claim). **unresolved**: Experts quoted at the time were cautious and no published follow-up survey was found in the 2014 summary I read. `zelitsky-cuba-sonar-2000-2001`
- **2001-08 to 2001-09**: Collina-Girard proposes Spartel Bank (scientific-test). **refuted**: A Bryn Mawr Classical Review (2009) of his book found real prehistory but not Atlantis. `collina-girard-spartel-2001`
- **2003 to 2005-08**: Gutscher's survey and earthquake test of the Spartel Bank (scientific-test). **corrected**: In follow-up correspondence Gutscher said the island could not have been Atlantis, since Spartel could not have supported the Bronze Age society Plato describes. `gutscher-spartel-multibeam-2005`
- **2004-06**: Kühne and Wickboldt: rings in satellite photos of the Doñana marshes (satellite-claim). **unresolved**: The Spanish Hinojos Project later worked in the same marsh. `kuhne-donana-satellite-2004`
- **2004-11**: Sarmast's expedition and the 'Atlantis' hill off Cyprus (sonar-claim). **refuted**: A German geophysicist and others said the feature was a mud volcano or natural salt-tectonic fold. `sarmast-cyprus-sonar-2004`
- **2005 to 2018-11**: Spanish Hinojos Project in the Doñana marsh (scientific-test). **confirmed**: The release does not mention Atlantis. `hinojos-project-donana-2005-2018`
- **2005-07-11 to 2005-07-13**: Milos conference and the 24 criteria (conference). **unresolved**: No site has been shown to meet the list. `milos-conference-2005-24-criteria`
- **2005-08**: Geology of the Richat Structure (Matton et al.) (scientific-test). **confirmed**: The IUGS listed it in 2022 among 100 geological heritage sites as 'a spectacular example of a magmatic concentric alkaline complex'. This is a geology paper, not an Atlantis test; it sets the age and origin that Atlantis proposals must answer. `matton-richat-geology-2005`
- **2006-04**: Radiocarbon dating of the Thera eruption (scientific-test). **corrected**: The date moved about a century earlier than archaeology had held, but stays about 8,000 years after Plato's. `thera-eruption-radiocarbon-2006`
- **2008 to 2011**: Atlantis Hypothesis conferences in Athens and Santorini (conference). **no-claim**: No criteria or finding from these two meetings were fetched. `atlantis-hypothesis-conferences-2008-2011`
- **2009**: Cyprus Basin salt tectonics and mud volcanoes (Hübscher et al.) (scientific-test). **confirmed**: The natural reading has not been contested in anything I found. `hubscher-cyprus-basin-salt-tectonics-2009`
- **2009-02 to 2012-02**: The 'Atlantis' grid in Google Ocean (sonar-claim). **corrected**: Google said the lines were the tracks of a survey ship. `google-ocean-atlantis-grid-2009`
- **2011-03**: Freund's 'Finding Atlantis' at Doñana (documentary). **unresolved**: Members of the Spanish team working there since 2005 criticised the claim. `freund-finding-atlantis-donana-2011`
- **2017-01**: 'Atlantis Rising' (James Cameron, Simcha Jacobovici) (documentary). **never-tested**: The film announced no new dated find of its own that I could see. `atlantis-rising-natgeo-2017`
- **2018 to 2018-11**: Jimmy Corsetti's Richat video ('Bright Insight') (documentary). **never-tested**: Nobody has reported excavating for a city at the site. `corsetti-richat-video-2018`
- **2018-11**: Merlin Burrows: 'towers' and a sea wall at Doñana (satellite-claim). **refuted**: A critic found the oval 'circles' were experimental ponds dug in 2004 to 2005 for a zooplankton study, and that they are absent from older Google Earth imagery. `merlin-burrows-donana-2018`
- **2022-11-10 to 2024-10-16**: Graham Hancock's 'Ancient Apocalypse' and the SAA letter (documentary). **no-claim**: The series names no Atlantis site that I could find. `ancient-apocalypse-netflix-2022`
- **2023-09-30**: Cádiz coast 'walls': Chipiona press conference (sonar-claim). **unresolved**: The archaeologist called it 'the first data'. A Huelva stratigraphy professor said the coastal formations he has studied show no human action, though he was speaking about the region, not this site. `donnellan-chipiona-press-conference-2023`
- **2025-07 to 2025-09**: 'Atlantica' film and the Cádiz concentric-wall claim (documentary). **unresolved**: The Jerusalem Post says Donnellan did not convince the scientific community, and he says geologists date the structures to 10,000 to 12,000 years. `atlantica-donnellan-film-2025`
- **2026-10 to 2026-11-11**: 'Codex running for 26 days searching for Atlantis' (pash, OpenAI) (ai-search). **unresolved**: No write-up, data or follow-up claim was found in pash's replies of that day. `pash-codex-atlantis-2026`

## What settled each one

### A data artefact

The thing seen was made by the survey or the software, not by a place. Google, Sandwell and Smith said the grid was ship tracks; Sandwell later traced it to a velocity error on one grid-pattern cruise. The 2012 data update removed it.

- The 'Atlantis' grid in Google Ocean (`google-ocean-atlantis-grid-2009`, corrected)

### Natural geology

Geologists showed the shape forms by a known natural process, or that the ground could not have been dry land. Beachrock joints (Bimini), a salt-tectonic fold and slide scar (Cyprus), a Cretaceous dome (Richat), lava glass that forms under water and iceberg-rafted rocks at today's shoreline (Azores), a ridge that builds crust (Pettersson). The Ampère entry rests on one secondary source and is low confidence.

- Bimini Road found; Cayce's Atlantis readings (`bimini-road-discovery-1968`, refuted)
- Cores and dating of the Bimini Road (`bimini-cores-and-dating-1977-1980`, refuted)
- Sarmast's expedition and the 'Atlantis' hill off Cyprus (`sarmast-cyprus-sonar-2004`, refuted)
- Cyprus Basin salt tectonics and mud volcanoes (Hübscher et al.) (`hubscher-cyprus-basin-salt-tectonics-2009`, confirmed)
- Geology of the Richat Structure (Matton et al.) (`matton-richat-geology-2005`, confirmed)
- Jimmy Corsetti's Richat video ('Bright Insight') (`corsetti-richat-video-2018`, never-tested)
- Termier's Atlantis lecture and the Azores lava glass (`termier-azores-tachylite-1913`, refuted)
- Ignatius Donnelly, Atlantis: The Antediluvian World (`donnelly-antediluvian-world-1882`, refuted)
- Pettersson's geophysical case against an Atlantic Atlantis (`pettersson-atlantis-och-atlanten-1944`, confirmed)
- Soviet photographs of a 'wall' on Ampère Seamount (`ampere-seamount-soviet-photos-1974`, corrected)

### Wrong date

A real site was found, but its age does not fit Plato's 9,000 years before Solon, or its size or society does not fit. Thera erupted about 1627 to 1600 BCE. The Doñana marsh settlement is about 5,000 years old. Spartel was a small island that Gutscher says could not carry a Bronze Age society.

- Akrotiri excavations on Thera begin (`akrotiri-excavation-1967`, confirmed)
- Radiocarbon dating of the Thera eruption (`thera-eruption-radiocarbon-2006`, corrected)
- Marinatos: volcanic destruction of Minoan Crete (`marinatos-volcanic-destruction-1939`, corrected)
- Mavor's search for Atlantis off Thera (`whoi-mavor-thera-1966`, unresolved)
- Collina-Girard proposes Spartel Bank (`collina-girard-spartel-2001`, refuted)
- Gutscher's survey and earthquake test of the Spartel Bank (`gutscher-spartel-multibeam-2005`, corrected)
- Spanish Hinojos Project in the Doñana marsh (`hinojos-project-donana-2005-2018`, confirmed)

### Already explained

The feature was a modern or known one that the claim did not account for. Experimental ponds dug in 2004 and 2005 at Caracoles estate (Frisch et al., PLoS ONE 2012). The match between the company's circles and the ponds is a blog author's image comparison, so the entry is medium confidence.

- Merlin Burrows: 'towers' and a sea wall at Doñana (`merlin-burrows-donana-2018`, refuted)

### Nobody looked, or nobody can say

No published survey, dive, dating or excavation has settled it, or the claim was never a testable one. Includes a 1931 cruise that looked and found nothing, two conference series that set criteria but ran no tests, and the AI-agent post, which gives no data.

- Sonar images of structures off western Cuba (ADC survey) (`zelitsky-cuba-sonar-2000-2001`, unresolved)
- Kühne and Wickboldt: rings in satellite photos of the Doñana marshes (`kuhne-donana-satellite-2004`, unresolved)
- Freund's 'Finding Atlantis' at Doñana (`freund-finding-atlantis-donana-2011`, unresolved)
- 'Atlantis Rising' (James Cameron, Simcha Jacobovici) (`atlantis-rising-natgeo-2017`, never-tested)
- Cádiz coast 'walls': Chipiona press conference (`donnellan-chipiona-press-conference-2023`, unresolved)
- 'Atlantica' film and the Cádiz concentric-wall claim (`atlantica-donnellan-film-2025`, unresolved)
- 'Codex running for 26 days searching for Atlantis' (pash, OpenAI) (`pash-codex-atlantis-2026`, unresolved)
- Olof Rudbeck's Atlantica: Sweden as Atlantis (`rudbeck-atlantica-1679`, never-tested)
- K. T. Frost: the Critias and Minoan Crete (`frost-critias-minoan-crete-1913`, never-tested)
- Bigelow and Iselin's Azores cruise on the ketch Atlantis (`whoi-atlantis-azores-cruise-1931`, no-claim)
- Milos conference and the 24 criteria (`milos-conference-2005-24-criteria`, unresolved)
- Atlantis Hypothesis conferences in Athens and Santorini (`atlantis-hypothesis-conferences-2008-2011`, no-claim)
- Graham Hancock's 'Ancient Apocalypse' and the SAA letter (`ancient-apocalypse-netflix-2022`, no-claim)
