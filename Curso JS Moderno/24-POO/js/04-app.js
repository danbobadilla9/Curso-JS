class Cliente {
    #saldo; //Hace que la propiedad sea privada
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.#saldo = saldo; //Privado
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} Saldo: ${this.#saldo}`;
    }
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const dan = new Cliente('dan',200);
console.log(dan.nombre);
// console.log(dan.#saldo);
console.log(dan.mostrarInformacion());