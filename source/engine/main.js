// Starts the globe and runs the frame loop. The page's controls live in ui.js and talk to the `world` object made here.
import * as THREE from 'three';
import { R, DEG, frame, add, scale, clamp } from './geo.js';
import { Globe } from './globe.js';
import { GlobeCamera } from './camera.js';
import { Pipeline } from './post.js';
import { Reconstruction } from './cityscene.js';
import { Evidence } from './evidence.js';

export const BASE_LAYERS = {
  terrarium: { id: 'terrarium', kind: 'elevation', url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png', maxZoom: 15, credit: 'Terrain Tiles (Mapzen, AWS Open Data)' },
  s2: { id: 's2', kind: 'image', url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/g/{z}/{y}/{x}.jpg', maxZoom: 14, credit: 'Sentinel-2 cloudless 2016 by EOX (contains modified Copernicus Sentinel data 2016)' },
  bluemarble: { id: 'bluemarble', kind: 'image', url: 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg', maxZoom: 8, credit: 'NASA Blue Marble Next Generation' },
  night: { id: 'night', kind: 'image', url: 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png', maxZoom: 8, credit: 'NASA Black Marble' },
};

export const createWorld = (canvas, opts = {}) => {
  const phone = opts.phone ?? (Math.min(screen.width, screen.height) < 600 || matchMedia('(pointer: coarse)').matches);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance', stencil: false, depth: false });
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.autoClear = false;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 1, 1e8);
  const globe = new Globe({ renderer, scene, segments: 32, threshold: phone ? 400 : 290, budget: phone ? 170 : 400, layers: { elevation: BASE_LAYERS.terrarium, base: BASE_LAYERS.s2, globe: BASE_LAYERS.bluemarble, overlay: null, night: BASE_LAYERS.night } });
  const control = new GlobeCamera(camera, canvas, globe);
  const pipeline = new Pipeline(renderer, { samples: 0, steps: phone ? 14 : 28 });

  const world = {
    renderer, scene, camera, globe, control, pipeline, phone,
    sun: { azimuth: 295, altitude: 48, follow: true, dir: new THREE.Vector3(1, 0, 0) },
    exposure: 1.1,
    air: 1,
    pixelCap: 2,
    pixelBudget: phone ? 1.4e6 : 2.6e6,
    scale: 1,
    time: 0,
    fps: 60,
    onFrame: null,
    paused: false,
    adaptive: true,
    rest: true,
    locals: [],   // things drawn in their own small scene on the ground: Plato's city, the evidence at a place
    stamp: 0,     // add one to draw the next frame even when the camera is still
  };

  const size = () => {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    // Never draw more pixels than the budget, however large or dense the screen.
    const want = Math.min(devicePixelRatio || 1, world.pixelCap);
    const dpr = Math.min(want, Math.sqrt(world.pixelBudget / (w * h))) * world.scale;
    const pw = Math.max(2, Math.round(w * dpr)), ph = Math.max(2, Math.round(h * dpr));
    if (canvas.width !== pw || canvas.height !== ph) {
      renderer.setSize(pw, ph, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    pipeline.setSize(pw, ph);
    return [pw, ph];
  };

  // The sun is set by compass direction and height above the horizon at the place being looked at, so the light rakes the same way wherever you go.
  const placeSun = () => {
    const f = frame(control.lon, control.lat);
    const az = world.sun.azimuth * DEG, alt = world.sun.altitude * DEG;
    const d = add(scale(f.up, Math.sin(alt)), add(scale(f.north, Math.cos(az)), f.east, Math.sin(az)), Math.cos(alt));
    if (world.sun.follow) world.sun.dir.set(d[0], d[1], d[2]).normalize();
  };

  world.city = new Reconstruction(world);
  world.locals.push(world.city);
  world.evidence = new Evidence(world);
  world.locals.push(world.evidence);
  // Over the city the camera may come down to street level, and stands on the city's ground, not the land under it.
  control.floor = (lon, lat) => world.city.floorAt?.(lon, lat) ?? null;
  let last = performance.now();
  let slow = 0, fast = 0, lastSig = '', calm = 0;
  const tick = (now) => {
    requestAnimationFrame(tick);
    if (world.paused) { last = now; return; }
    const dt = clamp((now - last) / 1000, 0.001, 0.1);
    last = now;
    world.time += dt;
    world.fps += (1 / dt - world.fps) * 0.05;
    // Trade sharpness for speed when the machine can't keep up, and take it back when it can.
    // Hitches while tiles are arriving are the loader's doing, not the drawing's, so they don't count against sharpness.
    const loading = globe.loader.busy > 0;
    if (dt > 1 / 38) { if (!loading) { slow++; fast = 0; } } else if (dt < 1 / 55) { fast++; slow = Math.max(0, slow - 1); }
    if (!world.adaptive) slow = fast = 0;
    if (slow > 40 && world.scale > 0.55) { world.scale = Math.max(0.55, world.scale - 0.1); slow = 0; }
    if (fast > 300 && world.scale < 1) { world.scale = Math.min(1, world.scale + 0.1); fast = 0; }

    const [pw, ph] = size();
    world.beforeFrame?.(dt);   // someone on foot moves here, before the camera is placed
    control.update(dt);
    placeSun();
    // Nothing moving and nothing loading: draw one frame in three. The sea still ripples, the fan stays quiet.
    const sig = `${world.stamp},${world.city.active},${world.sun.azimuth},${world.sun.altitude},${control.pos[0].toFixed(1)},${control.pos[1].toFixed(1)},${control.pos[2].toFixed(1)},${control.heading.toFixed(4)},${control.tilt.toFixed(4)},${control.shift[0].toFixed(3)},${control.shift[1].toFixed(3)},${pw},${ph}`;
    const busy = sig !== lastSig || globe.loader.busy > 0 || control.pointers.size > 0 || world.snap;
    lastSig = sig;
    if (busy) calm = 0; else calm++;
    // After ten seconds of that, one frame in twelve. (A copy shown inside another page rests sooner and deeper.)
    const every = calm > (world.restSoon ? 150 : 600) ? (world.restSoon ? 30 : 12) : calm > 30 ? 3 : 1;
    if (world.rest && calm % every) { world.onFrame?.(dt); return; }
    const S = globe.shared;
    S.uCamPos.value.set(control.pos[0], control.pos[1], control.pos[2]);
    S.uSun.value.copy(world.sun.dir);
    S.uTime.value = world.time;
    S.uPixAngle.value = (2 * Math.tan(control.fovY / 2)) / ph;
    globe.update(control.view(ph));
    // A low sun lights the ground weakly; open the exposure the way a camera would.
    const low = 1 - clamp((Math.sin(world.sun.altitude * DEG) - 0.17) / 0.6, 0, 1);
    pipeline.final.uniforms.uExposure.value = world.exposure * (1 + 0.85 * low);
    // The two study views keep only a little haze, so shapes stay clear from any height.
    pipeline.atmo.uniforms.uAir.value += ((S.uLens.value === 0 ? 1 : 0.4) * world.air - pipeline.atmo.uniforms.uAir.value) * Math.min(1, dt * 6);
    pipeline.render(scene, camera, { pos: control.pos, basis: control.basis, tanY: Math.tan(control.fovY / 2), aspect: camera.aspect, near: camera.near, far: camera.far, sun: world.sun.dir, shift: control.shift }, world.locals.map((l) => l.update()).filter(Boolean));
    world.onFrame?.(dt);
    // A picture of the frame just drawn, for sharing. Taken here because the drawing buffer is cleared after the frame.
    if (world.snap) { const done = world.snap; world.snap = null; canvas.toBlob((blob) => done(blob), 'image/jpeg', 0.9); }
  };
  requestAnimationFrame(tick);
  return world;
};
