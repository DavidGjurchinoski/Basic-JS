let numInputArray = document.getElementById("numArray");
var h3Elements = document.getElementsByTagName("h3");
var buttonElements = document.getElementsByTagName("button");

let numArray = [];

numInputArray.addEventListener("keypress", function (key) {
  if (key.key === "Enter") {
    if (numInputArray.value != "") {
      numArray.push(numInputArray.value);
      h3Elements[0].innerText = numArray;
      numInputArray.value = "";
    } else alert("Cant Input nothing!");
  }
});

buttonElements[0].addEventListener("click", function () {
  numArray.pop();
  h3Elements[0].innerText = numArray;
});

buttonElements[1].addEventListener("click", function () {
  let sum = 0;
  h3Elements[1].textContent = "";
  for (let index in numArray) {
    sum += +numArray[index];
    h3Elements[1].textContent += `${numArray[index]} ${
      index == numArray.length - 1 ? ` = ${sum}` : " + "
    } `;
  }
});
