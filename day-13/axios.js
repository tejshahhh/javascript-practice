// This code is for calling api to show random cat facts
// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=> {
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;    
// });

// let url = "https://catfact.ninja/fact";


// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log("ERROR - ",e);
//         return "No fact found";
//     }
// }

// This code is for calling api to show random images
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=> {
   let link = await getImage();    
   let img = document.querySelector("#result");
   img.setAttribute("src", link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        // console.log(res.data.message);
        return res.data.message;
    } catch(e) {
        console.log("ERROR - ",e);
        return "No Image found";
    }
}