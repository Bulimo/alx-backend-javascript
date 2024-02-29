const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM', () => {
    // Create a spy for the Utils.calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function that uses the spy
    const apiRes = sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called with the correct arguments
    assert(calculateNumberSpy.calledWithExactly('SUM', 100, 20));

    // Restore the original function to avoid affecting other tests
    calculateNumberSpy.restore();
  });

  it('should log the correct total message', () => {
    // Create a spy for the console.log function
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function that logs a message
    sendPaymentRequestToApi(100, 20);

    // Assert that the console.log spy was called with the correct message
    assert(consoleLogSpy.calledWithExactly('The total is: 120'));

    // Restore the original function to avoid affecting other tests
    consoleLogSpy.restore();
  });
});
