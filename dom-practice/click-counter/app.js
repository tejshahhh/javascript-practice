let btn = document.querySelector("button");
let span = document.querySelector("span");

let count = 0;

btn.addEventListener("click", function(){
    span.innerText = `${count}`;
    count++;
});

