// Activity 1
// Task 1
let names = "John";
const ages = 30;

const message = Hello, my name is ${name} and I am ${age} years old.;
console.log(message);

// Task 2
const multiLineString = `
This is a multi-line string.
You can write text on multiple lines
using template literals.
It helps in writing long strings more readably.
`;

console.log(multiLineString);

// Activity 2
// Task 3
const numbers = [2, 25, 34, 41, 77];

const [first, second] = numbers;

console.log(first);  // Logs: 2
console.log(second); // Logs: 25

// Task 4
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };

  
// Activity 3
// Task 5
const { title, author } = book;
  
console.log(title);  // Logs: "To Kill a Mockingbird"
console.log(author); // Logs: "Harper Lee"
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
  
console.log(newArray); // Logs: [1, 2, 3, 4, 5, 6]

// Task 6
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
  
  const result = sum(3, 6, 1, 2, 7);
  console.log(result); // Logs: 19


// Activity 4
// Task 7
function multiply(a, b = 1) {
    return a * b;
  }
  
  const resultWithBothParams = multiply(5, 2);
  const resultWithOneParam = multiply(5);
  
  console.log(resultWithBothParams); // Logs: 10
  console.log(resultWithOneParam);   // Logs: 5


// Activity 5
// Task 8
const name = "Alice";
const age = 25;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  updateAge(newAge) {
    this.age = newAge;
  }
};

console.log(person);

// Call the greet method to demonstrate its functionality
person.greet();

// Update the age and log the updated object
person.updateAge(26);
console.log(person);

// Task 9
const key1 = 'name';
const key2 = 'age';
const key3 = 'occupation';

const person = {
  [key1]: 'John Doe',
  [key2]: 35,
  [key3]: 'Software Engineer'
};

console.log(person);

  



