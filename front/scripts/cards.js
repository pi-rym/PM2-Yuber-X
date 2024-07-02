/** Función para generar el HTML de la card **/
function generarCard(titulo, poster, genero) {
  return `
      <div class="contenido-card texto-mont modo-flex-card card-values">
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

/** Función para agregar las cards al contenedor en el HTML **/
function agregarCardsAlHTML(data) {
  const contenedor = $("#peli-link");
  data.forEach((tarjeta) => {
    const cardHTML = generarCard(tarjeta.title, tarjeta.poster, tarjeta.genre);
    contenedor.append(cardHTML);
  });
}


module.exports = agregarCardsAlHTML;