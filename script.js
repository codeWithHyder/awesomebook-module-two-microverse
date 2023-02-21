<<<<<<< HEAD
// reference to markup elements
const bodyEle = document.querySelector('body');
const formsection = document.createElement('section');
bodyEle.appendChild(formsection);

// list of books
const bookList = [];

// function to update book list
function updateBookList() {
  const bookListElem = document.querySelector('.booklist');
  bookListElem.innerHTML = '';

  for (let i = 0; i < bookList.length; i += 1) {
    bookListElem.innerHTML += `
    <ul class = 'booklst'>
      <li>${bookList[i].title}</li>
      <li> ${bookList[i].author}</li>
        <button class ='btnr' type="button" onclick="removeBook(${i})">Remove</button>
      </li>
      <hr class='hr'>
    </ul>
    `;
  }
=======
const BookContainer = document.querySelector('.book-container');
const form = document.getElementById('myForm');

const BookList = [];
function removeData(index) {
  BookList.splice(index, 1);
  addData();
}
function addData() {
  let html = '';
  for (let i = 0; i < BookList.length; i += 1) {
    html += `<div class="single-book">
  <ul>
      <li>${BookList[i].title}</li>
      <li>${BookList[i].author}</li>
  </ul>
  <button onclick='removeData(" + i + ")'>Remove</button>
  <hr>
</div>`;
  }
  BookContainer.innerHTML = html;
>>>>>>> 09e941ba3c832e5f60158baa2f16c10dffba75db
}
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const myBook = {
    title,
    author,
  };
  BookList.push(myBook);
  form.reset();

<<<<<<< HEAD
// add initial book list section
const bookListSection = document.createElement('section');
bookListSection.classList.add('booklist');
formsection.appendChild(bookListSection);

// add initial books to book list section
updateBookList();

// add form section with "Add" button
const formSection = document.createElement('section');
formSection.innerHTML = `
  <form class='booklst'>
    <input type="text" name="title" id="booktitle" placeholder="Title">
    <input type="text" name="author" id="bookauth" placeholder="Author">
    <button type="button"  class='addbtn' onclick="addBook()">Add</button>
  </form>
`;
formsection.appendChild(formSection);

// function to add a new book to the list
function addBook() {
  const titleInput = document.querySelector('#booktitle');
  const authorInput = document.querySelector('#bookauth');
  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
  };
  bookList.push(newBook);
  titleInput.value = '';
  authorInput.value = '';
  updateBookList();
}

// function to remove a book from the list
function removeBook(index) {
  bookList.splice(index, 1);
  updateBookList();
}

// saving form data to local storage
const bookTitle = document.querySelector('#booktitle');
const bookAuth = document.querySelector('#bookauth');
const myForm = document.querySelector('.booklst');

// add eent listener on form data
myForm.addEventListener('input', () => {
  const info = {
    title: bookTitle.value,
    author: bookAuth.value
  };
  localStorage.setItem('storedData', JSON.stringify(info));
});

// get data from local storage
const userObject = JSON.parse(localStorage.getItem('storedData'));
if (userObject) {
  /*userObject = {
    title: '',
    author: ''
  }; */ 
  bookTitle.value = userObject.title;
  bookAuth.value = userObject.author;
} 
=======
  addData();
});
>>>>>>> 09e941ba3c832e5f60158baa2f16c10dffba75db
