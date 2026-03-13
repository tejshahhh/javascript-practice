let box = document.querySelector(".box");

box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "pink";
});