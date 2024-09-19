// Mobile nav menu
const hamburger = document.getElementById("hamburger");
const closeButton = document.getElementById("btn-close");
const mobileNav = document.getElementById("nav-mobile");
const mobileNavLinks = document.getElementsByClassName("nav-link-mobile");

hamburger.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
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

// Testimonials
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function getVisibleCards() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function updateCarousel() {
  const visibleCards = getVisibleCards();
  const offset = -currentIndex * (100 / visibleCards);
  carousel.style.transform = `translateX(${offset}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function nextSlide() {
  const visibleCards = getVisibleCards();
  currentIndex = (currentIndex + 1) % (cards.length - visibleCards + 1);
  updateCarousel();
}

function startAutoplay() {
  setInterval(nextSlide, 5000);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

window.addEventListener("resize", updateCarousel);

updateCarousel();
startAutoplay();

// Mouse drag functionality
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", drag);
carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("mouseleave", dragEnd);

function dragStart(e) {
  isDragging = true;
  startPosition = e.clientX - currentTranslate;
  carousel.style.transition = "none";
}

function drag(e) {
  if (isDragging) {
    const currentPosition = e.clientX - startPosition;
    currentTranslate = currentPosition;
    carousel.style.transform = `translateX(${currentTranslate}px)`;
  }
}

function dragEnd() {
  isDragging = false;
  const visibleCards = getVisibleCards();
  const threshold = carousel.offsetWidth / visibleCards / 2;
  const draggedSlides = Math.round(currentTranslate / threshold);
  currentIndex = Math.max(
    0,
    Math.min(cards.length - visibleCards, currentIndex - draggedSlides)
  );
  updateCarousel();
  carousel.style.transition = "transform 0.5s ease";
}
