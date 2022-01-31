let slider = document.querySelector('.brands-js');

const mediaQuery = window.matchMedia('(max-width: 767px)');
if (mediaQuery.matches) {
  
    $('.brands-slider-mobile').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

  }

