const moviesService = require("../services/moviesService");

module.exports= {
    getAllPosts: async (req, res) => {
      await res.status(200).send("Endpoint para obtener POSTS");
    },
    getMovies: async (req, res) => {
        try {

            const movies = await moviesService.getMovies();
            res.status(200).json(movies)
            
        } catch (error) {
            res.status(500).json({
                error: "error interno desde el servidor",
            });
        }
    },
    createMovies: async (req, res) =>{
        try {
            
            const {title, year, description, director, duration, genre, rate, poster} = req.body;

            if (!title || !year || !description || !director || !duration || !Array.isArray(genre) || !rate || !poster) {
                return res.status(400).json({ error: "Todos los campos son obligatorios y deben llenarse correctamente formateados"})
            }

            const newMovie = await moviesService.createMovies({title, year, description, director, duration, genre, rate, poster});
            res.status(201).json(newMovie);
        
        } catch (error) {
            console.error("Error al crear una pelicula: ", error);
            res.status(500).json({
                error:"Error interno desde el servidor, en postController",
            });
        }
    }
};