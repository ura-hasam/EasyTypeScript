class House{
    color:string;//家の色
    private rooms:number;
    protected address:string;//同じクラス、継承クラスからのみアクセス可能

    constructor(color:string,rooms:number,address:string){
        this.color="白";
        this.rooms=1;
        this.address=address;
    }
    
    public displayColor():void{
        console.log(`この家の色は${this.color}です。`);
    }

    private countRooms():number{
        return this.rooms;
    }

    protected getAddress():string{
        return this.address;
    }
}

const redHouse=new House("白",1,"東京都");//Houseのインスタンス化

redHouse.color="赤";
redHouse.displayColor();

//以下はアクセス不可
// redHouse.rooms=2;
// redHouse.countRooms();
// redHouse.address="千葉県"
// redHouse.getAddress();