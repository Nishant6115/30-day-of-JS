//Activity 1: For Loops

//Task1: 1 to 10 num

for (let i = 1; i <= 10; i++) {
    console.log(i);     // Output:1 2 3 4 5 6 7 8 9 10
}

//Task2: Table of 5

const num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);  // Output:
    }                                           // 5 x 1 = 5
                                                // 5 x 2 = 10
                                                // 5 x 3 = 15
                                                // 5 x 4 = 20
                                                // 5 x 5 = 25
                                                // 5 x 6 = 30
                                                // 5 x 7 = 35
                                                // 5 x 8 = 40
                                                // 5 x 9 = 45
                                                // 5 x 10 = 50

//Activity 2:While Loop

//Task3: Sum of num 1 to 10

let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(`The sum of numbers is:${sum}`);   // Output:  // The sum of numbers is:55

//Task4: num from 1 to 10

let nums = 1;

while (nums <= 10) {
    console.log(nums);   // Output:1 2 3 4 5 6 7 8 9 10
    nums++;
}

//Activity 3: Do while loop

//Task5: num from 1 to 5

let b = 1;

do {
    console.log(b);  // Output:1 2 3 4 5 6 7 8 9 10
    b++;
} while (b <= 10);

//Task6:Factorial of a num

let fact = 5; 
let factorial = 1;
let k = 1;

do {
    factorial *= k;
    k++;
} while (k <= fact);

console.log(`The factorial of ${fact} is ${factorial}`);   // Output:The factorial of 5 is 120

//Activity 4:Nested loops

//Task7:Star pattern

let row = 5; // Number of rows

for (let i = 1; i<= row; i++) {
    let pat = '';
    for (let j = 1; j <= i; j++) {
        pat += '*';
    }
    console.log(pat);  //Output:
   }                    //*
                        //**
                        //***
                        //****
                        //*****


//Activity 5: Loop Control Statements:

//Task8: num from 1 to 10 except 5

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue; 
    }
    console.log(i);  //Output:1 2 3 4 5 7 8 9 10
}

//Task9: num from 1 to 10 except break the loop when num is 7

for (let num = 1; num <= 10; num++) {
    console.log(num);  //Output:1 2 3 4 5 6 7 8
    if (num === 8) {
        break; 
    }
}