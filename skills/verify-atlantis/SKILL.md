---
name: verify-atlantis
description: Prove that the a/atlantis globe and its data still work after a change, by driving the real page the way a person does and keeping the evidence. Use before opening a pull request that touches source/, data/ or artifacts/earth/, when something on the globe looks wrong, or when asked to verify a feature.
---

# Verify a/atlantis

The globe is a web page (`source/`, built into `artifacts/earth/`). This skill starts it, checks it is the right build, drives one feature from the [feature map](features/README.md) and keeps the proof. Everything runs through one helper, `source/build/verify.mjs`.

## Launch

```sh
cd source && npm ci        # once
node source/build/verify.mjs launch
```

It builds `source/dist/`, serves it on a free port and prints `ready: <url> (pid <n>)`. Set `VERIFY_PORT` to choose the port. Two checkouts can run side by side: each keeps its own `source/.verify/run.json`. It needs a Chrome or Chromium: set `CHROME_BIN`, or install Playwright's (`npx playwright install chromium`).

## Doctor

```sh
node source/build/verify.mjs doctor
```

Read-only. It answers "is this instance worth driving?": the server this harness started is alive, the page answers, it serves the build that is on disk, the data has the Atlantis entry, and a browser is available. Run it first whenever anything looks off. `drive` runs it too and refuses to go on if it fails.

## Drive

```sh
node source/build/verify.mjs drive platos-city     # one feature
node source/build/verify.mjs drive all             # every feature in the map
```

Each feature is a journey through the real controls: buttons by their labels, the search box, the sliders, the pointer. The journeys and what each step proves are in [features/](features/README.md). A step prints `ok` or `FAIL` with what was observed.

## Evidence

Each drive writes `source/.verify/evidence/<feature>/<time>.json` (every step, what was observed, the build's hash) and `<time>.png` (the end state). A proof is the journey's own steps passing on the build you changed. Not a proof: calling functions from the console, a screenshot without the steps, or a pass on a different build. A journey that needs the network and gets no answer is reported as blocked, never as passed.

## Cleanup

```sh
node source/build/verify.mjs stop
```

It stops the server that `launch` started, by its recorded process id, and nothing else. The evidence stays.

## Helpers

- `source/build/verify.mjs`: `launch`, `doctor`, `drive <feature|all>`, `stop`.
- `source/build/shot.mjs <url> <out.png> [width] [height] [dpr]`: a picture of any view once its tiles have loaded.
- `tools/check-*.mjs`: the data checks. `drive data-files` runs them.
