const axios = require("axios");

/* El error TypeError: $.get is not a function sugiere que $.get no está disponible en el entorno de Node.js 
porque jQuery no está diseñado para funcionar en el entorno de servidor (Node.js), sino en el navegador. 
Para hacer peticiones HTTP en Node.js, es más apropiado usar librerías como axios. */

////-------------------------------------PROMISE--------------------------------------------------////

const fetchPromesa = () => {
    return new Promise((resolve, reject) =>{
        axios.get("https://students-api.up.railway.app/movies")
        .then((response) =>{
            resolve(response.data);
        })
        .catch((error) =>{
            reject(error);
        });
    });
}


fetchPromesa()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("No se pudo hermano: ", error)
    })


////-------------------------------------------ASYNC/AWAIT---------------------------------------------------------------------

const fetchData = async () => {
    try{
        const response = await axios.get("https://students-api.up.railway.app/movies");
            console.log(response.data)
    }
    catch(error) {
        console.log("no se pudo hermano: ", error)
    }
}

/* */
