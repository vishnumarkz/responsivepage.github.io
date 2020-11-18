const navBar = document.querySelector(".icon__nav-bar");
const mainNav = document.querySelector(".nav-links-responsive");
const closeNavBar = document.querySelector(".close-icon__nav-bar");

navBar.addEventListener("click", function () {
    mainNav.classList.toggle("show");
    closeNavBar.classList.toggle("show");
});

closeNavBar.addEventListener("click", function () {
    mainNav.classList.toggle("show");
    closeNavBar.classList.toggle("show");
});