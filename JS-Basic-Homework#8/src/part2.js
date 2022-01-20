let inputsPart2 = $(".part2").find("input");
let h3 = $("h3:first");
let div = $(".changeHtml");

inputsPart2.first().on("keyup", function () {
  h3.text(inputsPart2.first().val()).css("color", $("#color").val());
});

div.html(
  `<h2>Homework #8</h2> <h3>This is the final PART</h3> <p>Added with jquery select and function!</p>`
);
