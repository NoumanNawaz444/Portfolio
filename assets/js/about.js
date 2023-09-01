let ham = document.getElementById('ham')
let mobile_nav = document.getElementById('mobile_nav')
let cross = document.getElementById('cross')


ham.addEventListener('click' , navaya)

function navaya(){
    mobile_nav.style.opacity = 1 ;
    mobile_nav.style.width = '100%';
    mobile_nav.style.height = '100vh';
    mobile_nav.style.left = '0px';
    mobile_nav.style.pointerEvents = 'all';
    mobile_nav.style.top = 0 ;
}


cross.addEventListener('click' , navgya)

function navgya(){
    mobile_nav.style.width = '100%';
    mobile_nav.style.height = '100vh';
    mobile_nav.style.opacity = 0 ;
    mobile_nav.style.left = '0px';
    mobile_nav.style.top = 0 ;
    mobile_nav.style.pointerEvents = 'none'
}


let day_night = document.getElementById('day_night')
let main_nav = document.getElementById('main_nav')
let body = document.getElementById('root')
let intro = document.getElementById('intro')
let hobies_heading = document.getElementById('hobies_heading')
let hobby = document.getElementById('hobby')



day_night.addEventListener('click' , day_night_toggle_about)

function day_night_toggle_about(){
    main_nav.classList.toggle('day_night_toggle')
    body.classList.toggle('bg_black')
    intro.classList.toggle('bg_dark');
    hobies_heading.classList.toggle('bg_dark');
    hobby.classList.toggle('bg_dark');

}
