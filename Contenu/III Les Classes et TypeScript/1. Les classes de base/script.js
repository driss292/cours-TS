"use strict";
class Book {
    constructor(t, p, dop, a, th) {
        this.title = t;
        this.price = p;
        this.dateOfParution = dop;
        this.author = a;
        this.theme = th;
    }
    promo() {
        return this.price * 0.5;
    }
}
const book1 = new Book("The Great Gatsby", 20, "11/04/1955", "Tom Joe");
console.log(book1);
console.log(book1.promo());
const addToShelter = (obj) => {
    console.log("ADDED", obj);
};
addToShelter(new Book("Nana", 5, "12/07/1905", "Zola "));
let onlyBook = [];
onlyBook.push(new Book("The Great Gatsby", 20, "11/04/1925", "F. Scott Fitzgerald"));
console.log(onlyBook);
