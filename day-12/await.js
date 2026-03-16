// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5);
            if (num > 3) {
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("yellow", 1000);
        await changeColor("green", 1000);
        await changeColor("purple", 1000);
        await changeColor("blue", 1000);
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }    

    let a = 5;
    console.log(a);
    console.log(a+3);
}

// changeColor("red", 1000)
//     .then((result) => {
//         console.log("red color implemented");
//         return changeColor("orange", 1000);
//     })
//     .then((result) => {
//         console.log("orange color implemented");
//         return changeColor("green", 1000);
//     })
//     .then((result) => {
//         console.log("green color implemented");
//         return changeColor("blue", 1000);
//     })
//     .then(()=>{
//         console.log("blue color implemented");
//     })
//     .catch((error) => {
//         console.log("color not changed")
//     })