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
  if (string[0] == "w") {
    wStrings.push(string);
  }
});

console.log(wStrings);

// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var expensiveItems = [];

items.forEach(function (item) {
  if (item.price > 5) {
    expensiveItems.push(item);
  }
});

console.log(expensiveItems);

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

var strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
var shortStrings = [];

strings.forEach(function (string) {
  if (string.length < 4) {
    shortStrings.push(string);
  }
});

console.log(shortStrings);

// Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortNameItems = [];

items.forEach(function (item) {
  if (item.name.length < 6) {
    shortNameItems.push(item);
  }
});

console.log(shortNameItems);

// Start with an array of numbers and create a new array with only the numbers less than 10.
// For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

var numbers = [8, 23, 0, 44, 1980, 3];
var smallNumbers = [];

numbers.forEach(function (number) {
  if (number < 10) {
    smallNumbers.push(number);
  }
});

console.log(smallNumbers);

// Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

var strings = ["big", "little", "good", "bad"];
var notBStrings = [];

strings.forEach(function (string) {
  if (string[0] !== "b") {
    notBStrings.push(string);
  }
});

console.log(notBStrings);
// Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

var cheapItems = [];

items.forEach(function (item) {
  if (item.price < 10) {
    cheapItems.push(item);
  }
});

console.log(cheapItems);

// Start with an array of numbers and create a new array with only the odd numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var numbers = [2, 4, 5, 1, 8, 9, 7];
var oddNumbers = [];

numbers.forEach(function (number) {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
});

console.log(oddNumbers);
