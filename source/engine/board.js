// The state of the case at a glance: the counts, every search in date order with how it ended, and each proposed place
// against what Plato wrote. Everything here is drawn from data/case.json and the Atlantis entry of data/legends.json.
import { STANDING } from './data.js';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// A place's name without its bracketed gloss, for tight rows.
export const shortName = (name) => name.replace(/\s*\(.*?\)/g, '').replace(/,.*$/, '').trim();

// How a search ended. Colour never stands alone: each has its own sign and its words.
export const OUTCOME = {
  confirmed: { label: 'Tested, and the result stands', short: 'Result stands', tone: 'good', d: 'M4.2 7.4l2 2 3.8-4.6' },
  refuted: { label: 'The claim was shown wrong', short: 'Shown wrong', tone: 'bad', d: 'M4.5 4.5l5 5M9.5 4.5l-5 5' },
  corrected: { label: 'The claim was corrected', short: 'Corrected', tone: 'warn', d: 'M4 8.4c1-2.6 2-2.6 3 0s2 2.6 3 0' },
  unresolved: { label: 'Still open', short: 'Still open', tone: 'info', d: 'M5.2 5.6a1.9 1.9 0 1 1 2.6 1.7c-.6.3-.8.6-.8 1.2M7 10.4v.1' },
  'never-tested': { label: 'Never tested', short: 'Never tested', tone: 'mut', d: '' },
  'no-claim': { label: 'Made no claim about Atlantis', short: 'No claim', tone: 'mut', d: 'M4.5 7h5' },
};
export const glyph = (status) => {
  const o = OUTCOME[status] ?? OUTCOME['never-tested'];
  return `<svg class="g g-${o.tone}${o.d ? '' : ' hollow'}" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6"/>${o.d ? `<path d="${o.d}"/>` : ''}</svg>`;
};
export const mark = (kind) => (kind === 'fit' ? '<svg class="m m-fit" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/></svg>'
  : kind === 'brk' ? '<svg class="m m-brk" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>'
    : '<svg class="m m-both" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>');

// The numbers on the front page. Counted here, from the data, so they are never typed by hand.
export const caseStats = (atlantis, cas) => {
  const places = atlantis.places, used = new Map();
  for (const p of places) for (const id of [...(p.fits ?? []), ...(p.conflicts ?? [])]) used.set(id, (used.get(id) ?? 0) + 1);
  const checkable = cas.claims.filter((c) => c.testable);
  return {
    places: places.length,
    found: places.filter((p) => p.standing === 'confirmed' || p.standing === 'mainstream').length,
    checked: places.filter((p) => (p.tests ?? []).length).length,
    checkable: checkable.length,
    unmeasured: checkable.filter((c) => !used.has(c.id)),
    used,
    searches: cas.searches.length,
    open: cas.searches.filter((s) => s.status === 'unresolved').length,
    first: cas.searches[0]?.year, last: cas.searches.at(-1)?.year,
  };
};

export const tilesHtml = (s) => [
  [s.places, 'places proposed'],
  [s.found, "where Plato's city has been found"],
  [s.places - s.checked, 'never checked on the ground'],
  [`${s.unmeasured.length} of ${s.checkable}`, "of Plato's checkable details never measured anywhere"],
].map(([v, l]) => `<div class="tile"><b>${v}</b><span>${esc(l)}</span></div>`).join('');

export const timelineHtml = (cas, on) => `<ol class="tl">${cas.searches.map((s) => `<li><button class="tl-b${s.id === on ? ' on' : ''}" data-search="${esc(s.id)}" aria-label="${s.year}: ${esc(s.title)}. ${esc(OUTCOME[s.status]?.label ?? '')}">${glyph(s.status)}<span>${s.year}</span></button></li>`).join('')}</ol>`;
export const timelineKey = (cas) => `<div class="key">${Object.entries(OUTCOME).map(([k, o]) => `<span>${glyph(k)}<b>${cas.searches.filter((s) => s.status === k).length}</b> ${esc(o.short.toLowerCase())}</span>`).join('')}</div>`;

