// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

let numArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];

let res1 = [];

for (const array of numArray) {
  for (const i of array) {
    res1.push(i);
  }
}

console.log(res1);

// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

let letters1 = ["a", "b", "c"];
let letters2 = ["d", "e", "f", "g"];
let res2 = [];

for (const letter1 of letters1) {
  for (const letter2 of letters2) {
    res2.push(letter1 + letter2);
  }
}

console.log(res2);

// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

let letters3 = ["a", "b", "c", "d"];
let res3 = [];

for (const i of letters3) {
  for (const j of letters3) {
    if (i !== j) {
      res3.push(i + j);
    }
  }
}

console.log(res3);

// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

let numArray2 = [5, -2, 1, -9, -7, 2, 6];
let largestProduct = numArray2[0];

for (let i of numArray2) {
  for (let j of numArray2) {
    let product = i * j;
    if (product > largestProduct && i !== j) {
      largestProduct = product;
    }
  }
}

console.log(largestProduct);

// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

let arrayArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];

let sum = 0;

for (const array of arrayArray) {
  for (const num of array) {
    sum += num;
  }
}

console.log(sum);

// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

let nums1 = [1, 2];
let nums2 = [6, 7, 8];
let nums3 = [];

for (const i of nums1) {
  for (const j of nums2) {
    nums3.push(i + j);
  }
}

console.log(nums3);

// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

let nums4 = [2, 8, 3];
let numProducts = [];

for (const i of nums4) {
  for (const j of nums4) {
    numProducts.push(i * j);
  }
}

console.log(numProducts);

// Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.

let nums5 = [1, 8, 3, 10];
let sum2 = 0;

for (let i = 0; i < nums5.length - 1; i++) {
  for (let j = i + 1; j < nums5.length; j++) {
    if (nums5[i] + nums5[j] > sum2) {
      sum2 = nums5[i] + nums5[j];
    }
  }
}

console.log(sum2);

// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

let nums6 = [2, 5, 3, 1, 0, 7, 11, 6, 4];
let target = 10;
let resPair = [];
let found = false;

for (let i = 0; i < nums6.length - 1; i++) {
  for (let j = i + 1; j < nums6.length; j++) {
    if (nums6[i] + nums6[j] === target) {
      resPair.push(nums6[i], nums6[j]);
      found = true;
      break;
    }
  }
  if (found) break;
}

if (resPair[0] === undefined) {
  console.log(false);
} else {
  console.log(resPair);
}
