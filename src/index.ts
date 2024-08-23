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
    //車庫の有無を表すプロパティ(true:車庫あり/false:車庫なし)
    public hasGarage:boolean=false;
    //車庫の開閉をするメソッドの定義(true:車庫を開ける/false:車庫を閉める)
    public openGarage(isOpen:boolean):void{
        if(this.hasGarage){ //車庫があるかどうか
            if(isOpen){ //車庫を開ける場合
                console.log("車庫を開けました");
            }else{　//車庫を閉じる場合
                console.log("車庫を閉じました");
            }
        }else{ //車庫が無い場合
            console.log("車庫がありません")
        }
    }
}
const gh=new GarageHouse();//インスタンスの作成
gh.hasGarage=true;          //車庫を「あり」に設定
gh.openGarage(true);        //車庫を空ける
gh.openGarage(false);       //車庫を閉める
gh.activateSecurity(true);  //セキュリティを作動させる
