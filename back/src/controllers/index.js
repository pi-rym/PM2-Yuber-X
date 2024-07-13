



const userController = (req, res) => {
    console.log("estamos resiviendo una solicitud");
    res.status(200).send("Estamos recibiendo una solicitud para obtener datos de usuario");
}


const postController = (req, res) => {
    console.log("estamos resiviendo una solicitud");
    res.status(200).send("Estamos enviando informacion sobre post");
}

module.exports = {
    userController,
    postController,
}