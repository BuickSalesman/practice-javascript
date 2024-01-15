var number = 1;
while (number <= 10) {
  console.log(number);
  number = number + 1;
}

var count = 0;
while (count <= 5) {
  console.log("Hello!");
  count = count + 1;
}

while (true) {
  var input = window.prompt("Enter a word");
  if (input === "stop") {
    break;
  }
}
