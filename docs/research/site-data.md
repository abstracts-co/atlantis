# site-data: the open data at each proposed place for Atlantis

Lane `site-data`, checked 2026-11-11. Written by the research sub-agent for this lane. Files: `site-data.json` (22 places, 89 dataset entries, 23 surveys and studies, 13 global layers) and this summary.

## Summary

The globe draws every place from one coarse grid. For the 22 places in this lane I looked for something better, tested each service the way the globe would load it (HTTPS with `Origin: null`, no key, Web Mercator), and measured what the sea floor under each marine place really is.

**What matters most**

1. **The GEBCO TID grid can be drawn today, but not from GEBCO.** GEBCO's own WMS (`wms.gebco.net`) returns an XML error inside an `image/png` for every layer and every year. NOAA NCEI hosts a Web Mercator map of the GEBCO 2024 TID that works: 200, `image/png`, `access-control-allow-origin: *`. The 2026 TID files sit on CEDA as eight GeoTIFF tiles and answer byte-range requests with CORS open, so any window can be read without a 467 MB download. I used that to count cells for 20 boxes.
2. **Most proposed sea-floor places have been sounded, and a few have not.** Spartel Bank: 99.6% of sea cells flagged as measured. Madeira 99.3%, Eratosthenes 100%. But Sundaland is 86.0% predicted from satellite gravity, the north-western Black Sea shelf is 59.6% computer interpolation, and the sea floor around the Cuban sonar claim is 40.8% gravity-predicted. Globally, from a 400-row sample, 29.8% of ocean cells are measured and 55.0% are predicted from gravity.
3. **EMODnet publishes a list of 1,617 high-resolution survey grids with direct downloads and CORS open.** Santorini has a 58 m grid (HCMR, multibeam from 2001 to 2017). The Gulf of Cadiz has 29 m grids that cover Spartel Bank. The same list gave me the survey patches near the Azores, Madeira, Malta, Sardinia, the Celtic Sea and the German Bight.
4. **Donana has a before-and-after pair and raw heights.** Spain's IGN serves 1956-57, 1973-86 and 1981-86 air photos as a WMS (CC BY 4.0), and its 5 m lidar-derived height model as a WCS with CORS open. The marsh is under 3 m of relief, so raw heights matter more than a hillshade.
5. **Most data behind published "tests" is not open.** The Santorini caldera grids of Nomikou et al. (2016) are "available on request". The Cuban sonar images were never released. Gutscher's 2005 Spartel paper is paywalled and its abstract does not say where the bathymetry came from. The open path for these places is the compilations above, not the papers.

## Disagreements and discrepancies

- GEBCO's WMS page says the `GEBCO_Latest` layers were updated to the 2026 grid in the week of 17 August 2026, and the capabilities name GEBCO_2026. Its server says the opposite when asked for a picture: 'Unable to open spatial index for /local2/mapserver/data/GEBCO_2026_TID.qix'.
- Collina-Girard (2002, open article) says an island in front of the Strait was 'engloutis 9000 ans avant notre ere'. Gutscher's 2005 abstract says the sinking was 'ca. 11.6 ka'. The two dates differ by about 600 years; neither article was a full read here.
- The SWIM paper (Zitellini et al. 2009) says contributors supplied DTMs 'at a 100 m grid spacing' and prints a map with a 'terrain pixel size: 100 metres', while its footnote describes the supplementary file as 'the SWIM digital map at 250 m grid-cell resolution'.
- PNOA lidar density, second coverage: REDIAM (read) says Andalusia's second coverage, July 2020 to May 2021, is 1.5 points per m2 and 'triplicando' the first, which makes the first 0.5. Search summaries of IGN material gave 0.5 to 4 and 0.5 to 2 for the national second coverage. I could not read IGN's own page text.
- GMRT's GridServer gives 35 to 61 m cells for every box. The TID says 86.0% of the Sunda box is gravity-predicted. Cell size is not detail.
- Cuba: coverage I saw (not read in full) gave a depth of about 650 m, and one Spanish-language article about 800 m. No source I read gives coordinates.
- GEBCO TID vintage: the NOAA picture is the 2024 grid; my counts are the 2026 grid.

## Load these first

Ten datasets that would most improve the globe for Atlantis. Each request below returned a real picture or file today.

