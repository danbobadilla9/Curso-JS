//Obtener elementos del Local Storage
const nombre = localStorage.getItem('nombre');
console.log(nombre);
//Regresa null si el item no existe
const productoJSON = localStorage.getItem('producto');
console.log( productoJSON);
const productoOBJETO = JSON.parse(productoJSON);
console.log( productoOBJETO);

const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses));


