// Minimal PNG reader (8-bit RGB, RGBA or grey), enough for elevation tiles. No dependencies.
import { inflateSync } from 'node:zlib';
export const decodePng = (buf) => {
  let p = 8, w = 0, h = 0, type = 0;
  const idat = [];
  let palette = null;
  while (p < buf.length) {
    const len = buf.readUInt32BE(p), tag = buf.toString('latin1', p + 4, p + 8), data = buf.subarray(p + 8, p + 8 + len);
    if (tag === 'IHDR') { w = data.readUInt32BE(0); h = data.readUInt32BE(4); type = data[9]; if (data[8] !== 8) throw new Error('bit depth'); }
    if (tag === 'PLTE') palette = data;
    if (tag === 'IDAT') idat.push(data);
    p += 12 + len;
  }
  const ch = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[type];
  const raw = inflateSync(Buffer.concat(idat));
  const stride = w * ch, out = new Uint8Array(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], row = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let x = 0; x < stride; x++) {
      const a = x >= ch ? out[y * stride + x - ch] : 0, b = y ? out[(y - 1) * stride + x] : 0, c = x >= ch && y ? out[(y - 1) * stride + x - ch] : 0;
      let v = row[x];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) { const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      out[y * stride + x] = v & 255;
    }
  }
  return { w, h, ch, type, data: out, palette };
};
export const terrarium = (png) => {
  const { w, h, ch, data } = png, out = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) out[i] = data[i * ch] * 256 + data[i * ch + 1] + data[i * ch + 2] / 256 - 32768;
  return out;
};

// Writes an 8-bit PNG. channels: 1 grey, 3 RGB, 4 RGBA.
import { deflateSync } from 'node:zlib';
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc = (buf) => { let c = 0xffffffff; for (const b of buf) c = CRC[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
const chunk = (tag, data) => { const out = Buffer.alloc(12 + data.length); out.writeUInt32BE(data.length, 0); out.write(tag, 4, 'latin1'); data.copy(out, 8); out.writeUInt32BE(crc(out.subarray(4, 8 + data.length)), 8 + data.length); return out; };
export const encodePng = (w, h, channels, data) => {
  const head = Buffer.alloc(13);
  head.writeUInt32BE(w, 0); head.writeUInt32BE(h, 4); head[8] = 8; head[9] = { 1: 0, 3: 2, 4: 6 }[channels];
  const stride = w * channels, raw = Buffer.alloc(h * (stride + 1));
  for (let y = 0; y < h; y++) Buffer.from(data.buffer, data.byteOffset + y * stride, stride).copy(raw, y * (stride + 1) + 1);
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', head), chunk('IDAT', deflateSync(raw, { level: 6 })), chunk('IEND', Buffer.alloc(0))]);
};
