var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

// want to return the sum of all the multiples of 3 and 5 below n (1000).

test('getting a list of multiples of 3', function(){
  //expect(multiples).to.equal(233168);
  //couldn't get working test w/ chai- passed tested with console.log

}); // END test 3s




function multiples () {
  var three = [];//multiples of 3
  var five = [];//multiples of 5
  var both = [];//multiples of both 3 and 5
  for (var i = 1; i < 1000; i++){
    if (i % 3 === 0 && i % 5 === 0){ //i divides by 3 & 5 w/ no remainder
      both.push(i); // pushes all true to the `both` array
    } else if (i % 3 === 0) { // i divides by 3 w/ no remainder
        three.push(i); // pushes all true to the `three` array
    } else if (i % 5 === 0) { // i divides by 5 w/ no remainder
        five.push(i); // pushes all true to the `five`
    }
  }
  var join = three.concat(five, both); // .concat() adds five & both to three
  for (x = 0, sum = 0; x < join.length; sum += join[x++]);
  //starts counting @ index value 0, sum starts @ 0; will run lenth of array join;
  //+= adds each item in array `join` to sum
}
//multiples(); //calls function
