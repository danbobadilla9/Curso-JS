//Constructor del objeto
function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
//Instancia
const dan = new Cliente('dan',400);

function formatearCliente( cliente ) {
    const {nombre,saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}

function formatearEmpresa( empresa ) {
    const {nombre,saldo,categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece la categoria ${categoria}`
}

console.log(formatearCliente(dan));

function Empresa (nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const empre = new Empresa('Industrias',4000,'Programador');
console.log(formatearEmpresa(empre));






