const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should add rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
      assert.strictEqual(calculateNumber('SUM', 0.5, 2.3), 3);
      assert.strictEqual(calculateNumber('SUM', 2.1, 3.8), 6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should subtract rounded b from a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.3), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 2.3), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.1, 3.8), -2);
    });
  });

  describe('DIVIDE operation', () => {
    it('should divide a by rounded b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 3, 1.5), 1.5);
    });

    it('should return "Error" when rounded b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5, 0), 'Error');
    });
  });

  describe('Invalid operation type', () => {
    it('should return an error message for an invalid operation type', () => {
      assert.strictEqual(calculateNumber('INVALID_OPERATION', 2, 3), undefined);
    });
  });
});
