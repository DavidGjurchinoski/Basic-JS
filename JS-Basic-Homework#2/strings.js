var helloText = document.getElementById("hello");

function sayHello(name, surname) {
  helloText.innerHTML = `Hello, I am ${name} ${surname}.`;
}

var zodiacText = document.getElementById("zodiacText");

function calculateZodiac(year) {
  calcYear = (year - 4) % 12;
  switch (calcYear) {
    case 0:
      zodiacText.innerHTML = "Rat";
      break;
    case 1:
      zodiacText.innerHTML = "Ox";
      break;
    case 2:
      zodiacText.innerHTML = "Tiger";
      break;
    case 3:
      zodiacText.innerHTML = "Rabbit";
      break;
    case 4:
      zodiacText.innerHTML = "Dragon";
      break;
    case 5:
      zodiacText.innerHTML = "Snake";
      break;
    case 6:
      zodiacText.innerHTML = "Horse";
      break;
    case 7:
      zodiacText.innerHTML = "Goat";
      break;
    case 8:
      zodiacText.innerHTML = "Monkey";
      break;
    case 9:
      zodiacText.innerHTML = "Rooster";
      break;
    case 10:
      zodiacText.innerHTML = "Dog";
      break;
    case 11:
      zodiacText.innerHTML = "Pig";
      break;
    default:
      zodiacText.innerHTML = "Chinese zodiac was not invented that year!";
  }
}

var showMax = document.getElementById("showMax");

var counterMax = 5;
var maxNum;

function calcMax(num) {
  if (counterMax === 1) {
    if (maxNum < num || maxNum == undefined) {
      maxNum = num;
    }
    showMax.innerHTML = `The maximum number is ${maxNum}`;
    counterMax = 5;
  } else {
    counterMax--;
    showMax.innerHTML = `Enter ${counterMax} more NUMBERS!`;
    if (maxNum < num || maxNum == undefined) {
      maxNum = num;
    }
  }
}
