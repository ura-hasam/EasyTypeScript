"use strict";
console.log("問題7-1");
function printNumber() {
    for (let i = 0; i < 6; i++) {
        console.log(i);
    }
}
console.log("===============");
console.log("問題7-2");
function doubleNumber(baseNumber) {
    return baseNumber * 2;
}
console.log(doubleNumber(3));
console.log(doubleNumber(5));
console.log(doubleNumber(10));
console.log("===============");
console.log("問題7-3");
const sumN = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
const result = sumN(10);
console.log(result);
console.log("===============");
console.log("問題7-4");
const greeting = (name) => {
    console.log(`Hello,${name}!`);
};
greeting("yamane");
console.log("===============");
