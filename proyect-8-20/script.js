const body = document.querySelector("body")
const open = document.querySelector(".openSidebar");
const nav_ul = document.querySelector(".nav_ul");
const nav = document.querySelector(".nav");
const a = document.querySelectorAll(".nav_ul_li_a");
const goLeft = document.querySelector(".getLeft");
const goRight = document.querySelector(".getRight");
const title = document.querySelector(".title");
const media = window.matchMedia("(width < 700px)");
let counter = 0;

media.addEventListener("change",  e => updateNavbar(e))

function updateNavbar(e){
    const isMobile = e.matches;
    (isMobile)? nav.setAttribute('inert', '')
    : navbar.removeAttribute('inert')
}

function openSidebar(){
    nav_ul.classList.add("show");
    open.setAttribute('aria-expanded', 'true');
    navbar.removeAttribute('inert')
}

function closeSidebar(){
    nav_ul.classList.remove("show");
    open.setAttribute('aria-expanded', 'false');
    nav.setAttribute('inert', '')
}

function changeBg(iteracion){
    (iteracion == "-")? counter--
    : counter++

    if(counter == -1){
        counter = 2;
        body.style.backgroundImage = `url(img/c3.jpg)`;
        title.textContent = "COUNTRY 3"
    }
    else if( counter == 0){
        body.style.backgroundImage = `url(img/c1.jpg)`;
        title.textContent = "COUNTRY 1"
    }
    else if( counter == 1){
        body.style.backgroundImage = `url(img/c2.jpg)`;
        title.textContent = "COUNTRY 2"
    }
    else if( counter == 2) {
        body.style.backgroundImage = `url(img/c3.jpg)`
        title.textContent = "COUNTRY 3"
    }
    else if( counter == 3) {
        counter = 0;
        body.style.backgroundImage = `url(img/c1.jpg)`
        title.textContent = "COUNTRY 1"
    }
}

updateNavbar(media);

a.forEach(link => {
    link.addEventListener("click", ()=>{
        closeSidebar()
    })
});

goLeft.addEventListener("click", ()=> changeBg("-"));
goRight.addEventListener("click", ()=> changeBg("+"));