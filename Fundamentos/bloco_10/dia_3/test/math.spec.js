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

// 3 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test("Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores", async () => {
  const mockSomar = jest.spyOn(math, "somar");
  mockSomar.mockResolvedValue(5);

  mockSomar(2, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  await expect(mockSomar(2, 3)).resolves.toBe(5);
});