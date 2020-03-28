export class Shape {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
  }

  moveBy(x, y) {
    this.x += x;
    this.y += y;
  }

  moveTowards(x, y) {
    this.x -= (this.x - x) / 2;
    this.y -= (this.y - y) / 2;
  }
}

export class Rectangle extends Shape {
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

export class Circle extends Shape {
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


export class Tentacle {
  // private method
  makeCol = i => `hsl(${i * 360 / this.num}deg, 100%, 50%)`;

  constructor(x,y, num, size) {
    this.x = x;
    this.y = y;
    this.num = num;
    this.size = size;
    this.shapes = [];

    for (let i = 0; i < this.num; i += 1) {
      this.shapes.push(new Circle(this.x, this.y, (this.num - i) * this.size, this.makeCol(i)));
    }
  }

  draw(ctx) {
    for (const s of this.shapes) {
      s.draw(ctx);
    }
  }

  moveTowards(x,y) {
    let prev = { x, y };
    for (let i = this.shapes.length - 1; i >= 0; i--) {
      const s = this.shapes[i];
      s.moveTowards(prev.x, prev.y);
      prev = { x: s.x, y: s.y };
    }
  }
}
