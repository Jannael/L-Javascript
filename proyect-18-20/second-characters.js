let swiperSecondCharacters = null;

function createSwipersecond(e){
    isMobile = e.matches;
    if (isMobile){
        swiperSecondCharacters = new Swiper(".swiper-second-characters", {
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
            loop: true,
            });
        }else {
            if(swiperSecondCharacters && swiperSecondCharacters.destroy){
                swiperSecondCharacters.destroy(true, true);
                swiperSecondCharacters = null;
            }
        }
}
