'use strict';

import { Circle } from './classes.mjs';

function makeCol(i) {
  return `hsl(${i * 360 / NUM}deg, 100%, 50%)`;
}

// create circle and rectangle objects
const shapes = [];

const NUM = 18;
const SIZE = 10;

for (let i = 0; i < NUM; i += 1) {
  shapes.push(new Circle(400, 400, (NUM - i) * SIZE, makeCol(i)));
}

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

for (const s of shapes) {
  s.draw(ctx);
}
