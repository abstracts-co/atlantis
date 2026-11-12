// Entry point: start the globe, load the community's data, wire the controls.
import { createWorld } from './main.js';
import { loadData } from './data.js';
import { startUI } from './ui.js';

const canvas = document.getElementById('view');
const q = new URLSearchParams(location.search);
const base = globalThis.__ASSETS__ || './';

const fail = () => { document.getElementById('fail').style.display = 'grid'; document.getElementById('veil').classList.add('gone'); };

const start = async () => {
  if (!canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: false })) return fail();
  let world;
  try {
    world = createWorld(canvas, { phone: q.get('phone') === '1' ? true : q.get('phone') === '0' ? false : undefined });
  } catch (e) {
    console.error(e);
    return fail();
  }
  globalThis.world = world;
  const data = await loadData(base);
  globalThis.ui = startUI(world, data);

  // Switches for testing a look from the address bar.
  const num = (k) => (q.get(k) === null ? null : Number(q.get(k)));
  if (num('az') !== null) world.sun.azimuth = num('az');
  if (num('alt') !== null) world.sun.altitude = num('alt');
  if (num('exp') !== null) world.exposure = num('exp');
  if (num('air') !== null) world.air = num('air');
  if (num('shadows') !== null) world.globe.shared.uShadows.value = num('shadows');
  if (num('night') !== null) world.globe.shared.uNightOn.value = num('night');
  if (q.get('still')) world.control.idle = false;
  if (globalThis.__STILL__) { world.control.spin = false; world.restSoon = true; }   // keep the opening view, without the slow turn, and rest soon

  // clean=1 hides the controls (for cover pictures); clean=2 hides the pins as well.
  if (q.get('clean')) {
    for (const id of ['bar', 'kinds', 'zoom', 'readout', 'intro', 'seatag', 'results']) document.getElementById(id).style.display = 'none';
    if (q.get('clean') === '2') document.getElementById('pins').style.display = 'none';
  }
  if (q.get('sheet') === 'layers') document.getElementById('b-layers').click();
  if (q.get('sheet') === 'sea') document.getElementById('b-sea').click();

  const veil = document.getElementById('veil');
  const wait = () => (world.globe.ready ? veil.classList.add('gone') : setTimeout(wait, 100));
  wait();
  setTimeout(() => veil.classList.add('gone'), 12000);
};
start();
