const myLibrary = [];
const displayLibrary = document.getElementById('displayLibrary');
const showForm = document.getElementById('showForm');
const newBookForm = document.getElementById('newBookForm');

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
    generateLibrary();
    newBookForm.close();
});

//document.getElementById('remove').addEventListener('click', function(){
    //currentIndex = document.getElementsByClassName('')
//});

function generateLibrary() {
    // clear displayLibrary & regenerate with top row
    displayLibrary.innerHTML = '<td>Title</td><td>Author</td><td>Page Count</td><td>Read</td><td></td>';
    // loop through myLibrary and display each book in a table
    myLibrary.forEach((book) => {
        let newRow = document.createElement('tr');
        newRow.innerHTML = '<td>' + book.title + '</td><td>' + book.author+ '</td><td>' + book.pages + '</td><td>' + book.read + '</td>' + '<td><button id="remove">remove</button></td>';
        displayLibrary.appendChild(newRow);
    });
};

showForm.addEventListener('click', () => {
    newBookForm.showModal();
});

document.getElementById('cancel').addEventListener('click', () => {
    newBookForm.close();
});

generateLibrary();