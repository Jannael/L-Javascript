const container = document.querySelector(".container");
const container_title = document.querySelector(".container_title");
const container_p = document.querySelector(".container_p");
const button = document.querySelector(".button");
let count = 0;

button.addEventListener("click", ()=>{
    count ++;
    (count == 2)?( 
        button.textContent = "+",
        count = 0
    ):  button.textContent = "x"

    container.classList.toggle("active_container");
    button.classList.toggle("active_button");
    container_title.classList.toggle("container_active_txt");
    container_p.classList.toggle("container_active_txt_p")
})

