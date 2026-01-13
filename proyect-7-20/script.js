const nav = document.querySelector(".nav");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const goku = document.querySelector(".goku");
const vegueta = document.querySelector(".vegueta");
const gohan = document.querySelector(".gohan");
const trunks = document.querySelector(".trunks");
const goten = document.querySelector(".goten");

let isInitialized = false;

const closemenu = () =>{
    nav.classList.remove("show");
    nav.setAttribute('inert', '')
}
const openmenu = () =>{
    nav.classList.add("show");
    nav.removeAttribute('inert')
}
const change = (url, bg) =>{
    if(isInitialized){
        right.style.backgroundImage = `url(${url})`;
        left.style.background = bg;
    }
}

goku.addEventListener("mouseover", () => change("img/goku.webp", "#f0833a"))
vegueta.addEventListener("mouseover", ()=> change("img/vegueta.jpg", "#2955dc"));
gohan.addEventListener("mouseover", ()=> change("img/gohan.jpg", "#d6c155"));
trunks.addEventListener("mouseover", ()=> change("img/trunks.jpg", "#5c4ea3"));
goten.addEventListener("mouseover", ()=> change("img/goten.jpg", "#f85b1a"));

window.onload = () => { isInitialized = true;};
