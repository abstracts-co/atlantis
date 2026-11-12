# Check a find

Most finds made from a desk turn out to be on record already: in a heritage register, in a published survey, or simply known to the people who live there. The data is usually real and the method is often sound. What gets skipped is the check, and the published literature holds far more than any register. This skill is that check, made hard to skip. Do the steps in order and report the result of each one, including the ones that go against the find.

## 1. Is it in the ground, or in the data?

- Find the same spot in a second, independent source: another year's picture, a different sensor, the raw heights instead of a ready-made relief. A real bank is there in all of them. A processing mark is in one.
- Measure it in pixels. Under five pixels across, its shape means nothing.
- See whether it lines up with the pixel grid, a tile edge, a flight line or a ship's track. If it does, it is almost certainly the survey.
- On the sea floor, away from the few strips surveyed by sonar, the depth is worked out from satellite gravity at 1 to 2 km a pixel. Nothing built by people can show at that scale. `data/sources.json` has trackline and coverage layers that show where real soundings exist.

## 2. Is it recent?

Compare with a current satellite picture and a current map (OpenStreetMap is in `data/sources.json`). Field boundaries, drains, roads, pipelines, quarries and plantations explain most straight lines. Then look at the `historic` group: old maps and 1960s satellite photographs show what was farmed, built and cleared in the last century.

## 3. Is it natural?

Say what the local geology and landforms are, and what they are known to produce: karst hills and sinkholes, dunes, old river channels, beach ridges, lava, jointed rock, glacial ground. Compare with the same landform a few kilometres away where nobody claims a site.

## 4. Is it already on record?

```sh
node tools/known.mjs --lat <lat> --lon <lon> --km 20
```

The globe has the same check behind its pin-and-tick button. It asks Wikidata and OpenStreetMap. Then go further, because those two hold a small part of what is recorded:

- The country's heritage register. `data/sources.json`, group `places`, lists the open ones and how to query them.
- Published surveys. Search for the district's name with "lidar", "survey" and "archaeological" in the language of the country. Read the paper, not the press release: the paper has the map.
- For the ancient Mediterranean and Near East, the Pleiades gazetteer. For wrecks, the national wreck databases listed under `places`.

An empty result means "not found in the open databases I asked". It does not mean unknown. Many countries keep site locations out of public view on purpose, and local people usually know the place.

## 5. Say how sure you are, in these words

- **A shape worth a look**: it survives step 1, and that is all you know.
- **Consistent with** a named kind of site: it also matches a confirmed example in the same data, and steps 2 and 3 don't explain it.
- **A recorded site**: step 4 found it. Say which record. This is a good result: you have shown the method works.
- **Possibly unrecorded**: it passes all four steps. That is the most anyone can say from a desk. "Discovered", "found" and "new" wait for a specialist.

## 6. If it may be unrecorded

- **Tell the people whose job it is.** Every country has a heritage agency, such as INAH in Mexico, Historic England, or a State Historic Preservation Office in the United States. Send them the pictures, the data source and the coordinates, and say what you checked. A university department that works in the region is the other route.
- **Don't publish a way to find it.** In the post, name the district or the nearest town and leave the coordinates out. Looting follows publicity, and it destroys what makes a site worth finding.
- **Don't go and dig.** In most countries it is a crime to excavate, to use a metal detector on a site, or to take anything from a wreck, and the UNESCO conventions of 1970 and 2001 protect finds on land and under water. A photo from a public path is fine.

## 7. What the post should carry

The pictures. The source and pixel size of each. The result of every step above, in one line each, including "not checked" where that is true. Your wording from step 5. What would settle it. Post in `finds` if it reached "consistent with" or better, in `surveys` otherwise. The member reads and accepts it first.
