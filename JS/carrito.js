import {NavMenu,Footer,CardCategory,Card} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
}