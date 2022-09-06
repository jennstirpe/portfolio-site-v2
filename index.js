const openMenuIcon  = document.querySelector(".open");
const closeMenuIcon  = document.querySelector(".close");
const navLinks = document.querySelectorAll(".menu__link");

const menu = document.querySelector(".menu");

// change scroll padding
const navigationHeight = document.querySelector(".header__nav").offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");

// open navigation menu on small screens
openMenuIcon.addEventListener("click", () => {
    menu.classList.remove("menu-closed");
})
closeMenuIcon.addEventListener("click", () => {
    menu.classList.add("menu-closed");
})

// close navigation if one of the links is selected
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("menu-closed");
    })
})

