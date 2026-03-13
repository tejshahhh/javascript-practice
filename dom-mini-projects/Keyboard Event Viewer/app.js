let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

document.addEventListener("keydown", function (event) {
    h3.innerText = `You pressed key : ${event.key}`;
    h4.innerText = `Key Code is : ${event.keyCode}`;
})