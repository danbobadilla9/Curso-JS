//Set crea una lista de valores sin duplicados, al manejar datos grandes es mas rapido,no tienen valores repetidos por lo que no se pueden agregar

const carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #1');

carrito.delete('Disco #2'); //Elimina el valor y retorna true o false para saber que si se elimino
// carrito.clear();//Limpia todos los elementos

//Los Sets son valores iterables
carrito.forEach( (producto,index,pertenece) => {
        console.log(producto);
        console.log(pertenece); //Regresa el set original
        console.log(index); //A diferencia de un array , este no contiene el indice ya que son los mismos valores del set
    }
    );



console.log(carrito.has('Camisa')); //Contiene un valor?
console.log(carrito.size); //Tamaño del Set
console.log(carrito);


//Uso de un set, Del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,50,10,40,20,30];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);