// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

var numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];

var pairsObject = {};
var index = 0;

while (index < numberPairs.length) {
  var key = numberPairs[index][0];
  var value = numberPairs[index][1];
  pairsObject[key] = value;
  index++;
}

console.log(pairsObject);

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
var letterFrequencies = {};
var index = 0;

while (index < string.length) {
  var letter = string[index];
  if (letterFrequencies[letter] === undefined) {
    letterFrequencies[letter] = 0;
  }
  letterFrequencies[letter]++;
  index++;
}
console.log(letterFrequencies);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

var itemsHash = { chair: 100, book: 14 };
var itemsArray = [];

Object.entries(itemsHash).forEach(function ([name, price]) {
  itemsArray.push(name, price);
});

console.log(itemsArray);
