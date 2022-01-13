let rectangle = document.getElementById("rectangle");

buttonElements[2].addEventListener("click", function () {
  let width = inputElements[1].value;
  let height = inputElements[2].value;
  inputElements[1].value = "";
  inputElements[2].value = "";
  checkEmpty(width);
  checkEmpty(height);
  checkNegative(+width);
  checkNegative(+height);
  buttonElements[2].disabled = true;
  if (isNaN(width) || isNaN(height)) throw "Not a Number";
  rectangle.style.width = `${width}cm`;
  rectangle.style.height = `${height}cm`;
  rectangle.classList.add("growRectangleAnim");
  h3Elements[2].innerText = `The rectangles parametar with width: ${width}cm, and height: ${height}cm, is ${
    2 * width + 2 * height
  }cm`;
  setTimeout(function () {
    rectangle.classList.remove("growRectangleAnim");
    buttonElements[2].disabled = false;
  }, 3000);
});
