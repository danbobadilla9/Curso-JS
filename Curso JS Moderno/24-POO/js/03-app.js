class Cliente {
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} Saldo: ${this.saldo}`;
    }
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}
//Herencia
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    
    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }
}
const dan = new Cliente('dan',400);
const empresa = new Empresa('israel segundo',600,15461,'Estudiante');
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());