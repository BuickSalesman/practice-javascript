// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 2. Find the Maximum Number
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 7, 2, 9, 12]));

// 3. Count Vowels in a String
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("javascript"));

// 4. FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
  }
}
fizzBuzz();

// 5. Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 6. Sum of an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// 7. Palindrome Check
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// 8. Factorial Calculation
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

// 9. Find the Longest Word in a Sentence
function longestWord(sentence) {
  return sentence.split(" ").reduce((longest, word) => (word.length > longest.length ? word : longest), "");
}
console.log(longestWord("The quick brown fox jumped over the lazy dog"));

// 10. Capitalize the First Letter of Each Word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
console.log(capitalizeWords("hello world! this is javascript"));
