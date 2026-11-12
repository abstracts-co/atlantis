#!/usr/bin/env node
// Has the story spoken and the sound effects made, with ElevenLabs, and writes them to data/audio/ with an index the
// page reads (audio/index.json). The sentences are the story's own, word for word (source/engine/storytext.js makes
// them from the data); only units are written out for the voice ("km²" is read "square kilometres").
//   ELEVENLABS_API_KEY=... node tools/make-audio.mjs [--voice "George"] [--model <id>] [--force] [--only narration|sfx]
//   ELEVENLABS_API_KEY=... node tools/make-audio.mjs --list-voices | --list-models
//   node tools/make-audio.mjs --check        no key needed: is every sentence of the story as it stands today recorded,
//                                            is every quotation in it one the research data holds, and does every
//                                            recording begin and end in silence?
// A sentence already recorded is not made again, so after the data changes only the changed sentences cost anything.
// The key is read from the environment and written nowhere.
//
// Each sentence is asked for on its own. (Asked for with its neighbours as context, the voice began the next sentence at
// the end of a recording and started others mid-breath: a click every time the story moved on.) What comes back is then
// cleaned before it is kept: cut to the speech, a stray sound after the last pause dropped, faded in and out, set to
// one loudness, and given a little silence at both ends. A recording that starts in the middle of a sound is asked for again.
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { storyLines, lineKey, quotesIn } from '../source/engine/storytext.js';

const top = new URL('..', import.meta.url).pathname, out = `${top}data/audio/`, API = 'https://api.elevenlabs.io/v1';
const flag = (k) => process.argv.includes(`--${k}`), opt = (k) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : null; };
const read = (f) => JSON.parse(readFileSync(`${top}data/${f}`, 'utf8'));
const index = existsSync(`${out}index.json`) ? JSON.parse(readFileSync(`${out}index.json`, 'utf8')) : { what: 'The story spoken, and the sound effects, for the globe. Made by tools/make-audio.mjs.', narration: {}, sfx: {} };

const lines = storyLines({ worldfit: existsSync(`${top}data/worldfit.json`) ? read('worldfit.json') : null, cas: existsSync(`${top}data/case.json`) ? read('case.json') : null });
// The words as they should be said: units written out, nothing else changed.
const spoken = (t) => t.replace(/ km²/g, ' square kilometres').replace(/(\d) km\b/g, '$1 kilometres').replace(/(\d) m\b/g, '$1 metres');

// The effects. Each prompt is kept in the index beside its file.
const SFX = {
  ping: { prompt: 'A single clean submarine sonar ping, deep and resonant, with a long watery echo tail. No music.', seconds: 3 },
  lock: { prompt: 'A short soft rising two-note chime, glassy and bright, like an instrument locking onto a target. No music, no voice.', seconds: 1 },
  tick: { prompt: 'One crisp, clearly audible click of a mechanical switch being pressed. Close, dry, loud enough to hear plainly.', seconds: 0.5 },
  rise: { prompt: 'A deep rumbling swell of sea water rising and flooding slowly over land, a low whoosh that builds then settles. No music.', seconds: 5 },
  reveal: { prompt: 'A deep cinematic boom with a long shimmering tail, the moment of a discovery. No melody, no voice.', seconds: 3.5 },
  step: { prompt: 'One single soft footstep of a leather sandal on smooth stone paving. Close, dry, quiet. Nothing else.', seconds: 0.5 },
  deep: { prompt: 'Deep underwater ambience: a slow low hum, distant muffled currents, faint far-off whale-like tones. Calm, continuous, no music.', seconds: 20, loop: true },
  bed: { prompt: 'A slow dark ambient drone, mysterious and ancient: sustained low strings and a soft choir pad. No melody, no percussion, continuous.', seconds: 22, loop: true },
  city: { prompt: 'A calm ancient harbour by the sea on a bright day: gentle water lapping against stone quays, a light steady breeze, a few distant gulls. Continuous, even, no music, no voices, no engines.', seconds: 22, loop: true },
};

