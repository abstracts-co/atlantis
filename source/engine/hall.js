// The hall: the room inside the shrine at the centre of the city (city/hall.js builds its walls). Twelve boards hang on
// its wall, in order from the left of the door: what the text says, what the Earth says, the places people named,
// what is still unknown, and the work that is open for anyone and their AI. A globe turns on the table in the middle:
// using it opens the whole Earth and the hunt. Every word and number on a board is taken from the data when it is
// drawn (case.json, evidence.json, worldfit.json, open.json); nothing is typed in here but the headings.
import * as THREE from 'three';
import { OUTCOME } from './board.js';

const INK = '#eef2f6', DIM = '#9aa7b4', GOLD = '#e9bd62', BG = '#0b1016', LINE = '#243040';
const TONE = { good: '#5fd0a0', bad: '#f0766a', warn: '#e9bd62', info: '#6fb6f0', mut: '#7c8794' };
const SCORE = ['#16324a', '#1f6f78', '#2b9a8f', '#58c08a', '#e9bd62', '#fff3c4'];   // what a score of 0..5 is painted in
const bitsOf = (n) => { let c = 0; for (let b = n; b; b >>= 1) c += b & 1; return c; };
const short = (t, n) => (t.length > n ? `${t.slice(0, n - 1).replace(/[ ,;:]+\S*$/, '')}…` : t);

