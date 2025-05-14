// Use recursion to write a function that accepts and array of numbers and returns a new array containing just the even numbers.

let arr = [3, 6, 8, 3, 1, 22, 57, 34];

function getEven(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr[0] % 2 === 0) {
    return [arr[0]].concat(getEven(arr.slice(1)));
  } else {
    return getEven(arr.slice(1));
  }
}

console.log(getEven(arr));

// A particular numerical sequence is known as triangular numbers. The pattern begins as 1, 3, 6, 10, 15, 21, and continues onward. To calculate the next number in the sequence, we add the previous number from the sequence plus N, where N corresponds to the place in the sequence where the number lies. For example, the seventh number in the sequence is 28, since it’s the seventh number in the pattern, so we add the number 7 plus 21 (the previous number in the sequence). Write a function that accepts a number for N and returns the correct number from the series; that is, if the function was passed the number 7, the function would return 28.

let n = 7;

function triangleNumber(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + triangleNumber(n - 1);
  }
}

console.log(triangleNumber(n));

// Use recursion to write a function that accepts a string and returns the first index that contains the character “x”. For example, the string, "abcdefghijklmnopqrstuvwxyz" has an “x” at index 23. To keep things simple, assume the string definitely has at least one “x”.

// This problem is known as the unique paths problem. Let’s say you have a grid of rows and columns. Write a function that accepts a number of rows and a number of columns and calculates the number of possible “shortest” paths from the upper-leftmost square to the lower-rightmost square.
