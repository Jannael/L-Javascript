const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");

let cursor = {x:0, y:0};
let width = 0;
let height = 0;

//this functions found the position of the cursor, or finger, on the screen
const followCursor = (e) =>{
    cursor = {x: e.clientX, y: e.clientY};
    follow();
}
const touchMove = (e) => {
    cursorPos={x:e.targetTouche[0].offsetX,y:e.targetTouches[0].offsetY}
    follow();
}

const moveBear = (element, xrelation, yrelation) => {
    //this function get us the size and position of an elemeent 
    let offset = element.getBoundingClientRect();

    //the center is not a center exactly, what happens its if you add the position of the element, you will can get the position instead, you be on low numbers, since the incrementing its linear
    const centerX = offset.x + offset.width / 2;
    const centerY = offset.y + offset.height / 2;

    
    const distanceLeft = Math.round(
        ((cursor.x - centerX) * 100) / window.innerWidth
    );
    const distanceTop = Math.round(
        ((cursor.y - centerY) * 100) / window.innerHeight
    );

    element.style.transform = `translate(${distanceLeft / xrelation}px,${distanceTop / yrelation}px)`;
}

const follow = () => {
    if(eyes) moveBear(eyes, 1.8, 1.8);
    if(head) moveBear(head, 6, 6);
    if(ears) moveBear(ears, 0, 0);
    if(nose) moveBear(nose, 1, 1);
    if(snout) moveBear(snout, 1.5, 1.5);
}

window.addEventListener("mousemove", followCursor);
window.addEventListener('touchmove',touchMove);