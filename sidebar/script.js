const open = document.querySelector(".openSidebar");
const nav_ul = document.querySelector(".nav_ul");
const nav = document.querySelector(".nav");
const a = document.querySelectorAll(".nav_ul_li_a");

const media = window.matchMedia("(width < 700px)");
media.addEventListener("change", (e)=> updateNavbar(e))

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

updateNavbar(media);

a.forEach(link => {
    link.addEventListener("click", ()=>{
        closeSidebar()
    })
});