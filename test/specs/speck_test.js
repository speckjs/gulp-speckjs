var test = require('tape');
var fs = require('fs');

test('build tape specs', function(t) {
  t.plan(2);
  var actual_base = fs.readFileSync('test/fixtures/specs/base_tapeSpec.js', 'utf8');
  var expected_base = fs.readFileSync('test/fixtures/expected/base_tapeSpec.js', 'utf8');
  var actual_edge = fs.readFileSync('test/fixtures/specs/edgeCases_tapeSpec.js', 'utf8');
  var expected_edge = fs.readFileSync('test/fixtures/expected/edgeCases_tapeSpec.js', 'utf8');

  t.equal(actual_base, expected_base, 'the build should be correct');
  t.equal(actual_edge, expected_edge, 'the build should be correct');
});

test('build jasmine specs', function(t) {
  t.plan(2);
  var actual_base = fs.readFileSync('test/fixtures/specs/base_tapeSpec.js', 'utf8');
  var expected_base = fs.readFileSync('test/fixtures/expected/base_tapeSpec.js', 'utf8');
  var actual_edge = fs.readFileSync('test/fixtures/specs/edgeCases_tapeSpec.js', 'utf8');
  var expected_edge = fs.readFileSync('test/fixtures/expected/edgeCases_tapeSpec.js', 'utf8');

  t.equal(actual_base, expected_base, 'the build should be correct');
  t.equal(actual_edge, expected_edge, 'the build should be correct');
});

test('build mocha-chai specs', function(t) {
  t.plan(2);
  var actual_base = fs.readFileSync('test/fixtures/specs/base_mochaChaiSpec.js', 'utf8');
  var expected_base = fs.readFileSync('test/fixtures/expected/base_mochaChaiSpec.js', 'utf8');
  var actual_edge = fs.readFileSync('test/fixtures/specs/edgeCases_mochaChaiSpec.js', 'utf8');
  var expected_edge = fs.readFileSync('test/fixtures/expected/edgeCases_mochaChaiSpec.js', 'utf8');

  t.equal(actual_base, expected_base, 'the build should be correct');
  t.equal(actual_edge, expected_edge, 'the build should be correct');
});
