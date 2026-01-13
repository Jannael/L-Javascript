let swiperVillian = null;

function createSwiper(e){
    isMobile = e.matches;
    if (isMobile){
        swiperVillian = new Swiper(".swiper-villians", {
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
            });
        }else {
            if(swiperVillian && swiperVillian.destroy){
                swiperVillian.destroy(true, true);
                swiperVillian = null;
            }
        }
}
