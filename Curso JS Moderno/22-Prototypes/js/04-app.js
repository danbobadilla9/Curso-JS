//Herencia
function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
//Creando prototypes: Deben de ser funciones anonimas ya que el arrow function busca en la ventana global y las anonimas en el objeto

Cliente.prototype.tipoCliente = function() {
    let tipo;
    console.log('Desde mi nuevo proto');
    console.log(this.saldo);
    if(this.saldo > 10000) {
        tipo = 'Gold';
    }else if(this.saldo > 5000) {
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;

}

function Persona(nombre,saldo,telefono) {
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;
}
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;
const dan = new Persona('Dan',5000,154625);
console.log(dan);
console.log(dan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(dan.mostrarTelefono());