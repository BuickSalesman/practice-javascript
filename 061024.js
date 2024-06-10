// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}
var song = new Song("Mother's Last Words To Her Son", "Washington Phillips", "2:54");
console.log(song);

// Write a Rectangle class with attributes for width and height.

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var rectangle = new Rectangle(10, 20);
console.log(rectangle);

// Write a Person class with attributes for name and age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var person = new Person("Kelsey", 25);
console.log(person);

// Write a Location class with attributes for latitude and longitude.

class Location {
  constructor(long, lat) {
    this.long = long;
    this.lat = lat;
  }
}
var location = new Location(23.56, 23.98);
console.log(location);

// Write an Account class with attributes for name and balance.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

var account = new Account("Checking", 2);
console.log(account);

// Write a Movie class with attributes for title, director, and year.

class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}

var movie = new Movie("I've Been Thinking Of Ending Things", "Charlie Kaufman", 2020);
console.log(movie);
