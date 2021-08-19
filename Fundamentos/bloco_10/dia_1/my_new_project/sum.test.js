// sum.test.js
const sum = require('./sum');

describe('Testes da função sum', () => {
  it('sums two values', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('Soma 4 + 5', () => {
    expect(sum(5, 4)).toBe(9);
  });
  it('Soma 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});

