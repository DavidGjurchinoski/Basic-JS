let h2 = document.getElementsByTagName("h2");
document.getElementById("userInput").addEventListener("click", userInput);
document.getElementById("getResult").addEventListener("click", findNumber);

let numbers = [];
let type = "";

function userInput() {
  numbers.push(
    +prompt(
      "Fill the array..(when finished enter something other then a number)",
      0
    )
  );
  if (isNaN(numbers[numbers.length - 1])) {
    numbers.pop();
    type = prompt("Enter the type even or odd");
    h2[0].innerText = `Type: ${type} Number Array: ${numbers}`;
    return;
  }
  userInput();
}

function findNumber() {
  let resultArray = [];
  console.log(type);
  switch (type.toLowerCase()) {
    case "even":
      for (let element of numbers) {
        if (element % 2 == 0) resultArray.push(element);
      }
      break;
    case "odd":
      for (let element of numArray) {
        if (element % 2 != 0) resultArray.push(element);
      }
      break;
    default:
      alert("Error Invalid input for Type!");
  }

  h2[1].innerText = resultArray;
}
