// What the city is made of. No three.js here, so the build scripts can read it too.
// LAYERS are the pictures (one slice each of two texture arrays: colour, and normal with roughness). A SURFACE is a way of
// using a layer: how large it lies, how rough and how metallic it is, whether it is laid in coloured bands, whether the
// harbour wets it. A vertex names its surface; one shader draws them all.
export const LAYERS = ['ashlar', 'paving', 'tiles', 'plaster', 'metal', 'grass', 'sand', 'wood', 'rock', 'leaf'];
const L = Object.fromEntries(LAYERS.map((n, i) => [n, i]));

// layer, size: metres one repeat of the picture covers, metal 0..1, rough: multiplies the picture's roughness,
// bump: strength of the normal map, pattern: 0 plain, 1 bands of the three stones, 2 chequer of the three stones,
// 3 thin alternate courses; wet: darkens and shines near the water line; keep: 1 keeps the picture's own colour
// (the tint only shades it), 0 takes the brightness of the picture and the colour of the tint.
const def = (layer, size, o = {}) => ({ layer: L[layer], size, metal: 0, rough: 1, bump: 1, pattern: 0, wet: 1, keep: 0, ...o });
export const SURFACES = {
  stone: def('ashlar', 3.6),
  stoneBands: def('ashlar', 3.6, { pattern: 1 }),
  stoneChequer: def('ashlar', 3.6, { pattern: 2 }),
  stoneCourses: def('ashlar', 3.6, { pattern: 3 }),
  smooth: def('plaster', 5, { rough: 0.8, bump: 0.5 }),          // dressed stone without joints: steps, statues' bases, columns
  rock: def('rock', 9, { bump: 1.3 }),
  paving: def('paving', 7),
  plaster: def('plaster', 4.5, { bump: 0.7 }),
  tiles: def('tiles', 2.6, { keep: 1, wet: 0 }),
  metal: def('metal', 4.6, { metal: 0.72, rough: 1.5, wet: 0 }),   // sheet over a wall: brass, tin, orichalcum, silver
  gilt: def('metal', 3.1, { metal: 0.8, rough: 1.15, bump: 0.3, wet: 0 }), // statues and ornaments
  grass: def('grass', 7, { keep: 1 }),
  sand: def('sand', 6, { keep: 1 }),
  earth: def('sand', 8, { keep: 0 }),
  wood: def('wood', 2.6, { keep: 1 }),
  leaf: def('leaf', 5.5, { keep: 1, wet: 0, bump: 1.6 }),
  cloth: def('plaster', 2.2, { wet: 0, bump: 0.4 }),
  dark: def('rock', 9, { bump: 0.4, wet: 0 }),
  ivory: def('plaster', 6, { rough: 0.55, bump: 0.3, wet: 0 }),
};
export const SURFACE_NAMES = Object.keys(SURFACES);
export const S = Object.fromEntries(SURFACE_NAMES.map((n, i) => [n, i]));

// Colours, sRGB. The three stones of Critias 116a-b and the five metals of 116b-d.
export const TINT = {
  white: [226, 219, 203], black: [70, 70, 76], red: [150, 78, 58],
  brass: [205, 160, 72], tin: [196, 201, 204], orichalcum: [226, 118, 62], silver: [224, 228, 232], gold: [246, 190, 78],
  plaster: [[232, 224, 207], [222, 208, 184], [212, 193, 164], [226, 214, 196], [204, 182, 152], [236, 230, 218]],
  tile: [[255, 255, 255], [240, 222, 205], [226, 204, 186], [255, 240, 226]],
  wood: [150, 118, 86], darkWood: [92, 70, 50], hull: [78, 60, 44], sail: [232, 222, 198], ivory: [244, 236, 214],
  leaf: [[78, 104, 58], [92, 116, 66], [66, 92, 52], [104, 122, 70]], cypress: [[40, 66, 42], [48, 74, 46], [34, 58, 38]], olive: [[118, 132, 96], [104, 120, 88]],
  trunk: [96, 78, 60], shade: [26, 26, 28], sand: [255, 255, 255], water: [255, 255, 255],
};

// The parts a visitor can go to, in the order of a walk from the sea to the temple. Each id is an entry in
// data/reconstruction.json; build/check-reconstruction.mjs checks that. `drawn` lists every id a mesh may carry.
export const WALK = ['canal', 'merchant-ships', 'houses', 'harbours', 'bridges', 'bridge-gates', 'aqueducts', 'wall-brass', 'ship-passages', 'racecourse', 'barracks', 'horse-grounds', 'gymnasia', 'gardens', 'ring-temples', 'patterned-buildings', 'shipyards', 'wall-tin', 'guard-house', 'rock-docks', 'wall-orichalcum', 'guard-dwellings', 'springs', 'reservoirs', 'baths', 'grove', 'palace', 'shrine', 'shrine-wall', 'altar', 'statues', 'votive-outside', 'temple', 'pinnacles', 'temple-interior', 'temple-ceiling', 'poseidon', 'nereids', 'votive-inside', 'pillar'];
export const DRAWN = [...WALK, 'hall', 'rings', 'island', 'hill', 'island-gardens', 'stone', 'ring-walls', 'quays', 'outer-wall', 'extent', 'ship-sheds', 'triremes', 'merchantmen', 'wall-towers', 'bridge-form', 'gate-form', 'palace-plan', 'house-form', 'grove-trees', 'ring-layout', 'racecourse-form', 'rock-dock-place', 'road-offset', 'temple-form', 'figure-form'];
