// Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7.

var age = 50;
var time = 12;
var ticketPrice;

if (age <= 12) {
  ticketPrice = 5;
} else if (age >= 13 && age <= 59) {
  if (time < 18) {
    ticketPrice = 7;
  } else {
    ticketPrice = 10;
  }
} else if (age >= 60) {
  ticketPrice = 7;
}

console.log(`Ticket price: $${ticketPrice}`);

// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [2, 32, 80, 18, 12, 3];
var smallNumbers = [];

numbers.forEach(function (number) {
  if (number < 20) {
    smallNumbers.push(number);
  }
});

console.log(smallNumbers);

// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var strings = ["winner", "winner", "chicken", "dinner"];
var wStrings = [];

strings.forEach(function (string) {
  if (string[0] === "w") {
    wStrings.push(string);
  }
});

console.log(wStrings);

// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var numbers = [2, 4, 5, 1, 8, 9, 7];
var evenNumbers = [];

numbers.forEach(function (number) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log(evenNumbers);

// Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var words = ["a", "man", "a", "plan", "a", "canal", "panama"];
var shortWords = words.filter(function (word) {
  return word.length < 4;
});

console.log(shortWords);

// Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var things = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

var shortNamedThings = things.filter(function (thing) {
  return thing.name.length < 6;
});

console.log(shortNamedThings);

// Start with an array of numbers and create a new array with only the numbers less than 10.
// For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

var numbers = [8, 23, 0, 44, 1980, 3];
var smallNumbers = numbers.filter(function (number) {
  return number < 10;
});

console.log(smallNumbers);
