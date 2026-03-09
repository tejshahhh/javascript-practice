let p = document.querySelector("p");

p.addEventListener("click", function() {
    console.log("paragraph was clicked");    
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function() {
    console.log("mouse inside box");
    box.style.backgroundColor = "red";
})
