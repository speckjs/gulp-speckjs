var test = require('tape');
var file = require('../specs/edgeCases.js');

test('sum function', function(t) { 
  t.plan(2);
  t.equal(4, file.sum(1,3), 'returns the sum of both params');
  t.equal(20, file.sum(10,10), 'returns the sum of both params');
});

test('product function', function(t) { 
  t.plan(3);
  t.equal(6, file.product(2,3), 'returns the product of both params');
  t.equal(100, file.product(10,10), 'returns the product of both params');
  t.equal(50, file.product(2,25), 'returns the product of both params');
});

test('ddd function', function(t) { 
  t.plan(0);
});

test('eee function', function(t) { 
  t.plan(0);
});

test('fff function', function(t) { 
  t.plan(2);
  t.equal(6, file.fff(200,3), 'returns the product of both params');
  t.equal(100, file.fff(1000,10), 'returns the product of both params');
});

test('ggg function', function(t) { 
  t.plan(2);
  t.equal(0, file.ggg(0,0), 'returns the product of both params');
  t.equal(0, file.ggg(0,0), 'returns the product of both params');
});
