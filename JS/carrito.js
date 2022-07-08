import {NavMenu,Footer,CardCategory,Card,CardCarrito,gestionUsuario} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");
const carritoContainer = document.getElementById("carrito-card-container");
const precioCarrito = document.getElementById("precio-total");
const subtotalCarrito = document.getElementById("subtotal");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    CargarCarrito();
    gestionUsuario();
}

const CargarCarrito = () => {
    let precio = 0;
    let subtotal = 0;
    let query = 'https://localhost:7284/juegos/categoria/4';
    fetch(query)
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            precio+=e.precio;
            carritoContainer.innerHTML+=CardCarrito(e.imagenes[0],e.precio,e.nombreProducto);
        });
        ResumenCompra(precio);
    });
}

const ResumenCompra = (precio) =>{
    precioCarrito.innerHTML=(`${precio}.00 $USD`);
    subtotal.innerHTML=(`${precio}.00 $USD`);
}