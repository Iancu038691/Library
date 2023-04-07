const myLibrary = [];
let copyMyLibrary = [];
class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary(title, author, pages, status) {
  myLibrary.push(new Book(title, author, pages, status));
}

// if (myLibrary.length !== 0) copyMyLibrary = myLibrary.slice();

addBookToLibrary('Games of Throne', 'George R.R. Martin', '373', false);
// searchForItems();
addLastItem();
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const statusPending = document.querySelector('#status');
const btn = document.querySelector('#btn');
function isNotZero(a, b, c) {
  if (a === '' || b === '' || c === '') {
    return 'wrong';
  }
  return 'good';
}
if (myLibrary.length !== 0) copyMyLibrary = myLibrary.slice();
btn.onclick = (event) => {
  event.preventDefault();
  if (isNotZero(title.value, author.value, pages.value) === 'good') {
    addBookToLibrary(
      title.value,
      author.value,
      pages.value,
      statusPending.checked,
    );
    title.value = '';
    author.value = '';
    pages.value = '';
    statusPending.checked = false;
  }
  if (copyMyLibrary.length !== myLibrary.length || copyMyLibrary.length === 0) {
    addLastItem();
    copyMyLibrary = myLibrary.slice();
  }
};

function statusChecked(value) {
  if (value === false) return 'not yet';
  return 'reading';
}

function addLastItem() {
  if (myLibrary.length > 0) {
    const container = document.querySelector('.container');

    const box = document.createElement('div');
    box.classList.add('box');

    container.appendChild(box);

    const bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    bookTitle.textContent = myLibrary[myLibrary.length - 1].title;

    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;

    const bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    bookPages.textContent = `Pages:${myLibrary[myLibrary.length - 1].pages}`;

    const form = document.createElement('form');
    const bookStatus = document.createElement('input');
    bookStatus.type = 'checkbox';
    bookStatus.setAttribute('id', `bookStatus${myLibrary.length}`);
    bookStatus.checked = myLibrary[myLibrary.length - 1].status;
    const label = document.createElement('label');
    label.textContent = `Status:${statusChecked(
      myLibrary[myLibrary.length - 1].status,
    )}`;
    label.htmlFor = `bookStatus${myLibrary.length}`;
    bookStatus.addEventListener('click', () => {
      if (label.textContent === 'Status:not yet') { label.textContent = 'Status:reading'; myLibrary[myLibrary.length - 1].status = true; } else {
        label.textContent = 'Status:not yet'; myLibrary[myLibrary.length - 1].status = false;
      }
    });
    box.appendChild(bookTitle);
    box.appendChild(bookAuthor);
    box.appendChild(bookPages);
    box.appendChild(form);
    form.appendChild(label);
    form.appendChild(bookStatus);

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('buttonDelete');
    buttonDelete.textContent = 'Delete';
    buttonDelete.addEventListener('click', () => {
      box.remove();
      myLibrary.pop();
    });
    box.appendChild(buttonDelete);
  }
}

function searchForItems() {
  if (myLibrary.length > 0) {
    for (const key in myLibrary) {
      const container = document.querySelector('.container');

      const box = document.createElement('div');
      box.classList.add('box');

      container.appendChild(box);

      const bookTitle = document.createElement('div');
      bookTitle.classList.add('title');
      bookTitle.textContent = myLibrary[key].title;

      const bookAuthor = document.createElement('div');
      bookAuthor.classList.add('author');
      bookAuthor.textContent = myLibrary[key].author;

      const bookPages = document.createElement('div');
      bookPages.classList.add('pages');
      bookPages.textContent = `Pages:${myLibrary[key].pages}`;

      const form = document.createElement('form');
      const bookStatus = document.createElement('input');
      bookStatus.type = 'checkbox';
      bookStatus.setAttribute('id', `bookStatus${myLibrary.length}`);
      const label = document.createElement('label');
      label.textContent = `Status:${statusChecked(myLibrary[key].status)}`;
      label.htmlFor = `bookStatus${myLibrary.length}`;

      bookStatus.addEventListener('click', () => {
        label.textContent === 'Status:not yet'
          ? (label.textContent = 'Status:reading')
          : (label.textContent = 'Status:not yet');
      });

      box.appendChild(bookTitle);
      box.appendChild(bookAuthor);
      box.appendChild(bookPages);
      box.appendChild(form);
      form.appendChild(label);
      form.appendChild(bookStatus);
      const buttonDelete = document.createElement('button');
      buttonDelete.classList.add('buttonDelete');
      buttonDelete.textContent = 'Delete';
      buttonDelete.addEventListener('click', () => {
        box.remove();
        myLibrary.pop();
      });
      box.appendChild(buttonDelete);
    }
  }
}
