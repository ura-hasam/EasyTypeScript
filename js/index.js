"use strict";
const x = 5;
const y = 0;
if (y === 0) {
    //yが0のときは例外をスローしてプログラムを終了
    throw new Error("ゼロで割り算はできません");
}
const ans = x / y;
