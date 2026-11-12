// The hunt. Every 10 km of the Earth has been scored against the five things Plato says that the shape of the land
// can answer (build/make-worldfit.mjs writes data/worldfit.png and worldfit.json). Here the sunken land that matches
// glows on the globe, a reticle reads the score of whatever is under it, and "Claim this spot" turns a spot into a
// result a person can post. A match to the landscape is not a city, and the card says so every time.
import * as THREE from 'three';
import { DEG, toDir, clamp, formatLatLon } from './geo.js';

// The clues, in the order of their bits in the picture, each with the claim in data/plato.json it comes from.
const CLUES = [
  { key: 'sank', claim: 'sank-in-a-day-and-night', name: 'It sank', word: 'sank', yes: "Land at Plato's date, open sea today.", no: 'It did not go under.' },
  { key: 'atlantic', claim: 'beyond-pillars', name: 'Beyond the Pillars', word: 'beyond the Pillars', yes: 'On the Atlantic side, outside the strait.', no: 'Not on the Atlantic, or inside the strait.' },
  { key: 'plain', claim: 'great-plain', name: 'Great plain', word: 'great plain', yes: 'Level low ground of the size he gives.', no: 'No level plain of his size here.' },
  { key: 'mountains', claim: 'mountains-shelter-north', name: 'Mountains north', word: 'mountains north', yes: 'Higher ground on the north side than the south.', no: 'No mountains sheltering it from the north.' },
  { key: 'island', claim: 'larger-than-libya-and-asia', name: 'An island', word: 'island', yes: 'The land it stood on was an island then.', no: 'Part of a continent then, not an island.' },
];
const bitsOf = (n) => { let c = 0; for (let b = n; b; b >>= 1) c += b & 1; return c; };
const shorten = (name) => { const p = (name ?? '').split(',').map((s) => s.trim()).filter(Boolean); return p.length > 2 ? `${p[0]}, ${p[p.length - 1]}` : p.join(', '); };

