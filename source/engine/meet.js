// Meeting in the city: other people as figures you can walk up to, a line of text for the room, and voice with whoever
// stands near you. Anyone can walk the city alone without signing in. Being seen, writing and speaking need an
// Abstracts account, because all three go through an Abstracts room (docs: kit/abstracts/references/web-artifacts.md,
// "Live rooms"): the page asks the page around it for a room token, which only a signed-in member can get.
//
// A room holds as many people as the site allows this artifact (artifact.json asks for 100; a site that does not yet
// know that word allows 8). When a room is full the next one is tried: HALL22, HALL23, and so on.
// Positions go as one small value each ({ t: 'pos' }, which the site sends on to everyone in one frame); on a site
// without that, they go as ordinary messages, less often. Voice is peer to peer and only with the nearest few, so a
// full hall does not mean a hundred calls.
import * as THREE from 'three';
import { bridge, embedded } from './host.js';

// Room codes are 6 characters from A-H J-N P-Z 2-9. HALL22 to HALL99: 64 rooms, so even rooms of 8 hold 512 people.
const ROOMS = [...'23456789'].flatMap((a) => [...'23456789'].map((b) => `HALL${a}${b}`)).sort();
const HEAR = 30, DROP = 38, PEERS = 8;      // metres within which voices connect and beyond which they let go; the most calls at once
const SAY_EVERY = 900, LONGEST = 280;
const hue = (id) => { let h = 0; for (const ch of String(id)) h = (h * 31 + ch.charCodeAt(0)) % 360; return h; };

