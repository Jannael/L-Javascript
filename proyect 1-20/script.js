"use strict"
const theme = document.querySelector(".theme");
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

let themeCount = 0;
del.addEventListener("click", ()=>{display.textContent = ''})
theme.addEventListener("click", ()=>{
    themeCount++;
    (themeCount == 2) ?(
        document.body.style.setProperty('--bgCalculator', '#444'),
        document.body.style.setProperty('--primaryColor', '#3f7'),
        document.body.style.setProperty('--secondColor', '#397'),
        document.body.style.setProperty('--deleteColor', '#f35'),
        document.body.style.setProperty('--equalColor', '#3b7'),
        document.body.style.setProperty('--bgBody', '#222'),
        document.body.style.setProperty('--textColor', '#fff'),
        document.body.style.setProperty('--textColorPad', '#000'),
        themeCount=0)
    :(
        document.body.style.setProperty('--bgCalculator', '#fff'),
        document.body.style.setProperty('--primaryColor', '#47f'),
        document.body.style.setProperty('--secondColor', '#58b'),
        document.body.style.setProperty('--deleteColor', '#f73'),
        document.body.style.setProperty('--equalColor', '#48e'),
        document.body.style.setProperty('--bgBody', '#aaa'),
        document.body.style.setProperty('--textColor', '#000'),
        document.body.style.setProperty('--textColorPad', '#fff')
    )
})

for(let number of numbers){
    number.addEventListener("click", ()=>{
        display.textContent = display.textContent + number.textContent
})}

divide.addEventListener("click", ()=>{
    display.textContent = display.textContent + "/"
})
multiply.addEventListener("click", ()=>{
    display.textContent = display.textContent + "*"
})
rest.addEventListener("click", ()=>{
    display.textContent = display.textContent + "-"
})
add.addEventListener("click", ()=>{
    display.textContent = display.textContent + "+"
})
point.addEventListener("click", ()=>{
    display.textContent = display.textContent + "."
})
zero.addEventListener("click", ()=>{
    display.textContent = display.textContent + "0"
})
dzero.addEventListener("click", ()=>{
    display.textContent = display.textContent + "00"
})
left.addEventListener("click", ()=>{
    display.textContent = display.textContent.slice(0, -1);
})
equal.addEventListener("click", ()=>{
    display.textContent = (eval(display.textContent))
})