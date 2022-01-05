buttonElements[5].addEventListener("click", function () {
  table[1].innerHTML = "";
  let numCols = +prompt("Enter the number of COLUMNS");
  let numRows = +prompt("Enter the number of ROWS");
  table[1].style.border = "1";
  table[1].style.margin = "10px auto";

  let tableBody = document.createElement("TBODY");
  table[1].appendChild(tableBody);

  for (let i = 0; i < numRows; i++) {
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (let j = 0; j < numCols; j++) {
      let td = document.createElement("TD");
      td.width = "150px";
      td.appendChild(document.createTextNode(`Row-${i + 1} Column-${j + 1}`));
      tr.appendChild(td);
    }
  }
});
