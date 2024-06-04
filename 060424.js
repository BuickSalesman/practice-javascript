// Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7.

var age = 24;
var movieTime = 11;
var ticketPrice = 0;

if (age <= 12) {
  ticketPrice = 5;
} else if (age >= 13 && age <= 59) {
  if (movieTime < 18) {
    ticketPrice = 7;
  } else {
    ticketPrice = 10;
  }
} else if (age >= 60) {
  ticketPrice = 7;
}

console.log(`Ticket price: $${ticketPrice}`);

// Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

// If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
// If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
// If the book is a reference book, there is no fine, regardless of the number of days overdue.
// If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.

var bookType = "reference";
var daysOverdue = 12;
var fine = 0;

if (bookType === "regular") {
  if (daysOverdue <= 7) {
    fine = 1 * daysOverdue;
  } else {
    fine = 2 * daysOverdue;
  }
} else if (bookType === "reference") {
  fine = 0 * daysOverdue;
} else if (bookType === "special collection") {
  fine = 5 * daysOverdue;
}

console.log(`Fine: $${fine}`);

// Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

// If the total order value is less than $50, there is no discount.
// If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
// If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

var orderValue = 69;
var membershipLevel = "premium";
var discount = 0;

if (orderValue < 50) {
  discount = 0;
} else if (orderValue >= 50 && orderValue <= 100) {
  if (membershipLevel === "regular") {
    discount = orderValue * 0.05;
  } else if (membershipLevel === "premium") {
    discount = orderValue * 0.1;
  }
} else if (orderValue > 100) {
  if (membershipLevel === "regular") {
    discount = orderValue * 0.1;
  } else if (membershipLevel === "premium") {
    discount = orderValue * 0.15;
  }
}

orderValue = orderValue - discount;

console.log(`Order total is $${orderValue}`);
