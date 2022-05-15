//Prototypes
//Estan relacionados con los objetos, todos los objetos tienen un prototype, son funciones exclusivas para ese objeto

const cliente = {
    nombre: 'Dan',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const dan = new Cliente('dan',400);
console.log(dan);

