window.addEventListener('online',actualizarEstado);
window.addEventListener('offline',actualizarEstado);
//Saber si tenemos internet o no 
function actualizarEstado(){
    if(navigator.onLine){
        console.log('Si estas conectado');
    }else{
        console.log('No estas conectado ');
    }
}
console.log(navigator.onLine);