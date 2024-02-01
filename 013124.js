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
