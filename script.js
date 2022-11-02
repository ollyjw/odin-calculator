const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.btn.number');
const operators = document.querySelectorAll('.btn.operator');
const operatorsArray = Array.from(operators);


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



// Add click event listener to number btns that places the textContent of pressed btns on the display
numbers.forEach(function (number) {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
    })
})

// need to store the full number somewhere
// save which operation has been chosen
// then operate() on them when the user presses the “=” key.

// You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.

// This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them.
