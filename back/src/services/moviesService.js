module.exports = {
    getMovies: async () => {
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
          ];
        return tarjetasData;
    },
};
