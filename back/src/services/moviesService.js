const Movies = require("../models/Movies");



module.exports = {
    getMovies: async () => {
      try {

        const tarjetasData = await Movies.find();
        return tarjetasData;
        
      } catch (error) {

        console.error("Error al obtener los datos de la peliculas, acá en servicios: ", error);
        throw error; 

      }
    },

    createMovies: async (movie) =>{
      try {
        
        const newMovie = await Movies.create(movie);
        return newMovie;

      } catch (error) {

        console.error("Error al crear una nueva pelicula, acá en servicios: ", error);
        throw error;

      }
    },
};
