buttonElements[5].addEventListener("click", function () {
  let grades = [];
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    grades[i] = +prompt("Enter a grade:");
    if (grades[i] < 5 || grades[i] > 10 || isNaN(grades[i])) {
      alert(`${grades[i]} is not a valid grade! Try again.`);
      i--;
    } else sum += grades[i];
  }
  h3Elements[6].innerText = grades;
  if (sum / 5 < 8) alert(`Your Score is: ${sum / 5} You FAIL.`);
  else alert(`Your Score is: ${sum / 5} You PASS.`);
});
