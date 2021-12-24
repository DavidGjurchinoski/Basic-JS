var varType = document.getElementById("varType");
var varValue = document.getElementById("varValue");

var inputNum = document.getElementById("inputNum");
var inputSting = document.getElementById("inputString");

var buttonBool = document.getElementById("buttonBool");
var buttonNum = document.getElementById("buttonNum");
var buttonString = document.getElementById("buttonString");

var togler = false;

function trackChangeNum(value) {
  value = parseInt(value);
  varValue.innerHTML = value;
  varType.innerHTML = typeof value;
}

function trackChangeString(value) {
  varValue.innerHTML = value;
  varType.innerHTML = typeof value;
}

function turnAllOFF() {
  inputNum.style.display = "none";
  inputString.style.display = "none";
  varType.innerHTML = "";
  varValue.innerHTML = "";
  buttonBool.style.backgroundColor = "red";
  buttonBool.innerHTML = "Type Boolean OFF";
}

function changeInnerHTML() {
  // if (!togler) {
  //   buttonBool.innerHTML = "Type Boolean OFF";
  //   // varValue.innerHTML = toString(togler.value);
  //   buttonBool.style.backgroundColor = "red";
  // } else {
  //   buttonBool.innerHTML = "Type Boolean ON";
  //   // varValue.innerHTML = toString(togler.value);
  //   buttonBool.style.backgroundColor = "rgb(9, 189, 9)";
  // }
  if (inputNum.style.display === "none") {
    buttonNum.innerHTML = "Type Number OFF";
    buttonNum.style.backgroundColor = "red";
  } else {
    buttonNum.innerHTML = "Type Number ON";
    buttonNum.style.backgroundColor = "rgb(9, 189, 9)";
  }
  if (inputSting.style.display === "none") {
    buttonString.innerHTML = "Type String OFF";
    buttonString.style.backgroundColor = "red";
  } else {
    buttonString.innerHTML = "Type String ON";
    buttonString.style.backgroundColor = "rgb(9, 189, 9)";
  }
}

turnAllOFF();
changeInnerHTML();

function changeBool() {
  togler = !togler;
  if (!togler) {
    turnAllOFF();
    varValue.innerHTML = false;
    varType.innerHTML = typeof togler;
    buttonBool.innerHTML = "Type Boolean OFF";
    // varValue.innerHTML = toString(togler.value);
    buttonBool.style.backgroundColor = "red";
  } else {
    turnAllOFF();
    varValue.innerHTML = true;
    varType.innerHTML = typeof togler;
    buttonBool.innerHTML = "Type Boolean ON";
    // varValue.innerHTML = toString(togler.value);
    buttonBool.style.backgroundColor = "rgb(9, 189, 9)";
  }
  changeInnerHTML();
}

function changeNum() {
  if (inputNum.style.display === "none") {
    turnAllOFF();
    inputNum.style.display = "block";
  } else {
    inputNum.style.display = "none";
  }
  changeInnerHTML();
}

function changeString() {
  if (inputSting.style.display === "none") {
    turnAllOFF();
    inputSting.style.display = "block";
  } else {
    inputSting.style.display = "none";
  }
  changeInnerHTML();
}

var resultArea = document.getElementById("resultArea");

const pi = 3.14159265359;

function calcCircle(radius) {
  var result = pi * radius * 2;
  resultArea.innerHTML = result;
}

var resultPrice = document.getElementById("resultPrice");
var resultTax = document.getElementById("resultTax");

function calculatePhones(price, tax) {
  console.log(price);
  var sumPrice = 30 * price;
  var sumTax = sumPrice * (tax / 100);

  resultPrice.innerHTML = sumPrice;
  resultTax.innerHTML = sumTax;
}
