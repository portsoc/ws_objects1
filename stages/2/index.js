'use strict';
/**
 * We can remove the repetition in the drawing
 * logic by making a function for it.
 *
 * The `drawRect` function has six parameters: the
 * drawing context and the five rectangle parameters.
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

// draw a rectangle
function drawRect(c, x, y, w, h, col) {
  c.fillStyle = col;
  c.fillRect(x, y, w, h);
}

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

drawRect(ctx, rect1x, rect1y, rect1width, rect1height, rect1col);
drawRect(ctx, rect2x, rect2y, rect2width, rect2height, rect2col);
