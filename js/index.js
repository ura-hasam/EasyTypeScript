"use strict";
class House {
    // openDoor(isOn:boolean){
    //     if(isOn){
    //         console.log("ドアを開けました");
    //     }
    // }//メソッドの定義
    openDoor() {
        console.log("ドアを開けました");
    }
    set color(variation) {
        this.color = variation;
    } //setterの定義
    get color() {
        return this.color;
    } //getterの定義
    constructor() {
        this.adress = "東京"; //住所
        this.color = "白";
        this.rooms = 1;
    }
}
//以下はアクセス不可
// redHouse.rooms=2;
// redHouse.countRooms();
// redHouse.address="千葉県"
// redHouse.getAddress();
