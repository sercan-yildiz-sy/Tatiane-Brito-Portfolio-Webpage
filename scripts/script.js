
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  loop: true,
  centeredSlidesBounds: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    0:{
      slidesPerView: 1.25,
      
    },
    768 :{
      slidesPerView: 1.35,
    }
  }
});