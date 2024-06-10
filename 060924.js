// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var multipliedNumbers = [];
var index = 0;

while (index < numbers.length) {
  multipliedNumbers.push(numbers[index] * 3);
  index++;
}

console.log(multipliedNumbers);
