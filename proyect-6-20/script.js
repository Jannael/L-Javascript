"use strict"
const main = document.getElementById("main");
const shoesOne = document.getElementById("shoesOne");
const shoesTwo = document.getElementById("shoesTwo");
const shoesThree = document.getElementById("shoesThree")

shoesOne.addEventListener("mouseover", ()=>{
    main.setAttribute('src', 'img/shoes1.png')
})
shoesTwo.addEventListener("mouseover", ()=>{
    main.setAttribute('src', 'img/shoes2.png')
})
shoesThree.addEventListener("mouseover", ()=>{
    main.setAttribute('src', 'img/shoes3.png')
})