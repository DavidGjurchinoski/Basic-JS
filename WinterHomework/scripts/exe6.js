buttonElements[4].addEventListener("click", function () {
  let num1 = +prompt("Enter a number:");
  let num2 = +prompt("Enter another number:");

  if (num1 === num2) alert(`The sum is trippled ${(num1 + num2) * 3}`);
  else alert(`The sum is ${num1 + num2}`);
});
