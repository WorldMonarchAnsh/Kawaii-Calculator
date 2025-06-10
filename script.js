const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let current = '';
let operator = '';
let operand = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === 'C') {
      current = '';
      operator = '';
      operand = '';
      display.value = '';
    } else if (value === '=') {
      if (current && operator && operand !== '') {
        current = eval(current + operator + operand).toString();
        display.value = current;
        operator = '';
        operand = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (current && !operator) {
        operator = value;
        display.value += value;
      }
    } else {
      if (!operator) {
        current += value;
      } else {
        operand += value;
      }
      display.value += value;
    }
  });
});
