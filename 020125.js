// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

var numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var flattenedNumbers = [];
var index1 = 0;

while (index1 < numberPairs.length) {
  var index2 = 0;
  while (index2 < numberPairs[index1].length) {
    flattenedNumbers.push(numberPairs[index1][index2]);
    index2++;
  }
  index1++;
}

console.log(flattenedNumbers);

// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

var letterArray1 = ["a", "b", "c"];
var letterArray2 = ["d", "e", "f", "g"];
var combinedLetterArray = [];
var index1 = 0;

while (index1 < letterArray1.length) {
  var index2 = 0;
  while (index2 < letterArray2.length) {
    combinedLetterArray.push(letterArray1[index1] + letterArray2[index2]);
    index2++;
  }
  index1++;
}

console.log(combinedLetterArray);

// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

var letterArray = ["a", "b", "c", "d"];
var combinedLetterArray = [];
var index1 = 0;

while (index1 < letterArray.length) {
  var index2 = 0;
  while (index2 < letterArray.length) {
    if (letterArray[index1] !== letterArray[index2]) {
      combinedLetterArray.push(letterArray[index1] + letterArray[index2]);
    }
    index2++;
  }
  index1++;
}

console.log(combinedLetterArray);

// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

var numberArray = [5, -2, 1, -9, -7, 2, 6];
var largestProduct = 1;
var index1 = 0;

while (index1 < numberArray.length) {
  var index2 = 0;
  while (index2 < numberArray.length) {
    if (numberArray[index1] !== numberArray[index2]) {
      var product = numberArray[index1] * numberArray[index2];
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

var numberArray1 = [1, 2];
var numberArray2 = [6, 7, 8];
var summatedNumberArrays = [];
var index1 = 0;

while (index1 < numberArray1.length) {
  var index2 = 0;
  while (index2 < numberArray2.length) {
    summatedNumberArrays.push(numberArray1[index1] + numberArray2[index2]);
    index2++;
  }

  index1++;
}

console.log(summatedNumberArrays);

// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

var numberArray = [2, 8, 3];
var productArray = [];
var index1 = 0;

while (index1 < numberArray.length) {
  var index2 = 0;
  while (index2 < numberArray.length) {
    productArray.push(numberArray[index1] * numberArray[index2]);
    index2++;
  }

  index1++;
}

console.log(productArray);

// Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.

var numberArray = [1, 8, 3, 10];
var largestSum = 0;
var index1 = 0;

while (index1 < numberArray.length) {
  var index2 = 0;
  while (index2 < numberArray.length) {
    if (numberArray[index1] !== numberArray[index2]) {
      var sum = numberArray[index1] + numberArray[index2];
      if (sum > largestSum) {
        largestSum = sum;
      }
    }
    index2++;
  }

  index1++;
}

console.log(largestSum);

// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

var numberArray = [2, 3, 5, 1, 0, 8, 11];
var equalToTenArray = false;
var index1 = 0;

outerLoop: while (index1 < numberArray.length) {
  var index2 = 0;
  while (index2 < numberArray.length) {
    if (numberArray[index1] !== numberArray[index2]) {
      if (numberArray[index1] + numberArray[index2] === 10) {
        equalToTenArray = [numberArray[index1], numberArray[index2]];
        break outerLoop;
      }
    }
    index2++;
  }

  index1++;
}

console.log(equalToTenArray);
