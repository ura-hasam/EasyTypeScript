"use strict";
class House {
    constructor() {
        //プロパティの定義
        this._rooms = 0;
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
    //メソッドの定義
    activateSecurity(isOn) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        }
        else {
            console.log("セキュリティを停止しました。");
        }
    }
}
const redHouse = new House();
redHouse.rooms = -3;
console.log(redHouse.rooms);
const blueHouse = new House();
const greenHouse = new House();
redHouse.activateSecurity(true);
redHouse.activateSecurity(false);
