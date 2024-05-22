import anteriorSlide from "./anteriorSlide";
import cerrarGaleria from "./cerrarGaleria";
import seleccionSlide from "./seleccionSlide";

const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (e)=> {
    
    const boton = e.target.closest('button');

    if(boton?.dataset?.accion === 'cerrar-galeria'){
        console.log("cerrar galeria")
         cerrarGaleria()
    }

    if(e.target.dataset.id){
        seleccionSlide(e)
    } 
    
    if(boton?.dataset?.accion === 'anterior-slide'){
        anteriorSlide(e)
    }
   
})