const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit',buscarClima);
});


function buscarClima(e ){
    e.preventDefault();
    // console.log('Buscando el clima ');
    //Validando los datos
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;
    // console.log(ciudad,pais);
    if(ciudad === '' || pais ===''){
        mostrarError('Ambos cambos son obligatorios');
        return;
    }
    //Consultando la API
    consultarAPI(ciudad,pais);
}


function mostrarError(mensaje){
    console.log(mensaje);
    //Crear una alerta
    const selector = document.querySelector('.bg-red-100');
    if(!selector){
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-md','mx-auto','text-center','mt-6');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;
        container.appendChild(alerta);
        //Eliminando la alerta
        setTimeout( () => {
            alerta.remove();
        },5000);
    }

}

function consultarAPI(ciudad,pais){
    const appId = '7b6e12827b4a325ba7991aa157eb3dc0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    //Muestra un Spinner 
    Spinner();
    // console.log(url);
    fetch(url)
        .then( respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML(); //Limpiando el HTML previo
            if(datos.cod === '404'){
                mostrarError('Ciudad No Encontrada');
                return;
            }
            //Imprime la respuesta en el HTML
            mostrarClima(datos);
        });
}

function mostrarClima(datos){
    const {main:{ temp, temp_max, temp_min}, name} = datos;
    
    const centigrados = kelvinACentrigrados(temp);
    const max = kelvinACentrigrados(temp_max);
    const min = kelvinACentrigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold','text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `
        ${centigrados} &#8451;
    `;
    actual.classList.add('font-bold','text-6xl');

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `
        Max: ${max} &#8451;
    `;
    tempMaxima.classList.add('text-xl');
    
    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `
        Min: ${min} &#8451;
    `;
    tempMinima.classList.add('text-xl');
    
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');

    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);
}

const  kelvinACentrigrados = grados => parseInt(grados-273.15);

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner(){
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-chase');
    divSpinner.innerHTML = `
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    `;
    resultado.appendChild(divSpinner);
}