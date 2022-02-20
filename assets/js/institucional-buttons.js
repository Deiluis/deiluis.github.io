const misionValoresContainer = document.querySelector(".mision-valores__container");
const misionValoresShowButton = document.querySelector(".mision-valores__show-button");
const misionValoresIcon = document.querySelector(".mision-valores__icon");

const historiaContainer = document.querySelector(".historia__container");
const historiaShowButton = document.querySelector(".historia__show-button");
const historiaIcon = document.querySelector(".historia__icon");

const identidadContainer = document.querySelector(".identidad__container");
const identidadShowButton = document.querySelector(".identidad__show-button");
const identidadIcon = document.querySelector(".identidad__icon");

misionValoresShowButton.addEventListener("click", () => {
    misionValoresShowButton.classList.toggle("mision-valores__show-button--active");
    misionValoresIcon.classList.toggle("fa-times-circle");

    const height = misionValoresContainer.scrollHeight;

    if(misionValoresContainer.classList.contains("desplegar")) {
        misionValoresContainer.classList.remove("desplegar");
        misionValoresContainer.removeAttribute("style");

        misionValoresShowButton.style.transition = "0s border-radius 0s, 0.5s background"

    } else {
        misionValoresContainer.classList.add("desplegar");
        misionValoresContainer.style.height = height + 25 + "px";

        misionValoresShowButton.style.transition = "1s border-radius 0.5s, 0.5s background"
    }
});

historiaShowButton.addEventListener("click", () => {
    historiaShowButton.classList.toggle("historia__show-button--active");
    historiaIcon.classList.toggle("fa-times-circle");

    const height = historiaContainer.scrollHeight;

    if(historiaContainer.classList.contains("desplegar")) {
        historiaContainer.classList.remove("desplegar");
        historiaContainer.removeAttribute("style");

        historiaShowButton.style.transition = "0s border-radius 0s, 0.5s background"

    } else {
        historiaContainer.classList.add("desplegar");
        historiaContainer.style.height = height + 25 + "px";

        historiaShowButton.style.transition = "1s border-radius 0.5s, 0.5s background"
    }
});

identidadShowButton.addEventListener("click", () => {
    identidadShowButton.classList.toggle("identidad__show-button--active");
    identidadIcon.classList.toggle("fa-times-circle");

    const height = identidadContainer.scrollHeight;

    if(identidadContainer.classList.contains("desplegar")) {
        identidadContainer.classList.remove("desplegar");
        identidadContainer.removeAttribute("style");

        identidadShowButton.style.transition = "0s border-radius 0s, 0.5s background"

    } else {
        identidadContainer.classList.add("desplegar");
        identidadContainer.style.height = height + 25 + "px";

        identidadShowButton.style.transition = "1s border-radius 0.5s, 0.5s background"
    }
});