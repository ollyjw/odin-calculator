const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.btn.number');
const operators = document.querySelectorAll('.btn.operator');
const operatorsArray = Array.from(operators);
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals');
let result;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b; 
}


// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if(operator == '-') {
        return subtract(num1, num2);
    }
    else if(operator == '*') {
        return multiply(num1, num2);
    }
    else if(operator == '/') {
        return divide(num1,num2);
    }
}

// need to store the full number (display value) before operator is pressed
let displayValue = [];
// save which operation has been chosen
let operation = [];


// Add click event listener to number btns that places the textContent of pressed btns on the display, then pushes it to displayValue array
numbers.forEach(function (number) {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
        displayValue[0] = display.textContent;
    })
})

// Add click event listener to operator btns that places the textContent of pressed btns on the display & 'pushes' its value to operation var
operators.forEach(function (operator) {
    operator.addEventListener('click', () => {
        display.textContent = operator.textContent;
        operation[0] = display.textContent;
    })
})

// Clear btn resets everything - empties vars/arrays
function reset() {
    display.textContent = '';
    displayValue = [];
    operation = [];
    result = '';
}

clearBtn.addEventListener('click', () => {
    reset();
})


// then operate() on them when the user presses the “=” key.

// equalsBtn.addEventListener('click', () => {
//     result = operate();
//     display.textContent = result;
// })

// You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.

// This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them.
