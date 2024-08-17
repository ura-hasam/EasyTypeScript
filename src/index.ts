class House{
    adress:string="東京";//住所
    rooms:number;
    // openDoor(isOn:boolean){
    //     if(isOn){
    //         console.log("ドアを開けました");
    //     }
    // }//メソッドの定義
    openDoor():void{
        console.log("ドアを開けました")
    }
    
    set color(variation:string){
        this.color=variation;
    }//setterの定義
    get color():string{
        return this.color;
    }//getterの定義
    constructor(){
        this.color="白";
        this.rooms=1;
    }
}



//以下はアクセス不可
// redHouse.rooms=2;
// redHouse.countRooms();
// redHouse.address="千葉県"
// redHouse.getAddress();