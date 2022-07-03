export const NavMenu = () => {
    return `<div id="top-header">
        <div id="logo">
            <img src="../Imagenes/logo.png" alt="logo">
            <h1>Top Entertainment</h1>
        </div>
        <div id="navegacion">
            <button id="login">Iniciar Sesion</button>
            <button id="getPlatform">Obtener Plataforma</button>
        </div>
    </div>
    <div id="fixed-header">
        <form class="search-bar" action="./search.html?">
          <input id="Busqueda" type="text" placeholder="Search.." name="juego">
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
      <img src="../Imagenes/tmnt.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../Imagenes/Redfall.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../Imagenes/bf.jpg" class="d-block w-100" alt="...">
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
  return `<a href="./game.html?juegoID=${id}"><div class="juego-info-1">
  <img src="${imagenUrl}" alt="">
  <h2 id="ofertas-juego-titulo">${nombre}</h2>
  <div class="juego-info-1-precio">
    <h3 class="descuento">${descuento}</h3>
    <h3 id="ofertas-juego-precio">${precio}</h3>
  </div></a>`
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

export const CardJuegosGratis = (nombre,fecha,imagenUrl) => {
  return `<div class="juego-gratuito-info">
      <img src="${imagenUrl}" alt="">
      <h2 id="juego-gratuito-titulo">${nombre}</h2>
      <h3>Gratis hasta el <span id="fecha-gratis">${fecha}</span></h3>
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