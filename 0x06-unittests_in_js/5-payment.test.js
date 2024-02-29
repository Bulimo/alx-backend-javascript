const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  let calculateNumberSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the stub and the spy after each test
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with 100 and 20', () => {
    // Call the function that uses the stub
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    assert(calculateNumberSpy.calledWithExactly('SUM', 100, 20));

    // Assert that the console.log spy was called with the correct message
    assert(consoleLogSpy.calledWithExactly('The total is: 120'));
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('should call Utils.calculateNumber with 10 and 10', () => {
    // Call the function that logs a message
    sendPaymentRequestToApi(10, 10);

    // Assert that the stub was called with the correct arguments
    assert(calculateNumberSpy.calledWithExactly('SUM', 10, 10));

    // Assert that the console.log spy was called with the correct message
    assert(consoleLogSpy.calledWithExactly('The total is: 20'));
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
