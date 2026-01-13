const button = document.querySelector(".button");
const div = document.querySelector(".div");
const root = document.querySelector(":root");
let counter = 1;

div.addEventListener("click", ()=>{
    counter ++;
    (counter == 2) ?(
        root.style.setProperty('--theme', '#222'),
        root.style.setProperty('--border', '#fff'),
        counter = 0
    ):(
        root.style.setProperty('--theme', '#ddd'),
        root.style.setProperty('--border', '#222')
    )
    button.classList.toggle("button_active");
})