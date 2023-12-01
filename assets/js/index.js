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
let about_us = document.getElementById('about_us')
let Services = document.getElementById('Services')
let about_heading = document.getElementById('about_heading')
let services_heading = document.getElementById('services_heading')
let testimonial_heading = document.getElementById('testimonial_heading')
let testimonial = document.getElementById('testimonial')
let contact_heading = document.getElementById('contact_heading')
let foooter = document.getElementById('foooter')
let skill_heading = document.getElementById('skill_heading')
let skills = document.getElementById('skills')

day_night.addEventListener('click' , day_night_toggle)

function day_night_toggle(){
    main_nav.classList.toggle('day_night_toggle')
    body.classList.toggle('day_night_toggle')
    hero_section.classList.toggle('day_night_hero')
    about_us.classList.toggle('day_night_hero')
    Services.classList.toggle('day_night_hero')
    testimonial.classList.toggle('day_night_hero')
    about_heading.classList.toggle('day_night_hero')
    services_heading.classList.toggle('day_night_hero')
    contact_heading.classList.toggle('day_night_hero')
    testimonial_heading.classList.toggle('day_night_hero')
    skills.classList.toggle('day_night_hero')
    skill_heading.classList.toggle('day_night_hero')
    body.classList.toggle('bg_black')
    foooter.classList.toggle('day_night_toggle')
}





window.addEventListener("scroll" , scrollAll)


function scrollAll(){

    let windowHeight = window.innerHeight / 5 * 4

    let aboutHeading = document.querySelectorAll('.about_heading')

    aboutHeading.forEach((aboutHead)=>{
        let aboutHeadTop = aboutHead.getBoundingClientRect().top ;

        if(aboutHeadTop < windowHeight){
            aboutHead.classList.add('top')
        }else{
            aboutHead.classList.remove('top')
        }
    })
    

    let aboutUs = about_us.getBoundingClientRect().top ;

    if(aboutUs < windowHeight){
        about_us.classList.add('top')
    }else{
        about_us.classList.remove('top')
    }

    let contact_us = document.getElementById('contact')

    let contactUS = contact_us.getBoundingClientRect().top ;

    if(contactUS < windowHeight){
        contact_us.classList.add('top')
    }else{
        contact_us.classList.remove('top')
    }

    let cards = document.querySelectorAll('.card')

    cards.forEach((card)=>{
        let cardTop = card.getBoundingClientRect().top;

        if(cardTop < windowHeight){
            card.classList.add('top')
        }
        else{
            card.classList.remove('top')
        }
    })
}



