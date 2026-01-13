"use strict"
const ctnLogin = document.querySelector(".login-form");
const txtLogin = document.querySelector(".txt-login");
const ctnSignup = document.querySelector(".sign-up-form");
const txtSignup = document.querySelector(".txt-sign-up");
const media = window.matchMedia("(width < 800px)");
const root = document.querySelector(":root");

let isMobile = null;
updateScreen(media);

media.addEventListener("change",  e => updateScreen(e))

function updateScreen(e){
    isMobile = e.matches;
}

function signUp (){        
    if(isMobile){
        root.style.setProperty('--topdistanceafter', '70%');
        root.style.setProperty('--topdistanceleft', '-100%');
        root.style.setProperty('--topdistanceright', '0%');
    }else{
        root.style.setProperty('--distanceAfter', '50%');
        root.style.setProperty('--rightdistance', '0');
        root.style.setProperty('--leftdistance', '-100%');
    }
    ctnLogin.classList.add("none");
    txtLogin.classList.remove("none");
    txtSignup.classList.add("none");
    ctnSignup.classList.remove("none");
    
}
function login (){
    if(isMobile){
        root.style.setProperty('--topdistanceafter', '-570%');
        root.style.setProperty('--topdistanceleft', '0%');
        root.style.setProperty('--topdistanceright', '-100%');
    }else{
        root.style.setProperty('--distanceAfter', '-550%');
        root.style.setProperty('--rightdistance', '-100%');
        root.style.setProperty('--leftdistance', '0');
    
    }
    ctnLogin.classList.remove("none");
    txtLogin.classList.add("none");
    txtSignup.classList.remove("none");
    ctnSignup.classList.add("none");

}
