"use strict";
// Intersection
const shark1 = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200,
    test: "abc",
};
const RedRose = {
    pollen: true,
    type: "vegetal",
    color: "rose",
    thorn: true,
};
const automaticResponse = (country) => {
    if (country.lang === "JA") {
        console.log("Konishiwa");
    }
    else if (country.lang === "IT") {
        console.log("Buongiorno");
    }
};
const Japanese1 = {
    lang: "JA",
    food: ["Ramen", "Sushis"],
};
automaticResponse(Japanese1);
const spainTrip = {
    John: { id: 1 },
    Tom: { id: 2 },
    Julia: { id: 3 },
};
