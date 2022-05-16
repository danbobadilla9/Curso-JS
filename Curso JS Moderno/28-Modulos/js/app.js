import nuevaFuncion, { nombreCliente as clienteNombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

nuevaFuncion();

// console.log(nombreCliente);
console.log(clienteNombre);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente,ahorro));
console.log(tieneSaldo(ahorro));

const cliente = new Cliente('Israel',500);

console.log(cliente.mostrarInformacion());

//Importar empresa 


const empresa = new Empresa('Dan ',500,'Estudiante');
console.log(empresa);
console.log(empresa.mostrarInformacion());


