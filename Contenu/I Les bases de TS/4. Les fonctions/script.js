"use strict";
function multiply(num1, num2, action) {
    return num1 * num2;
}
console.log(multiply(5, 5));
let foo;
foo = () => { };
// Function signatures
let baz;
baz = (a, b) => a + b;
// Callback
function greetings(fn) {
    fn("Hello World");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
