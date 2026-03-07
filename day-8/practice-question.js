// let nums = [10,30,50,60];

// let ans = nums.every((el) => el%10==0);
// console.log(ans);

let value = [60,30,50,10];

let finalValue = value.reduce((min,el) => {
    if(min < el) {
        return min;
    }
    else {
        return el;
    }
});

console.log(finalValue);