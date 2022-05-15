//WeakSet
//No tiene .size y no son iterables
const weakset = new WeakSet();//La diferencia es que en el otro le podemos pasar cualquier tipo de dato, en el weak set unicamente objetos

const cliente = {
    nombre:'dan',
    saldo: 100
}
const nombre = 'Israel';
const numero = 100;
weakset.add(cliente);
// weakset.add(nombre);
// weakset.add(numero);
console.log(weakset.has(cliente));
// console.log(weakset.has(cliente2));
console.log(weakset.has('nombre'));
// weakset.delete(cliente);

console.log(weakset);