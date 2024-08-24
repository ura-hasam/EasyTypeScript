"use strict";
class House {
    constructor() {
        this.color = "白";
        this.rooms = 1;
    }
    activateSecurity(isOn) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        }
        else {
            console.log("セキュリティを停止しました");
        }
    }
}
class GarageHouse extends House {
    activateSecurity(isOn) {
        if (isOn) {
            console.log("セキュリティを作動しました");
            console.log("ガレージのセキュリティも作動します");
        }
        else {
            console.log("セキュリティを停止しました");
            console.log("ガレージのセキュリティも停止します");
        }
    }
}
const gh = new GarageHouse();
gh.activateSecurity(true);
gh.activateSecurity(false);
