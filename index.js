
const contactBtn = document.querySelector(".contact__btn");
const contactForm = document.querySelector("#contactform");
const closeBtn = document.querySelector("#close-form");

contactBtn.addEventListener("click", () => {
    contactForm.classList.add("show-form");
})

closeBtn.addEventListener("click", () => {
    contactForm.classList.remove("show-form");
})