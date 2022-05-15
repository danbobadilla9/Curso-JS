const carrito = [
    {nombre: 'Monitor de 27 Pulgadas',precio:500},
    {nombre: 'Televisión',precio:100},
    {nombre: 'Tablet',precio:200},
    {nombre: 'Audifonos',precio:300}
];
for(let i = 0; i<carrito.length;i++){
    console.log(`El Articulo es: ${carrito[i].nombre} y tiene un precio de: ${carrito[i].precio}`);
}
//For Each es una funcion
carrito.forEach(element => {
    console.log(`El Articulo es: ${element.nombre} y tiene un precio de: ${element.precio}`);
});


