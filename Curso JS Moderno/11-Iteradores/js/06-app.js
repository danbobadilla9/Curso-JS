//forEach y Map
//forEach se ejecuta una vez por cada elemento de un arreglo

const pendientes = ['Tarea','Comer','Proyecto','Estudiar JS'];

pendientes.forEach( (elemento,id) => {
    console.log(elemento,id);
} );

const carrito = [
    {nombre: 'Monitor 27 Pulgadas',precio: 500},
    {nombre: 'Television',precio: 100},
    {nombre: 'Tablet',precio: 200},
    {nombre: 'Audifonos',precio: 300}
];

const arregloNuevo = carrito.map( (producto) => {
    return producto.nombre;
} );
console.log(arregloNuevo);





