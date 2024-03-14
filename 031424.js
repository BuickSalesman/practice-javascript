// Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

var number = 10;
if (number === 10) {
  console.log(0);
} else {
  console.log(-1);
}

// Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

var number = 3;
if (number < 10) {
  console.log(-1);
} else if (number > 10) {
  console.log(1);
} else {
  console.log(0);
}

// Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

var number1 = 4;
var number2 = 9;
if (number1 < 10 && number2 < 10) {
  console.log(1);
} else {
  console.log(0);
}

// Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.
var powerLevel = 9321;
if (powerLevel > 9000) {
  console.log(1);
} else {
  console.log(-1);
}

// Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

var number = 24;
if (number < 10) {
  console.log(9);
} else if (number < 20) {
  console.log(19);
} else if (number < 30) {
  console.log(29);
} else {
  console.log(-1);
}

// Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

var number1 = 20;
var number2 = 4;
if (number1 > 10 || number2 > 10) {
  console.log(100);
} else {
  console.log(-100);
}
