// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i<smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }

// console.dir(document.querySelectorAll('p'));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector('.oldImg'));

// console.dir(document.querySelectorAll('div a'));

// let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length; i++) {
//     links[i].style.color = "green";
// }

// for(link of links) {
//     link.style.color = "purple";
// }

// Practice question

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red";
document.querySelector('body').prepend(para1);
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "Hey I'm blue h3";
document.querySelector('body').prepend(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "Me Too";

document.querySelector('body').prepend(div);
div.append(h1);
div.append(para2);

div.classList.add("box");