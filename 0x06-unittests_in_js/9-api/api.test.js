const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  it('returns status code 200', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('returns status code 200 for correct ID', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns status code 404 for incorrect ID', (done) => {
    request.get('http://localhost:7865/cart/eric', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns the correct result for correct ID', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });
});