| # | Dataset | Request that worked | Licence |
|---|---|---|---|
| 1 | **GEBCO 2024 TID picture** (NOAA NCEI). Draws measured against guessed everywhere. | `https://gis.ngdc.noaa.gov/arcgis/rest/services/IHO/GEBCO_TID/MapServer/export?bbox=-3506564.0,4369640.5,-2727327.5,4865942.3&bboxSR=3857&imageSR=3857&size=256,256&format=png32&transparent=true&layers=show:0&f=image` | Data public domain (GEBCO terms), attribute GEBCO; service has no licence text |
| 2 | **GEBCO 2026 TID GeoTIFF tiles** on CEDA, read by byte range (row r at byte 139830 + r*21600; 21,600 cells per row). For per-place numbers and hover read-outs. | `https://dap.ceda.ac.uk/bodc/gebco/global/gebco_2026/type_identifier_grid/geotiff/gebco_2026_tid_n90.0_s0.0_w-90.0_e0.0_geotiff.tif` with `Range: bytes=139830-161429` (206, CORS `*`) | Public domain, attribute GEBCO |
| 3 | **GMRT WMS and GridServer**: real multibeam where it exists. | `https://www.gmrt.org/services/mapserver/wms_merc?service=WMS&version=1.3.0&request=GetMap&layers=topo&styles=&crs=EPSG:3857&bbox=-679048.9,4273136.5,-645653.0,4300621.4&width=256&height=256&format=image/png` | CC BY 4.0 |
| 4 | **EMODnet DTM tiles, source references and high-resolution outlines**: names the survey under any pixel. | `https://tiles.emodnet-bathymetry.eu/latest/mean_multicolour/web_mercator/10/495/402.png` and `https://ows.emodnet-bathymetry.eu/wms?service=WMS&version=1.3.0&request=GetMap&layers=emodnet:source_references&styles=&crs=EPSG:3857&bbox=-701312.8,4259420.0,-623389.1,4314390.0&width=256&height=256&format=image/png&transparent=true` | CC BY 4.0 (from catalogue) |
| 5 | **EMODnet Geology WMS**: submerged landscapes, palaeocoastlines, sea-level index points, tectonics, tsunami coasts. | `https://drive.emodnet-geology.eu/geoserver/ows?service=WMS&version=1.3.0&request=GetMap&layers=bgs:submerged_landscapes&styles=&crs=EPSG:3857&bbox=111319.5,6800125.5,556597.5,7558415.7&width=256&height=256&format=image/png&transparent=true` | Per layer, not read (share_ok false) |
| 6 | **EMODnet high-resolution grid list (WFS) and zips**: 1,617 survey grids, for example Santorini 58 m and Gulf of Cadiz 29 m. | `https://ows.emodnet-bathymetry.eu/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames=emodnet:hr_bathymetry_area&outputFormat=application/json&srsName=EPSG:4326` (18.6 MB); `https://downloads.emodnet-bathymetry.eu/high_resolution/269_SantoriniArea.emo.zip` (15.8 MB) | CC BY 4.0 (from catalogue) |
| 7 | **IGN PNOA historic air photos** (1956-57, 1973-86, 1981-86, 2004 to 2024), for Donana. | `https://www.ign.es/wms/pnoa-historico?service=WMS&version=1.3.0&request=GetMap&styles=&crs=EPSG:3857&width=256&height=256&format=image/jpeg&layers=AMS_1956-1957&bbox=-718010.7,4439106.8,-715784.3,4441894.9` | CC BY 4.0 scne.es (read in capabilities) |
| 8 | **IGN MDT05 raw heights, WCS** (5 m, lidar-derived), for flat marsh. | `https://servicios.idee.es/wcs-inspire/mdt?service=WCS&version=2.0.1&request=GetCoverage&coverageId=Elevacion25830_5&format=image/tiff&subset=x(190000,190500)&subset=y(4096000,4096500)` | CC BY 4.0 scne.es |
| 9 | **EarthByte 2020 sea-floor age grids**: 7.7 MB at 6 arc-minutes. Render once to a global picture; shows why a mid-ocean plateau is young crust. | `https://www.earthbyte.org/webdav/ftp/earthbyte/agegrid/2020/Grids/age.2020.1.GTS2012.6m.nc` | CC BY 4.0 (LICENSE.txt read) |
| 10 | **Bedmap3** (bed under the Antarctic ice, 500 m, 2.07 GB in 6 files): render to tiles. | `https://doi.org/10.5285/2d0e4791-8e20-46a3-80e4-f5f6716025d2` (302 to the BAS record) | CC BY 4.0 (DataCite and BAS record read) |

