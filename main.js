let myLibrary = [];
let bookshelf = document.getElementById("bookshelf");
let firstLaw = new Book("The Blade Itself", "Joe Abercrombie", "529 pages", "I have read");
let theWay = new Book("The Way of Kings", "Brandon Sanderson", "1007 pages", "I have read");
let mansSearch = new Book("Man's Search for Meaning", "Victor Frankl", "200 pages", "I have read");
let form = document.querySelector(".newBookForm");
let section = document.querySelector("section");
let newBookButton = document.getElementById("newBook");
let submit = document.getElementById("submit");
addBookToLibrary(theWay);
addBookToLibrary(firstLaw);
addBookToLibrary(mansSearch);
window.onload = function() {
    section.style.display = "none";
}
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
function enter() {
    let title = document.getElementById("title").value;
    console.log(title);
}
section.addEventListener('click', hideForm);
newBookButton.addEventListener('click', showForm);

window.addEventListener('load', function() {
    function sendData() {
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData( form );

        // Define what happens on successful data submission
        XHR.addEventListener("load" , function(event) {
            alert( event.target.responseText );
        });

        // Set up our request
        XHR.open( "POST", "https://orsenfells.github.io/bookshelf/?");

        // The data sent is what the user provided in the form
        XHR.send(FD);
    }

    // Access the form element...
    const form = document.getElementById("myForm");

    // ...and take over its submit event.
    form.addEventListener( "submit", function( event ) {
        event.preventDefault();

        sendData();
    });
});

render();