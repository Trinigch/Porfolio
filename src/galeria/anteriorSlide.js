import { cargarImagen } from "./cargarImagen";
const galeria = document.getElementById('galeria');

const anteriorSlide = (e) => {
  console.log("anterior slide!!!")
    cargarImagen(galeria.dataset.id - 1)
    console.log("anterior slide")
}

export default anteriorSlide;