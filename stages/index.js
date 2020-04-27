'use strict';
/**
 * We can describe a rectangle in terms of five
 * properies: the x and y position of its top left
 * corner, its width, its height and its colour.
 *
 * We create five variables for these properties.
 *
 * We draw the rectangle, move it, and then draw it again.
 */

// create five variables
const rectX = 100;
const rectY = 50;
const rectWidth = 100;
const rectHeight = 200;
const rectCol = 'crimson';

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

// draw the rectangle
ctx.fillStyle = rectCol;
ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
