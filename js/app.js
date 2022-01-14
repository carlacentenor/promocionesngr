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