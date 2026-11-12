// The bar that appears while Plato's city stands on the globe: walk through it part by part with the passage for
// each, switch between what the text states and what we had to guess, open the temple, remove it. Pressing a part of
// the city itself shows its passage too. The city's own code (cityscene.js) answers the questions asked here; a
// control whose answer the city cannot give is left out.
import { DEG } from './geo.js';

export const startCityBar = (ctx) => {
  const { world, data, $, esc, stage } = ctx, { control } = world, city = world.city, el = $('#citybar');
  const rec = data.reconstruction;
  const notes = new Map([...(rec?.from_text ?? []).map((x) => [x.id, { ...x, kind: 'text' }]), ...(rec?.choices ?? []).map((x) => [x.id, { ...x, kind: 'choice' }])]);
  const b = { open: false, walk: -1, parts: [], ghost: false, cut: false, part: null };

  const partHtml = (id, extra) => {
    const n = notes.get(id) ?? extra;
    if (!n) return '';
    return `<p class="cb-what"><span class="tag ${n.kind === 'text' ? 't-confirmed' : 't-fringe'}">${n.kind === 'text' ? 'From the text' : 'Our choice'}</span> ${esc(n.what ?? id)}${n.ref ? ` <small>${esc(n.ref)}</small>` : ''}</p>${n.quote ? `<p class="quote">“${esc(n.quote)}”</p>` : n.why ? `<p class="cb-why">${esc(n.why)}</p>` : ''}`;
  };
  // For the story: show one part with what it is and the passage it comes from (and light it), with no buttons. null puts it away.
  const present = (id) => {
    b.shown = id && notes.has(id) ? id : null;
    el.classList.toggle('present', !!b.shown);
    if (b.shown) { el.innerHTML = partHtml(b.shown); city.highlight?.(null); } else if (!b.open) el.innerHTML = '';
    world.stamp++;
  };
  // Called often: it only acts when the city has come or gone.
  const sync = () => {
    // Not while on foot, not from far away, and not during a flight that is leaving for the whole Earth.
    const on = city.active && !ctx.tourOn() && !ctx.walkOn?.() && control.range < 90000 && !(control.fly && control.fly.target.range > 90000);
    if (on === b.open) return;
    b.open = on;
    el.classList.toggle('open', on);
    stage.classList.toggle('city-on', on);
    if (on) draw(); else { b.walk = -1; b.part = null; b.ghost = b.cut = false; }
  };
  const draw = () => {
    if (!b.open) return;
    const can = (m) => typeof city[m] === 'function';
    const walking = b.walk >= 0 && b.parts[b.walk];
    el.innerHTML = `
      <div class="cb-h"><b>Plato's city, drawn from his text</b><span>${walking ? `${b.walk + 1} of ${b.parts.length}` : ''}</span></div>
      ${walking ? partHtml(walking.id, walking) : b.part ? partHtml(b.part.id, b.part) : ''}
      <div class="bar">
        ${can('parts') && can('viewOf') ? (walking ? '<button class="btn" data-act="cb-prev">Back</button><button class="btn primary" data-act="cb-next">Next</button><button class="btn" data-act="cb-end">Done</button>' : '<button class="btn primary" data-act="cb-foot">Walk</button><button class="btn" data-act="cb-walk">Tour</button>') : ''}
        ${walking ? '' : `${can('setGhost') ? `<button class="btn${b.ghost ? ' on' : ''}" data-act="cb-ghost">Text only</button>` : ''}${can('cutaway') ? `<button class="btn${b.cut ? ' on' : ''}" data-act="cb-cut">${b.cut ? 'Close temple' : 'Open temple'}</button>` : ''}<button class="btn" data-act="cb-notes">List</button><button class="ib" data-act="cb-off" aria-label="Remove the city"><svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>`}
      </div>`;
  };
  const go = (i) => {
    b.walk = i; b.part = null;
    const p = b.parts[i];
    if (p) { city.highlight?.(p.id); const v = city.viewOf(p.id); if (v) control.flyTo(v, 2.4); } else city.highlight?.(null);
    world.stamp++;
    draw();
  };
  el.addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'cb-foot') ctx.enterCity?.('gate');
    else if (act === 'cb-walk') { b.parts = city.parts() ?? []; if (b.parts.length) go(0); }
    else if (act === 'cb-next') go(b.walk + 1 >= b.parts.length ? -1 : b.walk + 1);
    else if (act === 'cb-prev') go(Math.max(0, b.walk - 1));
    else if (act === 'cb-end') { go(-1); control.flyTo(city.view(), 2.4); }
    else if (act === 'cb-ghost') { b.ghost = !b.ghost; city.setGhost(b.ghost); world.stamp++; draw(); }
    else if (act === 'cb-cut') { b.cut = !b.cut; city.cutaway(b.cut); world.stamp++; const v = b.cut && city.viewOf?.('temple'); if (v) control.flyTo({ ...v, tilt: Math.min(v.tilt ?? 0.6, 40 * DEG) }, 2.2); draw(); }
    else if (act === 'cb-notes') ctx.drawCity();
    else if (act === 'cb-off') { city.highlight?.(null); city.remove(); world.stamp++; sync(); ctx.drawTag(); }
  });
  // Pressing a part of the city shows the passage it comes from.
  const tap = (x, y) => {
    if (!city.active || typeof city.pick !== 'function' || b.walk >= 0) return false;
    const hit = city.pick(x, y);
    b.part = hit ?? null;
    city.highlight?.(hit?.id ?? null);
    world.stamp++;
    draw();
    return !!hit;
  };
  return { sync, draw, tap, present, state: b };
};
