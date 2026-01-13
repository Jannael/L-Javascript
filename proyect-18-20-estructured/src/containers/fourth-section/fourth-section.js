const swiperWrapperSecondCharacters = document.querySelector(".fourth_section .swiper-wrapper");
fragment = document.createDocumentFragment();

thirdSection.forEach(element =>{
    const article = document.createElement("ARTICLE");
    const slide = document.createElement("DIV");
    slide.classList.add("swiper-slide");

    article.innerHTML = `
        <figure>
            <img src=${element.img_root} alt="" loading="lazy">
        </figure>
        <h3>${element.title}</h3>
        <p>${element.paragraph}</p>`;

    slide.appendChild(article)
    fragment.appendChild(slide);
})

swiperWrapperSecondCharacters.appendChild(fragment);

fragment = "";

function createSwiperSecondCharacters(boolean){
    if(boolean){
        swiperSecondCharacters = new Swiper(".swiper-second-characters", {
            grabCursor: true,
            effect: "cards",
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
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
        if(swiperSecondCharacters && swiperSecondCharacters.destroy){
            swiperSecondCharacters.destroy(true, true);
            swiperSecondCharacters = null;
        }
    }
}