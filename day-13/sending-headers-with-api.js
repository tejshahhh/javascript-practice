const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = {headers: {Accept: "text/plain"}};
        let res = await axios.get(url,config);
        return res.data;
    } catch(e) {
        console.log("ERROR - ",e);
    }
}

let btn = document.querySelector("button");

btn.addEventListener("click",async ()=> {
    let ranImg = await getJokes();
    let p = document.querySelector("#result");
    p.innerText = ranImg;
})