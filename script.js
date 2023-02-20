const BookContainer = document.querySelector('.book-container');

const BookList = {
  0: {
    title: 'animal tree',
    description: 'animal sdksdkoskpsdodsks',
  },
  1: {
    title: 'animal tree',
    description: 'animal sdksdkoskpsdodsks',
  },
};

let html = '';

const BookLength = Object.keys(BookList);

for (let i = 0; i < BookLength.length; i += 1) {
  html += `<div class="single-book">
  <ul>
      <li>${BookList[i].title}</li>
      <li>${BookList[i].description}</li>
  </ul>
  <button class="remove">Remove</button>
  <hr>
</div>`;
}

BookContainer.innerHTML = html;