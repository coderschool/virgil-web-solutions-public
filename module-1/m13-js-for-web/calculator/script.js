let display = document.getElementById("display");
let num1 = "";
let num2 = "";
let operator = null;
let previousButton = null;

const addNumber = (num) => {
  if (!operator) {
    num1 += num;
    display.innerHTML = num1;
  } else {
    num2 += num;
    display.innerHTML = num2;
  }
  previousButton = "number";
};

const add = () => {
  if (previousButton === "number") calculate();
  operator = "add";
  previousButton = "add";
};

const divide = () => {
  if (previousButton === "number") calculate();
  operator = "divide";
  previousButton = "divide";
};

const multiply = () => {
  if (previousButton === "number") calculate();
  operator = "multiply";
  previousButton = "multiply";
};

const subtract = () => {
  if (previousButton === "number") calculate();
  operator = "subtract";
  previousButton = "subtract";
};
const calculate = () => {
  if (num2) {
    if (operator === "add") {
      display.innerHTML = parseFloat(num1) + parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "subtract") {
      display.innerHTML = parseFloat(num1) - parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "divide") {
      display.innerHTML = parseFloat(num1) / parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "multiply") {
      display.innerHTML = parseFloat(num1) * parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
  }
  if (display.innerHTML === "NaN") {
    num1 = "";
    num2 = "";
    operator = null;
  }
};
const equal = () => {
  calculate();
  operator = null;
  num1 = "";
  num2 = "";
};

const clearCalc = () => {
  num1 = "";
  num2 = "";
  operator = null;
  display.innerHTML = "";
};
