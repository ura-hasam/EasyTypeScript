"use strict";
function applyOperation(n, action) {
    console.log(action(n));
}
// const increment=function(n:number){
//     return n+1;;
// };
const increment = (n) => {
    return n + 1;
};
// const decrement=function(n:number){
//     return n-1;
// };
const decrement = (n) => {
    return n - 1;
};
applyOperation(5, increment);
applyOperation(5, decrement);
