import {NavMenu,Footer,CardCategory,Card} from './components.js'

let minPrice = null;
let maxPrice = null;
let juego = '';
let categoria = '';
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
const limpiarFiltros = document.getElementById("right-header");




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
    limpiarFiltros.onclick = Limpiar;
}

const Limpiar = () => {
    selectCategorias.value  = null;
    selectClasificacion.value = null;
    selectPlataforma.value = null;
    precioMinimo.value = null;
    precioMaximo.value = null;
    input.value = null;

}

precioMinimo.addEventListener('change',precios)
precioMaximo.addEventListener('change',precios)


function precios(){
    minPrice = null;
    maxPrice = null;
    if(precioMaximo.value!='' & precioMaximo.value!=''){
        if((precioMaximo.value-precioMinimo.value)>-1){
            minPrice = precioMinimo.value;
            maxPrice = precioMaximo.value;
        }
        else{alert('El precio máximo no puede ser inferior al precio mínimo')}
    }
    else{
        if(precioMinimo.value!=''){minPrice = precioMinimo.value;}
        else{maxPrice = precioMaximo.value;}
    }
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
    if(minPrice!= null){query+=`min=${minPrice}&`;}
    if(maxPrice!= null){query+=`max=${maxPrice}&`;}
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