export const startHall = (ctx, { A, H, walk }) => {
  const { world, data, $, esc, link, setSheet, body, eyebrow, toast } = ctx, city = world.city;
  const wf = data.worldfit, cas = data.cas, sites = data.evidence ?? [], open = data.open;
  const s = { group: null, on: null, boards: [], globe: null, spin: null, painted: false };
  const W = world.phone ? 768 : 1152, Hh = Math.round(W / 1.8), u = W / 1152;   // every size below is for 1152 across

  // ---------- drawing on a board ----------
  const font = (px, weight = 500) => `${weight} ${Math.round(px * u)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
  const lines = (g, text, max) => { const out = []; let cur = ''; for (const word of String(text).split(/\s+/)) { const t = cur ? `${cur} ${word}` : word; if (g.measureText(t).width > max && cur) { out.push(cur); cur = word; } else cur = t; } if (cur) out.push(cur); return out; };
  // Text in a column: returns the y below it. `rows` caps the lines; the last one ends in an ellipsis when cut.
  const para = (g, text, x, y, max, px, { colour = INK, weight = 500, rows = 9, gap = 1.32 } = {}) => {
    g.font = font(px, weight); g.fillStyle = colour; g.textBaseline = 'top';
    const ls = lines(g, text, max * u);
    ls.slice(0, rows).forEach((l, i) => g.fillText(i === rows - 1 && ls.length > rows ? `${l.replace(/[ ,;:]+\S*$/, '')}…` : l, x * u, (y + i * px * gap) * u));
    return y + Math.min(rows, ls.length) * px * gap;
  };
  const frame = (g, kicker, title) => {
    g.fillStyle = BG; g.fillRect(0, 0, W, Hh);
    g.fillStyle = GOLD; g.fillRect(0, 0, W, 5 * u);
    g.font = font(21, 700); g.fillStyle = GOLD; g.textBaseline = 'top';
    g.fillText(kicker.toUpperCase().split('').join(' '), 56 * u, 44 * u);
    return para(g, title, 56, 78, 1040, 54, { weight: 700, rows: 2, gap: 1.12 }) + 22;
  };
  const foot = (g, text) => { g.font = font(20, 500); g.fillStyle = DIM; g.textBaseline = 'alphabetic'; g.fillText(text, 56 * u, Hh - 30 * u); g.fillStyle = LINE; g.fillRect(56 * u, Hh - 66 * u, W - 112 * u, 1.5 * u); };
  const dot = (g, x, y, r, colour) => { g.fillStyle = colour; g.beginPath(); g.arc(x * u, y * u, r * u, 0, 7); g.fill(); };
  const squares = (g, x, y, clues, size = 22) => clues.forEach((on, i) => { g.fillStyle = on ? SCORE[4] : '#2a3442'; g.fillRect((x + i * (size + 5)) * u, y * u, size * u, size * u); });

  // ---------- what each board says ----------
  const placeScore = (id) => wf?.places.find((p) => p.id === id);
  const openSearches = (cas?.searches ?? []).filter((x) => x.status === 'unresolved' || x.status === 'never-tested');
  const scored = new Set((H?.CLUES ?? []).map((c) => c.claim)), unscored = (cas?.claims ?? []).filter((c) => !scored.has(c.id));
  const lost = sites.flatMap((x) => (x.not_located ?? []).map((n) => ({ site: x.name, what: typeof n === 'string' ? n : n.what ?? n.name ?? n.id ?? '' }))).filter((x) => x.what);
  const best = (wf?.best ?? []).filter((b) => !b.near_old_ice);
  const work = open?.work?.filter((t) => (t.status ?? 'open') !== 'done') ?? [];
  const pairs = []; for (let i = 0; i < sites.length; i += 2) pairs.push(sites.slice(i, i + 2));

  const boards = [];
  boards.push({ id: 'welcome', label: 'Read: what this room is', draw: (g) => {
    let y = frame(g, 'The hall', 'The one closed place in the story, opened');
    y = para(g, 'Plato wrote that the shrine at the centre was holy ground with a wall of gold round it. He says nothing of what was inside. So this is where the search is kept.', 56, y, 1040, 30, { colour: DIM, rows: 3 }) + 26;
    for (const [n, t] of [['1', 'Follow the wall to your left: his words, then what the Earth says, then every place people named.'], ['2', 'Past the far side: what is still unknown, and work you can pick up, with or without an AI.'], ['3', 'The globe in the middle opens the whole Earth. Hunt for it yourself.']]) {
      dot(g, 74, y + 20, 19, '#1b2532'); g.font = font(22, 700); g.fillStyle = GOLD; g.textBaseline = 'middle'; g.textAlign = 'center'; g.fillText(n, 74 * u, (y + 21) * u); g.textAlign = 'left';
      y = para(g, t, 112, y, 980, 29, { rows: 2 }) + 16;
    }
    foot(g, 'Signed in, you can talk here: text for the room, voice for whoever stands near you.');
  }, sheet: () => `<h2>The hall</h2><div class="row"><button class="btn primary" data-act="hl-globe">Open the globe</button><button class="btn" data-act="hl-work">Work to pick up</button></div>` });

  boards.push({ id: 'text', label: 'Read: what Plato wrote', draw: (g) => {
    let y = frame(g, 'His words', `${cas?.claims.length ?? ''} things Plato says that can be checked`);
    const cl = (H?.CLUES ?? []).map((c) => cas?.claims.find((x) => x.id === c.claim)).filter(Boolean);
    for (const c of cl.slice(0, 5)) { dot(g, 66, y + 17, 8, SCORE[4]); g.font = font(21, 600); g.fillStyle = DIM; g.textBaseline = 'top'; g.textAlign = 'right'; g.fillText(c.ref.split(';')[0], (W / u - 56) * u, (y + 5) * u); g.textAlign = 'left'; y = para(g, c.label, 92, y, 760, 27, { rows: 2 }) + 12; }
    foot(g, `The ${cl.length} with a gold dot are scored on the globe. The other ${unscored.length} are waiting for someone.`);
  }, sheet: () => `<h2>What Plato wrote</h2>${(cas?.claims ?? []).map((c) => `<div class="known"><span>${scored.has(c.id) ? '<i class="cdot on"></i>' : '<i class="cdot"></i>'}${esc(c.label)}</span><small>${esc(c.ref ?? '')}</small></div>`).join('')}<div class="row"><button class="btn" data-act="h-rules">How it's scored</button></div>` });

  boards.push({ id: 'earth', label: 'Read: what the Earth says', draw: (g) => {
    let y = frame(g, 'The Earth', 'Nothing on Earth scores 5 of 5');
    const by = wf?.totals.by_score ?? [], max = Math.max(1, ...by.map((b) => b.km2));
    y = para(g, `${((wf?.totals.land_that_sank_km2 ?? 0) / 1e6).toFixed(1)} million km² of land have gone under the sea since Plato's date. Every 10 km of it was scored against his words.`, 56, y, 1040, 29, { colour: DIM, rows: 2 }) + 28;
    for (const b of by) {
      g.font = font(26, 700); g.fillStyle = INK; g.textBaseline = 'middle'; g.fillText(`${b.score} of 5`, 56 * u, (y + 17) * u);
      g.fillStyle = '#16202c'; g.fillRect(190 * u, y * u, 640 * u, 34 * u);
      g.fillStyle = SCORE[b.score]; g.fillRect(190 * u, y * u, Math.max(b.km2 ? 3 : 0, (640 * b.km2) / max) * u, 34 * u);
      g.font = font(23, 500); g.fillStyle = b.km2 ? DIM : TONE.bad; g.fillText(b.km2 ? `${Math.round(b.km2).toLocaleString('en')} km²` : 'none', 850 * u, (y + 17) * u);
      y += 48;
    }
    foot(g, 'A score is a match in the landscape. It is not evidence of a city.');
  }, sheet: () => `<h2>What the Earth says</h2>${(wf?.totals.by_score ?? []).map((b) => `<div class="known"><span>${b.score} of 5</span><small>${Math.round(b.km2).toLocaleString('en')} km²</small></div>`).join('')}<div class="row"><button class="btn primary" data-act="hl-globe">Open the globe</button><button class="btn" data-act="h-rules">How it's scored</button></div>` });

  boards.push({ id: 'best', label: 'Read: the best matches on Earth', draw: (g) => {
    let y = frame(g, 'The leaderboard', 'The closest matches so far');
    best.slice(0, 6).forEach((b, i) => {
      g.font = font(26, 700); g.fillStyle = DIM; g.textBaseline = 'top'; g.fillText(String(i + 1), 56 * u, (y + 2) * u);
      g.font = font(28, 600); g.fillStyle = INK; g.fillText(short(b.near?.name ?? `${b.lat.toFixed(1)}, ${b.lon.toFixed(1)}`, 40), 104 * u, y * u);
      squares(g, 800, y + 4, (H?.CLUES ?? []).map((c) => b.clues.includes(c.key)));
      g.font = font(26, 700); g.fillStyle = SCORE[b.top]; g.textAlign = 'right'; g.fillText(`${b.top}/5`, (W / u - 56) * u, (y + 2) * u); g.textAlign = 'left';
      y += 50;
    });
    foot(g, 'Find a better spot on the globe and claim it.');
  }, sheet: () => `<h2>Closest landscape matches</h2>${best.slice(0, 12).map((b, i) => `<div class="known"><span>${i + 1}. ${esc(b.near?.name ?? `${b.lat.toFixed(1)}, ${b.lon.toFixed(1)}`)}</span><small>${b.top} of 5 · ${Math.round(b.km2).toLocaleString('en')} km²</small></div>`).join('')}<div class="row"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>` });

  pairs.forEach((pair, n) => boards.push({ id: `claims-${n + 1}`, label: `Read: ${pair.map((x) => x.name.split(',')[0]).join(' and ')}`, draw: (g) => {
    frame(g, `Places people named · ${n + 1} of ${pairs.length}`, pair.map((x) => x.name.split(',')[0]).join('  ·  '));
    pair.forEach((x, i) => {
      const x0 = 56 + i * 532, sc = placeScore(x.place ?? x.id);
      let y = 196;
      g.font = font(20, 700); g.fillStyle = TONE.warn; g.textBaseline = 'top'; g.fillText('CLAIMED', x0 * u, y * u);
      y = para(g, x.claimed?.line ?? '', x0, y + 28, 480, 24, { rows: 4 }) + 18;
      g.font = font(20, 700); g.fillStyle = TONE.good; g.fillText('FOUND', x0 * u, y * u);
      y = para(g, x.found?.line ?? '', x0, y + 28, 480, 24, { rows: 5 }) + 14;
      if (sc) { g.font = font(22, 600); g.fillStyle = DIM; g.fillText(`By the hunt's rules: ${sc.score} of 5`, x0 * u, (Hh / u - 112) * u); }
    });
    g.fillStyle = LINE; g.fillRect((W / 2) - 1, 196 * u, 1.5 * u, Hh - 290 * u);
    foot(g, 'Each has a scene on the globe: what was claimed and what was found, drawn on the ground.');
  }, sheet: () => pair.map((x) => `<h2>${esc(x.name)}</h2><p><span class="tag t-fringe">Claimed</span> ${esc(x.claimed?.line ?? '')}</p><p><span class="tag t-confirmed">Found</span> ${esc(x.found?.line ?? '')}</p><div class="row"><button class="btn" data-act="hl-place" data-id="${esc(x.place ?? x.id)}">See it on the globe</button></div>`).join('') }));

  boards.push({ id: 'searches', label: 'Read: every search on record', draw: (g) => {
    const all = cas?.searches ?? [], y0 = frame(g, 'The searches', `${all.length} searches, ${Math.min(...all.map((x) => x.year))} to ${Math.max(...all.map((x) => x.year))}`);
    // A line of years. Before 1950 the line is squeezed, since most of the looking is recent.
    const xs = (yr) => (yr < 1950 ? 70 + ((yr - 1650) / 300) * 250 : 320 + ((yr - 1950) / 80) * 770), base = y0 + 150;
    g.fillStyle = LINE; g.fillRect(56 * u, base * u, (W / u - 112) * u, 2 * u);
    g.font = font(19, 500); g.fillStyle = DIM; g.textBaseline = 'top'; g.textAlign = 'center';
    for (const yr of [1700, 1800, 1900, 1950, 1975, 2000, 2025]) { g.fillRect(xs(yr) * u, (base - 6) * u, 1.5 * u, 14 * u); g.fillText(String(yr), xs(yr) * u, (base + 16) * u); }
    g.textAlign = 'left';
    const stack = new Map();
    for (const x of all) { const k = Math.round(xs(x.year) / 15), n = stack.get(k) ?? 0; stack.set(k, n + 1); dot(g, k * 15, base - 20 - n * 24, 9, TONE[OUTCOME[x.status]?.tone ?? 'mut']); }
    let x = 56; const y = base + 78;
    for (const [status, o] of Object.entries(OUTCOME)) { const n = all.filter((v) => v.status === status).length; if (!n) continue; dot(g, x + 9, y + 14, 9, TONE[o.tone]); g.font = font(22, 500); g.fillStyle = INK; g.textBaseline = 'top'; const t = `${n} ${o.short.toLowerCase()}`; g.fillText(t, (x + 26) * u, y * u); x += 44 + g.measureText(t).width / u; }
    foot(g, 'Not one has found the city.');
  }, sheet: () => `<h2>Every search on record</h2>${(cas?.searches ?? []).map((x) => `<div class="known"><span>${esc(x.title)}</span><small>${esc(String(x.date ?? x.year))} · ${esc(OUTCOME[x.status]?.short ?? x.status)}</small></div>`).join('')}<div class="row"><button class="btn primary" data-act="hl-board">Open the board</button></div>` });

  boards.push({ id: 'unknown', label: 'Read: what is still unknown', draw: (g) => {
    let y = frame(g, 'Still unknown', `${openSearches.length} searches with no answer yet`);
    for (const x of openSearches.slice(0, 6)) { dot(g, 66, y + 15, 8, TONE[OUTCOME[x.status]?.tone ?? 'mut']); g.font = font(20, 600); g.fillStyle = DIM; g.textBaseline = 'top'; g.textAlign = 'right'; g.fillText(String(x.year), (W / u - 56) * u, (y + 3) * u); g.textAlign = 'left'; y = para(g, x.title, 92, y, 880, 25, { rows: 1 }) + 11; }
    foot(g, `Also open: ${unscored.length} of Plato's claims not scored, and ${lost.length} things claimed at a place with no published position.`);
  }, sheet: () => `<h2>What is still unknown</h2><h3>Searches with no answer yet</h3>${openSearches.map((x) => `<div class="known"><span>${esc(x.title)}${x.source ? ` ${link(typeof x.source === 'string' ? x.source : x.source.url ?? '', 'source')}` : ''}</span><small>${esc(String(x.date ?? x.year))} · ${esc(OUTCOME[x.status]?.short ?? '')}</small></div>`).join('')}<h3>Claims of Plato's not scored yet</h3>${unscored.map((c) => `<div class="known"><span>${esc(c.label)}</span><small>${esc(c.ref ?? '')}</small></div>`).join('')}${lost.length ? `<h3>Claimed at a place, with no published position</h3>${lost.map((x) => `<div class="known"><span>${esc(x.what)}</span><small>${esc(x.site.split(',')[0])}</small></div>`).join('')}` : ''}<div class="row"><button class="btn primary" data-act="hl-work">Work to pick up</button></div>` });

  boards.push({ id: 'work', label: 'Read: work you can pick up', draw: (g) => {
    let y = frame(g, 'Open work', `${work.length} things to pick up`);
    const cols = [work.slice(0, Math.ceil(Math.min(work.length, 10) / 2)), work.slice(Math.ceil(Math.min(work.length, 10) / 2), 10)];
    cols.forEach((col, i) => { let yy = y; for (const t of col) { g.font = font(18, 700); g.fillStyle = GOLD; g.textBaseline = 'top'; g.fillText(t.area.toUpperCase(), (56 + i * 532) * u, yy * u); yy = para(g, t.title, 56 + i * 532, yy + 24, 480, 25, { rows: 1 }) + 13; } });
    foot(g, 'Each comes with a prompt to hand to your AI. Press to see them all.');
  }, sheet: () => workSheet() });

  boards.push({ id: 'help', label: 'Read: how to help, with your AI', draw: (g) => {
    let y = frame(g, 'Bring your AI', 'Anyone can add to this');
    (open?.how ?? []).slice(0, 5).forEach((t, i) => { dot(g, 74, y + 18, 17, '#1b2532'); g.font = font(20, 700); g.fillStyle = GOLD; g.textBaseline = 'middle'; g.textAlign = 'center'; g.fillText(String(i + 1), 74 * u, (y + 19) * u); g.textAlign = 'left'; y = para(g, t, 110, y + 2, 990, 24, { rows: 2 }) + 13; });
    foot(g, 'Better graphics, more research, new data, sound, things to do: all of it is open.');
  }, sheet: () => workSheet() });
  while (boards.length < 12) boards.push(null);

  // ---------- the prompt a person hands to their AI ----------
  const slug = () => ctx.host?.community ?? open?.community ?? 'atlantis';
  const repoUrl = () => (open?.repository ?? '').replace(/\/[^/]+$/, `/${slug()}`);
  // quiet:document
  const promptFor = (t) => `Help with a/${slug()} on Abstracts (https://abstracts.co/a/${slug()}). Its repository is ${repoUrl()}.

${t ? `The task: ${t.title} (${t.id}, ${t.area}).
${t.why}
Done when: ${t.done_when}` : `Read data/open.json and show me the open tasks, grouped by area, with what each needs. Ask me which one I want.`}

1. Read AGENTS.md in the repository first. It says where everything is and which check goes with which file.${t ? ` This task starts in: ${t.start.join(', ')}.` : ''}
2. Offer to say on the community's Wall that I am taking ${t ? t.id : 'the task'}, so nobody does the same work twice. Post only if I say yes.
3. Do the work on a branch. Nothing from memory: every claim and every position needs a source you fetched. Atlantis is a legend with no archaeological support, and a score is never evidence of a city.
4. Run ${t ? t.check.map((c) => `\`${c}\``).join(' and ') : "the task's checks"}.
5. Show me what changed (for anything visual, pictures at desktop and phone widths) and wait until I accept that version.
6. Then open one pull request to ${repoUrl()} from my GitHub account, following https://abstracts.co/kit/abstracts-artifact/SKILL.md, and name ${t ? t.id : 'the task'} in it.`;
  // quiet:end
  const workSheet = () => `<h2>Work you can pick up</h2>${Object.entries(open?.areas ?? {}).map(([area, what]) => { const ts = work.filter((t) => t.area === area); return ts.length ? `<h3>${esc(area[0].toUpperCase() + area.slice(1))}</h3>${ts.map((t) => `<details class="hl-task"><summary><b>${esc(t.title)}</b><small>${esc(t.size)}</small></summary><p>${esc(t.why)}</p><p><span class="tag t-confirmed">Done when</span> ${esc(t.done_when)}</p><div class="row"><button class="btn primary" data-act="hl-prompt" data-id="${esc(t.id)}">Copy the prompt for my AI</button></div></details>`).join('')}` : ''; }).join('')}`;

  // ---------- showing a board's detail ----------
  const show = (id) => {
    const b = boards.find((x) => x?.id === id);
    if (!b) return;
    setSheet('hall'); eyebrow.textContent = 'The hall';
    body.innerHTML = b.sheet();
  };
  body.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act^="hl-"]');
    if (!b) return;
    const act = b.dataset.act;
    if (act === 'hl-work') show('work');
    else if (act === 'hl-globe') ctx.openGlobe?.();
    else if (act === 'hl-board') { ctx.openGlobe?.(false); A?.openBoard(); }
    else if (act === 'hl-place') { const p = A?.atlantis.places.find((x) => x.id === b.dataset.id); ctx.openGlobe?.(false); if (p) A.openPlace(p, true); }
    else if (act === 'hl-prompt') {
      const text = promptFor(work.find((t) => t.id === b.dataset.id) ?? null);
      (navigator.clipboard?.writeText(text) ?? Promise.reject()).then(() => toast('Copied. Paste it to your AI.'), () => { body.insertAdjacentHTML('beforeend', `<pre class="c-share">${esc(text)}</pre>`); toast('Select the text and copy it'); });
    }
  });

  // ---------- in the room: the boards and the globe ----------
  const globeMap = () => {
    // The whole Earth as one picture, 720 by 360: sea, land, and the sunken land painted by its score.
    const w = 720, h = 360, c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d'), img = g.createImageData(w, h), px = img.data, hs = H?.state, n = hs?.n;
    const rgb = (hex) => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
    const sea = rgb('#0c2a44'), land = rgb('#3b4a3f'), pal = SCORE.map(rgb);
    for (let y = 0; y < h; y++) {
      const lat = Math.max(-85, Math.min(85, 90 - ((y + 0.5) / h) * 180)) * Math.PI / 180;
      const my = n ? Math.max(0, Math.min(n - 1, Math.floor(((1 - Math.log(Math.tan(lat) + 1 / Math.cos(lat)) / Math.PI) / 2) * n))) : 0;
      for (let x = 0; x < w; x++) {
        let col = sea;
        if (n) { const i = my * n + Math.floor((x / w) * n), st = hs.state[i]; col = st === 1 ? land : st === 2 ? pal[Math.max(1, bitsOf(hs.bits[i]))] : sea; }
        const o = (y * w + x) * 4; px[o] = col[0]; px[o + 1] = col[1]; px[o + 2] = col[2]; px[o + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
    return c;
  };
  const build = () => {
    const hl = city.city.hall, group = new THREE.Group();
    group.name = 'hall';
    s.boards = [];
    hl.panels.forEach((p, i) => {
      const b = boards[i];
      if (!b) return;
      const c = document.createElement('canvas'); c.width = W; c.height = Hh;
      const g = c.getContext('2d'); g.textAlign = 'left';
      b.draw(g);
      const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.h), new THREE.MeshBasicMaterial({ map: tex }));
      const normal = new THREE.Vector3(-Math.cos(p.a), -Math.sin(p.a), 0), up = new THREE.Vector3(0, 0, 1), right = new THREE.Vector3().crossVectors(up, normal);
      mesh.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, up, normal));
      mesh.position.set(p.x, p.y, p.z);
      // a thin gold frame behind it
      const back = new THREE.Mesh(new THREE.PlaneGeometry(p.w + 0.16, p.h + 0.16), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.55, 0.4, 0.14) }));
      back.quaternion.copy(mesh.quaternion); back.position.set(p.x - normal.x * 0.03, p.y - normal.y * 0.03, p.z);
      group.add(back, mesh);
      s.boards.push({ ...b, mesh, canvas: c, tex, at: p });
    });
    // The globe: turning slowly on its table, tipped as the Earth is.
    const tex = new THREE.CanvasTexture(globeMap()); tex.colorSpace = THREE.SRGBColorSpace;
    const ball = new THREE.Mesh(new THREE.SphereGeometry(hl.globe.r, 48, 32), new THREE.MeshBasicMaterial({ map: tex }));
    ball.rotation.x = Math.PI / 2;
    const spin = new THREE.Group(), tip = new THREE.Group();
    spin.add(ball); tip.add(spin); tip.rotation.y = 0.41; tip.position.set(hl.globe.x, hl.globe.y, hl.globe.z);
    group.add(tip);
    s.globe = { ball, tex, painted: !!H?.state.ready }; s.spin = spin;
    return group;
  };
  // Called every frame: puts the room's things into the city when it is built, and takes them out of a city that is gone.
  const sync = () => {
    const g = city.city?.group ?? null;
    if (g !== s.on) {
      s.on = g;
      if (g && city.city.hall) {
        s.group = build(); g.add(s.group);
        const hl = city.city.hall;
        walk.hotspots.length = 0;
        for (const b of s.boards) walk.hotspots.push({ id: b.id, x: b.at.x, y: b.at.y, z: b.at.z, reach: 15, size: b.at.w, label: b.label, act: () => show(b.id) });
        walk.hotspots.push({ id: 'globe', x: hl.globe.x, y: hl.globe.y, z: hl.globe.z, reach: 13, size: hl.globe.r * 2.4, label: 'Open the globe: hunt for it yourself', act: () => ctx.openGlobe?.() });
      }
    }
    if (!s.group || !city.active) return;
    // The score map arrives a moment after the page: paint the globe again when it has.
    if (s.globe && !s.globe.painted && H?.state.ready) { s.globe.tex.image = globeMap(); s.globe.tex.needsUpdate = true; s.globe.painted = true; world.stamp++; }
    if (walk.on && Math.hypot(walk.state.x, walk.state.y) < city.city.hall.RG) { s.spin.rotation.z = world.time * 0.12; world.stamp++; }
  };
  return { sync, show, boards, promptFor, state: s, counts: { work: work.length, openSearches: openSearches.length, unscored: unscored.length, lost: lost.length } };
};
