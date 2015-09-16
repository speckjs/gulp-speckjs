var test = require('tape');
var file = require('../specs/base.js');

test('diff function', function(t) {
  t.plan(3);
  t.equal(1, file.diff(3,2), 'returns the diff of both params');
  t.notEqual(13, file.diff(8,5), 'returns the diff of both params');
  t.notDeepEqual(5, file.diff(10,10), 'returns the diff of both params');
});

test('product function', function(t) {
  t.plan(3);
  t.equal(2, file.quotient(6,3), 'returns the quotient of both params');
  t.notEqual(9, file.quotient(10,10), 'returns the quotient of both params');
  t.notDeepEqual(10, file.quotient(25,5), 'returns the quotient of both params');
});
