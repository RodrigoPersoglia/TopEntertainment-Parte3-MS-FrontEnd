const linkAU = 'https://proyectosoftwareb2c.b2clogin.com/proyectosoftwareb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signin_signup&client_id=834ecd4c-c2fc-4d34-9087-3800e48aa4d8&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A5500%2FHtml%2Findex.html&scope=openid&response_type=id_token&prompt=login'


export const NavMenu = () => {
    return `<div id="top-header">
        <div id="logo">
            <img src="../Imagenes/logo.png" alt="logo">
            <h1>Top Entertainment</h1>
        </div>
        <div id="navegacion">
            <a id="nombreUsuario"></a>
           <a id="login" href="${linkAU}">Iniciar Sesión</a>
           <a id="logout" onclick=localStorage.clear();window.location.reload()>Cerrar Sesión</a>
        </div>
    </div>
    <div id="fixed-header">
        <form class="search-bar" action="./search.html?">
          <input id="Busqueda" type="text" placeholder="Buscar..." name="juego">
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <a href="../HTML/index.html">Descubrir</a>
        <a href="../HTML/search.html">Examinar</a>
        <a href="#">Noticias</a>
    </div>`
}

export const Footer = () => {
    return `<div id="redes-logos">
      <a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
      <a href="https://www.twitter.com"><i class="fab fa-instagram"></i></a>
      <a href="https://www.twitter.com"><i class="fab fa-facebook-f"></i></a>
      <a id="arrow" href="#top-header"><i class="fa fa-caret-square-o-up"></i></a>
    </div>

    <h2>Recursos</h2>
    <div class="links-container">
      <div>
        <a href="">Apoya a un creador</a>
        <a href="">Publica en Homers</a>
        <a href="">Empleo</a>
        <a href="">Compañia</a>
      </div>
      <div>
        <a href="">Política de arte de aficionados</a>
        <a href="">Estudio de experiencias de usuarios</a>
        <a href="">CLUF de la tienda</a>
        <br>
        <a href="">Servicios en línea</a>
        <a href="">Reglas de la comunidad</a>
        <a href="">Homers Newsroom</a>
      </div>
    </div>

    <h2>Creado por Homers Games</h2>
    <div class="links-container">
      
      <div>
        <a href="">Homers Breakers</a>
        <a href="">HomersNite</a>
        <a href="">Infinity Homers</a>
      </div>
      <div>
        <a href="">Homers Recall</a>
        <a href="">Shadow Homers</a>
        <a href="">Homers Tournament</a>
      </div>
    </div>

    <hr>

    <p>© 2022, Homers Games, Inc. Todos los derechos reservados. Homers, The Homers Games, 
      el logotipo de Homers Games, HomersNite, el logotipo de HomersNite, Homers Tournament y 
      el logotipo de Homers Tournament son marcas comerciales o marcas registradas de The Homers 
      Games, Inc. tanto en Estados Unidos de América como en el resto del mundo. Otras marcas o nombres 
      de productos son marcas comerciales de sus respectivos propietarios. Las transacciones fuera de 
      EE. UU. se realizan a través de The Homers Games International, S.à r.l.</p>

      <div id="final-links">
        <a href="">Terminos de servicios</a>
        <a href="">Politica de privacidad</a>
        <a href="">Política de reembolso de la tienda</a>
      </div>`
}


export const Carousel = () => {
  return `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="../Imagenes/bf.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="../Imagenes/Redfall.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="../Imagenes/tmnt.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`
}

export const Card = (id,nombre,descuento,precio,imagenUrl) => {
  return `
    <div class="juego-info-1" onclick="location.href='./game.html?juegoID=${id}'">
      <img src="${imagenUrl}" alt="">
      <div class="juego-info-1-text">
        <h2 id="ofertas-juego-titulo">${nombre}</h2>
        <div class="juego-info-1-precio">
          <h3 class="descuento">${descuento}</h3>
          <h3 id="ofertas-juego-precio">${precio}</h3>
        </div>
      </div>
    </div>
  `
}

export const CardTripleJuego = (nombre,descripcion,imagenUrl) => {
  return `
  <div class="triple-lista-juego">
    <img class="img-opacity" src="${imagenUrl}" alt="">
    <div class="triple-juego-info">
      <h2>${nombre}</h2>
      <p>${descripcion}</p>
    </div>
  </div>`
}

export const CardNuevos = (nombre,fecha,imagenUrl) => {
  return `<div class="juego-gratuito-info">
      <img src="${imagenUrl}" alt="">
      <h2 id="juego-gratuito-titulo">${nombre}</h2>
      <h3>Lanzamiento <span id="fecha-gratis">${fecha}</span></h3>
    </div>`
}

