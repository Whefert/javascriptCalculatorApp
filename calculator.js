//Create empty variables for use through calculation
let vals = "";
let operands = [];
let operator = "";

function updateVals(val) {
  vals = vals + val;
  //removes leading zero if input starts with zero
  if (vals.startsWith("0")) {
    vals = vals.substring(1);
  }
  updateView(vals);
}

function updateView(newValue) {
  document.getElementById("view").value = newValue;
}

function getSecondOperator(sign) {
  //store val 1 in an array
  operands.push(parseFloat(vals));
  //store operand
  operator = sign;
  //reset vals string
  clearVals();
  clearView();
}

function calculate() {
  operands.push(parseFloat(vals));
  if (operator == "x") {
    document.getElementById("view").value = operands[0] * operands[1];
  } else {
    document.getElementById("view").value = operands[0] / operands[1];
  }
  clearVals();
}

function clearAll() {
  clearView();
  clearVals();
  operands = [];
  operator = "";
}

function clearView() {
  document.getElementById("view").value = "";
}

function clearVals() {
  vals = "";
}
