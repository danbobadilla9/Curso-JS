const producto = 'Monitor 20 pulgadas';

//Remplazar un texto de una cadena
console.log(producto);
console.log(producto.replace('pulgadas','"'));

//Cortar una parte de una cadeena de texto desde inicioo a final

console.log(producto.slice(5,10));
console.log(producto.slice(2,1));

//Alternativa a slice
console.log(producto.substring(5,10));
console.log(producto.substring(2,1));


const usuario = 'dan';
console.log(usuario.charAt(0));