let bookDiv = document.getElementById("inputBook");

books = {
  title: "",
  author: "",
  readingStatus: false,
  isRead() {
    return this.readingStatus == "yes"
      ? `Already read '${this.title}' by ${this.author}.`
      : `You still need to read '${this.title}' by ${this.author}.`;
  },
};

createInputs(books, bookDiv);

buttonElements[1].addEventListener("click", function () {
  fillObject(books, bookDiv);
  h3Elements[1].innerText = books.isRead();
});
