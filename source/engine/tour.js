// The story: Plato's tale told over the globe, one sentence at a time, and at its end the visitor is standing in the
// city at the gate of the hall. The sentences come from storytext.js (his own words where he has them, every number
// from the data); this file moves the globe to each one and, when there is sound, has it spoken.
import { DEG } from './geo.js';
import { storyLines } from './storytext.js';

export const startTour = (ctx, A, H) => {
  const { world, data, $, esc, setSheet, st } = ctx, { control } = world, el = $('#tour');
  const t = { on: false, i: 0, steps: [], timer: null, paused: false, started: 0, left: 0, later: [] };
  const read = (text, least = 0) => Math.max(least, 2600 + text.length * 48);
  // Pictures shown over the globe while a sentence is told (data/story-media.json): a real object or photograph each,
  // with its caption. One at a time, at the times the file gives.
  const shot = $('#shot'), media = data.storyMedia ?? [];
  const src = (file) => globalThis.__STORY__?.[file] ?? `${globalThis.__ASSETS__ || './'}${file}`;
  const hide = () => shot.classList.remove('on');
  const picture = (m) => {
    shot.innerHTML = `<img src="${esc(src(m.file))}" alt=""><figcaption>${esc(m.caption)}</figcaption>`;
    shot.style.setProperty('--hold', `${m.for}s`);
    shot.classList.remove('on'); void shot.offsetWidth; shot.classList.add('on');
  };
  // Something to do a little into a sentence. Forgotten if the story has moved on or stopped by then.
  const after = (ms, f) => { const i = t.i; t.later.push(setTimeout(() => { if (t.on && t.i === i) f(); }, ms)); };

  const build = () => {
    const far = (lon, lat, range, secs = 3, tilt = 0) => control.flyTo({ lon: lon * DEG, lat: lat * DEG, range, tilt: tilt * DEG, heading: 0 }, secs);
    const clear = () => { A.leaveScene(); st.legend = st.place = null; setSheet(null); };
    const home = ctx.home, city = world.city;
    const stand = () => { if (!city.active) { city.place({ lat: home.lat, lon: home.lon, bearing: home.bearing }); world.stamp++; } };
    // What the globe does at each sentence.
    const go = {
      tale: () => { clear(); city.remove(); world.stamp++; H?.setGlow(0); ctx.setSea(0, false); far(22, 37, 7.5e6, 3.2, 10); },
      island: () => far(home.lon - 4, home.lat, 5.2e6, 4.4, 14),
      // Three views, as the sentence names them: the rings from the air, the temple in its silver, the wall of orichalcum.
      city: () => {
        stand(); control.flyTo({ ...city.view(), range: 9500 }, 4.6);
        after(5200, () => { const v = city.viewOf('temple'); if (v) control.flyTo({ ...v, range: 190, tilt: 74 * DEG }, 1.6); });
        after(8400, () => { const v = city.viewOf('wall-orichalcum'); if (v) control.flyTo({ ...v, range: 210 }, 1.6); });
      },
      fall: () => { ctx.sound?.sfx('rise', 0.3); control.flyTo({ lon: home.lon * DEG, lat: home.lat * DEG, range: 2.6e5, tilt: 30 * DEG, heading: 0.4 }, 6.5); after(3400, () => { city.remove(); world.stamp++; }); },
      date: () => { city.remove(); H?.setGlow(0); A.seaTo(-50); control.flyTo({ lon: 1 * DEG, lat: 53 * DEG, range: 3.4e6, tilt: 18 * DEG, heading: 0 }, 4); },
      sank: () => { A.seaTo(0); H?.setGlow(1); ctx.sound?.sfx('rise', 0.2); },
      scored: (line) => { const b = line.best; control.flyTo({ lon: b.lon * DEG, lat: b.lat * DEG, range: 1.0e6, tilt: 32 * DEG, heading: 0 }, 4.2); after(4400, () => { H.scan(b.lon, b.lat); ctx.sound?.sfx('ping', 0.6); }); },
      search: () => far(-20, 32, 1.05e7, 4),
      built: () => { H?.setGlow(0.5); ctx.setSea(0, false); stand(); control.flyTo({ ...city.view(), range: 5200, tilt: 62 * DEG }, 5); },
      hall: () => { stand(); const v = city.viewOf('shrine'); if (v) control.flyTo({ ...v, range: 190, tilt: 64 * DEG, heading: v.heading + 0.5 }, 6); ctx.sound?.sfx('reveal', 0.3); },
      turn: () => ctx.enterCity?.('gate', true),
    };
    return storyLines({ worldfit: H ? data.worldfit : null, cas: data.cas }).map((line) => ({ ...line, go: () => go[line.id]?.(line) }));
  };

  const draw = () => {
    const s = t.steps[t.i];
    el.innerHTML = `<p class="${s.tone ? `w-${s.tone}` : ''}">${esc(s.say)}</p><div class="bar"><div class="dots">${t.steps.map((_, i) => `<i class="${i < t.i ? 'done' : i === t.i ? 'on' : ''}"><b></b></i>`).join('')}</div><button class="linkish" data-act="tour-pause">${t.paused ? 'Play' : 'Pause'}</button><button class="linkish" data-act="tour-next">${t.i === t.steps.length - 1 ? 'Finish' : 'Next'}</button><button class="linkish" data-act="tour-stop">${t.i === t.steps.length - 1 ? 'Close' : 'Skip to the city'}</button></div>`;
    const bar = el.querySelector('.dots .on b'), total = s.total;
    if (bar && !t.paused) { bar.style.transition = 'none'; bar.style.width = `${(1 - t.left / total) * 100}%`; requestAnimationFrame(() => { bar.style.transition = `width ${t.left}ms linear`; bar.style.width = '100%'; }); }
    else if (bar) bar.style.width = `${(1 - t.left / total) * 100}%`;
  };
  const arm = () => { clearTimeout(t.timer); t.started = performance.now(); if (!t.paused) t.timer = setTimeout(next, t.left); };
  const show = (i) => {
    t.i = i;
    const s = t.steps[i];
    hide();
    s.go();
    for (const m of media.filter((x) => x.line === s.id)) { after(m.at * 1000, () => picture(m)); after((m.at + m.for) * 1000, hide); }
    // Spoken, a sentence stays up for as long as it takes to say, and a breath more.
    const spoken = ctx.sound?.say(s.say);
    s.total = t.left = spoken ? Math.max(spoken * 1000 + 900, 1500) : read(s.say, s.least);
    draw(); arm();
  };
  const next = () => (t.i >= t.steps.length - 1 ? stop() : show(t.i + 1));
  const start = () => {
    if (!A || t.on) return;
    ctx.leaveWalk?.();
    t.steps = build();
    ctx.sound?.prime(t.steps.map((s) => s.say));
    for (const m of media) new Image().src = src(m.file);   // fetched ahead, so each appears on its word
    t.on = true; t.paused = false;
    $('#intro').classList.add('gone');
    A.closeBoard();
    el.classList.add('open');
    ctx.stage.classList.add('touring');
    control.idle = false;
    ctx.sound?.bed(true);
    show(0);
  };
  // Ending it, by its last sentence or by the visitor: either way they are left on foot at the gate of the hall.
  const stop = () => {
    if (!t.on) return;
    clearTimeout(t.timer); for (const id of t.later) clearTimeout(id); t.later = [];
    t.on = false;
    el.classList.remove('open');
    ctx.stage.classList.remove('touring');
    hide();
    ctx.sound?.hush(); ctx.sound?.bed(false);
    A.leaveScene(); st.legend = st.place = null; setSheet(null);
    H?.setGlow(1);
    if (Math.abs(world.globe.shared.uSea.value) > 0.6) ctx.setSea(0, false);
    if (!ctx.walkOn?.()) ctx.enterCity?.('gate');
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
  return { start, stop, next, get on() { return t.on; }, get step() { return t.i; }, get steps() { return t.steps; } };
};
