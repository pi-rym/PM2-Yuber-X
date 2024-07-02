const obtenerDatosPeliculas = require("../scripts/api");
const agregarCardsAlHTML = require("../scripts/cards");
// const scrollNav = require("../scripts/scroll");
// const interval = require("../scripts/slider")
const tempData = require("../scripts/tempData");


/** Función para mostrar los detalles de la película **/
function mostrarDetalles(titulo, poster, genero) {
  // Actualiza los elementos en la card master con los datos de la película seleccionada
  $("#poster").attr("src", poster);
  $("#titulo").text(titulo);
  $("#descripcion").text(tempData.find(tarjeta => tarjeta.title === titulo).description);
  $("#genero").text(genero);
  $("#director").text(tempData.find(tarjeta => tarjeta.title === titulo).director + ', ');
  $("#year").text(tempData.find(tarjeta => tarjeta.title === titulo).year);
  $("#duracion").text(tempData.find(tarjeta => tarjeta.title === titulo).duration);
}

// Llama a la función para obtener los datos de las películas cuando la página esté lista
$(document).ready(function () {
  obtenerDatosPeliculas()
    .then(data => {
      agregarCardsAlHTML(data)

      const elements = document.getElementsByClassName("card-values");
      Array.from(elements).forEach((element) => {
        element.addEventListener("click",ShowDetail(element));
      });
    }


    )
    .catch(b => console.log(b))

});


const ShowDetail =(element)=>{
  const img = element.querySelector("img");
  const h5 = element.querySelector("h5");
  const p = element.querySelector("p");

  const cardData = {
    titulo: h5.textContent,
    poster: img.src,
    genero: p.textContent
  };
  const { titulo, poster, genero } = cardData;

  mostrarDetalles(titulo, poster, genero)
}