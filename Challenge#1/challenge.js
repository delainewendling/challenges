var range = document.getElementById("inputRange");
var number = document.getElementById("inputNumber");

function rangeValue () {
  var rValue = range.value;
  number.value = rValue;
}

function inputValue () {
  var iValue = number.value;
  range.value = iValue;
}

// range.addEventListener("onchange", rangeValue);
// number.addEventListener("onchange", inputValue);