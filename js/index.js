"use strict";
const mon = 11;
let days = 0;
switch (mon) {
    case 1:
        days = 31;
        break;
    case 2:
        days = 28;
        break;
    case 3:
        days = 31;
        break;
    case 4:
        days = 30;
        break;
    case 5:
        days = 31;
        break;
    case 6:
        days = 30;
        break;
    case 7:
        days = 31;
        break;
    case 8:
        days = 31;
        break;
    case 9:
        days = 30;
        break;
    case 10:
        days = 31;
        break;
    case 11:
        days = 30;
        break;
    case 12:
        days = 31;
        break;
    default:
        days = 0;
        break;
}
console.log(`${mon}月は${days}日あります`);
//同一の日数を持つcase節をまとめる事が出来る。
//このcase節をまとめる書き方をフォールスルーと呼ぶ
const month = 11;
let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 2:
        day = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    default:
        day = 0;
        break;
}
console.log(`${month}月は${day}日です`);
