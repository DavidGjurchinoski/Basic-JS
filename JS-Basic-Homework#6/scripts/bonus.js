function checkInputEmpty(input) {
  if (input == "") return -1;
  return;
}
function checkNegative(input) {
  if (input < 0) return -1;
  return;
}

var table = document.querySelectorAll("table");

buttonElements[3].addEventListener("click", function () {
  let recipeName = prompt("Enter the name of the recipe:");
  let ingNum = prompt("Enter the number of ingrediants:");
  if (
    checkInputEmpty(recipeName) ||
    checkInputEmpty(ingNum) ||
    checkNegative(ingNum)
  )
    alert("The Input is wrong try again");
  else {
    table[0].style.border = "1";
    table[0].style.margin = "10px auto";

    let tableBody = document.createElement("TBODY");
    table[0].appendChild(tableBody);

    let tr = document.createElement("TR");
    tableBody.appendChild(tr);

    let th = document.createElement("TH");
    th.width = "150px";
    th.appendChild(document.createTextNode(`${recipeName}`));
    tr.appendChild(th);

    for (let i = 0; i < ingNum; i++) {
      let td = document.createElement("TD");
      td.width = "150px";
      td.appendChild(
        document.createTextNode(`${prompt("Enter a INGREDIANT:")}`)
      );
      tr.appendChild(td);
    }
  }
});
