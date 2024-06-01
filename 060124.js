// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var firstName = "Adam";
var lastName = "OD";

console.log(firstName + " " + lastName);

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

var firstName = "Adam";
var lastName = "OD";

console.log(`${firstName} ${lastName}`);

// Write a program that asks the user to input a word. If the word is "marco", print "polo".

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // rl.question("Enter a word: ", (word) => {
// //   if (word === "marco") {
// //     console.log("polo");
// //   }
// //   rl.close();
// // });

// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

var color1 = "red";
var color2 = "green";
var color3 = "blue";

console.log("All the colors I hate are " + color1 + ", " + color2 + ", & " + color3 + ".");

// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

var color1 = "red";
var color2 = "green";
var color3 = "blue";

console.log(`All the colors I hate are ${color1}, ${color2}, & ${color3}.`);

// Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

// var name = window.prompt("Please enter your name!");
// if (name !== "Santa") {
//   console.log("You're not Santa!");
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a name: ", (word) => {
//   if (word !== "Santa") {
//     console.log("You're not santa!");
//   }
//   rl.close();
// });

// Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

var title = "Code";
var author = "Charles Petzold";

console.log("The book I am reading right now is " + title + " by " + author + ".");

// Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

var title = "Code";
var author = "Charles Petzold";

console.log(`The book I am reading right now is ${title} by ${author}`);

// Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the password.", (word) => {
//   if (word === "Joshua") {
//     console.log("Shall we play a game?");
//   } else {
//     console.log("Access denied.");
//   }
// });

// Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

var city1 = "Albequerque";
var city2 = "Atlanta";
var city3 = "Philadelphia";

console.log("Three cities that exist are " + city1 + ", " + city2 + ", " + city3 + ".");
