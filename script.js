// create a class
class BookList {
  constructor() {
    this.bookList = [];
    this.formSection = document.createElement('section');
    this.formSection.innerHTML = `<hr><h2 class="addbook"> Add a new book</h2>
      <form class="addbooks">
        <input type="text" name="title" id="booktitle" placeholder="Title" required>
        <input type="text" name="author" id="bookauth" placeholder="Author" required>
        <button type="submit">Add</button>
      </form>
    `;
    document.body.innerHTML = `<h1 class="bookheading"> All Awesome Books </h1>`;
    document.body.appendChild(this.formSection);
    this.formSection.querySelector('form').addEventListener('submit', this.addBook.bind(this));
    this.bookListSection = document.createElement('section');
    document.body.insertBefore(this.bookListSection, this.formSection);
    this.loadFromLocalStorage();
    this.updateBookList();
  }

  addBook(event) {
    event.preventDefault();
    const titleInput = document.querySelector('#booktitle');
    const authorInput = document.querySelector('#bookauth');
    const newBook = {
      title: titleInput.value,
      author: authorInput.value,
    };
    this.bookList.push(newBook);
    titleInput.value = '';
    authorInput.value = '';
    this.saveToLocalStorage();
    this.updateBookList();
  }

  updateBookList() {
    this.bookListSection.innerHTML = '';
    const bookElem = document.createElement('div');
    bookElem.innerHTML += `<div class = "bookcontainer">`;
    for (let i = 0; i < this.bookList.length; i += 1) {
      
      bookElem.innerHTML += `
         <ul>
          <li> <span>"${this.bookList[i].title}"   by     ${this.bookList[i].author}</span></li>
          <li> <button type="button" onclick="bookList.removeBook(${i})">Remove</button></li>
          </ul>`;
      this.bookListSection.appendChild(bookElem);
    }
    bookElem.innerHTML += `</div>`;
  }

  removeBook(index) {
    this.bookList.splice(index, 1);
    this.saveToLocalStorage();
    this.updateBookList();
  }

  saveToLocalStorage() {
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  loadFromLocalStorage() {
    const storedBookList = localStorage.getItem('bookList');
    if (storedBookList) {
      this.bookList = JSON.parse(storedBookList);
      document.querySelector('#booktitle').value = this.bookList[this.bookList.length-1].title;
      document.querySelector('#bookauth').value = this.bookList[this.bookList.length-1].author;
    }
  }
}

const bookList = new BookList();