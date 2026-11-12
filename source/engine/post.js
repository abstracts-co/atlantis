// The frame after the planet is drawn: air, bloom and the film curve.
import * as THREE from 'three';
import { quadVertex, airFragment, compositeFragment, bloomDownFragment, bloomUpFragment, finalFragment } from './shaders.js';

const LEVELS = 5;

export class Pipeline {
  constructor(renderer, { samples = 4, steps = 20 } = {}) {
    this.renderer = renderer;
    this.samples = samples;
    const tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    tri.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
    this.quad = new THREE.Mesh(tri);
    this.quad.frustumCulled = false;
    this.quadScene = new THREE.Scene();
    this.quadScene.add(this.quad);
    this.quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const mat = (fragmentShader, uniforms) => new THREE.ShaderMaterial({ vertexShader: quadVertex, fragmentShader, uniforms, glslVersion: THREE.GLSL3, depthTest: false, depthWrite: false });
    // The two air passes look along the same rays, so they share these.
    const rays = { tDepth: { value: null }, uCam: { value: new THREE.Vector3() }, uRight: { value: new THREE.Vector3() }, uUp: { value: new THREE.Vector3() }, uFwd: { value: new THREE.Vector3() }, uTan: { value: new THREE.Vector2() }, uShift: { value: new THREE.Vector2() }, uNear: { value: 1 }, uFar: { value: 2 }, uSun: { value: new THREE.Vector3() } };
    this.atmo = mat(airFragment, { ...rays, uHaze: { value: 1 }, uSteps: { value: steps }, uAir: { value: 1 }, uThick: { value: 1 } });
    this.comp = mat(compositeFragment, { ...rays, tColor: { value: null }, tLight: { value: null }, tThrough: { value: null }, uPixAngle: { value: 0.001 } });
    this.down = mat(bloomDownFragment, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 0 } });
    this.up = mat(bloomUpFragment, { tSrc: { value: null }, tAdd: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.final = mat(finalFragment, { tColor: { value: null }, tBloom: { value: null }, uTexel: { value: new THREE.Vector2() }, uExposure: { value: 1 }, uBloom: { value: 0.06 }, uVignette: { value: 0.35 } });
    this.w = this.h = 0;
  }

  setSize(w, h) {
    if (w === this.w && h === this.h) return;
    this.w = w; this.h = h;
    this.dispose();
    const opts = { type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false };
    const depth = new THREE.DepthTexture(w, h);
    depth.type = THREE.FloatType;
    depth.minFilter = depth.magFilter = THREE.NearestFilter;
    this.rtScene = new THREE.WebGLRenderTarget(w, h, { ...opts, depthBuffer: true, depthTexture: depth, samples: this.samples });
    this.rtAir = new THREE.WebGLRenderTarget(w, h, opts);
    this.rtHalf = new THREE.WebGLRenderTarget(Math.max(2, w >> 1), Math.max(2, h >> 1), { ...opts, count: 2, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
    this.rtDown = []; this.rtUp = [];
    for (let i = 0; i < LEVELS; i++) {
      const lw = Math.max(2, w >> (i + 1)), lh = Math.max(2, h >> (i + 1));
      this.rtDown.push(new THREE.WebGLRenderTarget(lw, lh, opts));
      if (i < LEVELS - 1) this.rtUp.push(new THREE.WebGLRenderTarget(lw, lh, opts));
    }
  }

  dispose() {
    for (const t of [this.rtScene, this.rtAir, this.rtHalf, ...(this.rtDown ?? []), ...(this.rtUp ?? [])]) t?.dispose();
    this.rtScene?.depthTexture?.dispose();
  }

  pass(material, target) {
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.quadScene, this.quadCam);
  }

  // view: { pos (metres), basis { right, up, fwd }, tanY, aspect, near, far, sun: Vector3 }
  // extras: more { scene, camera } pairs drawn over the planet into the same picture and depth, in order.
  render(scene, camera, view, extras = []) {
    const r = this.renderer;
    r.setRenderTarget(this.rtScene);
    r.setClearColor(0x000000, 1);
    r.clear(true, true, false);
    r.render(scene, camera);
    for (const extra of extras) {
      r.render(extra.scene, extra.camera);   // a shadow pass switches targets, so come back to ours
      r.setRenderTarget(this.rtScene);
    }

    const a = this.atmo.uniforms;
    a.tDepth.value = this.rtScene.depthTexture;
    a.uCam.value.set(view.pos[0] / 1000, view.pos[1] / 1000, view.pos[2] / 1000);
    a.uRight.value.set(...view.basis.right); a.uUp.value.set(...view.basis.up); a.uFwd.value.set(...view.basis.fwd);
    a.uTan.value.set(view.tanY * view.aspect, view.tanY);
    a.uShift.value.set(view.shift[0], view.shift[1]);
    a.uNear.value = view.near; a.uFar.value = view.far;
    a.uSun.value.copy(view.sun);
    const alt = Math.hypot(view.pos[0], view.pos[1], view.pos[2]) / 1000 - 6371;
    const k = Math.min(Math.max((alt - 1500) / 9000, 0), 1);
    a.uThick.value = 1 + 1.1 * k * k * (3 - 2 * k);
    this.pass(this.atmo, this.rtHalf);
    const c = this.comp.uniforms;
    c.tColor.value = this.rtScene.texture;
    c.tLight.value = this.rtHalf.textures[0];
    c.tThrough.value = this.rtHalf.textures[1];
    c.uPixAngle.value = (2 * view.tanY) / this.h;
    this.pass(this.comp, this.rtAir);

    let src = this.rtAir;
    for (let i = 0; i < LEVELS; i++) {
      const d = this.down.uniforms;
      d.tSrc.value = src.texture;
      d.uTexel.value.set(1 / src.width, 1 / src.height);
      d.uThreshold.value = i === 0 ? 1.1 : 0;
      this.pass(this.down, this.rtDown[i]);
      src = this.rtDown[i];
    }
    for (let i = LEVELS - 2; i >= 0; i--) {
      const u = this.up.uniforms;
      u.tSrc.value = src.texture;
      u.tAdd.value = this.rtDown[i].texture;
      u.uTexel.value.set(1 / src.width, 1 / src.height);
      this.pass(this.up, this.rtUp[i]);
      src = this.rtUp[i];
    }
    const f = this.final.uniforms;
    f.tColor.value = this.rtAir.texture;
    f.tBloom.value = src.texture;
    f.uTexel.value.set(1 / this.w, 1 / this.h);
    this.pass(this.final, null);
  }
}
