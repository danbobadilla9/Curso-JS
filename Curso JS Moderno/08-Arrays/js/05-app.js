const meses = ['Enero','Frebrero','Marzo','Abril'];

//Agregando al final del arreglo
meses.push('Nuevo mes');

console.table(meses);

const carrito = [];

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 100
}
//Agrega al final
carrito.push(producto);
carrito.push(producto2);
//Agrega al inicio 
carrito.unshift(producto3);
console.table(carrito);