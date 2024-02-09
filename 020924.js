// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].
var numbers = [2, 32, 80, 18, 12, 3];
var smallNumbers = numbers.filter(function (number) {
  return number < 20;
});
console.log(smallNumbers);

// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var strings = ["winner", "winner", "chicken", "dinner"];
var wStrings = strings.filter(function (string) {
  return string[0] === "w";
});
console.log(wStrings);
