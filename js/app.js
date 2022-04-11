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
  $('.responsive-card').slick();
}



$('.responsive-promotion').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,


  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
      }
    }

  ]
});


// Modal det términos y condiciones

// var myModal = document.getElementById('myModal');
// var myInput = document.getElementById('myInput');

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// });


// Tag Manager

const brandsHeader = document.querySelectorAll('.brands-header');
const bannerShedule = document.querySelector('.bn-schedule-js');
const products = document.querySelectorAll('.card-promotion');
const brandsFooter = document.querySelectorAll('.card-schedule');

// FLechas Carrusel Promociones
const arrowPrev = document.querySelector('.arrows .slick-prev');
const arrowNext = document.querySelector('.arrows  .slick-next');

//Formulario
const buttonSend = document.querySelector('.btn-send');

// Data Layer Brands Header
brandsHeader.forEach(element => {
  element.addEventListener('click', () => {
    let brandSelection = element.dataset.brand;
    HeaderBrand(brandSelection);

  });
});

// bannerShedule.addEventListener('click', () => {
//   BannerSchedule();
// });

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

arrowPrev.addEventListener('click', () => {
  console.log('izquierda');
  ArrowPrev();
});


arrowNext.addEventListener('click', () => {
  console.log('Derecha');
  ArrowNext();
});

// Data Layer
const HeaderBrand = (brand) => {
  dataLayer.push({
    'event': 'virtualEvent',
    'category': 'Landing multimarca',
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
    'category': 'Landing multimarca',
    'action': 'Selección de Producto',
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

const ArrowPrev = () => {
  dataLayer.push({
    'event': 'virtualEvent',
    'category': 'Landing multimarca',
    'action': 'Selección de flecha de interacción',
    'label': 'Izquierda'
  })
}

const ArrowNext = () => {
  dataLayer.push({
    'event': 'virtualEvent',
    'category': 'Landing multimarca',
    'action': 'Selección de flecha de interacción',
    'label': 'Derecha'
  })
}




