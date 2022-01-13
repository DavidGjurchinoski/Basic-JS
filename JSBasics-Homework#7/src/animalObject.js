let inputDiv = document.getElementById("inputs");
let h3Elements = document.getElementsByTagName("h3");
let buttonElements = document.getElementsByTagName("button");

let animal = {
  name: "",
  kind: "",
  msg: "",
  speak: function () {
    return `${this.name} says: ${this.msg}!!!`;
  },
};

function createInputs(object, div) {
  let i = 0;
  for (let key in object) {
    if (typeof object[key] == "function") continue;
    else if (typeof object[key] == "boolean") {
      div.innerHTML += `<select name="read">
  <option value="no">No</option>
  <option value="yes">Yes</option>
</select>
        `;
    } else {
      let input = document.createElement("input");
      input.placeholder = `Enter a value for ${Object.keys(object)[i]}`;
      div.appendChild(input);
    }
    i++;
  }
}

createInputs(animal, inputDiv);

function fillObject(object, div) {
  let i = 0;
  for (let key in object) {
    if (typeof object[key] == "function") continue;
    else {
      object[key] = div.children[i].value;
    }
    i++;
  }
}

buttonElements[0].addEventListener("click", function () {
  fillObject(animal, inputDiv);
  h3Elements[0].innerHTML = animal.speak();
});
