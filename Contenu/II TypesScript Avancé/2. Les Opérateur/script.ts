// Opérateur !

const container = document.querySelector(".container")!;
// console.log(container.children);

// Opérateur ?

type Job = {
    title: string;
    description?: string; //propriété facultative avec le ?
    salary: number;
};

const user1: Job = {
    title: "Dev Front-end",
    description: "développeur",
    salary: 30000,
};
console.log(user1?.description);

// Optional parameter

function msg(msg?: string) {
    if (msg) {
        console.log(msg);
    } else {
        console.log("No message provided");
    }
}
msg("hello");

// optionl interface property

interface House {
    room: number;
    price: number;
    garage?: number;
}
const house1: House = {
    room: 4,
    price: 300000,
};

// ?? opérateur

const data = 0;
const display = data ?? "Hello World";
console.log(display);

// Never

function alertUser(msg: string): never {
    throw msg;
}
alertUser("Alerte, comportement prohibé ");
