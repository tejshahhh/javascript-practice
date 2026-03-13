let btn = document.querySelector(".increase");
let span = document.querySelector("span");
let count = 0;

let resBtn = document.querySelector(".reset");

btn.addEventListener("click",function() {
    span.innerText = count++;
});

resBtn.addEventListener("click", function() {
    span.innerText = count = 0;
});