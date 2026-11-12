// Sound: the story spoken aloud, the effects of the hunt, and the air of the city. Every file is listed in
// audio/index.json, written by build/make-audio.mjs, which has each sentence of the story spoken word for word and
// records the prompt behind each effect. With no index (or sound switched off) the page is silent and nothing else changes.
//
// Everything goes through one Web Audio graph so that nothing can click, jump or clip:
//   each sound has its own gain, which fades in over a few milliseconds and out before its end;
//   a voice that is cut short (Next, Leave) fades out instead of stopping dead;
//   a looping sound never reaches its own end: each pass fades into the next (CROSS seconds), so no join is heard;
//   all of it passes one limiter before the speakers, so two loud effects together cannot distort.
import { lineKey } from './storytext.js';

const ICON = {
  on: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="M12 6.500a3.500 3.500 0 0 1 0 5M13.800 4.500a6.300 6.300 0 0 1 0 9"/></svg>',
  off: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="m12.500 7 3.500 4M16 7l-3.500 4"/></svg>',
};
export const CROSS = 2.5;                 // seconds a looping sound takes to fade into its own start
const EDGE_IN = 0.006, EDGE_OUT = 0.04;   // every sound's own fade at its two ends
const CUT = 0.14;                         // a sound stopped early fades over this long
const curve = (f) => Float32Array.from({ length: 48 }, (_, i) => f((i / 47) * Math.PI / 2));
const RISE = curve(Math.sin), FALL = curve(Math.cos);   // equal power: the two passes of a loop add up to a steady level

