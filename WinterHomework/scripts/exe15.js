buttonElements[12].addEventListener("click", function () {
  const inputArray = inputNumArray();
  h3Elements[11].textContent = `Start array: ${inputArray} `;
  h3Elements[11].textContent += ` Multiplyed array: ${multiplyEvenOdd(
    inputArray
  )}`;
});

function inputNumArray() {
  let input = +prompt("Enter something when done enter nothing");
  let array = [];
  let i = 0;
  while (input != "" && !isNaN(input)) {
    array[i] = input;
    input = +prompt("Enter something when done enter nothing");
    i++;
  }
  return array;
}

function multiplyEvenOdd(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) array[i] *= 2;
    else array[i] *= 3;
  }
  return array;
}
