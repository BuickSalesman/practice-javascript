// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

var numbers = [5, -2, 1, -9, -7, 2, 6];
var maximumProduct = [];
var index1 = 0;

while (index1 < numbers.length) {
  var index2 = 0;
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      var product = numbers[index1] * numbers[index2];
      if (product > maximumProduct) {
        maximumProduct = product;
      }
    }
    index2++;
  }
  index1++;
}

console.log(maximumProduct);

// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

var nestedNumbers = [
  [1, 3],
  [8, 9],
  [2, 16],
];

var sum = 0;
var index1 = 0;

while (index1 < nestedNumbers.length) {
  var index2 = 0;
  while (index2 < nestedNumbers[index1].length) {
    sum = sum + nestedNumbers[index1][index2];
    index2++;
  }
  index1++;
}

console.log(sum);

// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

var arr1 = [1, 2];
var arr2 = [6, 7, 8];
var arr3 = [];

var index1 = 0;
while (index1 < arr1.length) {
  var index2 = 0;
  while (index2 < arr2.length) {
    arr3.push(arr1[index1] + arr2[index2]);
    index2++;
  }
  index1++;
}

console.log(arr3);
