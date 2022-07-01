import {NavMenu,Footer,CardCategory} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");
const categorias = document.getElementById("categorias-populares-container");
const searchButton = document.getElementById("filtro-input");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    cargarCategoriasPopulares();
    searchButton.onclick = Search;
}


// Cargar Categorias desde la API
const cargarCategoriasPopulares = () => {
    categorias.innerHTML+=CardCategory('Accion','../Imagenes/bf.jpg');
    categorias.innerHTML+=CardCategory('Aventura','../Imagenes/plaguetale.jpg');
    categorias.innerHTML+=CardCategory('Beat em up','../Imagenes/tmnt.png');
    categorias.innerHTML+=CardCategory('Accion','../Imagenes/Redfall.jpg');   
}

// Logica de busqueda
const Search = () => {
 
}