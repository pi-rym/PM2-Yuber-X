const moviesService = require("../services/moviesService");
const catchAsync = require("../utils/catchAsync");


    const getAllPosts = async (req, res) => {
      await res.status(200).send("Endpoint para obtener POSTS");
    }

    const getMovies = async (req, res) => {

            const movies = await moviesService.getMovies();
            res.status(200).json(movies)
    }

    const createMovies = async (req, res) =>{

        const {title, year, description, director, duration, genre, rate, poster} = req.body;

            if (!title || !year || !description || !director || !duration || !Array.isArray(genre) || !rate || !poster) {
                return res.status(400).json({ error: "Todos los campos son obligatorios y deben llenarse correctamente formateados"})
            }

        const newMovie = await moviesService.createMovies({title, year, description, director, duration, genre, rate, poster});
        res.status(201).json(newMovie);
    }

    module.exports= {
        getAllPosts: catchAsync(getAllPosts),
        getMovies: catchAsync(getMovies),
        createMovies: catchAsync(createMovies),
    }