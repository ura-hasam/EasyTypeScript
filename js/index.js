"use strict";
const x = false;
const y = false;
const z = false;
//!が最も優先的に評価される
console.log(!x && y || z);
// 括弧が最も優先的に評価される
console.log(!(x && y) || z);
