// So now that we can see functions be treated like any other data type, we can
// think of new ways to represent data. This bonus will allow you to think of
// a situation where a function helps describe data in a way that no other data
// type can accurately and simply describe it.
//
// Let's talk about sets. Sets are a common structure in both mathematics and
// programming. Sets have the following properties:
//   * Sets can contain anything.
//   * Sets do not contain duplicates.
//   * Sets do not need to have a order.
//
// Often sets are represented in math as a comma separated list between curly
// braces ({}). Here are some example sets:
//
//    {1, 3, 2}
//    {'John', 'Paul', 'George', 'Ringo'}
//    {true, 'hello', 4}
//    {} (often called the null set).
//
// What are some things we can with sets? Many things!
//   * hasItem(set, item)        - check if an item is in the set
//   * addItem(set, item)        - add an item to the set
//   * intersection(set1, set2)  - returns the intersection of two sets, that
//                                 is, a new set where the elements are both in
//                                 set1 and set2. For example: the intersection
//                                 of {1, 2, 3} and {2, 4, 6} is {2}.
//   * union(set1, set2)         - returns the union of two sets, that is, a new
//                                 set where the elements are either in set1 or
//                                 set2. For example: the union of {1, 2, 3} and
//                                 {2, 4, 6} is {1, 2, 3, 4, 6}. Note that there
//                                 are no duplicates.
//   * difference(set1, set2)    - returns the difference of two sets, that
//                                 is, a new set where the elements are in set1
//                                 but not in set2. For example: the difference
//                                 of {1, 2, 3} and {2, 4, 6} is {1, 3}. Note
//                                 that 4 and 6 do not get included.
//
// Representing the sets above can be done with arrays. They both are
// collections of items, and we can add the additional properties of uniqueness
// (ie no duplicates). Try implementing the above functions using arrays. Even
// ES6 is offering an included Set class.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//
// The example sets above are examples of _finite_ sets because they have a set
// number of elements. We can also have _infinite_ sets where there are an
// infinite number elements in the set. Here are some examples:
//
// {0, 1, 2, 3, ...} The set of natural numbers (positive numbers and 0).
// {2, 4, 6, 8, ...} The set of positive even integers.
// {'a', 'aa', 'aaa', 'ab', ...} The set of strings that begin with 'a'.
//
// Using an array to represent these types of sets is difficult, because we are
// unable to write an array infinitely long. I propose we use functions instead.
// Here is my data definition:
//
// A Set is a function that takes in one argument item (any item). When the
// function is invoked with an item as its argument. It returns true if the item
// is in the set and false if not.
//
// Here's how we would represent the sets above.
//
// The set of natural numbers (positive numbers and 0).
// var naturalNumbers = function (item) {
//   return Number.isInteger(item) && item >= 0;
// };
//
// The set of positive even integers.
// var positiveEvenNumbers = function (item) {
//   return Number.isInteger(item) && item > 0 && item % 2 === 0;
// };
//
// The set of strings that begin with 'a'.
// var stringsThatStartWithA = function (item) {
//   return typeof item === 'string' && item[0] === 'a';
// };
//
// When we invoke each function with an item, the function is returning true if
// the item is in the set. For example. positiveEvenNumbers(2) returns true
// whereas positiveEvenNumbers(3) returns false. This applies for even bigger
// numbers.
//
// Given how we represent sets. How can we write the functions we can do on
// sets?
//
//
// Define a function named hasItem, which takes in two arguments:
//   set  (a Set)
//   anItem (any item)
//
// The function returns true if the set contains an item, false otherwise.



// Define a function named addItem, which takes in two arguments:
//   set  (a Set)
//   anItem (any item)
//
// The function returns a Set that contains all the items in set as well as
// anItem.



// Define a function named intersection, which takes in two arguments:
//   set1  (a Set)
//   set2  (a Set)
//
// The function returns a Set that contains all the items that are both in set1
// AND set2.


// Define a function named union, which takes in two arguments:
//   set1  (a Set)
//   set2  (a Set)
//
// The function returns a Set that contains all the items that are either in
// set1 OR set2.


// Define a function named difference, which takes in two arguments:
//   set1  (a Set)
//   set2  (a Set)
//
// The function returns a Set that contains all the items that are in set1 that
// are NOT in set2.
