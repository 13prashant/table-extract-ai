// Mobile nav menu
const hamburger = document.getElementById("hamburger");
const closeButton = document.getElementById("btn-close");
const mobileNav = document.getElementById("nav-mobile");
const mobileNavLinks = document.getElementsByClassName("nav-link-mobile");

hamburger.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");

  // Disable scrolling
  document.body.classList.add("overflow-hidden");
});

closeButton.addEventListener("click", () => {
  mobileNav.classList.add("hidden");

  // Enable scrolling
  document.body.classList.remove("overflow-hidden");
});

for (let i = 0; i < mobileNavLinks.length; i++) {
  mobileNavLinks[i].addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;

  // Check if the click is outside the nav-mobile, hamburger, and close button
  if (
    !mobileNav.contains(target) &&
    !hamburger.contains(target) &&
    !closeButton.contains(target)
  ) {
    mobileNav.classList.add("hidden");
  }
});

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const answer = item.querySelector(".faq-answer");
  const toggle = item.querySelector(".faq-toggle");

  item.addEventListener("click", () => {
    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
      toggle.textContent = "+";
    } else {
      toggle.textContent = "-";
    }
  });
});

// Testimonials carousel
const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true,
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// Show header on scroll
const header = document.getElementById("main-header");
const scrollThreshold = 100;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > scrollThreshold) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed", "header-hidden");
  }
});
