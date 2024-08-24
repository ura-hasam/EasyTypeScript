class House{
    public color:string="白";
    public rooms:number=1;

    public activateSecurity(isOn:boolean){
        if(isOn){
            console.log("セキュリティを作動しました");
        }else{
            console.log("セキュリティを停止しました");
        }
    }
}

class GarageHouse extends House{
    public activateSecurity(isOn: boolean){
        if(isOn){
            console.log("セキュリティを作動しました");
            console.log("ガレージのセキュリティも作動します");
        }else{
            console.log("セキュリティを停止しました");
            console.log("ガレージのセキュリティも停止します");
        }
    }
}

const gh=new GarageHouse();
gh.activateSecurity(true);
gh.activateSecurity(false);