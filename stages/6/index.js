'use strict';
/**
 * We add a `Circle` class to complement our `Rectangle`.
 * Circles have `x` and `y` position as well
 * as a radius (`r`).
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

class Circle {
  constructor(x, y, r, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}

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
