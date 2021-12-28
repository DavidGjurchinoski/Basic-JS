let h1 = document.getElementsByTagName("h1");
let h2 = document.getElementsByTagName("h2");

let numbers = [];
let num;

function userInput() {
  numbers.push(
    +prompt(
      "Fill the array..(when finished enter something other then a number)",
      0
    )
  );
  if (isNaN(numbers[numbers.length - 1])) {
    numbers.pop();
    num = +prompt("Enter the num to be searched", 0);
    return;
  }
  userInput();
}

function findNumber(num, numArray) {
  let counter = 0;
  for (let element of numArray) {
    if (element === num) counter++;
  }
  return counter;
}

for (let i = 0; i < 3; i++) {
  numbers = [];
  userInput();
  let counter = findNumber(num, numbers);
  if (counter > 0)
    h2[
      i
    ].innerText = `There are ${counter} occurrences of number ${num} in the array \n ${numbers}`;
  else
    h2[i].innerText = `The number ${num} is not found in the array ${numbers}`;
  h1[
    i
  ].innerText = `The num you are searching is ${num} \n in the array ${numbers}`;
}
