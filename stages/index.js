'use strict';
/**
 * We use the `class` keyword to define a class
 * before we create instances of it (objects).
 *
 * We define the `Rectangle` class and create two
 * instances of it.
 *
 * They are then drawn as before.
 */

class Rectangle {
  constructor(x, y, width, height, col) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.col = col;
  }
}

// create the two rectangle objects
const rect1 = new Rectangle(100, 50, 100, 200, 'crimson');
const rect2 = new Rectangle(300, 150, 100, 200, 'steelblue');

// draw a rectangle
function drawRect(c, r) {
  c.fillStyle = r.col;
  c.fillRect(r.x, r.y, r.width, r.height);
}

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

drawRect(ctx, rect1);
drawRect(ctx, rect2);
