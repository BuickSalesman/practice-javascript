// 1. Start with an array of numbers and create a new array with each number times 3.
//    For example, [1, 2, 3] becomes [3, 6, 9].

let nums = [1, 2, 3]
let newNums = []

for (let num of nums) {
    newNums.push(num * 3)
}

console.log(newNums)

// 2. Start with an array of strings and create a new array with each string upcased.
//    For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

let greetings = ["hello", "goodbye"]
let capsGreet = []

greetings.forEach(greeting => {
    capsGreet.push(greeting.toUpperCase())
})

console.log(capsGreet)

// 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

let people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
let names = []

people.forEach(person => {
    names.push(person.name)
})

console.log(names)

// 4. Start with an array of numbers and create a new array with each number plus 7.
//    For example, [1, 2, 3] becomes [8, 9, 10].

let plusSeven = []
nums.forEach(num => {
    plusSeven.push(num + 7)
})

console.log(plusSeven)

// 5. Start with an array of strings and create a new array with each string's length.
//    For example, ["hello", "goodbye"] becomes [5, 7].

let wordLengths = []
greetings.forEach(word => {
    wordLengths.push(word.length)
})

console.log(wordLengths)

// 6. Start with an array of hashes and create a new array of number values from each hash's :age key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

let ages = []
people.forEach(person => {
    ages.push(person.age)
})

console.log(ages)

// 7. Start with an array of numbers and create a new array with each number divided by 2.
//    For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

let halves = []
nums.forEach(num => {
    halves.push(num / 2)
})

console.log(halves)

// 8. Start with an array of strings and create a new array with each string's first letter only.
//    For example, ["hello", "goodbye"] becomes ["h", "g"].

let firstLetters = []
greetings.forEach(word => {
    firstLetters.push(word[0])
})

console.log(firstLetters)

// 9. Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

let doubleAges = []
people.forEach(person => {
    doubleAges.push(person.age * 2)
})

console.log(doubleAges)

// 10. Start with an array of numbers and create a new array with each number converted into a string.
//     For example, [1, 2, 3] becomes ["1", "2", "3"].

let stringNums = []
nums.forEach(num => {
    stringNums.push(num.toString())
})

console.log(stringNums)

