// Write a while loop to print the numbers 1 through 10.

var number = 1;
while (number <= 10) {
  console.log(number);
  number = number + 1;
}

// Write a while loop that prints the word "hello" 5 times.

var count = 0;
while (count < 5) {
  console.log("hello");
  count = count + 1;
}

// Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

while (true) {
  var input = window.prompt("Enter a word: ");
  if (input === "stop") {
    break;
  }
}

// Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

var number = 0;
while (number <= 100) {
  console.log(number);
  number = number + 5;
}

// Write a while loop that prints the number 9000 ten times.

var count = 0;
while (count < 10) {
  console.log(9000);
  count = count + 1;
}

// Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.
while (true) {
  var input = window.prompt("Enter a number: ");
  if (parseInt(input) > 10) {
    break;
  }
}

// Write a while loop that prints the numbers 50 to 70.
var number = 50;
while (number <= 70) {
  console.log(number);
  number = number + 1;
}
