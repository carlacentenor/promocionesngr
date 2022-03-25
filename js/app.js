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


    $('.responsive-card').slick({
      infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
  
  
      
    });


}


$('.responsive-promotion').slick({
    dots: true,
    arrows:true,
    infinite: true,
    speed: 3000,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 3,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ]
  });
          

// Modal det términos y condiciones

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


// Tag Manager

const brandsHeader = document.querySelectorAll('.brands-header');
const bannerShedule = document.querySelector('.bn-schedule-js');
const products = document.querySelectorAll('.card-promotion');
const brandsFooter = document.querySelectorAll('.card-schedule');

// Data Layer Brands Header
brandsHeader.forEach(element => {
    element.addEventListener('click', () => {
        let brandSelection = element.dataset.brand;
        HeaderBrand(brandSelection);

    });
});

bannerShedule.addEventListener('click', () => {
    BannerSchedule();
});

products.forEach(element => {
    element.addEventListener('click', () => {
        let brandSelection = element.dataset.brand;
        let productSelection = element.dataset.product;
        ProductsBrands(productSelection, brandSelection);

    });
});


brandsFooter.forEach(element => {
    element.addEventListener('click', () => {
        let brandSelection = element.dataset.brand;

        BrandsSchedule(brandSelection);

    });
});

// Data Layer
const HeaderBrand = (brand) => {
    dataLayer.push({
        'event': 'virtualEvent',
        'category': 'Landing Promociones NGR',
        'action': 'Selección Marca',
        'label': brand
    });
};


const BannerSchedule = () => {

    dataLayer.push({
        'event': 'virtualEvent',
        'category': 'Landing Promociones NGR',
        'action': 'Selección cintillo de horario',
        'label': '(not available)'
    });

}

const ProductsBrands = (product, brand) => {
    dataLayer.push({
        'event': 'virtualEvent',
        'category': 'Landing Promociones NGR',
        'action': 'Selección Producto',
        'label': `${product}-${brand}`
    });

}

const BrandsSchedule = (brand) => {
    dataLayer.push({
        'event': 'virtualEvent',
        'category': 'Landing Promociones NGR',
        'action': 'Selección de horario',
        'label': brand
    });

}