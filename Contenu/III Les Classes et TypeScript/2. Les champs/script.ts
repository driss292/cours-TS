//Syntaxe sans raccourci
class Book {
    private bookID = 88;
    readonly libraryName = "The Book Shelf";

    constructor(
        public title: string,
        public price: number,
        public dateOfParution: string,
        public author: string,
        public theme?: string[]
    ) {}

    promo() {
        console.log("ID", this.bookID);
        console.log("NAME  ", this.libraryName);

        return this.price * 0.5;
    }
}

//Syntaxe sans raccourci

// class Book {
//     title: string;
//     price: number;
//     dateOfParution: string;
//     author: string;
//     theme?: string[];
//     private bookID = 88;
//     readonly libraryName = "The Book Shelf";

//     constructor(t: string, p: number, dop: string, a: string, th?: string[]) {
//         this.title = t;
//         this.price = p;
//         this.dateOfParution = dop;
//         this.author = a;
//         this.theme = th;
//     }

//     promo() {
//         console.log("ID", this.bookID);
//         console.log("NAME  ", this.libraryName);

//         return this.price * 0.5;
//     }
// }

const book1 = new Book("The Great Gatsby", 20, "11/04/1955", "John Doe");
console.log(book1);
console.log(book1.promo());
console.log(book1.libraryName);

const addToShelter = (obj: Book) => {
    console.log("ADDED", obj);
};
// addToShelter(new Book("Nana", 5, "12/07/1905", "Zola "));

let onlyBook: Book[] = [];
onlyBook.push(new Book("The Great Gatsby", 20, "11/04/1925", "F. Scott Fitzgerald"));
// console.log(onlyBook);
