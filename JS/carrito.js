import {NavMenu,Footer,CardCarrito,gestionUsuario} from './components.js'

const header = document.getElementById("Menu");
const contacto = document.getElementById("Contacto");
const carritoContainer = document.getElementById("carrito-card-container");
const precioCarrito = document.getElementById("precio-total");
const subtotalCarrito = document.getElementById("subtotal");
const impuesto= document.getElementById("impuesto");
const descuentoResumen= document.getElementById("descuento");
const botonComprar= document.getElementById("boton-comprar");
const carritovacio= document.getElementById("carrito-null");
const carritoInfo= document.getElementById("carrito");
var botones = document.querySelectorAll(".eliminarBoton");


let subtotal = 0;
let imp=0;
let descuento=0;

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    gestionUsuario();
    CargarCarrito(); 
    botonComprar.onclick = EjecutarCompra;  
}

const CargarCarrito = () => {
    let query2 = 'https://localhost:7300/Api/Carrito/ObtenerCarrito?id=1'
    fetch(query2)
    .then(response => response.json())
    .then(data => {
        let contador = 0;
        data.juegos.forEach(e => {
            RenderizarJuegos(e.productoId,contador)
            contador++;
        });
        if(contador>0){carritovacio.style.display = 'none';}
        else{carritoInfo.style.display = 'none';}



    }
    );
}


const eliminarItem = function (evento) {

      fetch(`https://localhost:7300/Api/Carrito/EliminarJuego?idCliente=1&idProducto=`+this.id,{
          method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },             
      })
      .then((httpResponse)=>{
          if(httpResponse.ok)
              return httpResponse.json()
      })
      .then(body => {
          location.reload();
      })
}

const ResumenCompra = (precio, impues,desc) =>{
    precioCarrito.innerHTML=(`${Redondeo(precio)}`);
    subtotalCarrito.innerHTML=(`${Redondeo(precio+impues-desc)}`);
    impuesto.innerHTML=(`${Redondeo(impues)}`);
    descuentoResumen.innerHTML = (`${Redondeo(desc)}`);
}

const Redondeo = (numero) =>{
    return numero.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})

}


const RenderizarJuegos = (id,incremental) => {
    let query = 'https://localhost:7284/juegos/'+id
    fetch(query)
    .then(response => response.json())
    .then(e => { 
        carritoContainer.innerHTML+=CardCarrito(e.juegoId,e.imagenes[0],e.precio,e.nombreProducto,incremental)
        subtotal+= e.precio;
        if (e.enOferta) { descuento += e.precio*0.15;}
        imp= (subtotal-descuento)*0.21
        ResumenCompra(subtotal,imp,descuento);
        botones = document.querySelectorAll(".eliminarBoton");
        botones.forEach(boton => {
            boton.addEventListener("click", eliminarItem);
        });
    });
}


const postCompra = (importe) => {
    let date = new Date();

    let jsonBody={
        "usuarioId": 1,
        "fechaHora": date,
        "importe": importe
      }
      fetch(`https://localhost:7300/Api/Compras`,{
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
      })
}


const EjecutarCompra = () => {
    postCompra(subtotal+imp-descuento)  
}
