const elements = {
    header: document.querySelector('header'),
    first_nav_el: document.querySelector('.first-nav-el'),
    section_hot_image:  document.querySelector('.section-hot-imgs'),
}

// this function returns a random number btween a and b
const getNumber = (a, b) => {
    return  Math.ceil(Math.random() * (a - b) + b); 
 }


// header background image change on button click
elements.first_nav_el.addEventListener('click', () => {
    elements.first_nav_el.textContent = `better now?`;
    elements.header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
    url(./images/background_${getNumber(0, 10)}.jpg)`;
})


/* Hot image section - image change on click */
elements.section_hot_image.addEventListener('click', (event) => {
   event.target.src = `images/img${getNumber(0,20)}.jpg`;
})



//The swiping animation on the customer section
/*---------------------------------------------------------*/
let slidesPerView;
const windowWidth = document.body.clientWidth;
if (windowWidth >= 1280) slidesPerView = 4;
else if (windowWidth >= 1022 && windowWidth < 1280) slidesPerView = 3;
else if (windowWidth >= 850 && windowWidth < 1022) slidesPerView = 2;
else slidesPerView = 1;

const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: slidesPerView,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

// making the customer review section responsive
const screenWidth1280 = window.matchMedia("(max-width: 1280px)");
screenWidth1280.addListener( () => {
   if (screenWidth1280.matches)  swiper.params.slidesPerView = 3; 
   else swiper.params.slidesPerView = 4; 
} )

const screenWidth1022 = window.matchMedia("(max-width: 1022px)");
screenWidth1022.addListener( () => {
    if (screenWidth1022.matches) swiper.params.slidesPerView = 2; 
    else  swiper.params.slidesPerView = 3; 
} )

const screenWidth900 = window.matchMedia("(max-width: 850px)");
screenWidth900.addListener( () => {
    if (screenWidth900.matches)  swiper.params.slidesPerView = 1;
    else swiper.params.slidesPerView = 2;
} )
/*--------------------------------------------------------------- */