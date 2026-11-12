#!/usr/bin/env node
// A stand-in for an Abstracts room, for the checks on this machine. It speaks the room socket's protocol as the kit
// describes it (https://abstracts.co/kit/abstracts/references/web-artifacts.md, "Live rooms"): welcome, join, leave,
// msg, pong, and the close codes 4001 (the same member joined again) and 4003 (full). It has no dependencies.
//   node source/build/room-relay.mjs <port> [seats=100] [old]
// "old" makes it behave like a site that does not yet know bigger rooms: no `seats` or `pos` in welcome, and a
// { t: 'pos' } frame is answered with { t: 'error', code: 'invalid' }. Without it, positions are kept one for each
// member and sent on to everyone in one frame, at most five times a second.
// Who someone is comes from the token, which here is just "dev.<name>": nothing is checked. Never put this on the internet.
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';

const port = Number(process.argv[2] ?? 9440), seats = Number(process.argv[3] ?? 100), old = process.argv[4] === 'old';
const rooms = new Map();
const text = (o) => { const b = Buffer.from(JSON.stringify(o)), n = b.length; const head = n < 126 ? Buffer.from([0x81, n]) : n < 65536 ? Buffer.from([0x81, 126, n >> 8, n & 255]) : null; return head ? Buffer.concat([head, b]) : null; };
const server = createServer((req, res) => { res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ rooms: [...rooms].map(([path, r]) => ({ path, members: [...r.clients].map((c) => c.me.name) })) })); });

server.on('upgrade', (req, socket) => {
  const url = new URL(req.url, 'http://relay'), key = req.headers['sec-websocket-key'];
  if (!key || !/^\/rooms\/[a-z0-9-]+\/[a-z0-9-]+\/[A-HJ-NP-Z2-9]{6}$/.test(url.pathname)) return socket.destroy();
  socket.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${createHash('sha1').update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64')}\r\n\r\n`);
  const name = decodeURIComponent((url.searchParams.get('token') ?? 'dev.Guest').replace(/^dev\./, '')).slice(0, 40) || 'Guest';
  const me = { id: `m-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, username: name.toLowerCase().replace(/[^a-z0-9]+/g, ''), name, avatar: null };
  if (!rooms.has(url.pathname)) rooms.set(url.pathname, { clients: new Set(), pos: new Map(), waiting: new Map(), timer: null });
  const room = rooms.get(url.pathname), client = { socket, me, buf: Buffer.alloc(0), open: true };
  const tell = (c, o) => { const f = text(o); if (f && c.open) c.socket.write(f); };
  const all = (o, except) => { for (const c of room.clients) if (c !== except) tell(c, o); };
  const shut = (c, code) => { if (!c.open) return; c.open = false; try { c.socket.write(Buffer.from([0x88, 2, code >> 8, code & 255])); c.socket.end(); } catch { /* gone */ } };
  const gone = (c) => { if (!room.clients.delete(c)) return; c.open = false; room.pos.delete(c.me.id); room.waiting.delete(c.me.id); if (![...room.clients].some((x) => x.me.id === c.me.id)) all({ t: 'leave', id: c.me.id }); };

  const same = [...room.clients].filter((c) => c.me.id === me.id);
  if (room.clients.size - same.length >= seats) return shut(client, 4003);
  for (const c of same) { room.clients.delete(c); shut(c, 4001); }
  room.clients.add(client);
  const members = [...new Map([...room.clients].map((c) => [c.me.id, c.me])).values()];
  tell(client, { t: 'welcome', you: me, members, state: {}, now: Date.now(), ...(old ? {} : { seats, pos: Object.fromEntries([...room.pos].filter(([id]) => id !== me.id)) }) });
  if (!same.length) all({ t: 'join', member: me }, client);

  const flush = () => { room.timer = null; if (!room.waiting.size) return; const from = Object.fromEntries(room.waiting); room.waiting.clear(); for (const c of room.clients) { const mine = { ...from }; delete mine[c.me.id]; if (Object.keys(mine).length) tell(c, { t: 'pos', from: mine, at: Date.now() }); } };
  const got = (f) => {
    const at = Date.now();
    if (f.t === 'ping') return tell(client, { t: 'pong', c: f.c, s: at });
    if (f.t === 'send' && f.data !== undefined) { const o = { t: 'msg', from: me.id, data: f.data, at }; for (const c of room.clients) if (c !== client && (f.to === undefined || c.me.id === f.to)) tell(c, o); return; }
    if (f.t === 'pos' && !old && JSON.stringify(f.data ?? null).length <= 256) { room.pos.set(me.id, f.data); room.waiting.set(me.id, f.data); if (!room.timer) room.timer = setTimeout(flush, 200); return; }
    tell(client, { t: 'error', code: 'invalid' });
  };
  socket.on('data', (chunk) => {
    client.buf = Buffer.concat([client.buf, chunk]);
    for (;;) {
      const b = client.buf;
      if (b.length < 2) return;
      let len = b[1] & 127, at = 2;
      if (len === 126) { if (b.length < 4) return; len = b.readUInt16BE(2); at = 4; } else if (len === 127) return shut(client, 1009);
      const masked = b[1] & 128, need = at + (masked ? 4 : 0) + len;
      if (b.length < need) return;
      const op = b[0] & 15, mask = masked ? b.subarray(at, at + 4) : null, body = Buffer.from(b.subarray(at + (masked ? 4 : 0), need));
      if (mask) for (let i = 0; i < body.length; i++) body[i] ^= mask[i & 3];
      client.buf = b.subarray(need);
      if (op === 8) { gone(client); return socket.end(); }
      if (op === 9) socket.write(Buffer.concat([Buffer.from([0x8a, body.length]), body]));
      if (op === 1) { try { got(JSON.parse(body.toString('utf8'))); } catch { tell(client, { t: 'error', code: 'invalid' }); } }
    }
  });
  socket.on('close', () => gone(client));
  socket.on('error', () => gone(client));
});
server.listen(port, '127.0.0.1', () => console.log(`room relay on ws://127.0.0.1:${port}/rooms/<community>/<artifact>/<CODE>  (${seats} seats${old ? ', old protocol' : ''})`));
