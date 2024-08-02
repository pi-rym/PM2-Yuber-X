const { crearPelicula } = require("./api");




document.getElementById('formulario-pelicula').addEventListener('submit', async (e) => {
    e.preventDefault();

    const movieData = {

        title: document.getElementById('title').value,
        year: document.getElementById('year').value,
        description: document.getElementById('description').value,
        director: document.getElementById('director').vaule,
        duration: document.getElementById('duration').value,
        genre: document.getElementById('genre').value.split(',').map(g => g.trim()),
        rate: parseFloat(document.getElementById('rate').value),
        poster: document.getElementById('poster').value
        
    }

    try {

        const result = await crearPelicula(movieData);
        console.log('Pelicula creada Exitosamente: ', result);

    } catch (error) {

        console.log('Hubo un error al crear la pelicula: ', error.message)

    }
})