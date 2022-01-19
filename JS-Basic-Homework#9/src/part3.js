$(window).on("load", function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function (response) {
      $("table:first").html(
        "<tr><th>Id</th><th>Title</th><th>Is it complete</th></tr>"
      );
      for (let item of response) {
        $("table:first").append(
          `<tr><td>${item.id}</td><td>${item.title}</td><td>${
            item.completed ? "Completed" : "Not Completed"
          }</td></tr>`
        );
      }
    },
  });
});
