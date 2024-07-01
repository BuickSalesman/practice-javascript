// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }

  printInfo() {
    console.log(`The song ${this.name} by ${this.artist} is ${this.duration} long.`);
  }
}

var song = new Song("Tomorrow Comes Today", "Gorillaz", "3:13");
song.printInfo();

// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

var rectangle = new Rectangle(5, 7);
console.log(
  `The rectangle has a height of ${rectangle.height}, a width of ${
    rectangle.width
  }, and an area of ${rectangle.getArea()}.`
);

// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  nameToUppercase() {
    return this.name.toUpperCase();
  }
}

var person = new Person("Kelsey", 26);
console.log(person.nameToUppercase());
