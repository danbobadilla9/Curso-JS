// Variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners

eventListeners();
function eventListeners() {
    //Cuando el usuario agrega un nuevo tw
    formulario.addEventListener('submit',agregarTweet);
    //cuando el documento   esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets'))|| [];
        console.log(tweets);
        crearHTML();
    });
}



// Funciones

function agregarTweet(e ) {
    e.preventDefault();

    //TextArea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    //Validacion
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return; //Evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Añadir al arreglo de Tweets 
    tweets = [...tweets,tweetObj];
    
    //Crear el HTML
    crearHTML();
    
    //Reiniciar el formulario
    formulario.reset();

}

//Mostrar Mensaje de error

function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    //Elimina la alerta
    setTimeout( () => {
        mensajeError.remove();
    },1000);
}

//Muestra un listado de Tweets
function crearHTML() {
    LimpiarHTML();
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            //Funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };

            //Crear el HTML
            const li = document.createElement('li');
            //Añadir el texto
            li.innerText = tweet.tweet;
            //Asignar el boton
            li.appendChild(btnEliminar);
            //Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }

    //Almacenar los Tweets 
    sincronizarStorage();
}

//Agrega los Tweets acutales a Local Storage
function sincronizarStorage() {
    localStorage.setItem('tweets',JSON.stringify(tweets));
}
//Eliminar un Tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}
//Limpiar el HTML
function LimpiarHTML(){
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}