// The story, sentence by sentence, as it is shown and spoken. It is told as a story: Plato's own words where he has
// them (each quotation is checked against the quotations kept in the research data by build/make-audio.mjs --check),
// and every number taken from the data at the moment of telling, never typed in. It lives in one place because two
// things need it word for word: the page, which shows it, and build/make-audio.mjs, which has it spoken.
// Each line: { id, say, tone?, least?, best? }. `least` is the shortest time, in milliseconds, the line stays up.

export const shortPlace = (name) => (name ?? '').split(',')[0].trim();

// A key for a sentence, so a recording can be matched to the exact words it speaks.
export const lineKey = (text) => { let h = 2166136261; for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16).padStart(8, '0'); };

// The quotations in a line: the words between “ and ”.
export const quotesIn = (text) => [...text.matchAll(/“([^”]+)”/g)].map((m) => m[1]);

// worldfit: data/worldfit.json or null. cas: data/case.json or null (the searches on record).
export const storyLines = ({ worldfit, cas }) => {
  const lines = [], wf = worldfit, searches = cas?.searches ?? [];
  lines.push({ id: 'tale', say: 'It begins with Plato, who has it told as “a tale which, though strange, is certainly true”.', least: 6000 });
  lines.push({ id: 'island', say: 'Beyond the Pillars of Heracles, out in the Atlantic, lay an island “larger than Libya and Asia put together”.', least: 6500 });
  lines.push({ id: 'city', say: 'At its heart stood a city of rings: sea, then land, then sea again. A temple coated with silver. A wall that “sparkled like fire”.', least: 8000 });
  lines.push({ id: 'fall', say: 'Then, “in a single day and night of misfortune”, Atlantis “disappeared in the depths of the sea”.', least: 7000 });
  lines.push({ id: 'date', say: 'Plato sets this nine thousand years before Solon: about 9600 BCE. That part can be checked.', least: 6000 });
  if (wf) {
    const best = wf.best.find((b) => !b.near_old_ice) ?? wf.best[0];
    lines.push({ id: 'sank', say: `The sea stood about 50 m lower then. Since that date, ${(wf.totals.land_that_sank_km2 / 1e6).toFixed(1)} million km² of land have gone under. All of it is glowing now.`, least: 8000 });
    const where = best?.near?.name ? (/^off /.test(best.near.name) ? ` The closest, ${best.near.name},` : ` The closest, the ${shortPlace(best.near.name)},`) : ' The closest';
    if (best) lines.push({ id: 'scored', say: `We tested every 10 km of it against his words. Nothing on Earth scores 5 of 5.${where} scores ${best.top}: a match in the landscape, not a city.`, least: 9000, best });
  }
  if (searches.length) {
    const n = (status) => searches.filter((x) => x.status === status).length, first = Math.min(...searches.map((x) => x.year));
    lines.push({ id: 'search', say: `People have gone looking since ${first}. Of ${searches.length} searches on record, ${n('refuted')} were shown wrong, ${n('corrected')} were corrected, and ${n('unresolved')} are still open. Not one has found the city.`, least: 9000 });
  }
  lines.push({ id: 'built', say: 'So we built his city as he wrote it, each part tied to a line of his text.', least: 5500 });
  lines.push({ id: 'hall', say: 'At its centre he put a shrine, “reserved as holy ground, and encircled with a wall of gold”. We opened it. Inside is everything found so far, and everything still unknown.', least: 9500 });
  lines.push({ id: 'turn', say: 'Walk in. The search is yours now.', least: 4000 });
  return lines;
};
