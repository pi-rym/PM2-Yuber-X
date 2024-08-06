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
      try {

        const response = await axios.get("http://localhost:3000/posts/movies");
        return response.data;

      } catch (error) {

        throw new Error("Error al obtener los datos de las Peliculas: " + error.message);

      }
  };

  const crearNuevaPelicula = async (movie) => {
    try {
      console.log(JSON.stringify(movie)); //convierte el objeto de javascript a JSON
      //EJEMPLO:
      // const value =  {
      //   name : "Steven",
      //   id: 1
      // }
      // JSON.stringify(value);
      // output:
      // {
      //   "name"  : "Steven",
      //   "id" : 1
      // }
      const response = await axios.post("http://localhost:3000/posts/movies",movie);
      return response.data;

    } catch (error) {
      throw new Error("Error al crear la pelicula: " + error);
      
    }
  };

  module.exports =  {obtenerDatosPeliculas, crearNuevaPelicula};