export const searchCard = (s, placeName) => `
  <div class="pop-h">${glyph(s.status)}<b>${s.year} · ${esc(s.title)}</b></div>
  <div class="pop-s">${esc(OUTCOME[s.status]?.label ?? '')}${s.who ? ` · ${esc(s.who)}` : ''}</div>
  ${s.announced ? `<p><em>Said:</em> ${esc(s.announced)}</p>` : ''}
  <p><em>How it ended:</em> ${esc(s.outcome)}</p>
  <div class="row">${s.place ? `<button class="btn primary" data-go="${esc(s.place)}">Go to ${esc(placeName ?? 'the place')}</button>` : ''}${/^https?:/.test(s.source ?? '') ? `<a class="btn" href="${esc(s.source)}" target="_blank" rel="noopener">Source</a>` : ''}</div>`;

// Each place against what Plato wrote. Columns: every detail somebody has held against a place, most used first, then
// the checkable details nobody has measured anywhere.
export const boardHtml = (atlantis, cas, stats, scenes) => {
  const byId = Object.fromEntries(cas.claims.map((c) => [c.id, c]));
  const cols = [...stats.used.keys()].filter((id) => byId[id]).sort((a, b) => stats.used.get(b) - stats.used.get(a));
  const blank = stats.unmeasured.map((c) => c.id);
  const rows = [...atlantis.places].sort((a, b) => (b.tests ?? []).length - (a.tests ?? []).length || ((b.fits ?? []).length + (b.conflicts ?? []).length) - ((a.fits ?? []).length + (a.conflicts ?? []).length) || a.name.localeCompare(b.name));
  const head = (id, dim) => `<th class="col${dim ? ' dim' : ''}"><button data-claim="${esc(id)}"><span>${esc(byId[id].short)}</span></button></th>`;
  const cell = (p, id) => {
    const f = (p.fits ?? []).includes(id), b = (p.conflicts ?? []).includes(id);
    if (!f && !b) return '<td class="c"></td>';
    const kind = f && b ? 'both' : f ? 'fit' : 'brk';
    return `<td class="c"><button data-cell="${esc(p.id)}|${esc(id)}|${kind}" aria-label="${esc(p.name)}: ${kind === 'fit' ? 'said to fit' : kind === 'brk' ? 'breaks' : 'argued both ways'} ${esc(byId[id].short)}">${mark(kind)}</button></td>`;
  };
  const body = rows.map((p) => {
    const n = (p.tests ?? []).length;
    return `<tr><th scope="row"><button data-go="${esc(p.id)}">${esc(shortName(p.name))}${scenes.has(p.id) ? '<i class="has-scene"></i>' : ''}</button></th>${cols.map((id) => cell(p, id)).join('')}${blank.map(() => '<td class="c dim"></td>').join('')}<td class="n">${n ? `<b>${n}</b>` : '<span>0</span>'}</td><td class="v"><i class="sdot p-${esc(p.standing)}"></i>${esc(STANDING[p.standing] ?? p.standing)}</td></tr>`;
  }).join('');
  return `
    <div class="tiles">${tilesHtml(stats)}</div>
    <h3>${stats.searches} searches, ${stats.first} to ${stats.last}</h3>
    
    <div class="tl-wrap">${timelineHtml(cas)}</div>
    ${timelineKey(cas)}
    <h3>Each place against what Plato wrote</h3>
    
    <div class="grid-wrap"><table class="grid">
      <thead><tr><th></th>${cols.map((id) => head(id, false)).join('')}${blank.map((id) => head(id, true)).join('')}<th class="flat">Field<br>checks</th><th class="flat l">Standing</th></tr></thead>
      <tbody>${body}</tbody>
    </table></div>
    <div class="key"><span>${mark('fit')}said to fit</span><span>${mark('brk')}breaks</span><span>${mark('both')}argued both ways</span><span><i class="has-scene"></i>has a scene to explore</span><span class="dimkey">shaded columns: never measured anywhere</span></div>
    `;
};

export const claimCard = (c, n) => `
  <div class="pop-h"><b>${esc(c.short)}</b></div>
  <div class="pop-s">${esc(c.ref)}${c.testable ? '' : ' · not something the ground can test'}</div>
  <p>${esc(c.label)}</p>
  ${c.quote ? `<p class="quote">“${esc(c.quote)}”</p>` : ''}
  ${c.testable && c.how_to_test ? `<p><em>How to check it:</em> ${esc(c.how_to_test)}</p>` : ''}
  <p class="pop-s">${n ? `Held against ${n} place${n === 1 ? '' : 's'}.` : 'Not held against any place yet.'}</p>`;
