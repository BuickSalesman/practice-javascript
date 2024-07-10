// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

var numberPairs = [
  [1, 3], // 1
  [8, 9], // 5
  [2, 16], // 2
  [2, 6],
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
