const { expect } = require('chai');
const sinon = require('sinon');
const readline = require('readline-sync');
const { typeNumber } = require('../typeNumber');

describe('chama a função "typeNumber"', () => {
  
  describe('número maior que zero', () => {
    before(() => {
      sinon.stub(readline, 'questionInt')
      .returns(10);
    });
    
    after(() => {
      readline.questionInt.restore();
      
    });
    
    it('retorna positivo', () => {
      const result = typeNumber();
      
      expect(result).to.be.equal('Positivo');
    });
  });

  describe('número menor que zero', () => {
    before(() => {
      sinon.stub(readline, 'questionInt').returns(-1);
    });

    after(() => {
      readline.questionInt.restore();
    });

    it('retorna negativo', () => {
      const result = typeNumber();

      expect(result).to.be.equal('Negativo');
    });
  });

  describe('número é zero', () => {
    before(() => {
      sinon.stub(readline, 'questionInt').returns(0);
    });

    after(() => {
      readline.questionInt.restore();
    });

    it('retorna neutro', () => {
      const result = typeNumber();

      expect(result).to.be.equal('Neutro');
    });
  });
});