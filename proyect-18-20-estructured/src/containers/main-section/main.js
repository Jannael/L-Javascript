const swiperWrapperMain = document.querySelector(".swiper-wrapper");
let fragment = document.createDocumentFragment();

main.forEach(element =>{
    const containertxt = document.createElement("DIV");
    const slide = document.createElement("DIV");

    containertxt.classList.add("container");
    slide.classList.add("swiper-slide");

    slide.innerHTML = `<img src="${element.img_root}" alt="" loading="lazy">` ;
    containertxt.innerHTML = `
        <h3>${element.title}</h3>
        <span>"${element.sentence}"</span>
        <p>${element.paragraph}/p>`;
    
    slide.appendChild(containertxt);
    fragment.appendChild(slide);
})

swiperWrapperMain.appendChild(fragment);

let swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    loop: true, 
});

fragment = "";