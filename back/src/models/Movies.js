const mongoose = require("mongoose");


const moviesSchema = new mongoose.Schema({
    title: String,
    year: Number,
    description: String,
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: String,
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;