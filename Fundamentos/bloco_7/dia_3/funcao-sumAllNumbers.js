// Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = array => {
  let resultado = 0;
  for (let index = 0; index < array.length; index += 1) {
    resultado += array[index];
  }
  return resultado;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);