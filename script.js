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

  addData();
});
