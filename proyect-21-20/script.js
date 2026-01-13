const $nav = document.querySelector('aside nav');
const $btn = document.querySelector('aside button');
const $btnImg = $btn.querySelector('img');
const $aside = document.querySelector('aside');
const $aLink = $nav.querySelectorAll('a');
const $menuSubUl = $nav.querySelector('.menu-sub-ul');
const $profileSubUl = $nav.querySelector('.profile-sub-ul');
const $menuSubUlWraper = $nav.querySelector('.menu-sub-ul .wraper');
const $profileSubUlWraper = $nav.querySelector('.profile-sub-ul .wraper');

const media = window.matchMedia("(width < 700px)");

let btnCount = 0;
let isMobile = media.matches;

media.addEventListener("change", (e)=> updateNavbar(e))
document.addEventListener("resize", ()=> {
    handleSubListState($profileSubUl);
    handleSubListState($menuSubUl);
})

function updateNavbar(e){
    isMobile = e.matches;
    (isMobile)? $nav.setAttribute('inert', '')
    : $nav.removeAttribute('inert')
    resetSideBarByResize();
}

function handleSidebarState(){
    $aside.classList.toggle('show');
    btnCount++;
    if(btnCount % 2) {
        $btnImg.src = "svg/close.svg";
        $nav.removeAttribute(`inert`);
        $btn.setAttribute('aria-expanded', 'true');
    }else{
        $btnImg.src = "svg/open.svg";
        $nav.setAttribute('inert', ``);
        $btn.removeAttribute('aria-expanded');
        btnCount = 0;
    }
}

function handleSubListState(element){
    const event = (!isMobile)? 'mouseenter' : 'click';
    const secondEvent = (!isMobile)? 'mouseleave' : 'click';

    element.addEventListener(event, ()=>{
        const subList = element.querySelector("ul");

        if(event === `click`) subList.classList.toggle('show-sub-ul');
        else subList.classList.add('show-sub-ul');
    
        subList.addEventListener(secondEvent, ()=>{
            subList.classList.remove('show-sub-ul');

        })
    })
}

function resetSideBarByResize(){
    $profileSubUl.querySelector('ul').classList.remove('show-sub-ul');
    $menuSubUl.querySelector('ul').classList.remove('show-sub-ul');
    if(isMobile){
        $btnImg.src = "svg/open.svg";
    }
}

$aLink.forEach(link => {
    link.addEventListener("click", ()=>{
        if(isMobile){
            $btnImg.src = "svg/open.svg";
            $aside.classList.remove('show');
            $nav.setAttribute('inert', '');
            $btn.removeAttribute('aria-expanded');
        }
        btnCount++;

        if(link.classList.contains('active')){
            link.classList.remove('active');
            $profileSubUlWraper.classList.remove('active');
            $menuSubUlWraper.classList.remove('active');
        }else{
            $aLink.forEach(link => {
                link.classList.remove('active');
                $menuSubUlWraper.classList.remove('active');
                $profileSubUlWraper.classList.remove('active');
            })
            link.classList.add('active'); 
            if($profileSubUl.contains(link)) {
                $profileSubUlWraper.classList.add('active');

            }else if($menuSubUl.contains(link)){
                $menuSubUlWraper.classList.add('active');
            }
        }

    })
});

$btn.addEventListener('click', handleSidebarState);

updateNavbar(media);
handleSubListState($profileSubUl);
handleSubListState($menuSubUl);