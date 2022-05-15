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

//Eliminar ultimo elemento de un arreglo
// carrito.pop();

//Eliminar el promer elemento de un arrelgo
// carrito.shift();

//Eliminar elementos de enmedio splice(inicio,numeroElementos);
carrito.splice(1,1);

console.table(carrito);

