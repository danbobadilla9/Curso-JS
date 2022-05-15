"use strict";
//El modo estricto permite que cumplamos ciertas reglas

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true
}
//Toma un objeto y lo congela para que no pueda ser modificado
Object.freeze(producto);
//Saber si un objeto esta congelado o no
console.log(Object.isFrozen(producto));

producto.disponible = false;
producto.imagen ='Imagen.jpg';


console.log(producto);


