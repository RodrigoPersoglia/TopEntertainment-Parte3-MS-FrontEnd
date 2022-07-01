import {NavMenu,Footer,Card,Carousel,CardTripleJuego,CardJuegosGratis,CardVarios} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");
const ofertas = document.getElementById("lista-juegos-ofertas");
const carousel = document.getElementById("carousel");
const tripleJuego = document.getElementById("triple-juego");
const juegosGratis = document.getElementById("juegos-gratuitos-container");
const subcontainer1 = document.getElementById("subConteiner1");
const subcontainer2 = document.getElementById("subConteiner2");
const subcontainer3 = document.getElementById("subConteiner3");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    carousel.innerHTML = Carousel();
    CargarOfertas();
    CargarTripleJuego();
    CargarJuegosGratis();
    CargarVarios();
}



const CargarOfertas = () => {
    for (var i = 0; i < 5; i++) {
        ofertas.innerHTML+=Card('Fall guys','-60%','U$S 14.99','../Imagenes/juego1.jpg')
     }
}

const CargarTripleJuego = () => {
    for (var i = 0; i < 3; i++) {
        tripleJuego.innerHTML+=CardTripleJuego('A Plague Tale','Vive una aventura desgarradora por un mundo asombroso y despiadado,retorcido por las fuerzas sobrenaturales.','../Imagenes/plaguetale.jpg')
     }
}

const CargarJuegosGratis = () => {
    for (var i = 0; i < 4; i++) {
        juegosGratis.innerHTML+=CardJuegosGratis('Fall Guys','1 de octubre','../Imagenes/juego1.jpg')
     }
}

const CargarVarios = () => {
    for (var i = 0; i < 4; i++) {
        subcontainer1.innerHTML+=CardVarios('Fall Guys','U$S 14.99','../Imagenes/juego1.jpg')
        subcontainer2.innerHTML+=CardVarios('Fall Guys','U$S 14.99','../Imagenes/juego1.jpg')
        subcontainer3.innerHTML+=CardVarios('Fall Guys','U$S 14.99','../Imagenes/juego1.jpg')
     }
}