// Code for how to use function expression in javascript
let sum = function(a,b) { //using arhuments
    return a+b;
}
sum(1,2) 

let hello = function() {  // without arguments
    console.log("Hello");
}
hello(); 

// Code for how to use high order function in javascript
function multipleGreet(func,count) {
    for (let i = 1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("Hello");
}
let thanks = function() {
    console.log("Thank You");
}
multipleGreet(greet,4);
multipleGreet(thanks,3);

// Code for how to use higher order function returns
function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2==0));
        }        
    }
    else if(request == "even") {
        return function(n) {
            console.log(n%2==0);
        }        
    }
    else {
        console.log("Wrong request");
    }
}
let request = "even";