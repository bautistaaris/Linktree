const display = document.getElementById('display');
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
let shouldResetDisplay = false;
let expression = '';

function inputNumber(num) {
    if (shouldResetDisplay) {
        display.textContent = num;
        shouldResetDisplay = false;
        expression += num;
    } else {
        if (!(num === '.' && display.textContent.includes('.'))) {
            display.textContent += num;
            expression += num;
        }
    }
}

function getOperatorSymbol(operator) {
    switch (operator) {
        case 'add': return '+';
        case 'subtract': return '-';
        case 'multiply': return '*';
        case 'divide': return '/';
        default: return '';
    }
}

function handleOperator(nextOperator) {
    const symbol = getOperatorSymbol(nextOperator);
    if (expression && !isNaN(display.textContent)) {
        expression += ' ' + symbol + ' ';
        display.textContent = expression;
    }
    operator = nextOperator;
    waitingForSecondOperand = true;
    shouldResetDisplay = true;
}

function operate(a, b, op) {
    switch (op) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return b !== 0 ? a / b : 'Error';
        default: return b;
    }
}

function formatResult(result) {
    if (result === 'Error') return 'Error';
    return Number(result).toLocaleString('en', { maximumFractionDigits: 8 });
}

function clearCalculator() {
    display.textContent = '';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    shouldResetDisplay = false;
    expression = '';
}

function inputPercent() {
    let value = parseFloat(display.textContent.replace(',', '.'));
    value = value / 100;
    display.textContent = formatResult(value);
    shouldResetDisplay = true;
}

function toggleSign() {
    let value = parseFloat(display.textContent.replace(',', '.'));
    value = -value;
    display.textContent = formatResult(value);
}

document.querySelector('.buttons').addEventListener('click', (e) => {
    const target = e.target;
    if (!target.classList.contains('btn')) return;

    if (target.hasAttribute('data-number')) {
        inputNumber(target.getAttribute('data-number'));
        waitingForSecondOperand = false;
    } else if (target.hasAttribute('data-action')) {
        const action = target.getAttribute('data-action');
        switch (action) {
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                handleOperator(action);
                break;
            case 'equals':
                if (operator) {
                    try {
                        let evalExp = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
                        let result = eval(evalExp);
                        display.textContent = formatResult(result);
                        expression = result.toString();
                    } catch {
                        display.textContent = 'Error';
                        expression = '';
                    }
                    operator = null;
                }
                break;
            case 'clear':
                clearCalculator();
                break;
            case 'percent':
                inputPercent();
                break;
            case 'sign':
                toggleSign();
                break;
        }
    }
});