// ---------- listening to a file: its level in steps of 10 ms ----------
const RATE = 44100, STEP = 0.01, QUIET = -50;
const pcm = (file) => {
  const p = spawnSync('ffmpeg', ['-loglevel', 'error', '-i', file, '-ac', '1', '-ar', String(RATE), '-f', 's16le', '-'], { maxBuffer: 1 << 28 });
  if (p.status !== 0 || !p.stdout?.length) return null;
  const b = p.stdout;
  return new Int16Array(b.buffer.slice(b.byteOffset, b.byteOffset + (b.length & ~1)));
};
const dB = (v) => 10 * Math.log10(v / 32768 ** 2 + 1e-12);
const levels = (a) => { const n = Math.round(RATE * STEP), lv = []; for (let i = 0; i + n <= a.length; i += n) { let sum = 0; for (let j = i; j < i + n; j++) sum += a[j] * a[j]; lv.push(dB(sum / n)); } return lv; };
// Where the speech is. A short sound that runs into the very end of the file after a clear pause is not part of the
// sentence: it is the voice starting on something more. It is left out.
const hear = (a) => {
  const lv = levels(a);
  const first = lv.findIndex((v) => v > QUIET);
  if (first < 0) return null;
  let last = lv.length - 1; while (last > first && lv[last] <= QUIET) last--;
  let i = last; while (i > first && lv[i] > QUIET) i--;
  let j = i; while (j > first && lv[j] <= QUIET) j--;
  const stray = last - i <= 45 && i - j >= 25 && lv.length - 1 - last < 8;
  if (stray) last = j;
  let sum = 0, n = 0, peak = 0;
  for (let k = first * RATE * STEP | 0; k < Math.min(a.length, (last + 1) * RATE * STEP | 0); k++) { const v = Math.abs(a[k]); if (v > peak) peak = v; }
  for (let k = first; k <= last; k++) if (lv[k] > QUIET) { sum += 10 ** (lv[k] / 10); n++; }
  return { lv, first, last, stray, startsMidSound: first === 0 && lv[0] > -34, endsMidSound: !stray && lv.length - 1 - last < 3 && lv[last] > -40, loud: 10 * Math.log10(sum / Math.max(1, n)), peak: 20 * Math.log10(peak / 32768 + 1e-9) };
};
// What is wrong with a finished recording, if anything.
const faults = (file) => {
  const a = pcm(file);
  if (!a) return null;   // no ffmpeg here: cannot listen
  const lv = levels(a), bad = [];
  if (Math.max(...lv.slice(0, 3)) > -55) bad.push('does not begin in silence');
  if (Math.max(...lv.slice(-8)) > -55) bad.push('does not end in silence');
  const h = hear(a);
  if (h?.stray) bad.push('a stray sound after the last pause');
  return bad;
};
const LOUD = -21, PEAK = -1.5;   // every sentence is set to this loudness (of its speech), and no peak may pass this
// Cut to the speech, fade both ends, one loudness, a little silence before and after. From the file as it came, once.
const clean = (file, h) => {
  const from = Math.max(0, h.first * STEP - 0.03), to = (h.last + 1) * STEP + 0.12, len = to - from, gain = Math.min(LOUD - h.loud, PEAK - h.peak, 9);
  const tmp = `${file}.tmp.mp3`;
  const p = spawnSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', file, '-af', `atrim=start=${from.toFixed(3)}:end=${to.toFixed(3)},asetpts=PTS-STARTPTS,afade=t=in:st=0:d=0.012,afade=t=out:st=${(len - 0.08).toFixed(3)}:d=0.08,volume=${gain.toFixed(2)}dB,adelay=60:all=1,apad=pad_dur=0.25`, '-ac', '1', '-ar', String(RATE), '-b:a', '64k', tmp]);
  if (p.status !== 0) { rmSync(tmp, { force: true }); return false; }
  writeFileSync(file, readFileSync(tmp)); rmSync(tmp, { force: true });
  return true;
};

if (flag('check')) {
  let problems = 0;
  const say = (t) => { console.log(t); problems++; };
  for (const l of lines.filter((l) => !index.narration[lineKey(l.say)])) say(`not recorded: ${l.id}: ${l.say}`);
  for (const e of [...Object.values(index.narration), ...Object.values(index.sfx)]) if (!existsSync(`${out}${e.file}`)) say(`missing file: ${e.file}`);
  // Every quotation in the story must be one the research data holds, word for word.
  const held = [];
  const walk = (o) => { if (Array.isArray(o)) o.forEach(walk); else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) { if (k === 'quote' && typeof v === 'string') held.push(v); else walk(v); } };
  for (const f of ['data/reconstruction.json', 'data/case.json', 'research/atlantis/plato.json', 'research/plato.json', 'data/plato.json']) if (existsSync(top + f)) walk(JSON.parse(readFileSync(top + f, 'utf8')));
  const flat = (t) => t.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim(), all = held.map(flat);
  let quotes = 0;
  for (const l of lines) for (const q of quotesIn(l.say)) { quotes++; if (!all.some((t) => t.includes(flat(q)))) say(`${l.id}: the quotation is not in the research data: “${q}”`); }
  // And every recording of a sentence must begin and end in silence, with nothing stray at its end.
  let heard = 0, deaf = false;
  for (const e of Object.values(index.narration)) { if (!existsSync(`${out}${e.file}`)) continue; const bad = faults(`${out}${e.file}`); if (bad === null) { deaf = true; break; } heard++; for (const b of bad) say(`${e.file} (${e.id}): ${b}`); }
  const recorded = lines.filter((l) => index.narration[lineKey(l.say)]).length;
  console.log(`audio: ${recorded} of ${lines.length} sentences recorded, ${quotes} quotations checked, ${deaf ? 'recordings not listened to (no ffmpeg here)' : `${heard} recordings listened to`}, ${Object.keys(index.sfx).length} effects, ${problems} problem(s)${existsSync(out) ? '' : ' (no audio made yet: the page is silent)'}`);
  process.exit(existsSync(out) && problems ? 1 : 0);
}

