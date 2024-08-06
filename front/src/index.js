const {obtenerDatosPeliculas, crearNuevaPelicula}   = require("../scripts/api");
const agregarCardsAlHTML = require("../scripts/cards");

/** Función para mostrar los detalles de la película **/
function mostrarDetalles(titulo, poster, genero) {
  // Actualiza los elementos en la card master con los datos de la película seleccionada
  $("#poster").attr("src", poster);
  $("#titulo").text(titulo);
  $("#descripcion").text(obtenerDatosPeliculas.find(tarjeta => tarjeta.title === titulo).description);
  $("#genero").text(genero);
  $("#director").text(obtenerDatosPeliculas.find(tarjeta => tarjeta.title === titulo).director + ', ');
  $("#year").text(obtenerDatosPeliculas.find(tarjeta => tarjeta.title === titulo).year);
  $("#duracion").text(obtenerDatosPeliculas.find(tarjeta => tarjeta.title === titulo).duration);
}

// Llama a la función para obtener los datos de las películas cuando la página esté lista
$(document).ready(function () {
  obtenerDatosPeliculas()
    .then(data => {
      agregarCardsAlHTML(data)
      
      const elements = document.getElementsByClassName("card-values");
      Array.from(elements).forEach((element) => {
        element.addEventListener("click", () => {
          ShowDetail(element)
        }); 
      });
    })
    .catch(error => {
      console.error("Error al obtener los datos", error);
    });

    //capturar evento al enviar 
    $("#form-create-movie").on("submit", async function(event){
      event.preventDefault();

      //extraer datos del formulario
      const movie = {
        title: $("#title").val(),
        year: Number($("#years").val()),
        description: $("#description").val(),
        director: $("#directors").val(),
        duration: $("#duration").val(),
        genre: $("#genre").val().split(","),
        rate: parseFloat($("#rate").val()),
        poster: $("#posters").val(),
      }

      try{
        const nuevaPelicula = await crearNuevaPelicula(movie);

        //Actualizar la ui
        agregarCardsAlHTML([nuevaPelicula]);

        //limpiar el formulario despues de enviar
        $(this)[0].reset();
      } catch(error) {
        console.error("Error al crear la nueva pelicula: ", error);
      }
    });

    //Boton para borrar 
    $("#reset-form").on("click", function(){
      $('#form-create-movie')[0].reset();
    });
});

const ShowDetail =(element)=>{
  const img = element.querySelector("img");
  const h5 = element.querySelector("h5");
  const p = element.querySelector("p");

  if (img && h5 && p) {
    const cardData = {
      titulo: h5.textContent,
      poster: img.src,
      genero: p.textContent
    };

    const { titulo, poster, genero } = cardData;
    mostrarDetalles(titulo, poster, genero);
  } else {
    console.error("No se encontraron elementos necesarios dentro del elemento clickcado.");
  }
}
