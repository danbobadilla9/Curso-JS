//Simbols: son nuevos en ECS6 , permiten crear una propiedad unica


const sym = Symbol('1');
const sym2 = Symbol('1');
//Los Symbol nunca son iguales
if(sym === sym2){
    console.log('Son iguales');
}else{
    console.log('Son Diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar nombre y apelllido como llaves del objeto
persona[nombre] = 'Dan';
persona[apellido] = 'Bobadilla';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]);//Las propiedades que utilizan un symbol no son iterables

for (let i in persona){
    console.log(i);
}

//Definir una descipcion del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};
cliente[nombreCliente] = 'Jose';
console.log(cliente);
console.log(cliente[nombreCliente]);