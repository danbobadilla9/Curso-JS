const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//Todos los elementos de un arreglo deben de cumplir con la condicion para que regrese un true
const resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado);
const resultado2 = carrito.every( producto => producto.precio > 400 );
console.log(resultado2);


