class House{
    private rooms:number;
    constructor(rooms:number){
        this.rooms=rooms;
    }
    protected getRooms():number{
        return this.rooms;
    }
}

class GarageHouse extends House{
    private hasGarage:boolean;

    constructor(rooms:number,hasGarage:boolean){
        super(rooms);
        this.hasGarage=hasGarage;
    }

    public getHasGarage():boolean{
        return this.hasGarage;
    }

    public getHouseDetails():void{
        console.log(`部屋数は${this.getRooms()}です`);
        if(this.hasGarage){
            console.log("車庫があります");
        }
    }
}

const myHouse=new GarageHouse(3,true);
myHouse.getHouseDetails();