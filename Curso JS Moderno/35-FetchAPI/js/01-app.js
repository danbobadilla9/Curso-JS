const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const URL = 'data/datos.txt' 
    fetch(URL)//URL de donde vienen o hacia donde se envian, fetch utiliza promises pero ya las tiene integradas
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text();
        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        })
}

