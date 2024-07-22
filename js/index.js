"use strict";
function greet(name, greeting = "Hello") {
    console.log(`${greeting},${name}!`);
}
greet("HIRO");
greet("HIRO", "こんにちは");
