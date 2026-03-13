let btn = document.querySelector("button");
let div = document.querySelector(".box");

btn.addEventListener("click",function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randColor = `rgb(${r},${g},${b})`;

    div.style.backgroundColor = randColor;
});