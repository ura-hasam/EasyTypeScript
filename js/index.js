"use strict";
function getFirstElement(arr) {
    return arr[0];
}
//number型の配列
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log(firstNumber);
// string型の配列
const strings = ["りんご", "みかん", "バナナ"];
const firstString = getFirstElement(strings);
console.log(firstString);
