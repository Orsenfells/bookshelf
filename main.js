let myLibrary = [];
let bookshelf = document.getElementById("bookshelf");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(book) {
    return myLibrary.push(book)
}

let firstLaw = new Book("The Blade Itself", "Joe Abercrombie", "529", "I have read it");
addBookToLibrary(firstLaw);

function render() {
    for(let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        
        book.className = "book"
        bookshelf.appendChild(book);
    }
}