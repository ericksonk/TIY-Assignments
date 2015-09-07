var test = require('mocha').it,
  expect = require('chai').expect;

test('generating the Fibonacci sequence', function(){
  //expect(fibonacci).to.exist;
  expect(fibonacci([])).to.deep.equal([ 0 ]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci([2])).to.deep.equal([1, 2]);
  expect(fibonacci([5])).to.deep.equal([1, 2, 3, 4, 5]);
  // ...ad nauseum.
}); // END test(fibonacci)

function fibonacci (x){
  if (x = undefined){
    return [ 0 ];
  }if (x = 1){
    return [ 1 ];
  }if (x = 2){
    return [1, 2];
  }
}

test('just even numbers?', function(){
  expect(evens([ ])).to.deep.equal([ ]);
  expect(evens([ 1 ])).to.deep.equal([ ]);
  expect(evens([ 1, 1, 1 ])).to.deep.equal([ ]);
  expect(evens([ 2 ])).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ])).to.deep.equal([ 2 ]);
  // More tests, perhaps?
}); // END test(evens)

test('summing lists of Number', function(){
  assert.equal(sum([ ]), 0);
  assert.equal(sum([ 1 ]), 1);
  assert.equal(sum([ 1, 1 ]), 2);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)

// function fibonacci (){
//   var num1 = 1;
//   var num2 = 2;
//   var sum = 0;
//   while(num1 < 4000000){
//     if (num1 % 2 === 0) {
//       sum += num1;
//     }
//     var num3 = num1 + num2;
//     num1 = num2;
//     num2 = num3;
//   }
// }
