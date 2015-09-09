var items = require('items.json');
    test = require('mocha').it,
    expect = require('chai').expect;

// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');

// TODO: Setup mocha and chai...

test('this is the easy one', function(){
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  expect(items.length).to.equal(25); // It's haunting me now...
});
function amount(items) {
  var items = [ ];
  return items.length;
}

test('finding the average price', function(){ //items.json = 1 giant array. need to call property (i.e. price) to this file
  var yourAnswer = "start with `items`; use `Array` methods";

  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});

function avPrice() {
  items["price"] = 

}

test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */
  function pricedBetween(items, min, max){
    // Just a suggestion, really...
  }

  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
  ]);
});

test('pond hopping', function(){
  expect( /* your answer */ ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
