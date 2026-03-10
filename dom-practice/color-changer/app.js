let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    randColors = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = randColors; 
});