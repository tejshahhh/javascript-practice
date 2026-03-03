const stud = {
    name: "Tej",
    marks: 98,
    prop: this,
    getName: function() {
        console.log(this); //here 'this' will take the object which is student over here 
        return this.name;
    },
    getMarks: () => {
        console.log(this); //here 'this' will take the parent scope which is student and which has global scope
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log(this);
        },);
    },
    getInfo2: function() {
        setTimeout(function () {
            console.log(this);
        });
    }
};