const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true
}

const {nombre,precio,imagen = "aa"} = producto;
console.log(nombre);
console.log(precio);
console.log(imagen);