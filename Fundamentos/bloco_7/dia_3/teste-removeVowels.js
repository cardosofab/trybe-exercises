// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let outputNumber = 1

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'e' ||
      characters[index] === 'i' ||
      characters[index] === 'o' ||
      characters[index] === 'u'
    ) {
      results += outputNumber;
      outputNumber += 1;
    } else {
      results += characters[index];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);
assert.strictEqual(output,result);