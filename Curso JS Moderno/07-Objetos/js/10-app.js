const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible : true
}
const medidas = {
    peso: '1kg',
    medida: '1m'
}
//Como unir dos objetos

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto,medidas);
console.log(resultado);

//Spread Operator o Rest Operador. Es el mas utilizado
const resultado2 = {...producto,...medidas};

console.log(resultado2);

