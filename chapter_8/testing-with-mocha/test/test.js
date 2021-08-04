const assert = require('chai').assert;
const calculator = require('../calculator');
describe('Calculator Test', () => {

});
describe('add() Test', () => {
  it('add(1, 2) should return 3', () =>{
    assert.equal(calculator.add(1,2), 3);
  });
  it("add('1','2') should return 3", () => {
    assert.equal(calculator.add("1", "2"), 3);
    });
});