export const startHunt = (ctx) => {
  const { world, data, st, $, esc, link, toast, setSheet, body, eyebrow, stage } = ctx, { control, globe } = world, S = globe.shared;
  const wf = data.worldfit, cas = data.cas;
  if (!wf) return null;
  const el = $('#hunt'), reticle = $('#reticle');
  const h = { ready: false, n: 0, score: null, bits: null, state: null, on: false, last: '', claim: null, glow: 1 };
  const claimOf = (id) => cas?.claims.find((c) => c.id === id);
  const refOf = (c) => (claimOf(c.claim)?.ref ?? '').split(';')[0];

  // ---------- the picture: one pixel a cell ----------
  const load = async () => {
    const file = world.phone ? 'worldfit-2k.png' : 'worldfit.png';
    const r = await fetch(globalThis.__WORLDFIT__?.[file] ?? (globalThis.__ASSETS__ || './') + file);
    if (!r.ok) throw new Error(`worldfit: HTTP ${r.status}`);
    const bitmap = await createImageBitmap(await r.blob(), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    const n = bitmap.width, strip = 512;
    const score = new Uint8Array(n * n), bits = new Uint8Array(n * n), state = new Uint8Array(n * n);
    const canvas = typeof OffscreenCanvas === 'undefined' ? Object.assign(document.createElement('canvas'), { width: n, height: strip }) : new OffscreenCanvas(n, strip);
    const g = canvas.getContext('2d', { willReadFrequently: true });
    // Read in strips: the whole picture at once would take 67 MB for a moment.
    for (let y0 = 0; y0 < n; y0 += strip) {
      g.clearRect(0, 0, n, strip);
      g.drawImage(bitmap, 0, y0, n, strip, 0, 0, n, strip);
      const px = g.getImageData(0, 0, n, strip).data;
      for (let i = 0, o = y0 * n; i < n * strip; i++, o++) { score[o] = px[i * 4]; bits[o] = px[i * 4 + 1]; state[o] = px[i * 4 + 2]; }
    }
    bitmap.close?.();
    // What is drawn is the score spread a little into its neighbours, so matching land glows with soft edges and not as squares.
    const glow = new Uint8Array(n * n);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      let sum = 0;
      for (let dy = -1; dy <= 1; dy++) { const yy = y + dy < 0 ? 0 : y + dy >= n ? n - 1 : y + dy; for (let dx = -1; dx <= 1; dx++) sum += score[yy * n + ((x + dx + n) % n)] * (dx || dy ? 1 : 2); }
      glow[y * n + x] = sum * 5;   // ten shares in all, fifty to a clue
    }
    const tex = new THREE.DataTexture(glow, n, n, THREE.RedFormat, THREE.UnsignedByteType);
    tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
    tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.generateMipmaps = true; tex.needsUpdate = true;
    S.tHeat.value = tex;
    S.uHeatLod.value = n < wf.grid.size ? -1 : 0;
    Object.assign(h, { n, bits, state, ready: true });
    world.stamp++;
  };
  load().catch((e) => { console.warn(e.message); el.classList.remove('open'); });

  // What the grid says about a point.
  const fit = (lon, lat) => {
    if (!h.ready) return null;
    const n = h.n, x = clamp(Math.floor(((lon + 180) / 360) * n), 0, n - 1), l = clamp(lat, -85, 85) * DEG;
    const y = clamp(Math.floor(((1 - Math.log(Math.tan(l) + 1 / Math.cos(l)) / Math.PI) / 2) * n), 0, n - 1);
    const b = h.bits[y * n + x], state = h.state[y * n + x];
    return { state, bits: b, score: state === 0 ? 0 : bitsOf(b), clues: CLUES.map((c, j) => !!(b & (1 << j))) };
  };

  // ---------- the read-out under the reticle ----------
  // One small bar: the score, five lights, one button. Everything else is in the menu.
  const TAG = { sank: 'sank', atlantic: 'Pillars', plain: 'plain', mountains: 'mountains', island: 'island' };
  const drawHud = () => {
    el.innerHTML = `<div class="h-main"><b id="h-score"></b><div class="h-clues">${CLUES.map((c, j) => `<span class="h-c" data-j="${j}"><i></i>${esc(TAG[c.key])}</span>`).join('')}</div><button class="btn primary" data-act="h-claim">Claim this spot</button></div>`;
  };
  drawHud();
  const tick = () => {
    const show = st.hunt && h.ready && !ctx.busy();
    if (show !== h.on) { h.on = show; el.classList.toggle('open', show); reticle.classList.toggle('open', show); stage.classList.toggle('hunting', show); ctx.sound?.deep(show); }
    // The glow stays, fainter, while a scene or a card is open: it is the map everything else sits on.
    const want = st.hunt && h.ready ? (show || st.sheet === 'claim' || !$('#intro').classList.contains('gone') ? h.glow : 0.3 * h.glow) : 0;
    if (Math.abs(S.uHeat.value - want) > 0.004) { S.uHeat.value += (want - S.uHeat.value) * 0.12; world.stamp++; }
    if (!show) return;
    reticle.style.left = `${50 + control.shift[0] * 50}%`; reticle.style.top = `${50 - control.shift[1] * 50}%`;
    const lat = control.lat / DEG, lon = control.lon / DEG, f = fit(lon, lat);
    const key = `${f.state}|${f.bits}`;
    if (key === h.last) return;
    h.last = key;
    const sc = $('#h-score');
    sc.innerHTML = f.state === 0 ? '–' : `${f.score}<small>/5</small>`;
    sc.className = `s${f.state === 2 ? f.score : 0}`;
    // No tooltip: the five lights say it. This is the same thing for someone who cannot see them.
    sc.setAttribute('aria-label', f.state === 0 ? "Open sea at Plato's date too: nothing here to sink" : f.state === 1 ? `${f.score} of 5. Dry land then and now: it never sank` : `${f.score} of 5, on land that has gone under`);
    reticle.className = `open s${f.state === 2 ? f.score : 0}`;
    for (const c of el.querySelectorAll('.h-c')) c.classList.toggle('on', f.state !== 0 && f.clues[Number(c.dataset.j)]);
    ctx.sound?.read(f);
  };

  // ---------- the ring that runs out from a spot ----------
  let ring = null;
  const scan = (lon, lat) => {
    const d = toDir(lon * DEG, lat * DEG), t0 = performance.now(), reach = clamp(control.range / 1000 * 0.75, 30, 3500);
    cancelAnimationFrame(ring);
    const step = () => {
      const k = clamp((performance.now() - t0) / 1700, 0, 1);
      S.uScan.value.set(d[0], d[1], d[2], Math.max(reach * (1 - (1 - k) ** 2.2), 0.01));
      S.uScanA.value = 1.1 * (1 - k) ** 1.3;
      world.stamp++;
      if (k < 1) ring = requestAnimationFrame(step); else S.uScanA.value = 0;
    };
    step();
  };

  // ---------- a claim ----------
  const percentile = (score) => { const t = wf.totals, below = t.by_score.filter((s) => s.score < score).reduce((n, s) => n + s.km2, 0); return (below / t.land_that_sank_km2) * 100; };
  const shareText = (c, url) => `The hunt for Atlantis 🔱 ${c.score}/5\n${c.clues.map((ok) => (ok ? '🟩' : '🟥')).join('')}\n${CLUES.map((x) => x.word).join(' · ')}\n${formatLatLon(c.lat, c.lon, 2)}${c.name ? ` · ${c.name}` : ''}\n${url}`;
  const claimUrl = (c) => ctx.shareUrl({ hunt: `${c.lat.toFixed(3)},${c.lon.toFixed(3)}` }, true);
  const ICON = {
    copy: '<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2"/><path d="M11.500 3.800V3.500a1.500 1.500 0 0 0-1.500-1.500H4.500A1.500 1.500 0 0 0 3 3.500V10a1.500 1.500 0 0 0 1.500 1.500h.300"/></svg>',
    x: '<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M9.300 6.900 14.500 1h-1.300L8.700 6.100 5.100 1H1l5.500 7.800L1 15h1.300l4.800-5.400L10.900 15H15L9.300 6.900Zm-1.700 1.900-.5-.800L2.800 2h1.800l3.500 4.900.5.800 4.600 6.400h-1.800L7.600 8.800Z"/></svg>',
    save: '<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.500v8.500m0 0 3.200-3.200M9 11 5.800 7.800M3 13.500v.500A1.500 1.500 0 0 0 4.500 15.500h9A1.500 1.500 0 0 0 15 14v-.500"/></svg>',
  };
  const drawClaim = () => {
    const c = h.claim, places = wf.places;
    eyebrow.textContent = 'Landscape match';
    const beaten = places.filter((p) => p.score < c.score).length;
    const rank = c.state === 0 ? "Open sea at Plato's date too. There was no land here to sink."
      : c.state === 1 ? 'Dry land then and now. It never sank, which is the heart of the story.'
        : `Better than ${percentile(c.score).toFixed(c.score >= 4 ? 1 : 0)}% of all the land that has gone under. Beats ${beaten} of the ${places.length} famous claims.`;
    body.innerHTML = `
      <div class="c-hero s${c.state === 2 ? c.score : 0}"><b>${c.state === 0 ? '–' : `${c.score}<small>/5</small>`}</b><div class="sq">${c.clues.map((ok) => `<i class="${ok ? 'y' : 'n'}"></i>`).join('')}</div></div>
      <h2 class="c-name">${esc(c.name ?? formatLatLon(c.lat, c.lon, 2))}</h2>
      <div class="c-sub">${c.name ? formatLatLon(c.lat, c.lon, 2) : c.state === 2 ? 'Sunken land' : c.state === 1 ? 'Dry land' : 'Open sea'}</div>
      <p class="c-rank">${esc(rank)}</p>
      <div class="c-list">${CLUES.map((x, j) => `<details class="c-row ${c.clues[j] ? 'y' : 'n'}"><summary><i></i>${esc(x.name)}<small>${esc(refOf(x))}</small></summary><p>${esc(c.state === 0 ? 'No land here at that date.' : c.clues[j] ? x.yes : x.no)}${claimOf(x.claim)?.quote ? ` <em class="q">“${esc(claimOf(x.claim).quote)}”</em>` : ''}</p></details>`).join('')}</div>
      <div class="c-acts"><button class="btn primary" data-act="h-share">Share my claim</button><button class="ib" data-act="h-copy" aria-label="Copy" aria-label="Copy">${ICON.copy}</button><button class="ib" data-act="h-x" aria-label="Post on X" aria-label="Post on X">${ICON.x}</button><button class="ib" data-act="h-pic" aria-label="Save the picture" aria-label="Save the picture">${ICON.save}</button></div>
      <details class="c-more"><summary>More to do here</summary><div class="row"><button class="btn" data-act="h-fit">Measure the ground</button><button class="btn" data-act="h-city">Stand Plato's city</button><button class="btn" data-act="h-known">Already recorded?</button><button class="btn" data-act="h-rules">How it's scored</button></div></details>

      <pre class="c-share" id="c-share" hidden>${esc(shareText(c, claimUrl(c)))}</pre>`;
  };
  const claim = async (lat, lon, fly = false) => {
    if (!h.ready) return;
    const f = fit(lon, lat);
    // If the spot lies in one of the best matches that has a name, the claim carries that name.
    const known = wf.best.find((b) => b.near?.name && !/^off /.test(b.near.name) && Math.abs(b.lat - lat) < 1.2 && Math.abs(b.lon - lon) < 1.2 && f.state === 2);
    h.claim = { lat, lon, ...f, name: known ? known.near.name : null, named: !!known };
    st.legend = st.place = null;
    ctx.leaveScene();
    setSheet('claim');
    body.scrollTop = 0;
    drawClaim();
    if (fly) control.flyTo({ lon: lon * DEG, lat: lat * DEG, range: clamp(control.range, 60000, 900000), tilt: 30 * DEG, heading: 0 }, 2.4);
    setTimeout(() => { scan(lon, lat); ctx.sound?.sfx('ping', 0.8); if (f.state === 2 && f.score >= 4) setTimeout(() => ctx.sound?.sfx('reveal', 0.5), 500); }, fly ? 2200 : 60);
    // A name for the spot, if a place search knows one. The claim stands without it.
    try {
      const r = await fetch(`https://photon.komoot.io/reverse?lang=en&lat=${lat}&lon=${lon}`, { signal: AbortSignal.timeout(6000) }).then((x) => x.json());
      const p = r.features?.[0]?.properties;
      const name = p && [p.name ?? p.county ?? p.state, p.country].filter(Boolean).join(', ');
      if (name && h.claim && h.claim.lat === lat && !h.claim.named && st.sheet === 'claim') { h.claim.name = `Near ${name}`; drawClaim(); }
    } catch { /* no name: fine */ }
  };

  // ---------- the leaderboard ----------
  const drawBest = () => {
    eyebrow.textContent = 'Closest landscape matches';
    const row = (b, i) => `<button class="prow" data-act="h-go" data-ll="${b.lat},${b.lon}"><b class="lb s${b.top}">${b.top}/5</b><span class="pn">${esc(b.near?.name ? shorten(b.near.name) : formatLatLon(b.lat, b.lon, 1))}</span><small>${b.km2.toLocaleString('en')} km²</small></button>`;
    const sure = wf.best.filter((b) => !b.near_old_ice).slice(0, 8), ice = wf.best.filter((b) => b.near_old_ice).slice(0, 5);
    const t = wf.totals, million = (t.land_that_sank_km2 / 1e6).toFixed(1);
    body.innerHTML = `
      <h2>Best on Earth</h2>
      <p class="lead">${million} million km² of land has gone under since Plato's date. Every 10 km of it is scored on five clues. <b>Nothing scores 5.</b></p>
      <div class="lb-bars">${t.by_score.map((s) => `<div><b class="lb s${s.score}">${s.score}/5</b><i style="width:${Math.max(1.5, (s.km2 / t.land_that_sank_km2) * 100).toFixed(1)}%"></i><small>${s.km2 >= 1e6 ? `${(s.km2 / 1e6).toFixed(1)} million km²` : s.km2 >= 500 ? `${Math.round(s.km2 / 1000).toLocaleString('en')} thousand km²` : 'none'}</small></div>`).join('')}</div>
      <h3>The best matches</h3>
      ${sure.map(row).join('')}
      ${ice.length ? `<h3>Near the old ice sheets</h3>${ice.map(row).join('')}` : ''}
      <h3>The famous claims, by the same rules</h3>
      ${wf.places.map((p) => `<button class="prow" data-act="a-place" data-id="${esc(p.id)}"><b class="lb s${p.score}">${p.score}/5</b><span class="pn">${esc(ctx.shortName(p.name))}</span><small>${esc(p.note ? 'open sea then' : p.clues.map((k) => CLUES.find((c) => c.key === k).word).join(', ') || 'none')}</small></button>`).join('')}
      `;
  };
  const drawRules = () => {
    eyebrow.textContent = "How it's scored";
    const r = wf.rules;
    const text = {
      sank: `The cell was land with the sea ${Math.abs(r.sea_then_m)} m lower, the middle of the range published for Plato's date, and is open sea today.`,
      atlantic: 'The water it lies under is the Atlantic or a sea that opens to it, outside the Strait of Gibraltar.',
      plain: `At least ${Math.round(r.plain.share_needed * 100)}% of a ${Math.round(r.plain.long_km)} by ${Math.round(r.plain.wide_km)} km box round it (his 3,000 by 2,000 stades) was land no more than ${r.plain.low_ground_max_m_above_today} m above today's sea.`,
      mountains: `The ground ${r.mountains.band_from_km} to ${r.mountains.band_to_km} km to its north averages at least ${r.mountains.north_mean_at_least_m} m, and at least ${r.mountains.north_minus_south_at_least_m} m more than the same band to its south.`,
      island: `The piece of land it belonged to then was smaller than ${(r.island.smaller_than_km2 / 1e6).toFixed(1)} million km²: an island, not a continent. Plato says it was larger than Libya and Asia together; no sunken land comes near that.`,
    };
    body.innerHTML = `
      <h2>Five clues the land can answer</h2>
      <p class="lead">Plato gives ${cas?.claims.filter((c) => c.testable).length ?? 27} details that could be checked. A map of heights can answer five of them for the whole planet, at 10 km a cell.</p>
      ${CLUES.map((x) => `<div class="c-row y"><i></i><span><b>${esc(x.name)}</b> <small>${esc(refOf(x))}</small><br>${esc(text[x.key])}${claimOf(x.claim)?.quote ? `<br><em class="q">“${esc(claimOf(x.claim).quote)}”</em>` : ''}</span></div>`).join('')}
      <h3>What this cannot tell you</h3>
      <ul class="plain">${wf.limits.map((l) => `<li>${esc(l)}</li>`).join('')}<li>The thresholds are ours. They are in <b>data/worldfit.json</b>, and <b>tools/make-worldfit.mjs</b> runs the whole thing again with others.</li></ul>
      <div class="row"><button class="btn" data-act="h-best">Best on Earth</button><button class="btn" data-act="close">Back to the hunt</button></div>`;
  };

  // ---------- buttons ----------
  const click = (act, b) => {
    const c = h.claim;
    if (act === 'h-claim') claim(control.lat / DEG, control.lon / DEG);
    else if (act === 'h-best') { st.legend = st.place = null; ctx.leaveScene(); setSheet('best'); body.scrollTop = 0; drawBest(); }
    else if (act === 'h-rules') { st.legend = st.place = null; ctx.leaveScene(); setSheet('rules'); body.scrollTop = 0; drawRules(); }
    else if (act === 'h-story') ctx.tour?.();
    else if (act === 'h-go') { const [lat, lon] = b.dataset.ll.split(',').map(Number); claim(lat, lon, true); }
    else if (act === 'h-share') ctx.shareOut({ text: shareText(c, ''), url: claimUrl(c), both: shareText(c, claimUrl(c)) });
    else if (act === 'h-copy') navigator.clipboard?.writeText(shareText(c, claimUrl(c))).then(() => toast('Copied. Paste it anywhere.'), () => { $('#c-share').hidden = false; toast('Select the text and copy it'); });
    else if (act === 'h-x') window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText(c, claimUrl(c)))}`, '_blank', 'noopener');
    else if (act === 'h-pic') { world.snap = (blob) => { if (!blob) return toast('Could not take the picture'); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `atlantis-hunt-${c.lat.toFixed(2)}_${c.lon.toFixed(2)}.jpg`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }; world.stamp++; }
    else if (act === 'h-fit') ctx.fitAt(c.lat, c.lon);
    else if (act === 'h-city') ctx.standCity(c.lat, c.lon);
    else if (act === 'h-known') ctx.checkKnown(c.lat, c.lon, 20);
    else return false;
    return true;
  };
  el.addEventListener('click', (e) => { const b = e.target.closest('[data-act]'); if (b) click(b.dataset.act, b); });

  return { fit, claim, scan, click, tick, drawBest, state: h, CLUES, get ready() { return h.ready; }, setGlow: (v) => { h.glow = v; } };
};
