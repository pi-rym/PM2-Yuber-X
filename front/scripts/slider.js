  /* Slider */
  let sliderInner = document.querySelector(".slider--inner");
  let images = sliderInner.querySelectorAll("img");
  let index = 0;
  /** Ajustando las imagenes (Procura que todos sean del mismo tamaño en resolucion) **/
  function adjustImageSize() {
      let sliderWidth = sliderInner.clientWidth; // Obtener el ancho del contenedor del slider
      images.forEach(image => {
          image.style.width = sliderWidth + "px"; // Establecer el ancho de la imagen igual al ancho del contenedor
          image.style.height = "auto"; // Restablecer la altura automáticamente para mantener la proporción
      });
  }
  adjustImageSize();
  /** Funcion Slider **/
  let interval = setInterval(function(){
      let percentage = index * -100;
      
      sliderInner.style.transform = "translateX(" + percentage + "%)";
      index++;
      if(index >= image.length - 1){
          index = 0;
      }

  }, 5000);


  module.exports = interval;