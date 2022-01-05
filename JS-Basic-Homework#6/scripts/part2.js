buttonElements[2].addEventListener("click", function () {
  let userKg = +prompt("Enter your weight in KG:");
  if (userKg == "" || isNaN(userKg) || userKg < 0)
    alert(`This is not valid ${userKg}`);
  else h3Elements[2].innerText = `${userKg * 2} chickens`;
});
