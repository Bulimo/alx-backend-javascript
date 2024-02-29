const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct object when success is true', (done) => {
    const success = true;

    // Act
    getPaymentTokenFromAPI(success).then((result) => {
      // Assert
      assert.deepStrictEqual(result, { data: 'Successful response from the API' });
      done();
    });
  });

  it('should resolve with no value when success is false', (done) => {
    // Arrange
    const success = false;

    // Act
    getPaymentTokenFromAPI(success).then((result) => {
      // Assert
      assert.strictEqual(result, undefined);
      done(); // Call done to indicate the end of the async test
    });
  });
});

