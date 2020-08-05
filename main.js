let myLibrary = [];
let bookshelf = document.getElementById("bookshelf");
let firstLaw = new Book("The Blade Itself", "Joe Abercrombie", "529 pages", "I have read");
addBookToLibrary(firstLaw);
let theWay = new Book("The Way of Kings", "Brandon Sanderson", "1007 pages", "I have read")
addBookToLibrary(theWay);
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


function render() {
    for(let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        let title = document.createElement("div");
        let author = document.createElement("div");
        let pages = document.createElement("div");
        let read = document.createElement("div");
        title.textContent = myLibrary[i].title;
        title.className = "title";
        author.textContent = myLibrary[i].author;
        author.className = "author";
        pages.textContent = myLibrary[i].pages;
        pages.className = "pages"
        read.textContent = myLibrary[i].read;
        read.className = "read";
        
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);

        book.className = "book"
        bookshelf.appendChild(book);
    }
}
render()