let allP = document.getElementsByTagName("p");
let allH1 = document.getElementsByTagName("h1");
let allH3 = document.getElementsByTagName("h3");

function changeText(array) {
  for (let element of array) {
    element.innerText = "Something NEW!!!";
  }
}

changeText(allP);
changeText(allH1);
changeText(allH3);

let first = ["Bob", "Jill", "Max", "Steve"];
let last = ["Gregory", "Wurtz", "Milion", "Wats"];
let full = [];

function setFull(first, last) {
  full = [];
  for (let i in first) full.push(`${first[i]} ${last[i]}`);
}

function printFullNames(array) {
  for (let element of array) console.log(element);
}

setFull(first, last);
printFullNames(full);
