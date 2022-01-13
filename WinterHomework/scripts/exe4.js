inputElements[3].addEventListener("change", subNextNum, false);
inputElements[3].addEventListener("keyup", subNextNum, false);

function subNextNum() {
  h3Elements[3].innerText = ``;
  h3Elements[4].innerText = ``;
  let inputNum = +inputElements[3].value;
  if (inputNum == null) throw "Enter Something";
  h3Elements[3].innerText = `${inputNum - 1} is the predecessor`;
  h3Elements[4].innerText = `the successor is ${inputNum + 1}`;
}
