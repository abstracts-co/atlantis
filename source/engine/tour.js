// The story: Plato's tale told over the globe, and at its end the visitor is standing in the hall. Nothing is left to
// imagine where the page can show it: the city is on screen when it is named, the temple opens, the city goes under,
// numbers are written large as they are said, real places are visited with what was claimed and found drawn on them,
// and the page's own cards (a part's passage, the hunt's read-out) are shown in place. The sentences come from
// storytext.js; this file moves the globe to each one and, when there is sound, has it spoken.
import { DEG } from './geo.js';
import { storyLines, lineKey } from './storytext.js';
import { OUTCOME } from './board.js';

const PILLARS = { lon: -5.61, lat: 35.95 };   // the Strait of Gibraltar (Wikidata Q36124), where a label is set for "the Pillars of Heracles"

export const startTour = (ctx, A, H) => {
  const { world, data, $, esc, setSheet, st, stage } = ctx, { control } = world, el = $('#tour'), city = world.city;
  const t = { on: false, i: 0, steps: [], timer: null, paused: false, started: 0, left: 0, later: [], sink: null, label: null, offset: 0, drag: null };
  const read = (text, least = 0) => Math.max(least, 2600 + text.length * 48);
  // Something to do a little into a sentence. Forgotten if the story has moved on or stopped by then.
  // When the story is entered part-way through a sentence (the scrubber), what was due before that point happens at once, in order.
  const after = (ms, f) => { const i = t.i, wait = ms - t.offset * 1000; if (wait <= 0) { f(); return; } t.later.push(setTimeout(() => { if (t.on && t.i === i) f(); }, wait)); };

  // ---------- what is laid over the globe ----------
  // A picture of a real thing, with its caption (data/story-media.json): one at a time, at the times the file gives.
  const shot = $('#shot'), stat = $('#stat'), dots = $('#dots'), mark = $('#t-mark'), media = data.storyMedia ?? [];
  const src = (file) => globalThis.__STORY__?.[file] ?? `${globalThis.__ASSETS__ || './'}${file}`;
  const hide = () => shot.classList.remove('on');
  const pics = new Map();   // each picture loaded and decoded when the story starts, then only shown
  const picture = (m) => {
    const img = pics.get(m.file) ?? Object.assign(new Image(), { src: src(m.file) });
    img.alt = '';
    shot.replaceChildren(img, Object.assign(document.createElement('figcaption'), { textContent: m.caption }));
    shot.style.setProperty('--hold', `${m.for}s`);
    shot.dataset.where = m.where ?? 'right';
    shot.classList.remove('on'); void shot.offsetWidth; shot.classList.add('on');
  };
  // A number written large while it is said.
  const number = (n) => { stat.innerHTML = `<b>${esc(n.big)}</b>${n.small ? `<span>${esc(n.small)}</span>` : ''}`; stat.classList.remove('on'); void stat.offsetWidth; stat.classList.add('on'); };
  // Every search on record as a dot, in date order, coloured by how it ended, arriving one after another.
  const strip = (list, ms) => { dots.innerHTML = list.map((status, i) => `<i class="d-${OUTCOME[status]?.tone ?? 'mut'}" style="animation-delay:${Math.round((i / list.length) * ms)}ms"></i>`).join(''); dots.classList.add('on'); };
  const clearOver = () => { hide(); stat.classList.remove('on'); dots.classList.remove('on'); t.label = null; mark.classList.remove('on'); ctx.cityBar?.present(null); stage.classList.remove('tour-hunt'); if (H) H.state.forced = false; };
  // A name pinned to a place on the globe for as long as its sentence lasts.
  const label = (place, text) => { t.label = place; mark.textContent = text; mark.classList.add('on'); };
  // A dip to dark (0.24 s down, a beat, 0.36 s up): the view is moved while nothing shows, then `then` sets it moving.
  const cut = (view, then) => {
    stage.classList.remove('dip'); void stage.offsetWidth; stage.classList.add('dip');
    t.later.push(setTimeout(() => { if (!t.on) return; control.jump(view); world.stamp++; then?.(); }, 250));
  };
  const xy = [0, 0];
  // Once a frame: the pinned name follows its place, and the city goes under when it is sinking.
  const tick = () => {
    if (!t.on) return;
    paint();
    if (t.label) { const ok = ctx.project(t.label.lon, t.label.lat, xy, 0); mark.style.opacity = ok ? '' : '0'; if (ok) mark.style.transform = `translate(${xy[0]}px, ${xy[1]}px) translate(-50%, -150%)`; }
    const s = t.sink, g = city.city?.group;
    if (s && g) { const k = Math.min(1, (performance.now() - s.from) / s.ms); g.position.z = -s.deep * k * k; g.updateMatrixWorld(true); world.stamp++; if (k >= 1) t.sink = null; }   // left under the sea: the next sentence takes it away
  };
  const afloat = () => { t.sink = null; const g = city.city?.group; if (g && g.position.z) { g.position.z = 0; g.updateMatrixWorld(true); } };

  const build = () => {
    const far = (lon, lat, range, secs = 3, tilt = 0) => control.flyTo({ lon: lon * DEG, lat: lat * DEG, range, tilt: tilt * DEG, heading: 0 }, secs);
    const clear = () => { A.leaveScene(); st.legend = st.place = null; setSheet(null); };
    const home = ctx.home;
    const stand = () => { afloat(); if (!city.active) { city.place({ lat: home.lat, lon: home.lon, bearing: home.bearing }); world.stamp++; } city.cutaway?.(false); };
    const part = (id, range, secs = 1.5, extra = {}) => { const v = city.viewOf(id); if (v) control.flyTo({ ...v, ...(range ? { range } : {}), ...extra }, secs); ctx.cityBar?.present(id); };
    const scene = (id, secs = 2.6) => { const site = (data.evidence ?? []).find((x) => x.id === id), p = A.atlantis.places.find((x) => x.id === (site?.place ?? id)); if (!p) return; A.openPlace(p, true); A.setMode('all'); setSheet(null); const v = world.evidence.viewOf(null); if (v) control.flyTo(v, secs); };
    // What the globe does at each sentence. `len` is how long the sentence takes to say, in seconds.
    const go = {
      // It opens on the city itself, turning slowly: the thing the story is about, before a word of it.
      // It opens on the city itself, already moving: a slow turn and push-in, the thing the story is about before a word of it.
      legend: (line, len) => { clear(); H?.setGlow(0); ctx.setSea(0, false); stand(); const v = city.view(); control.jump({ ...v, range: 7800, heading: v.heading - 0.35 }); control.flyTo({ ...v, range: 5400, heading: v.heading + 0.55 }, len + 0.6); },
      // From the city to Greece is a jump of a thousand times in height: a dip to dark, not a flight through half-drawn sea.
      tale: (line, len) => cut({ lon: 21 * DEG, lat: 37.5 * DEG, range: 5.6e6, tilt: 8 * DEG, heading: 0 }, () => far(19, 37, 4.8e6, len, 10)),
      island: (line, len) => { far(PILLARS.lon - 6, PILLARS.lat, 2.4e6, 2.6, 16); after(2700, () => label(PILLARS, 'The Pillars of Heracles')); after(len * 640, () => { mark.classList.remove('on'); t.label = null; stand(); const v = city.view(); cut({ ...v, range: 11000 }, () => control.flyTo({ ...v, range: 8600, heading: v.heading + 0.2 }, 2.2)); }); },
      // Three views, as the sentence names them: the rings from the air, the temple with its roof lifted off, the wall of orichalcum.
      city: (line, len) => {
        stand(); const v = city.view(); control.flyTo({ ...v, range: 7000, heading: v.heading + 0.25 }, len * 0.4);
        after(len * 400, () => part('temple', 230, 1.5, { tilt: 62 * DEG }));
        after(len * 400 + 1700, () => { city.cutaway?.(true); world.stamp++; });
        after(len * 700, () => { city.cutaway?.(false); part('wall-orichalcum', 200, 1.5); });
      },
      // The city goes under: it is lowered beneath the sea while the view lifts away.
      fall: (line, len) => { ctx.cityBar?.present(null); stand(); const v = city.view(); control.flyTo({ ...v, range: 8200, tilt: 52 * DEG }, 1.6); ctx.sound?.sfx('rise', 0.3); after(1500, () => { t.sink = { from: performance.now(), ms: Math.max(3000, len * 1000 - 1400), deep: 46 };   /* down until the sentence's last word */ control.flyTo({ ...v, range: 15000, tilt: 40 * DEG, heading: v.heading + 0.3 }, len - 1.2); }); },
      date: () => { afloat(); city.remove(); H?.setGlow(0); A.seaTo(-50); cut({ lon: 3 * DEG, lat: 54 * DEG, range: 3.6e6, tilt: 16 * DEG, heading: 0 }, () => control.flyTo({ lon: 3 * DEG, lat: 54 * DEG, range: 3.1e6, tilt: 18 * DEG, heading: 0 }, 4)); },
      // The sea comes back up and everything that went under lights up: here, then on the far side of the Earth.
      sank: (line, len) => { A.seaTo(0); H?.setGlow(1); ctx.sound?.sfx('rise', 0.2); after(len * 380, () => far(108, 2, 6.2e6, len * 0.26, 6)); after(len * 690, () => far(-172, 62, 5.6e6, len * 0.28, 6)); },
      // The page's own read-out, on the best match on Earth.
      scored: (line, len) => { const b = line.best; control.flyTo({ lon: b.lon * DEG, lat: b.lat * DEG, range: 1.0e6, tilt: 30 * DEG, heading: 0 }, 3.8); after(3900, () => { if (H) { H.state.forced = true; stage.classList.add('tour-hunt'); } });   /* the read-out once there, not on the way */ after(len * 500, () => { H?.scan(b.lon, b.lat); ctx.sound?.sfx('ping', 0.6); }); },
      // Two of the places people named, with what was claimed and what was found drawn on the ground, then back out.
      search: (line, len) => { stage.classList.remove('tour-hunt'); if (H) H.state.forced = false; scene('santorini', 2.6); after(len * 420, () => scene('richat', 2.8)); after(len * 830, () => { clear(); far(-18, 30, 9.5e6, 2.6); }); },
      // The city again, part by part, each with the line of the text it comes from.
      built: (line, len) => { clear(); H?.setGlow(0.5); ctx.setSea(0, false); stand(); control.jump({ ...city.view(), range: 5200 }); part('harbours', null, 1.3); after(len * 340, () => part('bridges', null, 1.2)); after(len * 670, () => part('temple', 260, 1.2)); },
      // Up to the wall of gold, then through it: the inside of the hall, turning past the boards.
      hall: (line, len) => { ctx.cityBar?.present(null); stand(); const v = city.viewOf('shrine'); if (v) control.flyTo({ ...v, range: 150, tilt: 64 * DEG, heading: v.heading + Math.PI }, len * 0.34); /* from the north, clear of the temple's roof */ after(len * 360, () => { ctx.sound?.sfx('reveal', 0.3); ctx.enterCity?.('hall', true, { pan: 0.34, x: 4, y: -4, look: [-12, 6] }); }); },
      turn: () => ctx.enterCity?.('hall', true),
    };
    return storyLines({ worldfit: H ? data.worldfit : null, cas: data.cas }).map((line) => ({ ...line, go: (len) => go[line.id]?.(line, len) }));
  };

  // A long sentence is shown a part at a time, each part for its share of the time, so the words on screen are the words being said.
  const beats = (text) => text.split(/(?<=[.!?:]”?)\s+(?=[A-Z“])/).filter(Boolean);
  // ---------- the bar: the words, and a scrubber over the whole story ----------
  // The scrubber is one track for the whole story, a mark at the start of each sentence. Press or drag anywhere on it to go there.
  const whole = () => t.steps.reduce((n, s) => n + s.total, 0);
  const startOf = (i) => t.steps.slice(0, i).reduce((n, s) => n + s.total, 0);
  const now = () => startOf(t.i) + (t.steps[t.i].total - (t.paused ? t.left : Math.max(0, t.left - (performance.now() - t.started))));
  const draw = (words) => {
    const s = t.steps[t.i];
    if (words !== undefined) t.words = words;
    const W = whole();
    el.innerHTML = `<p>${esc(t.words ?? s.say)}</p><div class="bar"><button class="ib t-play" data-act="tour-pause" aria-label="${t.paused ? 'Play' : 'Pause'}">${t.paused ? '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M3.5 2.2v9.6L11.6 7z" fill="currentColor"/></svg>' : '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="3" y="2.4" width="2.8" height="9.2" rx="1"/><rect x="8.2" y="2.4" width="2.8" height="9.2" rx="1"/></svg>'}</button><div class="scrub" role="slider" tabindex="0" aria-label="Story" aria-valuemin="0" aria-valuemax="${Math.round(W / 1000)}" aria-valuenow="${Math.round(now() / 1000)}">${t.steps.slice(1).map((_, k) => `<i style="left:${(startOf(k + 1) / W) * 100}%"></i>`).join('')}<b></b><span></span></div><button class="linkish" data-act="tour-stop">${t.i === t.steps.length - 1 ? 'Close' : 'Skip'}</button></div>`;
    paint();
  };
  // Once a frame while the story runs: the scrubber's fill and knob follow the time.
  const paint = () => {
    const bar = el.querySelector('.scrub');
    if (!bar) return;
    const k = Math.max(0, Math.min(1, (t.drag ?? now()) / whole()));
    bar.querySelector('b').style.width = `${k * 100}%`;
    bar.querySelector('span').style.left = `${k * 100}%`;
  };
  const arm = () => { clearTimeout(t.timer); t.started = performance.now(); if (!t.paused) t.timer = setTimeout(next, t.left); };
  // Go to a sentence, from `from` seconds into it.
  const show = (i, from = 0) => {
    t.i = i;
    const s = t.steps[i];
    for (const id of t.later) clearTimeout(id);
    t.later = [];
    clearOver();
    // Gone back to before the walk began: off foot, and the city afloat again.
    if (!['hall', 'turn'].includes(s.id) && ctx.walkOn?.()) ctx.leaveWalk?.();
    afloat();
    const len = s.len;
    t.offset = Math.max(0, Math.min(from, len - 0.05));
    ctx.sound?.say(s.say, t.offset);
    t.left = s.total - t.offset * 1000;
    t.started = performance.now();
    s.go(len);
    for (const m of media.filter((x) => x.line === s.id)) { if (m.at + m.for > t.offset) { after(m.at * 1000, () => picture(m)); after((m.at + m.for) * 1000, hide); } }
    for (const n of s.show ?? []) { if (n.dots) strip(n.dots, Math.max(0, len - t.offset) * 620); else if (n.at + n.for > t.offset) { after(n.at * 1000, () => number(n)); after((n.at + n.for) * 1000, () => stat.classList.remove('on')); } }
    const parts = beats(s.say), all = parts.reduce((n, p) => n + p.length, 0);
    let at = 0, first = parts[0];
    parts.forEach((p, k) => { const when = (at / all) * len; if (k && when <= t.offset) first = p; else if (k) after(when * 1000, () => draw(p)); at += p.length; });
    t.offset = 0;
    draw(first);
    if (t.paused) { t.paused = false; }
    arm();
  };
  // Go to a time in the whole story, in milliseconds.
  const seek = (ms) => {
    const W = whole(), at = Math.max(0, Math.min(W - 400, ms));
    let i = 0; while (i < t.steps.length - 1 && startOf(i + 1) <= at) i++;
    show(i, (at - startOf(i)) / 1000);
  };
  el.addEventListener('pointerdown', (e) => {
    const bar = e.target.closest('.scrub');
    if (!bar) return;
    e.preventDefault();
    bar.setPointerCapture?.(e.pointerId);
    const at = (x) => { const r = bar.getBoundingClientRect(); return Math.max(0, Math.min(1, (x - r.left) / r.width)) * whole(); };
    t.drag = at(e.clientX); paint();
    const move = (ev) => { t.drag = at(ev.clientX); paint(); };
    const up = (ev) => { bar.removeEventListener('pointermove', move); bar.removeEventListener('pointerup', up); bar.removeEventListener('pointercancel', up); const to = at(ev.clientX); t.drag = null; seek(to); };
    bar.addEventListener('pointermove', move); bar.addEventListener('pointerup', up); bar.addEventListener('pointercancel', up);
  });
  addEventListener('keydown', (e) => {
    if (!t.on || e.target.closest?.('input, textarea')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { seek(now() + (e.key === 'ArrowLeft' ? -5000 : 5000)); e.preventDefault(); }
    else if (e.key === ' ') { el.querySelector('[data-act="tour-pause"]')?.click(); e.preventDefault(); }
  });
  const next = () => (t.i >= t.steps.length - 1 ? stop() : show(t.i + 1));
  const start = () => {
    if (!A || t.on) return;
    ctx.leaveWalk?.();
    t.steps = build();
    // How long each sentence takes: its recording when there is one, a reading pace otherwise.
    for (const s of t.steps) { const clip = data.audio?.narration?.[lineKey(s.say)]; s.len = clip ? clip.seconds : read(s.say, s.least) / 1000; s.total = clip ? Math.max(clip.seconds * 1000 + 700, 1500) : read(s.say, s.least); }
    ctx.sound?.prime(t.steps.map((s) => s.say));
    for (const m of media) if (!pics.has(m.file)) { const img = new Image(); img.decoding = 'sync'; img.src = src(m.file); img.decode?.().catch(() => {}); pics.set(m.file, img); }
    t.on = true; t.paused = false;
    $('#intro').classList.add('gone');
    A.closeBoard();
    el.classList.add('open');
    stage.classList.add('touring');
    control.idle = false;
    ctx.sound?.bed(true);
    show(0);
  };
  // Ending it, by its last sentence or by the visitor: either way they are left on foot in the hall, facing the globe.
  const stop = () => {
    if (!t.on) return;
    clearTimeout(t.timer); for (const id of t.later) clearTimeout(id); t.later = [];
    t.on = false;
    el.classList.remove('open');
    stage.classList.remove('touring');
    clearOver(); afloat();
    ctx.sound?.hush(); ctx.sound?.bed(false);
    A.leaveScene(); st.legend = st.place = null; setSheet(null);
    H?.setGlow(1);
    if (Math.abs(world.globe.shared.uSea.value) > 0.6) ctx.setSea(0, false);
    city.cutaway?.(false);
    if (ctx.walkOn?.()) ctx.walkPan?.(0); else ctx.enterCity?.('hall');
  };
  el.addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'tour-stop') stop();
    else if (act === 'tour-next') next();
    else if (act === 'tour-pause') {
      if (t.paused) { t.paused = false; ctx.sound?.resume(); arm(); } else { t.paused = true; clearTimeout(t.timer); ctx.sound?.pause(); t.left = Math.max(600, t.left - (performance.now() - t.started)); }
      draw();
    }
  });
  return { start, stop, next, tick, get on() { return t.on; }, get step() { return t.i; }, get steps() { return t.steps; } };
};
