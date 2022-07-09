import {NavMenu,Footer,CardJuegoPrincipal,gestionUsuario} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");
const main = document.getElementById("main");


let idjuego=null;

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    const parametros = getQueryParams();
    if(parametros.juegoID!=undefined){idjuego=parametros.juegoID;}
    CargarJuegos();
    gestionUsuario();
}


const comprar = () => {
    postCarrito();
    location.href='./carrito.html';
}

const agregar = () => {
    postCarrito();
    location.reload();
}


const CargarJuegos = () => {
    let query = 'https://localhost:7284/juegos/'+idjuego;
    main.innerHTML =null;
    fetch(query)
    .then(response => response.json())
    .then(e => {
        main.innerHTML=CardJuegoPrincipal(e.nombreProducto,e.imagenes[0],e.imagenes[1],e.imagenes[2],e.descripcion,e.precio.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}),e.plataforma.nombrePlataforma,e.clasificacion.nombreClasificacion,e.categorias[0].nombreCategoria,e.stock,e.video);
        document.getElementById("comprarBTN").addEventListener("click", comprar);
        document.getElementById("addBTN").addEventListener("click", agregar);
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



const postCarrito = () => {
    let jsonBody={
        "usuarioId": 1,
        "productoId": idjuego,
        "cantidad": 1
      }
      fetch(`https://localhost:7300/Api/Carrito/AñadirJuego`,{
          method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonBody)
            
      })
      .then((httpResponse)=>{
          if(httpResponse.ok)
              return httpResponse.json()
      })
      
      .then(body => {
          alert(body);
      })
}