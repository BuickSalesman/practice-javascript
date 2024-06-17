// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

var numbers = [5, 10, 8, 3];
var numberSum = 0;

numbers.forEach(function (number) {
  numberSum = numberSum + number;
});

console.log(numberSum);

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var words = ["volleyball", "basketball", "badminton"];
var combinedWords = "";

words.forEach(function (word) {
  combinedWords = combinedWords + word;
});

// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var things = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

var pricesSum = 0;

things.forEach(function (thing) {
  pricesSum = pricesSum + thing.price;
});

console.log(pricesSum);

// Start with an array of numbers and compute the the minumum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [5, 10, 8, 3, 9];
var smallestNumber = numbers[0];

numbers.forEach(function (number) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
});

console.log(smallestNumber);

// Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

var sports = ["volleyball", "basketball", "badminton"];
var sportsLength = 0;

sports.forEach(function (sport) {
  sportsLength = sportsLength + sport.length;
});

console.log(sportsLength);

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
    lowestPrice = item;
  }
});

console.log(lowestPrice);
