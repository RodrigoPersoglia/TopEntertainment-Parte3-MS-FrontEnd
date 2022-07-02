import {NavMenu,Footer,CardCategory,Card} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");
const categorias = document.getElementById("categorias-populares-container");
const juegosFiltrados = document.getElementById("juegos-filtrados");
const searchButton = document.getElementById("searchButton");
const selectPlataforma = document.getElementById("selectPlataforma");
const selectClasificacion = document.getElementById("selectClasificacion");
const selectCategorias = document.getElementById("selectCategoria");


window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    cargarCategoriasPopulares();
    cargarPlataformas();
    cargarClasificacion();
    cargarCategorias();
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
    juegosFiltrados.innerHTML =null;
    var url = `https://localhost:7284/juegos`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        // juegosFiltrados.innerHTML +=Card(e.nombreProducto,'0%',e.precio,e.imagenes[0])
        juegosFiltrados.innerHTML +=Card(e.nombreProducto,'0%',e.precio.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}),'../Imagenes/Redfall.jpg');
        });
    });
}


const cargarPlataformas = () => {
    var url = `https://localhost:7284/Plataforma`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        var option = document.createElement("option");
        option.text = e.nombrePlataforma;
        option.value = e.plataformaId;
        selectPlataforma.add(option);
        });
    });
}

const cargarClasificacion = () => {
    var url = `https://localhost:7284/Clasificacion`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        var option = document.createElement("option");
        option.text = e.nombreClasificacion;
        option.value = e.clasificacionId;
        selectClasificacion.add(option);
        });
    });
}

const cargarCategorias = () => {
    var url = `https://localhost:7284/Categoria`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        var option = document.createElement("option");
        option.text = e.nombreCategoria;
        option.value = e.categoriaId;
        selectCategorias.add(option);
        });
    });
}