// Code for how to use method in functions
// This is normal method to use function by mentioning function in key,value pair
const calculator = {
    add: function(a,b) {
        return a + b;
    },
    sub: function(a,b) {
        return a - b;
    },
    mul: function(a,b) {
        return a * b;
    }
};

// Shorthand method for using method in functions
const calci = {
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    },
    mul(a,b) {
        return a*b;
    }
};