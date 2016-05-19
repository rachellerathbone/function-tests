window.onload = function() {
  mocha.setup('tdd');
  var assert = chai.assert;

  // The set of natural numbers (positive numbers and 0).
  var naturalNumbers = function (item) {
    return Number.isInteger(item) && item >= 0;
  };

  // The set of positive even integers.
  var positiveEvenNumbers = function (item) {
    return Number.isInteger(item) && item > 0 && item % 2 === 0;
  };

  // The set of strings that begin with 'a'.
  var stringsThatStartWithA = function (item) {
    return typeof item === 'string' && item[0] === 'a';
  };

  // The set of strings that have three letters
  var stringsThatHaveThreeLetters = function (item) {
    return typeof item === 'string' && item.length === 3;
  };

  suite("#hasItem", function(){
    test("Checks if a set has a item", function() {
      assert.strictEqual(hasItem(positiveEvenNumbers, 2), true);
      assert.strictEqual(hasItem(positiveEvenNumbers, 3), false);
      assert.strictEqual(hasItem(positiveEvenNumbers, 0), false);
      assert.strictEqual(hasItem(positiveEvenNumbers, 100003), false);
      assert.strictEqual(hasItem(positiveEvenNumbers, 1034568), true);
    });
  });

  suite("#addItem", function(){
    test("Adds an item to the set", function(){
      assert.strictEqual(stringsThatStartWithA('b'), false);
      var newSet = addItem(stringsThatStartWithA, 'b');
      assert.strictEqual(newSet('a'), true);
      assert.strictEqual(newSet('aaa'), true);
      assert.strictEqual(newSet('ababf'), true);
      assert.strictEqual(newSet('b'), true);
      assert.strictEqual(newSet('ba'), false);
    });
  });

  suite("#intersection", function(){
    test("Creates a set that is the intersection of both inputs", function(){
      var newSet = intersection(stringsThatStartWithA, stringsThatHaveThreeLetters);
      assert.strictEqual(newSet('a'), false);
      assert.strictEqual(newSet('aaa'), true);
      assert.strictEqual(newSet('ababf'), false);
      assert.strictEqual(newSet('abf'), true);
      assert.strictEqual(newSet('bab'), false);
      assert.strictEqual(newSet(2), false);
      assert.strictEqual(newSet(3), false);
      assert.strictEqual(newSet(1783956238), false);
      assert.strictEqual(newSet(100003), false);
    });
  });

  suite("#union", function(){
    test("Creates a set that is the union of both inputs", function(){
      var newSet = union(stringsThatStartWithA, positiveEvenNumbers);
      assert.strictEqual(newSet('a'), true);
      assert.strictEqual(newSet('aaa'), true);
      assert.strictEqual(newSet('ababf'), true);
      assert.strictEqual(newSet('ababf'), true);
      assert.strictEqual(newSet('babf'), false);
      assert.strictEqual(newSet(2), true);
      assert.strictEqual(newSet(3), false);
      assert.strictEqual(newSet(1783956238), true);
      assert.strictEqual(newSet(100003), false);
    });
  });

  suite("#difference", function(){
    test("Creates a set that is the difference of both inputs", function(){
      var newSet = difference(stringsThatStartWithA, stringsThatHaveThreeLetters);
      assert.strictEqual(newSet('a'), true);
      assert.strictEqual(newSet('aaa'), false);
      assert.strictEqual(newSet('ababf'), true);
      assert.strictEqual(newSet('abf'), false);
      assert.strictEqual(newSet('bab'), false);
      assert.strictEqual(newSet(2), false);
      assert.strictEqual(newSet(3), false);
      assert.strictEqual(newSet(1783956238), false);
      assert.strictEqual(newSet(100003), false);
    });
  });

  mocha.run();

};
