"use strict";
class MyUtility {
    printNumber(arr) {
        for (const val of arr) {
            console.log(val);
        }
    }
}
const nums = [1, 2, 3, 4, 5];
const names = ["Steve", "Bill", "Mark"];
const util = new MyUtility();
util.printNumber(nums);
util.printNumber(names);
//ジェネリッククラスの使用例
class MyData {
    constructor() {
        this.vals = [];
    }
    addValue(item) {
        this.vals.push(item);
    }
    getValue(index) {
        return this.vals[index];
    }
}
const dataNum = new MyData();
dataNum.addValue(5);
dataNum.addValue(3);
console.log(dataNum.getValue(1));
const dataStr = new MyData();
dataStr.addValue("apple");
dataStr.addValue("orange");
console.log(dataStr.getValue(1));
