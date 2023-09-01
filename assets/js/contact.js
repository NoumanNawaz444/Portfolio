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


// blackmod

let day_night = document.getElementById('day_night')
let main_nav = document.getElementById('main_nav')
let body = document.getElementById('root')
let hero_section = document.getElementById('hero_section')
let contact_heading = document.getElementById('contact_heading')
let foooter = document.getElementById('foooter')

day_night.addEventListener('click' , day_night_toggle_portfolio)

function day_night_toggle_portfolio(){
    main_nav.classList.toggle('day_night_toggle')
    body.classList.toggle('day_night_toggle')
    hero_section.classList.toggle('day_night_hero')
    contact_heading.classList.toggle('day_night_hero')
    body.classList.toggle('bg_black')
    foooter.classList.toggle('day_night_toggle')
}



// footer_year

let footer_year = document.getElementById('footer_year')
footer_year.style.margin = '0 5px'

footer_year.innerText = new Date().getFullYear()
