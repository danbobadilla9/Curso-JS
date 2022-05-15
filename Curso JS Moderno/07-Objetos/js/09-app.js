"use strict"
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true
}
//La diferencia es que seal hace que no se puedan agregar ni eliminar propiedades pero si modificar
Object.seal(producto);
producto.nombre = 'Televisor 20 pulgadas';
producto.precio = 1000;

console.log(producto);
console.log(Object.isSealed(producto));