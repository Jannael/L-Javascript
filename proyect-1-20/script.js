"use strict"
const display = document.querySelector(".display");
const del = document.querySelector(".delete");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply")
const left = document.querySelector(".left");
const numbers = document.querySelectorAll(".number");
const rest = document.querySelector(".rest")
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const point = document.querySelector(".point");
const zero = document.querySelector(".zero");
const dzero = document.querySelector(".doblue-zero");

const concat = (e)=>{
    display.textContent = display.textContent + e;
}

let themeCount = 0;
del.addEventListener("click", ()=>{display.textContent = ''})

numbers.forEach(number => { number.addEventListener("click", ()=> concat(number.textContent))});

divide.addEventListener("click", ()=> concat("/"));
multiply.addEventListener("click", ()=> concat("*"));
rest.addEventListener("click", ()=> concat("-"));
add.addEventListener("click", ()=> concat("+"));
point.addEventListener("click", ()=> concat("."));
zero.addEventListener("click", ()=> concat("0"));
dzero.addEventListener("click", ()=> concat("00"));

left.addEventListener("click", ()=> display.textContent = display.textContent.slice(0, -1));
equal.addEventListener("click", ()=> display.textContent = (eval(display.textContent)));