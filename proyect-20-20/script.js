function countTo(object, counter){
    let start = 0;
    const interval = setInterval(() => {
        start = start + 10;
        object.textContent = start;
        if (start >= counter) {
            clearInterval(interval);
        }
    }, 0.000001); 
}

countTo(document.getElementById("facebook"), 1200, 0)
countTo(document.getElementById("twiter"), 3680, 0)
countTo(document.getElementById("instagram"), 10100 , 0)