let valueArray = ["This is a String!", 7, false, true, undefined, null];
let changable = "";

function getRandomValueType() {
  let oldChangable = changable;
  changable = valueArray[Math.floor(Math.random() * 6)];
  if (changable != oldChangable)
    h3Elements[0].innerHTML = `The type of the variable is: <i>${typeof changable}</i>.</br> The value is: <i>${changable}</i>.`;
  else getRandomValueType();
}

buttonElements[0].addEventListener("click", getRandomValueType);
