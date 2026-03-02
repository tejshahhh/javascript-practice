// Code for how to use global and function scope in javascript
let sum = 54; // This is Global Scope
function calSum(a,b) {
    let sum = a + b; // This is Function Scope
    // console.log(sum);
}
calSum(1,2);
console.log(sum); // This will print 54 because it is in global scope and the sum variable inside the function is in function scope.

// Code for how to use block scope in javascript
{
    let a = 25;
    console.log(a); // This will print 25 because it is in block scope.
}
console.log(a); //This will give an error because it is not defined in block scope.

// Code for how to use lexical scope in javascript
function outerFunc() {
    let x = 5;
    let y = 10;
    function innerFunc() {
        console.log(x);
        console.log(y);
    }   

    innerFunc();
}

// Practice Question 7
let greet = "Hello"; // This is a global scope 
function changeGreet() {
    let greet = "Namaste"; // This is function scope
    console.log(greet);
    function innerGreet() { 
        console.log(greet); // This is lexical scope
    }    
}
console.log(greet);
changeGreet();