const moviesService = require("../services/moviesService");

module.exports= {
    getAllPosts: async (req, res) => {
        res.status(200).send("Endpoint para obtener POSTS");
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
        const {title, year, description, director, duration, genre, rate, poster} = req.body;
        const mewMovie = await moviesService.createMovies({title, year, description, director, duration, genre, rate, poster});
        res.status(201).json(newMovie);
    }
};