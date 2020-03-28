'use strict';
/**
 * todo
 */

import { Tentacle } from './classes.mjs';

// get a handle on the drawing canvas
const canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx = canvas.getContext('2d');
let x = 0;
let y = 0;

function move(e) {
  x = e.clientX - canvas.offsetLeft;
  y = e.clientY - canvas.offsetTop;
}

function draw() {
  t.moveTowards(x,y);
  t.draw(ctx);
}

const t = new Tentacle(canvas.width/2, canvas.height/2, 200, 2);

document.querySelector('canvas').addEventListener('mousemove', move);

window.setInterval(draw, 0);