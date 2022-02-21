const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {

    //Evita que se envie el fomrulario al darle click.
    e.preventDefault();
    
    //Si el formulario es valido, se muestra el loader y se permite el envío.
    if (validarFormulario()) {
        loader.classList.remove("loader--hide");
        form.submit();
    }

});

const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const asuntoInput = document.querySelector("#asunto");
const telefonoInput = document.querySelector("#telefono");
const opcionesInput = document.querySelector("#opciones");
const mensajeInput = document.querySelector("#mensaje");
const recaptcha = document.querySelector("#recaptcha");

const validarFormulario = () => {

    //Se inicializa como true, en caso de que alguna validación falle, se cambia a false.
    let formularioValido = true;

    const nombre = nombreInput.value
    const email = emailInput.value
    const asunto = asuntoInput.value
    const telefono = telefonoInput.value
    const opciones = opcionesInput.value
    const mensaje = mensajeInput.value

    //Validación del nombre:
    if (nombre == "" || nombre == null) {
        mostrarAlerta("nombre", "Escriba su nombre");
        cambiarColor("nombre");
        formularioValido = true;

    } else {
        //La expresión indica que solo puede contener letras.
        let expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

        if(!expresion.test(nombre)) {
            mostrarAlerta("nombre", "No se permiten caracteres especiales o números");
            cambiarColor("nombre");
            formularioValido = false;

        } else {
            eliminarAlerta("nombre");
            reestablecerColor("nombre");
        }
    }

    //Validación del email:
    if (email == "" || email == null) {
        mostrarAlerta("email", "Escriba su email");
        cambiarColor("email");
        formularioValido = false;

    } else {
        //La expresión indica que no puede contener caracteres que no sean letras, números, puntos, o arrobas.
        let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if(!expresion.test(email)) {
            mostrarAlerta("email", "El email no es valido");
            cambiarColor("email");
            formularioValido = false;

        } else {
            eliminarAlerta("email");
            reestablecerColor("email");
        }
    }

    //Validación del asunto:
    if (asunto == "" || asunto == null) {
        mostrarAlerta("asunto", "Escriba el asunto");
        cambiarColor("asunto");
        formularioValido = false;

    } else {
        //La expresión indica que solo puede contener letras o números.
        let expresion = /[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

        if(!expresion.test(asunto)) {
            mostrarAlerta("asunto", "No se permiten caracteres especiales");
            cambiarColor("asunto");
            formularioValido = false;

        } else {
            eliminarAlerta("asunto");
            reestablecerColor("asunto");
        }
    }

    //En caso de que se introduzca un número de telefóno, se valida:
    if (telefono.length > 0) {

        //La expresión indica que solo puede contener números.
        let expresion = /^[0-9]*$/;

        if(!expresion.test(telefono)) {
            mostrarAlerta("telefono", "Solo se permiten números");
            cambiarColor("telefono");
            formularioValido = false;

        } else {
            eliminarAlerta("telefono");
            reestablecerColor("telefono");
        }

    } 
    
    //En caso de que se elimine el número de telefóno, también se elimina la alerta.
    else {
            eliminarAlerta("telefono");
            reestablecerColor("telefono");
    }

    //Validación del select para elegir el área a consultar:
    if (opciones == "placeholder") {
        mostrarAlerta("opciones", "Elija el área a contactar");
        cambiarColor("opciones");
        formularioValido = false;

    } else {
        eliminarAlerta("opciones");
        reestablecerColor("opciones");
    }

    //Validación del mensaje:
    if(mensaje == "" || mensaje == null) {
        mostrarAlerta("mensaje", "Escriba su mensaje");
        cambiarColor("mensaje");
        formularioValido = false;

    } else {
        //La expresión indica que solo puede contener letras o números.
        let expresion= /[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

        if(!expresion.test(mensaje)) {
            mostrarAlerta("mensaje", "No se permiten caracteres especiales");
            cambiarColor("mensaje");
            formularioValido = false;

        } else {
            eliminarAlerta("mensaje");
            reestablecerColor("mensaje");
        }
    }

    //Validación del captcha:
    let response = grecaptcha.getResponse();

    if(response.length != 0) {
        eliminarAlerta("recaptcha");

    } else {
        mostrarAlerta("recaptcha", "Se debe completar el reCaptcha");
        formularioValido = false;
    }

    return formularioValido;
}

//Funciones para cuando los campos son incorrectos o estan vacíos:

const mostrarAlerta = (elemento, mensajeDeAlerta) => {
    elementoDeAlerta = document.querySelector(".contacto__form-error--" + elemento);
    elementoDeAlerta.innerHTML = mensajeDeAlerta;
} 

const cambiarColor = (elemento) => {
    elemento = document.querySelector("#" + elemento);
    elemento.style.transition = "outline 0.3s";
    elemento.style.outline = "1px solid #c81f13";
}

const eliminarAlerta = (elemento) => {
    elementoDeAlerta = document.querySelector(".contacto__form-error--" + elemento);
    elementoDeAlerta.innerHTML = "";
}

const reestablecerColor = (elemento) => {
    elemento = document.querySelector("#" + elemento);
    elemento.style.outline = "none";
}