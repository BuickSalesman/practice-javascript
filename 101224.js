// 1. Reverse a String
// Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
  // Your code here
  let characters = str.split("");
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += characters[i];
  }
  return reverse;
}
console.log(reverseString("hello")); // "olleh"

// 2. Palindrome Check
// Write a function that checks if a given string is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
  // Your code here
  let characters = str.split("");
  let index1 = 0;
  let index2 = characters.length - 1;

  for (index1; index1 < characters.length; index1++) {
    for (index2; index2 >= 0; index2--) {
      if (characters[index1] === characters[index2]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

// 3. Find the Largest Number in an Array
// Write a function that takes an array of numbers and returns the largest number.

function findLargest(arr) {
  // Your code here
  let largestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}
console.log(findLargest([1, 5, 3, 9, 11, 2])); // 9

// 4. FizzBuzz
// Write a function that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  // Your code here

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// 5. Sum of an Array
// Write a function that takes an array of numbers and returns the sum of all the numbers.

function sumArray(arr) {
  // Your code here
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  return totalSum;
}
console.log(sumArray([1, 2, 3, 4])); // 10

// 6. Factorial Calculation
// Write a function that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers less than or equal to n.

function factorial(n) {
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(5)); // 120

// 7. Remove Duplicates from an Array
// Write a function that removes all duplicates from an array.

function removeDuplicates(arr) {
  // Your code here
  let noDuplicatesArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < noDuplicatesArr.length; j++) {
      if (arr[i] === noDuplicatesArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      noDuplicatesArr.push(arr[i]);
    }
  }

  return noDuplicatesArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 8. Find Missing Number in a Sequence
// Write a function that takes an array of numbers (1 to n) with one missing number and returns the missing number.

function findMissingNumber(arr, n) {
  // Your code here
  let missingNumber = undefined;
  for (let i = 1; i <= n; i++) {
    if (i !== arr[i - 1]) {
      missingNumber = i;
      break;
    }
  }
  return missingNumber;
}
console.log(findMissingNumber([1, 2, 3, 5, 6, 7], 7)); // 3

// 9. Flatten a 2D Array
// Write a function that flattens a 2D array (an array of arrays) into a 1D array.

function flattenArray(arr) {
  // Your code here
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattenedArray.push(arr[i][j]);
    }
  }
  return flattenedArray;
}
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]

// 10. Count the Vowels in a String
// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  let characters = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (characters[i] === vowels[j]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}
console.log(countVowels("hello world")); // 3
