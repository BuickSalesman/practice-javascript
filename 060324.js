// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

var words = ["hello", "goodbye", "aloha"];
words.push("tag", "bonjour");
console.log(words);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

var letters = ["a", "b", "c", "d"];
letters[1] = 2;
console.log(letters);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

var numbers = [1, 2, 3, 4, 5];
var index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}

// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

var nums = [1];
nums.push(2, 3, 4);
console.log(nums);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var letters = ["aaaaa", "bbbbb", "ccccc"];
letters[2] = letters[2].toUpperCase();
console.log(letters);

// Create an array to store 3 names. Then print out each name on separate lines with a while loop.

var names = ["adam", "kelsey", "jakey"];
var index = 0;
while (index < names.length) {
  console.log(names[index]);
  index++;
}

// Create an array to store 2 strings. Then add one string to the array and print the array on one line.

var strings = ["timbuktoo", "whaddyagondo"];
strings.push("kalamazoo");
console.log(strings);

// Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[0] * 10;
console.log(numbers);

// Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

var numbers = [10, 26];
index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}

// Create an array to store names of 3 different countries. Then add one more country and print the array one line.

var countries = ["murca", "mehco", "gauadalajada"];
countries.push("brazil");
console.log(countries);
