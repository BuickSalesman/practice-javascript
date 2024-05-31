// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

var numbers = [5, 10, 11, 3];
var sum = 0;
var index = 0;
while (index < numbers.length) {
  sum = sum + numbers[index];
  index = index + 1;
}

console.log(sum);

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var words = ["ball", "taco", "bacon"];
var newword = "";
var index = 0;
while (index < words.length) {
  newword = newword + words[index];
  index = index + 1;
}
console.log(newword);

// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var objects = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

var totalPrice = 0;
var index = 0;

while (index < objects.length) {
  totalPrice += objects[index].price;
  index++;
}
console.log(totalPrice);

// Start with an array of numbers and compute the the minumum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

var numbers = [5, 10, 8, 3, 9, 1, 0.2];

var minimum = numbers[0];
var index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  if (number < minimum) {
    minimum = number;
  }
  index++;
}
console.log(minimum);

// Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

var words = ["volleyball", "basketball", "badminton"];
var totalLength = 0;
var index = 0;

while (index < words.length) {
  totalLength += words[index].length;
  index++;
}

console.log(totalLength);

// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

var objects = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var index = 0;
var lowestPrice = objects[index];

while (index < objects.length) {
  var object = objects[index];
  if (object.price < lowestPrice.price) {
    lowestPrice = object;
  }
  index++;
}
console.log(lowestPrice);
