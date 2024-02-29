const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('return the sum of rounded numbers', () => {
    assert.deepStrictEqual(calculateNumber(1.4, 2.6), 4);
    assert.deepStrictEqual(calculateNumber(0.5, 2.3), 3);
    assert.deepStrictEqual(calculateNumber(2.1, 3.8), 6);
  });

  it('handle negative numbers correctly', () => {
    assert.deepStrictEqual(calculateNumber(-1.4, -2.6), -4);
    assert.deepStrictEqual(calculateNumber(-0.5, -2.3), -2);
    assert.deepStrictEqual(calculateNumber(-2.1, -3.8), -6);
  });

  it('handle zero correctly', () => {
    assert.deepStrictEqual(calculateNumber(0, 0), 0);
    assert.deepStrictEqual(calculateNumber(0, 5.6), 6);
    assert.deepStrictEqual(calculateNumber(-2.3, 0), -2);
  });
});
