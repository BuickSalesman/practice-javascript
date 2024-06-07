// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

var nestedNumbers = [
  [1, 3],
  [8, 9],
  [2, 16],
];

var numbers = [];
var index1 = 0;

while (index1 < nestedNumbers.length) {
  var index2 = 0;
  while (index2 < nestedNumbers[index1].length) {
    numbers.push(nestedNumbers[index1][index2]);
    index2++;
  }

  index1++;
}

console.log(numbers);

// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

var letters1 = ["a", "b", "c"];
var letters2 = ["d", "e", "f", "g"];
var combinedLetters = [];
index1 = 0;

while (index1 < letters1.length) {
  var index2 = 0;
  while (index2 < letters2.length) {
    combinedLetters.push(letters1[index1] + letters2[index2]);
    index2++;
  }
  index1++;
}

console.log(combinedLetters);

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
