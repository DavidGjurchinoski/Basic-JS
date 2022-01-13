var inputElements = document.getElementsByTagName("input");
var h3Elements = document.getElementsByTagName("h3");
var buttonElements = document.getElementsByTagName("button");

function checkNegative() {
  for (let input of arguments) {
    if (input < 0) throw alert("The Number is Negative");
  }
}

function checkEmpty() {
  for (let input of arguments) {
    if (input == "") throw alert("This is empty");
  }
}
