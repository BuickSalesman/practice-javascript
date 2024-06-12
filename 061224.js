// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var thricedNumbers = [];
var index = 0;
while (index < numbers.length) {
  thricedNumbers.push(numbers[index] * 3);
  index++;
}

console.log(thricedNumbers);

// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ["hello", "goodbye"];
var upcasedStrings = [];
var index = 0;

while (index < strings.length) {
  upcasedStrings.push(strings[index].toUpperCase());
  index++;
}

console.log(upcasedStrings);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var names = [];
var index = 0;

while (index < people.length) {
  names.push(people[index].name);
  index++;
}
console.log(names);

// Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [123, 234, 345];
var newNumbers = [];
var index = 0;

while (index < numbers.length) {
  newNumbers.push(numbers[index] + 7);
  index++;
}

console.log(newNumbers);

// Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

var strings = ["hello", "goodbye", "nevermore"];
var stringLengths = [];
var index = 0;

while (index < strings.length) {
  stringLengths.push(strings[index].length);
  index++;
}

console.log(stringLengths);

// Start with an array of hashes and create a new array of number values from each hash's :age key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ages = [];
var index = 0;

while (index < people.length) {
  ages.push(people[index].age);
  index++;
}
console.log(ages);

// Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var numbers = [1, 2, 3];
var dividedNumbers = [];
var index = 0;

while (index < numbers.length) {
  dividedNumbers.push(numbers[index] / 2);
  index++;
}

console.log(dividedNumbers);
