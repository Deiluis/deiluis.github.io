const 
    novedadesPag1 = document.getElementById("novedades-pag1"),
    novedadesPag2 = document.getElementById("novedades-pag2"),
    buttonPag1 = document.getElementById("button-pag1"),
    buttonPag2 = document.getElementById("button-pag2");
                      
const moverAPag1 = () => {
    novedadesPag1.style.transform = "translateX(0)";
    novedadesPag2.style.transform = "translateX(0)";
    
    buttonPag1.style.border = "0.3rem #d70 solid";
    buttonPag1.style.backgroundColor = "#d90";
    buttonPag2.style.border = "0.3rem #bbb solid";
    buttonPag2.style.backgroundColor = "#ddd";
}
    
const moverAPag2 = () => {
    novedadesPag1.style.transform = "translateX(-100%)";
    novedadesPag1.style.transition = "transform 1s";
    novedadesPag2.style.transform = "translateX(-100%)";
    novedadesPag2.style.transition = "transform 1s";
    
    buttonPag1.style.border = "0.3rem #bbb solid";
    buttonPag1.style.backgroundColor = "#ddd";
    buttonPag2.style.border = "0.3rem #d70 solid";
    buttonPag2.style.backgroundColor = "#d90";
}

buttonPag1.addEventListener("click", function() {
    moverAPag1();
});
buttonPag2.addEventListener("click", function() {
    moverAPag2();
});