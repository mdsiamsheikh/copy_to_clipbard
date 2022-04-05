const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Hello kicu kata dain");
  } else {
    const newRow = document.createElement("tr");

    // creting new title
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // creting new author
    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // creting new Year
    const newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // ul input line
    bookList.appendChild(newRow);
  }
});
