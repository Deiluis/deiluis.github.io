const menuBtn = document.querySelector('#menu-button');
const navBar = document.querySelector('.nav__options-bar');

const subMenuBtn = document.querySelector(".nav__item--submenu");
const subMenuLink = document.querySelector(".nav__link--submenu");
const subMenu = document.querySelector(".nav__submenu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('nav__options-bar--show');

    if(subMenu.classList.contains("desplegar")) {
        subMenu.classList.remove("desplegar");
        subMenu.removeAttribute("style");
    }
});

window.addEventListener("scroll", () => {

    if ((window.innerWidth < 860) &&
        (window.innerWidth < window.innerHeight)) {
        
        menuBtn.classList.remove('fa-times');
        navBar.classList.remove('nav__options-bar--show');

        if(subMenu.classList.contains("desplegar")) {
            subMenu.classList.remove("desplegar");
            subMenu.removeAttribute("style");
        }
    }  
});

subMenuBtn.addEventListener("click", () => {

    if(window.innerWidth < 860) {

        const height = subMenu.scrollHeight;
        
        if(subMenu.classList.contains("desplegar")) {
            subMenu.classList.remove("desplegar");
            subMenu.removeAttribute("style");
        } else {
            subMenu.classList.add("desplegar");
            subMenu.style.height = height + "px";
        }

    }
});

subMenuLink.addEventListener("click", (e) => {
    e.preventDefault();
});