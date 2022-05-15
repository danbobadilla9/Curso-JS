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

//Instanciarlo

const pedro = new Cliente('pedro',6000);
console.log(pedro);
// console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());



