let btns = document.querySelectorAll("button");
// console.dir(btns);

function sayHello() {
    alert("Hello");    
}
function sayName() {
    alert("Tej Shah");    
}


for(btn of btns) {
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function() {
        console.log("You double clicked me");
    });
}