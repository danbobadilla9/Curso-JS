document.addEventListener('visibilitychange',() => {//Notifica cuando no estamos en la pagina o lo estamos 
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion para reproducir el video ');
    }else{
        console.log('Pausar el video ');
    }
});