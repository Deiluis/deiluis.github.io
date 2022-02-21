const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const modalImg = document.querySelector(".modal__img");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");
const modalButton = document.querySelector(".modal__button");

const novedadesButtons = document.querySelectorAll(".novedades__link");
const novedadesTitle = document.querySelectorAll(".novedades__subtitle");
const novedadesImg = document.querySelectorAll(".novedades__img");

//Añade un retraso a la aparición del modal, esto ayuda a acortar el tiempo de carga de la página.
setTimeout(() => {
    modal.style.display = "flex";
}, 3000);

//Se le asigna el evento para mostrar el modal a todas las novedades:
for(let i = 0; i < novedadesButtons.length; i++) {

    novedadesButtons[i].addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal--show");
        modalContainer.classList.add("modal__container--show");
    });
}

//Se le añade el evento al botón de cerra el modal.
modalButton.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
    modalContainer.classList.remove("modal__container--show");
});

//Cada novedad modifica el modal entorno a su contenido. Se ponen por separado para poder editar el texto de los parrafos.
novedadesButtons[0].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[0].innerHTML;
    modalImg.setAttribute("src", novedadesImg[0].getAttribute("src"));
});

novedadesButtons[1].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[1].innerHTML;
    modalImg.setAttribute("src", novedadesImg[1].getAttribute("src"));
});

novedadesButtons[2].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[2].innerHTML;
    modalImg.setAttribute("src", novedadesImg[2].getAttribute("src"));
});

novedadesButtons[3].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[3].innerHTML;
    modalImg.setAttribute("src", novedadesImg[3].getAttribute("src"));
});

novedadesButtons[4].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[4].innerHTML;
    modalImg.setAttribute("src", novedadesImg[4].getAttribute("src"));
});

novedadesButtons[5].addEventListener("click", () => {
    modalTitle.innerHTML = novedadesTitle[5].innerHTML;
    modalImg.setAttribute("src", novedadesImg[5].getAttribute("src"));
});