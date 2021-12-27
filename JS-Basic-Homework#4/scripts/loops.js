const ASK = ["name", "mood", "activity"];
let storyText = document.getElementById("story");

function tellStory() {
  let story = [];
  for (i = 0; i < 3; i++) {
    story[i] = prompt(`Enter the ${ASK[i]}:`);
  }

  storyText.innerHTML = `This is the tale of the great and wise ${story[0]}. ${story[0]} always felt ${story[1]}, and all day long they would be ${story[2]}!`;
}

let counter = 5;
let numArrey = [];
let showarrey = document.getElementById("showarrey");

function checkNumber(array) {
  array.forEach((num) => {
    if (num < 0 || num > 100) {
      throw alert(`The number ${num} is invalid!`);
    }
  });
  showarrey.innerHTML = `This is a valid array ${array}`;
}

function enterNum() {
  for (i = 0; i < 5; i++) {
    numArrey[i] = +prompt(`Enter ${5 - i} more numbers:`);
  }

  checkNumber(numArrey);
}

let oneLineArray = document.getElementById("oneLineArray");
let lineArray = [];

function enterArray() {
  lineArray = [];
  for (i = 0; true; i++) {
    lineArray[i] = prompt("(Enter empty string to stop) Enter a string:");
    if (!lineArray[i]) {
      lineArray.pop();
      break;
    }
  }
  oneLineArray.innerHTML = lineArray;
  lineArray.forEach(() => {
    oneLineArray.innerHTML = oneLineArray.innerHTML.replace(",", " ");
  });
}

const print = (
  (buffer = "") =>
  (arg) => {
    if (arg !== "\n") {
      buffer += arg;
    } else {
      console.log(buffer);
      buffer = "";
    }
  }
)();

function generateNum() {
  for (let i = 0; i < 20; i++) {
    if ((i + 1) % 2 === 0) {
      print(i + 1);
      print("\n");
    } else {
      print(i + 1);
      print(" ");
    }
  }
}

let sumText = document.getElementById("sum");

let numString = [];

function calcSum() {
  let min = numString[0];
  let max = numString[0];
  numString.forEach((element) => {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  });
  console.log(numString.join(","));
  sumText.innerHTML = `${min + max}`;
}

function sum() {
  let num = prompt("Enter nothing when you want to stop:");
  if (!num) {
    calcSum();
    numString = [];
  } else if (isNaN(num)) sum();
  else {
    numString.push(+num);
    sum();
  }
}
