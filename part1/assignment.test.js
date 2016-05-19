window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('#sum', function() {
    test('adds two numbers', function() {
      assert.equal(sum(5, 2), 7);
      assert.equal(sum(-4, 8), 4);
      assert.equal(sum(-6, -3), -9);
    });
  });

  suite('#product', function() {
    test('multiplies two numbers', function() {
      assert.equal(product(5, 2), 10);
      assert.equal(product(-4, 8), -32);
      assert.equal(product(-6, -3), 18);
    });
  });

  suite('#sumAndProduct', function() {
    test('adds the first two numbers and multiplies that sum by the third', function() {
      assert.equal(sumAndProduct(4, 4, 4), 32);
      assert.equal(sumAndProduct(2, -3, 7), -7);
      assert.equal(sumAndProduct(-9, 8, -5), 5);
    });
  });

  suite('#roundUp', function() {
    test('rounds the number up to the nearest integer', function() {
      assert.equal(roundUp(2.1), 3);
      assert.equal(roundUp(4.7), 5);
      assert.equal(roundUp(6.0), 6);
    });
  });

  suite('#toFahrenheit', function() {
    test('converts the Celsius to Fahrenheit rounded to the nearest integer', function() {
      assert.equal(toFahrenheit(30), 86);
      assert.equal(toFahrenheit(31), 88);
      assert.equal(toFahrenheit(-5), 23);
    });
  });

  suite('#areaOfCircle', function() {
    test('calculates the area of a ciricle', function() {
      assert.approximately(areaOfCircle(10), 314.1592653589793, 0.01);
      assert.approximately(areaOfCircle(20), 1256.6370614359173, 0.01);
    });
  });

  suite('#areaOfRing', function() {
    test('calculates the the area of a circulur ring', function() {
      assert.approximately(areaOfRing(10, 5), 235.61944901923448, 0.01);
      assert.approximately(areaOfRing(20, 17), 348.716784548467, 0.01);
    });
  });

  suite('#greet', function() {
    test('greets a person by their full name', function() {
      assert.equal(greet('Bart', 'Simpson'), 'Hello, Bart Simpson!');
      assert.equal(greet('Mona', 'Lisa'), 'Hello, Mona Lisa!');
    });
  });

  suite('#toSentence', function() {
    test('converts the words to a sentence with an oxford comma', function() {
      assert.equal(toSentence('Red', 'Green', 'Blue', true), 'Red, Green, and Blue.');
      assert.equal(toSentence('Apples', 'Oranges', 'Bananas', true), 'Apples, Oranges, and Bananas.');
    });

    test('converts the words to a sentence with no oxford comma', function() {
      assert.equal(toSentence('Red', 'Green', 'Blue', false), 'Red, Green and Blue.');
      assert.equal(toSentence('Apples', 'Oranges', 'Bananas', false), 'Apples, Oranges and Bananas.');
    });
  });

  suite('#toRoman', function() {
    test('returns null if the number is less than 1', function() {
      assert.equal(toRoman(0), null);
      assert.equal(toRoman(-1), null);
    });

    test('returns null if the number is greater than 10', function() {
      assert.equal(toRoman(11), null);
      assert.equal(toRoman(12), null);
    });

    test('conversts the number to a roman numeral string', function() {
      assert.equal(toRoman(1), 'I');
      assert.equal(toRoman(2), 'II');
      assert.equal(toRoman(3), 'III');
      assert.equal(toRoman(4), 'IV');
      assert.equal(toRoman(5), 'V');
      assert.equal(toRoman(6), 'VI');
      assert.equal(toRoman(7), 'VII');
      assert.equal(toRoman(8), 'VIII');
      assert.equal(toRoman(9), 'IX');
      assert.equal(toRoman(10), 'X');
    });
  });

  suite('#toDolla', function() {
    test('converts the number to dollar currency string', function() {
      assert.equal(toDolla(10), '$10.00');
      assert.equal(toDolla(45.2), '$45.20');
    });
  });

  suite('#percentage', function() {
    test('calculates the percentage of the first number divided by the second', function() {
      assert.equal(percentage(1, 5), '20.0%');
      assert.equal(percentage(1, 3), '33.3%');
    });
  });

  suite('#isStrictlyEqual', function() {
    test('returns true if the values and types are equal', function() {
      assert.equal(isStrictlyEqual(-1, -1), true);
      assert.equal(isStrictlyEqual('foo', 'foo'), true);
      assert.equal(isStrictlyEqual(null, null), true);
      assert.equal(isStrictlyEqual(undefined, undefined), true);
      assert.equal(isStrictlyEqual(true, true), true);
      assert.equal(isStrictlyEqual(false, false), true);
    });

    test('returns false if the values are equal but types are not', function() {
      assert.equal(isStrictlyEqual(-1, '-1'), false);
      assert.equal(isStrictlyEqual(true, 'true'), false);
      assert.equal(isStrictlyEqual(undefined, 'undefined'), false);
    });

    test('returns false if the values are not equal', function() {
      assert.equal(isStrictlyEqual(1, 2), false);
      assert.equal(isStrictlyEqual(true, false), false);
    });
  });

  suite('#isLooselyEqual', function() {
    test('returns true if the values are equal even if the types are not', function() {
      assert.equal(isLooselyEqual(-1, '-1'), true);
      assert.equal(isLooselyEqual(false, 0), true);
    });

    test('returns false if the values are not equal', function() {
      assert.equal(isLooselyEqual(1, '2'), false);
      assert.equal(isLooselyEqual('true', false), false);
    });
  });

  suite('#remainder', function() {
    test('calculates the remainder of the first number divided by the second', function() {
      assert.equal(remainder(100, 25), 0);
      assert.equal(remainder(100, 30), 10);
    });
  });

  suite('#isEven', function() {
    test('returns true if the number is even', function() {
      assert.equal(isEven(10), true);
      assert.equal(isEven(14), true);
    });

    test('returns false if the number is not even', function() {
      assert.equal(isEven(11), false);
      assert.equal(isEven(15), false);
    });
  });

  suite('#isOdd', function() {
    test('returns true if the number is odd', function() {
      assert.equal(isOdd(11), true);
      assert.equal(isOdd(15), true);
    });

    test('returns false if the number is not odd', function() {
      assert.equal(isOdd(10), false);
      assert.equal(isOdd(14), false);
    });
  });

  suite('#isVowel', function() {
    test('returns true if the letter is a vowel', function() {
      assert.equal(isVowel('a'), true);
      assert.equal(isVowel('e'), true);
      assert.equal(isVowel('i'), true);
      assert.equal(isVowel('o'), true);
      assert.equal(isVowel('u'), true);
    });

    test('returns false if the letter is not a vowel', function() {
      assert.equal(isVowel('z'), false);
      assert.equal(isVowel('b'), false);
      assert.equal(isVowel('d'), false);
      assert.equal(isVowel('y'), false);
    });
  });

  suite('#largestOfThree', function() {
    test('returns the largest argument by value', function() {
      assert.equal(largestOfThree(9, 6, 3), 9);
      assert.equal(largestOfThree(0, 7, 4), 7);
      assert.equal(largestOfThree(1, 2, 5), 5);
    });
  });

  suite('#longestOfThree', function() {
    test('returns the longest argument by length', function() {
      assert.equal(longestOfThree('eight', 'two', 'five'), 'eight');
      assert.equal(longestOfThree('zero', 'seven', 'four'), 'seven');
      assert.equal(longestOfThree('nine', 'six', 'three'), 'three');
    });
  });

  suite('#iceCreamPosition', function() {
    test('returns "not at all" if the ice cream flavor is cardamom', function() {
      assert.equal(iceCreamPosition('warm', 'cardamom'), 'not at all');
      assert.equal(iceCreamPosition('cold', 'cardamom'), 'not at all');
    });

    test('returns "on the side" if the pie temperature is warm', function() {
      assert.equal(iceCreamPosition('warm', 'vanilla'), 'on the side');
      assert.equal(iceCreamPosition('warm', 'chocolate'), 'on the side');
    });

    test('returns "on top" if the pie temperature is cold', function() {
      assert.equal(iceCreamPosition('cold', 'vanilla'), 'on top');
      assert.equal(iceCreamPosition('cold', 'chocolate'), 'on top');
    });

    test('returns "up to you" if the pie temperature is neither warm or cold', function() {
      assert.equal(iceCreamPosition('luke warm', 'vanilla'), 'up to you');
      assert.equal(iceCreamPosition('ice cold', 'chocolate'), 'up to you');
    });
  });

  suite('#isLeapYear', function() {
    test('returns true if the number is a leap year, otherwise it does not', function() {
      assert.equal(isLeapYear(1904), true);
      assert.equal(isLeapYear(1912), true);
      assert.equal(isLeapYear(1928), true);
      assert.equal(isLeapYear(1936), true);
      assert.equal(isLeapYear(1940), true);
      assert.equal(isLeapYear(1956), true);
      assert.equal(isLeapYear(1964), true);
      assert.equal(isLeapYear(1972), true);
      assert.equal(isLeapYear(1980), true);
      assert.equal(isLeapYear(1996), true);
      assert.equal(isLeapYear(2000), true);
    });

    test('returns false if the number is not a leap year', function() {
      assert.equal(isLeapYear(1900), false);
      assert.equal(isLeapYear(1901), false);
      assert.equal(isLeapYear(2001), false);
    });
  });

  suite('#shout', function() {
    test('converts the argument to uppercase letter', function() {
      assert.equal(shout('whoo hoo'), 'WHOO HOO');
      assert.equal(shout('sOmeTHing'), 'SOMETHING');
    });
  });

  suite('#whisper', function() {
    test("converts the arguemnt to lowercase letters prefixed by 'shhh...'", function() {
      assert.equal(whisper('bAnanA peEl'), 'shhh... banana peel');
      assert.equal(whisper('Tracy Morgan'), 'shhh... tracy morgan');
    });
  });

  suite('#stopAt', function() {
    test('returns the first argument up to the last argument', function() {
      assert.equal(stopAt('check this out now', 'out'), 'check this');
      assert.equal(stopAt('turn on the TV', 'the'), 'turn on');
    });
  });

  suite('#capitalize', function() {
    test('returns the message with the first letter capitalized', function() {
      assert.equal(capitalize('secret bitcoin mine'), 'Secret bitcoin mine');
      assert.equal(capitalize('british football'), 'British football');
    });
  });

  suite('#leftPad5', function() {
    test('returns the argument with padded by spaces if its length is less than 5', function() {
      assert.equal(leftPad5('a'), '    a');
      assert.equal(leftPad5('go'), '   go');
      assert.equal(leftPad5('dog'), '  dog');
      assert.equal(leftPad5('tree'), ' tree');
    });

    test('returns the argument if its length is 5 or more characters', function() {
      assert.equal(leftPad5('socks'), 'socks');
      assert.equal(leftPad5('drawer'), 'drawer');
    });
  });

  suite('#superPicky', function() {
    test("returns 'Thanks! Got it.' if given a string", function() {
      assert.equal(superPicky('hello'), 'Thanks! Got it.');
      assert.equal(superPicky('there'), 'Thanks! Got it.');
    });

    test('returns an error message if given anything other than a string', function() {
      assert.equal(superPicky(1), 'I wanted a string, but all I got was a stinking number');
      assert.equal(superPicky(Math.random()), 'I wanted a string, but all I got was a stinking number');
      assert.equal(superPicky(true), 'I wanted a string, but all I got was a stinking boolean');
      assert.equal(superPicky(false), 'I wanted a string, but all I got was a stinking boolean');
      assert.equal(superPicky(function() {}), 'I wanted a string, but all I got was a stinking function');
      assert.equal(superPicky({}), 'I wanted a string, but all I got was a stinking object');
      assert.equal(superPicky([]), 'I wanted a string, but all I got was a stinking object');
    });
  });

  suite('#calculateTaxRate', function() {
    test('returns a warning if the status is incorrect', function() {
      assert.equal(calculateTaxRate(100, 'separate'), 'Better call an accountant');
      assert.equal(calculateTaxRate(100, 'head of household'), 'Better call an accountant');
    });

    test('returns a warning if the amount is over 74,900', function() {
      assert.equal(calculateTaxRate(74901, 'single'), 'Better call an accountant');
      assert.equal(calculateTaxRate(100000, 'joint'), 'Better call an accountant');
    });

    test('returns the correct tax rate for a single filer', function() {
      assert.equal(calculateTaxRate(1, 'single'), '10%');
      assert.equal(calculateTaxRate(100, 'single'), '10%');
      assert.equal(calculateTaxRate(9225, 'single'), '10%');
      assert.equal(calculateTaxRate(9226, 'single'), '15%');
      assert.equal(calculateTaxRate(15000, 'single'), '15%');
      assert.equal(calculateTaxRate(37450, 'single'), '15%');
    });

    test('returns the correct tax rate for a joint filer', function() {
      assert.equal(calculateTaxRate(1, 'joint'), '10%');
      assert.equal(calculateTaxRate(100, 'joint'), '10%');
      assert.equal(calculateTaxRate(18450, 'joint'), '10%');
      assert.equal(calculateTaxRate(18451, 'joint'), '15%');
      assert.equal(calculateTaxRate(25000, 'joint'), '15%');
      assert.equal(calculateTaxRate(74900, 'joint'), '15%');
    });
  });

  mocha.run();
};
