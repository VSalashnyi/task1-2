$(document).ready(() => {
    $('.menu-icon').on('click', () => {
        $('nav ul').toggleClass('showing');
    })
})

$('.menu-icon').on('click', () => {
    $('nav').addClass('light');
})

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('light');
    } else {
        $('nav').removeClass('light');
    }
})

