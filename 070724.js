// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

var numbers = [5, 10, 8, 3];
var sum = 0;

numbers.forEach(function (number) {
  sum = sum + number;
});

console.log(sum);

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var strings = ["volleyball", "basketball", "badminton"];
var combinedStrings = "";

strings.forEach(function (string) {
  combinedStrings = combinedStrings + string;
});

console.log(combinedStrings);

// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var totalPrice = 0;

items.forEach(function (item) {
  totalPrice = totalPrice + item.price;
});

console.log(totalPrice);

// Start with an array of numbers and compute the the minumum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [5, 10, 8, 3, 9];
var minimumNumber = numbers[0];

numbers.forEach(function (number) {
  if (number < minimumNumber) {
    minimumNumber = number;
  }
});

console.log(minimumNumber);

// Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

var strings = ["volleyball", "basketball", "badminton"];
stringsLength = 0;

strings.forEach(function (string) {
  stringsLength = stringsLength + string.length;
});

console.log(stringsLength);

// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

cheapestItem = items[0];
minimumPrice = items[0].price;

items.forEach(function (item) {
  if (item.price < minimumPrice) {
    minimumPrice = item.price;
    cheapestItem = item;
  }
});

console.log(cheapestItem);

// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.

var numbers = [5, 10, 8, 3];
var numbersProduct = 1;

numbers.forEach(function (number) {
  numbersProduct *= number;
});

console.log(numbersProduct);

// Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var strings = ["volleyball", "basketball", "badminton"];
var combinedStringsWithDashes = "-";

strings.forEach(function (string) {
  combinedStringsWithDashes = combinedStringsWithDashes + `${string}-`;
});

console.log(combinedStringsWithDashes);

// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortestNameItem = items[0];

items.forEach(function (item) {
  if (item.name.length < shortestNameItem.name.length) {
    shortestNameItem = item;
  }
});

console.log(shortestNameItem);

// Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.

var numbers = [5, 10, 8, 3];
var maximumNumber = numbers[0];

numbers.forEach(function (number) {
  if (number > maximumNumber) {
    maximumNumber = number;
  }
});

console.log(maximumNumber);
