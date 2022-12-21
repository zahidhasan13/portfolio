$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });


    let hamberger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile_nav')

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open')
    })
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open')
    })
});    