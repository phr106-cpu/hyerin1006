AOS.init();

// Banner Swiper
var bannerSwiper = new Swiper(".bannerSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});
// Product Swiper
var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