Also useful and tested: the NOAA trackline query, which lists every archived survey over a box (`https://gis.ngdc.noaa.gov/arcgis/rest/services/web_mercator/trackline_combined_dynamic/MapServer/export?bbox=-701312.8,4259420.0,-623389.1,4314390.0&bboxSR=3857&imageSR=3857&size=256,256&layers=show:1&format=png32&transparent=true&f=image` draws it; the `/1/query` endpoint returns survey id, ship and year with CORS `*`), and `GlobSed` v3 sediment thickness (Caltech copy, public domain, 64.6 MB).

## Measured or guessed

GEBCO_2026 TID counts per box. 'Measured' means TID 10 to 17. Land cells are left out. A 'measured' cell can come from a gridded regional compilation, so it is not a count of single soundings.

- **Spartel Bank** (13,622 sea cells): 99.6% measured, 0.3% predicted from satellite gravity, 0.0% interpolated or mixed. Sounded: multibeam and mixed direct methods.
- **Gulf of Cadiz and the Cadiz shelf** (309,441 sea cells): 94.1% measured, 5.7% predicted from satellite gravity, 0.2% interpolated or mixed. Sounded.
- **Santorini caldera and surroundings** (7,641 sea cells): 90.1% measured, 9.4% predicted from satellite gravity, 0.5% interpolated or mixed. Sounded.
- **Kolumbo volcano** (1,681 sea cells): 88.3% measured, 10.4% predicted from satellite gravity, 1.3% interpolated or mixed. Sounded.
- **Azores Plateau** (1,396,920 sea cells): 78.6% measured, 20.3% predicted from satellite gravity, 1.0% interpolated or mixed. Mostly sounded along ship tracks; a fifth is guessed between them.
- **Madeira** (73,415 sea cells): 99.3% measured, 0.6% predicted from satellite gravity, 0.1% interpolated or mixed. Sounded.
- **Canary Islands** (537,467 sea cells): 93.2% measured, 6.7% predicted from satellite gravity, 0.1% interpolated or mixed. Sounded.
- **Great Meteor Seamount** (432,000 sea cells): 72.5% measured, 26.9% predicted from satellite gravity, 0.6% interpolated or mixed. About a quarter guessed from gravity.
- **Bimini and the north-west Great Bahama Bank** (17,227 sea cells): 63.6% measured, 25.4% predicted from satellite gravity, 11.1% interpolated or mixed. About two thirds measured, and 48% of all sea cells are optical-sensor depths (TID 16), not ship soundings.
- **Search area off western Cuba (box is a guess)** (29,480 sea cells): 56.5% measured, 40.8% predicted from satellite gravity, 2.8% interpolated or mixed. Over 40% guessed from gravity.
- **Cyprus and the Levantine basin box** (323,226 sea cells): 92.7% measured, 6.7% predicted from satellite gravity, 0.6% interpolated or mixed. Sounded.
- **Eratosthenes Seamount sub-box** (57,600 sea cells): 100.0% measured, 0.0% predicted from satellite gravity, 0.0% interpolated or mixed. All cells flagged as direct (combination of methods).
- **Malta and the Sicily-Malta shelf** (21,371 sea cells): 66.2% measured, 32.6% predicted from satellite gravity, 1.2% interpolated or mixed. A third guessed.
- **Sardinia and its shelf** (128,454 sea cells): 87.0% measured, 10.4% predicted from satellite gravity, 2.5% interpolated or mixed. Mostly sounded.
- **North-western Black Sea shelf** (698,497 sea cells): 36.7% measured, 3.2% predicted from satellite gravity, 59.6% interpolated or mixed. Mostly computer interpolation. Not sounded to modern standard in this grid.
- **Sundaland (Java Sea and Sunda Shelf)** (3,350,778 sea cells): 12.9% measured, 86.0% predicted from satellite gravity, 1.1% interpolated or mixed. Mostly guessed from satellite gravity.
- **Celtic Shelf** (1,366,257 sea cells): 96.4% measured, 3.2% predicted from satellite gravity, 0.4% interpolated or mixed. Sounded.
- **Doggerland and the southern North Sea** (1,195,525 sea cells): 90.0% measured, 7.9% predicted from satellite gravity, 2.2% interpolated or mixed. About 90% measured, a tenth guessed.
- **Heligoland and the German Bight box** (28,398 sea cells): 100.0% measured, 0.0% predicted from satellite gravity, 0.0% interpolated or mixed. Measured, almost all (98.4%) single-beam, 1.6% multibeam.

