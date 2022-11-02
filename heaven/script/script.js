document.querySelector("#productos").addEventListener("click",animarContenedorp);


document.querySelector("#categorias").addEventListener("click",animarContenedorc);

var contenedorP= document.querySelector(".contenedor-formulariop");


var contenedorC= document.querySelector(".contenedor-formularioc");



function animarContenedorp(){
    contenedorP.classList.toggle("contenedorp--activado");
    contenedorC.classList.toggle("contenedorc--desactivado");
    };

function animarContenedorc(){
    contenedorC.classList.toggle("contenedorc--activado");
    contenedorP.classList.toggle("contenedorp--desactivado");
    };