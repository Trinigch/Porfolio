import data from './fotos';
//const fotos = data.fotos;

const {fotos} = data;


export default {
    
    categorias:[

    {id:'america', nombre:'America',numeroFotos:fotos['america'].length, imagenPortada: './img/america.jpg'},
    
    {id:'europa', nombre:'Europa 1',numeroFotos:fotos['europa'].length, imagenPortada: './img/europa.jpg'},
    
    {id:'africa', nombre:'Africa',numeroFotos:fotos['africa'].length, imagenPortada: './img/africa.jpg'},
    
    {id:'asia', nombre:'Asia',numeroFotos:fotos['asia'].length, imagenPortada: './img/asia.jpg'},
    
    {id:'oceania', nombre:'Oceania',numeroFotos:fotos['oceania'].length, imagenPortada: './img/oceania.jpg'},
    
    {id:'antartida', nombre:'Atartida',   numeroFotos:fotos['antartida'].length, imagenPortada: './img/antartida.jpg'},

    ],
    
};