// DAY 2: OPERATORS

//Activity 1: arithmetic operations

let x = 4;
let y = 3;

//task 1
console.log("sum=", x + y);
// output is : sum= 7

//task 2
console.log("differnce=", x - y);
// output is : differnce= 1

//task 3
console.log("multiplication=", x * y);
// output is : multiplication= 12

//task 4
console.log("division=", x / y);
// output is : division= 1

//task 5
console.log("remainder=", x % y);
// output is : remainder= 1


//Activity 2: assignment operators

//task 6
x += 5;
console.log("new num=", x);
// output is : new num= 9

//task 7
x -= 5;
console.log("num1=", x);
// output is : num1= -1


//Activity 3: comparison operators

//task8
console.log("Is x greater than y: ", x > y);
// output is : Is x greater than y:  true
console.log("Is x smaller than y: ", x < y);
// output is : Is x smaller than y:  false

//task9
console.log("Is 5 greater than 5: ", 5 >= 5);
// output is : Is 5 greater than 5:  true
console.log("Is 5 lesser than 4: ", 5 <= 4);
// output is : Is 5 lesser than 4:  false

//task10
console.log("Is null==undefined: ", null == undefined);
// output is : Is null==undefined:  true

console.log("Is null===undefined: ", null === undefined);
// output is : Is null===undefined:  false


//Activity 4: logic operators

//task11
const num19 = 10, num20 = 3;
console.log((num19 < 6) && (num20< 5));
// Output:false

//task12
const num21 = 10, num22 = 3;
console.log((num21 < 6) && (num22< 5));
// Output: false

//task13
let num23 = 5  ;
console.log(!(num23==5));    // Output : false

// activity 5 :

//task14 
let num24 = -3;
let result = num24>0 ? "positive" : "negative";
console.log(result ) ;  // Output : negative


//FEATURE REQUEST :
// 1. Arithmetic operations script

let n = 5;

// addition operator
console.log("Addition: n + 2 = ", n + 2);    //output Addition: n + 2 =  7

// subtraction operator
console.log("Subtraction: n - 3 =", n - 3);    //output Subtraction: n - 3 = 2

// multiplication operator
console.log("Multiplication: n * 3 =", n * 3);    //output Multiplication: n * 3 = 15

// division operator
console.log("Division: n / 3 =", n / 3);    //output Division: n / 3 = 1.6666666666666667

// remainder operator
console.log("Remainder: n % 3 =", n % 3);    //output Remainder: n % 3 = 2

// increment operator
console.log("Increment: ++n =", ++n);    //output Increment: ++n = 6

// decrement operator
console.log("Decrement: --n =", --n);    //output Decrement: --n = 5

// exponentiation operator
console.log("Exponentiation: n ** 3 =", n ** 3);    //output Exponentiation: n ** 3 = 125



// 2. Comparison and logical operators script

// equal to operator                         // output
console.log("Equal to: 3 == 3 is", 3 == 3); // Equal to: 3 == 3 is true

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3); // Not equal to: 3 != 3 is false

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === "2"); // Strictly equal to: 2 === '2' is false

// greater than operator
console.log("Greater than: 3 > 5 is", 3 > 5); // Greater than: 3 > 5 is false

// less than operator
console.log("Less than: 3 < 5 is", 3 < 5); // Less than: 3 < 5 is true

// logical AND
console.log(n < 5 && n > 0); // false

// logical OR
console.log(n > 2 || n > 5); // true

// logical NOT
console.log(!(n == 3)); // true

// 3. ternary operator script
n1 > 0 ? console.log(n1, "is +ve") : console.log(n1, "is -ve"); //output: 10 is positive