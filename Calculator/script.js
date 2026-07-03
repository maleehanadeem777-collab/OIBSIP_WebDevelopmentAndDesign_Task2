let currentInput = '0';
let previousInput = '';
let currentOperator = null;

const currentDisplay = document.getElementById('current-display');
const previousDisplay = document.getElementById('previous-operand');

function updateDisplay() {
    currentDisplay.innerText = currentInput;
    if (currentOperator != null) {
        previousDisplay.innerText = `${previousInput} ${currentOperator}`;
    } else {
        previousDisplay.innerText = '';
    }
}

function appendNumber(num) {
    if (num === '.' && currentInput.includes('.')) return;
    if (currentInput === '0' && num !== '.') {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperator = null;
    previousInput = '';
    updateDisplay();
}

function clearScreen() {
    currentInput = '0';
    previousInput = '';
    currentOperator = null;
    updateDisplay();
}

function deleteNumber() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}