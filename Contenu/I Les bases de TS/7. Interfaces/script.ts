interface Rocket {
    reactors: number;
    vMax: number;
    takeOff: (action: string) => void;
}
interface Rocket {
    price: number;
    fuel: number;
}

class RocketFactory implements Rocket {
    reactors: number;
    vMax: number;
    price: number;
    fuel: number;
    constructor(reactors: number, vMax: number, price: number, fuel: number) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.fuel = fuel;
    }
    takeOff(action: string) {
        console.log(action);
    }
}

const falcon1 = new RocketFactory(12, 900, 2, 9000);
console.log(falcon1);
falcon1.takeOff("GOOOOO");
