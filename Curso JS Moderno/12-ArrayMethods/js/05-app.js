const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// Find crea un nuevo arreglo en base a la condicion que le estamos pasando
//Solo retorna el primer valor encontrado
const resultado = carrito.find( producto => producto.nombre === 'Tablet' );

console.log(resultado);





