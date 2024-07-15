/** Función para obtener los datos de las películas desde la API **/
const axios = require ("axios");

// function obtenerDatosPeliculas() {
//   return new Promise((resolve, reject) => {
//     $.get("https://students-api.up.railway.app/movies", function(data) {
//       resolve(data);
//     })
//     .fail(function(xhr, status, error) {
//       reject("Error al obtener los datos de las películas: " + error);
//     });
//   });
//   }

  const obtenerDatosPeliculas = async () => {
    return new Promise (async (resolve, reject) =>{

      try {
        const response = await axios.get("http://localhost:3000/posts/movies");
        resolve(response.data);
      } catch (error) {
        reject("Error al obtener los datos de las Peliculas: " + error.message);
      }
    });
  };
  module.exports = obtenerDatosPeliculas;