'use strict';
/**
 * We refactor the `Rectangle` and `Circle` classes,
 * taking the common properties and functions and
 * moving them to a new _superclass_ called `Shape`.
 */

class Shape {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
  }
}

class Rectangle extends Shape {
  constructor(x, y, width, height, col) {
    super(x, y, col);
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(x, y, r, col) {
    super(x, y, col);
    this.r = r;
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
