const modal = document.querySelector(".modal-novedades");
const modalContainer = document.querySelector(".modal-novedades__container");
const modalImg = document.querySelector(".modal-novedades__img");
const modalTitle = document.querySelector(".modal-novedades__title");
const modalText = document.querySelector(".modal-novedades__text");
const modalCloseButton = document.querySelector(".modal-novedades__button");

const novedadesButtons = document.querySelectorAll(".novedades__link");
const novedadesTitle = document.querySelectorAll(".novedades__subtitle");
const novedadesImg = document.querySelectorAll(".novedades__img");

//Añade un retraso a la aparición del modal, esto ayuda a acortar el tiempo de carga de la página.
setTimeout(() => {
    modal.style.display = "flex";
}, 1500);

//Se le asigna el evento para mostrar el modal a todas las novedades:
for(let i = 0; i < novedadesButtons.length; i++) {

    novedadesButtons[i].addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal-novedades--show");
        modalContainer.classList.add("modal-novedades__container--show");
    });
}

//Se le añade el evento al botón de cerra el modal.
modalCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal-novedades--show");
    modalContainer.classList.remove("modal-novedades__container--show");
});

//Cada novedad modifica el modal entorno a su contenido. Se ponen por separado para poder editar el texto de los parrafos.
novedadesButtons[0].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[0].innerHTML;
    modalImg.src = novedadesImg[0].src;
});

novedadesButtons[1].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[1].innerHTML;
    modalImg.src = novedadesImg[1].src;
});

novedadesButtons[2].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[2].innerHTML;
    modalImg.src = novedadesImg[2].src;
});

novedadesButtons[3].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[3].innerHTML;
    modalImg.src = novedadesImg[3].src;
});

novedadesButtons[4].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[4].innerHTML;
    modalImg.src = novedadesImg[4].src;
});

novedadesButtons[5].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[5].innerHTML;
    modalImg.src = novedadesImg[5].src;
});