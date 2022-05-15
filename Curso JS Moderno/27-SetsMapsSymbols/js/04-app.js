//WeakMaps 
//Sirven para mantener una serie de datos privados

const producto = {
    idProducto :10
}
//No se pueden iterar y no tiene .size SOLO ACEPTAN OBJETOS
const weakmap = new WeakMap();
weakmap.set(producto,'Monitor');

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));
console.log(weakmap);