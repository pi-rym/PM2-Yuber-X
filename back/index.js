const app = require ("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(() =>{
    app.listen(3000, () =>{
        console.log("Servidor escuchando en el puerto 3000 con la base de datos");
    });

}).catch((error) => {
    console.error("Error al iniciar el servidor: ", error);
})