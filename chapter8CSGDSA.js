//1) Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two arrays. The intersection of [1,2,3,4,5] and [0,2,4,6,8] is [2,4]. Your function should have a complexity of O(N).

const array1 = [1, 2, 3, 4, 5];
const array2 = [0, 2, 4, 6, 8];

function getIntersection(array1, array2) {
  let intersection = [];
  const hashTable = {};

  array1.forEach((value) => {
    hashTable[value] = true;
  });

  array2.forEach((value) => {
    if (hashTable[value]) {
      intersection.push(value);
    }
  });

  return intersection;
}

console.log(getIntersection(array1, array2));

//2) Write a function that accepts an array of strings and returns the first duplicate value it finds. If the array is ["a", "b", "c", "d", "c", "e", "f"], it should return "c", since it's duplicated within the array. Assume there is only 1 pair of duplicates within the array. Your function should have an efficiency of O(N).

const array = ["a", "b", "c", "d", "c", "e", "f"];

function findDuplicateValue(array) {
  let duplicate = "";
  let hashTable = {};

  array.forEach((value) => {
    if (!hashTable[value]) {
      hashTable[value] = true;
    } else {
      duplicate = value;
    }
  });
  return duplicate;
}

console.log(findDuplicateValue(array));

// below is best case

// function findDuplicateValue(array) {
//   let hashTable = {};

//   for (let value of array) {
//     if (hashTable[value]) return value;
//     hashTable[value] = true;
//   }
// }

//3) Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter. The string "the quick brown box jumps over a lazy dog", contains all letters of the alphabet except the letter "f". The function should have a time complexity of O(N).

const string = "the quick brown box jumps over a lazy dog";

function findMissingLetter(string) {
  const hashTable = {};
  for (const letter of string) {
    hashTable[letter] = true;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const letter of alphabet) {
    if (!hashTable[letter]) {
      return letter;
    }
  }

  return null;
}

console.log(findMissingLetter(string));

//4) Write a function that returns the first non-duplicated character in a string. The string "minimum" has two characters that only exist once - the "n" and the "u", so your function should return "n", since it occured first. The functions should have an efficiency of O(N).

const str = "minimum";

function firstNonDuplicate(str) {
  const hashTable = {};

  for (const letter of str) {
    if (hashTable[letter]) {
      hashTable[letter]++;
    } else {
      hashTable[letter] = 1;
    }
  }

  for (const letter of str) {
    if (hashTable[letter] === 1) {
      return letter;
    }
  }

  return null;
}

console.log(firstNonDuplicate(str));
