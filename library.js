const myLibrary = [];
const displayLibrary = document.getElementById('displayLibrary');

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + ' by ' + this.author + ', ' + this.pages + " pages";
    }
};

function addBookToLibrary() {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('read').checked;

    myLibrary.push(new Book(title,author,pages,read))
}

myLibrary.push(new Book('Fight Club', 'Chuck Palahniuk', 250, true));
myLibrary.push(new Book('Invisible Monsters', 'Chuck Palahniuk', 250, true));
myLibrary.push(new Book('Choke', 'Chuck Palahniuk', 250, true));

document.getElementById('enter').addEventListener('click', function() {
    addBookToLibrary();
});

myLibrary.forEach((book) => {
    // loop through myLibrary and display each book in a table
    // need to initalize table in index.html
    // each iteration should add a new row
});