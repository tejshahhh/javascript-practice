let btn = document.querySelector("button");

let p = document.querySelector("#text");

btn.addEventListener("click",function() {
    p.classList.toggle('hide');
})