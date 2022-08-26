// Intersection

type Fish = {
    fin: number;
    element: "water";
    gills: true;
};

type Shark = {
    weight: number;
    length: number;
};
type HammerheadShark = Fish &
    Shark & {
        test: "abc";
    };

const shark1: HammerheadShark = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200,
    test: "abc",
};

// Lier des interfaces

interface Flower {
    pollen: true;
    type: "vegetal";
}

interface Rose extends Flower {
    color: string;
    thorn: boolean;
}

const RedRose: Rose = {
    pollen: true,
    type: "vegetal",
    color: "rose",
    thorn: true,
};

// Union discriminante

type Japan = {
    lang: "JA";
    food: string[];
};

type Italy = {
    lang: "IT";
    food: string[];
};

type Country = Japan | Italy;

const automaticResponse = (country: Country) => {
    if (country.lang === "JA") {
        console.log("Konishiwa");
    } else if (country.lang === "IT") {
        console.log("Buongiorno");
    }
};

const Japanese1: Country = {
    lang: "JA",
    food: ["Ramen", "Sushis"],
};
automaticResponse(Japanese1);

// Unknown number of props

interface Group {
    [name: string]: object;
}
const spainTrip: Group = {
    John: { id: 1 },
    Tom: { id: 2 },
    Julia: { id: 3 },
};
