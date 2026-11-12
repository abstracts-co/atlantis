// The page's controls: search, pins, the legend card, readings, sea level, and the "already recorded here?" check.
import { DEG, R, toDir, clamp, formatLatLon, formatDistance, arc } from './geo.js';
import { KINDS, KIND_ONE, STATUS, STANDING, ROLE, search, parseCoords, sourceLayer, fold } from './data.js';
import { bridge, embedded, hello, layout, reportHeight } from './host.js';
import { BASE_LAYERS } from './main.js';
import { startAtlantis } from './atlantis.js';
import { startTour } from './tour.js';
import { startCityBar } from './citybar.js';
import { startWalk } from './walk.js';
import { startHall } from './hall.js';
import { startMeet } from './meet.js';
import { startHunt } from './hunt.js';
import { startSound } from './sound.js';
import { shortName } from './board.js';
import { strataColour } from './evidence.js';

// Where the city stands when the page opens: the open Atlantic beyond the strait. A choice; see reconstruction.json.
const HOME = { lat: 35.3, lon: -9.9, bearing: 180 };

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const link = (url, text) => (/^https?:\/\//.test(url ?? '') ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(text)}</a>` : esc(text));
const metres = (m) => `${m < 0 ? '−' : m > 0 ? '+' : ''}${Math.abs(Math.round(m)).toLocaleString('en')} m`;

// Global mean sea level in the past. Each preset is the middle of what is published, and the range is said on screen.
// Ice-age low point, about 21,000 years ago: −116 m (PaleoMIST) to −134 m (Lambeck et al. 2014); data/sea-level-research.json.
// 14,500 years ago: about −95 m, our own sum of the rates of rise in Lambeck et al. 2014, not checked against their tables.
// Plato's date, about 11,600 years ago: −43 m to −58 m; data/world-9600bce.json.
const SEA_PRESETS = [
  { m: 0, label: 'Today' },
  { m: -50, label: '9600 BCE', note: "Plato's date for Atlantis; sources give 43 to 58 m below today" },
  { m: -95, label: '12,500 BCE', note: 'before the fastest melt; our own estimate' },
  { m: -125, label: '19,000 BCE', note: 'the low point of the last ice age; estimates run from 116 to 134 m below today' },
];
const SEA_SOURCE = 'https://doi.org/10.1073/pnas.1411762111';
const STANDING_ORDER = { confirmed: 0, mainstream: 1, plausible: 2, fringe: 3, rejected: 4, hoax: 5 };
const FEATURED = ['atlantis', 'el dorado', 'troy', 'titanic', 'doggerland', 'lost city of z', 'amber room', 'oak island', 'san jose', 'endurance', 'genghis khan', 'cleopatra', 'noah', 'ark of the covenant', 'valeriana', 'angkor', 'machu picchu', 'ubar', 'iram', 'lemuria', 'ciudad blanca', 'yonaguni', 'thonis', 'upano', 'roanoke', 'holy grail', 'franklin', 'erebus', 'alexander', 'mu', 'sundaland', 'beringia', 'rungholt', 'paititi', 'yamashita', 'cahokia', 'great zimbabwe', 'nazca'];

export const startUI = (world, data) => {
  const { control, globe } = world;
  const S = globe.shared;
  const stage = $('#stage'), canvas = $('#view'), pinsEl = $('#pins'), sheet = $('#sheet'), body = $('#body'), eyebrow = $('#eyebrow');
  const st = { kind: null, legend: null, place: null, sheet: null, mode: 'content', overlay: null, overlayMix: 1, host: null, known: null };
  const legends = data.legends;
  let A = null;        // the Atlantis side of the page (atlantis.js), once it has started
  let pulsed = null;   // a place whose pin beats, while a search about it is on screen
  let walk = null, hall = null, meet = null;   // on foot (walk.js), the hall's boards and globe (hall.js), other people (meet.js)
  let cityBar = null;  // the bar shown while Plato's city stands on the globe (citybar.js)
  let H = null;        // the hunt (hunt.js): the glow of matching land, the reticle, claims
  // The globe is about one question first. With the Atlantis entry present it opens showing only that entry's places;
  // `kind` is then 'atlantis'. The other legends are behind the "All legends" chip.
  const atlantis = legends.find((l) => l.id === 'atlantis') ?? null;
  if (atlantis) st.kind = 'atlantis';
  for (const l of legends) {
    const k = fold(l.name);
    const f = FEATURED.findIndex((x) => k.includes(x));
    l.weight = (f >= 0 ? 200 - f : 0) + Math.min(l.places.length, 8) * 3 + (l.status === 'found' ? 4 : 0);
  }

  // ---------- frame size ----------
  const fit = () => {
    if (st.mode === 'viewport') stage.style.height = '100dvh';
    else {
      const h = Math.round(clamp(stage.clientWidth * 1.16, 560, 740));
      stage.style.height = `${h}px`;
      reportHeight(h);
    }
    control.wheelNeedsKey = st.mode !== 'viewport';
    frame();
  };
  layout((mode) => { st.mode = mode; fit(); });
  addEventListener('resize', fit);
  addEventListener('load', fit);

  // ---------- toast ----------
  let toastTimer;
  const toast = (text, ms = 2600) => {
    const t = $('#toast');
    t.textContent = text;
    t.classList.add('open');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('open'), ms);
  };

  // ---------- pins ----------
  const pinEls = new Map();
  const pinFor = (legend, place) => {
    let el = pinEls.get(place);
    if (!el) {
      el = document.createElement('button');
      el.className = `pin s-${legend.status}`;
      el.innerHTML = '<i></i><span></span>';
      el.addEventListener('click', (e) => { e.stopPropagation(); selectLegend(legend, place, true); });
      pinsEl.appendChild(el);
      pinEls.set(place, el);
      el._shown = false;
    }
    return el;
  };
  const project = (lonDeg, latDeg, out, lift = 0) => {
    const d = toDir(lonDeg * DEG, latDeg * DEG, project.d);
    const pos = control.pos, camR = Math.hypot(pos[0], pos[1], pos[2]);
    const cosA = (d[0] * pos[0] + d[1] * pos[1] + d[2] * pos[2]) / camR;
    if (cosA < (R - 2000) / camR) return false; // behind the curve of the Earth
    const exag = S.uExag.value;
    const sea = S.uWater.value > 0.5 ? S.uSea.value : -1e5;
    const h = Math.max(globe.heightAt(lonDeg * DEG, latDeg * DEG) ?? 0, sea) * exag;
    const r = R + h + lift;
    const x = d[0] * r - pos[0], y = d[1] * r - pos[1], z = d[2] * r - pos[2];
    const b = control.basis;
    const depth = x * b.fwd[0] + y * b.fwd[1] + z * b.fwd[2];
    if (depth <= world.camera.near) return false;
    const ty = Math.tan(control.fovY / 2), tx = ty * world.camera.aspect;
    out[0] = (((x * b.right[0] + y * b.right[1] + z * b.right[2]) / depth / tx + control.shift[0]) * 0.5 + 0.5) * stage.clientWidth;
    out[1] = (0.5 - ((x * b.up[0] + y * b.up[1] + z * b.up[2]) / depth / ty + control.shift[1]) * 0.5) * stage.clientHeight;
    return true;
  };
  project.d = [0, 0, 0];

  const shownPins = new Set();
  const placePins = () => {
    const w = stage.clientWidth, h = stage.clientHeight;
    const close = control.range < 1.5e6;
    const list = [];
    const p = [0, 0];
    const focus = st.kind === 'atlantis';
    for (const legend of legends) {
      const mine = legend === st.legend || (focus && legend === atlantis);
      if (!mine && (focus || (st.kind && legend.kind !== st.kind))) continue;
      for (const place of mine || close ? legend.places : [legend.main]) {
        // Inside a scene the research is drawn on the ground; the place's own pin would only sit on top of it.
        if (place === st.place && ((A?.a.scene && control.range < A.a.scene.radius_km * 9000) || world.evidence.extras.length)) continue;
        if (!project(place.lon, place.lat, p)) continue;
        if (p[0] < -20 || p[1] < -20 || p[0] > w + 20 || p[1] > h + 20) continue;
        list.push({ legend, place, x: p[0], y: p[1], w: (mine ? 1000 : 0) + (place === st.place ? 500 : 0) + legend.weight + (place === legend.main ? 5 : 0) + (focus ? 60 - 10 * (STANDING_ORDER[place.standing] ?? 5) : 0) });
      }
    }
    list.sort((a, b) => b.w - a.w);
    // While hunting, the famous claims stay as dots with only a few names: the glow is what the eye should follow.
    const maxLabels = w < 500 ? 9 : w < 900 ? 16 : 30;
    const boxes = [];
    const next = new Set();
    let labels = 0, dots = 0;
    const intro = !$('#intro').classList.contains('gone');
    const top = 96, sheetTop = st.sheet && w < 760 ? h * 0.38 : intro ? h - (w < 760 ? 310 : 300) : h;
    for (const it of list) {
      const named = it.legend === st.legend || (focus && it.legend === atlantis);
      let text = named && it.legend.places.length > 1 ? it.place.name : it.legend.name;
      if (text.length > 26) text = `${text.slice(0, 24).trimEnd()}…`;
      const bw = 16 + text.length * 6.6, bh = 18;
      const box = [it.x - 6, it.y - bh / 2, it.x + bw, it.y + bh / 2];
      // While hunting the famous claims are only dots: the glow is what the eye should follow. A name shows on hover.
      let label = !(st.hunt && !st.legend && it.place !== st.place) && labels < maxLabels && it.y > top && it.y < sheetTop - 10 && box[2] < w - 4;
      if (label) for (const o of boxes) if (box[0] < o[2] && box[2] > o[0] && box[1] < o[3] && box[3] > o[1]) { label = false; break; }
      if (!label && (dots > 220 || it.y > sheetTop)) continue;
      if (label) { boxes.push(box); labels++; } else dots++;
      const el = pinFor(it.legend, it.place);
      if (el._text !== text) { el.lastChild.textContent = text; el._text = text; el.setAttribute('aria-label', it.place === it.legend.main ? it.legend.name : `${it.place.name} (${it.legend.name})`); }
      el.style.transform = `translate3d(${it.x.toFixed(1)}px,${it.y.toFixed(1)}px,0)`;
      // A legend's pins take the colour of the legend; Atlantis pins take the colour of each place's standing.
      // An Atlantis pin is hollow where nobody has checked on the ground, and ringed where there is a scene to explore.
      const cls = `pin ${focus && it.legend === atlantis ? `p-${it.place.standing}${(it.place.tests ?? []).length ? '' : ' hollow'}${A?.scenes.has(it.place.id) ? ' scene' : ''}` : `s-${it.legend.status}`}${label ? '' : ' dot'}${it.place === st.place ? ' on' : ''}${it.place === pulsed ? ' pulse' : ''}`;
      if (el.className !== cls) el.className = cls;
      el.style.zIndex = it.place === st.place ? 3 : label ? 2 : 1;
      if (!el._shown) { el.style.display = ''; el._shown = true; }
      next.add(el);
    }
    for (const el of shownPins) if (!next.has(el)) { el.style.display = 'none'; el._shown = false; }
    shownPins.clear();
    for (const el of next) shownPins.add(el);
  };

  // ---------- kinds ----------
  const kindsEl = $('#kinds');
  const drawKinds = () => {
    const present = KINDS.filter(([k]) => legends.some((l) => l.kind === k));
    stage.classList.toggle('others', st.kind !== 'atlantis');
    kindsEl.innerHTML = (A ? A.drawCase() : atlantis ? `<button class="chip glass${st.kind === 'atlantis' ? ' on' : ''}" data-kind="atlantis">Atlantis · ${atlantis.places.length} places</button>` : '')
      + (A && st.kind === 'atlantis' ? '' : `<button class="chip glass${st.kind ? '' : ' on'}" data-kind="">${atlantis ? `Other legends ${legends.length - 1}` : `All ${legends.length}`}</button>`)
      + (st.kind === 'atlantis' ? '' : present.map(([k, label]) => `<button class="chip glass${st.kind === k ? ' on' : ''}" data-kind="${k}">${esc(label)}</button>`).join(''));
  };
  // The menu: everything that is not the hunt itself.
  const menu = $('#menu'), bMenu = $('#b-menu');
  const setMenu = (open) => { menu.classList.toggle('open', open); bMenu.setAttribute('aria-expanded', String(open)); bMenu.classList.toggle('on', open); };
  bMenu.addEventListener('click', (e) => { e.stopPropagation(); setMenu(!menu.classList.contains('open')); });
  menu.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    setMenu(false);
    $('#intro').classList.add('gone');
    control.idle = false;
    const m = b.dataset.menu;
    if (m === 'city') ctx.enterCity('gate');
    else if (m === 'hall') ctx.enterCity('hall');
    else if (m === 'hunt') { A?.leaveScene(); st.legend = st.place = null; if (st.kind !== 'atlantis' && atlantis) { st.kind = 'atlantis'; drawKinds(); } ctx.openGlobe(); }
    else if (m === 'story') tour.start();
    else if (m === 'work') { hall.show('work'); }
    else if (m === 'best') { ctx.leaveWalk(); H?.click('h-best'); }
    else if (m === 'claims') { ctx.leaveWalk(); selectLegend(atlantis, null, false); }
    else if (m === 'board') { ctx.leaveWalk(); A?.openBoard(); }
    else if (m === 'rules') H?.click('h-rules');
    else if (m === 'credits') $('#credit').click();
  });
  kindsEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-kind]');
    if (!b) return;
    if (b.dataset.board && st.kind === 'atlantis') return A.openBoard();
    if (b.dataset.list && st.kind === 'atlantis') return A.openList();
    st.kind = b.dataset.kind || null;
    if (st.kind !== 'atlantis' && A?.a.scene) { A.leaveScene(); closeSheet(); }
    if (st.kind === 'atlantis' && st.legend && st.legend !== atlantis) closeSheet();
    drawKinds();
  });

  // ---------- sheets ----------
  const setSheet = (name) => {
    st.sheet = name;
    sheet.dataset.kind = name ?? '';
    sheet.classList.toggle('open', !!name);
    stage.classList.toggle('sheet-open', !!name);
    for (const [id, n] of [['b-layers', 'layers'], ['b-sea', 'sea'], ['b-known', 'known']]) $(`#${id}`).classList.toggle('on', name === n);
    stage.dataset.sheet = name ?? '';
    if (name) $('#intro').classList.add('gone');
    if (!name) body.innerHTML = '';
    body.scrollTop = 0;
    frame();
  };
  // Keep the place being looked at clear of the open panel: above it on a narrow frame, beside it on a wide one.
  function frame() {
    const w = stage.clientWidth;
    // A place's card is kept short on a narrow frame, so the scene stays in view above it.
    control.goalShift = !st.sheet ? [0, 0] : w < 760 ? [0, st.sheet === 'legend' || st.sheet === 'fit' ? 0.42 : 0.56] : [416 / w, 0];
  }
  // Closing the card of a place with a scene leaves the scene on the globe: the note at the bottom brings the card back.
  const closeSheet = () => { setSheet(null); if (st.legend && !A?.a.scene) { st.legend = st.place = null; } };

  const viewFor = (place) => {
    const span = clamp((place.precision_km ?? 10) * 1000 * 7, 12000, 2.5e6);
    return { lon: place.lon * DEG, lat: place.lat * DEG, range: span, tilt: span < 200000 ? 38 * DEG : 0, heading: 0 };
  };

  // Plato's claims a place is said to fit or break, as small labels. Hovering one shows the claim and its passage.
  const chips = (label, ids, tone, legend) => (ids?.length ? `<p style="margin-bottom:4px"><b>${label}:</b></p><div class="row" style="gap:4px;margin:0 0 10px">${ids.map((id) => `<span class="tag t-${tone}">${esc(id.replaceAll('-', ' '))}</span>`).join('')}</div>` : '');
  const drawLegend = () => {
    const l = st.legend;
    eyebrow.innerHTML = `${esc(KIND_ONE[l.kind] ?? l.kind)} <span class="tag s-${l.status}">${esc(STATUS[l.status] ?? l.status)}</span>`;
    const places = l.places.map((p, i) => `
      <div class="place${p === st.place ? ' on' : ''}" data-i="${i}">
        <button data-act="place" data-i="${i}">
          <span class="name">${esc(p.name)}<small>${esc(ROLE[p.role] ?? p.role ?? '')}</small></span>
          <span class="tag t-${p.standing}">${esc(STANDING[p.standing] ?? p.standing ?? '')}</span>
        </button>
        <div class="more">
          ${p.claim ? `<p>${esc(p.claim)}</p>` : ''}
          ${p.against ? `<p><b>Against:</b> ${esc(p.against)}</p>` : ''}
          ${p.proposed_by?.length ? `<p style="font-size:12.5px">Proposed by ${esc(p.proposed_by.slice(0, 3).map((x) => `${x.who}${x.year ? ` (${x.year})` : ''}`).join(', '))}${p.event_date ? `. Date it needs: ${esc(p.event_date)}` : ''}</p>` : ''}
          ${chips('Said to fit Plato on', p.fits, 'confirmed', l)}${chips('Breaks Plato on', p.conflicts, 'rejected', l)}
          ${(p.tests ?? []).map((t) => `<p><b>Tested:</b> ${esc(t.what)}${t.who ? ` (${esc(t.who)}${t.year ? `, ${t.year}` : ''})` : ''}. ${esc(t.result)} ${t.url ? link(t.url, 'Source') : ''}</p>`).join('')}
          <p style="font-size:12.5px;color:var(--faint)">${formatLatLon(p.lat, p.lon, 3)}${p.precision_km ? `, give or take ${p.precision_km >= 100 ? Math.round(p.precision_km) : p.precision_km} km` : ''}${p.underwater ? ', under water' : ''}</p>
          ${(p.sources ?? []).map((s) => `<a class="src" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title ?? s.url)}</a>`).join('')}
          <div class="row">${l === atlantis ? `<button class="btn primary" data-act="city" data-i="${i}">Stand Plato's city here, to scale</button>` : ''}<button class="btn" data-act="known-here" data-i="${i}">What's already recorded here?</button></div>
        </div>
      </div>`).join('');
    const sea = Number.isFinite(l.sea_level_m) && l.sea_level_m !== 0;
    body.innerHTML = `
      <h2>${esc(l.name)}</h2>
      ${l.when ? `<div class="when">${esc(l.when)}</div>` : ''}
      <p>${esc(l.summary)}</p>
      ${l.look_for ? `<div class="look"><b>What to look for</b> ${esc(l.look_for)}</div>` : ''}
      <div class="row" style="margin-top:0">
        ${sea ? `<button class="btn primary" data-act="sea-to" data-m="${l.sea_level_m}">Set the sea to ${metres(l.sea_level_m)}</button>` : ''}
        <button class="btn" data-act="share">Share this view</button>
        ${embedded ? '<button class="btn" data-act="post">Post what you see</button>' : ''}
      </div>
      <h3>${l.places.length === 1 ? 'Where' : `Where people have looked · ${l.places.length}`}</h3>
      ${places}
      ${l.origin?.url || l.origin?.text ? `<p class="note">Where the story comes from: ${link(l.origin.url, l.origin.text ?? 'source')}</p>` : ''}`;
  };

  const selectLegend = (legend, place, fly) => {
    if (legend === atlantis && A) {
      if (st.kind !== 'atlantis') { st.kind = 'atlantis'; drawKinds(); }
      $('#q').blur();
      return place ? A.openPlace(place, fly) : A.openList();
    }
    A?.leaveScene();
    if (st.kind === 'atlantis' && legend !== atlantis) { st.kind = null; drawKinds(); }
    st.legend = legend;
    st.place = place ?? legend.main;
    setSheet('legend');
    drawLegend();
    if (fly) control.flyTo(viewFor(st.place));
    $('#q').blur();
    const on = $('.place.on', body);
    if (on && place) on.scrollIntoView({ block: 'nearest' });
  };

  // ---------- sea ----------
  // The small note at the bottom left: what is different from the plain view right now.
  const drawTag = () => {
    const tag = $('#seatag'), m = S.uSea.value, off = S.uWater.value < 0.5, o = st.overlay;
    const parts = [];
    if (off) parts.push('Oceans drained: <b>bare sea floor</b>');
    else if (Math.abs(m) >= 1) parts.push(`Sea level <b>${metres(m)}</b>`);
    if (o) {
      // Roughly the distance at which the survey's first tiles come into use.
      const reach = ((40075016 * Math.cos(control.lat)) / 2 ** o.form.layer.minZoom / 290) * stage.clientHeight * 1.5;
      parts.push(!covers(o) ? `<b>${esc(o.s.name)}</b> has no data here` : control.range > reach ? `Zoom in to see <b>${esc(o.s.name)}</b>` : `<b>${esc(o.s.name)}</b>`);
    }
    if (A?.a.scene && st.sheet !== 'legend' && st.sheet !== 'fit') parts.push(`<b>${esc(st.place?.name ?? '')}</b> · <button class="linkish" data-act="scene-open">open its card</button> · <button class="linkish" data-act="scene-off">leave</button>`);
    cityBar?.sync();
    const html = parts.join(' · ');
    if (tag._html !== html) { tag.innerHTML = html; tag._html = html; tag.classList.toggle('open', !!html); }
  };
  const setSea = (m, drained) => {
    S.uSea.value = clamp(m, -11000, 9000);
    if (drained !== undefined) S.uWater.value = drained ? 0 : 1;
    globe.fitCaps();
    drawTag();
  };
  const drawSea = () => {
    eyebrow.textContent = 'Sea level';
    const m = S.uSea.value, off = S.uWater.value < 0.5;
    body.innerHTML = `
      <div class="big" id="sea-big">${metres(m)}<small>against today</small></div>
      <div class="slide"><input id="sea-range" type="range" min="-150" max="70" step="1" value="${clamp(m, -150, 70)}" aria-label="Sea level in metres"></div>
      <div class="presets">${SEA_PRESETS.map((p) => `<button class="chip${Math.abs(p.m - m) < 0.5 && !off ? ' on' : ''}" data-act="sea-to" data-m="${p.m}">${esc(p.label)} ${p.m ? metres(p.m) : ''}</button>`).join('')}</div>
      <label class="check"><input type="checkbox" id="sea-off" ${off ? 'checked' : ''}> Drain the oceans and show the bare sea floor</label>
      
      
      
      `;
  };

  // ---------- Plato's city ----------
  const standCity = (lat, lon, bearing = 180, fly = true) => {
    world.city.place({ lat, lon, bearing });
    world.stamp++;
    if (fly) control.flyTo(world.city.view(), 4.5);
    setSheet(null);
    drawTag();
  };
  const drawCity = () => {
    if (!A?.a.scene) st.legend = st.place = null;
    setSheet('city');
    eyebrow.textContent = "Plato's city, rebuilt";
    const rec = data.reconstruction;
    const row = (x) => `<div class="known"><span>${esc(x.what)}</span><small>${esc(x.ref ?? '')}</small></div>`;
    body.innerHTML = `
      <p>This is the city Plato describes in the Critias, built to his measurements at ${world.city.params.stadion} m to the stadion and stood on the real ground at true size. It is a drawing of a text. Nothing like it has been found anywhere.</p>
      ${rec ? `<h3>From the text · ${rec.from_text.length}</h3>${rec.from_text.map(row).join('')}<h3>Our choices, not in the text · ${rec.choices.length}</h3>${rec.choices.map(row).join('')}` : ''}
      
      <div class="row"><button class="btn" data-act="city-off">Remove the city</button></div>`;
  };
  $('#seatag').addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'city-off') { world.city.remove(); world.stamp++; drawTag(); }
    if (act === 'city-notes') drawCity();
    if (act === 'scene-open' && st.place) A.openPlace(st.place, false);
    if (act === 'scene-off') { A.leaveScene(); st.legend = st.place = null; drawTag(); }
  });

  // ---------- readings ----------
  // One row for each source the browser can draw and the licence lets us show. A source can come in several drawings.
  const overlays = [];
  for (const s of data.sources) {
    if (s.license?.share_ok !== true) continue;   // only what the licence clearly lets a public page show
    const forms = [];
    const base = sourceLayer(s);
    if (base) forms.push({ id: '', name: 'Standard', layer: base });
    for (const v of s.access?.variants ?? []) {
      // Drawings that set their contrast from each picture's own contents come out as a patchwork of tiles: leave them out.
      if (/stretch/i.test(`${v.id} ${v.name ?? ''}`)) continue;
      const lv = sourceLayer(s, v);
      if (lv) forms.push({ id: v.id, name: v.name ?? v.id, layer: lv });
    }
    if (forms.length) overlays.push({ s, forms, id: s.id });
  }
  const GROUPS = [['lidar', 'Lidar relief'], ['elevation', 'Terrain'], ['seafloor', 'Sea floor'], ['geophysics', 'Gravity, magnetics, geology'], ['imagery', 'Satellite and air photos'], ['radar', 'Radar'], ['historic', 'Old maps and photos'], ['catalog', 'Where surveys exist']];
  const covers = (o) => {
    const b = o.s.coverage?.bbox;
    if (!b) return true;
    const lat = control.lat / DEG, lon = control.lon / DEG;
    return lon >= b[0] && lon <= b[2] && lat >= b[1] && lat <= b[3];
  };
  const worldwide = (o) => { const b = o.s.coverage?.bbox; return !b || (b[2] - b[0] > 300 && b[3] - b[1] > 120); };
  const setOverlay = (o, formId) => {
    const form = o ? o.forms.find((f) => f.id === (formId ?? '')) ?? o.forms[0] : null;
    st.overlay = o ? { ...o, form } : null;
    globe.setLayer('overlay', form ? form.layer : null);
    S.uOverMode.value = form && form.layer.asIs ? 1 : 0;
    S.uOverMix.value = st.overlayMix;
    globe.maxZ = form ? Math.max(17, Math.min(form.layer.maxZoom + 1, 19)) : 17;
  };
  const drawLayers = () => {
    eyebrow.textContent = 'Readings and view';
    const lens = S.uLens.value;
    const row = (o) => {
      const on = st.overlay?.id === o.id, here = covers(o);
      const res = o.s.resolution_m ? ` · ${o.s.resolution_m >= 1000 ? `${o.s.resolution_m / 1000} km` : `${o.s.resolution_m} m`}` : '';
      return `<button class="layer${on ? ' on' : ''}" data-act="overlay" data-id="${esc(o.id)}"><span class="radio"></span><span class="t"><b>${esc(o.s.name)}</b><small>${esc(o.s.coverage?.note ?? '')}${res}</small></span></button>`
        + (on ? `<div class="slide" style="margin:2px 10px 8px 36px">
            ${o.forms.length > 1 ? `<div class="presets" style="grid-column:1/-1;margin:0 0 6px">${o.forms.map((f) => `<button class="chip${st.overlay.form === f ? ' on' : ''}" data-act="overlay-form" data-form="${esc(f.id)}">${esc(f.name.replace(/\s*\(.*\)$/, ''))}</button>`).join('')}</div>` : ''}
            <label for="over-mix">Strength</label><output>${Math.round(st.overlayMix * 100)}%</output><input id="over-mix" type="range" min="0" max="1" step="0.05" value="${st.overlayMix}">
            <div class="row" style="grid-column:1/-1;margin-top:4px">${here ? '' : '<button class="btn" data-act="overlay-go">Go where it has data</button>'}${o.s.docs ? `<a class="btn" href="${esc(o.s.docs)}" target="_blank" rel="noopener">About this source</a>` : ''}</div>
            <p class="note" style="grid-column:1/-1;margin:6px 0 0">${esc(o.s.what ?? '')} ${o.s.license?.name ? `Licence: ${link(o.s.license.url, o.s.license.name)}.` : ''} ${esc(o.s.license?.attribution ?? '')}</p></div>` : '');
    };
    const section = (list) => GROUPS.map(([g, label]) => { const rows = list.filter((o) => o.s.group === g); return rows.length ? `<h3>${esc(label)}</h3>${rows.map(row).join('')}` : ''; }).join('');
    const here = overlays.filter((o) => covers(o) && !worldwide(o)), global = overlays.filter(worldwide), away = overlays.filter((o) => !covers(o) && !worldwide(o));
    body.innerHTML = `
      <div class="seg" role="tablist"><button data-act="lens" data-v="0" class="${lens === 0 ? 'on' : ''}">Satellite</button><button data-act="lens" data-v="1" class="${lens === 1 ? 'on' : ''}">Bare earth</button><button data-act="lens" data-v="2" class="${lens === 2 ? 'on' : ''}">Height &amp; depth</button></div>
      
      <div class="slide"><label for="exag">Relief, stretched</label><output id="exag-out">${S.uExag.value.toFixed(1)}×</output><input id="exag" type="range" min="1" max="12" step="0.5" value="${S.uExag.value}"></div>
      <div class="slide"><label for="sun-az">Light from</label><output id="az-out">${compass(world.sun.azimuth)}</output><input id="sun-az" type="range" min="0" max="359" step="1" value="${world.sun.azimuth}"></div>
      <div class="slide"><label for="sun-alt">Sun height</label><output id="alt-out">${Math.round(world.sun.altitude)}°</output><input id="sun-alt" type="range" min="3" max="88" step="1" value="${world.sun.altitude}"></div>
      
      <label class="check"><input type="checkbox" id="opt-shadows" ${S.uShadows.value > 0.5 ? 'checked' : ''}> Shadows from hills</label>
      <label class="check"><input type="checkbox" id="opt-contours" ${S.uContours.value > 0.5 ? 'checked' : ''}> Contour lines</label>
      <label class="check"><input type="checkbox" id="opt-night" ${S.uNightOn.value > 0.5 ? 'checked' : ''}> City lights on the night side</label>
      <h2 style="font-size:19px;margin-top:22px">Lay a survey over the ground</h2>
      
      ${here.length ? section(here) : ''}
      ${global.length ? `<h2 style="font-size:19px;margin-top:22px">Worldwide</h2>${section(global)}` : ''}
      ${away.length ? `<details style="margin-top:18px"${st.overlay && away.some((o) => o.id === st.overlay.id) ? ' open' : ''}><summary style="cursor:pointer;font-weight:600">Surveys of other places · ${away.length}</summary>${section(away)}</details>` : ''}
      `;
  };
  const compass = (deg) => ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.round(deg / 45) % 8] + ` ${Math.round(deg)}°`;

  // ---------- already recorded here? ----------
  const CLASSES = /archaeolog|ruin|mound|tumul|barrow|hillfort|fort|shipwreck|wreck|tomb|necropol|temple|pyramid|ancient|prehistoric|castle|monument|megalith|dolmen|menhir|stone circle|cave|heritage|rock art|petroglyph|geoglyph|palace|monaster|shrine|roman villa|oppidum|tell|kurgan|stupa|former settlement|ghost town|abandoned/i;
  const drawKnown = () => {
    eyebrow.textContent = 'Already recorded here?';
    const k = st.known;
    if (!k) { body.innerHTML = '<p>Before you call something a discovery, check what is already on record.</p>'; return; }
    const head = `<p style="color:var(--dim)">Within <b style="color:var(--ink)">${k.radius} km</b> of ${formatLatLon(k.lat, k.lon, 3)}</p>`;
    if (k.state === 'loading' && !k.rows.length) { body.innerHTML = `${head}<p class="note">Asking Wikidata and OpenStreetMap…</p>`; return; }
    const row = (r) => `<div class="known"><span>${r.url ? link(r.url, r.name) : esc(r.name)} ${r.type ? `<em>· ${esc(r.type)}</em>` : ''}</span><small>${r.km < 1 ? `${Math.round(r.km * 1000)} m` : `${r.km.toFixed(r.km < 10 ? 1 : 0)} km`}</small></div>`;
    const sites = k.rows.filter((r) => r.site), other = k.rows.filter((r) => !r.site);
    body.innerHTML = `${head}
      ${sites.length ? `<h3>Sites and monuments · ${sites.length}</h3>${sites.map(row).join('')}` : `<p><b>No recorded site turned up.</b> That is not proof of a discovery. These two open databases miss most of what national heritage registers hold, and archaeologists keep many site locations unpublished to protect them from looting.</p>`}
      ${other.length ? `<h3>Other named places · ${other.length}</h3>${other.slice(0, 25).map(row).join('')}` : ''}
      ${k.state === 'loading' ? '<p class="note">Still waiting for OpenStreetMap, which can take half a minute…</p>' : ''}
      ${k.errors.length ? `<p class="note">Could not reach: ${esc(k.errors.join(', '))}.</p>` : ''}
      <p class="note">Sources: Wikidata (CC0), nearest first, and OpenStreetMap contributors (ODbL) within ${Math.min(k.radius, 8)} km. Next, check the country's heritage register and the published surveys for the area. The community's <b>check-a-find</b> skill walks your agent through it.</p>
      <div class="row"><button class="btn" data-act="known-again">Check the centre of the view</button></div>`;
  };
  const checkKnown = async (lat, lon, radiusKm) => {
    const radius = Math.round(clamp(radiusKm, 2, 60));
    const k = st.known = { lat, lon, radius, state: 'loading', rows: [], errors: [] };
    setSheet('known');
    drawKnown();
    const km = (la, lo) => arc(lon * DEG, lat * DEG, lo * DEG, la * DEG) * R / 1000;
    const wd = (async () => {
      const q = `SELECT ?item ?itemLabel ?coord (SAMPLE(?instLabel_) AS ?inst) WHERE { SERVICE wikibase:around { ?item wdt:P625 ?coord. bd:serviceParam wikibase:center "Point(${lon} ${lat})"^^geo:wktLiteral; wikibase:radius "${radius}"; wikibase:distance ?dist. } OPTIONAL { ?item wdt:P31 ?i. ?i rdfs:label ?instLabel_. FILTER(LANG(?instLabel_) = "en") } SERVICE wikibase:label { bd:serviceParam wikibase:language "en,es,fr,de,it,pt,ar,ru,zh,ja". } } GROUP BY ?item ?itemLabel ?coord ?dist ORDER BY ?dist LIMIT 300`;
      // Wikidata sometimes turns a request away when busy: ask once more before giving up.
      const ask = () => fetch(`https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(q)}`, { headers: { Accept: 'application/sparql-results+json' }, signal: AbortSignal.timeout(25000) });
      let r = await ask().catch(() => null);
      if (!r?.ok) { await new Promise((done) => setTimeout(done, 1500)); r = await ask(); }
      if (!r.ok) throw new Error('Wikidata');
      for (const b of (await r.json()).results.bindings) {
        const m = /Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(b.coord.value);
        if (!m || /^Q\d+$/.test(b.itemLabel.value)) continue;
        k.rows.push({ name: b.itemLabel.value, type: b.inst?.value ?? '', url: b.item.value.replace('http://', 'https://'), km: km(Number(m[2]), Number(m[1])), site: CLASSES.test(b.inst?.value ?? '') });
      }
    })().catch(() => k.errors.push('Wikidata'));
    const osm = (async () => {
      // OpenStreetMap returns matches in no order and only so many, so it is asked about the nearest 8 km at most.
      const q = `[out:json][timeout:12];(nwr["historic"](around:${Math.min(radius, 8) * 1000},${lat},${lon}););out center tags 600;`;
      const r = await fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: `data=${encodeURIComponent(q)}`, headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, signal: AbortSignal.timeout(40000) });
      if (!r.ok) throw new Error('OpenStreetMap');
      for (const e of (await r.json()).elements) {
        const la = e.lat ?? e.center?.lat, lo = e.lon ?? e.center?.lon;
        const t = e.tags ?? {};
        if (la == null || !t.name || ['memorial', 'wayside_cross', 'wayside_shrine', 'boundary_stone', 'milestone'].includes(t.historic)) continue;
        k.rows.push({ name: t.name, type: [t.historic, t.site_type].filter(Boolean).join(', ').replaceAll('_', ' '), url: `https://www.openstreetmap.org/${e.type}/${e.id}`, km: km(la, lo), site: true });
      }
    })().catch(() => k.errors.push('OpenStreetMap'));
    // Show each answer as it lands: Wikidata takes a couple of seconds, OpenStreetMap sometimes half a minute.
    const merge = () => {
      if (st.known !== k) return;
      // The same place often sits in both databases: keep the nearer record of each name.
      const seen = new Map();
      for (const r of k.rows.sort((a, b) => a.km - b.km)) { const key = fold(r.name); if (!seen.has(key) || (r.site && !seen.get(key).site)) seen.set(key, r); }
      k.rows = [...seen.values()].sort((a, b) => a.km - b.km);
      if (st.sheet === 'known') { const top = body.scrollTop; drawKnown(); body.scrollTop = top; }
    };
    wd.then(merge);
    await Promise.all([wd, osm]);
    k.state = 'done';
    merge();
  };

  // ---------- sharing ----------
  const viewParams = () => {
    const c = control.state();
    const p = { ll: `${c.lat.toFixed(5)},${c.lon.toFixed(5)}`, r: Math.round(c.range) };
    if (Math.abs(c.heading) > 0.5) p.hd = Math.round(c.heading);
    if (c.tilt > 0.5) p.t = Math.round(c.tilt);
    if (Math.abs(S.uSea.value) >= 1) p.sea = Math.round(S.uSea.value);
    if (S.uWater.value < 0.5) p.dry = 1;
    if (S.uLens.value) p.lens = S.uLens.value;
    if (S.uExag.value !== 1) p.x = S.uExag.value;
    if (st.legend) p.l = st.legend.id;
    if (st.legend && st.place && (st.place !== st.legend.main || st.legend === atlantis)) p.p = st.place.id;
    if (A?.a.scene) { if (A.a.mode !== 'all' && A.a.step < 0) p.m = A.a.mode; if (A.a.step >= 0) p.s = A.a.step + 1; }
    if (world.city.active) p.city = `${world.city.site.lat.toFixed(4)},${world.city.site.lon.toFixed(4)},${world.city.params.seaBearing}`;
    if (st.overlay) p.o = st.overlay.form.id ? `${st.overlay.id}.${st.overlay.form.id}` : st.overlay.id;
    return p;
  };
  // only: a link that carries just the given parameters (a claim), not the whole view.
  const shareUrl = (extra, only) => {
    const p = only ? { ...extra } : { ...viewParams(), ...extra };
    if (st.host?.community) return `https://abstracts.co/a/${st.host.community}?${Object.entries(p).map(([k, v]) => `a_${k}=${encodeURIComponent(v)}`).join('&')}`;
    const u = new URL(location.href);
    u.search = new URLSearchParams(p).toString();
    return u.toString();
  };
  // Hand a result to whatever can share it: the Abstracts page, the device's own share sheet, or the clipboard.
  const shareOut = async ({ text, url, both }) => {
    try {
      if (st.host) { const r = await bridge('share', { url, text }); toast(r?.shared === false ? 'Not shared' : 'Ready to share'); return; }
      if (navigator.share && matchMedia('(hover: none)').matches) { await navigator.share({ text: both ?? `${text}\n${url}` }); return; }
      await navigator.clipboard.writeText(both ?? `${text}\n${url}`);
      toast('Copied. Paste it anywhere.');
    } catch (e) {
      if (e?.code === 'cancelled' || e?.name === 'AbortError') return;
      prompt('Copy this', both ?? `${text}\n${url}`);
    }
  };
  const share = async () => {
    const url = shareUrl();
    const text = st.legend ? `${st.legend.name}: ${st.place?.name ?? ''}`.trim() : 'A view of the Earth';
    try {
      if (st.host) { const r = await bridge('share', { url, text }); toast(r?.shared === false ? 'Not shared' : 'Link ready to share'); return; }
      await navigator.clipboard.writeText(url);
      toast('Link copied');
    } catch (e) {
      if (e?.code === 'cancelled') return;
      prompt('Copy this link', url);
    }
  };
  const post = async () => {
    if (!st.host) return toast('Open this on abstracts.co to post');
    if (!st.host.signedIn) { try { await bridge('signIn'); } catch { toast('Sign in to post'); } return; }
    const blob = await new Promise((done) => { world.snap = done; });
    if (!blob) return toast('Could not take the picture');
    const c = control.state();
    const where = formatLatLon(c.lat, c.lon, 3);
    const text = `${st.legend ? `${st.legend.name}${st.place ? `, ${st.place.name}` : ''}` : 'Looking at'} ${where}${Math.abs(S.uSea.value) >= 1 ? `, sea at ${metres(S.uSea.value)}` : ''}\n\n${shareUrl()}`;
    try {
      const r = await bridge('post', { text, media: [new File([blob], 'view.jpg', { type: 'image/jpeg' })] });
      if (r?.post?.url) toast('Posted');
    } catch (e) {
      if (e?.code !== 'cancelled') toast(e?.code === 'signed_out' ? 'Sign in to post' : 'Could not post');
    }
  };

  // ---------- events ----------
  sheet.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const act = b.dataset.act;
    if (A?.click(act, b)) return;
    if (H?.click(act, b)) return;
    if (act === 'close') closeSheet();
    else if (act === 'city-off') { world.city.remove(); world.stamp++; closeSheet(); drawTag(); }
    else if (act === 'place') {
      const p = st.legend.places[Number(b.dataset.i)];
      st.place = p;
      drawLegend();
      control.flyTo(viewFor(p));
    } else if (act === 'sea-to') { setSea(Number(b.dataset.m), false); if (st.sheet === 'sea') drawSea(); else toast(`Sea level ${metres(Number(b.dataset.m))}`); }
    else if (act === 'share') share();
    else if (act === 'post') post();
    else if (act === 'lens') { S.uLens.value = Number(b.dataset.v); drawLayers(); }
    else if (act === 'overlay') { const o = overlays.find((x) => x.id === b.dataset.id); setOverlay(st.overlay?.id === o.id ? null : o); const top = body.scrollTop; drawLayers(); body.scrollTop = top; }
    else if (act === 'overlay-form') { setOverlay(overlays.find((x) => x.id === st.overlay.id), b.dataset.form); const top = body.scrollTop; drawLayers(); body.scrollTop = top; }
    else if (act === 'overlay-go') {
      const bb = st.overlay?.s.coverage?.bbox;
      if (bb) control.flyTo({ lon: ((bb[0] + bb[2]) / 2) * DEG, lat: ((bb[1] + bb[3]) / 2) * DEG, range: clamp(Math.max(bb[2] - bb[0], bb[3] - bb[1]) * 111000 * 1.1, 20000, 1.2e7) });
    } else if (act === 'city') { const p = st.legend.places[Number(b.dataset.i)]; standCity(p.lat, p.lon); }
    else if (act === 'city-notes') drawCity();
    else if (act === 'known-here') { const p = st.legend.places[Number(b.dataset.i)]; checkKnown(p.lat, p.lon, Math.max(p.precision_km ?? 10, 5)); }
    else if (act === 'known-again') { const c = control.state(); checkKnown(c.lat, c.lon, control.range / 4000); }
  });
  sheet.addEventListener('input', (e) => {
    const t = e.target;
    if (t.id === 'sea-range') { setSea(Number(t.value)); $('#sea-big').innerHTML = `${metres(Number(t.value))}<small>against today</small>`; for (const c of body.querySelectorAll('.presets .chip')) c.classList.toggle('on', Number(c.dataset.m) === Number(t.value) && S.uWater.value > 0.5); }
    else if (t.id === 'sea-off') { setSea(S.uSea.value, t.checked); }
    else if (t.id === 'exag') { S.uExag.value = Number(t.value); $('#exag-out').textContent = `${Number(t.value).toFixed(1)}×`; globe.fitCaps(); }
    else if (t.id === 'sun-az') { world.sun.azimuth = Number(t.value); $('#az-out').textContent = compass(Number(t.value)); }
    else if (t.id === 'sun-alt') { world.sun.altitude = Number(t.value); $('#alt-out').textContent = `${t.value}°`; }
    else if (t.id === 'opt-shadows') S.uShadows.value = t.checked ? 1 : 0;
    else if (t.id === 'opt-contours') S.uContours.value = t.checked ? 1 : 0;
    else if (t.id === 'opt-night') S.uNightOn.value = t.checked ? 1 : 0;
    else if (t.id === 'over-mix') { st.overlayMix = Number(t.value); S.uOverMix.value = st.overlayMix; t.previousElementSibling.textContent = `${Math.round(st.overlayMix * 100)}%`; }
  });
  const toggle = (name, draw) => () => { if (st.sheet === name) return closeSheet(); if (!A?.a.scene) st.legend = st.place = null; setSheet(name); draw(); };
  $('#b-layers').addEventListener('click', toggle('layers', drawLayers));
  $('#b-sea').addEventListener('click', toggle('sea', drawSea));
  $('#b-known').addEventListener('click', () => { if (st.sheet === 'known') return closeSheet(); if (!A?.a.scene) st.legend = st.place = null; const c = control.state(); checkKnown(c.lat, c.lon, control.range / 4000); });
  $('#z-in').addEventListener('click', () => control.zoomBy(0.5));
  $('#z-out').addEventListener('click', () => control.zoomBy(2));
  $('#compass').addEventListener('click', () => control.flyTo({ heading: 0, tilt: 0 }, 0.7));
  $('#credit').addEventListener('click', () => {
    const L = globe.layers;
    const list = [BASE_LAYERS.terrarium.credit, control.range > 8e5 ? L.globe?.credit : L.base.credit, st.overlay?.form.layer.credit, S.uNightOn.value > 0.5 ? L.night.credit : null].filter(Boolean);
    toast(`Showing: ${list.join(' · ')}`, 6000);
  });
  $('#intro').addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'start') { const a = atlantis ?? [...legends].sort((x, y) => y.weight - x.weight)[0]; if (a) selectLegend(a, null, true); }
    if (act === 'tour') tour.start();
    if (act === 'enter') ctx.enterCity('gate');
    if (act === 'hunt') { $('#intro').classList.add('gone'); control.idle = false; }
    if (act === 'board') { $('#intro').classList.add('gone'); A?.openBoard(); }
    if (act === 'sea') { if (atlantis) setSea(-50, false); setSheet('sea'); drawSea(); }
  });
  control.onTap = (x, y) => { $('#results').classList.remove('open'); A?.hidePop(); cityBar?.tap(x, y); };
  addEventListener('keydown', (e) => { if (e.key !== 'Escape') return; if (tour.on) tour.stop(); else if (A?.boardOpen) A.closeBoard(); else if (walk?.on && st.sheet) setSheet(null); else A?.hidePop(); });
  canvas.addEventListener('pointerdown', () => { $('#intro').classList.add('gone'); $('#q').blur(); $('#results').classList.remove('open'); setMenu(false); });

  // ---------- search ----------
  const q = $('#q'), results = $('#results');
  let found = [], sel = 0;
  const drawResults = () => {
    const text = q.value.trim();
    if (!text) { results.classList.remove('open'); return; }
    const coords = parseCoords(text);
    found = coords ? [{ coords }] : search(legends, text, 7);
    if (!coords && text.length >= 3) found.push({ geocode: text });
    sel = Math.min(sel, found.length - 1);
    results.innerHTML = found.map((f, i) => {
      if (f.coords) return `<button class="res${i === sel ? ' sel' : ''}" data-i="${i}"><span class="bullet" style="--c:var(--blue)"></span><span><b>${formatLatLon(f.coords.lat, f.coords.lon, 4)}</b></span><small>Go to coordinates</small></button>`;
      if (f.geocode) return `<button class="res${i === sel ? ' sel' : ''}" data-i="${i}"><span class="bullet" style="--c:var(--faint)"></span><span>Find “<b>${esc(f.geocode)}</b>” on the map</span><small>Place search</small></button>`;
      return `<button class="res s-${f.legend.status}${i === sel ? ' sel' : ''}" data-i="${i}"><span class="bullet"></span><span><b>${esc(f.place ? f.place.name : f.legend.name)}</b>${f.place ? ` <em>${esc(f.legend.name)}</em>` : ''}</span><small>${esc(f.place ? STANDING[f.place.standing] ?? '' : KIND_ONE[f.legend.kind] ?? '')}</small></button>`;
    }).join('') || '<div class="res"><em>Nothing by that name yet. Add it: this community is open.</em></div>';
    results.classList.add('open');
  };
  const pick = async (f) => {
    if (!f) return;
    results.classList.remove('open');
    if (f.coords) { control.flyTo({ lon: f.coords.lon * DEG, lat: f.coords.lat * DEG, range: Math.min(control.range, 60000) }); q.blur(); return; }
    if (f.geocode) {
      try {
        const r = await fetch(`https://photon.komoot.io/api/?limit=1&lang=en&q=${encodeURIComponent(f.geocode)}`).then((x) => x.json());
        const hit = r.features?.[0];
        if (!hit) return toast(`No place called “${f.geocode}”`);
        const [lon, lat] = hit.geometry.coordinates, e = hit.properties.extent;
        const span = e ? Math.max(Math.abs(e[2] - e[0]) * Math.cos(lat * DEG), Math.abs(e[1] - e[3])) * 111000 : 30000;
        control.flyTo({ lon: lon * DEG, lat: lat * DEG, range: clamp(span * 1.6, 3000, 4e6) });
        toast(`${hit.properties.name ?? f.geocode}${hit.properties.country ? `, ${hit.properties.country}` : ''} · place search by Photon, © OpenStreetMap`, 3800);
        q.blur();
      } catch { toast('Place search is not answering'); }
      return;
    }
    q.value = f.legend.name;
    selectLegend(f.legend, f.place ?? null, true);
  };
  q.addEventListener('input', () => { sel = 0; drawResults(); });
  q.addEventListener('focus', () => { $('#intro').classList.add('gone'); drawResults(); });
  q.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, found.length - 1); drawResults(); e.preventDefault(); }
    if (e.key === 'ArrowUp') { sel = Math.max(sel - 1, 0); drawResults(); e.preventDefault(); }
    if (e.key === 'Escape') { results.classList.remove('open'); q.blur(); }
  });
  $('#search').addEventListener('submit', (e) => { e.preventDefault(); pick(found[sel]); });
  results.addEventListener('click', (e) => { const b = e.target.closest('[data-i]'); if (b) pick(found[Number(b.dataset.i)]); });

  // ---------- per frame ----------
  let tick = 0;
  const where = $('#where'), compassIcon = $('#compass svg');
  world.onFrame = (dt = 0.016) => {
    hall?.sync();
    meet?.tick(dt);
    tour?.tick();
    if (walk?.on) return;   // on foot nothing of the globe's own read-outs is shown
    placePins();
    A?.placeMarks();
    H?.tick();
    if (!control.idle) $('#intro').classList.add('gone');
    if (++tick % 8) return;
    const hov = control.hover && !control.pointers.size && matchMedia('(hover: hover)').matches ? control.pick(control.hover.x, control.hover.y) : null;
    const lat = hov ? hov.lat / DEG : control.lat / DEG, lon = hov ? hov.lon / DEG : control.lon / DEG;
    const h = hov ? hov.height : globe.heightAt(control.lon, control.lat);
    const sea = S.uSea.value;
    const ht = h == null ? '' : h < -0.6 ? `<b>${Math.round(-h).toLocaleString('en')} m</b> below today's sea${S.uWater.value > 0.5 && h < sea ? '' : ', dry'}` : `<b>${Math.round(h).toLocaleString('en')} m</b>`;
    where.innerHTML = `${formatLatLon(lat, lon, control.range < 50000 ? 4 : 2)} · ${ht} · eye ${formatDistance(control.altitude)}`;
    compassIcon.style.transform = `rotate(${(-control.heading / DEG).toFixed(1)}deg)`;
    stage.classList.toggle('turned', Math.abs(control.heading) > 0.02 || control.tilt > 0.03);
    stage.classList.toggle('dots', !!st.hunt && !st.legend);
    drawTag();
  };

  // ---------- start ----------
  const ctx = { world, data, st, $, esc, link, metres, toast, setSheet, closeSheet, body, eyebrow, sheet, stage, pinsEl, project, setSea, standCity, checkKnown, viewFor, drawTag, drawCity, strataColour, overlays, setOverlay, shortName, shareUrl: (extra, only) => shareUrl(extra, only), shareOut: (o) => shareOut(o), pulse: (place) => { pulsed = place ?? null; }, tourOn: () => false };
  ctx.sound = startSound(ctx);
  A = startAtlantis(ctx);
  ctx.leaveScene = () => A?.leaveScene();
  ctx.fitAt = (lat, lon) => A?.runFit(undefined, { lat, lon });
  // The hunt's read-out stands down while something else has the stage.
  ctx.busy = () => !!(A?.a.scene || A?.boardOpen || tour.on || !$('#intro').classList.contains('gone') || walk?.on || (world.city.active && control.range < 90000) || st.sheet === 'fit' || st.sheet === 'legend' || (st.sheet && stage.clientWidth < 760));
  H = A ? startHunt(ctx) : null;
  st.hunt = !!H;
  const tour = startTour(ctx, A, H);
  ctx.tour = () => tour.start();
  ctx.tourOn = () => tour.on;
  cityBar = startCityBar(ctx);
  ctx.cityBar = cityBar;
  // ---------- on foot: the city, the hall at its centre, and the people in it ----------
  // Where the city stands when nobody has stood it anywhere: on the open sea beyond the strait, where the text points
  // and where there is nothing (reconstruction.json, choice "home-site").
  ctx.home = HOME;
  Object.defineProperty(ctx, 'host', { get: () => st.host ?? null });
  walk = startWalk(ctx);
  hall = startHall(ctx, { A, H, walk });
  meet = startMeet(ctx, { walk });
  ctx.multiplayer = () => meet.choose();
  ctx.multiplayerOn = () => meet.state.state === 'on';
  ctx.walkOn = () => walk.on;
  ctx.leaveWalk = () => { if (walk.on) walk.leave(false); };
  ctx.onWalk = (on) => { if (on && st.sheet) setSheet(null); cityBar.sync(); drawTag(); };
  // at: 'gate' (before the wall of gold, looking in) or 'hall' (just inside the door). keep: the story is still telling its last line.
  ctx.walkPan = (v) => { walk.state.pan = v; };
  ctx.enterCity = (at = 'gate', keep = false, how = {}) => {
    if (!keep && tour.on) return tour.stop();
    A?.leaveScene(); A?.closeBoard(); st.legend = st.place = null; setSheet(null);
    $('#intro').classList.add('gone'); control.idle = false;
    if (!world.city.active) world.city.place({ lat: HOME.lat, lon: HOME.lon, bearing: HOME.bearing });
    if (Math.abs(S.uSea.value) > 0.6) setSea(0, false);
    const hl = world.city.city.hall;
    if (!keep) blink();
    walk.enter({ ...(at === 'hall' ? { x: 0, y: -(hl.RI - 6), look: [0, 0] } : { x: 0, y: -(hl.RG + 15), look: [0, 0] }), grab: !keep, ...how });
  };
  // Out of the city and up to the whole Earth, where the hunt is.
  ctx.openGlobe = (far = true) => {
    setSheet(null);
    const site = world.city.site;
    ctx.leaveWalk();
    if (far) { blink(); control.flyTo({ lon: (site?.lon ?? -30) * DEG, lat: (site?.lat ?? 25) * DEG, range: 1.35e7, tilt: 0, heading: 0 }, 3.6); }
    $('#b-city').hidden = !A;
  };
  const blink = () => { stage.classList.remove('blink'); void stage.offsetWidth; stage.classList.add('blink'); };
  $('#walk').addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'w-up') { walk.leave(true); }
    else if (act === 'w-hall') ctx.enterCity('hall');
    else if (act === 'w-globe') ctx.openGlobe();
  });
  $('#b-city').addEventListener('click', () => ctx.enterCity(world.city.active ? 'gate' : 'gate'));
  drawKinds();
  setSea(S.uSea.value);
  if (control.idle) control.jump({ range: 1.75e7 / Math.min(1, stage.clientWidth / stage.clientHeight) ** 0.55 });
  const apply = (p) => {
    if (!p) return;
    const n = (k) => (p[k] == null || p[k] === '' || !Number.isFinite(Number(p[k])) ? null : Number(p[k]));
    if (n('x') != null) S.uExag.value = clamp(n('x'), 1, 12);
    if (n('lens') != null) S.uLens.value = clamp(Math.round(n('lens')), 0, 2);
    if (n('sea') != null || p.dry) setSea(n('sea') ?? 0, !!p.dry);
    if (p.o) { const [id, form] = String(p.o).split('.'); const o = overlays.find((x) => x.id === id); if (o) setOverlay(o, form); }
    if (typeof p.city === 'string') { const c = p.city.split(',').map(Number); if (Number.isFinite(c[0]) && Number.isFinite(c[1])) standCity(c[0], c[1], Number.isFinite(c[2]) ? c[2] : 180, false); }
    const legend = p.l && legends.find((l) => l.id === p.l);
    if (legend) selectLegend(legend, legend.places.find((x) => x.id === p.p) ?? null, false);
    if (A?.a.scene) { if (['claimed', 'found'].includes(p.m)) A.setMode(p.m); if (n('s') != null) A.setStep(clamp(Math.round(n('s')) - 1, -1, A.a.scene.story.length - 1)); }
    const ll = typeof p.ll === 'string' && p.ll.split(',').map(Number);
    if (ll && ll.length === 2 && ll.every(Number.isFinite)) {
      // A link made at street level in Plato's city may ask for a nearer and flatter view than the open globe allows.
      control.jump({ lat: clamp(ll[0], -89, 89) * DEG, lon: ll[1] * DEG, range: clamp(n('r') ?? 2e6, world.city.active ? 14 : 150, control.maxRange), heading: (n('hd') ?? 0) * DEG, tilt: clamp(n('t') ?? 0, 0, world.city.active ? 88.5 : 84) * DEG });
      control.idle = false;
    } else if (legend && st.place) { control.jump(A?.a.scene ? world.evidence.viewOf(null) : viewFor(st.place)); control.idle = false; }
    else if (world.city.active) { control.jump(world.city.view()); control.idle = false; }
    if (p.ll || legend || world.city.active) $('#intro').classList.add('gone');
    if (p.board && A) { $('#intro').classList.add('gone'); A.openBoard(); }
    if (typeof p.hunt === 'string' && H) {
      const c = p.hunt.split(',').map(Number);
      if (c.length === 2 && c.every(Number.isFinite)) { $('#intro').classList.add('gone'); control.idle = false; const go = () => (H.ready ? H.claim(clamp(c[0], -85, 85), c[1], !p.ll) : setTimeout(go, 150)); go(); }
    }
    if (p.tour && A) tour.start();
    if ((p.walk || p.hall) && A) ctx.enterCity(p.hall ? 'hall' : 'gate');
  };
  apply(Object.fromEntries(new URLSearchParams(location.search)));
  hello().then((h) => { st.host = h; if (h?.launch && Object.keys(h.launch).length) apply(h.launch); meet?.arrive(); });
  if (atlantis) { $('#intro h1').textContent = 'Atlantis'; $('#intro [data-act="start"]').textContent = H ? 'Famous claims' : 'Explore the places'; }
  $('#intro [data-act="hunt"]').hidden = !H;
  if (H) $('#intro [data-act="tour"]').textContent = 'Watch the story';
  for (const b of document.querySelectorAll('#intro [data-atlantis], #menu [data-atlantis]')) b.hidden = !A;
  $('#intro [data-act="start"]').hidden = !!H;
  if (A) $('#m-claims').textContent = A.stats.places;
  if (!H) $('#brand').textContent = atlantis ? 'Where was Atlantis?' : 'Lost places';
  $('#intro [data-act="sea"]').hidden = !!A;
  $('#intro [data-act="enter"]').hidden = !A;
  $('#b-city').hidden = !A;
  return { st, selectLegend, setSea, setOverlay, overlays, apply, viewParams, A, H, tour, cityBar, walk, hall, meet, enterCity: ctx.enterCity, openGlobe: ctx.openGlobe, sound: ctx.sound };
};
