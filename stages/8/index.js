'use strict';
/**
 * We moved the classes to a separate file called `classes.mjs`.
 */

import { Circle, Rectangle } from './classes.mjs';

// create circle and rectangle objects
const rect1 = new Rectangle(100, 50, 100, 200, 'crimson');
const rect2 = new Rectangle(300, 150, 100, 200, 'steelblue');
const circ1 = new Circle(150, 350, 50, 'crimson');
const circ2 = new Circle(350, 450, 50, 'steelblue');

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

rect1.draw(ctx);
rect2.draw(ctx);
circ1.draw(ctx);
circ2.draw(ctx);
