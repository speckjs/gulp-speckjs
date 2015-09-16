var chai = require('chai');
var should = chai.should();
var file = require('../specs/edgeCases.js');

describe('sum function', function() { 
  it('returns the sum of both params', function() {
    file.sum(1,3).should.equal(4));
  });
  it('returns the sum of both params', function() {
    file.sum(10,10).should.equal(20));
  });
});

describe('product function', function() { 
  it('returns the product of both params', function() {
    file.product(2,3).should.equal(6));
  });
  it('returns the product of both params', function() {
    file.product(10,10).should.equal(100));
  });
  it('returns the product of both params', function() {
    file.product(2,25).should.equal(50));
  });
});

describe('ddd function', function() { 
});

describe('eee function', function() { 
});

describe('fff function', function() { 
  it('returns the product of both params', function() {
    file.fff(200,3).should.equal(6));
  });
  it('returns the product of both params', function() {
    file.fff(1000,10).should.equal(100));
  });
});

describe('ggg function', function() { 
  it('returns the product of both params', function() {
    file.ggg(0,0).should.equal(0));
  });
  it('returns the product of both params', function() {
    file.ggg(0,0).should.equal(0));
  });
});
