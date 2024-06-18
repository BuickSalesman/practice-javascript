// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

var words = ["jimmy", "pretty", "ball"];
words.push("hello", "goodbye");
console.log(words);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

var letters = ["a", "b", "c", "d"];
letters[1] = 2;
console.log(letters);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

var numbers = [1];
numbers.push(2, 3, 4);
console.log(numbers);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var strings = ["hello", "basketball", "fish"];
strings[2] = strings[2].toUpperCase();
console.log(strings);

// Create an array to store 3 names. Then print out each name on separate lines with a while loop.

var names = ["adam", "harsh", "kelsey"];
names.forEach(function (name) {
  console.log(name);
});

// Create an array to store 2 strings. Then add one string to the array and print the array on one line.

var strings = ["hello", "goodbye"];
strings.push("farewell");

console.log(strings);

// Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[0] * 10;
console.log(numbers);

// Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

var numbers = [122, 36];
numbers.forEach(function (number) {
  console.log(number);
});

// Create an array to store names of 3 different countries. Then add one more country and print the array one line.

var countries = ["england", "india", "france"];
countries.push("ukraine");
console.log(countries);
