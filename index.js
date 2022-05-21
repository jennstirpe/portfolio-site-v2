const headshot = document.querySelector("#headshot");
const contact = document.querySelector(".work__contactsList")

headshot.addEventListener("click", () => {
    contact.classList.toggle("show");
})