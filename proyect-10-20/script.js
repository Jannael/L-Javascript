"use strict"
const keys = document.querySelectorAll("li");

function getRandomNumber(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

function getKeyRandom(){
    return keys[getRandomNumber(0, keys.length - 1)];
}

function targetKey(){
    const key = getKeyRandom();
    key.classList.add("selected");
}

document.addEventListener("keyup", e =>{
    const keySelected = document.querySelector(".selected");
    let keyPressed = e.key; 
    if(keyPressed == " ") keyPressed = "Space"
    if(keyPressed == "Control") keyPressed = "Ctrl"
    if(keyPressed == "ContextMenu") keyPressed = "Doc"
    if(keyPressed == "Fn") keyPressed = "Fn"

    if(keyPressed == keySelected.textContent){ 
        keySelected.classList.remove("selected");
        targetKey();
    }else {
        for(let key of keys){
            if(key.textContent == e.key) key.classList.toggle("hit");
        }
    }
    console.log(keyPressed);
})

//this function make that no one key work 
document.addEventListener('keydown', function(event) {
    event.preventDefault();
}, false);


targetKey()