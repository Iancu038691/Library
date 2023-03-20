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

const container = document.querySelector('.container');
container.appendChild(document.createElement('tbody'));
const tr = document.querySelector('tr');
tr.classList.add('qwerty');
const bookTitle = document.createElement('td');
bookTitle.classList.add('title');
bookTitle.textContent = myLibrary[0].title;

const bookAuthor = document.createElement('td');
bookAuthor.classList.add('author');
bookAuthor.textContent = myLibrary[0].author;

const bookPages = document.createElement('td');
bookPages.classList.add('pages');
bookPages.textContent = myLibrary[0].pages;

const bookStatus = document.createElement('td');
bookStatus.classList.add('status');
bookStatus.textContent = myLibrary[0].status;

tr.appendChild(bookTitle)
  .appendChild(bookAuthor)
  .appendChild(bookPages)
  .appendChild(bookStatus);
