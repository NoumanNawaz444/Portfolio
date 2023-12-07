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


// dark mod


let day_night = document.getElementById('day_night')
let main_nav = document.getElementById('main_nav')
let body = document.getElementById('root')
let intro = document.getElementById('intro')
let hobies_heading = document.getElementById('hobies_heading')
let hobby = document.getElementById('hobby')
let edu_heading = document.getElementById('edu_heading')
let edu = document.getElementById('edu')
let skill_heading = document.getElementById('skill_heading')
let skills = document.getElementById('skills')
let interest_heading = document.getElementById('interest_heading')
let Interest = document.getElementById('Interest')
let foooter = document.getElementById('foooter')
let contact_heading = document.getElementById('contact_heading')



day_night.addEventListener('click' , day_night_toggle_about)

function day_night_toggle_about(){
    main_nav.classList.toggle('day_night_toggle')
    foooter.classList.toggle('day_night_toggle')
    body.classList.toggle('bg_black')
    intro.classList.toggle('bg_dark');
    hobies_heading.classList.toggle('bg_dark');
    edu_heading.classList.toggle('bg_dark');
    skill_heading.classList.toggle('bg_dark');
    interest_heading.classList.toggle('bg_dark');
    contact_heading.classList.toggle('bg_dark');
    hobby.classList.toggle('bg_dark');
    edu.classList.toggle('bg_dark');
    skills.classList.toggle('bg_dark');
    Interest.classList.toggle('bg_dark');
}
