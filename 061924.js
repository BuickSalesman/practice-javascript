// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

var nestedArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];

var flattenedArray = [];

var index1 = 0;

while (index1 < nestedArray.length) {
  var index2 = 0;
  while (index2 < nestedArray[index1].length) {
    flattenedArray.push(nestedArray[index1][index2]);
    index2++;
  }
  index1++;
}

console.log(flattenedArray);

// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

var letters1 = ["a", "b", "c"];
var letters2 = ["d", "e", "f", "g"];
var combinedLetters = [];

index1 = 0;
while (index1 < letters1.length) {
  index2 = 0;
  while (index2 < letters2.length) {
    combinedLetters.push(letters1[index1] + letters2[index2]);
    index2++;
  }
  index1++;
}

console.log(combinedLetters);

// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
//For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

var letters = ["a", "b", "c", "d", "e"];
var combinedLetters = [];

index1 = 0;

while (index1 < letters.length) {
  index2 = 0;
  while (index2 < letters.length) {
    if (index1 !== index2) {
      combinedLetters.push(letters[index1] + letters[index2]);
    }
    index2++;
  }
  index1++;
}

console.log(combinedLetters);

// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

var numbers = [5, -2, 1, -9, -7, 2, 6];
var largestProduct = numbers[0] * numbers[1];

index1 = 0;

while (index1 < numbers.length) {
  index2 = 0;
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      var product = numbers[index1] * numbers[index2];
      if (product > largestProduct) {
        largestProduct = product;
      }
    }
    index2++;
  }
  index1++;
}
console.log(largestProduct);

// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

var numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];

var sum = 0;

var index1 = 0;

while (index1 < numberPairs.length) {
  var index2 = 0;
  while (index2 < numberPairs[index1].length) {
    sum = sum + numberPairs[index1][index2];
    index2++;
  }
  index1++;
}

console.log(sum);

// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

var numbers1 = [1, 2];
var numbers2 = [6, 7, 8];
var numberSums = [];

index1 = 0;

while (index1 < numbers1.length) {
  var index2 = 0;
  while (index2 < numbers2.length) {
    numberSums.push(numbers1[index1] + numbers2[index2]);
    index2++;
  }

  index1++;
}

console.log(numberSums);
