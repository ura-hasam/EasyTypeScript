"use strict";
class House {
    constructor() {
        //プロパティの定義
        this._rooms = 0;
        //メソッドの定義
    }
    //セッターの定義
    set rooms(count) {
        if (count < 0) {
            this._rooms = 0;
        }
        else {
            this._rooms = count;
        }
    }
    //ゲッターの定義
    get rooms() {
        return this._rooms;
    }
}
const redHouse = new House();
redHouse.rooms = -3;
console.log(redHouse.rooms);
const blueHouse = new House();
const greenHouse = new House();
