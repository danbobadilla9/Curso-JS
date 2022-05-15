const carrito = [
    {nombre: 'Monitor de 27 Pulgadas',precio:500},
    {nombre: 'Televisión',precio:100},
    {nombre: 'Tablet',precio:200},
    {nombre: 'Audifonos',precio:300}
];

const nuevoArreglo = carrito.forEach(p => {
    return `${p.nombre} - ${p.precio}`;
});

//Map es la misma sintaxis que un foreach
//La diferencia es que -map crea un arreglo nuevo

const nuevoArreglo2 =  carrito.map(p => {
    return `${p.nombre} - ${p.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);