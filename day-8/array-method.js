// let arr = [1,2,3,4,5];

// One way to do 
// let print = function(el) {
//     console.log(el);
// }

// arr.forEach(print);

// Other way to the same thing

// arr.forEach(function(el) {
//     console.log(el);
// });

// Same thing to do with arrow function

// arr.forEach( (el) => {
//     console.log(el);
// });

// forEach using objects

let arr = [{
    name: "Tej",
    marks: 95
},{
    name: "Deep",
    marks: 96
},{
    name: "Yash",
    marks: 99
}];

arr.forEach( (student) => {
    console.log(student.marks);
});