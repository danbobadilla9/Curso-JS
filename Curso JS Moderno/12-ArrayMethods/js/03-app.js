const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//.reduce sirve para reducir una cantidad de datos uniendolos
//El cero es el valor inicial que tendra la funcion 
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(resultado);
