$(window).on("load", function () {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((promise) => {
      promise
        .json()
        .then((data) => {
          $("table:first").append(
            `<tr><th>Id</th><th>Title</th><th>Completed</th></tr>`
          );
          for (let item of data) {
            $("table:first").append(
              `<tr><td>${item.id}</td><td>${item.title}</td><td>${
                item.completed ? "Completed" : "Not Completed"
              }</td></tr>`
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});
