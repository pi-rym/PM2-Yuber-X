


let sliderInner = document.querySelector(".slider--inner");
let image = sliderInner.querySelectorAll("img");
let index = 0;

function adjustImageSize() {
    let sliderWidth = sliderInner.clientWidth; // Obtener el ancho del contenedor del slider
    images.forEach(image => {
        image.style.width = sliderWidth + "px"; // Establecer el ancho de la imagen igual al ancho del contenedor
        image.style.height = "auto"; // Restablecer la altura automáticamente para mantener la proporción
    });
}


let interval = setInterval(function(){
    let percentage = index * -100;
    
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    index++;
    if(index >= image.length - 1){
        index = 0;
    }

}, 5000);

