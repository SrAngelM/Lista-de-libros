const input = document.querySelector("#searchInput");
const bookList = document.querySelector("#users");

let books = [];
window.addEventListener("DOMContentLoaded", async () => {
  const data = await loadBooks();
  books = data.data;
  renderBooks(books);
});

const loadBooks = async () => {
  const res = await fetch("https://fakerapi.it/api/v1/books?_quantity=100");
  return await res.json();
};

input.addEventListener("keyup", (e) => {
  const newbook = books.filter((book) =>
    book.author.toLowerCase().includes(input.value.toLowerCase())
  );
  renderBooks(newbook);
});

const createBookItems = (books) =>
  books
    .map(
      (book) =>
        `<li class="py-3 hover:bg-zinc-700 cursor-pointer">${book.author}</li>`
    )
    .join("");

const renderBooks = (books) => {
  const itemsString = createBookItems(books);
  bookList.innerHTML = itemsString;
};
