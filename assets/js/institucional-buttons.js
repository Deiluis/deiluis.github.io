const misionValoresContainer = document.querySelector(".mision-valores__container");
const misionValoresShowButton = document.querySelector(".mision-valores__show-button");
const misionValoresIcon = document.querySelector(".mision-valores__icon");

const historiaContainer = document.querySelector(".historia__container");
const historiaShowButton = document.querySelector(".historia__show-button");
const historiaIcon = document.querySelector(".historia__icon");

const identidadContainer = document.querySelector(".identidad__container");
const identidadShowButton = document.querySelector(".identidad__show-button");
const identidadIcon = document.querySelector(".identidad__icon");

misionValoresShowButton.onclick = () => {
    misionValoresContainer.classList.toggle("mision-valores__container--show");
    misionValoresShowButton.classList.toggle("mision-valores__show-button--active");
    misionValoresIcon.classList.toggle("fa-times-circle");

    historiaContainer.classList.remove("historia__container--show");
    historiaShowButton.classList.remove("historia__show-button--active");
    historiaIcon.classList.remove("fa-times-circle");

    identidadContainer.classList.remove("identidad__container--show");
    identidadShowButton.classList.remove("identidad__show-button--active");
    identidadIcon.classList.remove("fa-times-circle");
}

historiaShowButton.onclick = () => {
    historiaContainer.classList.toggle("historia__container--show");
    historiaShowButton.classList.toggle("historia__show-button--active");
    historiaIcon.classList.toggle("fa-times-circle");

    misionValoresContainer.classList.remove("mision-valores__container--show");
    misionValoresShowButton.classList.remove("mision-valores__show-button--active");
    misionValoresIcon.classList.remove("fa-times-circle");

    identidadContainer.classList.remove("identidad__container--show");
    identidadShowButton.classList.remove("identidad__show-button--active");
    identidadIcon.classList.remove("fa-times-circle");
}

identidadShowButton.onclick = () => {
    identidadContainer.classList.toggle("identidad__container--show");
    identidadShowButton.classList.toggle("identidad__show-button--active");
    identidadIcon.classList.toggle("fa-times-circle");

    misionValoresContainer.classList.remove("mision-valores__container--show");
    misionValoresShowButton.classList.remove("mision-valores__show-button--active");
    misionValoresIcon.classList.remove("fa-times-circle");

    historiaContainer.classList.remove("historia__container--show");
    historiaShowButton.classList.remove("historia__show-button--active");
    historiaIcon.classList.remove("fa-times-circle");
}