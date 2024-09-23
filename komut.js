let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    updateScreen();
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
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
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    updateScreen();
}

function updateScreen() {
    document.getElementById('result').value = currentInput;
}

function clearScreen() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateScreen();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}
