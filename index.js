const add = function(num1, num2) {
  return num1 + num2
}

const subtract = function(num1, num2) {
  return num1 - num2
}

const divide = function(num1, num2) {
  return num1 / num2
}

const multiply = function(num1 , num2) {
  return num1 * num2
}

let number1;
let number2;
let operator;
let enteringSecondNumber = false;

const operate = function(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

const display = document.querySelector(".display");
const calcButtons = document.querySelectorAll(".calc-button");
const clearAll = document.querySelector(".clear-all");
const deleteNum = document.querySelector(".delete");

calcButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    if (display.innerHTML === "0") {
      display.innerHTML = "";
    }
    if (isNaN(e.target.textContent)) {
      if (e.target.textContent === "=") {
        if (number1 !== undefined && operator !== undefined) {
          number2 = parseFloat(display.innerHTML);
          const result = operate(operator, number1, number2);
          display.innerHTML = result;
        }
      } else {
        number1 = parseFloat(display.innerHTML);
        operator = e.target.textContent;
        enteringSecondNumber = true;
      }
    } else {
      if (enteringSecondNumber) {
        display.innerHTML = "";
        enteringSecondNumber = false;
      }
      display.innerHTML += e.target.textContent;
    }
  });
});

deleteNum.addEventListener('click', () => {
  let currentNum = display.innerHTML;
  let newNum = currentNum.slice(0, -1);
  display.innerHTML = newNum;
  
  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }
});

clearAll.addEventListener('click', () => {
  display.innerHTML = "0";
  number1 = undefined;
  number2 = undefined;
  operator = undefined;
  enteringSecondNumber = false;
});