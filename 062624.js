// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

var letters = ["a", "b", "c", "d"];
var combinedLetters = [];

var index1 = 0;

while (index1 < letters.length) {
  var index2 = 0;

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
var index1 = 0;

while (index1 < numbers.length) {
  var index2 = 0;
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
    number = numberPairs[index1][index2];
    sum = sum + number;

    index2++;
  }

  index1++;
}

console.log(sum);

// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

var array1 = [1, 2];
var array2 = [6, 7, 8];
var index1 = 0;
var arraySums = [];

while (index1 < array1.length) {
  index2 = 0;
  while (index2 < array2.length) {
    arraySums.push(array1[index1] + array2[index2]);

    index2++;
  }
  index1++;
}

console.log(arraySums);

// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

var numbers = [2, 8, 3];
var numberProducts = [];
var index1 = 0;

while (index1 < numbers.length) {
  var index2 = 0;

  while (index2 < numbers.length) {
    numberProducts.push(numbers[index1] * numbers[index2]);

    index2++;
  }

  index1++;
}

console.log(numberProducts);
