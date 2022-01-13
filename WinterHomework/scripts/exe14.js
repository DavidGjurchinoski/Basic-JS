buttonElements[11].addEventListener("click", function () {
  separator(enterString());
});

function separator(array) {
  for (let element of array) {
    h3Elements[10].textContent += `${element} `;
  }
}

function enterString() {
  let input = prompt("Enter something when done enter nothing");
  let array = [];
  let i = 0;
  while (input != "") {
    array[i] = input;
    input = prompt("Enter something when done enter nothing");
    i++;
  }
  return array;
}
