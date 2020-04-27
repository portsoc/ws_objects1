'use strict';
/**
 * todo
 */

import { Tentacle } from './classes.mjs';

// get a handle on the drawing canvas
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function move(e) {
  t.moveTowards(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  t.draw(ctx);
}

const t = new Tentacle(canvas.width / 2, canvas.height / 2, 40, 5);

document.querySelector('canvas').addEventListener('mousemove', move);
