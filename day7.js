// Activity 1
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };
  console.log("Book Object:", book);

// Task 2: Access and log the title and author properties of the book object.
  console.log("Title:", book.title);
  console.log("Author:", book.author);

// Activity 2
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.title_author = function() {
    return ${book.title}is written by ${book.author};
  };
  console.log( book.title_author());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
  };
  book.updateYear(2020);
  console.log("Updated year of the book is :", book.year);

// Activity 3
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        }
    ]
};
console.log(library);

  
// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Library Name:", library.name);
library.books.forEach(book => console.log("Book genre:", book.genre));


// Activity 4
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
  book.title_author = function() {
    return ${book.title}is written in ${book.year};
  };
console.log( book.title_author());


// Activity 5
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
    console.log(${key}: ${book[key]});
  }

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));






