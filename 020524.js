// Use a nested loop to convert an array of string arrays into a single string.
// For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

var nestedWords = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
var combinedWord = "";
var index1 = 0;
while (index1 < nestedWords.length) {
  var index2 = 0;
  while (index2 < nestedWords[index1].length) {
    combinedWord = combinedWord + nestedWords[index1][index2];
    index2 = index2 + 1;
  }
  index1 = index1 + 1;
}
console.log(combinedWord);

// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

var numbers = [2, 5, 3, 1, 0, 7, 11];
var result = false;
var index1 = 0;
while (index1 < numbers.length) {
  var currentNumber = numbers[index1];
  var index2 = 0;
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      var otherNumber = numbers[index2];
      if (currentNumber + otherNumber == 10 && result === false) {
        result = [currentNumber, otherNumber];
      }
    }
    index2 += 1;
  }
  index1 += 1;
}
console.log(result);
