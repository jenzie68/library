let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.info = function () {
  console.log(`${this.title} by ${this.author},${this.pages},${this.status}`);
};

function addBookToLibrary() {
  let bookStatusValue = "Not Done Reading";

  const bookName = document.getElementById("book-name");
  const bookAuthor = document.getElementById("author");
  const bookPages = document.getElementById("pages");
  const bookStatus = document.getElementById("read-notRead");
  const popUpForm = document.getElementById("formPopUp");

  if ((bookName.value || bookAuthor.value || bookPages.value) == "") {
    console.log("error pls type again");
  } else {
    if (bookStatus.checked) {
      bookStatusValue = "Done reading";
    }
    let userInput = new Book(
      bookName.value,
      bookAuthor.value,
      bookPages.value,
      bookStatusValue
    );
    console.log("your book has been pushed :)");
    myLibrary.push(userInput);
    displayBook(userInput);
    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    popUpForm.style.display = "none";
  }
}

function displayBook(book) {
  const container = document.querySelector(".container");

  const div = document.createElement("div");
  div.classList.add("card");
  const btnRemove = document.createElement("button");
  btnRemove.textContent = "DELETE";
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "read-notRead");
  let titleBook = document.createElement("p");
  let authorBook = document.createElement("p");
  let pagesBook = document.createElement("p");
  let readBook = document.createElement("p");
  titleBook.textContent = book.title;
  authorBook.textContent = book.author;
  pagesBook.textContent = book.pages;
  readBook.textContent = book.read;
  div.appendChild(checkBox);
  div.appendChild(titleBook);
  div.appendChild(authorBook);
  div.appendChild(pagesBook);
  div.appendChild(readBook);
  div.appendChild(btnRemove);
  container.appendChild(div);

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      book.status = "Done Reading";
    } else {
      book.status = "Not Done Reading";
    }
  });

  btnRemove.addEventListener("click", () => {
    div.remove();
    let target = book;
    let targetIndex = myLibrary.indexOf(target);
    myLibrary.splice(targetIndex, 1);
  });
}

const addBookBtn = document.getElementById("addBook");
addBookBtn.addEventListener("click", () => {
  const popUpForm = document.getElementById("formPopUp");
  popUpForm.style.display = "inline-flex";
});

const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const hideForm = document.getElementById("hideForm");
hideForm.addEventListener("click", () => {
  const popUpForm = document.getElementById("formPopUp");
  popUpForm.style.display = "none";
});