const key = process.env.ELEVENLABS_API_KEY;
if (!key) { console.error('Set ELEVENLABS_API_KEY in the environment for this one command. It is not stored.'); process.exit(2); }
const call = async (path, init = {}) => {
  const r = await fetch(API + path, { ...init, headers: { 'xi-api-key': key, ...(init.body ? { 'Content-Type': 'application/json' } : {}), ...init.headers }, signal: AbortSignal.timeout(180000) });
  if (!r.ok) throw new Error(`${path.split('?')[0]}: HTTP ${r.status} ${(await r.text()).slice(0, 300)}`);
  return r;
};
// Effects are made smaller for the page with ffmpeg, when it is there: 96 kbit/s, the long loops at 80.
const shrink = (file, args) => { const tmp = `${file}.tmp.mp3`, p = spawnSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', file, ...args, tmp]); if (p.status === 0) writeFileSync(file, readFileSync(tmp)); rmSync(tmp, { force: true }); };
const seconds = (file, bytes) => {
  const p = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], { encoding: 'utf8' });
  const v = Number(p.stdout);
  return Number.isFinite(v) && v > 0 ? Math.round(v * 100) / 100 : Math.round((bytes * 8) / 128000 * 100) / 100;
};

if (flag('list-models')) { for (const m of await (await call('/models')).json()) if (m.can_do_text_to_speech) console.log(`${m.model_id.padEnd(30)} ${m.name}`); process.exit(0); }
const voices = (await (await call('/voices')).json()).voices;
if (flag('list-voices')) { for (const v of voices) console.log(`${v.name.padEnd(28)} ${v.voice_id}  ${v.category ?? ''}  ${Object.values(v.labels ?? {}).join(', ')}`); process.exit(0); }
// A storyteller's voice. The first of these the account has is used, unless --voice names another.
const want = opt('voice'), PREFER = ['George', 'Daniel', 'Brian', 'Bill', 'Adam'];
const voice = (want && voices.find((v) => v.voice_id === want || v.name.toLowerCase().startsWith(want.toLowerCase()))) || PREFER.map((n) => voices.find((v) => v.name.split(/[ -]/)[0] === n)).find(Boolean) || voices[0];
if (!voice) { console.error('This account has no voices.'); process.exit(1); }
const model = opt('model') ?? 'eleven_v4';
// Told as a story: less even than a newsreader, with some colour, a shade slower. The newer models (v3, v4) take
// fewer settings and want stability at one of their three steps; the older one also takes "style".
const SETTINGS = /^eleven_v[34]/.test(model)
  ? { stability: Number(opt('stability') ?? 0.5), similarity_boost: 0.8, speed: Number(opt('speed') ?? 0.94) }
  : { stability: Number(opt('stability') ?? 0.38), similarity_boost: 0.8, style: Number(opt('style') ?? 0.5), use_speaker_boost: true, speed: Number(opt('speed') ?? 0.94) };
mkdirSync(out, { recursive: true });
const only = opt('only');
let made = 0, plain = false;

