// Generics

// interface Réutilisable

interface City<T> {
    name: string;
    pop: number;
    additionalData: T;
}

const Londres: City<object> = {
    name: "Londres",
    pop: 10,
    additionalData: { area: 1572 },
};

const Paris: City<object[]> = {
    name: "Paris",
    pop: 2,
    additionalData: [{ uderground: true }, { restaurant: true, number: 7777 }],
};

// Generics with functions

const addRepairDate = <T extends object>(obj: T) => {
    const lastRepair = new Date();
    return { ...obj, lastRepair };
};
const auto1 = addRepairDate({ model: "A1", km: 70000, price: 10000 });
const auto2 = addRepairDate({ model: "A1", km: 70000, price: 10000, color: "white" });
// const auto3 = addRepairDate("TEST"); ERREUR de typage generics
console.log(auto1.model);
