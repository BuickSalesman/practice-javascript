// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

const { get } = require("http");

var pairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var pairsObject = {};
var index = 0;
while (index < pairs.length) {
  var key = pairs[index][0];
  var value = pairs[index][1];
  pairsObject[key] = [value];
  index += 1;
}

console.log(pairsObject);

// Write a method that takes in a number and returns the number times two. Then run the method and print the result.

function getDouble(number) {
  return number * 2;
}

console.log(getDouble(8));

// Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

function makeUpcase(string) {
  return string.toUpperCase();
}

console.log(makeUpcase("yo whaddup"));

// Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

function getDifference(number1, number2) {
  return number1 - number2;
}

console.log(getDifference(5, 4));

// Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

function square(number) {
  return number * number;
}

console.log(square(4));

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

function getFirstLetter(string) {
  return string[0];
}

console.log(getFirstLetter("Yo whaddup"));

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

function combineStrings(string1, string2, string3) {
  return string1 + " " + string2 + " " + string3;
}

console.log(combineStrings("yo", "whaddup", "dawg"));

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

function convertNumberToString(number) {
  return number.toString();
}

console.log(convertNumberToString(8));

// Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

function stringQuintupler(string) {
  return string + string + string + string + string;
}

console.log(stringQuintupler("yo"));

// Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

function findAverage(number1, number2, number3) {
  return (number1 + number2 + number3) / 3;
}

console.log(findAverage(3, 5, 6));

// Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.

function convertNumber(number) {
  return number * 10 + 30;
}

console.log(convertNumber(8));
