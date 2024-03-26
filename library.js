const myLibrary = [];

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
    
}
let harryPotter = new Book("Harry Potter","JK Rowling",300,true);

console.log(harryPotter.info())