const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//Esta forma no modifica el arreglo original "Programacion Funcional"
const meses2 = ['Agosto',...meses];
console.log(meses2);
console.log(meses);

const nombre = {nombre: 'Disco Duro',precio:300};
const carrito2 = {...carrito,nombre};
console.log(carrito2);



