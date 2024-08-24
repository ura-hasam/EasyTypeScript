"use strict";
class House {
    activateSecurity(isOn, hasGarage) {
        if (isOn) {
            console.log("セキュリティを作動しました。");
            if (hasGarage) {
                console.log("ガレージのセキュリティも作動します");
            }
        }
        else {
            console.log("セキュリティを停止しました");
            if (hasGarage) {
                console.log("ガレージのセキュリティも停止します");
            }
        }
    }
}
const myHouse = new House();
myHouse.activateSecurity(false);
myHouse.activateSecurity(true, true);
