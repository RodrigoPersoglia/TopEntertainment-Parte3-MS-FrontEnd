import {NavMenu,Footer,CardCategory,Card} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");
const categorias = document.getElementById("categorias-populares-container");
const juegosFiltrados = document.getElementById("juegos-filtrados");
const searchButton = document.getElementById("searchButton");
const selectPlataforma = document.getElementById("selectPlataforma");
const selectClasificacion = document.getElementById("selectClasificacion");
const selectCategorias = document.getElementById("selectCategoria");
const input = document.getElementById("filtro-input");
const precioMinimo = document.getElementById("minPrice");
const precioMaximo = document.getElementById("maxPrice");

let juego = '';
let categoria = '';

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    cargarCategoriasPopulares();
    cargarPlataformas();
    cargarClasificacion();
    cargarCategorias();
    searchButton.onclick = Search;
    const parametros = getQueryParams();
    if(parametros.juego!=undefined){juego+='descripcion='+parametros.juego;}
    if(parametros.categoria!=undefined){categoria+='categoria='+parametros.categoria;}
    CargarJuegos();
    mostrar();
}

const mostrar = () => {
    console.log(precioMinimo.value);
    console.log(precioMaximo.value);
}


const CargarJuegos = () => {
    let query = 'https://localhost:7284/juegos?'+categoria+'&'+juego;
    juegosFiltrados.innerHTML =null;
    fetch(query)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        juegosFiltrados.innerHTML +=Card(e.juegoId,e.nombreProducto,'0%',e.precio.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}),e.imagenes[0]);
        });
    });
}


function getQueryParams() {
    var urlParams;
    var match,
        pl     = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);
  
    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
       return urlParams;
};

    


const Search = () => {
    let query= `https://localhost:7284/juegos?`;
    if(selectCategorias.value!= 'null'){query+=`categoria=${selectCategorias.value}&`;}
    if(selectClasificacion.value!== 'null'){query+=`clasificacion=${selectClasificacion.value}&`;}
    if(selectPlataforma.value!== 'null'){query+=`plataforma=${selectPlataforma.value}&`;}
    juegosFiltrados.innerHTML =null;
    fetch(query+=`descripcion=${input.value}`)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        juegosFiltrados.innerHTML +=Card(e.juegoId,e.nombreProducto,'0%',e.precio.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}),e.imagenes[0]);
        });
    });
}

const cargarCategoriasPopulares = () => {
    var url = `https://localhost:7284/Categoria`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        categorias.innerHTML+=CardCategory(e.categoriaId,e.nombreCategoria,e.descripcion);

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