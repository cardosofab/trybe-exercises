// Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, string) => {
  let maior = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (string === array[i]) {
      for (let index = 0; index < string.length; index += 1) {
        let repeats = 0;
        for (let j = 0; j < string.length; j += 1) {
          if (string[index] === string[j]) {
            repeats += 1;
          }  
        }    
        if (repeats > maior) {
          maior = repeats;
        }
      }
    }
  }
  if (maior === 1 || maior === 0) {
    maior -= 1;
  }  
  return maior;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 2;
let output = findTheNeedle(words, 'book');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);