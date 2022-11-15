const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.btn.number');
const operators = document.querySelectorAll('.btn.operator');
const operatorsArray = ['+', '-', '*', '/'];
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals');
const decimalBtn = document.querySelector('#decimal');
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

    // convert number string inputs to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator === '' || num2 === '') {
        return num1;
    }

    if (operator == '+') {
        return add(num1, num2);
    } else if(operator == '-') {
        return subtract(num1, num2);
    }
    else if(operator == '*') {
        return multiply(num1, num2);
    }
    else if(operator == '/') {
        // Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
        if(num2 === 0) {
            return "DON'T...";
        } else {
            return divide(num1,num2);
        }
    }
}

// need to store the full number (display value) before operator is pressed
let displayValue = [];
// save which operation/calculation has been chosen in array e.g. [1,+,2]  or [2,*,2]
let operation = [];


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
    // use of 'this' means functionality could be applied to any input e.g. decimal
    display.textContent += this.textContent;
    displayValue[0] = display.textContent;
}


// Add click event listener to number btns that uses populateDisplay var
numbers.forEach(function (number) {
    number.addEventListener('click', populateDisplay);    
})

// decimal btn adds decimal to number
decimalBtn.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        return;
    }
    // The call() method calls the function with a given 'this' value and arguments provided individually.
    populateDisplay.call(decimalBtn);
})

// Add click event listener to operator btns that places the textContent of inputs on the display & 'pushes' its value to operation array
operators.forEach(function (operator) {
    operator.addEventListener('click', () => {       

        // if (display.textContent === '') {
		// 	return;
		// }        

        // show which operators you have clicked on the display
        display.textContent = operator.textContent;
        operation.push(displayValue[0]);            

        // when operation array contains 3 values (i.e. '1', '+', '1') convert to number, calculate result and push that result to the operation array
        if(operation.length === 3) {
            // operate(operator, num1, num2) - operation[1] should always be operator
			result = operate(operation[1], operation[0], operation[2]);
            // empty the display value and add result to it
			displayValue = [];
			displayValue.push(result);

            // empty operation and add result to it
			operation = [];
			operation.push(result);

		}
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
function equals() {
    operation.push(displayValue[0]);

    result = operate(operation[1], operation[0], operation[2]);
    // add result to display box
    display.textContent = result;
        
    // empty the display value
    displayValue = [];
    // add result to display value
    displayValue.push(result);

    logValues();

    // empty operation array - operator btns will populate it if further calculations required
    operation = [];
}

equalsBtn.addEventListener('click', () => {
    equals();    
})


// TO DO: 

// You should round answers with long decimals so that they don’t overflow the screen.

// Extra Credit

// Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.