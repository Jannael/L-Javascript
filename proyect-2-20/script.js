"use strict"
const icons = document.querySelectorAll(".nav_ul_li_icon");
const button = document.querySelector(".nav_button");
const spans = document.querySelectorAll(".nav_ul_li_span");
const buttonIcon = document.querySelector(".button_icon");
const nav = document.querySelector(".nav")
const links = document.querySelectorAll(".nav_ul_li_a");
var root = document.querySelector(':root'); 
let countButton = 0;
let countLink = 1;


links.forEach(link => {
    link.addEventListener("click", () => { 
        if (link.classList.contains("active_a")) {
            link.classList.remove("active_a");
        } else {
            links.forEach(link => link.classList.remove("active_a"));
            link.classList.add("active_a");
        }
    });
});

button.addEventListener("click", ()=>{
    spans.forEach(span => {
        span.classList.toggle("sidebar_active");
    });
    nav.classList.toggle("nav_active");

    countButton++;
    (countButton == 2) ? (
        buttonIcon.classList.remove("fa-xmark"),
        buttonIcon.classList.add("fa-bars"),
        countButton = 0
    ): (
        buttonIcon.classList.remove("fa-bars"),
        buttonIcon.classList.add("fa-xmark")
    );
})