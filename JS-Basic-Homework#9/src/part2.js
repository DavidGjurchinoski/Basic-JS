$(window).on("load", function () {
  $("button:first").click(function () {
    //   with input type color we can not get an invalid color
    if (!$("#colorText").val()) {
      alert("Invalid text");
      return;
    }
    // This check is used if we use input type text
    // if (checkColor($("#color").val()))
    // alert("good color");
    // else {alert("bad Color"); return;}

    $(this).after(`<h3>${$("#colorText").val()}</h3>`);
    $("h3:first").css("color", $("#color").val());
  });

  //   Function if we use input of type text to check the color(input type color is not supported in lover versions of safari and IE)
  /*
  function checkColor(inputColor) {
    let validColor = new Option().style;
    // Invalid inputs in css do not presist it will return true if it is valid false if it is invalid
    validColor.color = inputColor.toLowerCase();
    return validColor.color == inputColor.toLowerCase();
  } */
});
