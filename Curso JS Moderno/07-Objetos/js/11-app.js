const precio = 20;
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true,
    mostrarInfo: function() {
        console.log(`El producto: tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();