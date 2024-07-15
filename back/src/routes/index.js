const { Router } = require("express");
const postRouter = require("./postRouter");


const router = Router();

router.use("/posts", postRouter);


module.exports = router;