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
    // description:"développeur",
    salary: 30000,
};
console.log(user1?.description);
