function *crearGeneradodr() {//El * indica que es un generador
    yield 1; //Son los valores que se pueden iterar
    yield 'Dan';
    yield 3+3;
    yield true;
}

// const iterador = crearGeneradodr();
// console.log(iterador);
// // console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next()); //cada next recorre los yield
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);



//Generador para carrito de compras
function *generadorCarrito( carrito ){
    for(let i = 0; i< carrito.length ; i++){
        yield carrito[i];
    }
}
const carrito = ['Producto 1','Producto 2','Producto 3'];

const iterador = generadorCarrito(carrito);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());