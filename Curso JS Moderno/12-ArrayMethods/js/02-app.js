const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Enontrar el indice de abrill, -1 si no lo encuentra
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);
//Encontrar un indice de un arreglo de objetos
const indice2 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice2); 

