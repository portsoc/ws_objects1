'use strict';
/**
 * Objects can contain methods.
 *
 * Here, we move the `drawRect` function into the class
 * definition as a `draw` method.
 *
 * Methods have access to instance
 * properties by using `this`.
 */

class Rectangle {
  constructor(x, y, width, height, col) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.col = col;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// create the two rectangle objects
const rect1 = new Rectangle(100, 50, 100, 200, 'crimson');
const rect2 = new Rectangle(300, 150, 100, 200, 'steelblue');

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

rect1.draw(ctx);
rect2.draw(ctx);
