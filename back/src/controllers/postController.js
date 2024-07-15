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
    }
};