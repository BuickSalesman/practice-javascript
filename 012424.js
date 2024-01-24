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
