const swiperWrapperVillians = document.querySelector(".swiper-villians .swiper-wrapper");
fragment = document.createDocumentFragment();

secondSection.forEach(element =>{
    const slide = document.createElement("DIV");
    const article = document.createElement("ARTICLE");
    slide.classList.add("swiper-slide");

    article.innerHTML = `
        <img src=" ${element.img_root} " alt="" loading="lazy">
        <h3> ${element.title} </h3>
        <p> ${element.paragraph} </p> `;
    
    slide.appendChild(article);
    fragment.appendChild(slide);
})

swiperWrapperVillians.appendChild(fragment);
fragment = "";

function createSwiperVillians(boolean){
    if(boolean){
        swiperVillians = new Swiper(".swiper-villians", {
            grabCursor: true,
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            },
        )
    }else{
        if(swiperVillians && swiperVillians.destroy){
            swiperVillians.destroy(true, true);
            swiperVillians = null;
        }
    }
}