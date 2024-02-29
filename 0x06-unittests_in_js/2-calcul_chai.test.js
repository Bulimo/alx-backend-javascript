const calculateNumber = require('./1-calcul');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  describe('SUM operation +ve', () => {
    it('should add rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 0.5, 2.3)).to.equal(3);
      expect(calculateNumber('SUM', 2.1, 3.8)).to.equal(6);
    });
  });

  describe('SUM operation -ve', () => {
    it('should add rounded numbers', () => {
      expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
      expect(calculateNumber('SUM', -0.5, -2.3)).to.equal(-2);
      expect(calculateNumber('SUM', -2.1, 3.8)).to.equal(2);
    });
  });

  describe('SUBTRACT operation +ve', () => {
    it('should subtract rounded b from a', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 0.5, 2.3)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 2.1, 3.8)).to.equal(-2);
    });
  });

  describe('SUBTRACT operation -ve', () => {
    it('should subtract rounded b from a', () => {
      expect(calculateNumber('SUBTRACT', -5.5, -2.3)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', -0.5, 2.3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 2.1, -3.8)).to.equal(6);
    });
  });

  describe('DIVIDE operation', () => {
    it('should divide a by rounded b', () => {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
      expect(calculateNumber('DIVIDE', 3, 1.5)).to.equal(1.5);
    });

    it('should return "Error" when rounded b is 0', () => {
      expect(calculateNumber('DIVIDE', 8, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -5, 0)).to.equal('Error');
    });
  });

  describe('Invalid operation type', () => {
    it('should return an error message for an invalid operation type', () => {
      expect(calculateNumber('INVALID_OPERATION', 2, 3)).to.equal(undefined);
    });
  });
});