if (only !== 'sfx') {
  // A change of voice, model or manner means every sentence is said again, so the story has one voice from start to finish.
  const manner = JSON.stringify([voice.voice_id, model, SETTINGS]);
  if (index.voice && index.voice.manner !== manner) index.narration = {};
  for (const l of lines) {
    const k = lineKey(l.say), file = `story-${k}.mp3`;
    if (index.narration[k] && existsSync(`${out}${index.narration[k].file}`) && !flag('force')) continue;
    let h = null, size = 0;
    for (let attempt = 1; attempt <= 3; attempt++) {
      const body = { text: spoken(l.say), model_id: model, voice_settings: SETTINGS };
      // A model that refuses the settings is asked again with its own defaults, and the index says so.
      const r = await call(`/text-to-speech/${voice.voice_id}?output_format=mp3_44100_128`, { method: 'POST', body: JSON.stringify(body) })
        .catch((e) => (/HTTP 4(00|22)/.test(e.message) ? (console.log(`settings refused (${e.message.slice(0, 160)}): using the model's own`), plain = true, call(`/text-to-speech/${voice.voice_id}?output_format=mp3_44100_128`, { method: 'POST', body: JSON.stringify({ text: body.text, model_id: model }) })) : Promise.reject(e)));
      const buf = Buffer.from(await r.arrayBuffer());
      size = buf.length;
      writeFileSync(`${out}${file}`, buf);
      const a = pcm(`${out}${file}`);
      if (!a) { console.error('ffmpeg is needed to clean a recording before it is kept.'); process.exit(1); }
      h = hear(a);
      if (h && !h.startsMidSound && !h.endsMidSound) break;
      console.log(`again  ${l.id}: the recording ${h?.startsMidSound ? 'starts' : 'ends'} in the middle of a sound (try ${attempt})`);
    }
    if (!clean(`${out}${file}`, h)) { console.error(`could not clean ${file}`); process.exit(1); }
    const bad = faults(`${out}${file}`);
    index.narration[k] = { file, id: l.id, text: l.say, said: spoken(l.say), seconds: seconds(`${out}${file}`, size) };
    console.log(`said   ${l.id.padEnd(10)} ${String(index.narration[k].seconds).padStart(5)} s${h.stray ? '  (a stray sound at the end was cut)' : ''}${bad.length ? `  STILL: ${bad.join('; ')}` : ''}`);
    made++;
  }
  // Recordings of sentences the story no longer has are dropped, with their files.
  const live = new Set(lines.map((l) => lineKey(l.say)));
  for (const k of Object.keys(index.narration)) if (!live.has(k)) delete index.narration[k];
  const kept = new Set(Object.values(index.narration).map((e) => e.file));
  for (const f of readdirSync(out)) if (/^story-.*\.mp3$/.test(f) && !kept.has(f)) rmSync(`${out}${f}`, { force: true });
  index.voice = { name: voice.name, id: voice.voice_id, model, settings: plain ? 'the model\'s own' : SETTINGS, manner };
}
if (only !== 'narration') {
  for (const [name, e] of Object.entries(SFX)) {
    if (index.sfx[name]?.prompt === e.prompt && existsSync(`${out}${index.sfx[name].file}`) && !flag('force')) continue;
    const body = { text: e.prompt, duration_seconds: e.seconds, prompt_influence: 0.45 };
    // Looping is asked for where it is wanted; an account or model that does not know the word gets the plain request.
    const r = await call('/sound-generation', { method: 'POST', body: JSON.stringify(e.loop ? { ...body, loop: true, model_id: 'eleven_text_to_sound_v2' } : body) }).catch(() => call('/sound-generation', { method: 'POST', body: JSON.stringify(body) }));
    const buf = Buffer.from(await r.arrayBuffer()), file = `fx-${name}.mp3`;
    writeFileSync(`${out}${file}`, buf);
    // A short effect is faded at both ends as it is made smaller. (The page fades every sound too; this is for anyone who plays the file itself.)
    shrink(`${out}${file}`, e.loop ? ['-b:a', '80k'] : ['-af', `afade=t=in:st=0:d=0.004,afade=t=out:st=${Math.max(0, e.seconds - 0.05).toFixed(2)}:d=0.05`, '-b:a', '96k']);
    index.sfx[name] = { file, prompt: e.prompt, seconds: seconds(`${out}${file}`, buf.length), loop: !!e.loop };
    console.log(`made   ${name.padEnd(10)} ${String(index.sfx[name].seconds).padStart(5)} s  ${(buf.length / 1024).toFixed(0)} KB`);
    made++;
  }
}
index.made = new Date().toISOString().slice(0, 10);
index.credit = 'Narration and sound effects generated with ElevenLabs.';
writeFileSync(`${out}index.json`, `${JSON.stringify(index, null, 1)}\n`);
const sub = await call('/user/subscription').then((r) => r.json()).catch(() => null);
console.log(`audio: ${Object.keys(index.narration).length} sentences in the voice "${voice.name}", ${Object.keys(index.sfx).length} effects, ${made} made now${sub ? `; plan "${sub.tier}", ${sub.character_count} of ${sub.character_limit} characters used` : ''}`);
