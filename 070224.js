// Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  displayItems() {
    console.log("The items in your shopping cart are:");
    this.items.forEach((item) => {
      console.log(`- ${item}`);
    });
  }
}

const cart = new ShoppingCart();

cart.addItem("Apple");
cart.addItem("Banana");
cart.addItem("Orange");
cart.displayItems();
cart.removeItem("Banana");
cart.displayItems();

// Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata) {
    this.name = name;
    this.price = price;
    this.metadata = metadata;
  }
}

const car = new Product("Infiniti Q50", 70000, { drivetrain: "AWD", color: "Red" });
console.log("Product details:");
console.log(`Name: ${car.name}`);
console.log(`Price: ${car.price}`);
console.log(`Drivetrain: ${car.metadata.drivetrain}`);
console.log(`Color: ${car.metadata.color}`);

// Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    const index = this.songs.indexOf(song);
    if (index > -1) {
      this.songs.splice(index, 1);
    }
  }

  shuffle() {
    for (let i = this.songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (1 + 1));
      [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
    }
  }

  displayPlaylist() {
    console.log(`${this.name}:`);
    console.log("Songs in this playlist:");
    this.songs.forEach((song) => {
      console.log(`- ${song}`);
    });
  }
}

const playlist = new Playlist("My Playlist");
playlist.addSong("Song 1");
playlist.addSong("Song 2");
playlist.addSong("Song 3");
playlist.addSong("Song 4");
playlist.addSong("Song 5");
playlist.addSong("Song 6");
playlist.displayPlaylist();
playlist.removeSong("Song 2");
playlist.displayPlaylist();
playlist.shuffle();
playlist.displayPlaylist();
