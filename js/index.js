"use strict";
class House {
    constructor(rooms) {
        this.rooms = rooms;
    }
    getRooms() {
        return this.rooms;
    }
}
class GarageHouse extends House {
    constructor(rooms, hasGarage) {
        super(rooms);
        this.hasGarage = hasGarage;
    }
    getHasGarage() {
        return this.hasGarage;
    }
    getHouseDetails() {
        console.log(`部屋数は${this.getRooms()}です`);
        if (this.hasGarage) {
            console.log("車庫があります");
        }
    }
}
const myHouse = new GarageHouse(3, true);
myHouse.getHouseDetails();
