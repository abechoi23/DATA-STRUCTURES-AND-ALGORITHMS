/* Map exercises

5. string lengths
// Example Input: ['Hello', 'World', 'JavaScript']
// Expected Output: [5, 5, 10] */

/* ForEach exercises

Rating Average
// Example Input:
// [
//   { title: 'Inception', rating: 5 },
//   { title: 'Frozen', rating: 4.5 },
//   { title: 'Star Wars', rating: 4 }
// ]
// Expected Output: Average Rating is 4.5

2. Count occurences
// Example Input: ['apple', 'banana', 'apple', 'cherry', 'apple', 'banana']
// Expected Output: { apple: 3, banana: 2, cherry: 1 }
3. Convert to uppercase
// Example Input: ['apple', 'banana', 'cherry']
// After execution, the original array should be: ['APPLE', 'BANANA', 'CHERRY'] */

// Double numbers given array of numbers double numbers
// Example Input: [1, 2, 3, 4]
// Expected Output: [2, 4, 6, 8]

const numbers = [1, 2, 3, 4];

const numberResults = numbers.map(function (value) {
  const results = value * 2;
  return results;
});

console.log(numberResults);

// capitalize words
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: ['Apple', 'Banana', 'Cherry']

const arr = ["apple", "banana", "cherry"];

const arrResults = arr.map(function (value) {
  // const upperCase = value.charAt(0).toUpperCase()
  // const remainingLetters = value.slice(1)
  // const results = upperCase + remainingLetters
  const results = value.charAt(0).toUpperCase() + value.slice(1);
  return results;
});

console.log(arrResults);

// give full names
// Example Input:
// [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jane', lastName: 'Smith' }
// ]
// Expected Output: ['John Doe', 'Jane Smith']

const fullName = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];

const Name = fullName.map((user) => {
  return `${user.firstName} ${user.lastName}`;
});

console.log(Name);

// add property
// Example Input:
// [
//   { name: 'book', price: 100 },
//   { name: 'game', price: 50 }
// ]
// Expected Output:
// [
//   { name: 'book', price: 100, taxedPrice: 110 },
//   { name: 'game', price: 50, taxedPrice: 55 }
// ]

const barnesNoble = [
  { name: "book", price: 100 },
  { name: "game", price: 50 },
];

const bookPrices = barnesNoble.map((value) => {
  if (value.name === "book") {
    return { ...value, taxedPrice: 110 };
  } else {
    return { ...value, taxedPrice: 55 };
  }
});

console.log(bookPrices);

// string lengths
// Example Input: ['Hello', 'World', 'JavaScript']
// Expected Output: [5, 5, 10] */

const arr1 = ["Hello", "World", "JavaScript"];

const arr1Length = arr1.map((value) => {

})
 