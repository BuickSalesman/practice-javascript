// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }

  printInfo() {
    console.log(`The song ${this.name}, by ${this.artist}, has a duration of ${this.duration}`);
  }
}

var song = new Song("Tomorrow Comes Today", "Gorillaz", "3:13");
song.printInfo();

// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

var rectangle = new Rectangle(7, 8);
console.log(rectangle.getArea());

// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  capitalName() {
    return this.name.toUpperCase();
  }
}

var person = new Person("kelsey", 28);
console.log(person.capitalName());

// Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.

class Coordinate {
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  getLatLon() {
    console.log(`The latitude is ${this.lat}, and the longitude is ${this.lon}.`);
  }
}

var coordinate = new Coordinate(44.0988, -22.908);
coordinate.getLatLon();

// Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  lowBalanceWarnning() {
    if (this.balance < 100) {
      console.log("WARNING YOU ARE BROKE");
    }
  }
}

var account = new Account("Checking", 3);
account.lowBalanceWarnning();

// Write a Movie class with attributes and reader/writer methods for title, director, and year. Then write a method that prints out the attributes in a single sentence.

class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  getMovieInfo() {
    console.log(`The movie ${this.title}, released in ${this.year}, was directed by ${this.director}`);
  }
}

var movie = new Movie("It's Such A Beautiful Day", "Don Hertzfeldt", 2012);
movie.getMovieInfo();

// Write a Point class with attributes and reader/writer methods for x, y, and z coordinates. Then write a method that returns true if all 3 numbers are positive, otherwise it returns false.

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  checkPositive() {
    return this.x > 0 && this.y > 0 && this.z > 0;
  }
}

var point = new Point(2, 5, 6);
console.log(point.checkPositive());

// Write a Book class with attributes and reader/writer methods for title, author, and year. Then write a method that returns "Classic" if the book is older than 2000, otherwise it returns "Modern".

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  checkIfClassic() {
    if (this.year >= 2000) {
      console.log("Modern");
    } else {
      console.log("Classic");
    }
  }
}

var book = new Book("Code", "Charles Petzold", 1999);
book.checkIfClassic();
