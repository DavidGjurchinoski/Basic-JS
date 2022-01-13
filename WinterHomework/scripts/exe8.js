buttonElements[6].addEventListener("click", function () {
  if (checkTrue(+prompt("Enter the number!"), +prompt("Enter the number!")))
    alert("The numbers are true!");
  else alert("The numbers are false!");
});

function checkTrue(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) throw `Not a number. Try again.`;
  if (num1 > 30 || num2 > 30 || num1 + num2 > 50) return true;
  return false;
}
