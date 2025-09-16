const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 88, // Adjust as needed
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});