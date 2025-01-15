"use strict"
const divs = document.querySelectorAll(".zone");
let count = 0;
let player = "playerOne";
let positionTwo = [];
let positionOne = [];
let classCount = 0;
let text = document.querySelector(".player")

const resetGame = () => {
    divs.forEach(div => { div.classList.remove("playerOne", "playerTwo"); });
    count = 0; player = "playerOne"; 
    positionOne = []; 
    positionTwo = []};

const checkWin = (position, winner) =>{
    classCount = 0 
    if(position.includes(1) && position.includes(2) && position.includes(3)){text.textContent = `player ${winner} WON`; resetGame();}
    if(position.includes(4) && position.includes(5) && position.includes(6)){text.textContent = `player ${winner} WON`; resetGame();}
    if(position.includes(7) && position.includes(8) && position.includes(9)){text.textContent = `player ${winner} WON`; resetGame();}
    if(position.includes(1) && position.includes(4) && position.includes(7)){text.textContent = `player ${winner} WON`; resetGame();}
    if(position.includes(2) && position.includes(5) && position.includes(8)){text.textContent = `player ${winner} WON`; resetGame();}
    if(position.includes(3) && position.includes(6) && position.includes(9)){text.textContent = `player ${winner} WON`; resetGame();}
    if(position.includes(1) && position.includes(5) && position.includes(9)){text.textContent = `player ${winner} WON`; resetGame();}
    if(position.includes(3) && position.includes(5) && position.includes(7)){text.textContent = `player ${winner} WON`; resetGame();}
    for(let i = 0; i < 9; i++){if(divs[i].classList.contains("playerOne") || divs[i].classList.contains("playerTwo")){classCount++}}
    if(classCount == 9) {resetGame(); text.textContent =  "tie"};}

for (let i = 0; i < 9; i++) {
    divs[i].addEventListener("click", () => {
        if (!divs[i].classList.contains("playerOne") && !divs[i].classList.contains("playerTwo")) {
            divs[i].classList.add(player);
            count++;
            if (count % 2) {player = "playerTwo"; positionOne[i+1] = i+1; 
                    text.textContent = "2";}
                else {player = "playerOne"; positionTwo[i+1] = i+1
                    text.textContent = "1";}
    checkWin(positionOne, 1);
    checkWin(positionTwo, 2);
}});}