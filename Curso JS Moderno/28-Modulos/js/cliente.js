// //IFI funcion que se ejecuta inmediatamente 

// (function() {//Mantiene estas funciones en este archivo y no se va a mezclar 
//     console.log('Desde un IIFE');
//     const nombreCliente ='Dan';
//     window.nombreCliente ='Dan';

// })();//Este ultimo parentesis llama la función
// //El problema es que si queremos tener un codigo ordenado y separar funciones no se podra realizar 

export const nombreCliente ='Dan'; //Permite exportar la variable a otros archivos 
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro ){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('Si tiene saldo');
    }else{
        console.log('El cliente no tiene saldo');
    }
}

export class Cliente {
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion(){
    console.log('Este es el export default');
}