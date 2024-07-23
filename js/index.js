"use strict";
function getTriArea(base, height) {
    let area = 0;
    area = base * height / 2;
    return area;
}
let menseki = getTriArea(4, 3);
console.log(`面積は${menseki}です`);
