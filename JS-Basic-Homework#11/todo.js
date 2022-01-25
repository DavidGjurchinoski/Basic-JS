$(window).on("load", function () {
  function ToDo(name) {
    this.name = name;
    this.toComplete = false;
  }

  let toDoArray = [];
  $("#addButton").attr("disabled", true);

  if (localStorage.getItem("todoList")) {
    for (let item of JSON.parse(localStorage.getItem("todoList"))) {
      toDoArray.push(item);
    }
    displayList();
  }

  function disableButton() {
    if ($("#inputTask").val() == "") $("#addButton").attr("disabled", true);
    else $("#addButton").attr("disabled", false);
  }

  $("#inputTask").keyup(disableButton);

  $("#addButton").click(function () {
    toDoArray.push(new ToDo($("#inputTask").val()));
    localStorage.setItem("todoList", JSON.stringify(toDoArray));
    displayList();
  });

  $(".checkBox").click(function () {
    if ($(this).is(":checked")) {
      console.log("addd classs");
      $(this).next().addClass("line");
      toDoArray.splice($(this).parent().index(), 1);
    } else {
      console.log("remove class");
      $(this).next().removeClass("line");
      toDoArray.splice(
        $(this).parent().index(),
        0,
        new ToDo($(this).next().text())
      );
    }
    localStorage.setItem("todoList", JSON.stringify(toDoArray));
  });

  function displayList() {
    $("#todoList").html("");
    for (let item of toDoArray) {
      $("#todoList").append(
        `<div><input type='checkbox' class="checkBox" ${
          item.toComplete ? "Checked" : ""
        }><h2 class="inline">${item.name}</h2></div>`
      );
    }
  }

  setInterval(function () {
    if (localStorage.getItem("todoList"))
      $("#deleteAll").attr("disabled", false);
    else $("#deleteAll").attr("disabled", true);
  }, 200);

  $("#deleteAll").click(function () {
    localStorage.removeItem("todoList");
    toDoArray = [];
    displayList();
  });
});
