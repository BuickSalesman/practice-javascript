// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}

var song = new Song("Gloria", "Patti Smith", "5:56");
console.log(song);

// Write a Rectangle class with attributes for width and height.

class Rectanlge {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var rectangle = new Rectanlge(5, 9);
console.log(rectangle);

// Write a Person class with attributes for name and age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var adam = new Person("Adam", 28);
console.log(adam);

// Write a Location class with attributes for latitude and longitude.

class Location {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

var place = new Location(0.345214, 1.098723);
console.log(place);

// Write an Account class with attributes for name and balance.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

var account = new Account("Adam", 3);
console.log(account);
