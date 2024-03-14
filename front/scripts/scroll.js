  /** Funcion de scroll smooth para el menu**/
  function scrollNav(){
    const enlaces = document.querySelectorAll('.navegador a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}

module.exports = scrollNav;