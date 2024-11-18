const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");
let isMenuOpen = false;

hamburger.addEventListener("click", ()=>{
  navlist.classList.toggle("navlist-active");
  isMenuOpen = navlist.classList.contains('navlist-active');
})

window.addEventListener('scroll', () => {
  if (isMenuOpen) {
      navlist.classList.remove('navlist-active');
      isMenuOpen = false;
  }
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
      delay: 2000
    },
    breakpoints:{
      1200: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });