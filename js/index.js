"use strict";
function sum(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(`合計は${total}です`);
}
sum(1, 2, 3, 4);
sum(5, 10);
