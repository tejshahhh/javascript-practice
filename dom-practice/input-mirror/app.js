let inp = document.querySelector("input");
let h3 = document.querySelector("h3");

inp.addEventListener("input", function(){
    h3.innerText = inp.value;
});