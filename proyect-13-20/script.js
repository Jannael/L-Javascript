setTimeout(()=>{
    document.querySelector(".loading-page").style.display = "none";
    document.querySelector("article").style.display = "block"
}, 6000)

gsap.to("#bg",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.5
})
gsap.to("#goku",{
    scrollTrigger:{
        scrub:1
    },
    scale:0.7
})
gsap.to("#cloud1",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.2
})
gsap.to("#cloud2",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.2
})