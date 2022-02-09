const menuBtn = document.querySelector('#menu-button');
const navBar = document.querySelector('.nav__options-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('nav__options-bar--show');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('nav__options-bar--show');
}