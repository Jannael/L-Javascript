const media = window.matchMedia("(width < 610px)");
let swiperSecondCharacters = null;
let swiperVillians = null;
let swiperSixth = null;

createSwiperVillians(media.matches);
createSwiperSixth(media.matches)
createSwiperSecondCharacters(media.matches);


media.addEventListener("change", (e)=> {
    updateNavbar(e);
    createSwiperSecondCharacters(media.matches);
    createSwiperVillians(media.matches);    
    createSwiperSixth(media.matches);
})
const returnButton = document.getElementById("return-to-home");
returnButton.addEventListener("click", ()=> window.scrollTo(0, 0))

// window.addEventListener("scroll", ()=>{
//     const scrollTop = Math.round((window.scrollY / window.innerHeight) * 100);
//     if(scrollTop >= 50) returnButton.classList.remove("not-show");
//     else returnButton.classList.add("not-show")
// })

const home = document.getElementById("home");
const observer = new IntersectionObserver(verifyVisibility);

function verifyVisibility(entries){
    const entry = entries[0];
    (entry.isIntersecting)? returnButton.classList.add("not-show")
    : returnButton.classList.remove("not-show")
}
observer.observe(home);