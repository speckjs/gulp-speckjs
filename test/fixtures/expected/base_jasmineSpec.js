var assert = require('assert');
var test = require('jasmine');
var file = require('../specs/base.js');

describe('diff function', function() {
  it('returns the diff of both params', function() {
    expect(file.diff(3,2).toBe(1));
  });
  it('returns the diff of both params', function() {
    expect(file.diff(8,5).not.toBe(13));
  });
  it('returns the diff of both params', function() {
    var pass;
    try {
      pass = true;
      assert.notDeepEqual(file.diff(10,10), 5);
    } catch (e) {
      pass = false;
    }
    expect(pass).toBe(true);
  });

});

describe('product function', function() {
  it('returns the quotient of both params', function() {
    expect(file.quotient(6,3).toBe(2));
  });
  it('returns the quotient of both params', function() {
    expect(file.quotient(10,10).not.toBe(9));
  });
  it('returns the quotient of both params', function() {
    var pass;
    try {
      pass = true;
      assert.notDeepEqual(file.quotient(25,5), 10);
    } catch (e) {
      pass = false;
    }
    expect(pass).toBe(true);
  });

});
