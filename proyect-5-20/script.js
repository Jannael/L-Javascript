const nav = document.querySelector(".header_nav");
const button = document.querySelector(".fa-solid");
let counter = 0;

function appearNav() {
    counter++; 
    nav.classList.toggle("show");
    if(counter == 2){
        button.classList.remove("fa-xmark");
        button.classList.add("fa-bars");
        counter = 0;
    }else{
        button.classList.remove("fa-bars");
        button.classList.add("fa-xmark");
    }
}
button.addEventListener("click", appearNav);