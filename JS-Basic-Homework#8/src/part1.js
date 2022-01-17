let inputsPart1 = $(".part1").find("input");
let buttons = $("button");
let list = $("ul");

let animals = [];

function Animal(name, type, age) {
  this.name = name;
  this.type = type;
  this.age = age;
}

buttons.first().on("click", function () {
  let name = inputsPart1.first().val();
  let type = inputsPart1.first().next().val();
  let age = inputsPart1.last().val();

  // let newAnimal = new Animal(name, type, age);
  animals.push(new Animal(name, type, age));

  list.append(
    `<li>${animals[animals.length - 1].name} ${
      animals[animals.length - 1].type
    } ${animals[animals.length - 1].age}</li>`
  );
});
