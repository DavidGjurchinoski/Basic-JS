function noNegative(num) {
  if (num < 0) throw alert("No negativity Please");
}

let zodiacText = document.getElementById("zodiacText");

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

function typeVar(inputType) {
  let input;
  if (inputType == "undefined")
    throw alert(`The var ${input} is of type ${typeof input}`);
  input = prompt("Enter a variable");

  switch (inputType) {
    case "string":
      alert(`The var ${input} is of type ${typeof input}`);
      break;
    case "number":
      alert(`The var ${input} is of type ${typeof +input}`);
      break;
    case "object":
      input = new String(input);
      alert(`The var ${input} is of type ${typeof input}`);
      break;
    case "boolean":
      let inputB;
      if (input) inputB = true;
      else inputB = false;
      alert(`The var ${input} is ${inputB} of type ${typeof inputB}`);
      break;
  }
}

function startConv() {
  convertYears(
    prompt("Enter age (Years)!"),
    prompt(
      "Enter something if your INPUT was Human years if not press CANCEL or OK with no text in the bar!"
    )
  );
}

function convertYears(years, human) {
  let convertedYear = 0;
  if (human) {
    convertedYear = years * 7;
    alert(`Your dog's age is ${convertedYear} in DOG years.`);
  } else {
    convertedYear = years / 7;
    alert(`Your dog's age is ${convertedYear} in HUMAN years.`);
  }
}

let teamText = document.getElementById("teamText");

function showTeam(boys, girls) {
  // if (boys < 0 || girls < 0) {
  //   teamText.innerHTML = "Negative numbers are not valid.";
  //   return;
  // }
  noNegative(boys);
  noNegative(girls);

  if (boys.toString().length == 1) {
    boys = "0" + boys;
  }

  if (girls.toString().length == 1) {
    girls = "0" + girls;
  }

  teamText.innerHTML = `${girls} girls, ${boys} boys.`;
}

let ageText = document.getElementById("ageText");
const currentYear = new Date().getFullYear();

function calculateAge(born) {
  noNegative(born);

  if (born > currentYear) {
    ageText.innerHTML = "You are not EVEN born yet!";
    return;
  }

  if (born.toString().length < 1) {
    ageText.innerHTML = " ";
    return;
  }
  ageText.innerHTML = `You are ${currentYear - born} years old.`;
}

let counter = 3;

function calcAgeThree() {
  if (counter === 0) {
    counter = 3;
    return;
  } else {
    counter--;
    let born = +prompt("Enter what year were you born in:");
    noNegative(born);
    if (born > currentYear) throw alert("You are not born YET!");
    alert(`You are ${currentYear - born} years old.`);
    calcAgeThree();
  }
}

let money = 1000;
let balanceATM = document.getElementById("balance");

balanceATM.innerHTML = `Your balance is ${money}$`;

function takeMoney() {
  if (money === 0) throw alert("You dont have money to withdraw!");
  let withdrawAmount = +prompt("How much do you want to take out?");
  noNegative(withdrawAmount);
  if (withdrawAmount > money)
    throw alert("You dont have that much money on your acc!");
  else {
    money = money - withdrawAmount;
    alert(`You withdrew ${withdrawAmount} out of your account.`);
    balanceATM.innerHTML = `Your balance is ${money}$`;
  }
}
