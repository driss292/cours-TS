// Type Assertion
// let txt: string;
// txt = "str"

// Assertion
// const form: HTMLFormElement = document.querySelector("form")!;
// console.log(form.children);

// Type Casting
const form = document.querySelector("form") as HTMLFormElement;
console.log(form.children);

const input = document.querySelector("input") as HTMLInputElement;

form.addEventListener("submit", handleSubmit);

function handleSubmit(e: Event) {
    e.preventDefault();
    console.log("Submited");
}

window.addEventListener("click", handleClick);

function handleClick(e: MouseEvent) {
    console.log(e.clientX, e.clientY);
}

const paragraphsList = document.querySelectorAll("p");
