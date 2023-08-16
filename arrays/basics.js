// Map Method
const numbers = [1, 2, 3, 4, 5];
// Original Array

// Array object prototype
// Return data type of numbers[]
const numberResults = numbers.map(function (value) {
  console.log(value);
  const result = value * 2;
  return result;
});

console.log(numberResults);

// React app, -> API get list of users
/* const realData = [
  {
    id: 1,
    username: "Test",
    email: "test@gmail.com",
  },
  {
    id: 2,
    username: "Jess",
    email: "Jess@gmail.com",
  },
];

const example = realData.map((user) => {
  return <Row user={user}> key={user.id}</Row>;
});
 */

// ForEach
// ForEach is a method that executes a provided function once for each array element
let sum = 0;

numbers.forEach(function (element) {
  return (sum += element);
});

console.log(sum);