export const startMeet = (ctx, { walk }) => {
  const { world, $, esc, toast, st } = ctx, city = world.city, el = $('#meet'), people = $('#people');
  const dev = new URLSearchParams(location.search).get('room');   // a relay on this machine, for the checks: ws://127.0.0.1:port/rooms/x/y/CODE
  const m = { state: 'off', drawn: null, me: null, members: new Map(), socket: null, room: 0, seats: 8, ice: [], batch: false, lastPos: '', sentAt: 0, saidAt: 0, lines: [], muted: new Set(), voice: { on: false, stream: null, mic: true, peers: new Map() }, group: null, on: null, tries: 0 };
  const send = (o) => { if (m.socket?.readyState === 1) m.socket.send(JSON.stringify(o)); };

  // ---------- the bar: who is here, what was said, the microphone ----------
  const MIC = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5.5" y="1.5" width="5" height="8" rx="2.5"/><path d="M3 7.5a5 5 0 0 0 10 0M8 12.500v2"/></svg>';
  // The bar is built when the state changes; after that only its parts are touched, so a line arriving never wipes what is being typed.
  const draw = () => {
    if (m.drawn !== m.state) {
      m.drawn = m.state;
      el.dataset.state = m.state;
      el.innerHTML = m.state === 'on'
        ? `<div class="mt-log" id="mt-log"></div><form class="mt-say" id="mt-say"><input id="mt-text" maxlength="${LONGEST}" placeholder="Message" autocomplete="off" enterkeyhint="send" aria-label="Write to the room"><button class="mt-mic" id="mt-mic" type="button" data-act="mt-voice">${MIC}</button><span class="mt-n" id="mt-n"></span></form>`
        : ['signed-out', 'off', 'elsewhere'].includes(m.state) ? '<button class="btn glass" data-act="mt-start">Multiplayer</button>'
        : m.state === 'full' ? '<span class="mt-state">Rooms are full</span>'
        : '';
    }
    if (m.state === 'on') {
      const log = $('#mt-log'), mic = $('#mt-mic'), n = $('#mt-n');
      log.innerHTML = m.lines.slice(-6).map((l) => `<p${l.mine ? ' class="mine"' : ''}><b>${esc(l.name)}</b> ${esc(l.text)}</p>`).join('');
      log.scrollTop = log.scrollHeight;
      mic.className = `mt-mic${m.voice.on ? (m.voice.mic ? ' on' : ' muted') : ''}`;
      mic.setAttribute('aria-label', m.voice.on ? (m.voice.mic ? 'Mute my microphone' : 'Unmute my microphone') : 'Talk with people near me');
      mic.setAttribute('aria-pressed', String(m.voice.on && m.voice.mic));
      n.textContent = `${m.members.size + 1} here`;
    }
    el.hidden = !el.innerHTML || !walk.on;
  };
  // Who else is here, in the top bar, wherever on the page: their faces, and how many.
  const hereEl = $('#here');
  let hereKey = '';
  const drawHere = () => {
    const list = [...m.members.values()], key = m.state === 'on' ? list.map((p) => p.id).join(',') : '';
    if (key === hereKey) return;
    hereKey = key;
    hereEl.hidden = !key;
    if (!key) return;
    hereEl.setAttribute('aria-label', `${list.length + 1} here: ${[m.me?.name, ...list.map((p) => p.name)].filter(Boolean).join(', ')}`);
    hereEl.innerHTML = `${list.slice(0, 3).map((p) => (p.avatar ? `<img src="${esc(p.avatar)}" alt="">` : `<i style="background:hsl(${hue(p.id)} 55% 55%)">${esc((p.name || '?')[0].toUpperCase())}</i>`)).join('')}<b>${list.length + 1}</b>`;
  };
  const line = (name, text, mine = false) => { m.lines.push({ name, text, mine }); if (m.lines.length > 40) m.lines.shift(); draw(); };

  // ---------- the figures ----------
  const figure = (id) => {
    const g = new THREE.Group(), c = new THREE.Color().setHSL(hue(id) / 360, 0.55, 0.62), dark = c.clone().multiplyScalar(0.55);
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.27, 0.86, 4, 10), new THREE.MeshBasicMaterial({ color: c }));
    body.rotation.x = Math.PI / 2; body.position.z = 0.72;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 12, 10), new THREE.MeshBasicMaterial({ color: c.clone().multiplyScalar(1.15) }));
    head.position.z = 1.52;
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.26, 8), new THREE.MeshBasicMaterial({ color: dark }));
    nose.position.set(0, 0.24, 1.5);   // +Y is the way it faces
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.5, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 1.1, 0.4), transparent: true, opacity: 0 }));
    ring.position.z = 0.03;
    g.add(body, head, nose, ring);
    g.userData.ring = ring;
    return g;
  };
  const label = (p) => { const d = document.createElement('div'); d.className = 'person'; d.innerHTML = `<i></i><span>${esc(p.name)}</span>`; people.append(d); return d; };
  const add = (who) => {
    if (!who?.id || who.id === m.me?.id || m.members.has(who.id)) return m.members.get(who?.id);
    const p = { id: who.id, name: who.name || who.username || 'Someone', username: who.username, avatar: who.avatar ?? null, x: 0, y: 0, dir: 0, tx: null, ty: 0, tdir: 0, voice: false, talking: 0, seen: 0, fig: figure(who.id), tag: null };
    p.fig.visible = false; p.tag = label(p);
    m.group?.add(p.fig);
    m.members.set(who.id, p);
    return p;
  };
  const drop = (id) => { const p = m.members.get(id); if (!p) return; p.fig.removeFromParent(); p.tag.remove(); hang(id); m.members.delete(id); draw(); world.stamp++; };
  const place = (id, v) => {
    const p = m.members.get(id);
    if (!p || !Array.isArray(v) || !v.slice(0, 3).every(Number.isFinite)) return;
    [p.tx, p.ty, p.tdir] = v; p.voice = !!(v[3] & 1); p.seen = performance.now();
    if (p.fig.visible === false) { p.x = p.tx; p.y = p.ty; p.dir = p.tdir; p.fig.visible = true; }
  };

  // ---------- the room ----------
  const token = async () => {
    if (dev) return { url: dev.replace(/[A-Z2-9]{6}$/, ROOMS[m.room]), token: `dev.${encodeURIComponent(new URLSearchParams(location.search).get('as') ?? 'Guest')}`, ice: [], room: ROOMS[m.room] };
    return bridge('roomToken', { room: ROOMS[m.room] });
  };
  const join = async (asked = false) => {
    if (m.state === 'on') return;
    // Pressed while the quiet first try is still out: ask once that one has answered.
    if (m.state === 'joining') { if (asked) m.wantAsk = true; return; }
    m.state = 'joining'; draw();
    try {
      // Signed in is enough to be in the room. A site that still wants the member's yes first ("… wants to know it's
      // you") refuses with 'denied': then, and only then, it is asked for, once.
      const t = await token().catch(async (e) => { if (dev || e?.code !== 'denied') throw e; await bridge('viewer'); return token(); });
      m.ice = t.ice ?? []; m.seats = t.seats ?? 8;
      const ws = m.socket = new WebSocket(`${t.url}?token=${encodeURIComponent(t.token)}`);
      ws.onmessage = (e) => { let f; try { f = JSON.parse(e.data); } catch { return; } hear(f); };
      ws.onclose = (e) => {
        if (m.socket !== ws) return;
        m.socket = null;
        for (const id of [...m.members.keys()]) drop(id);
        if (e.code === 4003 && m.room < ROOMS.length - 1) { m.room++; m.state = 'off'; return join(); }   // full: the next room
        if (e.code === 4003) { m.state = 'full'; return draw(); }
        if (e.code === 4001) { m.state = 'off'; return draw(); }   // this member opened the page somewhere else: that copy is the one in the room
        // Anything else: a new token and back in, a few times, with a longer wait each time.
        m.state = 'off';
        if (m.tries++ < 6) setTimeout(() => { if (m.state === 'off') join(); }, 1500 * m.tries); else draw();
      };
    } catch (e) {
      m.state = e?.code === 'signed_out' ? 'signed-out' : e?.code === 'unsupported' ? 'off' : 'ask';
      if (!asked && m.wantAsk && m.state === 'ask') { m.wantAsk = false; return join(true); }
      if (asked && e?.code && !['denied', 'cancelled', 'signed_out'].includes(e.code)) toast('The room is not answering');
      draw();
    }
  };
  const hear = (f) => {
    if (f.t === 'welcome') {
      m.me = f.you; m.state = 'on'; m.tries = 0; m.batch = f.seats !== undefined; if (f.seats) m.seats = f.seats;
      for (const who of f.members ?? []) add(who);
      for (const [id, v] of Object.entries(f.pos ?? {})) place(id, v);
      m.lastPos = '';
      draw();
    } else if (f.t === 'join') { const p = add(f.member); if (p) line(p.name, 'came in'); m.lastPos = ''; }
    else if (f.t === 'leave') { const p = m.members.get(f.id); if (p) line(p.name, 'left'); drop(f.id); }
    else if (f.t === 'pos') for (const [id, v] of Object.entries(f.from ?? {})) place(id, v);
    else if (f.t === 'msg') {
      const d = f.data, p = m.members.get(f.from);
      if (!p || !d || typeof d !== 'object') return;
      if (Array.isArray(d.p)) place(f.from, d.p);
      else if (typeof d.c === 'string' && !m.muted.has(f.from)) { line(p.name, d.c.slice(0, LONGEST)); ctx.sound?.sfx('tick', 0.12); }
      else if (d.rtc) signal(f.from, d.rtc);
    } else if (f.t === 'error' && f.code === 'invalid' && m.batch) m.batch = false;
  };
  const leave = () => { const ws = m.socket; m.socket = null; ws?.close(1000); for (const id of [...m.members.keys()]) drop(id); voiceOff(); if (m.state === 'on' || m.state === 'joining') m.state = 'off'; m.drawn = null; draw(); };
  const say = (text) => {
    const t = text.trim().slice(0, LONGEST), now = performance.now();
    if (!t || m.state !== 'on') return false;
    if (now - m.saidAt < SAY_EVERY) { toast('A moment between lines'); return false; }
    m.saidAt = now;
    send({ t: 'send', data: { c: t } });
    line(m.me?.name ?? 'You', t, true);
    return true;
  };

  // ---------- voice: a call with each of the nearest few who also have voice on ----------
  const V = m.voice;
  const hang = (id) => { const c = V.peers.get(id); if (!c) return; V.peers.delete(id); try { c.pc.close(); } catch { /* closed */ } c.out?.disconnect(); c.el?.remove(); };
  const call = (id) => {
    if (V.peers.has(id)) return V.peers.get(id);
    const pc = new RTCPeerConnection({ iceServers: m.ice }), c = { pc, id, out: null, gain: null, pan: null, level: null, el: null, polite: String(m.me.id) > String(id), making: false };
    V.peers.set(id, c);
    if (V.stream) for (const tr of V.stream.getAudioTracks()) pc.addTrack(tr, V.stream); else pc.addTransceiver('audio', { direction: 'recvonly' });
    pc.onicecandidate = (e) => { if (e.candidate) send({ t: 'send', to: id, data: { rtc: { ice: e.candidate } } }); };
    pc.onnegotiationneeded = async () => { try { c.making = true; await pc.setLocalDescription(); send({ t: 'send', to: id, data: { rtc: { sdp: pc.localDescription } } }); } catch { /* the other side will offer */ } finally { c.making = false; } };
    pc.ontrack = (e) => {
      // The voice goes through the page's own sound graph, so it gets nearer and further, left and right, as people move.
      const stream = e.streams[0] ?? new MediaStream([e.track]), ac = ctx.sound?.context;
      c.el = Object.assign(document.createElement('audio'), { srcObject: stream, muted: !!ac, autoplay: true });   // Chrome only lets a remote stream flow once an element holds it
      c.el.play?.().catch(() => {});
      if (!ac) return;
      c.out = ac.createMediaStreamSource(stream); c.gain = ac.createGain(); c.gain.gain.value = 0; c.pan = ac.createStereoPanner(); c.level = ac.createAnalyser(); c.level.fftSize = 256;
      c.out.connect(c.level); c.out.connect(c.gain).connect(c.pan).connect(ctx.sound.master);
    };
    pc.onconnectionstatechange = () => { if (['failed', 'closed'].includes(pc.connectionState)) hang(id); };
    return c;
  };
  // Offers, answers and candidates from the other side. When both offer at once, the one with the greater id gives way.
  const signal = async (from, d) => {
    if (!V.on) return;
    const c = call(from), pc = c.pc;
    try {
      if (d.sdp) {
        const clash = d.sdp.type === 'offer' && (c.making || pc.signalingState !== 'stable');
        if (clash && !c.polite) return;
        await pc.setRemoteDescription(d.sdp);
        if (d.sdp.type === 'offer') { await pc.setLocalDescription(); send({ t: 'send', to: from, data: { rtc: { sdp: pc.localDescription } } }); }
      } else if (d.ice) await pc.addIceCandidate(d.ice).catch(() => {});
    } catch { /* a bad description: the call is made again when they are next near */ }
  };
  const voiceOn = async () => {
    if (V.on) return;
    try { V.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } }); V.mic = true; }
    catch { V.stream = null; V.mic = false; toast('No microphone: you can listen'); }
    V.on = true; m.lastPos = '';
    if (ctx.sound?.context.state !== 'running') ctx.sound?.context.resume().catch(() => {});
    draw();
  };
  const voiceOff = () => { if (!V.on) return; V.on = false; for (const id of [...V.peers.keys()]) hang(id); for (const t of V.stream?.getTracks() ?? []) t.stop(); V.stream = null; m.lastPos = ''; draw(); };
  const mute = () => { V.mic = !V.mic; for (const t of V.stream?.getAudioTracks() ?? []) t.enabled = V.mic; draw(); };
  document.addEventListener('visibilitychange', () => { if (document.hidden && V.on && V.stream) { V.mic = false; for (const t of V.stream.getAudioTracks()) t.enabled = false; draw(); } });

  // ---------- once a frame ----------
  const v3 = new THREE.Vector3();
  const tick = (dt) => {
    // The figures live in the city's own group, so they stand where the city stands.
    const g = city.city?.group ?? null;
    if (g !== m.on) { m.on = g; if (g) { m.group = new THREE.Group(); m.group.name = 'people'; g.add(m.group); for (const p of m.members.values()) m.group.add(p.fig); } else m.group = null; }
    drawHere();
    if (!walk.on) { if (!el.hidden) { el.hidden = true; people.hidden = true; } return; }
    people.hidden = false;
    if (el.hidden) draw();
    const w = walk.state, now = performance.now();
    // Say where I am: when it changes, at most five times a second (three on a site that sends each as its own message); once every three seconds regardless.
    if (m.state === 'on') {
      const mine = [Math.round(w.x * 10) / 10, Math.round(w.y * 10) / 10, Math.round(w.dir * 100) / 100, V.on ? 1 : 0], key = mine.join(',');
      if ((key !== m.lastPos && now - m.sentAt > (m.batch ? 200 : 330)) || now - m.sentAt > 3000) { m.lastPos = key; m.sentAt = now; send(m.batch ? { t: 'pos', data: mine } : { t: 'send', data: { p: mine } }); }
    }
    if (!m.members.size) return;
    const cam = city.camera, canvas = world.renderer.domElement, cw = canvas.clientWidth, ch = canvas.clientHeight, k = 1 - Math.exp(-dt * 9), [fx, fy] = walk.forward();
    const near = [];
    for (const p of m.members.values()) {
      if (p.tx == null) continue;
      const before = p.x + p.y;
      p.x += (p.tx - p.x) * k; p.y += (p.ty - p.y) * k;
      let dd = p.tdir - p.dir; dd = Math.atan2(Math.sin(dd), Math.cos(dd)); p.dir += dd * k;
      const z = city.localFloor(p.x, p.y) ?? w.z;
      p.fig.position.set(p.x, p.y, z);
      // The walker's dir is a compass bearing in the scene; the figure lives in the city's frame, which is turned by city.turn.
      p.fig.rotation.z = -p.dir - city.turn;
      if (Math.abs(p.x + p.y - before) > 1e-3) world.stamp++;
      const dist = Math.hypot(p.x - w.x, p.y - w.y);
      // The name over the head, where the head is on screen.
      v3.set(p.x, p.y, z + 1.95).applyMatrix4(g.matrixWorld).project(cam);
      const show = v3.z < 1 && v3.z > -1 && Math.abs(v3.x) < 1.05 && Math.abs(v3.y) < 1.05 && dist < 160;
      p.tag.style.display = show ? '' : 'none';
      if (show) { p.tag.style.transform = `translate(${((v3.x + 1) / 2) * cw}px, ${((1 - v3.y) / 2) * ch}px) translate(-50%, -100%)`; p.tag.style.opacity = dist < 60 ? 1 : 0.6; }
      // Voice: nearer is louder, and it comes from the side they stand on.
      const c = V.peers.get(p.id);
      if (c?.gain) {
        const vol = dist < 3 ? 1 : Math.max(0, 1 - (dist - 3) / (DROP - 3)) ** 1.6, side = ((p.x - w.x) * fy - (p.y - w.y) * fx) / Math.max(dist, 0.5);
        c.gain.gain.value += ((m.muted.has(p.id) ? 0 : vol) - c.gain.gain.value) * k;
        c.pan.pan.value += (Math.max(-0.85, Math.min(0.85, side)) - c.pan.pan.value) * k;
        const buf = new Uint8Array(c.level.fftSize); c.level.getByteTimeDomainData(buf);
        let peak = 0; for (const b of buf) peak = Math.max(peak, Math.abs(b - 128));
        p.talking += ((peak > 9 ? 1 : 0) - p.talking) * Math.min(1, dt * 8);
      } else p.talking *= 0.9;
      p.fig.userData.ring.material.opacity = p.talking;
      p.tag.classList.toggle('talking', p.talking > 0.4);
      if (p.voice) near.push([dist, p.id]);
    }
    // Calls: with the nearest who have voice on, a few at most; let go of those who walked away.
    if (V.on && m.state === 'on') {
      near.sort((a, b) => a[0] - b[0]);
      const want = new Set(near.filter(([d]) => d < HEAR).slice(0, PEERS).map(([, id]) => id));
      for (const id of want) if (!V.peers.has(id) && String(m.me.id) < String(id)) call(id);   // the lesser id makes the call
      for (const [id] of V.peers) { const p = m.members.get(id); if (!p || !p.voice || Math.hypot(p.x - w.x, p.y - w.y) > DROP) hang(id); }
    }
  };

  // ---------- starting ----------
  // On foot: join if this member has already said yes to this artifact; otherwise offer it.
  // Called once the page around this one has said who is here. Nothing is joined and nothing is asked: multiplayer
  // waits until the visitor chooses it (the brazier in the hall, or the button while walking).
  const arrive = () => {
    if (m.state === 'on' || m.state === 'joining') return;
    m.state = !embedded && !dev ? 'elsewhere' : st.host && !st.host.signedIn && !dev ? 'signed-out' : 'off';
    draw();
  };
  // Choosing multiplayer: signed out, sign in; outside abstracts.co, go there; signed in, join (or leave, if in).
  const choose = () => {
    if (m.state === 'on' || m.state === 'joining') return leave(true);
    if (m.state === 'signed-out') return bridge('signIn').catch(() => toast('Sign-in is not answering'));
    if (m.state === 'elsewhere') return open(`https://abstracts.co/a/${ctx.data.open?.community ?? 'atlantis'}?a_hall=1`, '_blank', 'noopener');
    m.tries = 0;
    join(true).then(() => { if (m.state === 'ask') { m.state = 'off'; draw(); } });
  };
  el.addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'mt-start') choose();
    else if (act === 'mt-join') join(true);
    else if (act === 'mt-voice') { if (!V.on) voiceOn(); else if (V.stream) mute(); else voiceOff(); }
  });
  el.addEventListener('submit', (e) => { e.preventDefault(); const i = $('#mt-text'); if (i && say(i.value)) { i.value = ''; i.blur(); } });
  addEventListener('keydown', (e) => { if (walk.on && m.state === 'on' && (e.code === 'KeyT' || e.code === 'Slash') && !e.target.closest?.('input, textarea')) { $('#mt-text')?.focus(); e.preventDefault(); } if (e.code === 'Escape' && e.target.id === 'mt-text') e.target.blur(); });
  return { tick, arrive, choose, leave, join, say, voiceOn, voiceOff, mute, state: m, get count() { return m.members.size; } };
};
