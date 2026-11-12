// Plato's city, rebuilt from the Critias. Every mesh names the entry of data/reconstruction.json it draws: a passage of
// the text, or one of our choices where the text is silent. The parts are in city/: plan.js (the measurements and the
// height of the ground), ground.js, walls.js, citadel.js, ringparts.js, town.js, ships.js, trees.js; the kit they are
// built with in kit.js and forms.js; what they are made of in surfaces.js, textures.js and materials.js.
// The frame: metres, origin at the centre of the central island at water level, the sea towards -Y, Z up.
// cityscene.js turns the whole to the bearing asked for and stands it on the globe.
import * as THREE from 'three';
import rec from '../../data/reconstruction.json';
import { DEFAULTS, makePlan } from './city/plan.js';
import { Mesher, instances, rnd, TAU } from './city/kit.js';
import { WALK } from './city/surfaces.js';
import { buildGround, buildWater } from './city/ground.js';
import { buildWalls } from './city/walls.js';
import { buildCitadel } from './city/citadel.js';
import { buildRings } from './city/ringparts.js';
import { buildTown } from './city/town.js';
import { shipProtos, placeShips } from './city/ships.js';
import { treeProtos, TREE_TINTS } from './city/trees.js';
import { makeMaterials } from './city/materials.js';

export { DEFAULTS };

// The entries of reconstruction.json by id. kind: 'text' when Plato states the thing, 'choice' when it is ours.
// ours: the thing is stated but its whole form is our choice, so the ghost view draws it pale.
export const ENTRIES = new Map([
  ...rec.from_text.map((e) => [e.id, { id: e.id, what: e.what, ref: e.ref, kind: 'text', ours: e.shape === 'ours' }]),
  ...rec.choices.map((e) => [e.id, { id: e.id, what: e.what, ref: null, kind: 'choice', ours: true }]),
]);

