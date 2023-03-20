const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  myLibrary.push(new Book(title, author, pages, status));
}

addBookToLibrary('Games of Throne', 'George R.R. Martin', '373', 'not yet');
for (const key in myLibrary) {
  console.log(myLibrary[key].author);
}
