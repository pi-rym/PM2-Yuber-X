
/** Función para obtener los datos de las películas desde la API **/
function obtenerDatosPeliculas() {
  $.get("https://students-api.2.us-1.fl0.io/movies", function(data) {
    // Una vez que se reciban los datos exitosamente, llamar a la función para agregar las cards
    agregarCardsAlHTML(data);
  })
  .fail(function(xhr, status, error) {
    console.error("Error al obtener los datos de las películas:", error);
  });
}

/** Función para generar el HTML de la card **/
function generarCard(titulo, poster, genero) {
  return `
    <div class="contenido-card texto-mont modo-flex-card">
      <div class="card text-center mb-3" style="width: 18rem;">
        <div class="card-body" onclick="mostrarDetalles('${titulo}', '${poster}', '${genero.join(" - ")}')">
          <img class="img-star" src="${poster}" alt="${titulo}">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${genero.join(" - ")}</p>
        </div>
      </div>
    </div>
  `;
}

/** Función para agregar las cards al contenedor en el HTML **/
function agregarCardsAlHTML(data) {
  const contenedor = $("#peli-link");
  data.forEach((tarjeta) => {
    const cardHTML = generarCard(tarjeta.title, tarjeta.poster, tarjeta.genre);
    contenedor.append(cardHTML);
  });
}

/** Función para mostrar los detalles de la película **/
function mostrarDetalles(titulo, poster, genero) {
  // Actualiza los elementos en la card master con los datos de la película seleccionada
  $("#poster").attr("src", poster);
  $("#titulo").text(titulo);
  $("#descripcion").text(tarjetasData.find(tarjeta => tarjeta.title === titulo).description);
  $("#genero").text(genero);
  $("#director").text(tarjetasData.find(tarjeta => tarjeta.title === titulo).director + ', ');
  $("#year").text(tarjetasData.find(tarjeta => tarjeta.title === titulo).year);
  $("#duracion").text(tarjetasData.find(tarjeta => tarjeta.title === titulo).duration);
}

// Llama a la función para obtener los datos de las películas cuando la página esté lista
$(document).ready(function() {
  obtenerDatosPeliculas();
});



/*___________________________________________________________________________________________ */

  /** Funcion de scroll smooth para el menu**/
  function scrollNav(){
    const enlaces = document.querySelectorAll('.navegador a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}

  /* Slider */
  let sliderInner = document.querySelector(".slider--inner");
  let image = sliderInner.querySelectorAll("img");
  let index = 0;
  /** Ajustando las imagenes (Procura que todos sean del mismo tamaño en resolucion) **/
  function adjustImageSize() {
      let sliderWidth = sliderInner.clientWidth; // Obtener el ancho del contenedor del slider
      images.forEach(image => {
          image.style.width = sliderWidth + "px"; // Establecer el ancho de la imagen igual al ancho del contenedor
          image.style.height = "auto"; // Restablecer la altura automáticamente para mantener la proporción
      });
  }
  /** Funcion Slider **/
  let interval = setInterval(function(){
      let percentage = index * -100;
      
      sliderInner.style.transform = "translateX(" + percentage + "%)";
      index++;
      if(index >= image.length - 1){
          index = 0;
      }

  }, 5000);

/**________________________________________________________________________________ **/
