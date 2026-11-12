// Talking to the Abstracts page around the frame: height, layout, who is viewing, sharing and posting.
// Standalone (the full-window copy on GitHub Pages) there is no page to talk to, and every call says so.

export const embedded = parent !== window;

let n = 0;
const waiting = new Map();
addEventListener('message', (e) => {
  if (e.source !== parent || e.data?.abstracts !== 'result') return;
  waiting.get(e.data.id)?.(e.data);
  waiting.delete(e.data.id);
});

export const bridge = (method, params = {}) => new Promise((resolve, reject) => {
  if (!embedded) return reject(Object.assign(new Error('standalone'), { code: 'unsupported' }));
  const id = `c${++n}`;
  waiting.set(id, (r) => (r.ok ? resolve(r.value) : reject(Object.assign(new Error(r.error?.message ?? 'failed'), { code: r.error?.code ?? 'failed' }))));
  parent.postMessage({ abstracts: 'call', id, method, params }, '*');
});

// The page may still be loading its script: ask up to three times, 500 ms apart.
export const hello = async () => {
  if (!embedded) return null;
  for (let i = 0; i < 3; i++) {
    const answer = await Promise.race([bridge('hello'), new Promise((r) => setTimeout(r, 500, null))]).catch(() => null);
    if (answer) return answer;
  }
  return null;
};

// 'content' (sits in the page column, reports its height) or 'viewport' (fills the dialog or the window).
export const layout = (onChange) => {
  if (globalThis.__LAYOUT__) return onChange(globalThis.__LAYOUT__);   // a host that fixes the layout itself
  if (!embedded) return onChange('viewport');
  let mode = 'content';
  onChange(mode);
  addEventListener('message', (e) => {
    if (e.source !== parent) return;
    const l = e.data?.abstractsLayout;
    if (l !== 'content' && l !== 'viewport') return;
    if (l === 'viewport') parent.postMessage({ abstractsLayout: 'viewport' }, '*');
    if (l !== mode) { mode = l; onChange(mode); }
  });
  parent.postMessage({ abstractsLayout: 'request' }, '*');
};

export const reportHeight = (px) => {
  if (embedded && px > 0 && Number.isFinite(px)) parent.postMessage({ abstractsHeight: Math.ceil(px) }, '*');
};
