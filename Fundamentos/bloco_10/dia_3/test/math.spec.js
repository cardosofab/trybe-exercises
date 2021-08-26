// 1 - Faça o mock da funcão subtrair e teste sua chamada.

const math = require('../src/math');

test("testar chamada da função subtrair", () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});
