"use strict";
const kokugo = [80, 65, 90, 75, 85];
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += kokugo[i];
}
const average = sum / 5;
console.log(`５人の国語の合計点数は${sum}点で、平均点数は
    ${average}点です`);
