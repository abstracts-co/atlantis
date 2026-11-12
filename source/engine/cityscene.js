// Stands the rebuilt city on the globe at a chosen place, at true scale. The city lives in its own small scene whose
// origin is the city's centre, so three.js's lights, shadows and materials work at full precision; each frame its camera
// is the globe's camera seen from that frame. Both scenes draw into the same picture and depth, so air and tone apply to both.
//
// What the page may call (see research/city-rebuild-brief.md): place, remove, update, view, floorAt, pick, parts, viewOf,
// highlight, setGhost, cutaway; and read active, site, city, params.
import * as THREE from 'three';
import { R, DEG, frame, dot, clamp } from './geo.js';
import { buildCity, DEFAULTS, ENTRIES } from './city.js';
import { makeMaterials } from './city/materials.js';
import { loadTextures, MANIFEST } from './city/textures.js';

// The same sun and sky the ground shader uses (shaders.js, SUNLIGHT), so the city and the land round it are lit alike.
const sunColour = (mu) => {
  const zen = (Math.acos(clamp(mu, -1, 1)) * 180) / Math.PI;
  const m = Math.min(38, 1 / (Math.max(mu, 0) + 0.15 * Math.max(93.885 - zen, 0.5) ** -1.253));
  const fade = clamp((mu + 0.035) / 0.055, 0, 1);
  const s = fade * fade * (3 - 2 * fade);
  return [0.0464 + 0.0098 + 0.012, 0.1085 + 0.0282 + 0.012, 0.2648 + 0.0013 + 0.012].map((tau) => Math.exp(-tau * m) * s);
};
const skyColour = (mu) => {
  const day = clamp((mu + 0.14) / 0.44, 0, 1), d = day * day * (3 - 2 * day);
  const zenith = [0.10 + 0.10 * d, 0.13 + 0.17 * d, 0.26 + 0.24 * d];
  return zenith.map((v) => v * d * 0.55 + 0.004);
};

