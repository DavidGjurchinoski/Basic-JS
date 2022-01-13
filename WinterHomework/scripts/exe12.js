inputElements[4].addEventListener("keyup", function () {
  switch (inputElements[4].value.toUpperCase()) {
    case "A":
      h3Elements[8].innerText = "Excellent job!";
      break;
    case "B":
      h3Elements[8].innerText = "Good job!";
      break;
    case "C":
      h3Elements[8].innerText = "Passed!";
      break;
    case "D":
      h3Elements[8].innerText = "Not so good!";
      break;
    case "F":
      h3Elements[8].innerText = "Faild!";
      break;
    default:
      h3Elements[8].innerText = "Unknown Grade!";
  }
});