export const startSound = (ctx) => {
  const { data, $ } = ctx, index = data.audio, AC = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!index || !AC) return null;
  const button = $('#b-sound');
  const s = { on: true, ac: null, master: null, buffers: new Map(), voice: null, want: new Map(), loops: new Map(), last: { score: -1, lit: -1, lockAt: 0, tickAt: 0, stepAt: 0 }, log: [] };
  const note = (kind, e = {}) => { if (globalThis.__AUDIOLOG__) s.log.push({ t: performance.now(), kind, ...e }); };
  const src = (file) => globalThis.__AUDIO__?.[file] ?? `${globalThis.__ASSETS__ || './'}audio/${file}`;
  // The one-file copy of the page carries its sound as data addresses: those are decoded here, with no request.
  const bytes = async (file) => {
    const u = src(file);
    if (u.startsWith('data:')) { const b = atob(u.slice(u.indexOf(',') + 1)), a = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a.buffer; }
    const r = await fetch(u);
    if (!r.ok) throw new Error(`${file}: ${r.status}`);
    return r.arrayBuffer();
  };
  const context = () => {
    if (s.ac) return s.ac;
    const ac = s.ac = new AC({ latencyHint: 'interactive' });
    s.master = ac.createGain();
    const limit = ac.createDynamicsCompressor();
    limit.threshold.value = -9; limit.knee.value = 6; limit.ratio.value = 14; limit.attack.value = 0.003; limit.release.value = 0.22;
    s.master.connect(limit).connect(ac.destination);
    return ac;
  };
  // A browser lets a page make sound only after the visitor has pressed something. Until then nothing is started
  // (a sound queued on a sleeping context would all play at once when it wakes).
  const running = () => { const ac = context(); if (ac.state !== 'running') ac.resume().then(pump).catch(() => {}); return ac.state === 'running'; };
  const load = (file) => {
    if (!s.buffers.has(file)) s.buffers.set(file, bytes(file).then((b) => context().decodeAudioData(b)).catch(() => null));
    return s.buffers.get(file);
  };
  // Fetch and decode ahead of need, so a sentence starts the moment it is shown.
  const prime = (texts = []) => { for (const t of texts) { const c = index.narration?.[lineKey(t)]; if (c) load(c.file); } };

  // One sound, through its own gain: silent, up over a few milliseconds, down again before its end.
  const start = (buffer, { volume = 1, offset = 0, at = 0, fadeIn = EDGE_IN, out = s.master } = {}) => {
    const ac = s.ac, node = ac.createBufferSource(), gain = ac.createGain();
    node.buffer = buffer;
    const t0 = Math.max(ac.currentTime + 0.005, at), dur = Math.max(0.05, buffer.duration - offset), up = Math.min(fadeIn, dur / 3), down = Math.min(EDGE_OUT, dur / 3);
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(volume, t0 + up);
    gain.gain.setValueAtTime(volume, t0 + dur - down);
    gain.gain.linearRampToValueAtTime(0, t0 + dur);
    node.connect(gain).connect(out);
    node.start(t0, offset);
    return { node, gain, t0, dur, offset };
  };
  const fade = (p, secs = CUT) => {
    const ac = s.ac, t = ac.currentTime;
    if (t >= p.t0 + p.dur) return;
    p.gain.gain.cancelScheduledValues(t);
    p.gain.gain.setValueAtTime(p.gain.gain.value, t);
    p.gain.gain.linearRampToValueAtTime(0, t + secs);
    try { p.node.stop(t + secs + 0.03); } catch { /* already stopped */ }
  };

  // ---------- the voice ----------
  // Speak a sentence of the story, if it has been recorded. Returns its length in seconds, or 0.
  const say = (text, from = 0) => {
    hush();
    const clip = index.narration?.[lineKey(text)];
    if (!clip) return 0;
    if (s.on) {
      const v = s.voice = { clip, at: from, playing: null, paused: false };
      if (from < clip.seconds - 0.2) load(clip.file).then((buf) => { if (s.voice === v && !v.paused && buf && s.on && running()) { v.playing = start(buf, { offset: from, fadeIn: from ? 0.05 : undefined }); note('say', { file: clip.file, volume: 1, offset: from }); } });
    }
    return clip.seconds;
  };
  const hush = () => { const v = s.voice; s.voice = null; if (v?.playing) { fade(v.playing); note('hush', { file: v.clip.file }); } };
  const pause = () => {
    const v = s.voice;
    if (!v || v.paused) return;
    v.paused = true;
    if (v.playing) { v.at = Math.min(v.clip.seconds, v.playing.offset + Math.max(0, s.ac.currentTime - v.playing.t0)); fade(v.playing, 0.09); v.playing = null; note('hush', { file: v.clip.file }); }
  };
  const resume = () => {
    const v = s.voice;
    if (!v || !v.paused) return;
    v.paused = false;
    // It picks up a breath before where it stopped, so no word is lost.
    const offset = Math.max(0, v.at - 0.25);
    if (s.on && offset < v.clip.seconds - 0.1) load(v.clip.file).then((buf) => { if (s.voice === v && !v.paused && buf && running()) { v.playing = start(buf, { offset, fadeIn: 0.06 }); note('say', { file: v.clip.file, volume: 1, offset }); } });
  };
  // For the checks: is a sentence sounding now, and how far in.
  const voiceState = () => { const v = s.voice, p = v?.playing; return { clip: v?.clip.file ?? null, paused: !!v?.paused, playing: !!p && s.ac.currentTime < p.t0 + p.dur, at: p ? p.offset + Math.max(0, s.ac.currentTime - p.t0) : v?.at ?? 0 }; };

  // ---------- effects ----------
  const sfx = (name, volume = 0.6) => {
    const e = index.sfx?.[name];
    if (!e || !s.on) return;
    note('sfx', { file: e.file, volume });
    load(e.file).then((buf) => { if (buf && s.on && running()) start(buf, { volume }); });
  };

  // ---------- sounds that go round under everything else ----------
  // What is wanted is kept apart from what is sounding: the callers say what they want, as often as they like, and
  // pump() makes it so once the visitor has pressed something and the file is ready.
  const loop = (name, on, volume = 0.25) => {
    if (!index.sfx?.[name]) return;
    const had = s.want.get(name);
    if (on) { if (had !== volume) { s.want.set(name, volume); pump(); } } else if (had !== undefined) { s.want.delete(name); pump(); }
  };
  function pump() {
    const ac = s.ac;
    for (const [name, L] of s.loops) {
      const v = s.on ? s.want.get(name) : undefined;
      if (v === undefined) {   // no longer wanted: down over a second and a half, then gone
        s.loops.delete(name);
        note('loop-off', { file: L.file });
        if (L.gain) { const t = ac.currentTime; L.gain.gain.cancelScheduledValues(t); L.gain.gain.setValueAtTime(L.gain.gain.value, t); L.gain.gain.linearRampToValueAtTime(0, t + 1.5); for (const p of L.parts) try { p.node.stop(t + 1.6); } catch { /* ended */ } }
      } else if (v !== L.volume && L.gain) { L.volume = v; L.gain.gain.setTargetAtTime(v, ac.currentTime, 0.4); }
    }
    if (s.on) for (const [name, volume] of s.want) if (!s.loops.has(name)) {
      const L = { name, file: index.sfx[name].file, volume, gain: null, parts: [], next: 0, buffer: null };
      s.loops.set(name, L);
      note('loop-on', { file: L.file, volume, cross: CROSS });
      load(L.file).then((buf) => { L.buffer = buf; pump(); });
    }
    if (!s.loops.size) return;
    if (!running()) return;
    for (const L of s.loops.values()) {
      if (!L.buffer) continue;
      const now = ac.currentTime, D = L.buffer.duration, step = D - CROSS;
      if (!L.gain) {
        L.gain = ac.createGain();
        L.gain.gain.setValueAtTime(0, now);
        L.gain.gain.linearRampToValueAtTime(L.volume, now + 1.2);
        L.gain.connect(s.master);
        L.next = now + 0.02;
      }
      // Each pass is laid down a little ahead of time, starting CROSS seconds before the one before it ends.
      while (L.next < now + 1.2) {
        const first = !L.parts.length, node = ac.createBufferSource(), g = ac.createGain(), T = L.next;
        node.buffer = L.buffer;
        g.gain.setValueAtTime(first ? 1 : 0, T);
        if (!first) g.gain.setValueCurveAtTime(RISE, T, CROSS);
        g.gain.setValueCurveAtTime(FALL, T + step, CROSS - 0.005);
        node.connect(g).connect(L.gain);
        node.start(T);
        L.parts.push({ node, end: T + D });
        L.next = T + step;
      }
      L.parts = L.parts.filter((p) => p.end > now - 1);
    }
  }
  setInterval(() => { if (s.loops.size) pump(); }, 400);
  addEventListener('pointerdown', () => { if (s.ac && s.ac.state !== 'running') running(); }, { capture: true, passive: true });

  // Under the story a low bed; while hunting, the deep sea; in the city, the harbour; in the hall, the bed again, lower.
  // (The levels were set by measuring the files: the voice averages -24 dB, so the bed sits about ten below it.)
  const bed = (on) => { loop('bed', on, 0.1); if (on) { loop('deep', false); loop('city', false); } };
  const deep = (on) => loop('deep', on && !s.want.has('bed') && !s.want.has('city'), 0.32);
  // place: 'city' out of doors, 'hall' inside the hall, null when not walking.
  const air = (place) => { loop('city', place === 'city', 0.3); loop('bed', place === 'hall', 0.07); if (place) loop('deep', false); };
  // A footfall, at most one every 0.42 s (0.3 s running).
  const step = (running_) => { const now = performance.now(); if (now - s.last.stepAt < (running_ ? 300 : 420)) return; s.last.stepAt = now; sfx('step', 0.16 + Math.random() * 0.05); };

  // The hunt's read-out calls this each time what is under the reticle changes: a tick as lights come on, a chime on a strong match.
  const read = (f) => {
    const now = performance.now(), lit = f.state === 0 ? 0 : f.clues.filter(Boolean).length, strong = f.state === 2 && f.score >= 4;
    if (lit > s.last.lit && now - s.last.tickAt > 140) { sfx('tick', 0.3); s.last.tickAt = now; }
    if (strong && s.last.score < 4 && now - s.last.lockAt > 1500) { sfx('lock', 0.4); s.last.lockAt = now; }
    s.last.lit = lit; s.last.score = strong ? f.score : 0;
  };

  const draw = () => { button.innerHTML = s.on ? ICON.on : ICON.off; button.setAttribute('aria-label', s.on ? 'Turn sound off' : 'Turn sound on'); button.setAttribute('aria-pressed', String(s.on)); };
  button.hidden = false;
  button.addEventListener('click', () => {
    s.on = !s.on;
    if (!s.on) hush();
    pump();
    draw();
    ctx.toast(s.on ? 'Sound on' : 'Sound off', 1200);
  });
  draw();
  return { say, hush, pause, resume, prime, voiceState, sfx, loop, bed, deep, air, step, read, state: s, get on() { return s.on; }, get master() { context(); return s.master; }, get context() { return context(); } };
};
