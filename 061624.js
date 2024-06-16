// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

var person = { firstName: "Richard", lastName: "Sookram", email: "none" };

console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var people = [
  { firstName: "Jacob", lastName: "Baker" },
  { firstName: "Kelsey", lastName: "Kavanagh" },
  { firstName: "Adam", lastName: "O'Donnell" },
];

console.log(people[0]);

// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

var menu = { burger: 5, soda: 2, smoothie: 4 };
menu["salad"] = 4;
console.log(menu);

// Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

var book = { title: "CODE", author: "Charles Petzold", numberOfPages: 568, language: "English" };

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);
console.log(book.language);

// Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

var books = [
  { title: "book1", author: "Fred" },
  { title: "The Best Book", author: "Tommy" },
  { title: "Book of Books", author: "Author of Authors" },
];

console.log(books[2].author);

// Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the

var capitals = { Missouri: "Jefferson City", Georgia: "Atlanta", California: "Sacremento" };
capitals["Hawaii"] = "Honolulu";
console.log(capitals);

// Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

var laptop = { brand: "Apple", model: "MacBook Air", year: 2024 };
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

// Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

var laptops = [
  { brand: "Apple", model: "MacBook Air" },
  { brand: "Lenovo", model: "Shitty Laptop" },
  { brand: "HP", model: "SuperHPSupreme" },
];

console.log(laptops[1].model);

// Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

var definitions = { portfolio: "A collections of works", astute: "Smart and observant" };
definitions["quercus"] = "The latin name of the Oak family";

console.log(definitions);

// Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

var shirt = { brand: "Nike", color: "Black", size: "LG" };

console.log(shirt.brand);
console.log(shirt.color);
console.log(shirt.size);
