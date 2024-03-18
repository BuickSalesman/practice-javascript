// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [2, 32, 80, 18, 12, 3];
var smallNumbers = [];
var index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  if (number < 20) {
    smallNumbers.push(number);
  }
  index = index + 1;
}
console.log(smallNumbers);

// Alternative solution with the array .forEach method
var numbers = [2, 32, 80, 18, 12, 3];
var smallNumbers = [];
numbers.forEach(function (number) {
  if (number < 20) {
    smallNumbers.push(number);
  }
});
console.log(smallNumbers);

// Alternative solution with the array .filter method
var numbers = [2, 32, 80, 18, 12, 3];
var smallNumbers = numbers.filter(function (number) {
  return number < 20;
});
console.log(smallNumbers);
