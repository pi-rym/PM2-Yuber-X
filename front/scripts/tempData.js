const tarjetasData = [
  {
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum ducimus natus aliquam maxime optio vel est veniam cupiditate neque eligendi, necessitatibus facilis accusamus consequatur similique.",
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum ducimus natus aliquam maxime optio vel est veniam cupiditate neque eligendi, necessitatibus facilis accusamus consequatur similique.",
      director: "George Lucas",
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      rate: 8.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum ducimus natus aliquam maxime optio vel est veniam cupiditate neque eligendi, necessitatibus facilis accusamus consequatur similique.",
      director: "Peter Jackson",
      duration: "2h 58min",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rate: 8.8,
      poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      title: "The Batman",
      year: 2022,
      description: "Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entra en conflicto con un asesino en serie conocido como -el Acertijo-.",
      director: "Matt Reeves",
      duration: "2h 55min",
      genre: ["Action", "Crime", "Drama"],
      rate: 7.8,
      poster:
        src = "/front/img/Cards/The Batman 1.jpeg",
    },
    {
      title: "Pacific Rim",
      year: 2013,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum ducimus natus aliquam maxime optio vel est veniam cupiditate neque eligendi, necessitatibus facilis accusamus consequatur similique.",
      director: "Guillermo del Toro",
      duration: "2h 14min",
      genre: ["Action", "Drama", "Sci-Fi"],
      rate: 6.9,
      poster:
        src = "/front/img/Cards/Pacific Rim.jpg",
    },
    {
      title: "The Crow",
      year: 1998,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum ducimus natus aliquam maxime optio vel est veniam cupiditate neque eligendi, necessitatibus facilis accusamus consequatur similique.",
      director: "Alex Proyas",
      duration: "1h 42min",
      genre: ["Action", "Suspense", "Drama"],
      rate: 7.5,
      poster:
        src="/front/img/Cards/The Crow.jpg",
    },
    {
      title: "Intelestellar",
      year: 2015,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum ducimus natus aliquam maxime optio vel est veniam cupiditate neque eligendi, necessitatibus facilis accusamus consequatur similique.",
      director: "Christopher Nolan",
      duration: "2h 49min",
      genre: ["Suspense", "Thriller", "Sci-Fi"],
      rate: 8.7,
      poster:
        src="/front/img/Cards/Intelestellar 1.jpg",
    },
    {
      title: "Blade Runner 2049",
      year: 2017,
      description: "En el año 2049 el oficial K, un nuevo replicante de la policía de Los Ángeles, emprende la búsqueda del replicante Rick Deckard, desaparecido 30 años antes. K piensa que en Deckard reside la clave que podría permitir salvar a la sociedad del caos en el que está inmersa.",
      director: "Denis Villeneuve",
      duration: "2h 43min",
      genre: ["Drama", "Action", "Thriller", "Sci-Fi"],
      rate: 8.0,
      poster:
        src="/front/img/Cards/Blade Runner 2049 - 2.jpg",
    },
];

/** Función para generar el HTML de la card **/
function generarCard(titulo, poster, genero) {
  return `
  <div class="contenido-card texto-mont modo-flex-card">
    <div class="card text-center mb-3" style="width: 18rem;">
      <div class="card-body">
        <img class="img-star" src="${poster}" alt="${titulo}">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${genero.join(" - ")}</p>
      </div>
    </div>
  </div>
  `;
}

/**  Función para agregar las cards al contenedor en el HTML  **/
function agregarCardsAlHTML() {
  const contenedor = document.getElementById("peli-link");
  tarjetasData.forEach((tarjeta) => {
    const cardHTML = generarCard(tarjeta.title, tarjeta.poster, tarjeta.genre);
    contenedor.innerHTML += cardHTML;
  });
}

document.addEventListener("DOMContentLoaded", agregarCardsAlHTML);


/*___________________________________________________________________________________________ */



/** Función para generar el HTML de la card **/
function generarCard(titulo, poster, genero) {
return `
  <div class="contenido-card texto-mont modo-flex-card">
    <div class="card text-center mb-3" style="width: 18rem;">
      <div class="card-body" onclick="mostrarDetalles('${titulo}', '${poster}', '${genero.join(" - ")}')">
        <img class="img-star" src="${poster}" alt="${titulo}">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${genero.join(" - ")}</p>
      </div>
    </div>
  </div>
`;
}

/** Función para mostrar los detalles de la película **/
function mostrarDetalles(titulo, poster, genero) {
// Actualiza los elementos en la card master con los datos de la película seleccionada
document.getElementById("poster").src = poster;
document.getElementById("titulo").textContent = titulo;
document.getElementById("descripcion").textContent = tarjetasData.find(tarjeta => tarjeta.title === titulo).description;
document.getElementById("genero").textContent = genero;
document.getElementById("director").textContent = tarjetasData.find(tarjeta => tarjeta.title === titulo).director + ', ';
document.getElementById("year").textContent = tarjetasData.find(tarjeta => tarjeta.title === titulo).year;
document.getElementById("duracion").textContent = tarjetasData.find(tarjeta => tarjeta.title === titulo).duration;
}

/** Función para agregar las cards al contenedor en el HTML  **/
function agregarCardsAlHTML() {
const contenedor = document.getElementById("peli-link");
tarjetasData.forEach((tarjeta) => {
  const cardHTML = generarCard(tarjeta.title, tarjeta.poster, tarjeta.genre);
  contenedor.innerHTML += cardHTML;
});
}

// Llama a la función para agregar las cards al cargar la página
agregarCardsAlHTML();


