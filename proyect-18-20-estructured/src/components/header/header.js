const open = document.querySelector(".openSidebar");
const nav = document.querySelector("#navbar");
const a = document.querySelectorAll("#navbar ul li a");

function updateNavbar(e){
    isMobile = e.matches;
    if(isMobile){
        nav.setAttribute('inert', '')
        a.forEach(link => {
            link.addEventListener("click", closeSidebar)
        });
    }
    else {
        navbar.removeAttribute('inert');
        a.forEach(link=>{
            link.removeEventListener("click", closeSidebar)
        })
    }
}

function openSidebar(){
    nav.classList.add("show");
    open.setAttribute('aria-expanded', 'true');
    navbar.removeAttribute('inert')
}

function closeSidebar(){
    nav.classList.remove("show");
    open.setAttribute('aria-expanded', 'false');
    nav.setAttribute('inert', '')
}