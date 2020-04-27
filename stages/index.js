'use strict';
/**
 * We can _structure_ the properties better, and
 * make the code a little easier to read by
 * constructing objects.
 *
 * Our `drawRect` function no longer needs
 * six parameters and the code is easier to read.
 */

// create an object
const rect1 = {
  x: 100,
  y: 50,
  width: 100,
  height: 200,
  col: 'crimson',
};

// create another object
const rect2 = {
  x: 300,
  y: 150,
  width: 100,
  height: 200,
  col: 'steelblue',
};


// draw a rectangle
function drawRect(c, r) {
  c.fillStyle = r.col;
  c.fillRect(r.x, r.y, r.width, r.height);
}

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

drawRect(ctx, rect1);
drawRect(ctx, rect2);
