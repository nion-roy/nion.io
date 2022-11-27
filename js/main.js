
// MIXITUP MENU JS
$("#portfolio").mixItUp();
// MIXITUP MENU JS

// START MENU JS
if ($(window).scrollTop() > 200) {
   $(".fixed-top").addClass("menu-bg");
} else {
   $(".fixed-top").removeClass("menu-bg");
}
$(window).on("scroll", function () {
   if ($(window).scrollTop() > 100) {
      $(".site-navigation").addClass("navbar-fixed");
   } else {
      $(".site-navigation").removeClass("navbar-fixed");
   }
});
// END MENU JS

// CounterUp MENU JS
$(".counterUp").counterUp({
   delay: 10,
   time: 1200,
});
// CounterUp MENU JS

// light gallery MENU JS
lightGallery(document.getElementById("work_content"), {
   selector: ".item",
   loop: false,
   mode: "lg-fade",
   download: false,
});
// light gallery MENU JS

// Menu Bar JS
document.querySelector(".menu_bar").addEventListener("click", menuFunction);
document.getElementById("navOverLay").addEventListener("click", menuFunction);

function menuFunction() {
   document.querySelector(".mobile-view").classList.toggle("active");
   document.getElementById("navOverLay").classList.toggle("active");
}
// Menu Bar JS

// Theme Toggle JS
let themeToggler = document.querySelector("#theme-toggler");
themeToggler.onclick = () => {
   themeToggler.classList.toggle("fa-sun");
   if (themeToggler.classList.contains("fa-sun")) {
      document.querySelector("body").classList.add("dark-theme");
   } else {
      document.querySelector("body").classList.remove("dark-theme");
   }
};
// Theme Toggle JS

// Testimonial Slider JS
var swiper = new Swiper(".coverFlow", {
   effect: "coverflow",
   grabCursor: false,
   centeredSlides: true,
   initialSlide: 2,
   slidesPerView: "auto",
   coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
   },
});
// Testimonial Slider JS
