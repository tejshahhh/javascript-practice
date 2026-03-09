let btns = document.querySelectorAll("button");
console.dir(btns);

function sayHello() {
    alert("Hello");    
}


for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function() {
        console.log("You entered a button");   
    }
}
// btn.onclick = function() {
//     alert("Button was clicked");
// }



