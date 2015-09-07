var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

// want to return the sum of all the multiples of 3 and 5 below n (1000).

test('getting a list of multiples of 3', function(){
  //expect(sumOfThree).to.equal(`sum of multiples of 3`);
  //expect(sumOfFive).to.equal(`sum of multiples of 5`);
  //expect(sumOfFifteen).to.equal(`sum of multiples of 15`);
}); // END test 3s

var three = [];//multiples of 3
var five = [];//multiples of 5
var both = [];//multiples of both 3 and 5

function multiples () {
  for (var i = 3; i < 1000; i ++){
    if (i % 3 === 0 && i % 5 === 0){ //i divides by 3 & 5 w/ no remainder
      both.push(i); // pushes all true to the `both` array
    } else if (i % 3 === 0) { // i divides by 3 w/ no remainder
        three.push(i); // pushes all true to the `three` array
    } else if (i % 5 === 0) { // i divides by 5 w/ no remainder
        five.push(i); // pushes all true to the `five` 
    }
  }
}
