const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
console.log("your name")

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});


navLinks.addEventListener('click', ()=> {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});


const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};


ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".destination__card", {
    ...scrollRevealOption,
    interval: 500,
     
});
// ScrollReveal().reveal(".journey__card", {
//     ...scrollRevealOption,
//     interval: 500,
     
// });