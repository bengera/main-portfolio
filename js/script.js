'use strict'
// HEADER ELEMENTS
const headerAnimate = document.querySelector('.header__main')
const introAnimate = document.querySelector('.header__intro--text')
const iconsAnimate = document.querySelector('.header__icons')
const buttonAnimate = document.querySelector('.header__cta--button')

// SECTION ELEMENTS
const workSection = document.querySelector('.work')
const aboutSection = document.querySelector('.about')


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
    } 

    

});

function scrollWork() {
    let workSection = document.querySelector(".work");
    workSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    
}

function scrollAbout() {
    let aboutSection = document.querySelector(".footer"); // due to late transition
    aboutSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    
}



