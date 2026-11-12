// The Atlantis side of the page: the board, the line of searches, each place as a scene with its research drawn on
// the ground, the fit test and the tour. ui.js owns the globe's general controls and hands this file what it needs.
import { DEG, clamp, formatLatLon, formatDistance } from './geo.js';
import { STANDING, ROLE } from './data.js';
import { caseStats, boardHtml, timelineHtml, searchCard, claimCard, glyph, mark, shortName } from './board.js';
import { TONES, anchorOf } from './evidence.js';
import { measureFit, compassWord, platoNumbers } from './fit.js';
import { loadPatch } from './patches.js';

const KIND_WORD = { 'survey-area': 'Survey', track: 'Track', core: 'Core', sample: 'Sample', dive: 'Dive', dig: 'Dig', structure: 'Claimed shape', outline: 'Outline', place: 'Place' };
const HOW_WORD = { 'from-dataset': 'Position from an open data record', 'stated-coordinates': 'Position printed in the source', 'digitised-from-figure': 'Position read off a map in the source', 'from-description': 'Position from a description only' };
const SIDE_WORD = { claimed: 'Claimed', checked: 'Checked', found: 'Found', context: 'Places' };
const ICON = {
  'survey-area': '<path d="M2.5 3.5h9v7h-9z" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>', track: '<path d="M2 11c3-1 2-6 5-6s2 4 5 3" fill="none" stroke="currentColor" stroke-dasharray="2.5 1.5"/>',
  core: '<path d="M5.2 2h3.600v10H5.200z" fill="currentColor" fill-opacity=".3" stroke="currentColor"/><path d="M5.200 5.300h3.600M5.200 8.600h3.600" stroke="currentColor"/>', sample: '<path d="M7 2l4 5-4 5-4-5z" fill="currentColor"/>',
  dive: '<circle cx="7" cy="7" r="4" fill="currentColor"/>', dig: '<path d="M3 3h8v8H3z" fill="currentColor"/>', structure: '<path d="M2 10l4-6 3 4 3-5" fill="none" stroke="currentColor" stroke-width="2"/>',
  outline: '<path d="M7 2.500c3 0 4.500 2 4.500 4.500S10 11.500 7 11.500 2.500 9.500 2.500 7 4 2.500 7 2.500z" fill="none" stroke="currentColor"/>', place: '<circle cx="7" cy="7" r="2.200" fill="currentColor"/>',
};
const icon = (kind) => `<svg class="ki" viewBox="0 0 14 14" aria-hidden="true">${ICON[kind] ?? ICON.place}</svg>`;

