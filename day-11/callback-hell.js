let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

changeColor("red", 1000)
    .then((result) => {
        console.log("red color implemented");
        return changeColor("orange", 1000);
    })
    .then((result) => {
        console.log("orange color implemented");
        return changeColor("green", 1000);
    })
    .then((result) => {
        console.log("green color implemented");        
        return changeColor("blue", 1000);        
    })
    .then(()=>{
        console.log("blue color implemented");
    })
    .catch((error) => {
        console.log("color not changed")
    })
