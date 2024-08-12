class House{
    color:string;//家の色
    private _rooms:number;

    constructor(){
        this.color="白";
        this._rooms=1;
    }
    //Getter宣言
    get rooms(): number{
        return this._rooms;
    }
    //Setter宣言
    set rooms(count:number){
        if (count<0){
            this._rooms=0;
        }else{
            this._rooms=count;
        }
    }
    activateSecurity(isOn:boolean){
        if(isOn){
            console.log("セキュリティを作動しました");
        }else{
            console.log("セキュリティを停止しました");
        }
    }
}
//定義したHouseクラスをここに記述する
const redHouse=new House();//Houseのインスタンス化
console.log(redHouse.color);//白
console.log(redHouse.rooms);//1
