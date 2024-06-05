// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [2, 32, 80, 18, 12, 3];
var smallNumbers = [];
index = 0;

while (index < numbers.length) {
  if (numbers[index] < 20) {
    smallNumbers.push(numbers[index]);
  }
  index++;
}

console.log(smallNumbers);

// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var words = ["winner", "winner", "chicken", "dinner"];
var wWords = [];
var index = 0;

while (index < words.length) {
  if (words[index][0] === "w") {
    wWords.push(words[index]);
  }
  index++;
}

console.log(wWords);

// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

var expensiveItems = [];
var index = 0;

while (index < items.length) {
  if (items[index].price > 5) {
    expensiveItems.push(items[index]);
  }
  index++;
}

console.log(expensiveItems);

// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var numbers = [2, 4, 5, 1, 8, 9, 7];
var evenNumbers = [];
var index = 0;

while (index < numbers.length) {
  if (numbers[index] % 2 === 0) {
    evenNumbers.push(numbers[index]);
  }
  index++;
}

console.log(evenNumbers);

// Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
var shortStrings = [];
index = 0;

while (index < strings.length) {
  if (strings[index].length < 4) {
    shortStrings.push(strings[index]);
  }
  index++;
}

console.log(shortStrings);
