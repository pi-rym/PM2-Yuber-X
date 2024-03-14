/** Función para obtener los datos de las películas desde la API **/
function obtenerDatosPeliculas() {
    $.get("https://students-api.up.railway.app/movies", function(data) {
      // Una vez que se reciban los datos exitosamente, llamar a la función para agregar las cards
      agregarCardsAlHTML(data);
    })
    .fail(function(xhr, status, error) {
      console.error("Error al obtener los datos de las películas:", error);
    });
  }

  module.exports = obtenerDatosPeliculas;