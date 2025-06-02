let a = 10;
let b = 20;

function sum(num1, num2) {
    return num1 + num2;
}

console.log("-----Task 1-----");
console.log(sum(a, b));
// ===================================
let nm = "Tom";
function greet(title) {
    console.log("Hello " + title);
}
console.log("-----Task 2-----");
console.log(greet(nm));

// ===================================


let number = 13;

function getEvenOdd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("-----Task 3-----");
console.log(getEvenOdd(number));

// ===================================


let sqrtnumber = 3;

function square(number) {
    return number * number;
}
console.log("-----Task 4-----")
console.log(square(sqrtnumber));


// ===================================


let num1 = "hello";
let num2 = 2;

function sum(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return "Error";
    } else {
        return a + b;
    }
}
console.log("-----Task 5-----")
console.log(sum(num1, num2));

// ===================================

let title = undefined;

function greet2(name) {
    if (typeof name === "undefined") {
        return "could not find name";
    }
    else {
        return "Hello " + name;
    }
}

console.log("-----task 6-----")
console.log(greet2(title))


// ===================================


let age = 19;

function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log("-----task 7-----")
if (checkAge(age)) {
    console.log("Access granted");
}
else {
    console.log("Access denied");
}

// ===================================


function getInfo() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("-----Task 8-----")
    rl.question('What is your name? ', (name) => {
        rl.question('What is your age? ', (age) => {
            rl.question('What is your surname? ', (surname) => {
                // Trim to remove accidental spaces
                name = name.trim();
                age = age.trim();
                surname = surname.trim();

                // Validate name and surname only
                if (!name || !surname) {
                    console.log("Please enter both your name and surname.");
                } else {
                    // Print with or without age
                    if (!age) {
                        console.log(`Hello ${name} ${surname}`);
                    } else {
                        console.log(`Hello ${name} ${surname}, you are ${age} years old`);
                    }
                }

                rl.close();
            });
        });
    });
}

getInfo();


// ===================================

let nmb = 45;

function checknumber(num) {
    if (num > 0) {
        console.log("The number is positive");
    }
    else if (num < 0) {
        console.log("The number is negative");
    }
    else {
        console.log("The number is zero");
    }
}
console.log("-----Task 9-----");
checknumber(nmb);

// ===================================

let test = "Ibrahim";

function check() {

    if (test.length > 5) {
        console.log("Long Name");
    }
    else {
        console.log("Short Name");
    }
}
console.log("-----Task 10-----");
check(test);