// h3Elements[8].style.fontSize = "50px";
// h3Elements[8].style.transform = "scale(0)";
let h3Holder = document.getElementById("h3Holder");

buttonElements[9].addEventListener("click", function () {
  // h3Elements[8].innerText = shoot(prompt("Enter something!"));
  shoot(prompt("Enter something!"));
});

function shoot(string) {
  let h3Created = document.createElement("h3");
  // h3Elements[8].classList.add("growRectangleAnimFast");
  // if (
  //   string.charAt(string.length - 2) + string.charAt(string.length - 1) ===
  //   "na"
  // )
  //   let h3Text = document.createTextNode("Hit");
  //   else
  let h3Text = document.createTextNode(
    string.charAt(string.length - 2) + string.charAt(string.length - 1) === "na"
      ? "Hit"
      : "No hit"
  );
  h3Created.appendChild(h3Text);
  h3Holder.appendChild(h3Created);
  h3Created.classList.add("growRectangleAnimFast");
  setTimeout(function () {
    // h3Elements[8].classList.remove("growRectangleAnimFast");
    h3Created.classList.remove("growRectangleAnimFast");
    h3Created.remove();
  }, 1800);
  //   return "Hit";
  //  else return "No hit";
}
