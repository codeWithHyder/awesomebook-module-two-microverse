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
  2: {
    title: 'animal tree',
    description: 'animal sdksdkoskpsdodsks',
  },
};

let html = '';

const BookLength = Object.keys(BookList);

for (let i = 0; i < BookLength.length; i += 1) {
  html += `<div class="single-book">
    <ul>
        <li>Book title: ${BookList[i].title}</li>
        <li>Book desc: ${BookList[i].description}</li>
    </ul>
</div>`;
}

BookContainer.innerHTML = html;