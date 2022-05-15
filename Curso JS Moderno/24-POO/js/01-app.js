//Dos formas de crear la clase
class Cliente { //Class declaration
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} Saldo: ${this.saldo}`;
    }
    //Propiedades estaticas
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}
//Instanciando la nueva clase

const Cliente2 = class{ //Class Expresion
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} Saldo: ${this.saldo}`;
    }
}
const dan = new Cliente('dan',400);
console.log(dan);
console.log(dan.mostrarInformacion());


const israel = new Cliente2('israel',800);
console.log(israel);
console.log(israel.mostrarInformacion());



console.log(Cliente.bienvenida());

