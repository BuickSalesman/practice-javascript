// Write a method that takes in a number and returns the number times two. Then run the method and print the result.

const { get } = require("http");

function getDouble(number) {
  return number * 2;
}

console.log(getDouble(8));

// Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

function makeStringUpperCase(string) {
  return string.toUpperCase();
}

console.log(makeStringUpperCase("hello"));

// Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

function subtractTwoNumbers(number1, number2) {
  return number1 - number2;
}

console.log(subtractTwoNumbers(6, 2));

// Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

function squareNumber(number) {
  return number * number;
}

console.log(squareNumber(8));

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

function getFirstLetter(string) {
  return string[0];
}

console.log(getFirstLetter("letter"));

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

function stringCombinatorinator(string1, string2, string3) {
  return `${string1} ${string2} ${string3}`;
}

console.log(stringCombinatorinator("hello", "im", "kanye"));

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

function numberToString(number) {
  return number.toString();
}

console.log(numberToString(5));

// Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

function stringQuintupler(string) {
  return string.repeat(5);
}

console.log(stringQuintupler("hello"));

// Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

function getAverage(number1, number2, number3) {
  return (number1 + number2 + number3) / 3;
}

console.log(getAverage(33, 444, 2));

// Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.

function doSomeMath(number) {
  return number * 10 + 30;
}

console.log(doSomeMath(3));
