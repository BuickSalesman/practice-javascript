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

// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

var expensiveItems = items.filter(function (item) {
  return item.price > 5;
});

console.log(expensiveItems);

// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var numbers = [2, 4, 5, 1, 8, 9, 7];
var evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

var shortNameItems = items.filter(function (item) {
  return item.name.length < 6;
});

console.log(shortNameItems);

// Start with an array of numbers and create a new array with only the numbers less than 10.
// For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

var numbers = [8, 23, 0, 44, 1980, 3];
var smallNumbers = numbers.filter(function (number) {
  return number < 10;
});

console.log(smallNumbers);
