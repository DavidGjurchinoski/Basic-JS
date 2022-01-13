let box = document.getElementById("box");

buttonElements[1].addEventListener("click", function () {
  if (inputElements[0].value != "") {
    buttonElements[1].disabled = true;
    box.classList.add("classAnimationBox");
    h3Elements[1].innerText = `Merry Christmas ${inputElements[0].value}`;
    setTimeout(function () {
      box.classList.remove("classAnimationBox");
      buttonElements[1].disabled = false;
    }, 4000);
  } else alert("Please enter a name!");
});
