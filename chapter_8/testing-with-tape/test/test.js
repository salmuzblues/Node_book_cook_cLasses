const test = require('tape');
const calculator = require('./../calculator.js');

test('test add integers 1 and 2', (t) => {
  t.plan(1);
  t.equal(calculator.add(1, 2), 3);
});

// well pass the numbers as strings rather than integers.
// this test is expected to fail as our calculator.js program does not contain 
// logic to transform string  input into integers.

test('test add strings 1 and 2', (t) => {
  t.plan(1),
  t.equal(calculator.add('1', '2'), 3);
});