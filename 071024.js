// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

var items = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];

var itemsObject = {};
var index = 0;

while (index < items.length) {
  itemsObject[items[index].id] = items[index];
  index++;
}

console.log(itemsObject);

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

var string = "bookkeeper";
var stringObject = {};
var index = 0;

while (index < string.length) {
  var letter = string[index];
  if (stringObject[letter] === undefined) {
    stringObject[letter] = 0;
  }

  stringObject[letter]++;
  index++;
}

console.log(stringObject);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

var items = { chair: 100, book: 14 };
var itemsArray = [];

Object.entries(items).forEach(function ([name, price]) {
  itemsArray.push(name, price);
});

console.log(itemsArray);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

var people = { 321: { name: "Alice", age: 31 }, 322: { name: "Maria", age: 27 } };
var peopleArray = [];

Object.entries(people).forEach(function ([id, person]) {
  person.id = parseInt(id);
  peopleArray.push(person);
});

console.log(peopleArray);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

var stringArray = ["do", "or", "do", "not"];
var stringObject = {};
var index = 0;

while (index < stringArray.length) {
  var word = stringArray[index];
  if (stringObject[word] === undefined) {
    stringObject[word] = 0;
  }
  stringObject[word]++;

  index++;
}

console.log(stringObject);
// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

var lettersObject = { a: 1, b: 2, c: 3, d: 4 };
var lettersArray = [];

Object.entries(lettersObject).forEach(function ([letter, number]) {
  lettersArray.push(letter, number);
});

console.log(lettersArray);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

var nameAndPriceObject = { chair: 75, book: 15 };
var nameColorAndWeightArray = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];
var combinedObject = {};

var index = 0;

while (index < nameColorAndWeightArray.length) {
  var item = nameColorAndWeightArray[index];
  var name = item.name;
  var color = item.color;
  var weight = item.weight;
  var price = nameAndPriceObject[name];
  combinedObject[name] = { price: price, color: color, weight: weight };
  index++;
}

console.log(combinedObject);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.
