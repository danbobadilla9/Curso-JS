//Declaracion de Funcion 

sumar();
function sumar() {
    console.log(2 +2);
}


sumar2();
//Expresion de funcion
const sumar2 = function() {
    console.log(3+3);
}


//¿Cual es la diferencia?
//Cuando utilizamos la forma declarativa funciona llarla antes de inicializarla y cuando utilizamos la forma de Expresion no funciona llamarla antes de
//su inicializacion
//Esto se debe porque JS se ejecuta en dos vueltas Joistick, en la primer vuelta escanea y registra todas las funciones
// en la segunda vuelta es donde ejecutamos la funcion y esto es porque ya la tenemos registrada 


