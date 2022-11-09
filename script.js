const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.btn.number');
const operators = document.querySelectorAll('.btn.operator');
// changed operators Array.from code as that stored the html button tags not the content
const operatorsArray = ['+', '-', '*', '/'];
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
// save which operation has been chosen in array e.g. [1,+,2]  or [2,*,2]
let operation = [];


// convert number string inputs to numbers
function convertToNumber() {
    for (let i = 0; i < operation.length; i++) {
        // if any iterations of operation aren't an operator, then convert to number
        if (operation[i] !== '+' && operation[i] !== '-' && operation[i] !== '*' && operation[i] !== '/') {
            operation[i] = Number(operation[i]);
        }
    }
}

// clearing display box on screen only
function clearDisplay() {
    display.textContent = '';
}

// function that will add the inputs to display on screen and displayValue var
function populateDisplay() {

    // clear the display on screen after operator is pressed (e.g. to avoid '+13' or '/56' etc)
    for (let i = 0; i < operatorsArray.length; i++) {
        if (display.textContent.includes(operatorsArray[i])) {  
            //push the inputted operator from operatorsArray to the 'operation' array
            operation.push(operatorsArray[i]);

            clearDisplay();
        }
    }

    // += adds the value of the right operand to a variable and assigns the result to the variable
    // use of 'this' means functionality could be applied to any input
    display.textContent += this.textContent;
    displayValue[0] = display.textContent;
}


// Add click event listener to number btns that uses populateDisplay var
numbers.forEach(function (number) {
    number.addEventListener('click', populateDisplay);    
})

// Add click event listener to operator btns that places the textContent of inputs on the display & 'pushes' its value to operation array
operators.forEach(function (operator) {
    operator.addEventListener('click', () => {
        display.textContent = operator.textContent;
        operation.push(displayValue[0]);
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


function logValues() {
    console.log(`displayValue is ${displayValue}`);
	console.log(`operation is ${operation}`);
	console.log(`result is ${result}`);
}


// then operate() on them when the user presses the “=” key.
equalsBtn.addEventListener('click', () => {
    operation.push(displayValue[0]);
    // number strings in operation array coverted to numbers
    convertToNumber();

    // Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
    if(operation[2] === 0 && operation[1] === "/") {
        result = "DON'T..."
        display.textContent = result;
        displayValue[0] = result;
        operation = [];
        return result;
    }

    result = operate(operation[1], operation[0], operation[2]);
    // add result to display box
    display.textContent = result;
    // add result to display value
    displayValue.push(result);

    logValues();
})


// Gotchas: watch out for and fix these bugs if they show up in your code:
// Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.

// Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

// You should round answers with long decimals so that they don’t overflow the screen.

// Pressing '=' before entering all of the numbers or an operator could cause problems!




// Extra Credit

// Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

// Add a “backspace” button, so the user can undo if they click the wrong number.

// Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.