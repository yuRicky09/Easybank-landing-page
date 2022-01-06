const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const navbar = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");

function showNavbar() {
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
  navbar.classList.add("show");
  overlay.classList.add("show");
}

function closeNavBar() {
  hamburgerBtn.style.display = "block";
  closeBtn.style.display = "none";
  navbar.classList.remove("show");
  overlay.classList.remove("show");
}

hamburgerBtn.addEventListener("click", showNavbar);
closeBtn.addEventListener("click", closeNavBar);
overlay.addEventListener("click", closeNavBar);
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeNavBar();
    hamburgerBtn.style.display = "none";
  } else {
    closeNavBar();
  }
});
