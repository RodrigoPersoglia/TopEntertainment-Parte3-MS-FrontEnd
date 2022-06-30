export const NavMenu = () => {
    return `<div id="top-header">
        <div id="logo">
            <img src="../Imagenes/logo.png" alt="logo">
            <h1>The Homers Games</h1>
        </div>
        <div id="navegacion">
            <button id="login">Iniciar Sesion</button>
            <button id="getPlatform">Obtener Plataforma</button>
        </div>
    </div>
    <div id="fixed-header">
        <form class="search-bar">
          <input id="Busqueda" type="text" placeholder="Search.." name="search">
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



