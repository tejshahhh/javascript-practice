const student = {
    name: "Tej",
    age: 25,
    eng: 95,
    math: 93,
    eco: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.eco) / 3;
        console.log(`${this.name} marks of 3 subjects are ${avg}`);
    }
};