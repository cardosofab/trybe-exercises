// 1 - Faça o mock da funcão subtrair e teste sua chamada.

const math = require('../src/math');

test("testar chamada da função subtrair", () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

// 2 - Faça o mock da função multiplicar e implemente como retorno padrão o valor ‘10’. Teste a chamada e o retorno.

test("multiplicar com retorno padrão de valor '10'", () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});