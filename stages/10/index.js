'use strict';
/**
 * Adding functions to a superclass makes them available
 * to all classes that extend it.
 *
 * Here, we use `moveBy()` on rectangles and circles
 * even though it is only defined on Shape.
 */

import { Circle, Rectangle } from './classes.mjs';

// create circle and rectangle objects
const shapes = [
  new Rectangle(100, 50, 100, 200, 'crimson'),
  new Rectangle(300, 150, 100, 200, 'steelblue'),
  new Circle(150, 350, 50, 'crimson'),
  new Circle(350, 450, 50, 'steelblue'),
];

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

for (const s of shapes) {
  s.draw(ctx);
  s.moveBy(110, 30);
  s.draw(ctx);
}
