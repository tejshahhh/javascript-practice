let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let lst = document.createElement("li");
    lst.innerText = inp.value;
    ul.appendChild(lst);
    inp.value = "";
})