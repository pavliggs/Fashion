$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.products__block').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow">PREV</button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.featured__block').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    $('.blognews__block').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    const iconSearch = document.querySelector('.icons__search');
    const body = document.querySelector('body');

    iconSearch.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.add('icons__search_active');
    });

    body.addEventListener('click', function(event) {
        iconSearch.classList.remove('icons__search_active');
    });
});