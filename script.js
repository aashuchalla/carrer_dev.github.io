var swiper = new Swiper(".class2", {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });