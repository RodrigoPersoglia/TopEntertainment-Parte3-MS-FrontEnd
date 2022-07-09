import {NavMenu,Footer,CardCarrito,gestionUsuario} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");
const carritoContainer = document.getElementById("carrito-card-container");
const precioCarrito = document.getElementById("precio-total");
const subtotalCarrito = document.getElementById("subtotal");

let subtotal = 0;

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    gestionUsuario();
    CargarCarrito();
   
}

const CargarCarrito = () => {
    let query2 = 'https://localhost:7300/Api/Carrito/ObtenerCarrito?id=1'
    fetch(query2)
    .then(response => response.json())
    .then(data => {
        data.juegos.forEach(e => {
            RenderizarJuegos(e.productoId)
        });        
    }
    );
}

const ResumenCompra = (precio) =>{
    precioCarrito.innerHTML=(`${precio}.00 $USD`);
    subtotal.innerHTML=(`${precio}.00 $USD`);
}


const RenderizarJuegos = (id) => {
    let query = 'https://localhost:7284/juegos/'+id
    fetch(query)
    .then(response => response.json())
    .then(e => { 
        carritoContainer.innerHTML+=CardCarrito(e.imagenes[0],e.precio,e.nombreProducto);
        subtotal+= e.precio;
    });
}