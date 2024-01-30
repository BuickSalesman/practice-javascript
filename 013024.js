// Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7.

var age = 17;
var showTime = 13;
var ticketPrice;

if (age <= 12) {
  ticketPrice = 5;
} else if (age >= 13 && <= 59) {
  if (showTime < 18) {
    ticketPrice = 7;
  } else {
    ticketPrice = 10;
  }
} else if (age >= 60) {
  ticketPrice = 7;
}

console.log(ticketPrice)