// Builds the city. opts: the measurements (see DEFAULTS). env: { phone, materials } (materials are made if not given).
export const buildCity = (opts = {}, env = {}) => {
  const t0 = typeof performance !== 'undefined' ? performance.now() : 0;
  const plan = makePlan(opts), tier = { phone: !!env.phone };
  const mats = env.materials ?? makeMaterials(tier);
  const M = new Mesher(), group = new THREE.Group(), r = rnd(42);
  const meshes = [];
  const add = (mesh, id, extra = {}) => {
    const e = ENTRIES.get(id);
    if (!e) console.warn(`city: "${id}" is not in reconstruction.json`);
    mesh.userData = { ...mesh.userData, id, kind: e?.kind ?? 'choice', ghostable: !!e?.ours && !extra.keep, solid: mesh.material, ...extra };
    mesh.name = id;
    if (!mesh.userData.line && !mesh.userData.water) mesh.castShadow = mesh.receiveShadow = true;
    group.add(mesh); meshes.push(mesh);
    return mesh;
  };

  const ground = buildGround(M, plan, tier);
  const walls = buildWalls(M, plan, tier);
  const citadel = buildCitadel(M, plan, tier);
  const rings = buildRings(M, plan, tier);
  for (const [key, bin] of M.bins) {
    if (!bin.nv) continue;
    const [id, tag] = key.split('#');
    add(new THREE.Mesh(bin.geometry(), mats.solid), id, tag ? { [tag]: true } : {});
  }
  for (const m of buildWater(plan, mats)) add(m, m.userData.id);

  // pools: the basins of the springs, the reservoirs, the baths, the water channel
  for (const p of [...citadel.pools, ...walls.basins.map((b) => ({ ...b, z: b.z + 0.8, rot: 0, id: 'aqueducts' }))]) {
    const g = p.arc ? new THREE.RingGeometry(p.r0, p.r1, Math.ceil(((p.arc[1] - p.arc[0]) * p.r1) / 6), 1, p.arc[0], p.arc[1] - p.arc[0]) : p.r ? new THREE.CircleGeometry(p.r, 20) : new THREE.PlaneGeometry(p.w, p.d);
    const m = new THREE.Mesh(g, mats.pool);
    if (!p.arc) { m.position.set(p.x, p.y, p.z); m.rotation.z = p.rot ?? 0; } else m.position.z = p.z;
    m.receiveShadow = true;
    add(m, p.id, { water: true, pool: true });
  }

  // trees, by kind and by the part they belong to
  const protos = treeProtos(tier), town = buildTown(plan, tier), byKey = new Map();
  for (const t of [...citadel.trees, ...rings.trees, ...town.trees]) { const key = `${t.kind}|${t.id}`; if (!byKey.has(key)) byKey.set(key, []); const tints = TREE_TINTS[t.kind], c = tints[(r() * tints.length) | 0], k = 0.85 + r() * 0.3; byKey.get(key).push({ x: t.x, y: t.y, z: t.z - 0.1, rot: r() * TAU, sx: t.s * (0.9 + r() * 0.3), sy: t.s * (0.9 + r() * 0.3), sz: t.s, tint: [Math.min(255, c[0] * k), Math.min(255, c[1] * k), Math.min(255, c[2] * k)] }); }
  let treeCount = 0;
  for (const [key, list] of byKey) { const [kind, id] = key.split('|'); treeCount += list.length; add(instances(protos[kind], mats.solid, list), id, { keep: id !== 'house-form', tree: true }); }

  // ships
  const ships = shipProtos(tier), fleet = placeShips(plan, tier);
  const white = [255, 255, 255], tinted = (list) => list.map((s) => ({ ...s, sy: s.sx, sz: s.sx, tint: s.tint ?? white }));
  // the docks cut in the rock hold a hull each
  for (const cx of ground.dock.mouths) fleet.hulls.push({ x: cx, y: ground.dock.yFace - ground.dock.dockDeep * 0.5, z: 0.2, rot: -Math.PI / 2 });
  add(instances(ships.hull, mats.solid, tinted(rings.hulls)), 'shipyards');
  add(instances(ships.hull, mats.solid, tinted(fleet.hulls)), 'triremes', { reflect: true });
  add(instances(ships.trireme, mats.solid, tinted(fleet.triremes)), 'triremes', { reflect: true });
  add(instances(ships.merchant, mats.solid, tinted(fleet.merchants)), 'merchant-ships', { reflect: true });
  add(instances(ships.sailing, mats.solid, tinted(fleet.sailing)), 'merchantmen', { reflect: true });

  // the town: per sector, the plain blocks for far away and the detailed ones for near
  const sectors = town.sectors.map((s) => {
    const low = s.blocks.length ? add(instances(town.protos.low, mats.solid, s.blocks), 'house-form') : null;
    const high = tier.phone ? [] : [0, 1, 2].map((kind) => { const list = s.blocks.filter((b) => b.kind === kind); if (!list.length) return null; const m = add(instances(town.protos.high[kind], mats.solid, list), 'house-form'); m.visible = false; return m; }).filter(Boolean);
    return { ...s, low, high, near: false };
  });

  // what is seen in the water: the big things near it
  const REFLECT = new Set(['wall-brass', 'wall-tin', 'wall-orichalcum', 'ring-walls', 'wall-towers', 'bridges', 'bridge-gates', 'stone', 'rings', 'ship-sheds', 'quays', 'rock-docks', 'ship-passages', 'canal']);
  for (const m of meshes) if (m.userData.reflect || (REFLECT.has(m.userData.id) && !m.userData.water && !m.userData.line && !m.userData.teeth)) m.layers.enable(1);

  const parts = WALK.filter((id) => meshes.some((m) => m.userData.id === id)).map((id) => { const e = ENTRIES.get(id); return { id, what: e.what, ref: e.ref, kind: e.kind }; });

  // Good places to look at each part from: [x, y, range, tilt°, heading° (0 looks north with the sea to the south)].
  const P = plan, t = citadel.temple;
  const spots = {
    canal: [0, -(P.rW3 + 330), 520, 74, 0], 'merchant-ships': [-420, -(P.rW3 - 150), 380, 76, 300], houses: [-360, -(P.rT + 190), 300, 68, 25], 'house-form': [-360, -(P.rT + 190), 160, 74, 25],
    harbours: [P.off - 260, -(P.rL2 + P.rW3) / 2, 1000, 68, 332], bridges: [P.off + 150, -(P.rL2 + 300), 420, 74, 330], 'bridge-gates': [P.off + 6, -(P.bridges[2][1] + 70), 120, 80, 0], aqueducts: [P.off - 8, -(P.bridges[1][1] + 30), 90, 72, 20],
    'wall-brass': [P.off + 330, -(P.r2b - 60), 420, 78, 300], 'ring-walls': [P.off + 60, -(P.r2b + 30), 150, 80, 60], 'wall-towers': [P.off + 200, -(P.r2b + 10), 160, 78, 310], 'ship-passages': [0, -(P.rL2 + 110), 170, 82, 0],
    racecourse: [P.off + 420, -(P.rcMid - 60), 520, 70, 290], barracks: [P.off + 240, -(P.rcMid + P.rcHalf + 30), 170, 70, 300], 'horse-grounds': [P.off + 500, -(P.r2a + 80), 300, 64, 330], gymnasia: [P.off + 330, -(P.r1a + 70), 260, 62, 320], gardens: [P.off + 260, -(P.r2b - 70), 240, 62, 300],
    'ring-temples': [P.off - 300, -(P.r1a + 80), 240, 66, 30], 'patterned-buildings': [P.off - 420, -(P.r1b - 60), 220, 66, 20], shipyards: [P.off + 330, -(P.rW2 - 60), 260, 74, 300], 'ship-sheds': [P.off + 330, -(P.rW2 - 60), 160, 78, 300],
    'wall-tin': [P.off + 220, -(P.r1b + 60), 300, 78, 310], 'guard-house': [P.off + 200, -(P.r1a + 130), 260, 62, 60], 'rock-docks': [0, P.rIsle + 60, 150, 80, 180], 'wall-orichalcum': [P.off + 150, -(P.rIsle + 60), 240, 78, 320],
    'guard-dwellings': [-(P.Rs + 50), -40, 190, 66, 90], springs: [330, 250, 190, 66, 230], reservoirs: [300, 300, 200, 62, 230], baths: [120, 420, 220, 62, 190], grove: [-220, 380, 300, 66, 150], palace: [0, 110, 330, 62, 0],
    shrine: [0, -20, 150, 68, 15], 'shrine-wall': [0, -30, 120, 72, 0], hall: [0, 0, 60, 30, 0], altar: [citadel.altar.x + 10, citadel.altar.y, 110, 72, 280], statues: [t.x + t.L / 2 + 20, t.y - t.W / 2 - 10, 90, 78, 300], 'votive-outside': [P.off, -(P.rampTop - 40), 70, 78, 0],
    temple: [t.x, t.y, 215, 70, 40], pinnacles: [t.x + t.L / 2, t.y, 120, 60, 270], 'temple-interior': [t.x + 20, t.y, 70, 84, 270, t.floor], 'temple-ceiling': [t.x - 20, t.y, 40, 62, 270, t.floor], poseidon: [t.x - 30, t.y, 60, 84, 270, t.floor],
    nereids: [t.x + 10, t.y + 12, 30, 80, 250, t.floor], 'votive-inside': [t.x + 30, t.y - 20, 30, 80, 200, t.floor], pillar: [t.x + 22, t.y, 26, 82, 270, t.floor],
    rings: [0, 0, P.rW3 * 3.4, 58, 330], island: [0, -60, 900, 62, 0], hill: [P.off + 40, -(P.rampFoot + 40), 200, 76, 350], stone: [P.off + 120, -(P.r1b + 40), 120, 80, 300], quays: [P.off + 150, -(P.rT - 20), 140, 82, 290],
    'outer-wall': [0, 0, P.rWall * 2.6, 20, 0], extent: [0, -P.core, 900, 66, 0], triremes: [P.off + 140, -(P.rL1 + 150), 200, 78, 300], merchantmen: [60, -(P.rW3 + 200), 200, 80, 0], 'island-gardens': [-(P.Rp + 30), -30, 160, 70, 90], 'racecourse-form': [P.off + 60, -(P.rcMid + P.rcHalf + 30), 180, 76, 330], 'ring-layout': [P.off + 300, -(P.r1a + 140), 300, 62, 300],
  };
  // The four views the lab pictures (metres east and north of the centre, with the sea to the south).
  const lab = { centre: [0, 0], harbour: [P.off - 40, -(P.rL2 + 150)], temple: [t.x + 10, t.y], quay: [P.off + 40, -(P.rT - 24)] };

  const buildMs = (typeof performance !== 'undefined' ? performance.now() : 0) - t0;
  let triangles = 0; for (const m of meshes) { const g = m.geometry, n = (g.index ? g.index.count : g.attributes.position.count) / 3; triangles += n * (m.isInstancedMesh ? m.count : 1); }
  return { group, meshes, parts, spots, lab, sectors, plan, temple: citadel.temple, hall: citadel.hall, radius: plan.edge + 80, wallRadius: plan.rWall, coreRadius: plan.rW3, shores: plan.shores, materials: mats, params: plan.P, bank: plan.B, stats: { buildMs, triangles, meshes: meshes.length, trees: treeCount } };
};
