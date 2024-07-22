const {Router} = require("express");
const postController = require ("../controllers/postController");

const postRouter = Router();

postRouter.get("/", postController.getAllPosts);

postRouter.get("/movies", postController.getMovies);

postRouter.post("/movies", postController.createMovies);

module.exports = postRouter;