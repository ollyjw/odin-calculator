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