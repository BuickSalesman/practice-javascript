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
  combinedStrings += string;
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
  totalPrice += item.price;
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

var sports = ["volleyball", "basketball", "badminton"];
var length = 0;

sports.forEach(function (sport) {
  length += sport.length;
});

console.log(length);

// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

var lowestPrice = items[0].price;

items.forEach(function (item) {
  if (item.price < lowestPrice) {
    lowestPrice = item.price;
  }
});

console.log(lowestPrice);

// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.

var numbers = [5, 10, 3, 8];
var product = 1;

numbers.forEach(function (number) {
  product = product * number;
});

console.log(product);

// Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

var sports = ["volleyball", "basketball", "badminton"];
var sportsWithDashes = "-";

sports.forEach(function (sport) {
  sportsWithDashes += sport + "-";
});

console.log(sportsWithDashes);
