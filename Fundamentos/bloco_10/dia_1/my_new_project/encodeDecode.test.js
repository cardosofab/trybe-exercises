const { encode, decode } = require('./encodeDecode');

describe('Testa se encode e decode são funções', () => {
  it('Encode é função', () => {
    expect(typeof encode).toBe('function');
    expect(encode).toBeDefined();
  });
  it('Decode é função', () => {
    expect(typeof decode).toBe('function');
    expect(decode).toBeDefined();
  });
});