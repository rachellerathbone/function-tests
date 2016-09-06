// Define a function lengths that takes in one argument.
//     arr (array of strings)
//
// It returns a new array of numbers where each element is the length (number
// of characters) of the corresponding element in the input. For example:
//   lengths(['Kenneth', 'Ian', 'Ryan']) will output [7, 3, 4].
function lengths(arr) {
  return arr.map(function(element) {
    return element.length;
  });
}


// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function max(arr) {
  return arr.reduce(function(result, element) {
    return result > element ? result : element;
  }, -Infinity);
}

// Define a function named filterPassingrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
function filterPassingGrades(grades) {
  return grades.filter(function(element) {
    return element >= 70;
  });
}

// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min(arr) {
  return arr.reduce(function(result, element) {
    return result < element ? result : element;
  }, Infinity);
}

// Define a function named pluck that takes in two arguments.
//     arr (array of objects)
//     key (string)
//
// Return a new array where each element is the keyed value of each object.
//
// For example, given the array:
//    [
//      { name: 'moe', age: 40 },
//      { name: 'larry', age: 50 },
//      { name: 'curly', age: 60 }
//    ]
//
// and the key 'name', then return ['moe', 'larry', 'curly'].
function pluck(arr, key) {
  return arr.reduce(function(result, arr) {
    return result.concat(arr.name);
  }, []);
}

// Define a function onlyEvens which takes in one argument:
//    arr (array of numbers)
//
// It returns an array only containing the numbers that are even. For example,
// given the input, [1, 2, 3, 4, 5], the function would produce [2, 4].
function onlyEvens(arr) {
  return arr.filter(function(element) {
    return element % 2 === 0;
  }, []);
}

// ----------------------------------------------------------------------------
// For the questions below, you will be assuming the results are of the form
// coming from the Yelp API. See the file in this directory called
// yelp_search_results.json for an example API response.
// ----------------------------------------------------------------------------

// Define a function named businessNamesAndRatings, which takes in one argument
//    result (Yelp API search result)
//
// The function will return an array of objects of the following format:
// {
//   name: BUSINESS_NAME,
//   rating: RATING
// }
// The name of the business and the rating will be the same name and rating



// This is definitely an area I need to work on. I solved the first 2 yelp problems
// but wasn't ablt to figure out how to do it using higher order functions.
// Wasn't able to complete the last 2. Got stuck on the aroundMe function and
// ran out of time to do the last one.

function businessNamesAndRatings(result) {
  var arr = [];

  for (var i = 0; i < result.businesses.length; i++) {
    var business = result.businesses[i];
    var businessDetails = {'name' : business.name, 'rating' : business.rating};
    arr.push(businessDetails);
  }
  return arr;
}


// Define a function named averageRating, which takes in one argument:
//    result (Yelp API search result)
//
// The function will return a number, which is the average rating of the
// businesses in the result set. If there are no businesses, return null.
function averageRating(result) {
  var calculateAverage = 0;

  for (var i = 0; i < result.businesses.length; i++) {
    calculateAverage += result.businesses[i].rating;
  }

  if (calculateAverage === 0) {
    return null;
  }

  return calculateAverage / result.businesses.length;
  // if (result.business.length === 0) {
  //   return null;
  // }
  //
  // var sum = result.businesses.reduce(function (preValue, business) {
  //   return preValue + business.rating;
  // }, 0);
  //
  // return sum / result.businesses.length;
}


// Define a function named aroundMe, which takes in two arguments:
//    result     (Yelp API search result)
//    coordinate (object of the following format: {lat: NUMBER, lon: NUMBER})
//
// The function will return an array of businesses who is within 1 mile of your
// coordinate.
//
// NOTE: We have provided a function that computes the distance between two
// earth coordinates (in the format {lat: NUMBER, lon: NUMBER}).
function earthDistance(coord1, coord2) {
  var RADIUS_OF_EARTH = 3961; // miles
  var lat1 = coord1.lat * Math.PI / 180;
  var lat2 = coord2.lat * Math.PI / 180;
  var lon1 = coord1.lon * Math.PI / 180;
  var lon2 = coord2.lon * Math.PI / 180;

  var dlon = lon2 - lon1;
  var dlat = lat2 - lat1;

  var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) *
    Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIUS_OF_EARTH * c;
}

function aroundMe(result, coordinate) {
  var arr = [];
  var myLocation = {'lat' : 47.598962, 'lon' : -122.333799}

  for (var i = 0; i < result.businesses.length; i++) {
    var business = result.businesses[i];
    var businessLocation = {'lat' : business.location.coordinate.latitude, 'lon' : business.location.coordinate.longitude};

    if (earthDistance(myLocation, businessLocation) >= 1) {
      continue;
    }

    arr.push(businessLocation);
  }

  return arr;
  console.log(arr);

}




// Define a function named businessRatingTable, which takes in one argument
//    result (Yelp API search result)
//
// The function will return a table DOM element of the following format:
// <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Rating</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>BUSINESS_NAME</td>
//       <td>RATING</td>
//     </tr>
//     <tr>
//       <td>BUSINESS_NAME</td>
//       <td>RATING</td>
//     </tr>
//     <tr>
//       <td>BUSINESS_NAME</td>
//       <td>RATING</td>
//     </tr>
//     ...
//   </tbody>
// </table>
//
// NOTE: You may use jQuery if you like, but the return type is still a native
// DOM element.
function businessRatingTable(result) {

}
