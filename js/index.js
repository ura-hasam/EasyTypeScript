"use strict";
const kokugo = [80, 65, 90, 75, 85];
let sum = 0;
for (const num of kokugo) {
    sum += num;
}
const average = sum / 5;
console.log(`５人の国語の合計点数は${sum}点で、平均点数は
    ${average}点です`);
console.log("============================");
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 2) {
        break;
    }
}
console.log("============================");
for (let a = 0; a < 5; a++) {
    if (a === 2) {
        continue;
    }
    console.log(a);
}
