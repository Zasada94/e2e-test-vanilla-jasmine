/**
 * Zamieniamy wartości z inputów na liczby!
 */
const add = (a, b) => Number(a) + Number(b);

/**
 * Calculator
 */
const valueAInput = document.querySelector('#valueA');
const valueBInput = document.querySelector('#valueB');
const resultOutput = document.querySelector('#result');
const addButton = document.querySelector('#add');

function onClick() {
    resultOutput.innerHTML = add(valueAInput.value, valueBInput.value);
}

addButton.addEventListener('click', onClick);