export const startAtlantis = (ctx) => {
  const { world, data, st, $, esc, link, metres, toast, setSheet, body, eyebrow, stage, pinsEl, project } = ctx;
  const { control, globe } = world, S = globe.shared, ev = world.evidence;
  const atlantis = data.legends.find((l) => l.id === 'atlantis'), cas = data.cas;
  if (!atlantis || !cas) return null;
  const scenes = new Map(data.evidence.map((e) => [e.place, e]));
  const placeById = new Map(atlantis.places.map((p) => [p.id, p]));
  const claim = Object.fromEntries(cas.claims.map((c) => [c.id, c]));
  const stats = caseStats(atlantis, cas), plato = platoNumbers(cas);
  const a = st.a = { view: 'list', scene: null, mode: 'all', step: -1, feature: null, search: null, sea: null, fit: null, tour: null, more: false };
  const sentence = (s) => { const m = /^(.{40,220}?[.!?])(\s|$)/.exec(s ?? ''); return m ? m[1] : (s ?? ''); };
  const km = (m) => (m >= 100000 ? `${Math.round(m / 1000).toLocaleString('en')} km` : m >= 10000 ? `${(m / 1000).toFixed(0)} km` : m >= 1000 ? `${(m / 1000).toFixed(1)} km` : `${Math.round(m)} m`);

  // ---------- the sea follows the scene ----------
  let seaAnim = null;
  const seaTo = (m, done) => {
    const from = S.uSea.value, t0 = performance.now(), ms = clamp(Math.abs(m - from) * 22, 500, 2600);
    cancelAnimationFrame(seaAnim);
    const tick = () => {
      const k = clamp((performance.now() - t0) / ms, 0, 1), e = k * k * (3 - 2 * k);
      ctx.setSea(from + (m - from) * e, false);
      if (k < 1) seaAnim = requestAnimationFrame(tick); else done?.();
    };
    tick();
  };
  const leaveSea = () => { if (a.sea && Math.abs(S.uSea.value - a.sea.to) < 0.6) seaTo(a.sea.from); a.sea = null; };

  // ---------- the list of places ----------
  const rowHtml = (p) => {
    const n = (p.tests ?? []).length;
    return `<button class="prow" data-act="a-place" data-id="${esc(p.id)}"><i class="sdot p-${esc(p.standing)}${n ? '' : ' hollow'}"></i><span class="pn">${esc(shortName(p.name))}${scenes.has(p.id) ? '<em class="sc">scene</em>' : ''}</span><small>${n ? `${n} check${n === 1 ? '' : 's'}` : 'never checked'}</small></button>`;
  };
  const drawList = () => {
    a.view = 'list';
    eyebrow.innerHTML = 'Atlantis <span class="tag s-legend">Legend</span>';
    const order = [...atlantis.places].sort((x, y) => Number(scenes.has(y.id)) - Number(scenes.has(x.id)) || (y.tests ?? []).length - (x.tests ?? []).length || x.name.localeCompare(y.name));
    body.innerHTML = `
      <h2>Where was Atlantis?</h2>
      <p class="lead">${esc(sentence(atlantis.summary))}</p>
      <div class="row" style="margin:0 0 4px"><button class="btn primary" data-act="a-board">Open the board</button><button class="btn" data-act="a-tour">Watch the story</button><button class="btn" data-act="share">Share</button></div>
      <h3>${scenes.size} places with a scene to explore</h3>
      ${order.filter((p) => scenes.has(p.id)).map(rowHtml).join('')}
      <h3>The other ${atlantis.places.length - scenes.size} proposals</h3>
      ${order.filter((p) => !scenes.has(p.id)).map(rowHtml).join('')}
      
      ${atlantis.origin?.url ? `<p class="note">Where the story comes from: ${link(atlantis.origin.url, atlantis.origin.text ?? 'source')}</p>` : ''}`;
  };

  // ---------- one place ----------
  const scoreHtml = (p) => {
    const d = cas.places[p.id] ?? { fits: {}, breaks: {} };
    const chip = (id, kind) => `<button class="sc-chip ${kind}" data-act="a-claim" data-id="${esc(id)}" data-place="${esc(p.id)}" data-kind="${kind}">${mark(kind)}${esc(claim[id]?.short ?? id)}</button>`;
    const f = (p.fits ?? []).filter((id) => claim[id]), b = (p.conflicts ?? []).filter((id) => claim[id]);
    const both = f.filter((id) => b.includes(id));
    const open = stats.checkable - new Set([...f, ...b].filter((id) => claim[id].testable)).size;
    if (!f.length && !b.length) return `<h3>Against Plato</h3><p class="note" style="margin-top:0">Nobody has held this place against any detail Plato gives. ${stats.checkable} could be checked.</p>`;
    return `<h3>Against Plato</h3><div class="score">${f.filter((id) => !both.includes(id)).map((id) => chip(id, 'fit')).join('')}${both.map((id) => chip(id, 'both')).join('')}${b.filter((id) => !both.includes(id)).map((id) => chip(id, 'brk')).join('')}</div>
      ${d.reason ? '' : ''}`;
  };
  const visibleFeatures = () => (a.scene ? ev.visible().filter((f) => f.side !== 'plato') : []);
  const featureCard = (f) => `
    <div class="fcard">
      <p>${esc(f.what)}</p>
      ${f.result ? `<p><b>${f.side === 'claimed' ? 'What a check showed' : 'Result'}:</b> ${esc(f.result)}</p>` : ''}
      ${(f.column ?? []).length ? `<div class="strata">${f.column.map((l) => `<div><i style="background:${ctx.strataColour(l.what)}"></i><span>${l.from_m}–${l.to_m} m · ${esc(l.what)}${l.age ? ` · ${esc(l.age)}` : ''}</span></div>`).join('')}</div>` : ''}
      ${f.evidence ? `<p class="quote">“${esc(f.evidence)}”</p>` : ''}
      <p class="note" style="margin:0">${esc(HOW_WORD[f.position?.how] ?? '')}${Number.isFinite(f.position?.error_m) ? `, give or take ${km(f.position.error_m)}` : ''}. ${link(f.source, 'Source')}${f.position?.source && f.position.source !== f.source ? ` · ${link(f.position.source, 'position')}` : ''}</p>
    </div>`;
  const featuresHtml = () => {
    const list = visibleFeatures();
    if (!list.length) return '<p class="note">Nothing in this view. Try <b>Both</b>.</p>';
    return ['claimed', 'checked', 'found', 'context'].map((side) => {
      const rows = list.filter((f) => f.side === side);
      return rows.length ? `<div class="fgroup s-${side}"><h4><i></i>${SIDE_WORD[side]} · ${rows.length}</h4>${rows.map((f) => `<button class="feat${f.id === a.feature ? ' on' : ''}" data-act="a-feature" data-id="${esc(f.id)}">${icon(f.kind)}<span>${esc(f.label)}</span><small>${esc([KIND_WORD[f.kind], f.year].filter(Boolean).join(' · '))}</small></button>${f.id === a.feature ? featureCard(f) : ''}`).join('')}</div>` : '';
    }).join('');
  };
  const lineHtml = () => {
    const sc = a.scene;
    if (a.step >= 0) { const s = sc.story[a.step]; return `<span class="tag s-${s.side === 'claimed' ? 'claimed' : s.side === 'checked' ? 'checked' : 'found'}">${a.step + 1} of ${sc.story.length} · ${esc(SIDE_WORD[s.side] ?? s.side)}</span> ${esc(s.line)}`; }
    const one = (k, word) => `<b class="w-${k}">${word}.</b> ${esc(sc[k].line)} <small>${esc([sc[k].who, sc[k].year].filter(Boolean).join(', '))} · ${link(sc[k].source, 'source')}</small>`;
    return a.mode === 'claimed' ? one('claimed', 'Claimed') : a.mode === 'found' ? one('found', 'Found') : `${one('claimed', 'Claimed')}<br>${one('found', 'Found')}`;
  };
  // The open surveys that show this place best, as the research names them: one press lays one over the ground.
  const layersHtml = (sc) => {
    const list = (sc.best_layers ?? []).map((id) => ctx.overlays.find((o) => o.id === id)).filter(Boolean).slice(0, 5);
    return list.length ? `<h3>Surveys that show this place</h3><div class="presets" style="margin-top:0">${list.map((o) => `<button class="chip${st.overlay?.id === o.id ? ' on' : ''}" data-act="a-layer" data-id="${esc(o.id)}">${esc(o.s.name.replace(/\s*\(.*?\)/g, ''))}</button>`).join('')}</div>` : '';
  };
  const sceneHtml = () => {
    const sc = a.scene;
    return `
      <div class="seg modes">${[['claimed', 'Claimed'], ['found', 'Found'], ['all', 'Both']].map(([v, t]) => `<button data-act="a-mode" data-v="${v}" class="${a.mode === v && a.step < 0 ? 'on' : ''} m-${v}">${t}</button>`).join('')}</div>
      <p class="lead" id="a-line">${lineHtml()}</p>
      ${sc.story.length ? `<div class="steps"><span>Walk through it</span>${sc.story.map((s, i) => `<button data-act="a-step" data-i="${i}" class="s-${esc(s.side)}${i === a.step ? ' on' : ''}" aria-label="Step ${i + 1}">${i + 1}</button>`).join('')}<button class="nx" data-act="a-next" aria-label="Next step">${a.step >= sc.story.length - 1 ? 'Start over' : a.step < 0 ? 'Start ›' : 'Next ›'}</button></div>` : ''}
      <div id="a-features">${featuresHtml()}</div>
      ${layersHtml(sc)}
      ${sc.measurements.length ? `<h3>Measured here</h3><div class="meas">${sc.measurements.slice(0, a.more ? 99 : 5).map((m) => `<div><span>${esc(m.what)}</span><b>${esc(typeof m.value === 'number' ? m.value.toLocaleString('en') : m.value)} ${esc(m.unit ?? '')}</b>${m.plato_value ? `<small>Plato: ${esc(m.plato_value)}</small>` : ''}<small>${link(m.source, 'source')}</small></div>`).join('')}</div>${sc.measurements.length > 5 && !a.more ? `<button class="linkish" data-act="a-more">All ${sc.measurements.length} measurements</button>` : ''}` : ''}`;
  };
  const fullCase = (p) => `
    <details class="full"><summary>Read the full case</summary>
      ${p.claim ? `<p>${esc(p.claim)}</p>` : ''}
      ${p.against ? `<p><b>Against:</b> ${esc(p.against)}</p>` : ''}
      ${p.proposed_by?.length ? `<p>Proposed by ${esc(p.proposed_by.slice(0, 4).map((x) => `${x.who}${x.year ? ` (${x.year})` : ''}`).join(', '))}.</p>` : ''}
      ${(p.tests ?? []).map((t) => `<p><b>Checked:</b> ${esc(t.what)}${t.who ? ` (${esc(t.who)}${t.year ? `, ${t.year}` : ''})` : ''}. ${esc(t.result)} ${t.url ? link(t.url, 'Source') : ''}</p>`).join('')}
      ${a.scene?.not_located?.length ? `<p><b>Could not be placed on the map:</b></p><ul>${a.scene.not_located.slice(0, 8).map((n) => `<li>${esc(n.what)}${n.why ? ` <span class="why">(${esc(n.why)})</span>` : ''}</li>`).join('')}</ul>` : ''}
      <p class="note">${formatLatLon(p.lat, p.lon, 3)}${p.precision_km ? `, give or take ${p.precision_km} km` : ''}${p.underwater ? ', under water' : ''}</p>
      ${(p.sources ?? []).map((s) => `<a class="src" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title ?? s.url)}</a>`).join('')}
    </details>`;
  const drawPlace = () => {
    const p = st.place, sc = a.scene, by = p.proposed_by?.[0], n = (p.tests ?? []).length;
    a.view = 'place';
    eyebrow.innerHTML = `${esc(ROLE[p.role] ?? 'Proposed')} <span class="tag t-${esc(p.standing)}">${esc(STANDING[p.standing] ?? p.standing)}</span>`;
    const top = body.scrollTop;
    body.innerHTML = `
      <button class="back" data-act="a-list">‹ All ${atlantis.places.length} places</button>
      <h2>${esc(p.name)}</h2>
      <div class="when">${by ? `Proposed by ${esc(by.who)}${by.year ? `, ${by.year}` : ''}` : ''}${p.event_date ? `${by ? ' · ' : ''}needs ${esc(p.event_date)}` : ''}</div>
      ${sc ? sceneHtml() : `<p class="lead">${esc(sentence(p.claim))}</p>${p.against ? `<p class="lead"><b class="w-found">Against.</b> ${esc(sentence(p.against))}</p>` : ''}`}
      ${scoreHtml(p)}
      ${sc ? '' : `<h3>Checks on the ground · ${n}</h3>${n ? p.tests.map((t) => `<div class="check1">${glyph('confirmed')}<span><b>${esc(t.what)}</b>${t.who ? ` · ${esc(t.who)}${t.year ? `, ${t.year}` : ''}` : ''}<br>${esc(sentence(t.result))} ${t.url ? link(t.url, 'Source') : ''}</span></div>`).join('') : '<p class="note" style="margin-top:0">None on record. Nobody has surveyed, cored or dug here to test this proposal.</p>'}`}
      <div class="row">
        ${sc?.needs_sea_level ? `<button class="btn${a.sea ? ' on' : ''}" data-act="a-sea">${a.sea ? 'Sea back to where it was' : `${sc.needs_sea_level.m < 0 ? 'Lower' : 'Raise'} the sea to ${metres(sc.needs_sea_level.m)}`}</button>` : ''}
        <button class="btn primary" data-act="a-fit">Test the fit</button>
        <button class="btn" data-act="a-city">Stand Plato's city here</button>
        <button class="btn" data-act="a-known">Already recorded here?</button>
        <button class="btn" data-act="share">Share</button>
      </div>
      ${fullCase(p)}`;
    body.scrollTop = top;
  };

  const sceneView = () => ev.viewOf(null);
  const openPlace = (p, fly = true) => {
    const was = st.place;
    st.legend = atlantis; st.place = p;
    const sc = scenes.get(p.id) ?? null;
    if (was !== p || a.scene !== sc) { leaveSea(); a.mode = 'all'; a.step = -1; a.feature = null; a.more = false; a.fit = null; }
    a.scene = sc;
    // The place's own finer depth grid, if it has one: the ground is read again inside its box once it arrives.
    if (sc?.dem && !sc.dem.asked) { sc.dem.asked = true; loadPatch(sc.dem, globalThis.__ASSETS__ || './').then((patch) => { if (patch) { globe.refresh(patch.bbox); world.stamp++; } }); }
    ev.show(sc);
    ev.setExtras([]);
    ev.setMode(a.mode);
    setSheet('legend');
    body.scrollTop = 0;
    drawPlace();
    if (fly) control.flyTo(sc ? sceneView() : ctx.viewFor(p));
    // A proposal that needs a lower sea is shown with the sea where it needs it: the island appears as you arrive.
    // (A claim that would need the sea higher than today is offered as a button instead: raising it hides the place.)
    if (sc?.needs_sea_level?.m < 0 && fly && !a.sea && Math.abs(S.uSea.value - sc.needs_sea_level.m) > 0.6 && S.uWater.value > 0.5) {
      a.sea = { from: S.uSea.value, to: sc.needs_sea_level.m };
      setTimeout(() => { if (a.sea && st.place === p) { seaTo(a.sea.to); toast(`Sea lowered to ${metres(a.sea.to)}: ${sc.needs_sea_level.when ?? 'what this proposal needs'}`, 4200); drawPlace(); } }, fly ? 1700 : 0);
    }
  };
  const openList = () => { leaveScene(); st.legend = atlantis; st.place = null; setSheet('legend'); body.scrollTop = 0; drawList(); };
  const leaveScene = () => { leaveSea(); a.scene = null; a.step = -1; a.feature = null; ev.show(null); ev.setExtras([]); a.fit = null; };

  const setMode = (mode) => { a.mode = mode; a.step = -1; a.feature = null; ev.setMode(mode); ev.setFocus(null); ev.select(null); drawPlace(); };
  const fitView = (ids) => {
    // A view that takes in the features of one step.
    const fs = a.scene.features.filter((f) => ids.includes(f.id));
    if (!fs.length) return sceneView();
    const pts = fs.map(anchorOf), lon = pts.reduce((s, q) => s + q[0], 0) / pts.length, lat = pts.reduce((s, q) => s + q[1], 0) / pts.length;
    let far = 0;
    for (const f of fs) { const v = ev.viewOf(f); far = Math.max(far, v.range / 2.2 + Math.hypot((anchorOf(f)[0] - lon) * Math.cos(lat * DEG), anchorOf(f)[1] - lat) * DEG * 6371008.8); }
    return { lon: lon * DEG, lat: lat * DEG, range: clamp(far * 2.6, 900, sceneView().range * 1.2), tilt: 48 * DEG, heading: control.heading };
  };
  const setStep = (i) => {
    const sc = a.scene;
    if (!sc?.story.length) return;
    a.step = i >= sc.story.length ? -1 : i;
    a.feature = null; ev.select(null);
    if (a.step < 0) { a.mode = 'all'; ev.setMode('all'); ev.setFocus(null); control.flyTo(sceneView(), 1.6); }
    else {
      const s = sc.story[a.step];
      // A step that shows something from the other side still needs it on screen, so steps are drawn over everything.
      a.mode = 'all'; ev.setMode('all');
      ev.setFocus(s.show ?? []);
      if (s.show?.length) control.flyTo(fitView(s.show), 1.8);
    }
    drawPlace();
  };
  const selectFeature = (id, fly = true) => {
    const f = a.scene?.features.find((x) => x.id === id);
    a.feature = f && a.feature !== id ? id : null;
    ev.select(a.feature);
    if (a.feature && fly) control.flyTo(ev.viewOf(f), 1.5);
    if (st.sheet !== 'legend') setSheet('legend');
    drawPlace();
    if (a.feature) body.querySelector('.feat.on')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  // ---------- labels beside what is drawn ----------
  const markEls = new Map(), shown = new Set(), out = [0, 0];
  const markFor = (l) => {
    let el = markEls.get(l.id);
    if (!el) {
      el = document.createElement('button');
      el.className = 'mark';
      el.innerHTML = '<i></i><span></span>';
      el.addEventListener('click', (e) => { e.stopPropagation(); if (l.side === 'plato') return; selectFeature(l.id, false); });
      pinsEl.appendChild(el);
      markEls.set(l.id, el);
    }
    el._l = l;
    return el;
  };
  const placeMarks = () => {
    const next = new Set();
    if (ev.active && ev.labels.length) {
      const w = stage.clientWidth, h = stage.clientHeight, boxes = [];
      const list = ev.labels.map((l) => ({ l, w: (l.id === a.feature ? 100 : 0) + (l.lit ? 10 : 0) + ({ claimed: 5, found: 4, checked: 3, plato: 2, context: 1 }[l.side] ?? 0) })).sort((x, y) => y.w - x.w);
      for (const { l } of list) {
        if (!project(l.lon, l.lat, out, l.lift)) continue;
        if (out[0] < -10 || out[1] < 90 || out[0] > w + 10 || out[1] > h - 30) continue;
        const text = l.text.length > 34 ? `${l.text.slice(0, 32).trimEnd()}…` : l.text;
        const box = [out[0] - 8, out[1] - 10, out[0] + 14 + text.length * 6.3, out[1] + 10];
        let label = l.lit && boxes.length < 26 && box[2] < w - 4;
        if (label) for (const o of boxes) if (box[0] < o[2] && box[2] > o[0] && box[1] < o[3] && box[3] > o[1]) { label = false; break; }
        if (!label && l.id !== a.feature && l.kind !== 'core' && l.side === 'context') continue;
        if (label) boxes.push(box);
        const el = markFor(l);
        if (el._text !== text) { el.lastChild.textContent = text; el._text = text; el.setAttribute('aria-label', `${l.text}${l.year ? ` (${l.year})` : ''}`); }
        el.style.transform = `translate3d(${out[0].toFixed(1)}px,${out[1].toFixed(1)}px,0)`;
        const cls = `mark s-${l.side}${label ? '' : ' dot'}${l.id === a.feature ? ' on' : ''}${l.lit ? '' : ' dim'}`;
        if (el.className !== cls) el.className = cls;
        if (!el._shown) { el.style.display = ''; el._shown = true; }
        next.add(el);
      }
    }
    for (const el of shown) if (!next.has(el)) { el.style.display = 'none'; el._shown = false; }
    shown.clear();
    for (const el of next) shown.add(el);
    // Labels of a scene that is no longer shown are thrown away, so ids from two places never mix.
    if (!ev.active && markEls.size) { for (const el of markEls.values()) el.remove(); markEls.clear(); }
  };

  // ---------- the pop-up card for a search, a mark on the board, or one of Plato's details ----------
  const pop = $('#pop');
  let opened = 0;
  const showPop = (html, anchor) => {
    pop.innerHTML = `<button class="x" data-act="pop-x" aria-label="Close"><svg width="10" height="10" viewBox="0 0 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>${html}`;
    pop.classList.add('open');
    opened = performance.now();
    const s = stage.getBoundingClientRect(), r = anchor.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight;
    const x = clamp(r.left - s.left + r.width / 2 - pw / 2, 8, s.width - pw - 8);
    const above = r.top - s.top - ph - 10;
    pop.style.left = `${x}px`;
    pop.style.top = `${above >= 8 ? above : Math.min(r.bottom - s.top + 10, s.height - ph - 8)}px`;
  };
  const hidePop = () => { pop.classList.remove('open'); a.search = null; for (const b of stage.querySelectorAll('.tl-b.on')) b.classList.remove('on'); ctx.pulse(null); };
  const showSearch = (id, anchor) => {
    const s = cas.searches.find((x) => x.id === id);
    if (!s) return;
    if (a.search === id) return hidePop();
    hidePop();
    a.search = id;
    anchor.classList.add('on');
    showPop(searchCard(s, s.place ? placeById.get(s.place)?.name : null), anchor);
    ctx.pulse(s.place ? placeById.get(s.place) : null);
  };
  const showClaim = (id, anchor, placeId, kind) => {
    const c = claim[id];
    if (!c) return;
    const d = placeId && cas.places[placeId], why = d && (kind === 'brk' ? d.breaks[id] : kind === 'fit' ? d.fits[id] : null);
    const both = d && kind === 'both' ? `<p><em>Said to fit:</em> ${esc(d.fits[id]?.how ?? '')} ${link(d.fits[id]?.source, 'source')}</p><p><em>Breaks:</em> ${esc(d.breaks[id]?.how ?? '')} ${link(d.breaks[id]?.source, 'source')}</p>` : '';
    const head = placeId ? `<div class="pop-h">${mark(kind)}<b>${esc(placeById.get(placeId)?.name ?? '')} · ${esc(c.short)}</b></div><div class="pop-s">${kind === 'fit' ? 'Said to fit' : kind === 'brk' ? 'Breaks' : 'Argued both ways'} · ${esc(c.ref)}</div>${why ? `<p>${esc(why.how)} ${link(why.source, 'source')}</p>` : both}<p class="quote">“${esc(c.quote ?? c.label)}”</p>` : claimCard(c, stats.used.get(id) ?? 0);
    showPop(head, anchor);
  };

  // ---------- the board ----------
  const board = $('#board');
  const openBoard = () => {
    hidePop();
    $('#board-body').innerHTML = boardHtml(atlantis, cas, stats, scenes);
    board.classList.add('open');
    stage.classList.add('board-open');
    $('#board-body').scrollTop = 0;
  };
  const closeBoard = () => { hidePop(); board.classList.remove('open'); stage.classList.remove('board-open'); };
  const go = (id) => { const p = placeById.get(id); if (!p) return; closeBoard(); hidePop(); openPlace(p, true); };
  board.addEventListener('click', (e) => {
    const t = e.target.closest('[data-search],[data-claim],[data-cell],[data-go],[data-act]');
    if (!t) return hidePop();
    if (t.dataset.act === 'board-x') closeBoard();
    else if (t.dataset.search) showSearch(t.dataset.search, t);
    else if (t.dataset.claim) showClaim(t.dataset.claim, t);
    else if (t.dataset.cell) { const [pid, cid, kind] = t.dataset.cell.split('|'); showClaim(cid, t, pid, kind); }
    else if (t.dataset.go) go(t.dataset.go);
  });
  // The card belongs to the thing it was opened from: once that scrolls away, so does the card.
  // (A scroll that brought the pressed thing into view arrives just after the card opens: that one is let pass.)
  for (const el of [$('#board-body'), body]) el.addEventListener('scroll', () => { if (pop.classList.contains('open') && performance.now() - opened > 350) hidePop(); }, { passive: true });
  pop.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go],[data-act]');
    if (t?.dataset.go) go(t.dataset.go);
    else if (t?.dataset.act === 'pop-x') hidePop();
  });

  // ---------- the strip along the top and the line of searches along the bottom ----------
  const drawCase = () => `<button class="chip glass case${st.kind === 'atlantis' ? ' on' : ''}" data-kind="atlantis" data-list="1"><b>${stats.places}</b> famous claims</button><button class="chip glass case${st.kind === 'atlantis' ? ' on' : ''}" data-kind="atlantis" data-board="1"><b>${stats.checked}</b> checked<i>&nbsp;on the ground</i> · <b>${stats.found}</b> found<span>Board ›</span></button>`;

  // ---------- the fit test ----------
  const fitRow = (title, ref, plato, here, note, tone) => `<div class="fit"><div class="fit-h"><b>${esc(title)}</b><small>${esc(ref ?? '')}</small></div><div class="fit-b"><span><em>Plato</em>${plato}</span><span class="${tone ?? ''}"><em>Here</em>${here}</span></div>${note ? `<p class="note">${note}</p>` : ''}</div>`;
  const drawFit = () => {
    const f = a.fit, p = st.place;
    eyebrow.textContent = 'Test the fit';
    if (!f || f.state === 'loading') { body.innerHTML = `<button class="back" data-act="a-back">‹ ${esc(p?.name ?? 'Back')}</button><h2>Laying Plato's plan on the ground</h2><p class="note">Reading heights for ${esc(p?.name ?? 'this point')} from the open elevation tiles…</p>`; return; }
    if (f.state === 'failed') { body.innerHTML = `<button class="back" data-act="a-back">‹ ${esc(p?.name ?? 'Back')}</button><h2>Could not measure</h2><p>The elevation tiles did not answer. Try again in a moment.</p><div class="row"><button class="btn primary" data-act="a-fit">Try again</button></div>`; return; }
    const P = f.plato, st_ = (n) => `${n.toLocaleString('en')} stades`, S_ = f.stadion, r = f.rings, sh = f.shore, pl = f.plain, sr = f.strait;
    const seaWord = Math.abs(f.sea) < 1 ? "today's sea level" : `the sea at ${metres(f.sea)}`;
    body.innerHTML = `
      <button class="back" data-act="a-back">‹ ${esc(p?.name ?? 'Back')}</button>
      <h2>Plato's plan, laid on this ground</h2>
      <p class="lead">Measured at ${formatLatLon(f.lat, f.lon, 3)} with ${seaWord}, at ${S_} m to the stade. The gold lines on the globe are his measurements at true size.</p>
      <div class="presets">${[[0, 'Today'], [-50, "Plato's date"], [-125, 'Ice-age low']].map(([m, t]) => `<button class="chip${Math.abs(f.sea - m) < 1 ? ' on' : ''}" data-act="a-fit-sea" data-m="${m}">${t}${m ? ` ${metres(m)}` : ''}</button>`).join('')}</div>
      ${fitRow('Is it above water?', P.refs.years, `<b>Dry land</b>, with the sea let into the rings`, f.dry ? `<b>Dry</b>, ${metres(r.mid - f.sea)} above the sea` : `<b>Under ${Math.round(f.sea - r.mid).toLocaleString('en')} m of water</b>`, f.dry ? '' : `At this sea level the point is sea floor. Nearest land: ${sh.distance == null ? `more than ${km(sh.beyond)} away` : `${km(sh.distance)} to the ${compassWord(sh.bearing)}`}.`, f.dry ? 'ok' : 'no')}
      ${fitRow('Ground for the rings', P.refs.rings, `<b>${km(r.across)}</b> across, cut to sea level<small>${st_(P.island)} island + rings of ${P.rings} stades</small>`, `<b>${Math.round(r.relief).toLocaleString('en')} m</b> of relief<small>from ${metres(r.low)} to ${metres(r.high)}</small>`, 'Plato has the sea standing in three rings round a low hill, so the ground has to lie close to sea level. Relief is the spread between the lowest and highest twentieth of the ground under the rings.')}
      ${fitRow('The canal to the sea', P.refs.canal, `<b>${km(f.wallR)}</b> from the centre to the sea<small>a canal of ${st_(P.canal)} beyond the rings</small>`, !f.dry ? '<b>Under water</b>' : sh.distance == null ? `<b>No sea within ${km(sh.beyond)}</b>` : `<b>${km(sh.distance)}</b> to the sea, to the ${compassWord(sh.bearing)}`, 'The outer wall stood the same 50 stades out and met the sea at the canal mouth.')}
      ${fitRow('The great plain', P.refs.plain, `<b>${Math.round(pl.long / 1000)} by ${Math.round(pl.wide / 1000)} km</b>, level<small>${st_(P.plainLong)} by ${st_(P.plainWide)}</small>`, `<b>${Math.round(pl.land * 100)}%</b> of that box is land${pl.mid == null ? '' : `<small>${Math.round(pl.level * 100)}% within 100 m of its middle height (${metres(pl.mid)})</small>`}`, `Plato says the plain lay round the city, ran 2,000 stades up from the sea and faced south. He does not give its corners: here its seaward side is set on the nearest shore, running inland to the ${compassWord(pl.inland)}.`)}
      ${fitRow('Beyond the Pillars', P.refs.pillars, '<b>In front of the strait</b>, in the outer ocean', `<b>${km(sr.distance)}</b> from the Strait of Gibraltar<small>${sr.inside ? 'inside it, on the Mediterranean side' : 'outside it'}</small>`, 'Bury takes the Pillars of Heracles to be the Strait of Gibraltar. Plato gives a direction, not a distance.', sr.inside ? 'no' : 'ok')}
      
      <div class="row"><button class="btn" data-act="a-fit-copy">Copy these numbers</button><button class="btn" data-act="a-fit-off">Clear the gold lines</button></div>`;
  };
  const runFit = async (sea, where) => {
    const p = st.place, c = control.state();
    const at = where ?? a.fit?.at ?? (p ? (a.scene ? { lat: a.scene.centre.lat, lon: a.scene.centre.lon } : { lat: p.lat, lon: p.lon }) : { lat: c.lat, lon: c.lon });
    const level = sea ?? (S.uWater.value > 0.5 ? Math.round(S.uSea.value) : 0);
    a.fit = { state: 'loading', at };
    setSheet('fit'); a.view = 'fit'; drawFit();
    try {
      const f = await measureFit({ ...at, sea: level, cas, stadion: world.city.params.stadion });
      if (a.view !== 'fit') return;
      a.fit = { ...f, state: 'done', at };
      if (sea != null) ctx.setSea(sea, false);
      ev.setExtras(f.shapes);
      if (f.dry) { world.city.place({ lat: f.lat, lon: f.lon, bearing: Math.round(f.seaBearing) }); world.stamp++; }
      control.flyTo({ lon: f.lon * DEG, lat: f.lat * DEG, range: f.wallR * 3.4, tilt: 50 * DEG, heading: ((f.seaBearing + 160) % 360) * DEG }, 2.2);
      drawFit();
    } catch (e) { console.warn(e); a.fit = { state: 'failed', at }; drawFit(); }
  };
  const fitText = () => {
    const f = a.fit, r = f.rings, sh = f.shore, pl = f.plain;
    return [`Plato's plan at ${f.lat.toFixed(4)}, ${f.lon.toFixed(4)} (sea ${f.sea} m, stadion ${f.stadion} m), measured ${f.made} from Terrain Tiles:`,
      `- above water: ${f.dry ? 'yes' : 'no'} (middle height under the rings ${Math.round(r.mid)} m)`,
      `- ground under the rings (${Math.round(r.across)} m across): ${Math.round(r.low)} to ${Math.round(r.high)} m, relief ${Math.round(r.relief)} m`,
      `- nearest ${sh.kind}: ${sh.distance == null ? `none within ${sh.beyond} m` : `${Math.round(sh.distance)} m at bearing ${sh.bearing}`} (Plato: ${Math.round(f.wallR)} m from centre to sea)`,
      `- plain box ${Math.round(pl.long / 1000)} x ${Math.round(pl.wide / 1000)} km: ${Math.round(pl.land * 100)}% land, ${Math.round(pl.level * 100)}% within 100 m of ${pl.mid == null ? 'n/a' : Math.round(pl.mid)} m`,
      `- Strait of Gibraltar: ${Math.round(f.strait.distance / 1000)} km, ${f.strait.inside ? 'inside' : 'outside'}`].join('\n');
  };

  // ---------- what the sheet's buttons do ----------
  const click = (act, b) => {
    if (act === 'a-list') openList();
    else if (act === 'a-place') openPlace(placeById.get(b.dataset.id), true);
    else if (act === 'a-board') openBoard();
    else if (act === 'a-mode') setMode(b.dataset.v);
    else if (act === 'a-step') setStep(Number(b.dataset.i) === a.step ? -1 : Number(b.dataset.i));
    else if (act === 'a-next') setStep(a.step + 1);
    else if (act === 'a-feature') selectFeature(b.dataset.id);
    else if (act === 'a-more') { a.more = true; drawPlace(); }
    else if (act === 'a-layer') { const o = ctx.overlays.find((x) => x.id === b.dataset.id); ctx.setOverlay(st.overlay?.id === o.id ? null : o); ctx.drawTag(); drawPlace(); }
    else if (act === 'a-claim') showClaim(b.dataset.id, b, b.dataset.place, b.dataset.kind);
    else if (act === 'a-sea') { const sc = a.scene; if (a.sea) leaveSea(); else { a.sea = { from: S.uSea.value, to: sc.needs_sea_level.m }; seaTo(a.sea.to); } drawPlace(); }
    else if (act === 'a-city') { const p = st.place, c = a.scene?.centre ?? p; ctx.standCity(c.lat, c.lon); }
    else if (act === 'a-known') { const p = st.place; ctx.checkKnown(p.lat, p.lon, Math.max(p.precision_km ?? 10, 5)); }
    else if (act === 'a-fit') runFit();
    else if (act === 'a-fit-sea') runFit(Number(b.dataset.m));
    else if (act === 'a-fit-off') { ev.setExtras([]); world.city.remove(); world.stamp++; ctx.drawTag(); toast('Cleared'); }
    else if (act === 'a-fit-copy') navigator.clipboard?.writeText(fitText()).then(() => toast('Copied'), () => toast('Could not copy'));
    else if (act === 'a-back') { a.view = 'place'; if (st.place) { setSheet('legend'); drawPlace(); } else ctx.closeSheet(); }
    else if (act === 'a-tour') ctx.tour?.();
    else return false;
    return true;
  };

  return {
    atlantis, scenes, stats, a, seaTo, ringStades: plato.island / 2 + plato.rings, openPlace, openList, leaveScene, openBoard, closeBoard, hidePop, drawCase, click, placeMarks, selectFeature, setStep, setMode, runFit,
    get boardOpen() { return board.classList.contains('open'); },
  };
};
