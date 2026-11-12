// Camera for a globe: it looks at a point on the ground from a distance, with a compass heading and a tilt.
// Drag moves the ground under the pointer, the wheel or a pinch zooms towards the pointer, a second finger or the right button turns and tilts.
import * as THREE from 'three';
import { R, DEG, clamp, lerp, frame, fromDir, toDir, dot, cross, norm, add, scale, raySphere, wrapLon, arc } from './geo.js';

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export class GlobeCamera {
  constructor(camera, dom, globe) {
    this.camera = camera;
    this.dom = dom;
    this.globe = globe;
    this.lon = -30 * DEG; this.lat = 25 * DEG; this.range = 1.75e7; this.heading = 0; this.tilt = 0;
    this.goalRange = this.range; this.goalHeading = 0; this.goalTilt = 0;
    this.maxRange = 6e7;
    this.floor = null;         // (lon, lat) => height above the sphere of something built on the ground there (Plato's city), or null
    this.inCity = false;       // the look-at point stands on such a thing: the camera may come down to street level
    this.walk = null;          // on foot (walk.js): { lon, lat, yaw, pitch, eye, lift }. The camera is then an eye, not an orbit.
    this.groundH = 0;          // smoothed terrain height at the target, exaggerated
    this.pos = [0, 0, 0];
    this.basis = { right: [1, 0, 0], up: [0, 1, 0], fwd: [0, 0, -1] };
    this.vel = [0, 0];
    this.fly = null;
    this.anchor = null;
    this.idle = true;          // nobody has touched it yet: turn slowly
    this.moved = 0;
    this.onChange = null;
    this.onTap = null;
    this.wheelNeedsKey = false;
    this.shift = [0, 0];       // where the look-at point sits on screen, in units of half the frame: moves it clear of an open panel
    this.goalShift = [0, 0];
    this.onWheelBlocked = null;
    this.pointers = new Map();
    this.bind();
    this.place();
  }

  get fovY() { return this.camera.fov * DEG; }
  get minRange() { return this.inCity ? 14 : 150; }
  size() { return [this.dom.clientWidth || 1, this.dom.clientHeight || 1]; }

  // Work out position and orientation from the look-at state, keep above the terrain, write the three.js matrices.
  place() {
    if (this.walk) return this.placeWalk();
    const g = this.globe;
    const exag = g ? g.shared.uExag.value : 1;
    const sea = g && g.shared.uWater.value > 0.5 ? g.shared.uSea.value : -1e5;
    const f = frame(this.lon, this.lat);
    const fwdH = add(scale(f.north, Math.cos(this.heading)), f.east, Math.sin(this.heading));
    const T = scale(f.up, R + this.groundH);
    const back = add(scale(f.up, Math.cos(this.tilt)), fwdH, -Math.sin(this.tilt));
    let C = add(T, back, this.range);
    // Never go under the ground the camera is over.
    let camR = Math.hypot(C[0], C[1], C[2]);
    const [clon, clat] = fromDir(C);
    const built = this.floor?.(clon, clat) ?? null;
    const under = Math.max(g ? Math.max(g.heightAt(clon, clat) ?? 0, sea) * exag : 0, built ?? -1e9);
    const clear = Math.max(built == null ? 25 : 1.7, this.range * 0.04);
    if (camR < R + under + clear) { C = scale(C, (R + under + clear) / camR); camR = R + under + clear; }
    const z = norm(add(C, T, -1));
    const hint = add(scale(fwdH, Math.cos(this.tilt)), f.up, Math.sin(this.tilt));
    const x = norm(cross(hint, z));
    const y = cross(z, x);
    this.pos = C;
    this.basis = { right: x, up: y, fwd: scale(z, -1) };
    this.camLon = clon; this.camLat = clat; this.under = under; this.altitude = camR - R - under;

    const near = Math.max(built == null ? 1.5 : 0.5, 0.06 * Math.min(this.altitude, this.range));
    const occ = R - 11000 * exag;
    const far = Math.sqrt(Math.max(camR * camR - occ * occ, 0)) + Math.sqrt((R + 9000 * exag) ** 2 - occ * occ) + 1000;
    const cam = this.camera;
    cam.near = near; cam.far = Math.max(far, near * 10);
    cam.updateProjectionMatrix();
    cam.projectionMatrix.elements[8] = -this.shift[0];
    cam.projectionMatrix.elements[9] = -this.shift[1];
    cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
    cam.matrixAutoUpdate = false;
    cam.matrix.set(x[0], y[0], z[0], C[0], x[1], y[1], z[1], C[1], x[2], y[2], z[2], C[2], 0, 0, 0, 1);
    cam.matrixWorld.copy(cam.matrix);
    cam.matrixWorldInverse.copy(cam.matrix).invert();
  }

  // On foot: the eye stands `eye` metres above the floor at (lon, lat) and looks along yaw (compass, clockwise from
  // north) and pitch (up is positive). The orbit's own numbers are kept in step, so the sun, the labels and a later
  // flight all start from where the walker stands.
  placeWalk() {
    const w = this.walk, g = this.globe, exag = g ? g.shared.uExag.value : 1;
    const f = frame(w.lon, w.lat);
    const stand = this.floor?.(w.lon, w.lat) ?? (g ? (g.heightAt(w.lon, w.lat) ?? 0) * exag : 0);
    const camR = R + stand + w.eye + (w.lift ?? 0);
    const C = scale(f.up, camR);
    const ahead = add(scale(f.north, Math.cos(w.yaw)), f.east, Math.sin(w.yaw));
    const fwd = norm(add(scale(ahead, Math.cos(w.pitch)), f.up, Math.sin(w.pitch)));
    const z = scale(fwd, -1), x = norm(cross(f.up, z)), y = cross(z, x);
    this.pos = C;
    this.basis = { right: x, up: y, fwd };
    this.lon = this.camLon = w.lon; this.lat = this.camLat = w.lat; this.heading = this.goalHeading = w.yaw; this.tilt = w.pitch;
    this.groundH = this.under = stand; this.altitude = w.eye;
    const occ = R - 11000 * exag;
    const far = Math.sqrt(Math.max(camR * camR - occ * occ, 0)) + Math.sqrt((R + 9000 * exag) ** 2 - occ * occ) + 1000;
    const cam = this.camera;
    cam.near = 0.14; cam.far = far;
    cam.updateProjectionMatrix();
    cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
    cam.matrixAutoUpdate = false;
    cam.matrix.set(x[0], y[0], z[0], C[0], x[1], y[1], z[1], C[1], x[2], y[2], z[2], C[2], 0, 0, 0, 1);
    cam.matrixWorld.copy(cam.matrix);
    cam.matrixWorldInverse.copy(cam.matrix).invert();
  }

  // Unit ray through a point of the canvas, in CSS pixels.
  ray(px, py) {
    const [w, h] = this.size();
    const ty = Math.tan(this.fovY / 2), tx = ty * (w / h);
    const nx = (px / w) * 2 - 1 - this.shift[0], ny = 1 - (py / h) * 2 - this.shift[1];
    const b = this.basis;
    return norm([b.fwd[0] + b.right[0] * nx * tx + b.up[0] * ny * ty, b.fwd[1] + b.right[1] * nx * tx + b.up[1] * ny * ty, b.fwd[2] + b.right[2] * nx * tx + b.up[2] * ny * ty]);
  }

  // The ground under a canvas point: { lon, lat, height (true metres), distance }, or null when it points at the sky.
  pick(px, py) {
    const g = this.globe;
    const exag = g.shared.uExag.value;
    const sea = g.shared.uWater.value > 0.5 ? g.shared.uSea.value : -1e5;
    const d = this.ray(px, py);
    let h = this.groundH, hit = null;
    for (let i = 0; i < 5; i++) {
      const t = raySphere(this.pos, d, R + h);
      if (t < 0) return hit;
      const p = add(this.pos, d, t);
      const [lon, lat] = fromDir(p);
      const real = g.heightAt(lon, lat) ?? 0;
      hit = { lon, lat, height: real, distance: t };
      h = Math.max(Math.max(real, sea) * exag, this.floor?.(lon, lat) ?? -1e9);
    }
    return hit;
  }

  touch() {
    this.idle = false;
    this.fly = null;
    this.moved = performance.now();
  }

  bind() {
    const el = this.dom;
    el.style.touchAction = 'none';
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('pointerdown', (e) => {
      if (this.walk) return;   // on foot the pointer belongs to walk.js
      el.setPointerCapture?.(e.pointerId);
      const r = el.getBoundingClientRect();
      const p = { x: e.clientX - r.left, y: e.clientY - r.top, x0: e.clientX - r.left, y0: e.clientY - r.top, button: e.button, mod: e.ctrlKey || e.shiftKey || e.metaKey || e.altKey, t: performance.now() };
      this.pointers.set(e.pointerId, p);
      this.touch();
      this.vel = [0, 0];
      this.anchor = null;
      this.goalRange = this.range;
      if (this.pointers.size === 1) this.grab = this.pick(p.x, p.y);
      if (this.pointers.size === 2) this.pinch = this.pinchState();
    });
    el.addEventListener('pointermove', (e) => {
      if (this.walk) return;
      const p = this.pointers.get(e.pointerId);
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      this.hover = { x, y };
      if (!p) return;
      const dx = x - p.x, dy = y - p.y;
      p.x = x; p.y = y;
      if (this.pointers.size === 1) {
        if (p.button === 2 || p.button === 1 || p.mod) this.orbit(dx, dy);
        else this.pan(p, dx, dy);
      } else if (this.pointers.size === 2) this.pinchMove();
      this.onChange?.();
    });
    const up = (e) => {
      const p = this.pointers.get(e.pointerId);
      if (!p) return;
      this.pointers.delete(e.pointerId);
      if (this.pointers.size === 0 && Math.hypot(p.x - p.x0, p.y - p.y0) < 6 && performance.now() - p.t < 400) this.onTap?.(p.x, p.y);
      if (this.pointers.size === 1) { const q = [...this.pointers.values()][0]; this.grab = this.pick(q.x, q.y); }
      this.pinch = null;
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('wheel', (e) => {
      // Inside a page column the wheel belongs to the page, unless a key is held. Pinch on a trackpad arrives with ctrlKey set.
      if (this.walk) return;
      if (this.wheelNeedsKey && !(e.ctrlKey || e.metaKey)) { this.onWheelBlocked?.(); return; }
      e.preventDefault();
      this.touch();
      const r = el.getBoundingClientRect();
      const unit = e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? 400 : 1;
      const k = e.ctrlKey ? 0.012 : 0.0016;
      this.goalRange = clamp(this.goalRange * Math.exp(clamp(e.deltaY * unit, -300, 300) * k), this.minRange, this.maxRange);
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const g = this.pick(x, y);
      this.anchor = g ? { lon: g.lon, lat: g.lat, x, y } : null;
    }, { passive: false });
    el.addEventListener('dblclick', (e) => {
      if (this.walk) return;
      const r = el.getBoundingClientRect();
      const g = this.pick(e.clientX - r.left, e.clientY - r.top);
      if (g) this.flyTo({ lon: g.lon, lat: g.lat, range: Math.max(this.range * 0.35, this.minRange * 2) }, 0.9);
    });
  }

  pan(p, dx, dy) {
    const before = [this.lon, this.lat];
    const cur = this.pick(p.x, p.y);
    if (this.grab && cur) {
      this.lon = wrapLon(this.lon + wrapLon(this.grab.lon - cur.lon));
      this.lat = clamp(this.lat + (this.grab.lat - cur.lat), -89 * DEG, 89 * DEG);
    } else {
      // The pointer is off the planet: turn by screen distance.
      const [, h] = this.size();
      const k = (2 * Math.tan(this.fovY / 2) * this.range) / h / R;
      const c = Math.cos(this.heading), s = Math.sin(this.heading);
      this.lon = wrapLon(this.lon - ((dx * c + dy * s) * k) / Math.max(Math.cos(this.lat), 0.2));
      this.lat = clamp(this.lat + (dy * c - dx * s) * k, -89 * DEG, 89 * DEG);
    }
    this.place();
    const now = performance.now();
    const dt = Math.max((now - (this.lastPan ?? now - 16)) / 1000, 0.004);
    this.lastPan = now;
    const v = [wrapLon(this.lon - before[0]) / dt, (this.lat - before[1]) / dt];
    this.vel = [lerp(this.vel[0], v[0], 0.5), lerp(this.vel[1], v[1], 0.5)];
  }

  orbit(dx, dy) {
    this.heading = this.goalHeading = this.heading - dx * 0.006;
    this.tilt = this.goalTilt = clamp(this.tilt - dy * 0.005, 0, this.maxTilt());
    this.place();
  }

  maxTilt() {
    // Near the ground the camera can look almost along it; from orbit a steep tilt only shows space.
    if (this.inCity && this.range < 900) return lerp(88.5, 84, clamp((this.range - 200) / 700, 0, 1)) * DEG;
    return lerp(84, 62, clamp((Math.log10(this.range) - 5.2) / 1.8, 0, 1)) * DEG;
  }

  pinchState() {
    const [a, b] = [...this.pointers.values()];
    return { d: Math.hypot(a.x - b.x, a.y - b.y), ang: Math.atan2(b.y - a.y, b.x - a.x), cy: (a.y + b.y) / 2, cx: (a.x + b.x) / 2, range: this.range, heading: this.heading, tilt: this.tilt, grab: this.pick((a.x + b.x) / 2, (a.y + b.y) / 2) };
  }

  pinchMove() {
    const s = this.pinch;
    if (!s) return;
    const [a, b] = [...this.pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y), ang = Math.atan2(b.y - a.y, b.x - a.x), cy = (a.y + b.y) / 2, cx = (a.x + b.x) / 2;
    this.range = this.goalRange = clamp((s.range * s.d) / Math.max(d, 1), this.minRange, this.maxRange);
    let turn = ang - s.ang;
    turn = Math.atan2(Math.sin(turn), Math.cos(turn));
    // Small twists while pinching are noise from the fingers; only a clear twist turns the map.
    if (Math.abs(turn) > 0.12) this.heading = this.goalHeading = s.heading + (turn - Math.sign(turn) * 0.12);
    const lift = cy - s.cy;
    const apart = Math.abs(d - s.d);
    if (Math.abs(lift) > 24 && apart < 40) this.tilt = this.goalTilt = clamp(s.tilt - (lift - Math.sign(lift) * 24) * 0.006, 0, this.maxTilt());
    this.place();
    const cur = this.pick(cx, cy);
    if (s.grab && cur) {
      this.lon = wrapLon(this.lon + wrapLon(s.grab.lon - cur.lon));
      this.lat = clamp(this.lat + (s.grab.lat - cur.lat), -89 * DEG, 89 * DEG);
      this.place();
    }
  }

  // Travel to a view: { lon, lat (radians), range, heading, tilt }. Zooms out on the way when the trip is long.
  flyTo(to, seconds) {
    const from = { lon: this.lon, lat: this.lat, range: this.range, heading: this.heading, tilt: this.tilt };
    const target = { lon: to.lon ?? from.lon, lat: to.lat ?? from.lat, range: clamp(to.range ?? from.range, this.minRange, this.maxRange), heading: to.heading ?? 0, tilt: to.tilt ?? 0 };
    const angle = arc(from.lon, from.lat, target.lon, target.lat);
    const hop = Math.max(from.range, target.range, Math.min(angle * R * 1.4, 2.4e7));
    const dur = seconds ?? clamp(1.4 + angle * 1.6 + Math.abs(Math.log(from.range / target.range)) * 0.22 + Math.log(hop / Math.max(from.range, target.range)) * 0.18, 1.2, 6.5);
    let dh = target.heading - from.heading;
    dh = Math.atan2(Math.sin(dh), Math.cos(dh));
    this.fly = { from, target, hop, dur, t: 0, dh, a: toDir(from.lon, from.lat), b: toDir(target.lon, target.lat), angle };
    this.idle = false;
    this.anchor = null;
    this.vel = [0, 0];
  }

  zoomBy(factor) {
    this.touch();
    this.anchor = null;
    this.goalRange = clamp(this.goalRange * factor, this.minRange, this.maxRange);
  }

  jump(to) {
    Object.assign(this, { lon: to.lon ?? this.lon, lat: to.lat ?? this.lat, range: to.range ?? this.range, heading: to.heading ?? 0, tilt: to.tilt ?? 0 });
    this.goalRange = this.range; this.goalHeading = this.heading; this.goalTilt = this.tilt;
    this.fly = null;
    this.place();
  }

  update(dt) {
    if (this.walk) { this.fly = null; this.inCity = true; this.shift = [0, 0]; this.place(); return; }
    const g = this.globe;
    const exag = g.shared.uExag.value;
    const sea = g.shared.uWater.value > 0.5 ? g.shared.uSea.value : -1e5;
    const ks = 1 - Math.exp(-dt * 7);
    this.shift = [lerp(this.shift[0], this.goalShift[0], ks), lerp(this.shift[1], this.goalShift[1], ks)];
    if (this.fly) {
      const f = this.fly;
      f.t = Math.min(1, f.t + dt / f.dur);
      // On a long trip the camera climbs first, crosses while it is high, then comes down: it never skims the ground at speed.
      const far = f.hop > 3 * Math.max(f.from.range, f.target.range);
      const k = far ? ease(clamp((f.t - 0.14) / 0.72, 0, 1)) : ease(f.t);
      if (f.angle > 1e-9) {
        const s = Math.sin(f.angle);
        const wa = Math.sin((1 - k) * f.angle) / s, wb = Math.sin(k * f.angle) / s;
        const [lon, lat] = fromDir([f.a[0] * wa + f.b[0] * wb, f.a[1] * wa + f.b[1] * wb, f.a[2] * wa + f.b[2] * wb]);
        this.lon = lon; this.lat = lat;
      }
      const kz = ease(f.t);
      const base = Math.exp(lerp(Math.log(f.from.range), Math.log(f.target.range), kz));
      const lift = Math.sin(Math.PI * f.t);
      this.range = Math.exp(lerp(Math.log(base), Math.log(Math.max(f.hop, base)), far ? lift ** 0.7 : lift * lift));
      this.heading = f.from.heading + f.dh * kz;
      this.tilt = lerp(f.from.tilt, f.target.tilt, kz) * (far ? 1 - 0.85 * lift : 1);
      this.goalRange = this.range; this.goalHeading = this.heading; this.goalTilt = this.tilt;
      if (f.t >= 1) { this.fly = null; this.heading = f.target.heading; }
    } else {
      if (this.idle && this.spin !== false && this.range > 4e6) this.lon = wrapLon(this.lon + dt * 0.035);
      if (!this.pointers.size) {
        // Coast after a flick.
        if (Math.abs(this.vel[0]) + Math.abs(this.vel[1]) > 1e-7) {
          this.lon = wrapLon(this.lon + this.vel[0] * dt);
          this.lat = clamp(this.lat + this.vel[1] * dt, -89 * DEG, 89 * DEG);
          const decay = Math.exp(-dt * 4.5);
          this.vel = [this.vel[0] * decay, this.vel[1] * decay];
        }
        const k = 1 - Math.exp(-dt * 9);
        if (Math.abs(Math.log(this.goalRange / this.range)) > 1e-4) {
          this.range = Math.exp(lerp(Math.log(this.range), Math.log(this.goalRange), k));
          if (this.anchor) {
            this.place();
            const cur = this.pick(this.anchor.x, this.anchor.y);
            if (cur) {
              this.lon = wrapLon(this.lon + wrapLon(this.anchor.lon - cur.lon));
              this.lat = clamp(this.lat + (this.anchor.lat - cur.lat), -89 * DEG, 89 * DEG);
            }
          }
        } else this.anchor = null;
      }
      this.tilt = Math.min(this.tilt, this.maxTilt());
    }
    const built = this.floor?.(this.lon, this.lat) ?? null;
    this.inCity = built != null;
    if (this.goalRange < this.minRange) this.goalRange = this.minRange;
    const target = Math.max(Math.max(g.heightAt(this.lon, this.lat) ?? 0, sea) * exag, built ?? -1e9);
    this.groundH = lerp(this.groundH, target, 1 - Math.exp(-dt * 6));
    this.place();
  }

  // What the globe needs to choose tiles.
  view(pixelHeight) {
    const cam = this.camera;
    const rot = new THREE.Matrix4().copy(cam.matrixWorldInverse);
    rot.elements[12] = rot.elements[13] = rot.elements[14] = 0;
    return {
      pos: this.pos, lon: this.camLon, lat: this.camLat, ground: this.under / Math.max(this.globe.shared.uExag.value, 1e-6),
      viewProjectionRel: new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, rot),
      pxPerRad: pixelHeight / (2 * Math.tan(this.fovY / 2)),
    };
  }

  state() {
    return { lat: this.lat / DEG, lon: this.lon / DEG, range: this.range, heading: this.heading / DEG, tilt: this.tilt / DEG };
  }
}
