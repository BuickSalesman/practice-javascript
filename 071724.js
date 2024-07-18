const numbers = [9, 3, 5, 7, 1];
let sortedNumbers = numbers.sort((a, b) => a - b);
let minNumbers = sortedNumbers.slice(0, -1);
let maxNumbers = sortedNumbers.slice(1);
let minSum = minNumbers.reduce((sum, number) => sum + number);
let maxSum = maxNumbers.reduce((sum, number) => sum + number);

console.log(`${minSum} ${maxSum}`);