export const CardVarios = (nombre,precio,imagenUrl) => {
  return `<div class="varios-subcontainer-juego">
  <img src="${imagenUrl}" alt="">
  <div class="varios-subcontainer-juego-info">
    <h2>${nombre}</h2>
    <div class="varios-subcontainer-juego-info-precio">
      <h3>${precio}</h3>
    </div>
  </div>
</div>`
}

export const CardCategory = (id,nombre,imagenUrl) => {
  return `<a href="./search.html?categoria=${id}"><div class="categorias-populares-subcontainer">
  <div class="categorias-populares-subcontainer-imagenes">
      <img src="${imagenUrl}" alt="juego">
  </div>
  <h3 id="nombre-categoria">${nombre}</h3>
</div></a>`
}

export const CardJuegoPrincipal = (nombre,portada,imagen1,imagen2,descripcion,precio,plataforma,clasificacion,categoria,stock,link) => {
  return `<div id="juego">
  <h2>${nombre}</h2>
  
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${portada}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${imagen1}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${imagen2}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <iframe width="100%" height="315" src="${link}?autoplay=1&controls=0&loop=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
  <div class="descripcion">
      <h3>Descripcion:</h3>
      <p>${descripcion}</p>
  </div>
</div>
<div id="info-juego">
  <img src="${portada}" alt="Icono del Juego">
  <div id="precio">
      <h2>${precio}</h2>
  </div>
  <div id="botones">
      <button id="comprarBTN" class="searchButton">Comprar Ahora</button>
      <button id="addBTN"  class="searchButton">Añadir al Carrito</button>
  </div>
  <div id="caracteristicas">
      <h3>Características</h3>
      <hr>
      <div class="caracteristicas"><p>Plataforma:</p><span>${plataforma}</span></div>
      <hr>
      <div class="caracteristicas"><p>Clasificacion:</p><span>${clasificacion}</span></div>
      <hr>
      <div class="caracteristicas"><p>Categorias:</p><span>${categoria}</span></div>
      <hr>
      <div class="caracteristicas"><p>Stock:</p><span>${stock}</span></div>
      <hr>
  </div>
</div>`
}

export const manejoToken = () => {
  var token = getToken();
  if(token!=null){
      localStorage.clear(); 
      let tokenDeco = parseJwt(token)
      localStorage.setItem('userTE',tokenDeco.name);
      localStorage.setItem('tokenUserTE', tokenDeco.idp_access_token);
      window.location.href = "http://localhost:5500/HTML/index.html";
  }
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

function getToken(){
  let url = window.location.toString();
  var posicion = url.indexOf('token')
  if(posicion===-1){return null}
  return url.substring(posicion+6)
}

export const gestionUsuario = () => {
  if(localStorage.getItem('tokenUserTE')!==null){
    document.getElementById("nombreUsuario").innerHTML = 'Hola, '+localStorage.getItem('userTE')+'!'
    document.getElementById("login").style.display = 'none';
    document.getElementById("logout").style.display = 'block';
    }
  else{
    document.getElementById("nombreUsuario").innerHTML = ''
    document.getElementById("login").style.display = 'block';
    document.getElementById("logout").style.display = 'none';
    }
}

export const CardCarrito = (portada,precio,nombre) => {
  return `
      <div class="carrito-card">
        <div class="carrito-card-imagen">
            <img onclick="" src="${portada}" alt="juego">
        </div>
        <div class="carrito-card-content">
            <div class="carrito-card-header">
                <div class="carrito-card-info-categoria">
                    <h3>Juego Base</h3>
                </div>
                <h2 id="carrito-card-info-precio">${precio}.00 $USD</h2>
            </div>
            <div class="carrito-card-info">
                <h2 id="carrito-card-info-titulo" onclick="">${nombre}</h2>
                <div class="carrito-card-info-clasificacion">
                    <img id="clasificacion-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/ESRB_2013_Everyone_Spanish.svg/800px-ESRB_2013_Everyone_Spanish.svg.png" alt="xd">
                    <div class="clasificacion-info">
                        <h3>Mayores de 18 años</h3>
                        <h3>Violencia, Sangre, Lenguaje Ofensivo, Temas Sugestivos</h3>
                    </div>
                </div>
            </div>
            <div class="carrito-card-footer">
                <h2 id="carrito-card-plataforma">Play Station 5</h2>
                <h2 id="eliminar-juego" onclick="">Eliminar</h2>
            </div>
        </div>
      </div>`
}