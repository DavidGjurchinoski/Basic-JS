const vowels = ["a", "e", "i", "o", "u"];

buttonElements[8].addEventListener("click", function () {
  h3Elements[7].innerText = hitString(prompt("Enter something to be hit"));
});

function hitString(string) {
  vowels.forEach((element) => {
    if (element == string.charAt()) string = `Hit ${string} Hit`;
  });
  return string;
}
