const swiper = new Swiper(".heroSwiper", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener('DOMContentLoaded', () => {
  // Logika menutup menu mobile secara otomatis saat tautan navigasi diklik
  const mobileMenuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.menu-link a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenuToggle) {
        mobileMenuToggle.checked = false;
      }
    });
  });
});