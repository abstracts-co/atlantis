# Atlantis library: notes

Built 2026-11-11. Everything is in `/Users/home/abstracts-drafts/lost/library/`. Run `node check-library.mjs` to validate it.

## What is here

| path | what |
| --- | --- |
| `out/catalog.json` | 144 works, one entry each, indexed or not |
| `out/indexes/<id>/` | 31 PageIndex-format trees (`index.json`) with 324 leaf text files (`text/<node_id>.md`) |
| `out/pageindex/` | the PageIndex local store for the 8 works I ran through PageIndex (Donnelly and seven papers). Open it with `PageIndexClient(index={"storage_path": "pageindex"})` (tested: `list_documents()` returns the 8 documents) |
| `check-library.mjs` | the checker (Node 20+, no dependencies) |
| `build/` | the scripts that made everything, so it can be rebuilt (see "Rebuilding") |
| `work/` | downloads, the Python environment, caches. Not part of the output. The checker reads it to verify SHA-256 values |

Catalogued by kind: ancient-text 20, book 37, paper 60, report 14, film 6, web 7.
Indexed by kind: ancient-text 20, book 4, paper 7.

### Indexed

- **Plato** (six indexes): Critias (whole) and Timaeus 17a-27b, each in Bury's English (1929), Burnet's Greek (1905) and Jowett's English (1892). Leaves are groups of Stephanus sections chosen by subject, e.g. "Critias 115c-115e: the bridges, the canal from the sea and the widths of the rings". Every title carries the reference; the Bury and Greek texts open with the first Stephanus marker, and markers sit inline (`[115d]`). Bury's footnotes are kept at the end of each leaf. Jowett's intro passages about Atlantis are included as separate leaves.
- **Ancient writers**: Strabo 2.3.6, 8.7.2 and 13.1.36 (Jones); Plutarch, Solon 26, 31, 32 (Perrin); Diodorus 3.53-3.61 (Oldfather); Herodotus 1.202-203 and 4.184-185 (Godley); Thucydides 3.89 (Crawley); Pausanias 7.24 (Shilleto); Ammianus 17.7.12-14 (Yonge); Pliny, Natural History 2.204-206 (Latin, Mayhoff; older numbering 2.90-92); Aelian, Various History 3.18 (Stanley 1665, the Theopompus story); Philo, On the Incorruptibility of the World (Yonge); Proclus, Commentary on the Timaeus, six Atlantis passages (Taylor 1820); Cosmas Indicopleustes, Christian Topography 12 (McCrindle). The extra Strabo, Herodotus and Aelian items come from the plato lane's `ancient_reception` list.
- **Older books**: Donnelly 1882 (PageIndex Flash, 504 pdf pages, 48 leaves under the book's five parts); Bacon, New Atlantis; Scott-Elliot, The Story of Atlantis; Spence, The Problem of Atlantis.
- **Papers**: seven CC BY papers cited by the lanes (Frisch 2012, Sereno 2008, Snir 2015, Dillehay 2015, Moore 2020, Hoffmann 2021, Pritchard 2025 = Bedmap3). The first is the only one that is directly about an Atlantis claim (the Doñana "circles" are research ponds). The others come from the world-9600bce and site-data lanes.

Trees built by hand state so in `tool.name` ("hand-built (PageIndex format)"); the eight PageIndex ones say "PageIndex".

## Did PageIndex run through Claude Code?

Yes, with `claude-code/haiku` in Flash mode (pageindex 0.5.3, claude-agent-sdk 0.2.180; the first run needed `pip install 'pageindex[claude]'`). It worked on Donnelly's 504-page scan (290 seconds, about 685,000 prompt tokens and 42,000 completion tokens) and on all seven papers (18 to 36 seconds each). It failed on one document:

- **Scott-Elliot's DLI scan (82 pages)**: `PageIndex Flash found no layout structure in this document (82 pages); try mode='standard'`. Standard mode refuses `claude-code/` models (`claude-code/ models index in flash mode only; standard mode needs an API model`). I built that tree by hand from the book's own subheadings and indexed the Gutenberg text instead.

What PageIndex got wrong, and what I did about it:

- Donnelly: titles were mostly OCR running heads ("ATLANTIS: THE ANTEDILUVIAN WORLD.") and the Book/Part structure was lost. I rebuilt the nesting from the book's own contents (five parts, chapters), found each chapter's start page by matching its title in the text layer, split chapters over 16 pages in two, and wrote every title and summary myself after reading the start of each leaf.
- Papers: its section structure was good. Its summaries gave numbers that contradicted each other (48 against 96 ponds in one paper), so I replaced them with short summaries of what each section covers, and kept the section tree and page ranges.

No OCR was done: `tesseract` is not installed on this machine. Every scan I used already had a text layer (Internet Archive OCR). Those texts carry OCR errors, and each such leaf says so in its first lines.

## Walk tests

I checked every index I made against questions an agent would ask, using only titles and summaries to pick the leaf, then checking the answer is in the leaf's text (`python3 build/walk_test.py`). Thirty-one questions, for example:

- "What width does Plato give for the outermost ring of water?" goes to Critias 115c-115e (three stades).
- "What does Strabo say Posidonius thought?" goes to Strabo 2.3.6.
- "Where does Donnelly argue for the Azores?" goes to Part I, Ch. V, "The testimony of the sea ... and the Azores plateau".

The first pass flagged four. One was a real fault, fixed: the Scott-Elliot "Education" summary did not say "educated". The other three were my test's own answer strings or leaf keys (a guessed Greek word, a guessed English word, and a key that matched the wrong Bacon leaf). This is a keyword ranking, not an agent run; it shows the titles and summaries are findable, not that every question lands.

## Licence decisions

The rule I followed: index only public domain, CC0, CC BY or free government works; catalogue everything else. A translation is a separate work from its original. For papers I took Unpaywall's answer as a lead, then looked for the licence on the paper's own page and in its PDF.

| work | decision | how |
| --- | --- | --- |
| Plato in Bury (1929) and Burnet's Greek (1905), taken from Perseus | indexed, **least sure** | Both texts are public domain by date (Bury died 1951, Burnet 1928, and a 1929 book entered the US public domain in 2025). Perseus labels its repository CC BY-SA 4.0, and the plato lane read CC BY-SA 3.0 US on the Perseus page. I read that as covering Perseus's encoding and compilation, so I took only plain text with the Stephanus numbers and none of the XML or added markup. If the owner reads the host's label as binding on the transcription, drop the four Perseus indexes and keep Jowett. The catalog says the same under `licence.how_decided` |
| Jowett (1871, third edition 1892) | indexed | He died in 1893. Project Gutenberg text, trademark notice removed. Gutenberg prints no Stephanus numbers, so each Jowett leaf's range was matched by content against Bury (a bag-of-words alignment, then checked by eye); edges can be a sentence or two out, and each such leaf says so |
| LacusCurtius Loeb texts (Strabo 1917/1927/1929, Plutarch 1914, Herodotus 1920/1921, Pliny's Latin 1906) | indexed | The host states "The text is in the public domain" on the page and its copyright page says a URL with one asterisk is public domain. I dropped Thayer's footnotes, captions and cross-references because those are his |
| Diodorus 3.53-3.61, Oldfather, Loeb 1935 | indexed, **second least sure** | The host says public domain, but a 1935 US book can still be in copyright if the renewal was filed. I did not search the Copyright Office renewal records. UK status is clear (Oldfather died 1945) |
| Crawley (1874), Shilleto (1886), Yonge (1862, 1855), Taylor (1820), McCrindle (1897), Stanley (1665), Bacon (1627) | indexed | Translators died long ago and the books are old. Gutenberg or Internet Archive scans |
| Donnelly 1882 | indexed | He died 1901; the Internet Archive marks the scan "not in copyright" |
| Scott-Elliot | indexed | He died 1930. The Gutenberg file is the Theosophical Publishing House printing ("first printed 1896"); I cannot name the exact printing |
| Spence, The Problem of Atlantis | indexed | He died on 3 March 1955, so UK copyright ended on 31 December 2025; first published 1924 and second edition 1925, so US copyright has expired. The Internet Archive item is a user upload with no edition data; its title page says the Brentano's revised edition, February 1925 |
| Seven CC BY papers | indexed | CC BY statement found in each PDF (and on the journal page for the Nature ones). The PLoS PDFs of 2008, 2012 and 2015 say "Creative Commons Attribution License" without a version, so the licence URL I recorded for the 2008 and 2012 ones (2.5 and 3.0) is a guess at the version in force then |
| Ickerodt 2025 (Helgoland) | catalogued only | Unpaywall says CC BY at the publisher, but Nomos returned 403 to my script for both page and PDF, so I could not confirm it |
| Collina-Girard 2002 (Préhistoires méditerranéennes) | catalogued only | The page links CC BY 4.0, but OpenEdition serves the PDF only after a browser bot-check. I did not try to get round it |
| PNAS papers (Lambeck 2014 and others), Kolumbo, Russo 2013, Sunda maps, Hughes 2015 | catalogued only | Free to read at best; I found no Creative Commons statement. "Open" is not a licence |
| Dalton 2020, EPICA 2004 | catalogued only | The only open copies are CC BY-NC-ND repository copies |
| Perseus Greek and English "perseus-eng2" credit | note | The Perseus page credits "W.R.M. Lamb, 1925", but the TEI file header says R. G. Bury (Loeb vol. 9, 1929), and library records agree with Bury. I treated it as a slip on the page, like the plato lane |

## What I could not get, and why

- **Pliny in English.** The Bostock and Riley (1855) OCR on the Internet Archive is too noisy to index honestly ("Ambr;iri;m cult'"). I shelved the Latin only. The older chapter numbers 2.90-2.92 are the same text as Mayhoff 2.204-2.206. Pliny 6.36 (the Atlantic islands) is not shelved; the LacusCurtius Book 6 page is not split by chapter.
- **Thucydides chapter numbers.** The Gutenberg text has none; the leaf says it is 3.89 because of its content.
- **Frost 1913, "The Critias and Minoan Crete" (JHS 33).** Probably public domain in the US by date, but I could not confirm the author's death date and fetched no scan, so it is catalogued only.
- **Schuchert 1917 (PNAS).** Public domain by date in the US, but the PMC PDF is bot-gated. Catalogued only.
- **Warren 1885, Le Plongeon 1896, Bory 1803, Bailly 1779, Berlioux 1874, Rudbeck 1679.** All public domain by date; no scan fetched. Le Plongeon's Internet Archive copy is a lending-library scan.
- **The Perseus fields I dropped.** Editorial deletions and gaps in the Greek are not in the text; Perseus's English has no footnotes other than Bury's, which I kept.
- **OCR works** (Aelian, Philo, Proclus, Cosmas, Spence, Donnelly): I corrected obvious misreadings in short passages, but errors remain. Check against the scan before quoting.
- **Datasets** (NGRIP, DATED-1, PaleoMIST, NADI-1, GlobSed, Bedmap3 grids, GEBCO sub-ice): catalogued as `report`, not indexed, since there is no text to tree. They belong to the globe's data loader.
- **Books that the lanes saw only through a review, Wikipedia or Atlantipedia** are catalogued with that said in `notes`. I did not fetch the books.

## The ten most important works that are not open

1. Gill, *Plato's Atlantis Story: Text, Translation and Commentary* (Liverpool UP 2017). Copyright. The standard commentary.
2. Vidal-Naquet, "Athènes et l'Atlantide" (1964) and *L'Atlantide: petite histoire d'un mythe platonicien* (2005). Copyright. The case for the story as a structure.
3. Nesselrath, *Platon und die Erfindung von Atlantis* (2002). The only copy is a PDF on atlantis-scout.de with no licence.
4. Gutscher 2005, Geology 33, on Spartel Bank. Paywalled.
5. Collina-Girard 2001 (CRAS, closed) and 2002 (CC BY but bot-gated). The Spartel Bank proposal itself.
6. Zangger 1993, Oxford Journal of Archaeology. Paywalled; the only free copy is on a third-party site.
7. Marinatos 1939, Antiquity. Closed. The paper that began the Santorini reading.
8. Cameron 1983, "Crantor and Posidonius on Atlantis", Classical Quarterly. Closed. The paper that removes the ancient supports for belief.
9. Friedrich 2006 and Manning 2006 (Science). Closed. They date the Thera eruption.
10. Lambeck 2014 (PNAS). Free to read, no licence. It supplies the sea-level curve the globe's slider depends on.

## Things worth a second look

- The Jowett Stephanus ranges are approximate at the edges (see above). The Bury and Greek ranges are exact.
- The catalog `what` lines for books and press items come from the lane notes, not from the works. Where a lane read only a review or an abstract, the entry says so.
- `quality` for conference reports and the Hinojos Project is "press" because peer review is not confirmed. Scott-Elliot is "self-published" because his claims rest on a society's own clairvoyant reports.
- Three entries rest on years I could not verify: `natawidjaja-plato-never-lied` and `dos-santos-atlantis-the-lost-continent-finally-found` have year null; `schulten-1922-tartessos` says 1922 as given by Wikipedia.
- The lanes grew while I worked. I read `plato`, `hypotheses`, `searches`, `world-9600bce` and `site-data` last at 14:52 on 11 November (all five existed; the newest file, `site-data.json`, was last written at 14:25). A later edit needs a re-run of `build/oa.py`, then `build/catalog_papers.py` and `build/catalog_more.py` need new rows for any new DOI or book.

## Rebuilding

From `library/`:

```sh
python3 -I build/build_plato.py        # six Plato indexes from work/plato (Perseus XML, Gutenberg)
python3 -I build/build_ancient.py      # the ancient writers (work/lc, work/pg, work/ia)
python3 -I build/build_books.py        # Bacon, Scott-Elliot, Spence
python3 -I build/build_donnelly.py     # Donnelly (needs the PageIndex store in out/pageindex)
work/venv/bin/python -I build/build_papers.py write   # the seven papers
python3 -I build/oa.py                 # Unpaywall and OpenAlex lookups (cached in work/oa-cache.json)
python3 -I build/build_catalog.py      # writes out/catalog.json
node check-library.mjs
```

PageIndex itself was run with `work/run_pageindex.py <pdf> flash` (batch: `work/run_batch.py`). The downloads and their SHA-256 values are in `work/`; each `index.json` names the exact file and hash.

## Cleanup

No processes left running (all PageIndex runs finished), no repositories created, nothing pushed or published. Everything is inside `library/`; I wrote nothing outside it.