export class Reconstruction {
  constructor(world) {
    this.world = world;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.camera.matrixAutoUpdate = false;
    this.active = false;
    this.site = null;
    this.city = null;
    this.params = { ...DEFAULTS };
    this.pending = 0;      // pictures still on their way
    this.buildMs = null;   // how long the last build took, in script time
    this.ghost = false; this.lit = null; this.cut = false;
    const r = world.renderer;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    // The sun, with three shadow maps: close round the eye, a wider one, and the whole city. Only the first light
    // shines; the other two exist to carry their maps (see materials.js). They are redrawn only when they must be.
    const size = world.phone ? 1024 : 2048;
    this.suns = [0, 1, 2].map((i) => {
      const l = new THREE.DirectionalLight(0xffffff, Math.PI);
      l.castShadow = true;
      l.shadow.mapSize.set(i === 2 && !world.phone ? 4096 : size, i === 2 && !world.phone ? 4096 : size);
      l.shadow.autoUpdate = false;
      l.shadow.radius = 1.4;
      l.layers.enable(1);
      this.scene.add(l, l.target);
      return l;
    });
    this.cascades = [{ half: 0, c: new THREE.Vector3(1e9, 0, 0) }, { half: 0, c: new THREE.Vector3(1e9, 0, 0) }, { half: 0, c: new THREE.Vector3(1e9, 0, 0) }];
    // The sky the city's surfaces see and reflect: a dome that is brighter towards the horizon, with dim ground below.
    this.pmrem = new THREE.PMREMGenerator(r);
    this.skyUniforms = { uSky: { value: new THREE.Vector3(0.1, 0.16, 0.27) }, uSun: { value: new THREE.Vector3(0, 0, 1) }, uSunColour: { value: new THREE.Vector3(1, 1, 1) } };
    const dome = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), new THREE.ShaderMaterial({
      side: THREE.BackSide, uniforms: this.skyUniforms,
      vertexShader: 'varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
        void main() {
          vec3 d = normalize(vDir);
          float up = d.z;
          vec3 sky = mix(uSky * 0.9, (uSky + vec3(dot(uSky, vec3(0.34)))) * 1.7, 1.0 - pow(max(up, 0.0), 0.42));   // paler and brighter towards the horizon
          sky += uSunColour * 0.35 * pow(max(dot(d, uSun), 0.0), 24.0);
          vec3 ground = (uSky * 0.6 + uSunColour * max(uSun.z, 0.0) * 0.4) * vec3(0.92, 0.86, 0.76);   // sunlit pale stone and earth, seen from above them
          gl_FragColor = vec4(mix(ground, sky, smoothstep(-0.06, 0.04, up)), 1.0);
        }`,
    }));
    this.skyScene = new THREE.Scene();
    this.skyScene.add(dome);
    // A day sky for views from near the ground. The globe's own sky pass draws stars wherever nothing was drawn, also
    // by day (see HANDOFF.md); this dome stands in front of them. It follows the eye and is only shown when the eye is low.
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2 + 0.06), new THREE.ShaderMaterial({
      side: THREE.BackSide, uniforms: this.skyUniforms, depthWrite: true,
      vertexShader: 'varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
        void main() {
          vec3 d = normalize(vDir.xzy * vec3(1.0, -1.0, 1.0));
          float up = max(d.z, 0.0);
          vec3 sky = mix(uSky * 1.25, (uSky + vec3(dot(uSky, vec3(0.3)))) * 1.5, 1.0 - pow(up, 0.5));
          sky += uSunColour * 0.25 * pow(max(dot(d, uSun), 0.0), 12.0);
          gl_FragColor = vec4(sky, 1.0);
        }`,
    }));
    this.dome.rotation.x = Math.PI / 2;   // the sphere's pole to +Z
    this.dome.frustumCulled = false; this.dome.renderOrder = -1;
    this.scene.add(this.dome);
    this.lastSun = new THREE.Vector3();
    this.env = null;
    this.materials = null;
    // The harbour water mirrors the walls and ships beside it: they are drawn once more, upside down, into this.
    this.mirror = world.phone ? null : { target: null, camera: new THREE.PerspectiveCamera(), vp: new THREE.Matrix4(), on: false };
    if (this.mirror) this.mirror.camera.layers.set(1);
    this.ray = new THREE.Raycaster();
  }

  // ---------- frames ----------
  // The city's own frame has the sea towards -Y. The scene's has east and north. They differ by a turn about Z.
  get turn() { return Math.PI - this.params.seaBearing * DEG; }
  toCity(x, y) { const a = -this.turn, c = Math.cos(a), s = Math.sin(a); return [c * x - s * y, s * x + c * y]; }
  toScene(x, y) { const a = this.turn, c = Math.cos(a), s = Math.sin(a); return [c * x - s * y, s * x + c * y]; }
  // Scene metres east and north of the centre, to longitude and latitude in radians, and back.
  toLonLat(x, y) { const lat0 = this.site.lat * DEG; return [this.site.lon * DEG + x / (R * Math.cos(lat0)), lat0 + y / R]; }
  fromLonLat(lon, lat) { const lat0 = this.site.lat * DEG; let dl = lon - this.site.lon * DEG; dl = Math.atan2(Math.sin(dl), Math.cos(dl)); return [dl * R * Math.cos(lat0), (lat - lat0) * R]; }

  // Put the city at lat/lon in degrees. bearing: compass direction from the city to the sea, where its canal runs.
  place({ lat, lon, bearing = 180, stadion = this.params.stadion }) {
    const changed = !this.city || stadion !== this.params.stadion;
    this.params = { ...this.params, stadion, seaBearing: bearing };
    if (changed) {
      const t0 = performance.now();
      if (this.city) { this.scene.remove(this.city.group); for (const m of this.city.meshes) m.geometry.dispose(); }
      if (!this.materials) { this.materials = makeMaterials({ phone: this.world.phone }); this.loadPictures(); }
      this.city = buildCity(this.params, { phone: this.world.phone, materials: this.materials });
      this.scene.add(this.city.group);
      const u = this.materials.waterUniforms, s = this.city.shores;
      for (let i = 0; i < 6; i++) u.uShores.value[i] = s[i];
      u.uCanal.value.z = this.city.plan.canalHalf;
      this.buildMs = Math.round(performance.now() - t0);
      this.applyLook();
    }
    this.city.group.rotation.z = this.turn;
    this.city.group.updateMatrixWorld(true);
    { const [cx, cy] = this.toScene(0, -1); this.materials.waterUniforms.uCanal.value.x = cx; this.materials.waterUniforms.uCanal.value.y = cy; }
    this.site = { lat, lon, frame: frame(lon * DEG, lat * DEG) };
    this.active = true;
    this.lastSun.set(0, 0, 0);
    for (const c of this.cascades) c.half = 0;
    this.ground();
    this.world.stamp++;
    return this.city;
  }

  // The CC0 pictures in city/ replace the drawn ones when they arrive. If none arrives the drawn ones stay.
  loadPictures() {
    if (!Object.keys(MANIFEST).length) return;
    this.pending++;
    loadTextures(this.world.phone ? 512 : 1024, MANIFEST).then((t) => {
      if (t) { const sh = this.materials.shared, old = [sh.tColour.value, sh.tDetail.value]; sh.tColour.value = t.colour; sh.tDetail.value = t.detail; for (const o of old) o.dispose(); this.pictures = { loaded: t.loaded, missing: t.missing }; } else this.pictures = { loaded: 0, missing: 'all' };
    }).catch((e) => { this.pictures = { loaded: 0, error: String(e) }; }).finally(() => { this.pending--; this.world.stamp++; });
  }

  remove() {
    this.active = false;
    this.site = null;
    const S = this.world.globe.shared;
    S.uPad.value.set(0, 0, 0, 0);
    this.world.stamp++;
  }

  // The level the city stands at: the sea if there is water there, otherwise the ground. It follows the sea-level slider.
  ground() {
    const g = this.world.globe, S = g.shared, st = this.site;
    const sea = S.uWater.value > 0.5 ? S.uSea.value : -1e5;
    const h = Math.max(g.heightAt(st.lon * DEG, st.lat * DEG) ?? 0, sea);
    st.h = h;
    const f = st.frame;
    S.uPad.value.set(f.up[0], f.up[1], f.up[2], this.city.radius - 80);
    S.uPadH.value = h - 2;
    const rr = R + h * S.uExag.value;
    st.origin = [f.up[0] * rr, f.up[1] * rr, f.up[2] * rr];
  }

  // ---------- the interface the page uses ----------
  // Height above the sphere of radius R, in scene metres, of the ground a person could stand on at that point
  // (longitude and latitude in radians), or null outside the modelled city. Water counts as its surface.
  floorAt(lon, lat) {
    if (!this.active || !this.city) return null;
    const [sx, sy] = this.fromLonLat(lon, lat);
    if (Math.hypot(sx, sy) > this.city.plan.edge) return null;
    const [x, y] = this.toCity(sx, sy), z = this.localFloor(x, y);
    return z == null ? null : this.site.h * this.world.globe.shared.uExag.value + z;
  }
  localFloor(x, y) {
    const z = this.city.plan.groundZ(x, y);
    if (z == null) return null;
    const t = this.city.temple, hl = this.city.hall;
    // The temple stands on four steps, each 1.7 m deep, all the way round: they can be climbed from any side.
    const out = Math.max(Math.abs(x - t.x) - t.L / 2, Math.abs(y - t.y) - t.W / 2);
    if (out < 5.1) return t.floor - Math.max(0, Math.ceil(out / 1.7)) * ((t.floor - t.z) / 4);
    if (hl && x * x + y * y < hl.RS * hl.RS) return hl.floor;                           // on the floor of the hall
    return z;
  }
  // The part under a point of the canvas (CSS pixels): { id, what, ref, kind, lon, lat } or null.
  pick(x, y) {
    if (!this.active || !this.city) return null;
    const el = this.world.renderer.domElement, w = el.clientWidth || 1, h = el.clientHeight || 1;
    this.ray.setFromCamera(new THREE.Vector2((x / w) * 2 - 1, 1 - (y / h) * 2), this.camera);
    const hits = this.ray.intersectObjects(this.city.meshes.filter((m) => m.visible && !m.userData.line), false);
    if (!hits.length) return null;
    const hit = hits[0], e = ENTRIES.get(hit.object.userData.id), [lon, lat] = this.toLonLat(hit.point.x, hit.point.y);
    return { id: hit.object.userData.id, what: e?.what ?? hit.object.userData.id, ref: e?.ref ?? null, kind: e?.kind ?? 'choice', lon, lat };
  }
  // Every part a visitor can go to, in the order of a walk from the sea to the temple: [{ id, what, ref, kind }].
  parts() { return this.city ? this.city.parts.map((p) => ({ ...p })) : []; }
  // A good view of one part, in the shape view() returns, or null if the id is unknown.
  viewOf(id) {
    const s = this.city?.spots[id];
    if (!s || !this.site) return null;
    const [sx, sy] = this.toScene(s[0], s[1]), [lon, lat] = this.toLonLat(sx, sy);
    return { lat, lon, range: s[2], tilt: s[3] * DEG, heading: ((((s[4] + this.params.seaBearing - 180) % 360) + 360) % 360) * DEG };
  }
  // Make one part stand out: the rest is dimmed. null puts everything back.
  highlight(id) { this.lit = id && this.city?.meshes.some((m) => m.userData.id === id) ? id : null; this.applyLook(); }
  // When on, what is our choice is drawn as a pale ghost and only what the text fixes stays solid.
  setGhost(on) { this.ghost = !!on; this.applyLook(); }
  // Lift the roof and the ceiling off Poseidon's temple, to see inside from above.
  cutaway(on) { this.cut = !!on; this.applyLook(); }
  applyLook() {
    if (!this.city) return;
    const M = this.materials;
    for (const m of this.city.meshes) {
      const u = m.userData;
      if (u.roof) m.visible = !this.cut;
      if (u.line) continue;
      const ghost = this.ghost && u.ghostable;
      if (u.water) { m.material = u.solid; continue; }
      m.material = ghost ? M.ghost : this.lit ? (u.id === this.lit ? M.glow : M.dim) : M.solid;
      m.castShadow = !ghost;
      if (u.lodHidden) m.visible = false;
    }
    M.seaDim.value = this.lit && this.lit !== 'harbours' && this.lit !== 'canal' ? 0.45 : 1;
    for (const c of this.cascades) c.half = 0;   // the shadows change with what is solid
    this.world.stamp++;
  }
  // The lab's spots, in scene metres east and north.
  labSpots() { const out = {}; for (const [k, v] of Object.entries(this.city.lab)) out[k] = this.toScene(v[0], v[1]); return out; }
  forceShadows() { this.cascades[0].half = 0; this.cascades[1].half = 0; }

  // ---------- once a frame ----------
  update() {
    if (!this.active) return null;
    this.ground();
    const { control, camera, sun, renderer } = this.world;
    const f = this.site.frame, o = this.site.origin;
    // The globe's camera, expressed in the city's frame (east, north, up from its centre). Done in doubles.
    const b = control.basis, back = [-b.fwd[0], -b.fwd[1], -b.fwd[2]];
    const rel = [control.pos[0] - o[0], control.pos[1] - o[1], control.pos[2] - o[2]];
    const L = (v) => [dot(v, f.east), dot(v, f.north), dot(v, f.up)];
    const x = L(b.right), y = L(b.up), z = L(back), p = L(rel);
    const cam = this.camera;
    cam.matrix.set(x[0], y[0], z[0], p[0], x[1], y[1], z[1], p[1], x[2], y[2], z[2], p[2], 0, 0, 0, 1);
    cam.matrixWorld.copy(cam.matrix);
    cam.matrixWorldInverse.copy(cam.matrix).invert();
    cam.projectionMatrix.copy(camera.projectionMatrix);
    cam.projectionMatrixInverse.copy(camera.projectionMatrixInverse);
    const M = this.materials, plan = this.city.plan;
    M.shared.uTime.value = this.world.time;
    this.dome.visible = p[2] < 2500 && p[2] > -50;
    if (this.dome.visible) { this.dome.position.set(p[0], p[1], p[2] - 40); this.dome.scale.setScalar(38000); this.dome.updateMatrixWorld(); }

    // Where the eye is looking on the ground.
    const fz = -z[2], reach = fz < -0.02 ? clamp((p[2] - plan.B) / -fz, 5, 6000) : 6000;
    const focus = [p[0] - z[0] * reach, p[1] - z[1] * reach], range = reach;

    // The town's blocks: detailed near the eye, plain far away.
    const [ex, ey] = this.toCity(p[0], p[1]);
    for (const s of this.city.sectors) {
      const near = s.high.length > 0 && Math.hypot(ex - s.cx, ey - s.cy, p[2]) < 640;
      if (near !== s.near) { s.near = near; this.cascades[0].half = 0; this.cascades[1].half = 0; }
      if (s.low) { s.low.visible = !near; s.low.userData.lodHidden = near; }
      for (const m of s.high) { m.visible = near; m.userData.lodHidden = !near; }
    }

    // The sun, the sky and the three shadow maps.
    const s = L([sun.dir.x, sun.dir.y, sun.dir.z]), mu = s[2];
    const sunMoved = this.lastSun.distanceToSquared(new THREE.Vector3(s[0], s[1], s[2])) > 1e-5;
    if (sunMoved) {
      this.lastSun.set(s[0], s[1], s[2]);
      const c = sunColour(mu), k = skyColour(mu);
      for (const l of this.suns) l.color.setRGB(c[0], c[1], c[2]);
      this.skyUniforms.uSky.value.set(k[0], k[1], k[2]);
      this.skyUniforms.uSun.value.set(s[0], s[1], s[2]);
      this.skyUniforms.uSunColour.value.set(c[0], c[1], c[2]);
      this.env?.dispose();
      this.env = this.pmrem.fromScene(this.skyScene, 0, 1, 200);
      this.scene.environment = this.env.texture;
      M.ghostUniforms.uColour.value.setRGB(k[0] * 2.2 + c[0] * 0.25, k[1] * 2.2 + c[1] * 0.25, k[2] * 2.2 + c[2] * 0.25);
      M.glowColour.setRGB(c[0] * 0.05 + k[0] * 0.12, c[1] * 0.05 + k[1] * 0.12, c[2] * 0.04 + k[2] * 0.1);
      for (const c2 of this.cascades) c2.half = 0;
    }
    const sd = [s[0], s[1], Math.max(s[2], 0.03)], sl = Math.hypot(sd[0], sd[1], sd[2]);
    sd[0] /= sl; sd[1] /= sl; sd[2] /= sl;
    const sinAlt = Math.max(sd[2], 0.14);
    const quant = (v) => 1.5 ** Math.ceil(Math.log(v) / Math.log(1.5));
    const near = quant(clamp(range * 1.1, 40, 620));
    const want = [
      { half: near, c: [focus[0] - z[0] * near * 0.35, focus[1] - z[1] * near * 0.35, plan.B] },
      { half: Math.min(near * 5.5, plan.edge * 1.02), c: [focus[0] - z[0] * near * 1.2, focus[1] - z[1] * near * 1.2, plan.B] },
      { half: plan.edge * 1.02, c: [0, 0, plan.B] },
    ];
    let drawn = 0;
    for (let i = 0; i < 3; i++) {
      const have = this.cascades[i], w = want[i], l = this.suns[i];
      const stale = have.half !== w.half || Math.hypot(have.c.x - w.c[0], have.c.y - w.c[1]) > w.half * 0.22;
      if (!stale || (drawn > 0 && i < 2 && have.half > 0)) continue;   // one of the moving maps a frame, unless nothing is there yet
      have.half = w.half; have.c.set(w.c[0], w.c[1], w.c[2]);
      const D = w.half * 1.6 + 80 / sinAlt + 200, depth = w.half * 1.5 + 80 / sinAlt, texel = (2 * w.half) / l.shadow.mapSize.x;
      l.position.set(w.c[0] + sd[0] * D, w.c[1] + sd[1] * D, w.c[2] + sd[2] * D);
      l.target.position.set(w.c[0], w.c[1], w.c[2]);
      l.target.updateMatrixWorld(); l.updateMatrixWorld();
      const sc = l.shadow.camera;
      sc.left = -w.half; sc.right = w.half; sc.top = w.half; sc.bottom = -w.half; sc.near = D - depth; sc.far = D + depth;
      sc.updateProjectionMatrix();
      l.shadow.bias = -(0.02 + texel * 1.1) / (2 * depth);
      l.shadow.normalBias = texel * 1.5 + 0.02;
      l.shadow.needsUpdate = true;
      if (i < 2) drawn++;
    }

    // The mirror in the harbour water, when the eye is low enough to see it.
    const mir = this.mirror, u = M.waterUniforms;
    const wantMirror = !!mir && p[2] < 1400 && p[2] > 0.3 && !this.ghost;
    if (wantMirror) {
      const size = renderer.getDrawingBufferSize(new THREE.Vector2()), mw = Math.max(2, size.x >> 1), mh = Math.max(2, size.y >> 1);
      if (!mir.target || mir.target.width !== mw || mir.target.height !== mh) { mir.target?.dispose(); mir.target = new THREE.WebGLRenderTarget(mw, mh, { type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: true }); }
      // The eye, its aim and its up, mirrored in the water (z = 0); the picture is laid on by projecting with this camera.
      const mc = mir.camera, eye = new THREE.Vector3(p[0], p[1], -p[2]);
      mc.fov = clamp((control.fovY / DEG) * 1.25, 10, 120); mc.aspect = camera.aspect; mc.near = 1; mc.far = 16000;
      mc.updateProjectionMatrix();
      mc.position.copy(eye); mc.up.set(y[0], y[1], -y[2]);
      mc.lookAt(eye.x - z[0], eye.y - z[1], eye.z + z[2]);
      mc.updateMatrixWorld();
      mc.matrixWorldInverse.copy(mc.matrixWorld).invert();
      mir.vp.multiplyMatrices(mc.projectionMatrix, mc.matrixWorldInverse);
      // Cut off everything under the water, by slanting the near plane on to it (Lengyel's oblique projection).
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.05).applyMatrix4(mc.matrixWorldInverse);
      const clip = new THREE.Vector4(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant), pm = mc.projectionMatrix, q = new THREE.Vector4();
      q.x = (Math.sign(clip.x) + pm.elements[8]) / pm.elements[0]; q.y = (Math.sign(clip.y) + pm.elements[9]) / pm.elements[5]; q.z = -1; q.w = (1 + pm.elements[10]) / pm.elements[14];
      clip.multiplyScalar(2 / clip.dot(q));
      pm.elements[2] = clip.x; pm.elements[6] = clip.y; pm.elements[10] = clip.z + 1; pm.elements[14] = clip.w;
      // The shadow maps are drawn with the main picture, not here: this camera sees only some of the city.
      const sm = renderer.shadowMap, auto = sm.autoUpdate, prev = renderer.getRenderTarget();
      sm.autoUpdate = false; sm.needsUpdate = false;
      renderer.setRenderTarget(mir.target);
      renderer.setClearColor(0x000000, 0);
      renderer.clear(true, true, false);
      renderer.render(this.scene, mc);
      renderer.setRenderTarget(prev);
      renderer.setClearColor(0x000000, 1);
      sm.autoUpdate = auto;
      u.tMirror.value = mir.target.texture; u.uMirrorVP.value.copy(mir.vp); u.uMirror.value = 1;
    } else u.uMirror.value = 0;
    return { scene: this.scene, camera: cam };
  }

  // A view that takes in the rings, for flying there.
  view() {
    return { lat: this.site.lat * DEG, lon: this.site.lon * DEG, range: this.city.coreRadius * 3.4, tilt: 58 * DEG, heading: ((this.params.seaBearing + 150) % 360) * DEG };
  }
}
