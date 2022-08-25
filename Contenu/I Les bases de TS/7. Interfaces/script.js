"use strict";
class RocketFactory {
    constructor(reactors, vMax, price, fuel) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.fuel = fuel;
    }
    takeOff(action) {
        console.log(action);
    }
}
const falcon1 = new RocketFactory(12, 900, 2, 9000);
console.log(falcon1);
falcon1.takeOff("GOOOOO");
