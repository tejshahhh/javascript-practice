// Write an arrow function that return the square of a number n
// This is normal arrow funtion code
const square = (n) => {
    return n*n;
};

// This is implicit return arrow function code 
const sqr = (n) => (n*n);

// Write a function that prints "Hello World" 5 times at intervals of 2s each
let id = setInterval( () => {
   console.log("Hello World");
},2000);

setTimeout(()=> {
    clearInterval(id);
    console.log("clear interval run");
},10000);