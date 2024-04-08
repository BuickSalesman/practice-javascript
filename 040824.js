// Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

var words = ["big", "little", "good", "bad"];
var nonBWords = [];
var index = 0;
while (index < words.length) {
  if (words[index][0] !== "b") {
    nonBWords.push(words[index]);
  }
  index = index + 1;
}
console.log(nonBWords);

// Alternative solution with the array .forEach method
var words = ["big", "little", "good", "bad"];
var nonBWords = [];
words.forEach(function (word) {
  if (word[0] !== "b") {
    nonBWords.push(word);
  }
});
console.log(nonBWords);

// Alternative solution with the array .filter method
var words = ["big", "little", "good", "bad"];
var nonBWords = words.filter(function (word) {
  return word[0] !== "b";
});
console.log(nonBWords);
