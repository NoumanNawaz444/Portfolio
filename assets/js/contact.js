document.addEventListener('mousemove', function(e) {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
  });

let ham = document.getElementById('ham')
let mobile_nav = document.getElementById('mobile_nav')
let cross = document.getElementById('cross')


ham.addEventListener('click' , navaya)

function navaya(){
    mobile_nav.style.left = '0';
    mobile_nav.style.pointerEvents = 'all';
}


cross.addEventListener('click' , navgya)

function navgya(){
    mobile_nav.style.left = '-700%';
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
