import datos from './../datos/fotos';
import { cargarImagen } from './cargarImagen';

const seleccionSlide = (e) =>{
 let ruta, nombre, descripcion;
 const id= parseInt(e.target.dataset.id);
 const galeria = document.getElementById('galeria');
 const categoriaActiva = galeria.dataset.categoria;
 console.log ("Seleccionaste el Slide", id,"y la categoria " , categoriaActiva);

 datos.fotos[categoriaActiva].forEach((foto)=>{
        if(foto.id === id){
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
 });
        cargarImagen(id, nombre, ruta, descripcion);
};

export default seleccionSlide;
