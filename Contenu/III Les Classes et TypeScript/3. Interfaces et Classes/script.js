"use strict";
class Norway {
    constructor(name, population, lang, capital) {
        this.name = name;
        this.population = population;
        this.lang = lang;
        this.capital = capital;
    }
}
class France {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const NorwayData = new Norway("Norway", 9, ["Norvegian"], "Oslo");
console.log(NorwayData);
const FranceData = new France("France", 70, ["Français", "Breton", "Basque"]);
console.log(FranceData);
class Aquitaine extends France {
}
const AquitaineData = new Aquitaine("Aquitaine", 4, [
    "Français",
    "Basque",
    "Gascon",
]);
console.log(AquitaineData);
