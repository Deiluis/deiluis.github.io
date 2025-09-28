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
<<<<<<< HEAD
=======

    if (!misionValoresShowButton.classList.contains("mision-valores__show-button--active")) {
        misionValoresIcon.style.transform = "rotate(0)";
    } else {
        misionValoresIcon.style.transform = "rotate(90deg)";
    }

    //Al dar click, se activa la clase que despliga el contenedor del texto y reajusta su alto.
>>>>>>> 7615f666224d07d69651e1f83c05b0ecc6a56ebf
    misionValoresShowButton.classList.toggle("mision-valores__show-button--active");
    misionValoresIcon.classList.toggle("fa-minus-circle");
    misionValoresIcon.classList.toggle("fa-plus-circle");

    const height = misionValoresContainer.scrollHeight;

    if(misionValoresContainer.classList.contains("desplegar")) {
        misionValoresContainer.classList.remove("desplegar");
        misionValoresContainer.removeAttribute("style");

        misionValoresShowButton.style.transition = "0s border-radius 0s, 0.5s background"

    } else {
<<<<<<< HEAD
=======

        //Se añade la clase "desplegar" para identificar cuando el contenedor esta desplegado.
>>>>>>> 7615f666224d07d69651e1f83c05b0ecc6a56ebf
        misionValoresContainer.classList.add("desplegar");
        misionValoresContainer.style.height = height + 25 + "px";

        misionValoresShowButton.style.transition = "1s border-radius 0.5s, 0.5s background"
    }
});

historiaShowButton.addEventListener("click", () => {
<<<<<<< HEAD
=======

    if (!historiaShowButton.classList.contains("historia__show-button--active")) {
        historiaIcon.style.transform = "rotate(0)";
    } else {
        historiaIcon.style.transform = "rotate(90deg)";
    }

    //Al dar click, se activa la clase que despliga el contenedor del texto y reajusta su alto.
>>>>>>> 7615f666224d07d69651e1f83c05b0ecc6a56ebf
    historiaShowButton.classList.toggle("historia__show-button--active");
    historiaIcon.classList.toggle("fa-minus-circle");
    historiaIcon.classList.toggle("fa-plus-circle");

    const height = historiaContainer.scrollHeight;

    if(historiaContainer.classList.contains("desplegar")) {
        historiaContainer.classList.remove("desplegar");
        historiaContainer.removeAttribute("style");

        historiaShowButton.style.transition = "0s border-radius 0s, 0.5s background"

    } else {
<<<<<<< HEAD
=======

        //Se añade la clase "desplegar" para identificar cuando el contenedor esta desplegado.
>>>>>>> 7615f666224d07d69651e1f83c05b0ecc6a56ebf
        historiaContainer.classList.add("desplegar");
        historiaContainer.style.height = height + 25 + "px";

        historiaShowButton.style.transition = "1s border-radius 0.5s, 0.5s background"
    }
});

identidadShowButton.addEventListener("click", () => {
<<<<<<< HEAD
=======

    if (!identidadShowButton.classList.contains("identidad__show-button--active")) {
        identidadIcon.style.transform = "rotate(0)";
    } else {
        identidadIcon.style.transform = "rotate(90deg)";
    }

    //Al dar click, se activa la clase que despliga el contenedor del texto y reajusta su alto.
>>>>>>> 7615f666224d07d69651e1f83c05b0ecc6a56ebf
    identidadShowButton.classList.toggle("identidad__show-button--active");
    identidadIcon.classList.toggle("fa-minus-circle");
    identidadIcon.classList.toggle("fa-plus-circle");

    const height = identidadContainer.scrollHeight;

    if(identidadContainer.classList.contains("desplegar")) {
        identidadContainer.classList.remove("desplegar");
        identidadContainer.removeAttribute("style");

        identidadShowButton.style.transition = "0s border-radius 0s, 0.5s background"

    } else {
<<<<<<< HEAD
=======

        //Se añade la clase "desplegar" para identificar cuando el contenedor esta desplegado.
>>>>>>> 7615f666224d07d69651e1f83c05b0ecc6a56ebf
        identidadContainer.classList.add("desplegar");
        identidadContainer.style.height = height + 25 + "px";

        identidadShowButton.style.transition = "1s border-radius 0.5s, 0.5s background"
    }
});