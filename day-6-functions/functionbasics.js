// // Basic function code to use in javascript
function hello() {
    console.log("Hello");
}
// hello();

function printName() {
    console.log("Tej Shah");
}
printName();

// // function code using loops in javascript
function print1to5() {
    for(let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

// function code using if-else statement in javascript
function isAdult() {
    let age = 20;
    if(age >= 18) {
        console.log("You are an adult");
    }
    else {
        console.log("You are not an adult");
    }
}

isAdult();

// Practice Question 1 
function printPoem() {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
}

printPoem();

// Practice Question 2
function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a", dice);
}

rollDice();

// function code using arguments in javascript
function printInfo(name,age) {
    console.log(`My name is ${name} and age is ${age}`);
}

printInfo("Tej Shah",25);
printInfo("Deep Shah");

//  Practice Question 3
function calculateAverage(a,b,c) {
    let average = (a + b + c) / 3;
    console.log(`Your average of 3 numbers is ${average}`);
}
calculateAverage(10,20,30);

// Practice Question 4
function printTable(n) {
    for(let i = n; i <=n*10; i+=n) {
        console.log(i);
    }
}
printTable(5);

// Practice Question 5
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;        
    }
    return sum;
}
console.log(getSum(10));

// // Practice Question 6
let str = ["My","name","is","Tej"];
function concat(str) {
    let result = "";
    for (let i = 0; i<str.length; i++) {
        result += str[i]
    }
    return result;
}
console.log(concat(str));