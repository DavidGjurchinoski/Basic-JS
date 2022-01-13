buttonElements[3].addEventListener("click", function () {
  let num1 = +prompt("Enter a number:");
  let num2 = +prompt("Enter another number:");

  h3Elements[5].innerText = ``;

  checkNegative(num1);
  checkNegative(num2);

  let closer = 0;

  if (closerTo100(num1) < closerTo100(num2)) closer = num1;
  else closer = num2;

  h3Elements[5].innerText = `${closer} is closer to 100!`;
});

function closerTo100(input) {
  if (input < 100) return 100 - input;
  else if (input > 100) return input - 100;
  else return 0;
}
