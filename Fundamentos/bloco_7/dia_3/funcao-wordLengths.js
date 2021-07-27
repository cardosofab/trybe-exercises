// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = array => {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    let contador = 0;
    for (let j = 0; j < array[i].length; j += 1) {
      contador += 1;
    }
    output.push(contador);
  }
  return output;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);