World: of ocean cells in a 400-row sample, 29.8% measured, 55.0% gravity-predicted, 10.4% other indirect, 4.8% unknown or pre-generated.

Inland places (Donana marsh, Richat, Souss-Massa, the Tunisian chotts, Pampa Aullagas, Antarctica) have no TID; their entries list terrain, imagery, geology and, for Donana and Antarctica, specific downloads.

## Place by place, in one line each

- **Spartel Bank**: GMRT, EMODnet 29 m CSIC-ICM grid, SWIM compilation (19 multibeam surveys, supplementary xyz at 250 m), EMODnet Geology faults and tsunami coasts. Studies: Collina-Girard, Gutscher 2005, Zitellini 2009.
- **Gulf of Cadiz and Gorringe Bank**: same, plus Portuguese IHPT, IGME and CSIC grids. GMRT's shallowest cell at Gorringe is 41 m.
- **Donana**: PNOA historic photos and MDT05 WCS; REDIAM 2 m model (2014-15, CC BY) and 1.5 points per m2 cloud (2020-21). No Hinojos or core data found.
- **Santorini and Kolumbo**: EMODnet 58 m HCMR grid; Nomikou 2016 grids on request (5 and 10 m).
- **Azores, Madeira, Canaries, Great Meteor**: GMRT, NOAA multibeam mosaic over the Terceira rift, IHPT 29 m grids around the islands, PNOA lidar at Tenerife. EMODnet's source map returned no feature at the two open-plateau points I queried.
- **Richat**: terrain, imagery and Macrostrat tiles tested. Terrain Tiles read 446 m at the centre; the first sea cell westward is about 560 km away. Matton et al. 2005 call it a Cretaceous alkaline complex. No open lidar or large-scale map found.
- **Bimini and Cuba**: GMRT and TID only; the road is far below any pixel. The Miami 1979 dates were not readable.
- **Cyprus basin, Malta, Sardinia, Black Sea, Celtic Shelf, Doggerland, Heligoland**: EMODnet tiles, high-resolution grids and, for the North Sea and Celtic Sea, EMODnet Geology layers of submerged landscapes, palaeocoastlines and sea-level index points. Fitch et al. 2005: the Dogger Bank was submerged about 7,500 years ago.
- **Sundaland**: GMRT is flat and coarse; TID says why. Sathiamurthy and Voris 2006 used a 2 arc-minute grid.
- **Altiplano and Souss-Massa, chotts**: terrain, imagery and Macrostrat only. Terrain Tiles read 3,729 m at Pampa Aullagas and 14 and 24 m at the two chotts I sampled.
- **Antarctica**: Bedmap3 (CC BY 4.0) and GEBCO's sub-ice grid; nothing is a map layer yet.

## What I could not verify

The full list is in `not_verified` in the JSON (21 items). The ones that most affect what to build:

- GEBCO's WMS may recover; retest before using the NOAA picture permanently.
- NOAA NCEI service metadata carries no licence text, so those entries stay `share_ok: false`.
- EMODnet Geology per-layer licences, and the EMODnet terms page (403 to scripts), were not read.
- Papers that were paywalled or blocked to scripts (Gutscher 2005, Collina-Girard 2001, Matton and Jebrak 2014, the Miami radiocarbon list, Nomikou 2012, the SWIM supplementary file) are cited from abstracts, titles or search summaries, and each says so.
- No Hinojos project data, no Doñana cores, no Akrotiri plans, no Cuban coordinates, no Sarmast replies.
- The global 'share measured' is a 400-row sample.

Handoffs to other lanes are in `handoffs`: Gorringe and Hinojos to `hypotheses`, the 'Atlantis Found' documentary survey and the Bimini and Cuba chains to `searches`, regional drowning dates to `world-9600bce`.

## How the checks were done

Every request carried `Origin: null` and a descriptive User-Agent, a few per second at most. `browser.ok` is true only for HTTP 200, an `access-control-allow-origin` of `*` or `null`, and a decoded picture with more than one colour and some opaque pixels. TID counts come from byte-range reads of the CEDA GeoTIFFs. The scratch folder with raw counts and test logs is in the session, not here.
