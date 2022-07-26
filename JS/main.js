import {NavMenu,Footer,Card,Carousel,CardTripleJuego,CardNuevos,CardVarios,manejoToken,gestionUsuario} from './components.js'


manejoToken();




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
    gestionUsuario();
}



const CargarOfertas = () => {
    let query = 'https://localhost:7284/juegos/ofertas/5';
    fetch(query)
    .then(response => response.json())
    .then(e => {
        for (var i = 0; i < 4; i++) {
            ofertas.innerHTML+=Card(e[i].juegoId,Recortar(e[i].nombreProducto,25),'-15%',e[i].precio.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}),e[i].imagenes[0]);
         }

    });


}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

const CargarTripleJuego = () => {
    fetch(`https://localhost:7284/juegos`)
    .then(response => response.json())
    .then(data => {
        tripleJuego.innerHTML+=CardTripleJuego(data[7].nombreProducto,data[7].descripcion,data[7].imagenes[0])
        tripleJuego.innerHTML+=CardTripleJuego(data[9].nombreProducto,data[9].descripcion,data[9].imagenes[0])
        tripleJuego.innerHTML+=CardTripleJuego(data[15].nombreProducto,data[15].descripcion,data[15].imagenes[0])

    });


    for (var i = 0; i < 3; i++) {
        
     }



}

const CargarJuegosGratis = () => {
    juegosGratis.innerHTML+=CardNuevos('Starship Troopers: Terran Command','1 de octubre','https://as01.epimg.net/meristation/imagenes/2022/03/22/cover/749983091647973106.jpg')
    juegosGratis.innerHTML+=CardNuevos('Disciples II: Rise of the Elves','15 de octubre','https://cdn-products.eneba.com/resized-products/JjP5IxLsss9TTHhpPWlRvSSu0yuejyu_fzy0K-1amxY_350x200_1x-0.png')
    juegosGratis.innerHTML+=CardNuevos('Marvels Spider-Man Remasterizado','30 de octubre','https://www.latercera.com/resizer/1u_ZNcdScivN-xQsc3C04ZT4oEI=/380x570/filters:focal(405x166:415x156)/cloudfront-us-east-1.images.arcpublishing.com/copesa/7DLGKL2YR5FGXKKKDLUHQVJFMQ.jpg')
    juegosGratis.innerHTML+=CardNuevos('Space Trader - Merchant Marine','5 de noviembre','https://cdn1.epicgames.com/spt-assets/81f78963383245f097cd8a100cd658b7/download-space-trader--merchant-marine-offer-1n7sj.png')
}

const CargarVarios = () => {
    fetch(`https://localhost:7284/juegos`)
    .then(response => response.json())
    .then(data => {
         var list = data;
        const max = list.length;
        for (var i = 0; i < 4; i++) {
            var x = getRandomInt(0,max);
            var y = getRandomInt(0,max);
            subcontainer1.innerHTML+=CardVarios(list[i].juegoId,Recortar(list[i].nombreProducto,28),list[i].precio.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}),list[i].imagenes[0])
            subcontainer2.innerHTML+=CardVarios(list[x].juegoId,Recortar(list[x].nombreProducto,28),list[x].precio.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}),list[x].imagenes[0])
            subcontainer3.innerHTML+=CardVarios(list[y].juegoId,Recortar(list[y].nombreProducto,28),list[y].precio.toLocaleString('fr-FR', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}),list[y].imagenes[0])
         }
    });
    

}

const Recortar = (palabra,largo) => {
    if(palabra.length>largo){
        return palabra.substring(0,largo-3)+'...';
    }
    return palabra
}

