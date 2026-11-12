// On foot in Plato's city, as in a game. Nothing here needs explaining: click or tap the ground to walk there, click
// or tap a thing to use it, drag to look. A thumb on the left of a phone's screen is a stick. Keys work too (W A S D or
// the arrows, Shift to run, E to use what is in the middle of the view), for those who reach for them. The walker stands on the city's own ground (plan.groundZ), cannot step into the water or
// through a wall, and goes from ring to ring by the bridges and gates as the text has it.
// Everything here is in the city's own frame: metres, the sea towards -Y (city/plan.js).
import * as THREE from 'three';
import { clamp, dot } from './geo.js';

const EYE = 1.7, WALK = 5.2, RUN = 15, BODY = 0.55, STEP_UP = 1.0;
const PLACES = { plateau: 'The citadel', slope: 'The planted slope', island: 'The island', bridge: 'A bridge', ramp: 'The stair to the citadel', quay: 'A quay', 'ring-inner': 'The inner ring', 'ring-outer': 'The outer ring', racecourse: 'The racecourse', town: 'The town', bank: 'The edge of the town' };

export const startWalk = (ctx) => {
  const { world, $, stage } = ctx, { control } = world, city = world.city, canvas = world.renderer.domElement, el = $('#walk');
  const w = { on: false, x: 0, y: 0, z: 0, zs: 0, dir: 0, pitch: 0, vel: [0, 0], keys: new Set(), look: null, stick: null, goal: null, hot: null, where: '', place: null, bob: 0, moved: false, hotspots: [], used: false };
  // Where a click on the ground is taking the walker: a ring on the paving, in the city's own scene.
  const mark = new THREE.Mesh(new THREE.RingGeometry(0.34, 0.5, 28), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.6, 1.6), transparent: true, opacity: 0, depthWrite: false }));
  mark.renderOrder = 5;
  const touch = matchMedia('(pointer: coarse)').matches;

  // ---------- what can be stood on, and what is in the way ----------
  const plan = () => city.city.plan;
  // The walls on the edges of the banks (city/walls.js): each is a band of radii that can only be crossed in the gateway on the road.
  const bands = () => { const P = plan(); return [[P.rA - P.T, P.rA + 0.4], [P.r1a - 0.4, P.r1a + P.T], [P.r1b - P.T, P.r1b + 0.4], [P.r2a - 0.4, P.r2a + P.T], [P.r2b - P.T, P.r2b + 0.4]]; };
  const blocked = (x, y) => {
    const P = plan(), r = Math.hypot(x, y), hl = city.city.hall, t = city.city.temple;
    for (const [a, b] of bands()) if (r > a - BODY && r < b + BODY && !(y < 0 && Math.abs(x - P.off) < P.bridgeHalf - 9.8)) return true;
    if (hl) {
      for (const g of hl.rings) if (Math.abs(r - g.r) < g.t + BODY * 0.5) { const along = x * Math.cos(g.a) + y * Math.sin(g.a), side = Math.abs(-x * Math.sin(g.a) + y * Math.cos(g.a)); if (!(along > 0 && side < g.gap)) return true; }
      if (r < hl.RC + 3) for (const c of hl.circles) if (Math.hypot(x - c.x, y - c.y) < c.r + BODY * 0.6) return true;
    }
    // The room inside Poseidon's temple: four walls and one door, in its east end.
    if (t?.room) { const dx = x - t.x, dy = y - t.y, hx = t.room.l / 2, hy = t.room.w / 2, on = (v, h) => Math.abs(Math.abs(v) - h) < 1.1 + BODY * 0.5; if (Math.abs(dx) < hx + 1.6 && Math.abs(dy) < hy + 1.6 && ((on(dy, hy)) || (on(dx, hx) && !(dx > 0 && Math.abs(dy) < t.room.door / 2 - 0.8)))) return true; }
    return false;
  };
  const floorAt = (x, y) => { const what = {}; const z = plan().groundZ(x, y, what); return z == null || what.kind === 'water' ? null : { z: city.localFloor(x, y), kind: what.kind }; };
  const canStand = (x, y, from = w.z) => { const f = floorAt(x, y); return !!f && Math.abs(f.z - from) <= STEP_UP && !blocked(x, y); };
  // Move by (dx, dy), in short steps; against something solid, slide along it.
  const move = (dx, dy) => {
    const len = Math.hypot(dx, dy), n = Math.max(1, Math.ceil(len / 0.35));
    for (let i = 0; i < n; i++) {
      const sx = dx / n, sy = dy / n;
      let done = false;
      for (const [turn, part] of [[0, 1], [0.6, 0.8], [-0.6, 0.8], [1.15, 0.5], [-1.15, 0.5]]) {
        const c = Math.cos(turn), s = Math.sin(turn), nx = w.x + (sx * c - sy * s) * part, ny = w.y + (sx * s + sy * c) * part;
        if (canStand(nx, ny)) { w.x = nx; w.y = ny; w.z = floorAt(nx, ny).z; done = true; break; }
      }
      if (!done) { w.vel = [0, 0]; break; }
    }
  };
  // The nearest place to (x, y) where a person can stand.
  const footing = (x, y, reach = 90) => {
    for (let r = 0; r <= reach; r += 1.5) for (let k = 0; k < (r ? 16 : 1); k++) { const a = (k / 16) * Math.PI * 2, px = x + r * Math.cos(a), py = y + r * Math.sin(a), f = floorAt(px, py); if (f && !blocked(px, py)) return [px, py, f.z]; }
    return null;
  };

  // ---------- the eye ----------
  const forward = () => city.toCity(Math.sin(w.dir), Math.cos(w.dir));   // in the city's frame
  const place = (dt = 0) => {
    w.zs += (w.z - w.zs) * (dt ? 1 - Math.exp(-dt * 11) : 1);
    const speed = Math.hypot(w.vel[0], w.vel[1]);
    if (speed > 0.6) w.bob += dt * (speed > 9 ? 13 : 9.5);
    const [sx, sy] = city.toScene(w.x, w.y), [lon, lat] = city.toLonLat(sx, sy);
    control.walk = { lon, lat, yaw: w.dir, pitch: w.pitch, eye: EYE, lift: w.zs - w.z + (speed > 0.6 ? Math.sin(w.bob) * 0.035 : 0) };
  };
  const eye = () => [w.x, w.y, w.zs + EYE];

  // ---------- what is in front of the walker ----------
  const find = () => {
    const [fx, fy] = forward(), cp = Math.cos(w.pitch), d = [fx * cp, fy * cp, Math.sin(w.pitch)], e = eye();
    let best = null, score = 0.9;
    for (const h of w.hotspots) {
      const v = [h.x - e[0], h.y - e[1], h.z - e[2]], dist = Math.hypot(v[0], v[1], v[2]);
      if (dist > h.reach || dist < 0.3) continue;
      // Wide things (a panel on the wall) are easier to aim at than their middle alone.
      const dot = (v[0] * d[0] + v[1] * d[1] + v[2] * d[2]) / dist, need = Math.cos(Math.min(0.75, Math.atan2((h.size ?? 1.5) / 2, dist) + 0.1));
      if (dot > need && dot - need + 1 > score) { best = h; score = dot - need + 1; }
    }
    return best;
  };
  const hint = $('#w-use'), whereEl = $('#w-where');
  const use = (h = w.hot) => { if (h) { w.used = true; w.goal = null; h.act(h); } };
  // A click or a tap at a point of the canvas: on a thing that can be used, it is used; on the ground, the walker goes there.
  const point = (px, py) => {
    const f = city.site.frame, r = control.ray(px, py), [dx, dy] = city.toCity(dot(r, f.east), dot(r, f.north)), d = [dx, dy, dot(r, f.up)], e = eye();
    let best = null, near = Infinity;
    for (const h of w.hotspots) {
      const v = [h.x - e[0], h.y - e[1], h.z - e[2]], t = v[0] * d[0] + v[1] * d[1] + v[2] * d[2];
      if (t < 0.3 || t > h.reach) continue;
      if (Math.hypot(v[0] - d[0] * t, v[1] - d[1] * t, v[2] - d[2] * t) < (h.size ?? 1.5) * 0.48 && t < near) { best = h; near = t; }
    }
    if (best) return use(best);
    if (d[2] > -0.04) return;   // the sky, or the far distance
    const t = Math.min(70, (w.zs - e[2]) / d[2]), at = footing(e[0] + d[0] * t, e[1] + d[1] * t, 6);
    if (at) { w.goal = [at[0], at[1]]; mark.position.set(at[0], at[1], at[2] + 0.04); mark.material.opacity = 0.9; if (mark.parent !== city.city.group) city.city.group.add(mark); world.stamp++; }
  };

  // ---------- once a frame ----------
  const tick = (dt) => {
    if (!w.on) return;
    if (!city.active || !city.city) return leave(false);
    const K = w.keys, typing = document.activeElement?.closest?.('input, textarea, [contenteditable]');
    let f = 0, s = 0, turn = 0;
    if (!typing) {
      if (K.has('KeyW') || K.has('ArrowUp')) f += 1;
      if (K.has('KeyS') || K.has('ArrowDown')) f -= 1;
      if (K.has('KeyD')) s += 1;
      if (K.has('KeyA')) s -= 1;
      if (K.has('ArrowRight')) turn += 1;
      if (K.has('ArrowLeft')) turn -= 1;
    }
    if (w.stick) { f -= w.stick.dy; s += w.stick.dx; }
    const push = Math.hypot(f, s);
    if (push > 1) { f /= push; s /= push; }
    let run = !typing && (K.has('ShiftLeft') || K.has('ShiftRight')) || (w.stick && Math.hypot(w.stick.dx, w.stick.dy) > 0.93);
    const [fx, fy] = forward(), k = 1 - Math.exp(-dt * 10);
    let want = [(fx * f + fy * s), (fy * f - fx * s)];
    // Going to where the ground was clicked: straight there, until it is reached, something is in the way, or a key or the stick takes over.
    if (w.goal) {
      const gx = w.goal[0] - w.x, gy = w.goal[1] - w.y, far = Math.hypot(gx, gy);
      if (push > 0.05 || far < 0.45 || (w.stuck ?? 0) > 0.5) { w.goal = null; w.stuck = 0; } else { want = [gx / far, gy / far]; run = far > 22; if (far < 2.5) want = want.map((v) => v * Math.max(0.35, far / 2.5)); }
    }
    if (!w.goal && mark.material.opacity > 0) { mark.material.opacity = Math.max(0, mark.material.opacity - dt * 3); world.stamp++; }
    const speed = run ? RUN : WALK;
    w.vel[0] += (want[0] * speed - w.vel[0]) * k;
    w.vel[1] += (want[1] * speed - w.vel[1]) * k;
    if (turn) w.dir += turn * dt * 1.9;
    const going = Math.hypot(w.vel[0], w.vel[1]);
    const before = `${w.x.toFixed(2)},${w.y.toFixed(2)},${w.dir.toFixed(3)},${w.pitch.toFixed(3)},${(w.zs - w.z).toFixed(2)}`;
    const fromX = w.x, fromY = w.y;
    if (going > 0.05) move(w.vel[0] * dt, w.vel[1] * dt);
    if (w.goal) w.stuck = Math.hypot(w.x - fromX, w.y - fromY) < going * dt * 0.2 ? (w.stuck ?? 0) + dt : 0;
    place(dt);
    if (going > 1.2 && Math.hypot(w.vel[0], w.vel[1]) > 1.2) { w.moved = true; ctx.sound?.step(run); }
    if (before !== `${w.x.toFixed(2)},${w.y.toFixed(2)},${w.dir.toFixed(3)},${w.pitch.toFixed(3)},${(w.zs - w.z).toFixed(2)}`) world.stamp++;
    // Where this is, and what the air there sounds like.
    const hl = city.city.hall, t = city.city.temple, r = Math.hypot(w.x, w.y), kind = floorAt(w.x, w.y)?.kind;
    const name = hl && r < hl.RI ? 'The hall' : hl && r < hl.RG ? 'Inside the wall of gold' : t && Math.abs(w.x - t.x) < t.L / 2 && Math.abs(w.y - t.y) < t.W / 2 ? "Poseidon's temple" : PLACES[kind] ?? '';
    if (name !== w.where) { w.where = name; whereEl.textContent = name; whereEl.classList.remove('show'); void whereEl.offsetWidth; whereEl.classList.add('show'); }
    const air = name === 'The hall' ? 'hall' : 'city';
    if (air !== w.place) { w.place = air; ctx.sound?.air(air); ctx.onWalkPlace?.(air); }
    const hot = find();
    if (hot !== w.hot) {
      w.hot = hot;
      hint.hidden = !hot;
      if (hot) hint.innerHTML = `<span>${ctx.esc(hot.label)}</span>`;
    }
  };

  // ---------- keys, mouse, fingers ----------
  const turnBy = (dx, dy, k) => { w.dir += dx * k; w.pitch = clamp(w.pitch - dy * k, -1.25, 1.35); };
  addEventListener('keydown', (e) => {
    if (!w.on || e.target.closest?.('input, textarea, [contenteditable]')) return;
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight', 'Space'].includes(e.code)) { w.keys.add(e.code); e.preventDefault(); }
    if ((e.code === 'KeyE' || e.code === 'Enter') && !e.repeat) { use(); e.preventDefault(); }
  });
  addEventListener('keyup', (e) => w.keys.delete(e.code));
  addEventListener('blur', () => w.keys.clear());
  const fingers = new Map(), stickEl = $('#w-stick');
  canvas.addEventListener('pointerdown', (e) => {
    if (!w.on) return;
    const r = canvas.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    // On a phone the lower left of the screen is a stick to walk with. Everywhere else, a drag looks and a tap points.
    const kind = e.pointerType !== 'mouse' && x < r.width * 0.42 && y > r.height * 0.45 && !w.stick && Math.hypot(x - 84, y - (r.height - 128)) < 110 ? 'stick' : 'look';
    fingers.set(e.pointerId, { kind, x, y, x0: x, y0: y, t: performance.now(), mouse: e.pointerType === 'mouse' });
    if (kind === 'stick') { w.stick = { dx: 0, dy: 0 }; w.goal = null; stickEl.classList.add('on'); }
    canvas.setPointerCapture?.(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    const p = fingers.get(e.pointerId);
    if (!w.on || !p) return;
    const r = canvas.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    if (p.kind === 'stick') {
      const dx = (x - p.x0) / 56, dy = (y - p.y0) / 56, l = Math.hypot(dx, dy), m = l > 1 ? 1 / l : 1;
      w.stick = { dx: dx * m, dy: dy * m };
      stickEl.firstElementChild.style.transform = `translate(${dx * m * 30}px, ${dy * m * 30}px)`;
    } else turnBy(x - p.x, y - p.y, p.mouse ? 0.004 : 0.0055);
    p.x = x; p.y = y;
  });
  const up = (e) => {
    const p = fingers.get(e.pointerId);
    if (!p) return;
    fingers.delete(e.pointerId);
    if (p.kind === 'stick') { w.stick = null; stickEl.classList.remove('on'); stickEl.firstElementChild.style.transform = ''; return; }
    if (w.on && Math.hypot(p.x - p.x0, p.y - p.y0) < 7 && performance.now() - p.t < 400) point(p.x, p.y);
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  hint.addEventListener('click', () => use());

  // ---------- coming and going ----------
  // Stand at (x, y) of the city's frame, or the nearest footing to it, looking along `dir` (compass, radians) or at `look` [x, y].
  const enter = ({ x = 0, y = -60, dir = null, look = null } = {}) => {
    if (!city.active || !city.city) return false;
    const at = footing(x, y);
    if (!at) return false;
    [w.x, w.y, w.z] = at; w.zs = w.z;
    if (look) { const [sx, sy] = city.toScene(look[0] - w.x, look[1] - w.y); w.dir = Math.atan2(sx, sy); } else w.dir = dir ?? control.heading;
    w.pitch = 0; w.vel = [0, 0]; w.keys.clear(); w.goal = null; w.hot = null; w.where = ''; w.place = null; hint.hidden = true;
    control.pointers.clear(); control.fly = null;
    if (!w.on) { w.on = true; el.hidden = false; stage.classList.add('walking'); ctx.onWalk?.(true); }
    place();
    world.stamp++;
    return true;
  };
  const leave = (fly = true) => {
    if (!w.on) return;
    w.on = false;
    w.goal = null; mark.removeFromParent();
    el.hidden = true; el.classList.remove('went');
    stage.classList.remove('walking');
    const at = control.walk;
    control.walk = null;
    ctx.sound?.air(null);
    if (at) { control.jump({ lon: at.lon, lat: at.lat, range: 40, tilt: 1.2, heading: w.dir }); if (fly) control.flyTo({ lon: at.lon, lat: at.lat, range: 420, tilt: 1.05, heading: w.dir }, 2.2); }
    world.stamp++;
    ctx.onWalk?.(false);
  };
  world.beforeFrame = tick;
  return { enter, leave, use, footing, canStand, state: w, hotspots: w.hotspots, eye, forward, get on() { return w.on; } };
};
