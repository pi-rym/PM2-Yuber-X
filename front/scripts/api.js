/** Función para obtener los datos de las películas desde la API **/
function obtenerDatosPeliculas() {
  return new Promise((resolve, reject) => {
    $.get("https://students-api.up.railway.app/movies", function(data) {
      resolve(data);
    })
    .fail(function(xhr, status, error) {
      reject("Error al obtener los datos de las películas: " + error);
    });
  });
  }

  module.exports = obtenerDatosPeliculas;