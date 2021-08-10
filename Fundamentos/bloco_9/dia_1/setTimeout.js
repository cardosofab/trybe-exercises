setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);

const pushNumber2 = (list, number) => list.push(number);

let numbers2 = [];

setTimeout(() => pushNumber2(numbers2, 1), 3000);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

assert.deepStrictEqual(numbers2, [1, 2, 3]); // essa validação falha

const pushNumber3 = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers3 = [];

setTimeout(() => pushNumber3(numbers3, 1), 3000);
pushNumber3(numbers3, 2);
pushNumber3(numbers3, 3);

setTimeout(() => assert.deepStrictEqual(numbers3, [2, 3, 1]), 3000);