// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

var arr = [1, 3, 4, 5, 4, 4, 3, 1];

function migratoryBirds(arr) {
  var sightings = {};

  //loop through, add the first occurence of a bird to sightings object
  //on second iteration, we are going to check if it is 1(first iteration) (if 1 add counter to 1) or if we need to add 2 to the object
  //after the full loop, we check what sighting(key) has highest value
  //if it's a tie, we return the lowest key

  arr.forEach(function (bird) {
    if (sightings[bird]) {
      sightings[bird] += 1;
    } else {
      sightings[bird] = 1;
    }
  });

  console.log(sightings);
}

migratoryBirds(arr);
