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
    console.log("Items in the shopping cart are: ");
    this.items.forEach((item) => {
      console.log("- " + item);
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
