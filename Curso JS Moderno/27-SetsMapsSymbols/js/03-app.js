//Maps son listas ordenadas en llave y valor (Cualqueir tipo de dato, tienen mejor performance que un objeto)

const cliente = new Map();
cliente.set('nombre','Dan');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);
cliente.set(true,true);
cliente.set([0],true);

console.log(cliente);
console.log(cliente.size);//Numero de elementos
console.log(cliente.has('nombre')); //Existen valores?

console.log(cliente.get('nombre'));//Obtener los valores

cliente.delete('saldo');

console.log(cliente.has('saldo'));

cliente.clear();
console.log(cliente);
//Inicializar un map con valores

const paciente = new Map([['nombre','paciente'],['cuarto','no definido']]);
paciente.set('dr','Dr Asignado');
paciente.set('nombre','Israel');

console.log(paciente);
//Son iterables
paciente.forEach( (datos,llave) => {
    console.log(llave+' =>',datos);
});