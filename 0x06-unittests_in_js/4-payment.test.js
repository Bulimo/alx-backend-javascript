const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {

  it('should call Utils.calculateNumber with type SUM', () => {
    // Stub the calculateNumber function to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function that uses the stub
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    assert(calculateNumberStub.calledWithExactly('SUM', 100, 20));
    // Assert that the console.log spy was called with the correct message
    assert(consoleLogSpy.calledWithExactly('The total is: 10'));
    // Restore the stub and the spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

