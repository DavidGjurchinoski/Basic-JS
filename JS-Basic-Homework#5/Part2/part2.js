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
