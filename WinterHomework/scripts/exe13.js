buttonElements[10].addEventListener("click", function () {
  calculateAge(
    +prompt("Enter the day:"),
    +prompt("Enter the month:"),
    +prompt("Enter the year:")
  );
});

function calculateAge(day, month, year) {
  checkEmpty(day, month, year);
  checkNegative(day, month, year);
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw alert("Enter only numbers");
  }

  const currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let currentMonth = currentDate.getUTCMonth();
  let currentDay = currentDate.getUTCDay();

  let leapYears = howMenyLeapYears(currentYear) - howMenyLeapYears(year);

  //   let currentYearDays =
  //     currentYear * 365 + monthsInDays(currentMonth) + currentDay;
  //   let yearDays = year * 365 + monthsInDays(month) + day;

  var daysAlive =
    currentYear * 365 +
    leapYears +
    monthsInDays(currentMonth) +
    currentDay -
    (year * 365 + monthsInDays(month) + day);
  console.log(daysAlive);
  let returnMulti = daysInYears(daysAlive);
  let yearsAlive = returnMulti[0];
  daysAlive = returnMulti[1];
  console.log(daysAlive);
  returnMulti = daysInMonths(daysAlive);
  let monthsAlive = returnMulti[0];
  daysAlive = returnMulti[1];
  console.log(daysAlive);

  h3Elements[9].innerText = `You are years old: ${yearsAlive}, and months: ${monthsAlive}, and days: ${daysAlive}`;
}

function howMenyLeapYears(year) {
  return Math.floor(year / 4);
}

function monthsInDays(inputMonths) {
  let days = 0;
  if ((inputMonths) => 2) {
    days -= 2;
  }

  for (let i = 0; i <= inputMonths; i++) {
    if (i % 2 == 0) {
      days += 30;
    } else days += 31;
  }

  return days;
}

function daysInYears(days) {
  let years = 0;
  for (
    let i = 0;
    (Math.floor(days / 366) != 0 && i % 4 == 0) || Math.floor(days / 365) != 0;
    i++
  ) {
    if (i % 4 == 0) {
      days -= 366;
    } else days -= 365;
    years++;
  }
  return [years, days];
}

function daysInMonths(days) {
  let months = 0;
  for (
    let i = 0;
    (Math.floor(days / 31) != 0 && i % 2 != 0) ||
    (Math.floor(days / 30) != 0 && i % 2 == 0) ||
    (Math.floor(days / 28) != 0 && i == 1);
    i++
  ) {
    if (i == 1) {
      days -= 28;
      continue;
    }
    if (i % 2 == 0) {
      days -= 30;
    } else days -= 31;
    months++;
  }
  return [months, days];
}
