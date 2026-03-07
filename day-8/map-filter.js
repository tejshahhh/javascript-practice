// let num = [1,2,3,4];

// this the code using normal function
// let double = num.map(function(el) {
//     return el * el;
// });

// this is the code usig arrow function
// let double = num.map((el) => {
//     return el * el;
// });

let students = [{
    name: "Tej",
    marks: 95
},{
    name: "Deep",
    marks: 96
},{
    name: "Yash",
    marks: 99
}];

let gpa = students.map( (el) => {
    return el.marks / 10;
});

let nums = [2,4,1,5,6,2,7,8,9];

let even = nums.filter( (num) => {
    return num < 5;
});