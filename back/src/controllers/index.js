


const postController = (req, res) => {
    console.log("estamos resiviendo una solicitud");
    res.status(200).send("Estamos enviando informacion sobre post");
}

module.exports = {
    postController,
}