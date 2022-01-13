buttonElements[13].addEventListener("click", function () {
  let array = [1, 2, "dasda", true, 32, "something", false, "hdhdh", "234"];
  h3Elements[12].innerText = concatLargestSmallerst(cleanStringArray(array));
});

function cleanStringArray(array) {
  let cleanArray = [];
  for (let i in array) {
    if (typeof array[i] === "string") cleanArray.push(array[i]);
  }
  console.log(cleanArray);
  return cleanArray;
}

function concatLargestSmallerst(array) {
  let largest = "";
  let smalest = array[0];

  for (let i in array) {
    if (array[i].length > largest.length) largest = array[i];
    if (array[i].length < smalest.length) smalest = array[i];
  }
  return largest + smalest;
}
