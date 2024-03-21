// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

var rectangle = new Rectangle(10, 20);
console.log(rectangle);
console.log(rectangle.area());

// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  formattedName() {
    return this.name.toUpperCase();
  }
}

var person = new Person("Omar", 36);
console.log(person);
console.log(person.formattedName());
