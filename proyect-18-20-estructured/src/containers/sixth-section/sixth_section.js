function createSwiperSixth(boolean){
    if(boolean){
        swiperSixth = new Swiper(".swiper-sixth-section", {
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
        if(swiperSixth && swiperSixth.destroy){
            swiperSixth.destroy(true, true);
            swiperSixth = null;
        }
    }
}