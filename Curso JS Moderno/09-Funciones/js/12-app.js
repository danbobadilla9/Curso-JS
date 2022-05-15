const carrito = [
    {nombre: 'Monitor de 27 Pulgadas',precio:500},
    {nombre: 'Televisión',precio:100},
    {nombre: 'Tablet',precio:200},
    {nombre: 'Audifonos',precio:300}
];
const nuevoArreglo = carrito.map( producto => 
    `${producto.nombre} - Precio: ${producto.precio}`
);

carrito.forEach( producto => 
    console.log( `${producto.nombre} - Precio: ${producto.precio}`)
);

console.log(nuevoArreglo);