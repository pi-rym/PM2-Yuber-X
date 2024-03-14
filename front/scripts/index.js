const obtenerDatosPeliculas = require("./api");
const { generarCard, agregarCardsHTML, mostrarDetalles} = require("./cards");
const scrollNav = require("./scroll");
const slider = require("./slider")
const tempData = require("./tempData");


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


