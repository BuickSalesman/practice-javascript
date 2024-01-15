var books = [
  { title: "good", author: "bye" },
  { title: "good", author: "bye" },
  { title: "good", author: "bye" },
];
console.log(books[2].author);

var capitols = { California: "Sacramento", Illinois: "Springfield", "New York": "Albany" };
capitols["Tennesee"] = "Nashville";
console.log(capitols);

var laptop = { brand: "Apple", model: "MacBook", year: 2014 };
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

var laptops = [
  { brand: "Apple", model: "Macbook" },
  { brand: "Apple", model: "Macbook" },
  { brand: "Apple", model: "Macbook" },
];
console.log(laptops[1].model);

var dictionary = { mad: "angry", bad: "not good" };
dictionary.glad = "happy";
console.log(dictionary);

var shirt = { brand: "Hanes", model: "Tshirt", text: "Ridiculous Plants" };
console.log(shirt.brand);
console.log(shirt.model);
console.log(shirt.text);

var people = [
  { firstname: "Max", lastname: "Well" },
  { firstname: "Hax", lastname: "Swell" },
  { firstname: "Tax", lastname: "Smell" },
];

console.log(people[1].firstname);
console.log(people[1].lastname);

var menu = { juice: 3, salad: 4, burger: 5 };
menu.sandwich = 6;
console.log(menu);
