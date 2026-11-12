// Trees: the grove of Poseidon and the plantings round the springs (Critias 117a-b), the gardens on the rings (117c),
// the food-bearing trees of the island (113e). The kinds are a choice (see "grove-trees" in reconstruction.json).
// Each kind is one small shape one unit tall, drawn many times at its own height, turn and shade of green.
import { S, TINT } from './surfaces.js';
import { Bin, Frame, rnd } from './kit.js';

const crown = (g, x, y, z, rad, h, n, tint, seed) => {
  const r = rnd(seed), wob = () => 0.86 + r() * 0.28;
  g.surf(S.leaf, tint).turned(x, y, z, [[rad * 0.3, 0], [rad * wob(), h * 0.36], [rad * 0.8 * wob(), h * 0.72], [0.01, h]], n, { rot: r() * 6, squash: 0.9 + r() * 0.2 });
};
export const treeProtos = (tier) => {
  const n = 5, mk = () => new Bin(new Frame(), 'tree');
  const cypress = mk();
  cypress.surf(S.wood, TINT.trunk).shaft(0, 0, 0, 0.022, 0.018, 0.12, 4);
  cypress.surf(S.leaf, [255, 255, 255]).turned(0, 0, 0.07, [[0.03, 0], [0.095, 0.14], [0.1, 0.36], [0.06, 0.72], [0.004, 0.93]], n);
  const plane = mk();
  plane.surf(S.wood, TINT.trunk).shaft(0, 0, 0, 0.035, 0.025, 0.42, 5);
  crown(plane, 0.06, 0.02, 0.3, 0.3, 0.52, n, [255, 255, 255], 3); crown(plane, -0.14, -0.06, 0.4, 0.26, 0.6, n, [235, 245, 225], 4);
  const pine = mk();
  pine.surf(S.wood, TINT.trunk).shaft(0, 0, 0, 0.03, 0.02, 0.66, 5);
  crown(pine, 0, 0, 0.6, 0.36, 0.4, n + 1, [215, 235, 205], 5);
  const olive = mk();
  olive.surf(S.wood, TINT.trunk).shaft(0, 0, 0, 0.06, 0.04, 0.34, 5);
  crown(olive, 0, 0, 0.24, 0.46, 0.76, n, [255, 255, 255], 6);
  const fruit = mk();
  fruit.surf(S.wood, TINT.trunk).shaft(0, 0, 0, 0.045, 0.03, 0.36, 4);
  crown(fruit, 0, 0, 0.28, 0.4, 0.72, n, [255, 255, 255], 7);
  return { cypress: cypress.geometry(), plane: plane.geometry(), pine: pine.geometry(), olive: olive.geometry(), fruit: fruit.geometry() };
};
// Shades each kind is drawn in; they multiply the leaf picture's own green.
export const TREE_TINTS = { cypress: [[150, 175, 150], [170, 190, 160], [135, 160, 140]], plane: [[255, 255, 255], [235, 245, 220], [220, 235, 205], [245, 240, 200]], pine: [[190, 215, 185], [205, 225, 195]], olive: [[225, 232, 236], [205, 216, 222]], fruit: [[255, 255, 235], [240, 255, 220], [225, 240, 205]] };
