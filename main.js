let myLibrary = [];
let bookshelf = document.getElementById("bookshelf");
let firstLaw = new Book("The Blade Itself", "Joe Abercrombie", "529 pages", true);
let theWay = new Book("The Way of Kings", "Brandon Sanderson", "1007 pages", true);
let mansSearch = new Book("Man's Search for Meaning", "Victor Frankl", "200 pages", "I have read");
let form = document.getElementById("myForm");
let section = document.querySelector("section");
let newBookButton = document.getElementById("newBook");
let submit = document.getElementById("submit");
addBookToLibrary(theWay);
addBookToLibrary(firstLaw);

window.onload = function() {
    section.style.display = "none";
}
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(book) {
    return myLibrary.push(book);
}
function showForm() {
    section.style.display = "flex";
    section.style.width = "100vw";
    section.style.height = "100vh";
}
function hideForm(e) {
    if(e.target.id === "section") {
        section.style.display = "none";
    }
}

function render() {
    for(let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        let title = document.createElement("div");
        let author = document.createElement("div");
        let pages = document.createElement("div");
        let read = document.createElement("div");
        let remove = document.createElement("button");
        title.textContent = myLibrary[i].title;
        title.className = "title";
        author.textContent = myLibrary[i].author;
        author.className = "author";
        pages.textContent = myLibrary[i].pages;
        pages.className = "pages"
        if(myLibrary[i].read == true ) {
            read.textContent = "I have read";
        } else {
            read.textContent = "I have not read";
        }
        remove.textContent = "x";
        remove.className = "removeBook";
        book.appendChild(remove);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);

        book.className = "book"
        book.dataset.indexNumber = i;
        bookshelf.appendChild(book);
        
        remove.addEventListener('click', function() {
            bookshelf.removeChild(book);
            myLibrary.pop(myLibrary[i]);
        })
    }
}
function enter() {
    let title = document.getElementById("title").value;
    console.log(title);
}
section.addEventListener('click', hideForm);
newBookButton.addEventListener('click', showForm);

function renderNewBook() {
    bookshelf.textContent = "";
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");
    myLibrary.push(new Book(title.value, author.value, pages.value, read.checked));
    section.style.display = "none"
    render();
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}
submit.addEventListener('click', renderNewBook)
render();