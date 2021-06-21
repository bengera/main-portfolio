'use strict'
// HEADER ELEMENTS
const headerAnimate = document.querySelector('.header__main')
const introAnimate = document.querySelector('.header__intro--text')
const iconsAnimate = document.querySelector('.header__icons')
const buttonAnimate = document.querySelector('.header__cta--button')

// SECTION ELEMENTS
const workSection = document.querySelector('.work')
const aboutSection = document.querySelector('.about')
const headerTitleSection = document.querySelector('.header-title')

// MOBILE-NAV ELEMENTS
const mobileNav = document.querySelector('.mobile-nav')
const navigationMain = document.querySelector('.navigation')
const navLinks = document.querySelector('.navigation__link')

navLinks.addEventListener('click', ()=>{
    navigationMain.classList.remove('open');
})


mobileNav.addEventListener('click', () => {
    navigationMain.classList.toggle('open');
})



// HEADER EVENT LISTENER
window.addEventListener('load', () => {
    console.log('loaded');
    headerAnimate.classList.add('show')
    introAnimate.classList.add('show')
    iconsAnimate.classList.add('show')
    buttonAnimate.classList.add('show')
})



//WORK SECTION EVENT LISTENER
let scrollPosition = window.scrollY;

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 450) {
        workSection.classList.add('show');
    } 

    if (scrollPosition >= 1500) {
        aboutSection.classList.add('show');
        navigationMain.classList.remove('open');
    } 
    

    

});




function scrollWork() {
    let headerTitleSection = document.querySelector(".header-title");
    headerTitleSection.scrollIntoView(true);

    
}

function scrollAbout() {
    let aboutSection = document.querySelector(".footer"); // due to late transition
    aboutSection.scrollIntoView(true);

    
}


