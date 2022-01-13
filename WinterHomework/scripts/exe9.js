buttonElements[7].addEventListener("click", function () {
  checkDiv3(+prompt("Enter a num:"));
});

function checkDiv3(num1) {
  if (isNaN(num1)) throw `Its not a number Try again.`;
  if (num1 % 3 == 0 && num1 != 0) alert("The num is div by 3");
  else alert("The num is not div by 3");
}
