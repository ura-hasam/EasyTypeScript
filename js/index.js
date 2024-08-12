"use strict";
class House {
    constructor(color, rooms, address) {
        this.color = "白";
        this.rooms = 1;
        this.address = address;
    }
    displayColor() {
        console.log(`この家の色は${this.color}です。`);
    }
    countRooms() {
        return this.rooms;
    }
    getAddress() {
        return this.address;
    }
}
const redHouse = new House("白", 1, "東京都"); //Houseのインスタンス化
redHouse.color = "赤";
redHouse.displayColor();
//以下はアクセス不可
// redHouse.rooms=2;
// redHouse.countRooms();
// redHouse.address="千葉県"
// redHouse.getAddress();
