//JSON es un medio de transporte 
const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json'; 
    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            return respuesta.json();
        })
        .then( json => {
            const {nombre,empresa} = json;
            console.log(nombre, empresa);
            mostrarHTML(json);
            console.log(json);
        })
}

function mostrarHTML({empresa, id ,nombre, trabajo}){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
}

