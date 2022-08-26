"use strict";
// Opérateur !
const container = document.querySelector(".container");
const user1 = {
    title: "Dev Front-end",
    description: "développeur",
    salary: 30000,
};
console.log(user1 === null || user1 === void 0 ? void 0 : user1.description);
// Optional parameter
function msg(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("No message provided");
    }
}
msg("hello");
const house1 = {
    room: 4,
    price: 300000,
};
// ?? opérateur
const data = 0;
const display = data !== null && data !== void 0 ? data : "Hello World";
console.log(display);
// Never
function alertUser(msg) {
    throw msg;
}
alertUser("Alerte, comportement prohibé ");
