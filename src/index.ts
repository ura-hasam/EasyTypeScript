class House{
    activateSecurity(isOn:boolean):void;
    activateSecurity(isOn:boolean,hasGarage:boolean):void;

    activateSecurity(isOn:boolean,hasGarage?:boolean):void{
        if(isOn){
            console.log("セキュリティを作動しました。");
            if(hasGarage){
                console.log("ガレージのセキュリティも作動します");
            }
        }else{
                console.log("セキュリティを停止しました");
                if(hasGarage){
                    console.log("ガレージのセキュリティも停止します");
                }
            }
        }
    }
const myHouse=new House();
myHouse.activateSecurity(false);
myHouse.activateSecurity(true,true);