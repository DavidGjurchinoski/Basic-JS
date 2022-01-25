$(window).on("load", function () {
  $("button").click(function () {
    let sum = 0;
    $("h1:first").text("");
    for (let input of $("input")) {
      sum += +input.value;
    }
    sum /= 3;
    $("h1:first")
      .text(sum)
      .css("color", sum < 10 ? "red" : "green");
  });
});
