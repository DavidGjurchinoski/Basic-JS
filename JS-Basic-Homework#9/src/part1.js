$(window).on("load", function () {
  $("button")
    .first()
    .click(function () {
      $("#greetingsMsg").text($("input").first().val());
    });
});
