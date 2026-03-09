// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });
let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log("code = ", event.code);
    if(event.code == "ArrowUp") {
        console.log("Arrow moves forward");
    }
    else if(event.code == "ArrowDown") {
        console.log("Arrow moves backward");
    }
    else if(event.code == "ArrowLeft") {
        console.log("Arrow moves left");
    }
    else if(event.code == "ArrowRight") {
        console.log("Arrow moves right");
    }    
})

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })