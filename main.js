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
