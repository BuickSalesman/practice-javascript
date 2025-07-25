// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

var word = "bookkeeper";
var letterFrequencies = {};
var index = 0;
while (index < word.length) {
    var letter = word[index];
    if (letterFrequencies[letter] === undefined) {
        letterFrequencies[letter] = 0;
    }
    letterFrequencies[letter] += 1;
    index += 1;
}
console.log(letterFrequencies);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

var things = { chair: 100, book: 14 };
var namePricePairs = [];
Object.entries(things).forEach(function([name, price]) {
    namePricePairs.push(name, price);
});
console.log(namePricePairs);
