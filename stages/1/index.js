'use strict';
/**
 * If we want a _second_ rectangle (and simultaneously being
 * deliberately naïve) we might just create five additional
 * variables and duplicate our drawing code.
 */

// create five variables
const rect1x = 100;
const rect1y = 50;
const rect1width = 100;
const rect1height = 200;
const rect1col = 'crimson';

// create another five variables
const rect2x = 300;
const rect2y = 150;
const rect2width = 100;
const rect2height = 200;
const rect2col = 'steelblue';

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

// draw the rectangle
ctx.fillStyle = rect1col;
ctx.fillRect(rect1x, rect1y, rect1width, rect1height);

// draw it in the new position, with a different colour
ctx.fillStyle = rect2col;
ctx.fillRect(rect2x, rect2y, rect2width, rect2height);
