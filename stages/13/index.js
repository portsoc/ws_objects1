'use strict';
/**
 * todo
 */

import { Circle } from './classes.mjs';

function makeCol(i) {
  return `hsl(${i * 360 / NUM}deg, 100%, 50%)`;
}

// create circle and rectangle objects
const shapes = [];

const NUM = 180;
const SIZE = 3;

// get a handle on the drawing canvas
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

for (let i = 0; i < NUM; i += 1) {
  shapes.push(new Circle(canvas.width / 2, canvas.height / 2, (NUM - i) * SIZE, makeCol(i)));
}

function draw() {
  for (const s of shapes) {
    s.draw(ctx);
  }
}

draw();

function move(e) {
  let prev = {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop,
  };
  for (let i = shapes.length - 1; i >= 0; i--) {
    const s = shapes[i];
    s.moveTowards(prev.x, prev.y);
    prev = { x: s.x, y: s.y };
  }
  draw();
}

document.querySelector('canvas').addEventListener('mousemove', move);
