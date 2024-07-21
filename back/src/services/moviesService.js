const Movies = require("../models/Movies");

module.exports = {
    getMovies: async () => {
      try {

        const tarjetasData = await Movies.find();
        return tarjetasData;
        
      } catch (error) {
        console.error("Error al obtener los datos de la peliculas: ", error);
        throw error; 
      }
    },

    createMovies: async (movie) =>{
      const newMovie = await Movies.create(movie);
      return newMovie;
    },
};
