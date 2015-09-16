var chai = require('chai');
var should = chai.should();
var file = require('../specs/base.js');

describe('diff function', function() { 
  it('returns the diff of both params', function() {
    file.diff(3,2).should.equal(1));
  });
  it('returns the diff of both params', function() {
    file.diff(8,5).should.not.equal(13));
  });
  it('returns the diff of both params', function() {
    file.diff(10,10).should.not.deep.equal(5));
  });
});

describe('product function', function() { 
  it('returns the quotient of both params', function() {
    file.quotient(6,3).should.equal(2));
  });
  it('returns the quotient of both params', function() {
    file.quotient(10,10).should.not.equal(9));
  });
  it('returns the quotient of both params', function() {
    file.quotient(25,5).should.not.deep.equal(10));
  });
});
