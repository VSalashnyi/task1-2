$('.main-slider').slick({
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
});

$('.list-comments').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '60px',
    dots: false,
    asNavFor: '.list-comments-nav'
});

$('.list-comments-nav').slick({
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.list-comments',
    focusOnSelect: true,
    centerMode: true,
    arrows: true,
});



